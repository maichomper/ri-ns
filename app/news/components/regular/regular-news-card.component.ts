import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "regular-news-card",
    templateUrl: "news/components/regular/regular-news-card.component.html",
})
export class RegularNewsCardComponent {
	@Input() data: News;
	@Input() index: number;
	constructor() {}
}