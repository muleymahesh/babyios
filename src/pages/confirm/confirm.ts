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
products:any;
items:any;
billing:any;
response:any;
placeorderreq:any;
  constructor(public _cart1:CartProvider,public datepipe: DatePipe,public restProvider: RestProvider,private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
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
    this.restProvider.feedbackOperation(this.placeorderreq)
    .then(data => {
    this.response = data;
    if(this.response.result=="success")
    {
      this.toast.show(this.response.responseMessage);
     // this.toast.show("Order Placed Successfully");
     this._cart.reset();
      this.goTo('ThanksPage',1);
    }
    else
    {
      this.toast.show(this.response.responseMessage);
    }
    });
    console.log(this.response);
 //   this.toast.show("hiiiiiiii")
  }
  goTo(page, params){
    this.nav.push(page, {params: params});
  }

  cancel()
  {
    this.nav.pop();
  }
}
