import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

// redux pattern stuff
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/reducers/user.reducer';


import { AboutPage } from '../pages/about/about';
import { SearchPage } from '../pages/search/search';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user.service';
import { UserInfoPage } from '../pages/user-info/user-info';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SearchPage,
    FeedPage,
    TabsPage,
    UserInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({ reducer })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SearchPage,
    FeedPage,
    TabsPage,
    UserInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
