import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";
import { LoaderService } from "../../util/loader.service";

@Component({    
    selector: "page-indigonomics",
    templateUrl: "pages/page-indigonomics/page-indigonomics.component.html",
    providers: [NewsListService, LoaderService]
})

/**
 * Contains properties of a Person.
 */
export class PageIndigonomicsComponent implements OnInit {
    postList: Array<News> = [];
    isLoading: boolean = false;
    hasPrimariaLoaded: boolean = false;
    currentPage: number = 1;
    newsPerPage: number = 3;

    constructor(
        private newsListService: NewsListService,
        private loaderService: LoaderService
    ) {}

    ngOnInit() {
        this.loaderService.show('Cargando Indigonómics');
        this.isLoading = true;
        this.newsListService.loadArchive( 'indigonomicsArchive', this.newsPerPage, 0 ).subscribe( (data) => {
            this.isLoading = false;
            this.postList = data;
            this.loaderService.hide();
        });
    }

    public templateSelector = (item: News, index: number, items: News[]) => {
        if( item.position == 1 && this.hasPrimariaLoaded === false  ) {
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

            this.newsListService.loadArchive( 'indigonomicsArchive', this.newsPerPage, offset ).subscribe( (data) => {
                data.map( ( post ) => {
                    this.postList.push( post );
                    
                });
                this.isLoading = false;
                this.currentPage += 1;
                this.loaderService.hide();
            });
        }
    }

}