import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { WishlistProvider, LoadingProvider, UserProvider,ToastProvider, WooCommerceProvider, HistoryProvider,RestProvider ,CartProvider} from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Ionic2RatingModule } from "ionic2-rating";
/**
 * Generated class for the WritereviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writereview',
  templateUrl: 'writereview.html',
})
export class WritereviewPage {
product:any;
rate : any = 0;
reviewreq= {
  method:'rate_product',
  p_id:'',
  review:'',
  rating:'',
  user_id:'',
  name:'',
  title:''
    };

constructor(public user:UserProvider,private history: HistoryProvider,private cart: CartProvider,public http: HttpClient,public restProvider: RestProvider, private alert: AlertController, private platform: Platform, private socialSharing: SocialSharing, private translate: TranslateService, private toast: ToastProvider, private wishlist: WishlistProvider, private navCtrl: NavController, private loader: LoadingProvider, private modal: ModalController, private navParam: NavParams, private woo: WooCommerceProvider) {
  this.product = this.navParam.data.params;

  console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WritereviewPage');
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
    }

  submitReview()
  {
    if(this.user.user.user_email)
    {
      this.reviewreq.p_id=this.product.p_id;
      this.reviewreq.user_id=this.user.user.user_email;
      this.reviewreq.name=this.user.user.fname;
      this.restProvider.reviweOperation(this.reviewreq)
      .then(data => {
        console.log(data);
        if(data.result=="failed")
        {
        
          this.toast.show("Review not submited");
        }
        else if(data.result=="success")
        {
        this.reviewreq= {
            method:'rate_product',
            p_id:'',
            review:'',
            rating:'',
            user_id:'',
            name:'',
            title:''
              };
          this.toast.show("Review submited");
        }
      });
    }
    else
    {
      console.log("You are not Loged in")
    }
    }

  

}
