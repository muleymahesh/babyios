import { Component, ViewChild } from '@angular/core';
import { AlertController, App, NavParams, ViewController, Slides, IonicPage, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { UserProvider, ToastProvider, LoadingProvider ,RestProvider} from '../../providers/providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AccountPage } from '../account/account';
import { TabsPage } from '../tabs/tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
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
  userData:any;
  users: any;
  todo = {
    method:'login',
    email: '',
    password: ''
  };
  private resetForm : FormGroup;

  constructor(private nav: NavController,private fb: FormBuilder, private translate: TranslateService, private navParams: NavParams, private toast: ToastProvider, public user: UserProvider, public loader: LoadingProvider, public alertCtrl: AlertController, public app: App, public viewCtrl: ViewController,public http: HttpClient,public restProvider: RestProvider, public navCtrl: NavController, private FB:Facebook) { 
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
      if(this.todo.email!=''&&this.todo.password!='')
      {
      this.restProvider.login(this.todo)
      .then(data => {
        console.log(data);
        this.users = data;
        if( this.users.result == 'success'){
          console.log(this.users);
          this.user._loggedIn(this.users, this.navParams.data.tabIndex);
           this.translate.get(['LOGIN_SUCCESS'], {value: this.user.user.fname}).subscribe( x=> {
             this.toast.show("login successfull");
           });

          this.todo = {
            method:'login',
            email: '',
            password: ''
          };
           //this.nav.popToRoot();
          //  this.nav.parent.select(0);
          //  this.nav.setRoot(this.rootPage);
         this.goHome();  
        }else
          this.toast.show(this.users.result);
          this.todo = {
            method:'login',
            email: '',
            password: ''
          };
      this.loader.dismiss();
    }, err => {
      this.loader.dismiss();
      this.todo = {
        method:'login',
        email: '',
        password: ''
      };
      this.toast.show(err.json().error);        
    });
  }
  else
  {
    this.todo = {
      method:'login',
      email: '',
      password: ''
    };
    this.toast.show("All feild are required"); 
    this.loader.dismiss();
  }
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


  loginwithfb(){
    
   
this.FB.login(['public_profile', 'user_friends', 'email'])
.then((res: FacebookLoginResponse) => {
  if(res.status==='connected')
  {
this.getdata(res.authResponse.accessToken)
this.goHome();
  }else
  {
    this.toast.show("Login Failed")
  }
console.log('Logged into Facebook!', res)
})
.catch(e => console.log('Error logging into Facebook', e));

    
  }



  getdata(access_token:string){

let url='https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token='+access_token;
this.http.get(url).subscribe(data=>{
console.log(data);
this.users=data;

this.user._loggedInFB(this.users, this.navParams.data.tabIndex);
this.translate.get(['LOGIN_SUCCESS'], {value: this.user.user.fname}).subscribe( x=> {
  this.toast.show("login successfull");
});



})

}



loginwithGoogle(){
  // this.google.login({})
  // .then(res => console.log(res))
  // .catch(err => console.error(err));

}



}
