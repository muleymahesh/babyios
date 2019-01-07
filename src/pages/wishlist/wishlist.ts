import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import {LoadingProvider, CartProvider, ToastProvider, WishlistProvider,RestProvider, UserProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

// @IonicPage()
// @Component({
//   selector: 'page-wishlist',
//   templateUrl: 'wishlist.html'
// })

// export class WishlistPage {
//   products: any[] = [];

//   constructor(public wishlist: WishlistProvider,public http: HttpClient,public restProvider: RestProvider, private translate: TranslateService, public cart: CartProvider, public toast: ToastProvider, public alertCtrl: AlertController, public navCtrl: NavController) {

//   }

//   ionViewWillEnter(){
//     this.wishlist.load().then(() => {
//       this.products = this.wishlist.all;
//     });
//   }

//   removeFromWish(product) {
//     this.translate.get(['REMOVE_TTL', 'REMOVE_MSG', 'CANCEL', 'YES']).subscribe( x=> {
//       let confirm = this.alertCtrl.create({
//         title: x.REMOVE_TTL,
//         message: x.REMOVE_MSG,
//         buttons: [{
//             text: x.CANCEL
//           },{
//             text: x.YES,
//             handler: () => {
//               this.confirmRemove(product);
//             }
//           }]
//       });
//       confirm.present();
//     });
//   }

//   reloadWish(product){
//     product.isFav = true;
//     this.wishlist.post(product);
//     this.products = this.wishlist.all;
//   }

//   addToCart(product){
//     this.cart.post(product, 1);
//     this.reloadWish(product);
//     this.translate.get('ADDED_TO_CART').subscribe( x=> {
//       this.toast.show(x);
//     });
//   }

//   confirmRemove(product: any){
//     this.reloadWish(product);
//     this.translate.get('REMOVE_FROM_WISH').subscribe( x=> {
//       this.toast.show(x);
//     });
//   }

//   goHome(){
//     this.navCtrl.parent.select(0);
//   }

//   goTo(page, params){
//     this.navCtrl.push(page, {params: params});
//   }

// }


// import { Component } from '@angular/core';
 import { NavParams } from 'ionic-angular';
// import { RestProvider } from '../../providers/rest/rest';
// import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  result:any;
  wlist: any;
  request= {
method:'get_fav',

user_id:''
  };

finalprice:any;
  constructor(private loader: LoadingProvider,public user:UserProvider,public navCtrl: NavController, private toast: ToastProvider ,public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {
 console.log(this.user.user.user_email);
   // this.wishlist1();
  }
  ionViewDidEnter(){

    console.log('ionViewDidLoad WishlistPage');
    console.log(this.user.user.user_email);
    if(this.user.user.user_email)
    {
     
    this.request.user_id=this.user.user.user_email;
    this.wishlist1();
    }
    else{
      this.toast.show("You are not logged in....");
    }
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WishlistPage');
  // }
 

 wishlist1() {
  this.loader.present();
   if(this.user.user.user_email)
  {
    	
    this.restProvider.getWishlist(this.request)
    .then(data => {
      console.log(data);
      if(data.result=="failed")
      {
        console.log(data.result);
        this.wlist=[];
        this.toast.show("No products in wishlist");
       
      }
      else if(data.result=="success")
      {
      this.wlist = data.data;
      console.log(this.wlist);
      }
    });
  }
  else
  {
    console.log("You are not Logged in....")
  }
  this.loader.dismiss();
  }

  goTo(page, params){
    this.navCtrl.push(page, {params: params});
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


}

