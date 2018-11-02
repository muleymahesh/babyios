webpackJsonp([20],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkout1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Checkout1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Checkout1Page = (function () {
    function Checkout1Page(restProvider, setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
        this.restProvider = restProvider;
        this.setting = setting;
        this.alert = alert;
        this.platform = platform;
        this.nav = nav;
        this.translate = translate;
        this.toast = toast;
        this.user = user;
        this.loader = loader;
        this.woo = woo;
        this._cart = _cart;
        this.events = events;
        this._order = _order;
        this.address = address;
        this.navParams = navParams;
        this.modal = modal;
        this.details = {
            deliverydate: '',
            timesloat: ''
        };
        this.p_id = '';
        this.qty = '';
        this.placeorderreq = {
            method: 'add_oder',
            first_name: this.user.user.fname,
            last_name: '',
            gender: 'male',
            email: this.user.user.user_email,
            amount: this._cart.total,
            shipping_type: '',
            street: '',
            city: 'Noida',
            state: '',
            country: 'India',
            zipcode: '',
            phone: '',
            //order_detail:"Delivery Date"+this.details.deliverydate+",between"+ this.details.timesloat,
            order_detail: '',
            user_id: this.user.user.user_id,
            p_id: '',
            qty: '',
        };
        this.checkout = "shipping";
        this.setOrder();
        this.product = this._cart.all;
        console.log(this.product);
        //  this.placeorderreq={
        //     method:'add_oder' ,
        //     first_name:this.user.user.fname,
        //     last_name:this.billing.last_name,
        //     gender:'male',
        //     email:this.user.user.user_email,
        //     amount:this._cart.total,
        //     shipping_type:'',
        //     street:this.billing.sector,
        //     city:'Noida',
        //     state:this.billing.landmark,
        //     country:'India',
        //     zipcode:this.billing.pincode,
        //     phone:this.billing.phone,
        //     order_detail:'Delivery Date{{deliverydate}},between{{timesloat}}',
        //     user_id:this.user.user.user_id,
        //     p_id:'',
        //     qty:'',
        //    }
        for (var i in this.product) {
            this.p_id += this.product[i].p_id + ",";
            this.qty += this.product[i].quantity + ",";
        }
        console.log(this.p_id);
        console.log(this.qty);
    }
    Checkout1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Checkout1Page');
    };
    Checkout1Page.prototype.setOrder = function () {
        console.log(this.address.getPrimary);
        if (this.address.getPrimary) {
            this.billing = this.address.getPrimary;
            console.log(this.billing);
        }
        // if(this._order.shipping)
        //   this.shipping = this._order.shipping;
    };
    Checkout1Page.prototype.selectAddress = function (action) {
        var params = {
            action: action
        };
        this.modal.create('SavedAddressPage', { params: params }).present();
    };
    Checkout1Page.prototype.addAddress = function (action) {
        var params = {
            action: action
        };
        this.modal.create('AddAddressPage', { params: params }).present();
    };
    Checkout1Page.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    Checkout1Page.prototype.placeorder = function () {
        var _this = this;
        this.placeorderreq.last_name = this.billing.last_name;
        this.placeorderreq.street = this.billing.area;
        this.placeorderreq.state = this.billing.landmark;
        this.placeorderreq.zipcode = this.billing.pincode;
        this.placeorderreq.phone = this.billing.phone;
        this.placeorderreq.p_id = this.p_id;
        this.placeorderreq.qty = this.qty;
        this.placeorderreq.order_detail = "Delivery Date " + this.details.deliverydate + ",between " + this.details.timesloat;
        console.log(this.placeorderreq.order_detail);
        console.log(this.placeorderreq.shipping_type);
        console.log(this.placeorderreq.email);
        console.log(this.placeorderreq.amount);
        console.log(this.placeorderreq.first_name);
        console.log(this.placeorderreq.p_id);
        console.log(this.placeorderreq.qty);
        console.log(this.placeorderreq.last_name);
        console.log(this.placeorderreq.state);
        console.log(this.placeorderreq.street);
        console.log(this.placeorderreq.phone);
        console.log(this.placeorderreq.user_id);
        console.log(this.placeorderreq.zipcode);
        // String req="{\"method\":\"add_oder\",\"first_name\":\""+addresses.get(0).getFname()+"\",\"last_name\":\""+addresses.get(0).getLname()+"\"," +
        // "\"gender\":\"Male\",\"email\":\""+new AppPreferences(PlaceOrderActivity.this).getEmail()+"\",\"amount\":\""+amount+
        // "\",\"shipping_type\":\""+spnPaymentType.getSelectedItem().toString()+"\",\"street\":\""+addresses.get(0).getArea()+"\",\"city\":\""+addresses.get(0).getAddr()+"\",\"state\":\""+addresses.get(0).getLandmark()+"\",\"country\":\"India\",\"zipcode\":\""+addresses.get(0).getZipcode()+
        // "\",\"phone\":\""+addresses.get(0).getPhone()+"\",\"order_detail\":\"Delivery Date "+txtDate.getText().toString()+", between "+spnTimeSlot.getSelectedItem().toString()+"\",\"user_id\":\"23\",\"p_id\":\""+p_id+"\",\"qty\":\""+qty+"\"}";
        // {"method":"add_oder","first_name":"mahesh","last_name":"muley","gender":"Male","email":"muley.mahesh@gmail.com","amount":" //148.00","shipping_type":"cod","street":" Sector 21","city":"abc //building","state":"square","country":"India","zipcode":"201307","phone":"9890473764","order_detail":"Delivery Date 10/06/2016, between 3 - //5PM","user_id":"23","p_id":"356,","qty":"1,"}
        // this.nav.push(ThanksPage);
        if (this.details.deliverydate != '' && this.details.timesloat != '' && this.placeorderreq.shipping_type != '') {
            this.restProvider.feedbackOperation(this.placeorderreq)
                .then(function (data) {
                _this.response = data;
                if (_this.response.result == "success") {
                    _this.toast.show(_this.response.responseMessage);
                    // this.toast.show("Order Placed Successfully");
                    _this.goTo('ThanksPage', 1);
                }
                else {
                    _this.toast.show(_this.response.responseMessage);
                }
            });
            console.log(this.response);
        }
        else {
            this.toast.show("All field required");
        }
    };
    return Checkout1Page;
}());
Checkout1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout1',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/checkout1/checkout1.html"*/'<!--\n  Generated template for the Checkout1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n  <ion-list margin-top padding-top > \n    <div>\n      <h3>{{ \'SHIPPING ADDRESS\' }}</h3>\n      \n    </div>\n    <ion-item no-lines *ngIf="billing">\n      <p>{{billing.first_name}} • {{billing.phone}}</p>\n      <p>{{billing.address_1}}</p>\n      <p>{{billing.area}}, {{billing.landmark}}, {{billing.sector}}</p>\n      <p>{{billing.pincode}}</p>\n  </ion-item>\n    <div padding-horizontal>\n      <button ion-button outline block icon-start tappable (click)="addAddress(4)">\n          {{ \'ADD\'}} {{ \'NEW_ADDRESS\'}}\n      </button>\n      <button ion-button outline block icon-start  tappable (click)="selectAddress(4)">\n          {{ \'SELECT\' }} {{ \'OTHER_ADDRESS\'}}\n      </button>\n    </div>\n  </ion-list>\n</ion-card>\n<ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="YYYY/MM/DD"    max="2020-10-31" [(ngModel)]="details.deliverydate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n      <ion-label>Time Slot</ion-label>\n      <ion-select [(ngModel)]="details.timesloat">\n        <ion-option>9-11 AM</ion-option>\n        <ion-option>11-1 PM</ion-option>\n        <ion-option>1-3 PM</ion-option>\n        <ion-option>5-7 PM</ion-option>\n            </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Mode of Payment</ion-label>\n        <ion-select [(ngModel)]="placeorderreq.shipping_type">\n          <ion-option> Cash On Delivery</ion-option>\n          <ion-option>COD by Paytm</ion-option>\n          <ion-option>COD by BHIM</ion-option>\n       \n         </ion-select>\n      </ion-item>\n    \n  \n      <div padding>\n        <button ion-button block icon-start tappable (click)="placeorder()">\n           Place Order\n        </button>\n      </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/checkout1/checkout1.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* SettingsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WooCommerceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WooCommerceProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]) === "function" && _r || Object])
], Checkout1Page);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
//# sourceMappingURL=checkout1.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout1PageModule", function() { return Checkout1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout1__ = __webpack_require__(1006);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Checkout1PageModule = (function () {
    function Checkout1PageModule() {
    }
    return Checkout1PageModule;
}());
Checkout1PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checkout1__["a" /* Checkout1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout1__["a" /* Checkout1Page */]),
        ],
    })
], Checkout1PageModule);

//# sourceMappingURL=checkout1.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map