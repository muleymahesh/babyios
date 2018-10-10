webpackJsonp([12],{

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyorderPageModule", function() { return MyorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myorder__ = __webpack_require__(993);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyorderPageModule = (function () {
    function MyorderPageModule() {
    }
    return MyorderPageModule;
}());
MyorderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__myorder__["a" /* MyorderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myorder__["a" /* MyorderPage */]),
        ],
    })
], MyorderPageModule);

//# sourceMappingURL=myorder.module.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(104);
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
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyorderPage = (function () {
    function MyorderPage(translate, navParams, toast, user, loader, alertCtrl, app, viewCtrl, http, restProvider, navCtrl) {
        this.translate = translate;
        this.navParams = navParams;
        this.toast = toast;
        this.user = user;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.orderrequest = {
            method: 'get_order',
            user_id: this.user.user.user_id,
        };
        if (this.user.user.user_id) {
            this.myOrders();
        }
        else {
            console.log("You are not login..");
        }
    }
    MyorderPage.prototype.ionViewDidEnter = function () {
        if (this.user.user.user_id) {
            this.myOrders();
        }
        else {
            console.log("You are not login..");
        }
    };
    MyorderPage.prototype.myOrder = function () {
        var _this = this;
        this.restProvider.getNewArrivalList(this.orderrequest)
            .then(function (data) {
            console.log(data);
            _this.myOrders = data;
        });
    };
    return MyorderPage;
}());
MyorderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-myorder',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/myorder/myorder.html"*/'<!--\n  Generated template for the MyorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myorder</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="">\n    <ion-list no-lines no-margin margin-left>\n      <ion-item no-padding no-lines>\n        {{ \' Your recommendations\' | translate }}\n    </ion-item>\n    </ion-list>\n    \n         \n  <ion-item *ngFor="let o of myOrder;  let i=index " >\n      <ion-avatar item-start>\n        <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n      </ion-avatar>\n      <h3>{{w.product_name}}</h3>\n      \n      <ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n        <p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> <span> Rs.:{{pricestrikt(w.per_discount,w.mrp)}}</span> </p>\n       </ng-container>\n       <ng-template #elseTemplate>\n          <p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n       </ng-template>\n    \n   </ion-item>\n    \n<!--        \n  <ion-row>\n      <ion-col text-left>\n        <button item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n          {{ \'SEE_ALL\' | translate }}\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n          </ion-col>\n        </ion-row> -->\n    \n \n\n\n</div> \n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/myorder/myorder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
], MyorderPage);

//# sourceMappingURL=myorder.js.map

/***/ })

});
//# sourceMappingURL=12.js.map