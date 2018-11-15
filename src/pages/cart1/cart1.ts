import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController,ViewController } from 'ionic-angular';
import { CartProvider, SettingsProvider, UserProvider, ToastProvider,RestProvider ,LoadingProvider} from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-cart1',
  templateUrl: 'cart1.html'
})

export class Cart1Page {
  products: any = [];
  app: any;
  total: number = 0;
  result:any;
 public product:any=[];
  p_id:any='';
  qty:any;
flag1:any;
  public flag:any=0;
  getproduct = {
    method:'get_product_cart',
    p_id:'',
   
  };
  
name:'';
finalprice:any;
  constructor( public loader: LoadingProvider,public restProvider:RestProvider,public viewCtrl: ViewController,public cart: CartProvider, public setting: SettingsProvider, private translate: TranslateService, private modal: ModalController, private user: UserProvider, private toast: ToastProvider, public nav: NavController, public alert: AlertController) {
  
    this.products = this.cart.all;
    for(let i in this.products){
      this. p_id+=this.products[i].p_id+",";
      }
      this.p_id+=0;
      this.getproduct.p_id=this.p_id;
   console.log(this.p_id);
      this.loader.present();
   this.restProvider.getProduct(this.getproduct)
   .then(data => {
    // this.loader.present();
   this.product = data;
// console.log(this.product.data);
 
  //console.log(this.product.stock);
  });
  this.loader.dismiss();
  console.log(this.product);
  }

  ionViewWillEnter(){
    this.cart.load().then(() => {
    //  console.log(this.cart.all);
      this.products = this.cart.all;
      this.total = this.cart.total;
    //  console.log(this.total);
    });
    for(let i in this.products){
      this. p_id+=this.products[i].p_id+",";
      }
      this.p_id+=0;
      this.getproduct.p_id=this.p_id;
   console.log(this.p_id);
      this.loader.present();
   this.restProvider.getProduct(this.getproduct)
   .then(data => {
    // this.loader.present();
   this.product = data;
// console.log(this.product.data);
 
  //console.log(this.product.stock);
  });
  this.loader.dismiss();
  console.log(this.product);
  
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

  goCheckout(){
//  this.user.logout();
   this.flag=0;
  
   console.log(this.product);
   console.log(this.products);
 for(let i=0;i<this.products.length;i++)
 {
   
   for(let j=0;j<this.product.length;j++)
   {
  
    console.log(this.products[i].p_id);
    console.log(this.product[j].p_id);
     if(this.products[i].p_id==this.product[j].p_id)
     {
       if(this.products[i].quantity>this.product[j].stock)
        {
          console.log("hiiii")
          if(this.flag!=1)
          this.flag=1;
          console.log("i am in compare  "+this.flag);
        
         this.toast.show(this.products[i].name+" quantity is exiding the stock");
          console.log(this.flag);

        }
     }

     
   }
 }
console.log(this.flag);

if(this.flag==0)
{
  console.log(this.flag);

    if(this.user.user.user_email)

{
this.nav.push('Checkout1Page');
  
  }
 
  else{
      this.nav.push('LoginPage');
     
    }
   
}

else
{
  this.toast.show(" product quantity is exding the stock");
  

}

 }



}