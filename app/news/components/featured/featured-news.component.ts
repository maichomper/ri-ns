import { Component, OnInit, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "featured-news",
    templateUrl: "news/components/featured/featured-news.component.html",
})
export class FeaturedNewsComponent implements OnInit {
	@Input() data: News;
	constructor() {}

	ngOnInit() {}
}