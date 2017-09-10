import { Component, Input } from "@angular/core";

@Component({
    selector: "author-title",
    templateUrl: "news/components/card/author-title.component.html"
    // styleUrls:["news/components/card/news-title.component.css"]
})
export class AuthorTitleComponent {
	@Input() author: String;
	constructor() {
		console.log( this.author );
	}
}