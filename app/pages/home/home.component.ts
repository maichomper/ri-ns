import { Component } from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
    selector: "home",
    templateUrl: "pages/home/home.component.html",
})
export class HomeComponent {
    constructor() { }
}