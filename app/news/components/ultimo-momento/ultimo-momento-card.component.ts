import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "ultimo-momento-card",
    templateUrl: "news/components/ultimo-momento/ultimo-momento-card.component.html",
})
export class UltimoMomentoCardComponent {
	@Input() data: News;
	constructor() {}
} 