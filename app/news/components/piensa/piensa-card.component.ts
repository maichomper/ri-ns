import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "piensa-card",
    templateUrl: "news/components/piensa/piensa-card.component.html",
})
export class PiensaCardComponent {
	@Input() data: News;
	constructor() {
	}
} 