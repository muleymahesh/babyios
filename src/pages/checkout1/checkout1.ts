import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider,RestProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
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
    // String req="{\"method\":\"add_oder\",\"first_name\":\""+addresses.get(0).getFname()+"\",\"last_name\":\""+addresses.get(0).getLname()+"\"," +
        // "\"gender\":\"Male\",\"email\":\""+new AppPreferences(PlaceOrderActivity.this).getEmail()+"\",\"amount\":\""+amount+
        // "\",\"shipping_type\":\""+spnPaymentType.getSelectedItem().toString()+"\",\"street\":\""+addresses.get(0).getArea()+"\",\"city\":\""+addresses.get(0).getAddr()+"\",\"state\":\""+addresses.get(0).getLandmark()+"\",\"country\":\"India\",\"zipcode\":\""+addresses.get(0).getZipcode()+
        // "\",\"phone\":\""+addresses.get(0).getPhone()+"\",\"order_detail\":\"Delivery Date "+txtDate.getText().toString()+", between "+spnTimeSlot.getSelectedItem().toString()+"\",\"user_id\":\"23\",\"p_id\":\""+p_id+"\",\"qty\":\""+qty+"\"}";

product:any;
        billing: any;
        details={
        deliverydate:'',
        timesloat:''
      }
        p_id:any='';
        qty:any='';
  placeorderreq={
   method:'add_oder' ,
   first_name:this.user.user.fname,
  last_name:'',
   gender:'male',
   email:this.user.user.user_email,
   amount:this._cart.total,
   shipping_type:'',
   street:'',
   city:'Noida',
   state:'',
   country:'India',
   zipcode:'',
   phone:'',
  //order_detail:"Delivery Date"+this.details.deliverydate+",between"+ this.details.timesloat,
  order_detail:'',
   user_id:this.user.user.user_id,
   p_id:'',
   qty:'',

  }
  




















response:any;
  checkout: string = "shipping";  
  cart: any;
  settings: any;
  
  shipping: any;
  constructor(public restProvider: RestProvider,private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
  this.setOrder();
  this.product=this._cart.all;
  console.log(this.product);
  
//  this.placeorderreq={
//     method:'add_oder' ,
//     first_name:this.user.user.fname,
//     last_name:this.billing.last_name,
//     gender:'male',
//     email:this.user.user.user_email,
//     amount:this._cart.total,
//     shipping_type:'',
//     street:this.billing.sector,
//     city:'Noida',
//     state:this.billing.landmark,
//     country:'India',
//     zipcode:this.billing.pincode,
//     phone:this.billing.phone,
//     order_detail:'Delivery Date{{deliverydate}},between{{timesloat}}',
//     user_id:this.user.user.user_id,
//     p_id:'',
//     qty:'',
 
//    }
  

  for(let i in this.product){
   this. p_id+=this.product[i].p_id+",";
 this. qty+=this.product[i].quantity+",";
}
console.log(this.p_id);
console.log(this.qty);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkout1Page');
  }

  setOrder(){
   
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
        this.placeorderreq.last_name=this.billing.last_name;
      
       
      
       
        this.placeorderreq.street=this.billing.area;
        this.placeorderreq.state=this.billing.landmark;
        
        this.placeorderreq. zipcode=this.billing.pincode;
        this.placeorderreq.phone=this.billing.phone;
        this.placeorderreq.p_id=this.p_id;
        this.placeorderreq.qty=this.qty;


        this.placeorderreq.order_detail="Delivery Date "+this.details.deliverydate+",between "+ this.details.timesloat;
        console.log(this.placeorderreq.order_detail);
        console.log(this.placeorderreq.shipping_type);
        console.log(this.placeorderreq.email);
        console.log(this.placeorderreq.amount);
        console.log(this.placeorderreq.first_name);
        console.log(this.placeorderreq.p_id);
        console.log(this.placeorderreq.qty);
        console.log(this.placeorderreq.last_name);
        console.log(this.placeorderreq.state);
        console.log(this.placeorderreq.street);
        console.log(this.placeorderreq.phone);
        console.log(this.placeorderreq.user_id);
        console.log(this.placeorderreq.zipcode);
        

        // String req="{\"method\":\"add_oder\",\"first_name\":\""+addresses.get(0).getFname()+"\",\"last_name\":\""+addresses.get(0).getLname()+"\"," +
        // "\"gender\":\"Male\",\"email\":\""+new AppPreferences(PlaceOrderActivity.this).getEmail()+"\",\"amount\":\""+amount+
        // "\",\"shipping_type\":\""+spnPaymentType.getSelectedItem().toString()+"\",\"street\":\""+addresses.get(0).getArea()+"\",\"city\":\""+addresses.get(0).getAddr()+"\",\"state\":\""+addresses.get(0).getLandmark()+"\",\"country\":\"India\",\"zipcode\":\""+addresses.get(0).getZipcode()+
        // "\",\"phone\":\""+addresses.get(0).getPhone()+"\",\"order_detail\":\"Delivery Date "+txtDate.getText().toString()+", between "+spnTimeSlot.getSelectedItem().toString()+"\",\"user_id\":\"23\",\"p_id\":\""+p_id+"\",\"qty\":\""+qty+"\"}";





       // {"method":"add_oder","first_name":"mahesh","last_name":"muley","gender":"Male","email":"muley.mahesh@gmail.com","amount":" //148.00","shipping_type":"cod","street":" Sector 21","city":"abc //building","state":"square","country":"India","zipcode":"201307","phone":"9890473764","order_detail":"Delivery Date 10/06/2016, between 3 - //5PM","user_id":"23","p_id":"356,","qty":"1,"}

        
        // this.nav.push(ThanksPage);


        if(this.details.deliverydate!=''&&this.details.timesloat!=''&&this.placeorderreq.shipping_type!='')
        {
      this.restProvider.feedbackOperation(this.placeorderreq)
      .then(data => {
      this.response = data;
      if(this.response.result=="success")
      {
        this.toast.show(this.response.responseMessage);
       // this.toast.show("Order Placed Successfully");
        this.goTo('ThanksPage',1);
      }
      else
      {
        this.toast.show(this.response.responseMessage);
      }
      });
      console.log(this.response);
    }
    else
    {
      this.toast.show("All field required");
    }
      }
}
