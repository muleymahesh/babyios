

import { Component} from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams,Nav } from 'ionic-angular';
import { WishlistProvider, LoadingProvider, ToastProvider, WooCommerceProvider, HistoryProvider,RestProvider ,CartProvider} from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
 import { ViewChild } from '@angular/core/src/metadata/di';

export interface PageInterfcae {

 

}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
rootPage='TabsPage';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
