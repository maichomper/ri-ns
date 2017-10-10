import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "reporte-card",
    templateUrl: "news/components/reporte/reporte-card.component.html",
})
export class ReporteCardComponent {
	@Input() data: News;
	constructor() {}
} 