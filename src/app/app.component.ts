
import { Component,ViewChild } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { TranslateService } from '@ngx-translate/core';
import { Platform /*,Config*/,Nav ,NavController, NavParams  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WooCommerceProvider, NotifProvider, SettingsProvider ,UserProvider} from '../providers/providers';
import { App } from './app.global';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FCM } from '@ionic-native/fcm';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { AppRate } from '@ionic-native/app-rate';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = 'TabsPage';
  
@ViewChild(Nav) nav: Nav;

pages : Array<{
title: string,
Component:any}>;
user:any;

  app: any = {};

  constructor(private push: Push, private appRate: AppRate,private fcm: FCM, private _user: UserProvider,private oneSignal: OneSignal, private notif: NotifProvider, private platform: Platform, /*private config: Config,*/ public settings: SettingsProvider, private translate: TranslateService, private woo: WooCommerceProvider, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    // this.settings.load().then((x) => {
    //   this.woo.loadZones();
    //   this.app = x;
    //   this.initTranslate();
    // });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
     //




     //
      this.splashScreen.hide();
this.pushSetup();
      // this.appRate.preferences = {
      //     displayAppName: 'Babyneeds',
      //   usesUntilPrompt: 2,
      //   promptAgainForEachNewVersion: false,
      //   storeAppURL: {
      //     ios:'',
      //     android: 'market://details?id=com.maks.babyneeds1'
      //   },
      //   customLocale: {
      //     title: 'Do you enjoy %@?',
      //     message: 'If you enjoy using %@, would you mind taking a moment to rate it? Thanks so much!',
      //     cancelButtonLabel: 'No, Thanks',
      //     laterButtonLabel: 'Remind Me Later',
      //     rateButtonLabel: 'Rate It Now'
      //   },
      //   callbacks: {
      //     onRateDialogShow: function(callback){
      //       console.log('rate dialog shown!');
      //     },
      //     onButtonClicked: function(buttonIndex){
      //       console.log('Selected index: -> ' + buttonIndex);
      //     }
      //   }
      // };
 
      // // Opens the rating immediately no matter what preferences you set
      // this.appRate.promptForRating(true);
    
    });
    
    this.user = this._user.user;
    // platform.ready().then(() => {
    //   if (platform.is('cordova')) {
    //     this.oneSignal.startInit(App.OneSignalAppID, App.GCM);
    //     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        
    //     this.oneSignal.handleNotificationReceived().subscribe((x) => {
    //     // do something when notification is received
    //       console.log(x);
    //       this.notif.post(x.payload);
    //     });
        
    //     this.oneSignal.handleNotificationOpened().subscribe(() => {
    //       // do something when a notification is opened
    //     });
        
    //     this.oneSignal.endInit();
    //   }
    // });
    this.pages=[
                 {title: 'home',
                  Component:HomePage},
                  {title: 'Login',
                  Component:LoginPage}
               ];
 
 
 
 
 
 
 
 
              }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
     //




     //
      this.splashScreen.hide();

      // this.appRate.preferences = {
      //     displayAppName: 'Babyneeds',
      //   usesUntilPrompt: 2,
      //   promptAgainForEachNewVersion: false,
      //   storeAppURL: {
      //     ios:'',
      //     android: 'market://details?id=com.maks.babyneeds1'
      //   },
      //   customLocale: {
      //     title: 'Do you enjoy %@?',
      //     message: 'If you enjoy using %@, would you mind taking a moment to rate it? Thanks so much!',
      //     cancelButtonLabel: 'No, Thanks',
      //     laterButtonLabel: 'Remind Me Later',
      //     rateButtonLabel: 'Rate It Now'
      //   },
      //   callbacks: {
      //     onRateDialogShow: function(callback){
      //       console.log('rate dialog shown!');
      //     },
      //     onButtonClicked: function(buttonIndex){
      //       console.log('Selected index: -> ' + buttonIndex);
      //     }
      //   }
      // };
 
      // // Opens the rating immediately no matter what preferences you set
      // this.appRate.promptForRating(true);
    
    });
  }

  ionViewDidEnter(){
    
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(this.app && this.app.language !== undefined ? this.app.language : App.defaultLang);

    if(this.app && this.app.language !== undefined)
      this.translate.use(this.app.language);
    else
      this.translate.use(App.defaultLang);
      
    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    // });
  }

  public OnHomeClicked(): void {
    this.nav.setRoot(this.rootPage);
}
// public goTo(page,params):void{
// 	this.nav.setRoot(page, {params: params});
// }
pushSetup()
{
  const options: PushOptions = {
    android: {
      senderID :'1063542947486' 
    },
    ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
    },
    windows: {},
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    }
 };
 
 const pushObject: PushObject = this.push.init(options);
 
 
 pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
 
 pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', 
 registration));
 pushObject.on('registration').subscribe((data:any) => {
  console.log("device registered -> ", data);
//  this.saveToken(data.registrationId);
  let topic = "alerts";
  pushObject.subscribe(topic).then((res:any) => {
      console.log("subscribed to topic: ", res);
  });
});
 pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
 
}

goTo(page, params){
  this.nav.push(page,{params: params});
}

logout()
{
  
  this.user={};
  this._user.logout();
  this.ionViewDidEnter();
}
rateMe(){
  this.appRate.preferences.storeAppURL = {
  ios: '< my_app_id >',
  android: 'market://details?id=com.maks.babyneeds',
  windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
  };

  this.appRate.promptForRating(true); 
}


}
