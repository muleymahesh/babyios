import { Component } from '@angular/core';
import { IonicPage, Refresher, Events, ModalController, NavController,NavParams,AlertController } from 'ionic-angular';
import { UserProvider, LoadingProvider, WooCommerceProvider ,RestProvider,ToastProvider,CartProvider} from '../../providers/providers';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
products:any;
product1:any;
  getproduct = {
    method:'get_product_detail',
    p_id:0 ,
    email:'abc.abc@gmail.com'
  }; 
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
 flag=0;
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
    constructor(public alert: AlertController,private cart: CartProvider,public storage:Storage,public restProvider: RestProvider,public datepipe: DatePipe, private toast: ToastProvider,public navParams: NavParams,public nav: NavController, private events: Events, private modal: ModalController, private loader: LoadingProvider, private user: UserProvider, private woo: WooCommerceProvider) {
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

writereview(product)
{
  if(this.user.user.user_email)
  {
   this.goTo('WritereviewPage',product)
  }
  else
  {
    this.toast.show("Please login to write a review");
  }


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
  let edate=this.datepipe.transform(this.newdeliverydate,'EEEE');
  console.log(""+edate);
  let latest_date =this.datepipe.transform(this.newdeliverydate,'M/d/yyyy');
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
     this.newdeliverydate='';
    }  
  }
 
  else{


    if(parseInt(this.ctime)>7&&parseInt(this.ctime)<17)
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

 if(this.timing.length==0)
    {
      this.toast.show("Time slots are over please select next date");
      this.newdeliverydate='';
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
    this.newdeliverydate='';
  }
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


reqbyagain()
{
  this.alert.create({
    title: "Buy again",
    message: "Do you want to repeat this order",
    buttons: [{
      text: 'Yes',
      handler: () => {
      //	this.loader.dismiss();
       this.buyAgain()
      }
      },
      {
        text: 'No',
       
        }
    ]
}).present();
}

buyAgain()
{
  this.cart.reset();
  this.getproduct.email=this. user.user.user_email;
  console.log(this.orders);
  for(let p of this.orders.details)
  {
    console.log(p);
    this.getproduct.p_id=p.p_id;
    this.restProvider.getProduct(this.getproduct)
    .then(data => {
      this.products = data;
     
      console.log(this.products);
      this.product1=this.products[0];
      if(this.product1.stock<1)
      {
        //this.toast.show("Currently this product is out of stock");
       
       this.flag=1;
      }else
      {

      this.cart.post(this.product1);
     // this.toast.show("Product added to cart");
      }
    
    });
  
  }
  if(this.flag==1)
  {
    this.toast.show("Some product(s) are out of stock from this order");
    this.cart.reset();
  }else
  {
    this.toast.show("product(s) are added to cart ");
    //this.nav.push('Cart1Page');
  }
 
}










}
