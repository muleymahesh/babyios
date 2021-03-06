import { Component } from '@angular/core';
import { IonicPage, Platform, AlertController, NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { AddressProvider,RestProvider, SettingsProvider, ToastProvider, UserProvider, LoadingProvider, CartProvider, WooCommerceProvider, OrderProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common'
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ReturnorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-returnorder',
  templateUrl: 'returnorder.html',
})
export class ReturnorderPage {
  minDate:any;
  maxDate:any;
  returndate:any;
  returntime:any;
  response:any;
   reason:any;
   times:any;
  // times=[
  //   {
  //       "stime": 8,
  //       "etime":11,
  //       "slots": ["11-1PM","1-3PM","3-5PM","5-7PM"]
         
  //   },
  //   {
  //     "stime": 10,
  //     "etime":13,
  //     "slots": ["1-3PM","3-5PM","5-7PM"]
       
  // },
  // {
  //   "stime": 12,
  //   "etime":15,
  //   "slots": ["3-5PM","5-7PM"]
     
  // },
  // {
  //   "stime": 14,
  //   "etime":17,
  
  //   "slots": ["5-7PM"]
     
  // },
  
  // ]
  time_slot={
    method:'time_slot' 
  }
  returnrequest = {
    method:'request_return',
    order_id:'' ,
    user_email: '',
    order_detail:'',
  };
res:any;
  timing:any[]=[];
  ctime:any;
  orders:any;
  str:any;
  constructor(public storage:Storage,public _cart1:CartProvider,public datepipe: DatePipe,public restProvider: RestProvider,private setting: SettingsProvider, private alert: AlertController, private platform: Platform, private nav: NavController, private translate: TranslateService, private toast: ToastProvider, private user: UserProvider, private loader: LoadingProvider, private woo: WooCommerceProvider, private _cart: CartProvider, private events: Events, private _order: OrderProvider, private address: AddressProvider, public navParams: NavParams, public modal: ModalController) {
    this.returnrequest.user_email=this.user.user.user_email;
    this.orders = this.navParams.data.params;
    this.minDate = new Date().toISOString();
    this.restProvider.getTimeslot(this.time_slot)
    .then(data => {
    this.response = data;
    this.storage.set('timejson1',this.response);
  
    });
    this.maxDate =  new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
    this.str=this.navParams.data.params.o_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnorderPage');
  }
  onChange()
  {
    let edate=this.datepipe.transform(this.returndate,'EEEE');
    let latest_date =this.datepipe.transform(this.returndate,'M/d/yyyy');
    let c_date =this.datepipe.transform(new Date(),'M/d/yyyy');
    console.log(latest_date);
    console.log( c_date);
    if(edate!='Tuesday')
    {
    this.storage.get('timejson1')
    .then(data => {
    this.response = data;
    if(this.response.result=="success")
    {
    this.timing=[];
    this.times=this.response.data;
  //  console.log(this.details.deliverydate);
   
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
       this.returndate='';
      }  
    }
    // else if(parseInt(this.ctime)>17)
    // {
    //   this.toast.show("Time slots are over please select next date");
    //   this.returndate='';
    // }
    else{
     // this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
   if(parseInt(this.ctime)>7&&parseInt(this.ctime)<17)
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
      this.returndate='';
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
  this.toast.show('tuesday is holiday select next day');
  this.returndate='';
}
  }


  returnOrder(){
    if(this.reason!=''&&this.returndate!=''&&this.returntime!='')
    {
    this.returnrequest.order_detail="Reason for return: "+this.reason+"\n return date: "+this.returndate+"\n return time: "+this.returntime+"";
    this.returnrequest.order_id=this.str.substring(2);
    this.restProvider.orderOperation(this.returnrequest)
    .then(data => {
    console.log(data);
   this.res = data;
   if(this.res.result=="success")
   {
    this.toast.show(this.res.responseMessage);
    this.returnrequest.order_detail='';
    this.returnrequest.order_id='';
    this.returnrequest.user_email='';
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
    this.toast.show("All Field required");
  }
  }
}
