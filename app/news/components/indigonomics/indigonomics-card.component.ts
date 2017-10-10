import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "indigonomics-card",
    templateUrl: "news/components/indigonomics/indigonomics-card.component.html",
})
export class IndigonomicsCardComponent {
	@Input() data: News;
	constructor() {}
} 