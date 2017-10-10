import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "latitud-card",
    templateUrl: "news/components/latitud/latitud-card.component.html",
})
export class LatitudCardComponent {
	@Input() data: News;
	constructor() {
	}
} 