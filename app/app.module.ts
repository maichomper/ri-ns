import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptHttpModule } from "nativescript-angular/http";

// NativeScript UI
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
// Page Components
import { HomeComponent } from "./pages/home/home.component";
// News Components
import { HomeNewsComponent } from "./pages/home/home-news.component";
import { FeaturedNewsComponent } from "./news/components/featured/featured-news.component";
import { PuntosIesComponent } from "./news/components/puntos-ies/puntos-ies.component";
import { RegularNewsCardComponent } from "./news/components/regular/regular-news-card.component";
import { OpinionCardComponent } from "./news/components/opinion/opinion-card.component";
import { SalidaEmergenciaCardComponent } from "./news/components/salida-emergencia/salida-emergencia-card.component";
import { DocumentoIndigoCardComponent } from "./news/components/documento-indigo/documento-indigo-card.component";
import { EspecialCardComponent } from "./news/components/especial/especial-card.component";
// Card Components
import { TemaTitleComponent } from "./news/components/card/tema-title.component";
import { NewsTitleComponent } from "./news/components/card/news-title.component";
import { AuthorTitleComponent } from "./news/components/card/author-title.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
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
        OpinionCardComponent,
        SalidaEmergenciaCardComponent,
        DocumentoIndigoCardComponent,
        EspecialCardComponent
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
