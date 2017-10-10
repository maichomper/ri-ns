import { Component, Input } from "@angular/core";

import { News } from "../../news";

@Component({
    selector: "lo-mas-visto-card",
    templateUrl: "news/components/lo-mas-visto/lo-mas-visto-card.component.html",
})
export class LoMasVistoCardComponent {
	@Input() data: News;
	constructor() {
	}

	getBackgroundOpacity( position ){
		switch ( position ) {
			case 1:
				return 1;
			case 2:
				return 0.8;
			case 3: 
				return 0.6
			case 4: 
				return 0.4
			default:
				return 0.2;
		}
	}
} 