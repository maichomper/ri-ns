import { Component, Input } from "@angular/core";

@Component({
    selector: "tema-title",
    templateUrl: "news/components/card/tema-title.component.html",
    styleUrls:["news/components/card/tema-title.component.css"]
})
export class TemaTitleComponent {
	@Input() tema: String;
	constructor() {}
}