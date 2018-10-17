import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import {LoadingProvider, CartProvider, ToastProvider, WishlistProvider,RestProvider, UserProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ServicedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicedetail',
  templateUrl: 'servicedetail.html',
})
export class ServicedetailPage {
  services:any;
  servicesreq={
    method:'get_services_by_cat',
    category:''
    
  }
  constructor( private navParam: NavParams,private loader: LoadingProvider,public user:UserProvider,public navCtrl: NavController, private toast: ToastProvider ,public navParams: NavParams,public http: HttpClient,public restProvider: RestProvider) {
    this.services=this.navParam.data.params;
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicedetailPage');
  }
 
}
