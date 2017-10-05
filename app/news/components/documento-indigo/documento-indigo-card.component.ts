import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({ 
    selector: "documento-indigo-card",
    templateUrl: "news/components/documento-indigo/documento-indigo-card.component.html",
})
export class DocumentoIndigoCardComponent {
	@Input() data: News;
	@Input() index: number;
	constructor() {}
}