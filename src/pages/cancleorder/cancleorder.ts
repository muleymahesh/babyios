import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider,RestProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CancleorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancleorder',
  templateUrl: 'cancleorder.html',
})
export class CancleorderPage {
reason:any;
 cancelrequest = {
    method:'request_cancel',
    order_id:'' ,
   
    order_detail:'',
  };
res:any;
  timing:any[]=[];
  ctime:any;
  orders:any;
  str:any;
constructor(public storage:Storage,public _cart1:CartProvider,public datepipe: DatePipe,public restProvider: RestProvider,private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {


  this.orders = this.navParams.data.params;
  this.str=this.navParams.data.params.o_id;


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancleorderPage');
  }



  cancelOrder(){
    if(this.reason!='')
    {
    this.cancelrequest.order_detail="Reason for order cancel: "+this.reason;
    this.cancelrequest.order_id=this.str.substring(2);
    this.restProvider.orderOperation(this.cancelrequest)
    .then(data => {
    console.log(data);
   this.res = data;
   if(this.res.result=="success")
   {
    this.toast.show(this.res.responseMessage);
    this.cancelrequest.order_detail='';
    this.cancelrequest.order_id='';
  
    this.nav.popTo(this.nav.getByIndex(1));
    
   }
   else if(this.res.result=="failure")
   {
    this.toast.show(this.res.responseMessage);
  
   }
    else{
      this.toast.show("Something went wrong please contact Us");
      
    }
    });
  }
  else
  {
    this.toast.show("Please enter reason...");
  }
  }



}
