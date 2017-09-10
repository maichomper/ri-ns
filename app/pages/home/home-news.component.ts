import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";

@Component({	
    selector: "home-news",
    templateUrl: "pages/home/home-news.component.html",
    providers: [NewsListService]
})
/**
 * Contains properties of a Person.
 */
export class HomeNewsComponent implements OnInit {
	postList: Array<News> = [];
	isLoading: boolean = false;
	homeSections: Array<string> = [];

	constructor(private newsListService: NewsListService) {
		this.homeSections.push('puntosIes');
		this.homeSections.push('opinion');
	}

	ngOnInit() {
		this.isLoading = true;
		this.newsListService.loadHomeNews( 'layoutHome' ).subscribe( (data) => {
			this.isLoading = false;
			this.postList = data;
		});
	}

	public templateSelector = (item: News, index: number, items: News[]) => {
		if( "primaria" === item.hierarchy && "layoutHome" === item.section ) {
			return "primaria";
		}
		if( "secundaria" === item.hierarchy && "layoutHome" === item.section  ) {
			return "secundaria";
		}
		if( "puntosIes" === item.section ){
			return "puntosIes";
		}
		if( "opinion" === item.section ){
			return "opinion";
		}
		return "secundaria";
    }

    loadMoreItems() {
    	if( ! this.isLoading && this.homeSections.length ){
    		this.isLoading = true;
    		this.newsListService.loadHomeNews( this.homeSections[0] ).subscribe( (data) => {
	    		data.map( ( post ) => {
	    			this.postList.push( post );
	    		});
	    		this.homeSections.splice(0,1);
				this.isLoading = false;
			});
    	}

    	if( ! this.homeSections.length ){
    		console.log('no more services to load ma boi');
    	}
    }

}