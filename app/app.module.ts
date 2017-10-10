import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptHttpModule } from "nativescript-angular/http";

// NativeScript UI
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
// Page Components
import { HeaderComponent } from "./pages/navigation/header.component";
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
import { IndigoTvCardComponent } from "./news/components/indigo-tv/indigo-tv-card.component";
import { ReporteCardComponent } from "./news/components/reporte/reporte-card.component";
import { LatitudCardComponent } from "./news/components/latitud/latitud-card.component";
import { IndigonomicsCardComponent } from "./news/components/indigonomics/indigonomics-card.component";
import { PiensaCardComponent } from "./news/components/piensa/piensa-card.component";
import { FanCardComponent } from "./news/components/fan/fan-card.component";
import { SeleccionEditorCardComponent } from "./news/components/seleccion-editor/seleccion-editor-card.component";
import { LoMasVistoCardComponent } from "./news/components/lo-mas-visto/lo-mas-visto-card.component";
import { DesgloseCardComponent } from "./news/components/desglose/desglose-card.component";
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
        HeaderComponent,
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
        EspecialCardComponent,
        IndigoTvCardComponent,
        ReporteCardComponent,
        LatitudCardComponent,
        IndigonomicsCardComponent,
        PiensaCardComponent,
        FanCardComponent,
        SeleccionEditorCardComponent,
        LoMasVistoCardComponent,
        DesgloseCardComponent
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
