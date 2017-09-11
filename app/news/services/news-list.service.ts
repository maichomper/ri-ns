import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { News } from "../news";

@Injectable()
export class NewsListService {
    loading: boolean;
    baseURL: String;

    constructor(private http: Http) {
        this.loading = false;
        this.baseURL = "http://pcuervo.com/reporte-indigo/wp-json/";
    }

    loadHomeNews( section: string ){
        let apiURL = this.baseURL + this.getServiceURL( section );
        return this.http.get(apiURL)
            .map( res => {
                let posts = res.json().map( ( post, index ) => {
                    return new News(
                        post.id, 
                        post.title,
                        "undefined" != typeof post.tema ? post.tema : "",
                        "undefined" != typeof post.author ? post.author.name : "",
                        "undefined" != typeof post.featured_media ? post.featured_media : "",
                        "",
                        post.excerpt,
                        post.date,
                        "Lectura " + post.tiempo_estimado_lectura,
                        post.hierarchy = index == 0 ? "primaria" : "secundaria",
                        post.type,
                        section
                    );
                });
                return posts;
            });
    }

    private getServiceURL( section: string ){
        switch( section ){
            case "ultimoMomento": return "ri/v1/ultimo-momento";
            case "layoutHome": return "ri/v1/layout-home";
            case "puntosIes": return "ri/v1/puntos-sobre-las-ies";
            case "opinion": return "ri/v1/columnas-opinion"
        }
    }

}
