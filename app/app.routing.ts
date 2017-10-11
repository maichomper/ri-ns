import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component"
import { ReporteComponent } from "./pages/reporte/reporte.component"

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "", component: ReporteComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }