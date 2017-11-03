import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";
import { LoaderService } from "../../util/loader.service";

@Component({	
    selector: "page-opinion",
    templateUrl: "pages/page-opinion/page-opinion.component.html",
    providers: [
    	NewsListService,
    	LoaderService
    ] 
})

export class PageOpinionComponent implements OnInit {
	postList: Array<News> = [];
	isLoading: boolean = false;
	opinionSections: Array<string> = [];

	constructor(
		private newsListService: NewsListService,
		private loaderService: LoaderService
	) {
		this.opinionSections.push('redesOpinion');
		this.opinionSections.push('columnas');
	}

	ngOnInit() {
		this.isLoading = true;
		this.loaderService.show('Cargando Opinión...');
		this.newsListService.loadOpinionNews( 'puntosIes' ).subscribe( (data) => {
			this.isLoading = false;
			this.postList = data;
			this.loaderService.hide();
		});
	}

	public templateSelector = (item: News, index: number, items: News[]) => {
		if( "primaria" === item.hierarchy && "layoutHome" === item.section ) {
			return "primaria";
		}
		if( "secundaria" === item.hierarchy && "layoutHome" === item.section  ) {
			return "secundaria";
		}
		return item.section;
    }

    loadMoreItems() {
    	if( ! this.isLoading && this.opinionSections.length ){
    		this.isLoading = true;
    		this.newsListService.loadOpinionNews( this.opinionSections[0] ).subscribe( (data) => {
	    		data.map( ( post ) => {
	    			this.postList.push( post );
	    			
	    		});
	    		this.opinionSections.splice(0,1);
	    		this.loaderService.hide();
				this.isLoading = false;
			});
    	}

    	if( ! this.opinionSections.length ){
    		console.log('no more services to load ma boi');
    	}
    }

}