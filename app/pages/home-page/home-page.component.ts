import { Component, OnInit, ViewChild } from "@angular/core";

import { News } from "../../news/news";
import { NewsListService } from "../../news/services/news-list.service";
import { LoaderService } from "../../util/loader.service";

@Component({	
    selector: "home-page",
    templateUrl: "pages/home-page/home-page.component.html",
    providers: [
    	NewsListService,
    	LoaderService
    ] 
})

export class HomePageComponent implements OnInit {
	postList: Array<News> = [];
	isLoading: boolean = false;
	homeSections: Array<string> = [];

	constructor(
		private newsListService: NewsListService,
		private loaderService: LoaderService
	) {
		//this.homeSections.push('layoutHome');
		this.homeSections.push('piensa');

		this.homeSections.push('puntosIes');
		this.homeSections.push('opinion');
		this.homeSections.push('salidaEmergencia');
		this.homeSections.push('documentoIndigo');
		this.homeSections.push('especial');
		this.homeSections.push('indigoTv');
		this.homeSections.push('seleccionEditor');
		this.homeSections.push('reporte');
		this.homeSections.push('latitud');
		this.homeSections.push('loMasVisto');
		this.homeSections.push('indigonomics');
		this.homeSections.push('desglose');
		this.homeSections.push('piensa');
		this.homeSections.push('fan');
	}

	ngOnInit() {
		this.isLoading = true;
		this.loaderService.show('Cargando noticias...');
		//this.newsListService.loadHomeNews( 'ultimoMomento' ).subscribe( (data) => {
		this.newsListService.loadHomeNews( 'layoutHome' ).subscribe( (data) => {
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
    	if( ! this.isLoading && this.homeSections.length ){
    		this.loaderService.show('Cargando más noticias...');
    		this.isLoading = true;
    		if( 'especial' == this.homeSections[0] ){
    			this.newsListService.loadHomeEspecial().subscribe( (post) => {
		    		this.postList.push( post );
		    		this.homeSections.splice(0,1);
					this.isLoading = false; 
					this.loaderService.hide();
				});
				return;
    		}
    // 		if( 'loMasVisto' == this.homeSections[0] ){
    // 			this.newsListService.loadHomeLoMasVisto().subscribe( (post) => {
		  //   		this.postList.push( post );
		  //   		this.homeSections.splice(0,1);
				// 	this.isLoading = false;
				// });
				// return;
    // 		}
    		this.newsListService.loadHomeNews( this.homeSections[0] ).subscribe( (data) => {
	    		data.map( ( post ) => {
	    			this.postList.push( post );
	    			
	    		});
	    		this.homeSections.splice(0,1);
	    		this.loaderService.hide();
				this.isLoading = false;
			});
    	}

    	if( ! this.homeSections.length ){
    		console.log('no more services to load ma boi');
    	}
    }

}