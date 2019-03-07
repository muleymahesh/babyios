webpackJsonp([32],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { FormControl } from '@angular/forms/src/model';
var AddAddressPage = (function () {
    function AddAddressPage(setting, viewCtrl, loader, toast, translate, user, order, navParams, address, fb, woo) {
        this.setting = setting;
        this.viewCtrl = viewCtrl;
        this.loader = loader;
        this.toast = toast;
        this.translate = translate;
        this.user = user;
        this.order = order;
        this.navParams = navParams;
        this.address = address;
        this.fb = fb;
        this.woo = woo;
        this.countries = [];
        this.states = [];
        this.fname = '';
        this.lname = '';
        this.mob = '';
        this.email = '';
        this.address1 = '';
        this.landmark = '';
        this.sector = '';
        this.city = '';
        this.pincode = '';
        this.fname = this.user.user.fname;
        this.lname = this.user.user.lname;
        this.email = this.user.user.email;
        this.validation_msg = {
            'phone': [
                { type: 'required', message: 'You must enter a phone no.' },
                { type: 'minlength', message: 'Minimum 10 .' },
                { type: 'maxlength', message: 'maximum 10 .' },
                { type: 'pattern', message: 'phone should be composed of numbers.' },
            ]
        };
        this.data = navParams.data.params;
        this.form = this.fb.group({
            first_name: [this.data.first_name || (this.user.all ? this.user.user.fname : ''), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            last_name: this.data.last_name || (this.user.all ? this.user.user.lname : ''),
            email: [this.user.all ? this.user.user.user_email : '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern("[0-9]*"), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(10)])],
            landmark: [this.data.landmark, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            area: [this.data.area, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            address_1: [this.data.address_1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pincode: [this.data.pincode, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.phone = this.form.controls['phone'];
    }
    AddAddressPage.prototype.submit = function () {
        var _this = this;
        if (this.address1 != '' && this.city != '' && this.sector != '' && this.mob != '' && this.email != '' && this.landmark != '' && this.lname != '' && this.fname != '' && this.pincode != '') {
            if (this.address.all.length == 0)
                this.form.value.primary = true;
            if (this.data.primary)
                this.form.value.primary = this.data.primary;
            if (this.data.action == 1) {
                this.address.add(this.form.value); // FOR NEW ADDRESS
                this.translate.get('New adress added').subscribe(function (x) {
                    _this.toast.show('New adress added');
                });
            }
            if (this.data.action == 2) {
                this.address.update(this.navParams.data.index, this.form.value); // UPDATE ADDRESS
                this.translate.get('Address was updated').subscribe(function (x) {
                    _this.toast.show('Address was updated');
                });
            }
            if (this.data.action == 3) {
                this.address.add(this.form.value);
                this.order.setBilling(this.form.value);
            }
            if (this.data.action == 4) {
                this.address.add(this.form.value);
                this.order.setShipping(this.form.value);
            }
            this.fname = '';
            this.lname = '';
            this.mob = '';
            this.email = '';
            this.address1 = '';
            this.landmark = '';
            this.sector = '';
            this.city = '';
            this.pincode = '';
            this.dismiss();
        }
        else {
            this.toast.show("All field required...");
            //this.dismiss();
        }
    };
    AddAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddAddressPage;
}());
AddAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-address',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/saved-address/add-address/add-address.html"*/'<ion-header no-border no-lines>\n    <ion-navbar color="primary">\n      	<ion-title>Address</ion-title>\n      <ion-buttons start>\n        <button start color="white" start icon-only ion-button (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="form" (ngSubmit)="submit()" novalidate>  \n  <ion-list>\n      <h1 margin-left margin-bottom>{{data.action==2 ? (\'EDIT\' | translate) : (\'ADD\' | translate)}} {{ \'ADDRESS\' | translate}}</h1>\n      <ion-item>\n          <ion-input [(ngModel)]="fname" formControlName="first_name" type="text" placeholder="{{ \'FIRST NAME\' | translate}}" required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-input [(ngModel)]="lname" formControlName="last_name" type="text" placeholder="{{ \'LAST NAME\' | translate}}"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!user.user.all">\n          <ion-input [(ngModel)]="email" formControlName="email" type="email" placeholder="{{ \'EMAIL\' | translate}}"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-input [(ngModel)]="mob" type="tel" maxlength="10"   formControlName="phone" placeholder="{{ \'PHONE\' | translate}}"></ion-input>\n        </ion-item>\n\n        <div *ngFor="let validation of validation_msg.phone">\n          <div *ngIf="phone.hasError(validation.type) && (phone.dirty || phone.touched)">\n       <p padding style="text-align:left; color:red;"> *{{validation.message }}</p>\n        </div>\n      </div>\n        \n\n      <ion-item>\n        \n        <ion-label>City</ion-label>\n        <ion-select [(ngModel)]="city" formControlName="city">\n            <ion-option>Noida</ion-option>\n         </ion-select> \n    \n      </ion-item>\n\n\n\n\n\n\n        <ion-item>\n            <!-- <ion-label>{{ \'COUNTRY\' | translate}}</ion-label>\n            <ion-select formControlName="country" [selectOptions]="countryOpts" placeholder="{{ \'SELECT\' | translate}} {{ \'COUNTRY\' | translate}}" cancelText="{{ \'CANCEL\' | translate}}" okText="{{ \'SELECT\' | translate}}" required (ionChange)="getStates()">\n              <ion-option *ngFor="let x of countries" [value]="x.id" [innerHTML]="x.name"></ion-option>\n            </ion-select> -->\n<!-- \n            <ion-input  type="text" placeholder="{{ \'pincode\' | translate}}"></ion-input> -->\n            <ion-label>PINCODE</ion-label>\n            <ion-select [(ngModel)]="pincode" formControlName="pincode">\n                <ion-option>201301</ion-option>\n                <ion-option>201303</ion-option>\n                <ion-option>201304</ion-option>\n                <ion-option>201305</ion-option>\n                <ion-option>201307</ion-option>\n                <ion-option>201309</ion-option>\n                <ion-option>201310</ion-option>\n                    </ion-select> \n        \n          </ion-item>\n      <ion-item>\n        <!-- <ion-item *ngIf="states.length > 0 || this.data.state">\n            <ion-label>{{ \'STATE\' | translate}}</ion-label>\n            <ion-select formControlName="state" [selectOptions]="stateOpts" placeholder="{{ \'SELECT\' | translate}} {{ \'STATE\' | translate}}" cancelText="{{ \'CANCEL\' | translate}}" okText="{{ \'SELECT\' | translate}}" required>\n              <ion-option *ngFor="let x of states" [value]="x.id" [innerHTML]="x.name"></ion-option>\n            </ion-select> -->\n            <ion-label>AREA</ion-label>\n            <ion-select [(ngModel)]="sector" formControlName="area">\n                <ion-option>Sector 12</ion-option>\n                <ion-option>Sector 15</ion-option>\n                <ion-option>Sector 16</ion-option>\n                <ion-option>Sector 16A</ion-option>\n                <ion-option>Sector 17</ion-option>\n                <ion-option>Sector 19</ion-option>\n                <ion-option>Sector 21</ion-option>\n                <ion-option>Sector 22</ion-option>\n                <ion-option>Sector 23</ion-option>\n                <ion-option>Sector 24</ion-option>\n                <ion-option>Sector 25</ion-option>\n                <ion-option>Sector 26</ion-option>\n                <ion-option>Sector 27</ion-option>\n                <ion-option>Sector 28</ion-option>\n                <ion-option>Sector 29</ion-option>\n                <ion-option>Sector 30</ion-option>\n                <ion-option>Sector 32</ion-option>\n                <ion-option>Sector 33</ion-option>\n                <ion-option>Sector 34</ion-option>\n                <ion-option>Sector 36</ion-option>\n                <ion-option>Sector 37</ion-option>\n                <ion-option>Sector 40</ion-option>\n                <ion-option>Sector 41</ion-option>\n                <ion-option>Sector 42</ion-option>\n                <ion-option>Sector 44</ion-option>\n                <ion-option>Sector 45</ion-option>\n                <ion-option>Sector 46</ion-option>\n                <ion-option>Sector 47</ion-option>\n                <ion-option>Sector 48</ion-option>\n                <ion-option>Sector 49</ion-option>\n                <ion-option>Sector 50</ion-option>\n                <ion-option>Sector 51</ion-option>\n                <ion-option>Sector 52</ion-option>\n                <ion-option>Sector 55</ion-option>\n                <ion-option>Sector 56</ion-option>\n                <ion-option>Sector 61</ion-option>\n                <ion-option>Sector 62</ion-option>\n                <ion-option>Sector 70</ion-option>\n                <ion-option>Sector 71</ion-option>\n                <ion-option>Sector 72</ion-option>\n                <ion-option>Sector 73</ion-option>\n                <ion-option>Sector 74</ion-option>\n                <ion-option>Sector 75</ion-option>\n                <ion-option>Sector 76</ion-option>\n                <ion-option>Sector 77</ion-option>\n                <ion-option>Sector 78</ion-option>\n                <ion-option>Sector 79</ion-option>\n                <ion-option>Sector 82</ion-option>\n                <ion-option>Sector 91</ion-option>\n                <ion-option>Sector 92</ion-option>\n                <ion-option>Sector 93A</ion-option>\n                <ion-option>Sector 93B</ion-option>\n                <ion-option>Sector 94</ion-option>              \n                <ion-option>Sector 82</ion-option>\n                <ion-option>Sector 93</ion-option>\n                <ion-option>Sector 99</ion-option>\n                <ion-option>Greater Noida West</ion-option>\n                <ion-option>Sector 100</ion-option>\n                <ion-option>Sector 104</ion-option>\n                <ion-option>Sector 105</ion-option>\n                <ion-option>Sector 107</ion-option>\n                <ion-option>Sector 108</ion-option>\n                <ion-option>Sector 110</ion-option>\n                <ion-option>Sector 117</ion-option>\n                <ion-option>Sector 118</ion-option>\n                <ion-option>Sector 119</ion-option>\n                <ion-option>Sector 120</ion-option>\n                <ion-option>Sector 121</ion-option>\n                <ion-option>Sector 124</ion-option>\n                <ion-option>Sector 125</ion-option>\n                <ion-option>Sector 126</ion-option>\n                <ion-option>Sector 127</ion-option>\n                <ion-option>Sector 128</ion-option>\n                <ion-option>Sector 129</ion-option>\n                <ion-option>Sector 131</ion-option>\n                <ion-option>Sector 133</ion-option>\n                <ion-option>Sector 134</ion-option>\n                <ion-option>Sector 135</ion-option>\n                <ion-option>Sector 137</ion-option>\n                <ion-option>Sector 140</ion-option>\n                <ion-option>Sector 141</ion-option>\n                <ion-option>Sector 143</ion-option>\n                <ion-option>Sector 143B</ion-option>\n                <ion-option>Sector 144</ion-option>\n               \n                <ion-option>Sector 150</ion-option>\n                <ion-option>Sector 151</ion-option>\n                <ion-option>Sector 15A</ion-option>\n              \n                <ion-option>Sector 168</ion-option>\n               \n                \n                \n                    </ion-select>\n\n            <!-- <ion-input formControlName="area" type="text" placeholder="{{ \'AREA\' | translate}}"></ion-input> -->\n        </ion-item>\n        \n        \n        <!-- <ion-item *ngIf="states.length == 0">\n          <ion-input formControlName="state" type="text" placeholder="{{ \'STATE\' | translate}}" required></ion-input>\n        </ion-item> -->\n\n        <ion-item>\n          <ion-input [(ngModel)]="landmark" formControlName="landmark" type="text" placeholder="{{ \'LANDMARK\' | translate}}" required></ion-input>\n        </ion-item>\n    \n        <!-- <ion-item>\n          <ion-input formControlName="postcode" type="number" inputmode="numeric" pattern="[0-9]*" placeholder="{{ \'POSTCODE\' | translate}}" required></ion-input>\n        </ion-item> -->\n    \n        <ion-item>\n          <ion-textarea [(ngModel)]="address1" formControlName="address_1" name="description" placeholder="{{ \'ADDRESS\' | translate}}" required></ion-textarea>\n        </ion-item>\n\n        <div padding>\n          <button ion-button block>{{ \'SAVE\' | translate}}</button>\n        </div>\n  </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/saved-address/add-address/add-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]])
], AddAddressPage);

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_address__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddAddressPageModule = (function () {
    function AddAddressPageModule() {
    }
    return AddAddressPageModule;
}());
AddAddressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AddAddressPageModule);

//# sourceMappingURL=add-address.module.js.map

/***/ })

});
//# sourceMappingURL=32.js.map