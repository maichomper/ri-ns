import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "fan-card",
    templateUrl: "news/components/fan/fan-card.component.html",
})
export class FanCardComponent {
	@Input() data: News;
	constructor() {
	}
} 