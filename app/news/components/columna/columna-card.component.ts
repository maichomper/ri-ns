import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "columna-card",
    templateUrl: "news/components/columna/columna-card.component.html",
})
export class ColumnaCardComponent {
	@Input() data: News;
	@Input() index: number;
	constructor() {
		//console.log( this.data.position );
	}
}