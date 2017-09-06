import { Component, OnInit, Input } from "@angular/core";

import { Post } from "../../shared/post/post";

@Component({
    selector: "noticia",
    templateUrl: "pages/home/noticia.component.html",
})
export class NoticiaComponent implements OnInit {
	@Input() data: Post;
	@Input() index: number;
	constructor() {}

	ngOnInit() {
		console.log(this.index);
		console.log('cargando: ' + this.data.title);
	}
}