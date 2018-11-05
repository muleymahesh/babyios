import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { WishlistProvider, LoadingProvider, ToastProvider, WooCommerceProvider, HistoryProvider,RestProvider ,CartProvider} from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  cust:any;
  cfrmpass:any;
  todo = {
    method:'signup',
    fname: '',
    lname:'',
    email:'',
    divice_token:'12aacc',
    password: '',
    mobile:''
    };
    constructor(private history: HistoryProvider,private cart: CartProvider,public http: HttpClient,public restProvider: RestProvider, private alert: AlertController, private platform: Platform, private socialSharing: SocialSharing, private translate: TranslateService, private toast: ToastProvider, private wishlist: WishlistProvider, private navCtrl: NavController, private loader: LoadingProvider, private modal: ModalController, private navParam: NavParams, private woo: WooCommerceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  getReegister() {

    if(this.todo.email!=""&&this.todo.fname!=""&&this.todo.lname!=''&&this.todo.mobile!=""&&this.todo.password!='')
    
    {
      if(this.todo.password.length>3)
      {
        if(this.todo.password==this.cfrmpass)
        {
    this.restProvider.register(this.todo)
    .then(data => {
      this.cust = data;

      console.log(this.cust);
      
      if(this.cust.result=="success")
      {
       this.toast.show(this.cust.responseMessage);

      this.todo = {
        method:'signup',
        fname: '',
        lname:'',
        email:'',
        divice_token:'12aacc',
        password: '',
        mobile:''
        };
        this.navCtrl.push('LoginPage');
      }
      else if(this.cust.result=="failure")
      {
       this.toast.show(this.cust.responseMessage);
     
      }

    });
  }
else
{
  this.toast.show("new password and confirm password are not same");
}
  
}
else
{
  this.toast.show("Password should be more than 3 character");
}

}
else
{
  this.toast.show("All field required");
}
}
}
