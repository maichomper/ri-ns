import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RouterModule } from '@angular/router';

import { HomePageRoutes } from './home-page.routing';
import { HomePageComponent } from "./home-page.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomePageComponent,
    RouterModule.forChild(HomePageRoutes),
  ],
  declarations: [
    HomePageComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomePageModule { }