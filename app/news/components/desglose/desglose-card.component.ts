import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "desglose-card",
    templateUrl: "news/components/desglose/desglose-card.component.html",
})
export class DesgloseCardComponent {
	@Input() data: News;
	constructor() {}
} 