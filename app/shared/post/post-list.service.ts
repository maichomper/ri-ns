import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Post } from "./post";

  @Injectable()
export class PostListService {
    const 
  constructor(private http: Http) {}

  loadNoticiasLayoutHome() {
    let headers = new Headers();
    console.log('loading posts...');
    return this.http.get(Config.apiUrl + "ri/v1/layout-home")
    .map(res => res.json())
    .map(data => {
      let postList = [];
      data.forEach((post) => {
        postList.push(
            new Post(
                post.id, 
                post.title,
                post.tema,
                post.author.name,
                post.featured_media,
                "",
                post.excerpt,
                post.date
            )
        );
      });
      return postList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}