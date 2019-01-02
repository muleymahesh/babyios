import { SharedModule } from './shared.module';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';
import { RestProvider } from '../providers/rest/rest';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HttpModule } from '@angular/http'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Ionic2RatingModule } from 'ionic2-rating';
import { RecentProvider } from '../providers/recent/recent';
import { FCM } from '@ionic-native/fcm';
import { AppRate } from '@ionic-native/app-rate';
import { SQLite } from '@ionic-native/sqlite';
import { RateProvider } from '../providers/rate/rate';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    SharedModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:false,
      backButtonText: '',
     
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [ 
    PROVIDERS, 
    AppRate,
    Push,
    // Keep this to enable Ionic's runtime error handling during development
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    FCM,
    SQLite,
    RecentProvider,DatePipe,
    RateProvider
    
  ]
})
export class AppModule {
  
}
