import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController,ViewController } from 'ionic-angular';
import { CartProvider, SettingsProvider, UserProvider, ToastProvider,RestProvider } from '../../providers/providers';
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
  product:any;
  p_id:any;
  qty:any;
flag1:any;
  flag:any=0;
  getproduct = {
    method:'get_product_detail',
    p_id:'',
    email:'abc.abc@gmail.com'
  };
  
name:'';
finalprice:any;
  constructor(public restProvider:RestProvider,public viewCtrl: ViewController,public cart: CartProvider, public setting: SettingsProvider, private translate: TranslateService, private modal: ModalController, private user: UserProvider, private toast: ToastProvider, public nav: NavController, public alert: AlertController) {
  

   
    

  }

  ionViewWillEnter(){
    this.cart.load().then(() => {
    //  console.log(this.cart.all);
      this.products = this.cart.all;
      this.total = this.cart.total;
    //  console.log(this.total);
    });

    this.app = this.setting.all.settings;
  }

  // redirect()
  // {
  //  this.flag1=this.goCheckout();
  //    console.log(this.flag1);
  
  
  
  
  // }

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
    this.viewCtrl._didEnter();
   // console.log(this.total);
    this.updateTotal();
  }

  confirmRemove(product: any){
    this.cart.remove(product);
    this.translate.get('REMOVE_FROM_CART').subscribe( x=> {
      this.toast.show("Product removed from cart");
    });
    this.updateTotal();
   // console.log(this.total);
  }

  dismiss() {
		this.viewCtrl.dismiss();
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

  goCheckout():any{
//  this.user.logout();
   this.flag=0;
    console.log(this.flag);
    console.log(this.user.user);

    for(let i=0; i < this.products.length; i++){
      this.getproduct.p_id=this.products[i].p_id;
      this.restProvider.getProduct(this.getproduct)
      .then(data => {
        this.product = data;
        console.log(this.product);

      if(this.products[i].quantity>this.product[0].stock)
      {
        console.log("hiiii")
        if(this.flag!=1)
        this.flag=1;
        console.log("i am in compare  "+this.flag);
      
       this.toast.show(this.products[i].name+" quantity is exiding the stock");
        console.log(this.flag);
      }
     
    });
   
}

    if(this.user.user.user_email)

{

  
  }
 
  else{
      this.nav.push('LoginPage');
     
    }
   
}


}