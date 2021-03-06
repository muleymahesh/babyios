import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider,RestProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common'
import { Storage } from '@ionic/storage';
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
// 
addland:any;
times:any;
timing:any[]=[];
amountreq={
  method:'request_amount'
};

 minamount:any;
 delcharge:any;


  

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
   amount:0,
  
   shipping_type:'',
   street:'',
   city:'Noida',
   state:'',
   country:'India',
   zipcode:'',
   phone:'',
   order_detail:'',
   user_id:this.user.user.user_id,
   p_id:'',
   qty:'',

  }
  time_slot={
    method:'time_slot'
  }




















response:any;
  checkout: string = "shipping";  
  cart: any;
  settings: any;
  minDate:any;
  maxDate:any;
  shipping: any;
  ctime:any;
  products:any;
  constructor(public storage:Storage,public _cart1:CartProvider,public datepipe: DatePipe,public restProvider: RestProvider,private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
    this.restProvider.getTimeslot(this.time_slot)
    .then(data => {
    this.response = data;
    this.storage.set('timejson',this.response);
  
    });
    this.products = this._cart1.all;
    if(this.address.getPrimary){
    console.log(this.address.getPrimary);
    }
console.log(this.times);
   this.minDate = new Date().toISOString();
   this.maxDate =  new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
    if(this.address.getPrimary){
      
       this.billing = this.address.getPrimary;
       console.log(this.billing);
     }

     this.platform.ready().then(() => {
      if(this.address.getPrimary){
      this.billing = this.address.getPrimary;
      }
      });

    //this.setOrder();
  this.product=this._cart.all;
  console.log(this.address.getPrimary);
  
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
ionViewWillEnter()
{
  this.minDate = new Date().toISOString();
  this.maxDate =  new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
   if(this.address.getPrimary){
     
      this.billing = this.address.getPrimary;
      console.log(this.billing);
    }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkout1Page');
    if(this.address.getPrimary){
      
       this.billing = this.address.getPrimary;
       console.log(this.billing);
     }
  }

  onChange()
  {
 console.log(this.details.deliverydate);
    let edate=this.datepipe.transform(this.details.deliverydate,'EEEE');
    console.log("delivery date:  "+edate);
    let latest_date =this.datepipe.transform(this.details.deliverydate,'M/d/yyyy');
    let c_date =this.datepipe.transform(new Date(),'M/d/yyyy');
    console.log(latest_date);
    console.log( c_date);
    if(edate!='Tuesday')
    {
    this.storage.get('timejson')
    .then(data => {
    this.response = data;
   
    if(this.response.result=="success")
    {
    this.timing=[];
    this.times=this.response.data;
   console.log("delivery date:  "+edate);
  
    
   
    if(latest_date==c_date)
    {
      this.ctime=new Date().getHours();
      console.log("ctime is="+this.ctime)
      if(parseInt(this.ctime)>7&&parseInt(this.ctime)<17)
      {
      for(let s of this.times)
      {

        console.log("ctime="+this.ctime);
        console.log("stime="+s.stime)
        console.log("int ctime="+parseInt(this.ctime))
       
          
        if(s.stime<parseInt(this.ctime)&&s.etime>parseInt(this.ctime))
        {
          console.log("I am in if stime="+s.stime)
          for(let s1 of s.slots)
          {
          this.timing.push(s1);
          }
          console.log(this.timing);
        }
       
      }
      if(this.timing.length==0)
      {
       this.toast.show("Time slots are over please select next date");
       this.details.deliverydate='';
      } 
    }
    
    else{
      if(parseInt(this.ctime)>17&&parseInt(this.ctime)<17)
    {
     for(let s of this.times)
     {
    
      
       if(s.stime==0&&s.etime==0)
       {
         console.log("I am in if stime="+s.stime)
         for(let s1 of s.slots)
         {
         this.timing.push(s1);
         }
         console.log(this.timing);
       }
       
     }


    }
    if(this.timing.length==0)
    {
     this.toast.show("Time slots are over please select next date");
     this.details.deliverydate='';
    } 
    }
  }
  else
  {
   // this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
   for(let s of this.times)
   {
  
    
     if(s.stime==0&&s.etime==0)
     {
       console.log("I am in if stime="+s.stime)
       for(let s1 of s.slots)
       {
       this.timing.push(s1);
       }
       console.log(this.timing);
     }
     
   }
  }
  }
    
else
{
  this.toast.show(this.response.responseMessage);
}

 
   
});
    }
else
{
this.details.deliverydate='';
console.log(this.details.deliverydate);
 
this.toast.show('tuesday is holiday select next day');
 
    }

  }


  setOrder(){
   
    console.log(this.address.getPrimary);
       
     
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
    
      // placeorder()
      // {
      //   console.log(this._cart.total);
      // }
        
      
      placeorder()
      {
        if(this.address.getPrimary)
        {
        this.placeorderreq.last_name=this.billing.last_name;
      
       
      
       
        this.placeorderreq.street=this.billing.area;
        this.addland=""+this.billing.address_1+","+this.billing.landmark;
        console.log("address:",this.addland);
        this.placeorderreq.state=this.addland;
        
        this.placeorderreq. zipcode=this.billing.pincode;
        this.placeorderreq.phone=this.billing.phone;
        this. p_id+="0";
        this. qty+="0";
        this.placeorderreq.p_id=this.p_id;
        this.placeorderreq.qty=this.qty;

this.loader.present();
 this.restProvider.getcartitem(this.amountreq)
 .then(data => {
  // this.loader.present();
 
  // this.minamount=data.minamount;
  // this.delcharge=data.delcharge;
  if(this._cart.total<=data.minamount)
  {
    this.placeorderreq.amount=this._cart.total+data.delcharge;
  }
   else
   {
    this.placeorderreq.amount=this._cart.total;
   }
this.loader.dismiss();
});







        this.placeorderreq.order_detail="Delivery Date "+this.details.deliverydate+",between "+ this.details.timesloat;
       
        

        // String req="{\"method\":\"add_oder\",\"first_name\":\""+addresses.get(0).getFname()+"\",\"last_name\":\""+addresses.get(0).getLname()+"\"," +
        // "\"gender\":\"Male\",\"email\":\""+new AppPreferences(PlaceOrderActivity.this).getEmail()+"\",\"amount\":\""+amount+
        // "\",\"shipping_type\":\""+spnPaymentType.getSelectedItem().toString()+"\",\"street\":\""+addresses.get(0).getArea()+"\",\"city\":\""+addresses.get(0).getAddr()+"\",\"state\":\""+addresses.get(0).getLandmark()+"\",\"country\":\"India\",\"zipcode\":\""+addresses.get(0).getZipcode()+
        // "\",\"phone\":\""+addresses.get(0).getPhone()+"\",\"order_detail\":\"Delivery Date "+txtDate.getText().toString()+", between "+spnTimeSlot.getSelectedItem().toString()+"\",\"user_id\":\"23\",\"p_id\":\""+p_id+"\",\"qty\":\""+qty+"\"}";





       // {"method":"add_oder","first_name":"mahesh","last_name":"muley","gender":"Male","email":"muley.mahesh@gmail.com","amount":" //148.00","shipping_type":"cod","street":" Sector 21","city":"abc //building","state":"square","country":"India","zipcode":"201307","phone":"9890473764","order_detail":"Delivery Date 10/06/2016, between 3 - //5PM","user_id":"23","p_id":"356,","qty":"1,"}

        
        // this.nav.push(ThanksPage);
//following is the method for order place

        if(this.placeorderreq.first_name!='' && this.placeorderreq.email!=''&&this.placeorderreq.phone!='' && this.placeorderreq.zipcode!='' && this.details.deliverydate!=''&&this.details.timesloat!=''&&this.placeorderreq.shipping_type!='')
        {
  //     this.restProvider.feedbackOperation(this.placeorderreq)
  //     .then(data => {
  //     this.response = data;
  //     if(this.response.result=="success")
  //     {
  //       this.toast.show(this.response.responseMessage);
  //      // this.toast.show("Order Placed Successfully");
  //      this._cart.reset();
  //       this.goTo('ThanksPage',1);
  //     }
  //     else
  //     {
  //       this.toast.show(this.response.responseMessage);
  //     }
  //     });
  //     console.log(this.response);
  //  //   this.toast.show("hiiiiiiii");
   this.goTo('ConfirmPage',this.placeorderreq);
}
    else
    {
      this.toast.show("All field required");
    }
  // this.toast.show("place order is commented");
      }
      // this.toast.show("place order is commented");
      // }
      else
      {
        this.toast.show("Please add address");
      } 
    }
   
}
