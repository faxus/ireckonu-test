import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { APP_PAGES } from "../pages/index";
import { UI_COMPONENTS } from "../components/index";
import { EventService, EventClient } from "../providers/index";

@NgModule({
	declarations: [
		MyApp,
		APP_PAGES,
		UI_COMPONENTS
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		APP_PAGES
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		EventService,
		EventClient
	]
})
export class AppModule { }
