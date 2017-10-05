import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({ 
    selector: "salida-emergencia-card",
    templateUrl: "news/components/salida-emergencia/salida-emergencia-card.component.html",
})
export class SalidaEmergenciaCardComponent {
	@Input() data: News;
	@Input() index: number;
	constructor() {}
}