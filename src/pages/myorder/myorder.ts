
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, NavParams, ViewController, Slides, IonicPage, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { UserProvider, ToastProvider, LoadingProvider ,RestProvider} from '../../providers/providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AccountPage } from '../account/account';
// import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})




export class MyorderPage {
   myOrders:any;
  orderrequest={
    method:'get_order',
    user_id:this. user.user.user_email,
   

  }

  
  constructor(public nav: NavController,private translate: TranslateService, private navParams: NavParams, private toast: ToastProvider, public user: UserProvider, public loader: LoadingProvider, public alertCtrl: AlertController, public app: App, public viewCtrl: ViewController,public http: HttpClient,public restProvider: RestProvider, public navCtrl: NavController) {
// if(this.user.user.user_id)
// {
//    this.myOrder();
// }
// else{
//   console.log("You are not login..")
// }
  }

  ionViewDidEnter(){
		if(this.user.user.user_email)
		{
     this.myOrder();
    }
    else{
      this.toast.show("You are not Logged in....");
    }
	}

  myOrder() {
    this.restProvider.getMyOrder(this.orderrequest)
    .then(data => {
    console.log(data);
    if(data.result=='failed')
    {
      this.toast.show("No orders");
	
  }
  else{
    this.myOrders = data.orders;
   
  }
    });

  }

	goTo(page, params){
		this.nav.push(page,{params: params});
	}
}

