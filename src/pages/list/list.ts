import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, NavParams, ActionSheetController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, WishlistProvider,RestProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  result:any;
	

finalprice:any;

  rlist: any;
  request= {
method:'get_recommended',
  };

  
  newarrivalrequest= {
method:'get_new_arrivals',
  };

  constructor(public nav: NavController,public toast: ToastProvider, private alert: AlertController, fb: FormBuilder, private translate: TranslateService, private loader: LoadingProvider, public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private woo: WooCommerceProvider, public wishlist: WishlistProvider, public actionSheetCtrl: ActionSheetController,public http: HttpClient,public restProvider: RestProvider) {
  
    if(this.navParams.data.params==1)
    {
    
     this.wishlist1();
    }
    else if(this.navParams.data.params==2)
    {
      
     this.newArrival();
    }


  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }



	wishlist1() {
    this.restProvider.getRecommendations(this.request)
    .then(data => {
      this.rlist = data;
		
    });

	}
	
	newArrival() {
    this.restProvider.getNewArrivalList(this.newarrivalrequest)
    .then(data => {
		console.log(data);
			      this.rlist = data;
		
    });

  }


  pricestrikt(discount,price)
  {
   
      if(discount!=0)
      {
        this.result=(discount/100)*price;
        this.finalprice=price-this.result;
        return parseInt(this.finalprice);

          }
          else
          {
            return 0;
          }
 
  }


	goTo(page, params){
		this.nav.push(page,{params: params});
	}

}
