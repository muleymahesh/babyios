import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import {LoadingProvider, CartProvider, ToastProvider, WishlistProvider,RestProvider, UserProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ServicecategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicecategory',
  templateUrl: 'servicecategory.html',
})
export class ServicecategoryPage {
  services:any;
  servicesreq={
    method:'get_services_by_cat',
    category:''
    
  }
  constructor( private navParam: NavParams,private loader: LoadingProvider,public user:UserProvider,public navCtrl: NavController, private toast: ToastProvider ,public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {
  this.servicesreq.category=this.navParam.data.params.category;
    this.getServices();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicecategoryPage');
  }

  getServices() {
    this.loader.present();
    
        
      this.restProvider.serviceOperations(this.servicesreq)
      .then(data => {
        console.log(data);
        if(data.length>0)
        {
          this.services=data;
        }
       else{
        this.toast.show("Data not available");
       }
      });
    
  
    this.loader.dismiss();
    }
    goTo(page: string, params: any){
      this.navCtrl.push(page, {params: params});
    }

}
