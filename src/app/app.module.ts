import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { MediaProvider } from '../providers/media/media';
import { TabsPageModule} from "../pages/tabs/tabs.module";
import { LoginRegisterPageModule } from "../pages/login-register/login-register.module";
import { LogoutPageModule } from "../pages/logout/logout.module";
import { TabsPage } from "../pages/tabs/tabs";
import { Validators } from "@angular/forms";
import { PipesModule } from "../pipes/pipes.module";


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HomePageModule,
    HttpClientModule,
    TabsPageModule,
    LoginRegisterPageModule,
    LogoutPageModule,
    PipesModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider,
    Validators
  ]
})
export class AppModule {}
