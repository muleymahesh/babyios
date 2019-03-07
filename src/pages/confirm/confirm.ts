import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider,RestProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common'
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  amountreq={
    method:'request_amount'
  };
  minamount:any;
  delcharge:any;
products:any;
items:any;
billing:any;
response:any;
placeorderreq:any;
  constructor( private alertCtrl: AlertController,public _cart1:CartProvider,public datepipe: DatePipe,public restProvider: RestProvider,private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
    this.restProvider.getcartitem(this.amountreq)
    .then(data => {
     // this.loader.present();
    
     this.minamount=data.minamount;
     this.delcharge=data.delcharge;
  
  
   });
  
    this.placeorderreq = this.navParams.data.params;
    console.log(this.placeorderreq);
    this.products=this._cart.all;
 this.items=this._cart.totalQty;
 if(this.address.getPrimary){
  
   this.billing = this.address.getPrimary;
   console.log(this.billing);
 }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  placeorder()
  {
console.log(this._cart.total);

  //  if(this._cart.total<250)
  //  {
  //   let confirm = this.alertCtrl.create({
  //     title:'Alert',
  //     message:'Are you sure to proceed?, Order above 250 for Free Delivery' ,
  //     buttons: [{
  //         text: 'cancel'
  //       },{
  //         text:'place order',
  //         handler: () => {
  //           this.confirmPlace();
            
  //         }
  //       }]
  //   });
  //   confirm.present();


  //  }
  //  else{
  //    this.confirmPlace();
  //  }
 //   this.toast.show("hiiiiiiii")
 this.confirmPlace();
  }
  goTo(page, params){
    this.nav.push(page, {params: params});
  }


  confirmPlace()
  {
    console.log(this.placeorderreq);
this.loader.present();
    this.restProvider.feedbackOperation(this.placeorderreq)
    .then(data => {
    this.response = data;
    if(this.response.result=="success")
    {
      this.toast.show(this.response.responseMessage);
     // this.toast.show("Order Placed Successfully");
     this._cart.reset();
     this.loader.dismiss();
      this.goTo('ThanksPage',1);
      
    }
    else
    {
      this.toast.show(this.response.responseMessage);
      this.loader.dismiss();
    }
    });
    console.log(this.response);
  }
  cancel()
  {
    this.nav.pop();
  }
}
