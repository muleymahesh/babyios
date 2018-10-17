import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import {LoadingProvider, CartProvider, ToastProvider, WishlistProvider,RestProvider, UserProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
services:any;
servicesreq={
  method:'get_services_category',
  
}
constructor(private loader: LoadingProvider,public user:UserProvider,public navCtrl: NavController, private toast: ToastProvider ,public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {

//this.getServices();
}

  ionViewDidLoad() {
    this.getServices();
    console.log('ionViewDidLoad ServicesPage');
  }


  getServices() {
    this.loader.present();
    
        
      this.restProvider.serviceOperations(this.servicesreq)
      .then(data => {
        console.log(data);
       this.services=data;
      });
    
  
    this.loader.dismiss();
    }
  


}
