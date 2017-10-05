import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "opinion-card",
    templateUrl: "news/components/opinion/opinion-card.component.html",
})
export class OpinionCardComponent {
	@Input() data: News;
	@Input() index: number;
	constructor() {
		//console.log( this.data.position );
	}
}