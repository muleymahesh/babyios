import { Component, ViewChild } from '@angular/core';
import { AlertController, App, NavParams, ViewController, Slides, IonicPage, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { UserProvider, ToastProvider, LoadingProvider ,RestProvider} from '../../providers/providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AccountPage } from '../account/account';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  private loginForm : FormGroup;
  private signupForm : FormGroup;
  rootPage: any;
  users: any;
  todo = {
    method:'login',
    email: '',
    password: ''
  };
  private resetForm : FormGroup;

  constructor(private nav: NavController,private fb: FormBuilder, private translate: TranslateService, private navParams: NavParams, private toast: ToastProvider, public user: UserProvider, public loader: LoadingProvider, public alertCtrl: AlertController, public app: App, public viewCtrl: ViewController,public http: HttpClient,public restProvider: RestProvider, public navCtrl: NavController) { 
    this.loginForm = this.fb.group({
      user: ['', Validators.required ],
      pass: ['', Validators.required ]
    });

    this.signupForm = this.fb.group({
      name: ['', Validators.required ],
      user: ['', Validators.required ],
      email: ['', Validators.email ],
      pass: ['', Validators.required ],
      pass2: ['', Validators.required ]
    })

    this.resetForm = this.fb.group({
      email: ['', Validators.email ]
    });
  }

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  submitSignup() {
    this.loader.present();

    this.user.nonce('user', 'register').map(x => x.json()).subscribe( x => {
      this.signupForm.value.nonce = x.nonce;
      this.user.signup(this.signupForm.value).map(y => y.json())
        .subscribe( (y) => {
          let tmp = {
            user: this.signupForm.value.user,
            pass: this.signupForm.value.pass
          }
          this.user.login(tmp).map(res => res.json())
            .subscribe( res => {
              if(res.status == 'ok'){
                this.user._loggedIn(res, this.navParams.data.tabIndex);
                this.translate.get(['REGIST_SUCCESS'], {value: this.signupForm.value.name}).subscribe( x=> {
                  this.toast.show(x.REGIST_SUCCESS);
                });
                this.dismiss();
                this.loader.dismiss();
              }else{
                this.toast.show(res.error);
              }
            }, err => {
              this.loader.dismiss();
              this.toast.show(err.json().error);        
            });
      }, err => {
        this.loader.dismiss();
        this.toast.show(err.json().error);        
      });
    }, err => {
      this.loader.dismiss();
      this.toast.show(err.json().error);        
    });
  }

  submitReset(){
    this.loader.present();
    this.user.reset(this.resetForm.value).map(res => res.json())
      .subscribe( (res) => {
        if(res.status == 'ok')
          this.toast.show(res.msg);
        else
          this.toast.show(res.error);
        this.loader.dismiss();
    }, err => {
      this.loader.dismiss();
      this.toast.show(err.json().error);        
    });
  }

  submitLogin() {
    this.loader.present();
    // this.restProvider.login(this.todo)
    // .then(data => {
    //   this.users = data;
    //   console.log(this.users);
    // });

    // this.user.login(this.loginForm.value).map(res => res.json())
    //   .subscribe( (res) => {
      this.restProvider.login(this.todo)
      .then(data => {
        this.users = data;
        if( this.users.result == 'success'){
          console.log(this.users);
          this.user._loggedIn(this.users, this.navParams.data.tabIndex);
           this.translate.get(['LOGIN_SUCCESS'], {value: this.user.user.fname}).subscribe( x=> {
             this.toast.show("login successfull");
           });

           this.goHome();
        }else
          this.toast.show(this.users.result);
      this.loader.dismiss();
    }, err => {
      this.loader.dismiss();
      this.toast.show(err.json().error);        
    });
  }
  
  dismiss() {
		this.viewCtrl.dismiss();
  }
  
  goHome(){
   this.nav.popToRoot();
   this.nav.parent.select(0);
  }

  goTo(page, params){
    this.navCtrl.push(page, {params: params});
  }
}
