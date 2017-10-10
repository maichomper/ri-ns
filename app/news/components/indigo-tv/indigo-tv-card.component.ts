import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({ 
    selector: "indigo-tv-card", 
    templateUrl: "news/components/indigo-tv/indigo-tv-card.component.html",
})
export class IndigoTvCardComponent {
	@Input() data: News;
	constructor() {}
}