import { Component, OnInit, Input } from "@angular/core";

import { EspecialNews } from "../../especial-news";

@Component({
    selector: "especial-card",
    templateUrl: "news/components/especial/especial-card.component.html",
})
export class EspecialCardComponent implements OnInit {
	@Input() data: EspecialNews;
	constructor() {}

	ngOnInit() {
		//console.dir(this.data);
		console.log('especial');
	}
}