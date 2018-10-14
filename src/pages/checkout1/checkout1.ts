import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the Checkout1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout1',
  templateUrl: 'checkout1.html',
})
export class Checkout1Page {

  
  checkout: string = "shipping";  
  cart: any;
  settings: any;
  billing: any;
  shipping: any;
  constructor(private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
  this.setOrder();
  console.log('ionViewDidLoad Checkout1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkout1Page');
  }

  setOrder(){
    console.log('ionViewDidLoad Checkout1Page');
    console.log(this.address.getPrimary);
        if(this.address.getPrimary){
         
          this.billing = this.address.getPrimary;
          console.log(this.billing);
        }
  
     
        // if(this._order.shipping)
        //   this.shipping = this._order.shipping;
      }

      selectAddress(action){
        let params = {
          action: action
        }
        this.modal.create('SavedAddressPage', {params: params}).present();
      }
    
      addAddress(action){
        let params = {
          action: action
        }
        this.modal.create('AddAddressPage', {params: params}).present();
      }
      goTo(page, params){
        this.nav.push(page, {params: params});
      }
    
      
      placeorder()
      {
        this.toast.show("Order Placed Successfully");
        this.goTo('ThanksPage',1);
        // this.nav.push(ThanksPage);
      }
}
