webpackJsonp([20],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkout1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(57);
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
    function Checkout1Page(datepipe, restProvider, setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
        var _this = this;
        this.datepipe = datepipe;
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
        // String req="{\"method\":\"add_oder\",\"first_name\":\""+addresses.get(0).getFname()+"\",\"last_name\":\""+addresses.get(0).getLname()+"\"," +
        // "\"gender\":\"Male\",\"email\":\""+new AppPreferences(PlaceOrderActivity.this).getEmail()+"\",\"amount\":\""+amount+
        // "\",\"shipping_type\":\""+spnPaymentType.getSelectedItem().toString()+"\",\"street\":\""+addresses.get(0).getArea()+"\",\"city\":\""+addresses.get(0).getAddr()+"\",\"state\":\""+addresses.get(0).getLandmark()+"\",\"country\":\"India\",\"zipcode\":\""+addresses.get(0).getZipcode()+
        // "\",\"phone\":\""+addresses.get(0).getPhone()+"\",\"order_detail\":\"Delivery Date "+txtDate.getText().toString()+", between "+spnTimeSlot.getSelectedItem().toString()+"\",\"user_id\":\"23\",\"p_id\":\""+p_id+"\",\"qty\":\""+qty+"\"}";
        this.times = [
            {
                "stime": 8,
                "etime": 11,
                "slots": ["11-1PM", "1-3PM", "3-5PM", "5-7PM"]
            },
            {
                "stime": 10,
                "etime": 13,
                "slots": ["1-3PM", "3-5PM", "5-7PM"]
            },
            {
                "stime": 12,
                "etime": 15,
                "slots": ["3-5PM", "5-7PM"]
            },
            {
                "stime": 14,
                "etime": 17,
                "slots": ["5-7PM"]
            },
        ];
        this.timing = [];
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
            amount: 0,
            // amount:this._cart.total,
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
        if (this.address.getPrimary) {
            console.log(this.address.getPrimary);
        }
        console.log(this.times);
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
        if (this.address.getPrimary) {
            this.billing = this.address.getPrimary;
            console.log(this.billing);
        }
        this.platform.ready().then(function () {
            if (_this.address.getPrimary) {
                _this.billing = _this.address.getPrimary;
            }
        });
        //this.setOrder();
        this.product = this._cart.all;
        console.log(this.address.getPrimary);
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
    Checkout1Page.prototype.ionViewWillEnter = function () {
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
        if (this.address.getPrimary) {
            this.billing = this.address.getPrimary;
            console.log(this.billing);
        }
    };
    Checkout1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Checkout1Page');
        if (this.address.getPrimary) {
            this.billing = this.address.getPrimary;
            console.log(this.billing);
        }
    };
    Checkout1Page.prototype.onChange = function () {
        this.timing = [];
        //  console.log(this.details.deliverydate);
        var latest_date = this.datepipe.transform(this.details.deliverydate, 'M/d/yyyy');
        var c_date = this.datepipe.transform(new Date(), 'M/d/yyyy');
        console.log(latest_date);
        console.log(c_date);
        if (latest_date == c_date) {
            this.ctime = new Date().getHours();
            console.log("ctime is=" + this.ctime);
            if (parseInt(this.ctime) > 7 && parseInt(this.ctime) < 17) {
                for (var _i = 0, _a = this.times; _i < _a.length; _i++) {
                    var s = _a[_i];
                    console.log("ctime=" + this.ctime);
                    console.log("stime=" + s.stime);
                    console.log("int ctime=" + parseInt(this.ctime));
                    if (s.stime < parseInt(this.ctime) && s.etime > parseInt(this.ctime)) {
                        console.log("I am in if stime=" + s.stime);
                        for (var _b = 0, _c = s.slots; _b < _c.length; _b++) {
                            var s1 = _c[_b];
                            this.timing.push(s1);
                        }
                        console.log(this.timing);
                    }
                }
            }
            else if (parseInt(this.ctime) > 17) {
                this.toast.show("Time sloats are over please select next date");
                this.details.deliverydate = '';
            }
            else {
                this.timing = ["9-11AM", "11-1PM", "1-3PM", "3-5PM", "5-7PM"];
            }
        }
        else {
            this.timing = ["9-11AM", "11-1PM", "1-3PM", "3-5PM", "5-7PM"];
        }
    };
    Checkout1Page.prototype.setOrder = function () {
        console.log(this.address.getPrimary);
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
    // placeorder()
    // {
    //   console.log(this._cart.total);
    // }
    Checkout1Page.prototype.placeorder = function () {
        var _this = this;
        if (this.address.getPrimary) {
            this.placeorderreq.last_name = this.billing.last_name;
            this.placeorderreq.street = this.billing.area;
            this.placeorderreq.state = this.billing.landmark;
            this.placeorderreq.zipcode = this.billing.pincode;
            this.placeorderreq.phone = this.billing.phone;
            this.placeorderreq.p_id = this.p_id;
            this.placeorderreq.qty = this.qty;
            if (this._cart.total < 200) {
                this.placeorderreq.amount = this._cart.total + 30;
            }
            else {
                this.placeorderreq.amount = this._cart.total;
            }
            this.placeorderreq.order_detail = "Delivery Date " + this.details.deliverydate + ",between " + this.details.timesloat;
            // String req="{\"method\":\"add_oder\",\"first_name\":\""+addresses.get(0).getFname()+"\",\"last_name\":\""+addresses.get(0).getLname()+"\"," +
            // "\"gender\":\"Male\",\"email\":\""+new AppPreferences(PlaceOrderActivity.this).getEmail()+"\",\"amount\":\""+amount+
            // "\",\"shipping_type\":\""+spnPaymentType.getSelectedItem().toString()+"\",\"street\":\""+addresses.get(0).getArea()+"\",\"city\":\""+addresses.get(0).getAddr()+"\",\"state\":\""+addresses.get(0).getLandmark()+"\",\"country\":\"India\",\"zipcode\":\""+addresses.get(0).getZipcode()+
            // "\",\"phone\":\""+addresses.get(0).getPhone()+"\",\"order_detail\":\"Delivery Date "+txtDate.getText().toString()+", between "+spnTimeSlot.getSelectedItem().toString()+"\",\"user_id\":\"23\",\"p_id\":\""+p_id+"\",\"qty\":\""+qty+"\"}";
            // {"method":"add_oder","first_name":"mahesh","last_name":"muley","gender":"Male","email":"muley.mahesh@gmail.com","amount":" //148.00","shipping_type":"cod","street":" Sector 21","city":"abc //building","state":"square","country":"India","zipcode":"201307","phone":"9890473764","order_detail":"Delivery Date 10/06/2016, between 3 - //5PM","user_id":"23","p_id":"356,","qty":"1,"}
            // this.nav.push(ThanksPage);
            //following is the method for order place
            if (this.placeorderreq.first_name != '' && this.placeorderreq.email != '' && this.placeorderreq.phone != '' && this.placeorderreq.zipcode != '' && this.details.deliverydate != '' && this.details.timesloat != '' && this.placeorderreq.shipping_type != '') {
                this.restProvider.feedbackOperation(this.placeorderreq)
                    .then(function (data) {
                    _this.response = data;
                    if (_this.response.result == "success") {
                        _this.toast.show(_this.response.responseMessage);
                        // this.toast.show("Order Placed Successfully");
                        _this._cart.reset();
                        _this.goTo('ThanksPage', 1);
                    }
                    else {
                        _this.toast.show(_this.response.responseMessage);
                    }
                });
                console.log(this.response);
                //   this.toast.show("hiiiiiiii");
            }
            else {
                this.toast.show("All field required");
            }
            // this.toast.show("place order is commented");
        }
        else {
            this.toast.show("Please add address");
        }
    };
    return Checkout1Page;
}());
Checkout1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout1',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/checkout1/checkout1.html"*/'<!--\n  Generated template for the Checkout1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n  <ion-list margin-top padding-top > \n    <div>\n      <h3>{{ \'SHIPPING ADDRESS\' }}</h3>\n      \n    </div>\n    <ion-item no-lines *ngIf="billing">\n      <p>{{billing.first_name}} • {{billing.phone}}</p>\n      <p>{{billing.address_1}}</p>\n      <p>{{billing.area}}, {{billing.landmark}}, {{billing.sector}}</p>\n      <p>{{billing.pincode}}</p>\n  </ion-item>\n    <div padding-horizontal>\n      <button ion-button outline block icon-start tappable (click)="goTo(\'SavedAddressPage\')">\n          {{ \'ADD\'}} {{ \'NEW_ADDRESS\'}}\n      </button>\n      <button ion-button outline block icon-start  tappable (click)="selectAddress(4)">\n          {{ \'SELECT\' }} {{ \'OTHER_ADDRESS\'}}\n      </button>\n    </div>\n  </ion-list>\n</ion-card>\n\n<ion-item>\n   \n    <h6 >Amount :{{_cart.total}}Rs.</h6>\n    <p style="font-size:9px" color="primary" *ngIf="_cart.total<200" >Delivery charge 30 Rs.</p>\n    <h6  *ngIf="_cart.total<200" >Total :{{_cart.total+30}}Rs.</h6>\n    <p style="font-size:9px" color="primary" *ngIf="_cart.total<200">*Orde above 200Rs for free delivery</p>\n</ion-item>\n<ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [min]="minDate" (ionChange)="onChange()"  [max]="maxDate" [(ngModel)]="details.deliverydate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n      <ion-label>Time Slot</ion-label>\n      <ion-select [(ngModel)]="details.timesloat">\n        <ion-option *ngFor="let time of timing" [value]="time" >{{time}}</ion-option>\n     </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Mode of Payment</ion-label>\n        <ion-select [(ngModel)]="placeorderreq.shipping_type">\n          <ion-option> Cash On Delivery</ion-option>\n         \n          <ion-option>COD BHIM 9891850708@UPI</ion-option>\n       \n         </ion-select>\n      </ion-item>\n    \n  \n      <div padding>\n        <button ion-button block icon-start tappable (click)="placeorder()">\n           Place Order\n        </button>\n      </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/checkout1/checkout1.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]) === "function" && _s || Object])
], Checkout1Page);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=checkout1.js.map

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout1PageModule", function() { return Checkout1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout1__ = __webpack_require__(1008);
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