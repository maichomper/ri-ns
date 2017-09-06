import { Component, OnInit, ViewChild } from "@angular/core";

import { Post } from "../../shared/post/post";
import { PostListService } from "../../shared/post/post-list.service";

@Component({
    selector: "notas-principales",
    templateUrl: "pages/home/notas-principales.component.html",
    providers: [PostListService]
})
export class NotasPrincipalesComponent implements OnInit {
	postList: Array<Post> = [];
	post = "";
	isLoading = false;

	constructor(private postListService: PostListService) {}

	ngOnInit() {
		this.isLoading = true;
		this.postListService.loadNoticiasLayoutHome()
		.subscribe(loadedPosts => {
			loadedPosts.forEach((postObject) => {
				this.postList.unshift(postObject);
			});
			this.isLoading = false;
		});
	}

	public templateSelector = (item: Post, index: number, items: Post[]) => {
		console.log( items.length );
		if( 0 == index ) {
			//console.log('we ever here?');
			return 'principal';
		}

        return 'main';
    }

}