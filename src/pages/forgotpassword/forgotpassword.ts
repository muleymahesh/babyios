import { Component, ViewChild } from '@angular/core';
import { AlertController, App, NavParams, ViewController, Slides, IonicPage, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { UserProvider, ToastProvider, LoadingProvider ,RestProvider} from '../../providers/providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AccountPage } from '../account/account';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  reset = {
    method:'forgot_password',
    email:'',
    mobile:'',
  
  };
  response:any;
  constructor(private fb: FormBuilder, private translate: TranslateService, private navParams: NavParams, private toast: ToastProvider, public user: UserProvider, public loader: LoadingProvider, public alertCtrl: AlertController, public app: App, public viewCtrl: ViewController,public http: HttpClient,public restProvider: RestProvider, public navCtrl: NavController) { 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  resetpassword() {
    if(this.reset.email!=''&&this.reset.mobile!='')
    {
      
      this.restProvider.changePassword(this.reset)
      .then(data => {
      this.response = data;
      if(this.response.result=="success")
      {
        this.toast.show(this.response.responseMessage);
       this. reset = {
          method:'change_password',
          email:'',
          mobile:'',
        
        };
  
      }
      else
      {
        this.toast.show(this.response.responseMessage);
        this. reset = {
          method:'forgot_password',
          email:'',
          mobile:'',
        
        };
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
