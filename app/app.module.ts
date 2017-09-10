import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptHttpModule } from "nativescript-angular/http";

// Page Components
import { HomeComponent } from "./pages/home/home.component";
// News Components
import { HomeNewsComponent } from "./pages/home/home-news.component";
import { FeaturedNewsComponent } from "./news/components/featured/featured-news.component";
import { PuntosIesComponent } from "./news/components/puntos-ies/puntos-ies.component";
import { RegularNewsCardComponent } from "./news/components/regular/regular-news-card.component";
import { OpinionCardComponent } from "./news/components/opinion/opinion-card.component";
// Card Components
import { TemaTitleComponent } from "./news/components/card/tema-title.component";
import { NewsTitleComponent } from "./news/components/card/news-title.component";
import { AuthorTitleComponent } from "./news/components/card/author-title.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeNewsComponent,
        RegularNewsCardComponent,
        FeaturedNewsComponent,
        PuntosIesComponent,
        TemaTitleComponent,
        NewsTitleComponent,
        AuthorTitleComponent,
        OpinionCardComponent
    ],
    providers: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
