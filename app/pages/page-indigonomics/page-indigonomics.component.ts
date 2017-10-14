import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";

@Component({    
    selector: "page-indigonomics",
    templateUrl: "pages/page-indigonomics/page-indigonomics.component.html",
    providers: [NewsListService]
})

/**
 * Contains properties of a Person.
 */
export class PageIndigonomicsComponent implements OnInit {
    postList: Array<News> = [];
    isLoading: boolean = false;
    isPrimariaLoaded: boolean = false;
    currentPage: number = 1;
    newsPerPage: number = 20;

    constructor(private newsListService: NewsListService) {}

    ngOnInit() {
        this.isLoading = true;
        this.newsListService.loadArchive( 'indigonomicsArchive', this.newsPerPage, 0 ).subscribe( (data) => {
            this.isLoading = false;
            this.postList = data;
        });
    }

    public templateSelector = (item: News, index: number, items: News[]) => {
        if( ! this.isPrimariaLoaded ) {
            this.isPrimariaLoaded = true;
            return "primaria";
        }
        return "secundaria";
    }

    loadMoreItems() {
        if( ! this.isLoading ){
            let offset = this.currentPage * this.newsPerPage;
            this.isLoading = true;

            this.newsListService.loadArchive( 'indigonomicsArchive', this.newsPerPage, offset ).subscribe( (data) => {
                data.map( ( post ) => {
                    this.postList.push( post );
                    
                });
                this.isLoading = false;
                this.currentPage += 1;
            });
        }
    }

}