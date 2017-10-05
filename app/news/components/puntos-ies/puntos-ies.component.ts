import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "puntos-ies",
    templateUrl: "news/components/puntos-ies/puntos-ies.component.html",
    //template: `<Label [text]="Hola"></Label>`
})
export class PuntosIesComponent {
	@Input() data: News;
	@Input() index: number;
	constructor() {}
}