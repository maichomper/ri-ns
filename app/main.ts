import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { initializeOnAngular as initializeOnAngularImageCache } from "nativescript-image-cache";
import * as application from "tns-core-modules/application";

import { AppModule } from "./app.module";

application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    initializeOnAngularImageCache();
});
platformNativeScriptDynamic().bootstrapModule(AppModule);
