webpackJsonp([21],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
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
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = (function () {
    function ConfirmPage(alertCtrl, _cart1, datepipe, restProvider, setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
        this.alertCtrl = alertCtrl;
        this._cart1 = _cart1;
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
        this.placeorderreq = this.navParams.data.params;
        console.log(this.placeorderreq);
        this.products = this._cart.all;
        this.items = this._cart.totalQty;
        if (this.address.getPrimary) {
            this.billing = this.address.getPrimary;
            console.log(this.billing);
        }
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage.prototype.placeorder = function () {
        console.log(this._cart.total);
        //  if(this._cart.total<250)
        //  {
        //   let confirm = this.alertCtrl.create({
        //     title:'Alert',
        //     message:'Are you sure to proceed?, Order above 250 for Free Delivery' ,
        //     buttons: [{
        //         text: 'cancel'
        //       },{
        //         text:'place order',
        //         handler: () => {
        //           this.confirmPlace();
        //         }
        //       }]
        //   });
        //   confirm.present();
        //  }
        //  else{
        //    this.confirmPlace();
        //  }
        //   this.toast.show("hiiiiiiii")
        this.confirmPlace();
    };
    ConfirmPage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    ConfirmPage.prototype.confirmPlace = function () {
        var _this = this;
        console.log(this.placeorderreq);
        this.loader.present();
        this.restProvider.feedbackOperation(this.placeorderreq)
            .then(function (data) {
            _this.response = data;
            if (_this.response.result == "success") {
                _this.toast.show(_this.response.responseMessage);
                // this.toast.show("Order Placed Successfully");
                _this._cart.reset();
                _this.loader.dismiss();
                _this.goTo('ThanksPage', 1);
            }
            else {
                _this.toast.show(_this.response.responseMessage);
                _this.loader.dismiss();
            }
        });
        console.log(this.response);
    };
    ConfirmPage.prototype.cancel = function () {
        this.nav.pop();
    };
    return ConfirmPage;
}());
ConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirm',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/confirm/confirm.html"*/'<!--\n  Generated template for the ConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Confirm Order</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n  <p padding><b>Products in cart</b></p>\n  <ion-item *ngFor="let x of products">\n    <ion-item>\n    <ion-thumbnail item-start>\n    <div class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' +x.images +\')\'}"></div>\n     \n    </ion-thumbnail>\n    <h3 [innerHTML]="x.name"></h3>\n     <p>\n       <!-- <span ><p>{{x.per_discount}} </p>•</span>  -->\n        <!-- <span class="price">{{x.finalprice | money}}</span> -->\n      <!-- <ng-container *ngIf="x.attributes.length > 0"><span *ngFor="let y of x.attributes">• <i>{{y.option || y.options[0]}}</i>&nbsp;</span></ng-container> -->\n      <span> x {{x.quantity}}</span>\n    </p>\n    <p padding><b>Items:{{items}}</b></p>\n  </ion-item>\n\n  </ion-item>\n\n</ion-card>\n<ion-card padding>\n<!-- <ion-item>\n    \n     <h6  ><b>Amount      :{{_cart.total}} Rs.</b></h6>\n     <h6 *ngIf="_cart.total<250" ><b>Delivery charge :30 Rs.</b></h6><br>\n     <h6 *ngIf="_cart.total>250" ><b>Delivery charge :00 Rs.</b></h6><br>\n     <h6 *ngIf="_cart.total>250" ><b>Total Amount   :{{_cart.total}}Rs.</b></h6><br>\n     <h6 *ngIf="_cart.total<250" ><b>Total Amount  :{{_cart.total+30}}Rs.</b></h6><br>\n    \n</ion-item> -->\n\n<ion-row no-padding>\n    <ion-col col-4 no-padding><b>Amount</b></ion-col>\n    <ion-col col-8 no-padding>\n        : {{_cart.total}} Rs.\n    <!-- :{{p1.stock===\'0\'?\'out of stock\':\'Available\'}}  -->\n    </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n        <ion-col col-4 no-padding><b>Delivery charge</b></ion-col>\n        <ion-col col-8 no-padding>\n           \n        : {{_cart.total<\'250\'?\'30\':\'00\'}} Rs. \n        </ion-col>\n        </ion-row>\n\n\n        <ion-row no-padding>\n            <ion-col col-4 no-padding><b>Total Amount</b></ion-col>\n            <ion-col *ngIf="_cart.total>250" col-8 no-padding>\n             : {{_cart.total}} Rs.\n           \n            </ion-col>\n            <ion-col *ngIf="_cart.total<=250" col-8 no-padding>\n                : {{_cart.total+30}} Rs.\n               </ion-col>\n            </ion-row>\n\n            <p style="font-size:12px" color="primary" *ngIf="_cart.total>250" >Your order is eligible for Free Delivery</p>\n            <p style="font-size:12px" color="primary" *ngIf="_cart.total<250">*Order above 250Rs for free delivery</p>\n\n\n\n</ion-card>\n<ion-card>\n    <p padding>Delivery Details:</p>\n\n    <ion-list >\n      <p padding ><b>Delivery Address</b></p>\n         <ion-item no-lines *ngIf="billing">\n          <p>{{billing.first_name}} • {{billing.phone}}</p>\n          <p>{{billing.address_1}}</p>\n          <p>{{billing.area}}, {{billing.landmark}}, {{billing.sector}}</p>\n          <p>{{billing.pincode}}</p>\n      </ion-item>\n      <ion-item>\n          <p><b>Date and Time</b></p>\n          <p>{{placeorderreq.order_detail}} </p>\n      </ion-item>\n    </ion-list>\n\n</ion-card>\n\n  <div padding>\n    <button width="50px" ion-button round icon-start tappable (click)="placeorder()">\n      Confirm Order\n    </button>\n\n    <button ion-button width="50px" round icon-start tappable (click)="cancel()">\n      Cancel\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/confirm/confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
], ConfirmPage);

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm__ = __webpack_require__(1013);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmPageModule = (function () {
    function ConfirmPageModule() {
    }
    return ConfirmPageModule;
}());
ConfirmPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */]),
        ],
    })
], ConfirmPageModule);

//# sourceMappingURL=confirm.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map