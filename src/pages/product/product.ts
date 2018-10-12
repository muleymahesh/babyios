import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { WishlistProvider, LoadingProvider, ToastProvider, WooCommerceProvider, HistoryProvider,RestProvider ,CartProvider} from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})

export class ProductPage {
  result:any;
  product1:any;
  name:'';
  finalprice:any;
  product:any;
  products: any;
  getproduct = {
    method:'get_product_detail',
    p_id:'',
    email:'abc.abc@gmail.com'
  }; 
  // variations: any[] = [];
  reviews: any[] = [];
  related: any[] = [];
 // isSetVariation: boolean = false;
  
  constructor(private history: HistoryProvider,private cart: CartProvider,public http: HttpClient,public restProvider: RestProvider, private alert: AlertController, private platform: Platform, private socialSharing: SocialSharing, private translate: TranslateService, private toast: ToastProvider, private wishlist: WishlistProvider, private navCtrl: NavController, private loader: LoadingProvider, private modal: ModalController, private navParam: NavParams, private woo: WooCommerceProvider) {
    this.loader.present();

   this.product = this.navParam.data.params;
    this.history.post(this.product);

    // // if(this.product.variations){
    // //   this.woo.getProductVariations(this.product.id).then( (val) => {
    // //     this.product.variations = val;
    // //   })
    // }

    // if(this.product.rating_count > 0){
    //   this.woo.getProductReviews(this.product.id).then( (val) => {
    //     this.product.reviews = val;
    //     this.loader.dismiss();
    //   })
    // }
   this. getproductdetail();
  // this.product.related = this.woo.getProductRelated(this.product.related_ids);
    this.loader.dismiss();
  }

  // setVariation(e){
  //   let x = JSON.parse(e);
  //   this.product.variation_id = x.id;
  //   this.product.price = x.price;
  //   this.product.regular_price = x.regular_price;
  //   this.product.on_sale = x.on_sale;
  //   this.product.in_stock = x.in_stock;
  //   this.product.attributes = x.attributes;
  //   this.isSetVariation = true;
  // }
  
  
  getproductdetail() {
   this.getproduct.p_id =this.product.p_id;
  
    this.restProvider.getProduct(this.getproduct)
    .then(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  viewCart(){
    this.modal.create('CartPage', {}, { cssClass: 'inset-modal' }).present();
  }

  openModal(pageName) {
    console.log(this.products[0]);
      this.modal.create(pageName, {product: this.products[0]}, { cssClass: 'inset-modal' }).present();
      //  this.translate.get(['ADDED_TO_CART']).subscribe( x=> {
      //   this.toast.show(x.ADDED_TO_CART);
      // });
    
  }

  // setFav(product: any){
  //   this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
	// 		let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
	// 		this.wishlist.post(product);
	// 		product.isFav = product.isFav ? false : true;
	// 		this.toast.show(msg);
  //   });
  // }

  // share(product: any){
  //   // console.log(product);
  //   if (!this.platform.is('cordova')) {
  //     this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe( x=> {
  //       this.alert.create({
  //         title: x.ONLY_DEVICE,
  //         message: x.ONLY_DEVICE_DESC,
  //         buttons: [{
  //             text: x.OK
  //           }]
  //       }).present();
  //       return false;
  //     });

  //   }else{
  //     let img = [];
  //     for(let i in product.images)
  //       img.push(product.images[i].src);
  
  //     this.socialSharing.share(product.name, product.name, img, product.permalink).then((x) => {
  //       console.log(x);
  //       this.toast.show('Successfully shared');
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //   }
  // }
  

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

addTOCart()
{this.product1=this.products[0];
  if(this.product1.stock==0)
  {
    this.toast.show("Currently this product is out of stock");
  }else
  {
  this.cart.post(this.product1);
  this.toast.show("Product added to cart");
}
}


  goTo(page: string, params: any){
		this.navCtrl.push(page, {params: params});
  }

}
