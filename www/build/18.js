webpackJsonp([18],{

/***/ 1002:
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
    function Checkout1Page(setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
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
        this.checkout = "shipping";
        this.setOrder();
        console.log('ionViewDidLoad Checkout1Page');
    }
    Checkout1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Checkout1Page');
    };
    Checkout1Page.prototype.setOrder = function () {
        console.log('ionViewDidLoad Checkout1Page');
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
        this.toast.show("Order Placed Successfully");
        this.goTo('ThanksPage', 1);
        // this.nav.push(ThanksPage);
    };
    return Checkout1Page;
}());
Checkout1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout1',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/checkout1/checkout1.html"*/'<!--\n  Generated template for the Checkout1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n  <ion-list margin-top padding-top > \n    <div>\n      <h3>{{ \'SHIPPING ADDRESS\' }}</h3>\n      \n    </div>\n    <ion-item no-lines *ngIf="billing">\n      <p>{{billing.first_name}} • {{billing.phone}}</p>\n      <p>{{billing.address_1}}</p>\n      <p>{{billing.area}}, {{billing.landmark}}, {{billing.sector}}</p>\n      <p>{{billing.pincode}}</p>\n  </ion-item>\n    <div padding-horizontal>\n      <button ion-button outline block icon-start tappable (click)="addAddress(4)">\n          {{ \'ADD\'}} {{ \'NEW_ADDRESS\'}}\n      </button>\n      <button ion-button outline block icon-start  tappable (click)="selectAddress(4)">\n          {{ \'SELECT\' }} {{ \'OTHER_ADDRESS\'}}\n      </button>\n    </div>\n  </ion-list>\n</ion-card>\n<ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat="YYYY/MM/DD"    max="2020-10-31" [(ngModel)]="myDate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n      <ion-label>Time Slot</ion-label>\n      <ion-select [(ngModel)]="toppings">\n        <ion-option>9-11 AM</ion-option>\n        <ion-option>11-1 PM</ion-option>\n        <ion-option>1-3 PM</ion-option>\n        <ion-option>5-7 PM</ion-option>\n            </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Mode of Payment</ion-label>\n        <ion-select [(ngModel)]="payment">\n          <ion-option> Cash On Delivery</ion-option>\n          <ion-option>COD by Paytm</ion-option>\n          <ion-option>COD by BHIM</ion-option>\n       \n         </ion-select>\n      </ion-item>\n    \n  \n      <div padding>\n        <button ion-button block icon-start tappable (click)="placeorder()">\n           Place Order\n        </button>\n      </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/checkout1/checkout1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
], Checkout1Page);

//# sourceMappingURL=checkout1.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout1PageModule", function() { return Checkout1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout1__ = __webpack_require__(1002);
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
//# sourceMappingURL=18.js.map