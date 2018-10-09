import { Component, ViewChild } from '@angular/core';
import { AlertController, App, NavParams, ViewController, Slides, IonicPage, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { UserProvider, ToastProvider, LoadingProvider ,RestProvider} from '../../providers/providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AccountPage } from '../account/account';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the ChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change',
  templateUrl: 'change.html',
})
export class ChangePage {
response:any;
  passRequest = {
    method:'change_password',
    email:this.user.user.user_email,
    oldpass:'',
    newpass:''
    };

    constructor(private fb: FormBuilder, private translate: TranslateService, private navParams: NavParams, private toast: ToastProvider, public user: UserProvider, public loader: LoadingProvider, public alertCtrl: AlertController, public app: App, public viewCtrl: ViewController,public http: HttpClient,public restProvider: RestProvider, public navCtrl: NavController) { 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePage');
  }



changePassword() {
		this.restProvider.changePassword(this.passRequest)
		.then(data => {
		this.response = data;
	
    });
    
    if(this.response=="success")
    {
      this.toast.show("Your password change successfully...");

    }
    else
    {
      this.toast.show("Something went worng...");
    }
		}
 


  }
