import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import { CartProvider, SettingsProvider, UserProvider, ToastProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})

export class CartPage {
  products: any = [];
  app: any;
  total: number = 0;
  result:any;
  
name:'';
finalprice:any;
  constructor(public cart: CartProvider, public setting: SettingsProvider, private translate: TranslateService, private modal: ModalController, private user: UserProvider, private toast: ToastProvider, public nav: NavController, public alert: AlertController) {
    
  }

  ionViewWillEnter(){
    this.cart.load().then(() => {
      this.products = this.cart.all;
      this.total = this.cart.total;
    });

    this.app = this.setting.all.settings;
  }

  updateTotal(){
    this.total = this.cart.total;
  }

  remove(product) {
    this.translate.get(['Remove product', 'Do you want to remove from cart', 'CANCEL', 'YES']).subscribe( x=> {
      this.alert.create({
        title: "Remove product",
        message: "Do you want to remove from cart?",
        buttons: [{
            text: x.CANCEL
          },{
            text: x.YES,
            handler: () => {
              this.confirmRemove(product);
            }
          }]
      }).present();
    });
  }

  confirmRemove(product: any){
    this.cart.remove(product);
    this.translate.get('REMOVE_FROM_CART').subscribe( x=> {
      this.toast.show("Product removed from cart");
    });
  }


  pricestrikt(discount,price)
  {
   
      if(discount!=0)
      {
        this.result=(discount/100)*price;
        this.finalprice=price-this.result;
        return parseInt(this.finalprice);

          }
          else
          {
            return 0;
          }
 
  }

  goHome(){
    this.nav.parent.select(0);
  }

  goCheckout(){
//  this.user.logout();
    console.log(this.user.user);
    if(this.user.user.user_email)
      this.nav.push('CheckoutPage');
    else{
      this.nav.push('LoginPage');
      // this.translate.get(['CHECKOUT_GUEST', 'CHECKOUT_GUEST_MSG', 'NO', 'YES']).subscribe( x=> {
      //   this.alert.create({
      //     title: x.CHECKOUT_GUEST,
      //     message: x.CHECKOUT_GUEST_MSG,
      //     buttons: [{
      //         text: x.NO,
      //         handler: () => {
      //           this.nav.push('CheckoutPage', {guest: true});
      //         }
      //       },{
      //         text: x.YES,
      //         handler: () => {
      //           this.modal.create('LoginPage').present();
      //         }
      //       }]
      //   }).present();
      // });
    }
  }


 

}
