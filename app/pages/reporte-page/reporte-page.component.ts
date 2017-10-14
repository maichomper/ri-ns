import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";

@Component({    
    selector: "reporte-page",
    templateUrl: "pages/reporte-page/reporte-page.component.html",
    providers: [NewsListService]
})

/**
 * Contains properties of a Person.
 */
export class ReportePageComponent implements OnInit {
    postList: Array<News> = [];
    isLoading: boolean = false;
    isPrimariaLoaded: boolean = false;
    currentPage: number = 1;
    newsPerPage: number = 20;

    constructor(private newsListService: NewsListService) {}

    ngOnInit() {
        console.log('reporte');
        this.isLoading = true;
        this.newsListService.loadArchive( 'reporteArchive', this.newsPerPage, 0 ).subscribe( (data) => {
            this.isLoading = false;
            this.postList = data;
        });
    }

    public templateSelector = (item: News, index: number, items: News[]) => {
        if( item.position == 1 && this.isPrimariaLoaded === false ) {
            return "primaria";
        }
        return "secundaria";
    }

    loadMoreItems() {
        if( ! this.isLoading ){
            let offset = this.currentPage * this.newsPerPage;
            this.isLoading = true;

            this.newsListService.loadArchive( 'reporteArchive', this.newsPerPage, offset ).subscribe( (data) => {
                data.map( ( post ) => this.postList.push( post ) );
                this.isLoading = false;
                this.currentPage += 1;
            });
        }
    }

}