import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { WooCommerceProvider, SettingsProvider, LoadingProvider, ToastProvider, UserProvider, OrderProvider, AddressProvider } from '../../../../providers/providers';
import { FormGroup, FormBuilder, Validators,FormControl,AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
//import { FormControl } from '@angular/forms/src/model';

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
  private form : FormGroup;
   phone:AbstractControl;
  data: any;
  countries: any[] = [];
  states: any[] = [];
  countryOpts: any;
  stateOpts: any;
validation_msg:any;

fname:any='';
lname:any='';
mob:any='';
email:any='';
address1:any='';
landmark:any='';
sector:any='';
city:any='';
pincode:any='';



  
  constructor(private setting: SettingsProvider, public viewCtrl: ViewController, private loader: LoadingProvider, private toast: ToastProvider, private translate: TranslateService, private user: UserProvider, private order: OrderProvider, private navParams: NavParams, private address: AddressProvider, private fb: FormBuilder, private woo: WooCommerceProvider) {


    this.fname= this.user.user.fname;
    this.lname=this.user.user.lname;
    this.email=this.user.user.email;
   this.validation_msg={
      'phone':[
        { type:'required', message:'You must enter a phone no.'},
        { type:'minlength', message:'Minimum 10 .'},
        { type:'maxlength', message:'maximum 10 .'},
        { type:'pattern', message:'phone should be composed of numbers.'},
     ]
    
    }

  this.data = navParams.data.params;


  this.form = this.fb.group({
      first_name: [this.data.first_name || (this.user.all ? this.user.user.fname : ''), Validators.required ],
      last_name: this.data.last_name || (this.user.all ? this.user.user.lname : ''),
      email: [this.user.all ? this.user.user.user_email : '', Validators.required],
      phone: ['',Validators.compose([Validators.maxLength(10),Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10)])],
      landmark: [this.data.landmark, Validators.required ],
      area: [this.data.area, Validators.required ],
     city:['',Validators.required],
      address_1: [this.data.address_1, Validators.required ],
      pincode: [this.data.pincode, Validators.required ]
    });
this.phone=this.form.controls['phone'];
    
  }

  
  submit(){
    if(this.address1!=''&&this.city!=''&&this.sector!=''&&this.mob!=''&&this.email!=''&&this.landmark!=''&&this.lname!=''&&this.fname!=''&&this.pincode!='')
{
    if(this.address.all.length == 0)
      this.form.value.primary = true;
    
    if(this.data.primary)
      this.form.value.primary = this.data.primary;

    if(this.data.action == 1) {
      this.address.add(this.form.value); // FOR NEW ADDRESS
      this.translate.get('New adress added').subscribe( x=> {
        this.toast.show(x);
      });
    }

    if(this.data.action == 2) {
      this.address.update(this.navParams.data.index, this.form.value); // UPDATE ADDRESS
      this.translate.get('Address was updated').subscribe( x=> {
        this.toast.show(x);
      });
    }

    if(this.data.action == 3){ // FOR CHECKOUT BILLING
      this.address.add(this.form.value);
      this.order.setBilling(this.form.value);
    }

    if(this.data.action == 4){ // FOR CHECKOUT SHIPPING
      this.address.add(this.form.value);
      this.order.setShipping(this.form.value);
    }

   this.fname='';
    this.lname='';
    this.mob='';
    this. email='';
    this.address1='';
    this.landmark='';
    this.sector='';
    this.city='';
    this.pincode='';

    this.dismiss();
  }
  else
  {
    this.toast.show("All field required...")
   //this.dismiss();
  }
  }

  dismiss() {
		this.viewCtrl.dismiss();
	}

}
