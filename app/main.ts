// this import should be first in order to load some required settings (like globals and reflect-metadata)

import { platformNativeScriptDynamic, NativeScriptModule} from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import {NS_HTTP_PROVIDERS} from "nativescript-angular/http";
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [NS_HTTP_PROVIDERS]
})
class AppComponentModule {}
platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
