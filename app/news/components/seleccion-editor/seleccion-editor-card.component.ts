import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "seleccion-editor-card",
    templateUrl: "news/components/seleccion-editor/seleccion-editor-card.component.html",
})
export class SeleccionEditorCardComponent {
	@Input() data: News;
	constructor() {
	}
} 