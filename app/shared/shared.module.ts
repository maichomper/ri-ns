import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { VideoModalComponent } from "./components/video-modal/video-modal.component";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonModule
    ],
    declarations: [
        VideoModalComponent
    ],
    exports: [
        VideoModalComponent
    ],
    providers: [
    ]
})
export class SharedModule { }