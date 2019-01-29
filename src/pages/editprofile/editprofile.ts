import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { WishlistProvider, LoadingProvider, ToastProvider, WooCommerceProvider, HistoryProvider,RestProvider ,CartProvider, UserProvider} from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  reply:any;
  todo = {
    method:'editprofile',
    fname: '',
    lname:'',
    email:'',
      mobile:''
    };
    user:any;
    constructor(private history: HistoryProvider,private cart: CartProvider,public http: HttpClient,public restProvider: RestProvider, private alert: AlertController, private platform: Platform, private socialSharing: SocialSharing, private translate: TranslateService, private toast: ToastProvider, private wishlist: WishlistProvider, private navCtrl: NavController, private loader: LoadingProvider, private modal: ModalController, private navParam: NavParams, private woo: WooCommerceProvider,public _user:UserProvider) {
   
   this.user=this._user.user;
  // this._user.user.fname='abhinandan';
  // this._user.save();
  // this.user=this._user.user;
   this.todo.fname=this.user.fname;
   this.todo.lname=this.user.lname;
   this.todo.email=this.user.user_email;
   console.log(this.user);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  updateuser(){

    if(this.todo.email!=""&&this.todo.fname!=""&&this.todo.lname!=''&&this.todo.mobile!="")
    {
    if(this.todo.mobile.length==10)
    {
     this.loader.present();
    this.restProvider.register(this.todo)
    .then(data => {
     this.reply=data;
      
      if(this.reply.result=="success")
      {
       this.toast.show(this.reply.responseMessage);
      this._user.user.fname=this.reply.first_name;
      this._user.user.lname=this.reply.last_name;
          this._user.save();
          this.navCtrl.pop();
      }
      else if(this.reply.result=="failure")
      {

       this.toast.show(this.reply.responseMessage);
     
      }
     this.loader.dismiss();

    });
  }
    }
    else
    {
      this.toast.show("Mobile no should be 10 digit");
    }



  }

















}
