import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MenuComponent } from "./pages/menu/menu.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ReportePageComponent } from "./pages/reporte-page/reporte-page.component";
import { LatitudPageComponent } from "./pages/latitud-page/latitud-page.component";
import { PageIndigonomicsComponent } from "./pages/page-indigonomics/page-indigonomics.component";
import { PageOpinionComponent } from "./pages/page-opinion/page-opinion.component";

const routes: Routes = [
    { path: "", redirectTo: "/menu/home", pathMatch: "full" },
    {
      	path: "menu",
      	component: MenuComponent,
		children: [
			{
		        path: "home",
		        component: HomePageComponent
		        //loadChildren: './pages/home-page/home-page.module#HomePageModule'
		    },
		    {
		        path: "reporte",
		        component: ReportePageComponent
		    },
		    {
		        path: "latitud",
		        component: LatitudPageComponent
		    },
		    {
		        path: "indigonomics",
		        component: PageIndigonomicsComponent
		    },
		    {
		        path: "opinion",
		        component: PageOpinionComponent
		    }
		]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }