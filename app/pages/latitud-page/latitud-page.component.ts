import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";

@Component({    
    selector: "latitud-page",
    templateUrl: "pages/latitud-page/latitud-page.component.html",
    providers: [NewsListService]
})

/**
 * Contains properties of a Person.
 */
export class LatitudPageComponent implements OnInit {
    postList: Array<News> = [];
    isLoading: boolean = false;
    isPrimariaLoaded: boolean = false;
    currentPage: number = 1;
    newsPerPage: number = 20;

    constructor(private newsListService: NewsListService) {}

    ngOnInit() {
        console.log('latitud');
        this.isLoading = true;
        this.newsListService.loadArchive( 'latitudArchive', this.newsPerPage, 0 ).subscribe( (data) => {
            this.isLoading = false;
            this.postList = data;
        });
    }

    public templateSelector = (item: News, index: number, items: News[]) => {
        if( item.position == 1 && this.isPrimariaLoaded === false  ) {
            return "primaria";
        }
        return "secundaria";
    }

    loadMoreItems() {
        if( ! this.isLoading ){
            let offset = this.currentPage * this.newsPerPage;
            this.isLoading = true;

            this.newsListService.loadArchive( 'latitudArchive', this.newsPerPage, offset ).subscribe( (data) => {
                data.map( ( post ) => {
                    console.log('more posts');
                    this.postList.push( post );
                    
                });
                this.isLoading = false;
                this.currentPage += 1;
            });
        }
    }

}