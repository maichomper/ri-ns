import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";

//import { PagesRoutes } from './pages.routing';

import { PagesComponent } from './pages.component';
// import { ViewProspectComponent } from './view-prospect/view-prospect.component';

@NgModule({
  imports: [
    CommonModule,
    //RouterModule.forChild(PagesRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PagesModule {}
