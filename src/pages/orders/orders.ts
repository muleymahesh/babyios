import { Component } from '@angular/core';
import { IonicPage, Refresher, Events, ModalController, NavController,NavParams } from 'ionic-angular';
import { UserProvider, LoadingProvider, WooCommerceProvider ,RestProvider,ToastProvider} from '../../providers/providers';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  // status: string = "paid";
  orders: any ;
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

udatereq={
  method:'updateTimeSlot',
  order_id:'' ,
 order_detail: ''
}

  timing:any[]=[];
  
  res: any;
  status:any;
  returnrequest = {
    method:'request_return',
    order_id:'' ,
    user_email: ''
  };

  canclerequest = {
    method:'cancel_order',
    order_id:'' ,
  };
 str:any;
 str1;any;
deliverydate:any;
c_date:any;
ctime:any;
newdeliverydate:any;
newtimeslot:any;
minDate:any;
maxDate:any;
time_slot={
  method:'time_slot' 
}
response:any;
    constructor(public storage:Storage,public restProvider: RestProvider,public datepipe: DatePipe, private toast: ToastProvider,public navParams: NavParams,public nav: NavController, private events: Events, private modal: ModalController, private loader: LoadingProvider, private user: UserProvider, private woo: WooCommerceProvider) {
    this.minDate = new Date().toISOString();
    this.maxDate =  new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
    this. c_date =this.datepipe.transform(new Date(),'yyyy-M-d');
    this.orders = this.navParams.data.params;
    this.restProvider.getTimeslot(this.time_slot)
    .then(data => {
    this.response = data;
    this.storage.set('timejson1',this.response);
  
    });
     this.deliverydate=this.orders.order_detail.substring(14,24);
     console.log(this.deliverydate);
     console.log(this.c_date);
   this.returnrequest.user_email=this.user.user.user_email;
    console.log(this.orders);
    this.str=this.navParams.data.params.o_id;
   
  }
  

  
 

  setForUser(status: string = ''){
    if(this.user.all){
      this.woo.getOrders(this.user.id, null, null, status).then( x=> {
        this.loader.dismiss();
        this.orders = x;        
      }, err => {
        this.loader.dismiss();    
      });
    }
  }

  doRefresh(status: string, refresher: Refresher) {
    this.setForUser(status);
    refresher.complete();
  }

  doPulling(refresher: Refresher) {
    // console.log('DOPULLING', refresher.progress);
  }

  login(){
    this.modal.create('LoginPage', {}).present();
  }

  goHome(){
    this.nav.parent.select(0);
  }
cancleOrder(){
  this.canclerequest.order_id=this.str.substring(2);
 console.log(this.canclerequest.order_id);
 
  this.restProvider.orderOperation(this.canclerequest)
  .then(data => {
  console.log(data);
 this.res = data;
 if(this.res.result=="success")
 {
  this.toast.show(this.res.responseMessage);
  this.pop();
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
 
inovice(){
  console.log(this.str);
this.str1=this.str.substring(2);
console.log(this.str1);
this.restProvider.Inovice(this.str1)
.then(data=>{
  this.toast.show(data.result);
})

}



returnOrder1(){
  this.returnrequest.order_id=this.str.substring(2);
  this.restProvider.orderOperation(this.returnrequest)
  .then(data => {
  console.log(data);
 this.res = data;
 if(this.res.result=="success")
 {
  this.toast.show(this.res.responseMessage);
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

// onChange()
// {
  
//   this.timing=[];
// //  console.log(this.details.deliverydate);
//   let latest_date =this.datepipe.transform(this.newdeliverydate,'M/d/yyyy');
//   let c_date =this.datepipe.transform(new Date(),'M/d/yyyy');
//   console.log(latest_date);
//   console.log( c_date);
//   if(latest_date==c_date)
//   {
//     this.ctime=new Date().getHours();
//     console.log("ctime is="+this.ctime)
//     if(parseInt(this.ctime)>7&&parseInt(this.ctime)<17)
//     {
//     for(let s of this.times)
//     {

//       console.log("ctime="+this.ctime);
//       console.log("stime="+s.stime)
//       console.log("int ctime="+parseInt(this.ctime))
     
        
//       if(s.stime<parseInt(this.ctime)&&s.etime>parseInt(this.ctime))
//       {
//         console.log("I am in if stime="+s.stime)
//         for(let s1 of s.slots)
//         {
//         this.timing.push(s1);
//         }
//         console.log(this.timing);
//       }
      
//     }
//   }
//   else if(parseInt(this.ctime)>17)
//   {
//     this.toast.show("Time slots are over please select next date");
//     this.newdeliverydate='';
//   }
//   else{
//     this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
//   }
// }
// else
// {
//   this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
// }
// }






onChange()
{
  this.storage.get('timejson1')
  .then(data => {
  this.response = data;
  if(this.response.result=="success")
  {
  this.timing=[];
  this.times=this.response.data;
//  console.log(this.details.deliverydate);
  let latest_date =this.datepipe.transform(this.newdeliverydate,'M/d/yyyy');
  let c_date =this.datepipe.transform(new Date(),'M/d/yyyy');
  console.log(latest_date);
  console.log( c_date);
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
     this.newdeliverydate='';
    }  
  }
 
  else{
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






















pop() {
  this.nav.pop();
}


  goTo(page,params){
    this.nav.push(page, {params: params});
  }

updateOrderDetails()
{
  if(this.newdeliverydate!=''&&this.newtimeslot!='')
  {
  this.udatereq.order_id=this.str.substring(2);
  this.udatereq.order_detail="Delivery Date"+this.datepipe.transform(this.newdeliverydate,'yyyy-M-d')+"between"+this.newtimeslot;
  this.restProvider.updateOrderDetail(this.udatereq)
  .then(data => {
  console.log(data);
 this.res = data;
 if(this.res.result=="success")
 {
   this.orders.order_detail=this.udatereq.order_detail
  this.toast.show(this.res.responseMessage);
  this.newdeliverydate='';
  this.newtimeslot='';
 }
 else if(this.res.result=="failure")
 {
  this.toast.show(this.res.responseMessage);

 }
  else{
    this.toast.show("Something is wrong please contact Us");
    
  }
  });
}
else
{
  this.toast.show("All Field Required ");
}

}

}
