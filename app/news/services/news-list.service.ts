import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { News } from "../news";
import { EspecialNews } from "../especial-news";

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
                        section, 
                        index+1
                    );
                });
                return posts;
            });
    }

    loadHomeEspecial(){
        let apiURL = this.baseURL + 'ri/v1/especial';
        return this.http.get(apiURL)
            .map( res => {
                var post = res.json();
                return new EspecialNews(
                    post.id, 
                    post.title,
                    "undefined" != typeof post.featured_media ? post.featured_media : "",
                    "especial",
                    post.posts
                );
            });
    }

    private getServiceURL( section: string ){
        switch( section ){
            case "ultimoMomento": return "ri/v1/ultimo-momento";
            case "layoutHome": return "ri/v1/layout-home";
            case "puntosIes": return "ri/v1/puntos-sobre-las-ies";
            case "opinion": return "ri/v1/columnas-opinion";
            case "salidaEmergencia": return "wp/v2/salida-emergencia?per_page=1";
            case "documentoIndigo": return "wp/v2/documento-indigo?per_page=1";
        }
    }

}
