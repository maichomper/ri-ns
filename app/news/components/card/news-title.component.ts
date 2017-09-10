import { Component, Input } from "@angular/core";

@Component({
    selector: "news-title",
    templateUrl: "news/components/card/news-title.component.html"
    // styleUrls:["news/components/card/news-title.component.css"]
})
export class NewsTitleComponent {
	@Input() title: String;
	constructor() {}
}