import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";
import { LoaderService } from "../../util/loader.service";

@Component({    
    selector: "reporte-page",
    templateUrl: "pages/reporte-page/reporte-page.component.html",
    providers: [NewsListService, LoaderService]
})

/**
 * Contains properties of a Person.
 */
export class ReportePageComponent implements OnInit {
    postList: Array<News> = [];
    isLoading: boolean = false;
    hasPrimariaLoaded: boolean = false;
    currentPage: number = 1;
    newsPerPage: number = 20;

    constructor(
        private newsListService: NewsListService,
        private loaderService: LoaderService
    ) {}

    ngOnInit() {
        this.isLoading = true;
        this.loaderService.show('Cargando Reporte');
        this.newsListService.loadArchive( 'reporteArchive', this.newsPerPage, 0 ).subscribe( (data) => {
            this.isLoading = false;
            this.postList = data;
            this.loaderService.hide();
        });
    }

    public templateSelector = (item: News, index: number, items: News[]) => {
        if( item.position == 1 && this.hasPrimariaLoaded === false ) {
            return "primaria";
        }
        return "secundaria";
    }

    loadMoreItems() {
        if( ! this.isLoading ){
            this.loaderService.show('Cargando más noticias...');
            this.isLoading = true;
            let offset = this.currentPage * this.newsPerPage;
            
            if( 1 === this.currentPage ) this.hasPrimariaLoaded = true;
            
            this.newsListService.loadArchive( 'reporteArchive', this.newsPerPage, offset ).subscribe( (data) => {
                data.map( ( post ) => this.postList.push( post ) );
                this.isLoading = false;
                this.currentPage += 1;
                this.loaderService.hide();
            });
        }
    }

}