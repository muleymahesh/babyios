
import { Component,ViewChild } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { TranslateService } from '@ngx-translate/core';
import { Platform /*,Config*/,Nav ,NavController, NavParams  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WooCommerceProvider, NotifProvider, SettingsProvider ,UserProvider, OrderProvider} from '../providers/providers';
import { App } from './app.global';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FCM } from '@ionic-native/fcm';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Storage } from '@ionic/storage';
import { AppRate } from '@ionic-native/app-rate';
import { RateProvider } from '../providers/rate/rate';
import { Config } from 'ionic-angular/config/config';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = 'TabsPage';
  
@ViewChild(Nav) nav: Nav;
flagrate=0;
pages : Array<{
title: string,
Component:any}>;
user:any;
flag:any;
rate1:any=0;
  app: any = {};
    storage1:any;
  constructor(public storage: Storage,public rate:RateProvider,private push: Push, private appRate: AppRate,private fcm: FCM, private _user: UserProvider,private oneSignal: OneSignal, private notif: NotifProvider, private platform: Platform, /*private config: Config,*/ public settings: SettingsProvider, private translate: TranslateService, private woo: WooCommerceProvider, private statusBar: StatusBar, private splashScreen: SplashScreen) {
   


    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
     // this.storage1=this.storage;
      this.splashScreen.hide();
   
this.pushSetup();
this.rate.load();

this.appRate.preferences.storeAppURL = {
  ios: '1130791321',
  android: 'market://details?id=com.maks.babyneeds',
  
  windows: 'ms-windows-store://review/?ProductId=< Store_ID >',

  
  };
this.storage1=storage;
  this.appRate.preferences.callbacks= {
        onRateDialogShow: function(callback){
          console.log('rate dialog shown!');
        },
        onButtonClicked: function(buttonIndex){
          console.log('Selected index: -> ' + buttonIndex);
      
          if(buttonIndex==3)
          {
            this.flagrate=1;
    //  this.storage1.set('yourKey',this.flagrate);
     // this.storage.Set();
    
     // ts.rate.rate=this.flagrate;
        //  console.log('111111Selected index: -> ' +   this.rate.rate);
           // this.apprate1(this.flagrate);
          }

        
        }
      }




this.storage.get('yourStorageKey')
.then(data => {
  console.log('your data => ', data);
  if(data>0)
  {
    console.log('your data if => ', data);
    //this.storage.set('yourStorageKey',this.rate1);
    this.rate1=data+1;
    this.storage.set('yourStorageKey',this.rate1);
  }
  else
  {
    this.rate1=1;
    this.storage.set('yourStorageKey',this.rate1);
  }
});


this.storage.get('yourStorageKey')
.then(data => {
  console.log('your data abhi => ', data);
this.flag=data;

  
  if(this.flag==3)
  {
    
      this.flagrate =this.rate.all;
      console.log('flagrate',this.flagrate);
     
  this.appRate.promptForRating(true);

  
  }
});






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
apprate1(rate:any)
{
console.log('apprate1',rate);
}
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
//   this.appRate.preferences.storeAppURL = {
//   ios: '< my_app_id >',
//   android: 'market://details?id=com.maks.babyneeds',
  
//   windows: 'ms-windows-store://review/?ProductId=< Store_ID >'

  
//   };

//   this.appRate.promptForRating(true); 
// }

}
}
