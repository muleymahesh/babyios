import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, WishlistProvider,HistoryProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { App } from '../../app/app.global';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  response:any;
  todo = {
    method:'add_feedback',
    name:'',
    email: '',
    detail: ''
  };
  constructor(public history: HistoryProvider,public nav: NavController, statusBar: StatusBar, private translate: TranslateService, private toast: ToastProvider, public wishlist: WishlistProvider, public loader: LoadingProvider, public modalCtrl: ModalController, private woo: WooCommerceProvider,public restProvider: RestProvider,public http: HttpClient) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  submitFeedback()
  {
    if(this.todo.name!=''&&this.todo.email!=''&&this.todo.detail!='')
    {
  this.restProvider.feedbackOperation(this.todo)
  .then(data => {
  this.response = data;
  if(this.response.result=="success")
  {
    this.toast.show(this.response.responseMessage);

  }
  else
  {
    this.toast.show(this.response.responseMessage);
  }
  });
  console.log(this.response);
}
else
{
  this.toast.show("All field required");
}
 
}


}
