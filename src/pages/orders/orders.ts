import { Component } from '@angular/core';
import { IonicPage, Refresher, Events, ModalController, NavController,NavParams } from 'ionic-angular';
import { UserProvider, LoadingProvider, WooCommerceProvider ,RestProvider,ToastProvider} from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  // status: string = "paid";
  orders: any ;
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


  constructor(public restProvider: RestProvider, private toast: ToastProvider,public navParams: NavParams,public nav: NavController, private events: Events, private modal: ModalController, private loader: LoadingProvider, private user: UserProvider, private woo: WooCommerceProvider) {
    // this.setRootForGuest();
    // this.listenIsLoggedIn();
    // this.listenIsLoggedOut();
    this.orders = this.navParams.data.params;
     
    
  // this.returnrequest.order_id=this.navParams.data.params.o_id;
 //  this.canclerequest.order_id=this.navParams.data.params.o_id;
   this.returnrequest.user_email=this.user.user.user_email;
    console.log(this.orders);
    this.str=this.navParams.data.params.o_id;
    // this.setForUser();
  }

  // listenIsLoggedIn(){
  //   this.events.subscribe('user:login', (res) => {
  //     this.setForUser();
  //   });
  // }

  // listenIsLoggedOut(){
  //   this.events.subscribe('user:logout', () => {
  //     this.setRootForGuest();
  //   });
  // }

 

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
    this.toast.show("Something is wrong please contact Us");
    
  }
  });

}
 
inovice(){
  console.log(this.str);
this.str1=this.str.substring(2);
console.log(this.str1);
this.restProvider.Inovice(this.str1)


}


returnOrder(){
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
    this.toast.show("Something is wrong please contact Us");
    
  }
  });

}

pop() {
  this.nav.pop();
}


  goTo(params){
    this.nav.push('OrderDetailPage', {params: params});
  }

}
