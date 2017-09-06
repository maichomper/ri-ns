import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component"

const routes: Routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "", component: HomeComponent }
    // { path: "items", component: ItemsComponent },
    // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }