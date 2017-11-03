import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { NativeScriptHttpModule } from "nativescript-angular/http";

import { MenuComponent } from "./pages/menu/menu.component"
// NativeScript UI
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
// Page Components
import { HeaderComponent } from "./pages/navigation/header.component";
import { HomePageComponent } from "./pages/home-page/home-page.component"; 
import { ReportePageComponent } from "./pages/reporte-page/reporte-page.component"; 
import { LatitudPageComponent } from "./pages/latitud-page/latitud-page.component"; 
import { PageIndigonomicsComponent } from "./pages/page-indigonomics/page-indigonomics.component"; 
import { PageOpinionComponent } from "./pages/page-opinion/page-opinion.component"; 


// News Components
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
import { UltimoMomentoCardComponent } from "./news/components/ultimo-momento/ultimo-momento-card.component";
import { ColumnaCardComponent } from "./news/components/columna/columna-card.component";
// Card Components
import { TemaTitleComponent } from "./news/components/card/tema-title.component";
import { NewsTitleComponent } from "./news/components/card/news-title.component";
import { AuthorTitleComponent } from "./news/components/card/author-title.component";

import { SharedModule } from "./shared/shared.module";

import { PubSubService } from "./shared/services/pub-sub.service"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        ReportePageComponent,
        LatitudPageComponent,
        PageIndigonomicsComponent,
        PageOpinionComponent,
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
        DesgloseCardComponent,
        UltimoMomentoCardComponent,
        MenuComponent,
        ColumnaCardComponent
    ],
    providers: [
        PubSubService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
