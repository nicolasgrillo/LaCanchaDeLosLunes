import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FutLunesApp } from './app.component';
import { HomePage, ListPage, LoginPage, UserPage, AdminPage, ProfilePage} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider, PlayerServiceProvider } from '../providers/providers';
import { LoginPageModule, HomePageModule, AdminPageModule, UserPageModule, ProfilePageModule } from '../pages/modules';
import { MatchServiceProvider } from '../providers/match-service/match-service';

@NgModule({
  declarations: [
    FutLunesApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(FutLunesApp),
    LoginPageModule,
    HomePageModule,
    AdminPageModule,
    UserPageModule,
    ProfilePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FutLunesApp,
    HomePage,
    ListPage,
    LoginPage,
    AdminPage,
    UserPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    PlayerServiceProvider,
    MatchServiceProvider
  ]
})
export class AppModule {}
