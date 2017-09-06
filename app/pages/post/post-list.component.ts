import { Component, OnInit, ViewChild } from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

import { Post } from "../../shared/post/post";
import { PostListService } from "../../shared/post/post-list.service";

@Component({
  selector: "post-list",
  templateUrl: "pages/post/post.html",
  styleUrls: ["pages/post/post-common.css"],
  providers: [PostListService]
})
export class PostListComponent implements OnInit {
  postList: Array<Post> = [];
  post = "";
  isLoading = false;
  listLoaded = false;

  constructor(private postListService: PostListService) {}

  ngOnInit() {
  	this.isLoading = true;
    this.postListService.loadNoticiasLayoutHome()
    .subscribe(loadedPosts => {
      loadedPosts.forEach((postObject) => {
        this.postList.unshift(postObject);
      });
      console.log( this.postList[0].excerpt );
      this.isLoading = false;
      this.listLoaded = true;
    });
  }
}