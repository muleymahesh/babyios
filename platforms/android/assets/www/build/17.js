webpackJsonp([17],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(36);
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
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(nav, toast, alert, fb, translate, loader, navCtrl, modalCtrl, navParams, woo, wishlist, actionSheetCtrl, http, restProvider) {
        this.nav = nav;
        this.toast = toast;
        this.alert = alert;
        this.translate = translate;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.woo = woo;
        this.wishlist = wishlist;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.request = {
            method: 'get_recommended',
        };
        this.newarrivalrequest = {
            method: 'get_new_arrivals',
        };
        if (this.navParams.data.params == 1) {
            this.wishlist1();
        }
        else if (this.navParams.data.params == 2) {
            this.newArrival();
        }
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage.prototype.wishlist1 = function () {
        var _this = this;
        this.restProvider.getRecommendations(this.request)
            .then(function (data) {
            _this.rlist = data;
        });
    };
    ListPage.prototype.newArrival = function () {
        var _this = this;
        this.restProvider.getNewArrivalList(this.newarrivalrequest)
            .then(function (data) {
            console.log(data);
            _this.rlist = data;
        });
    };
    ListPage.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    ListPage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color ="primary">\n    <ion-title>list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n        \n    <ion-item *ngFor="let w of rlist;  let i=index " (click)="goTo(\'ProductPage\',w)" >\n        <ion-avatar item-start>\n          <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n        </ion-avatar>\n        <h3>{{w.product_name}}</h3>\n        \n        <ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n          <p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> <span> Rs.:{{pricestrikt(w.per_discount,w.mrp)}}</span> </p>\n         </ng-container>\n         <ng-template #elseTemplate>\n            <p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n         </ng-template>\n      \n     </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(1010);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    return ListPageModule;
}());
ListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
        ],
    })
], ListPageModule);

//# sourceMappingURL=list.module.js.map

/***/ })

});
//# sourceMappingURL=17.js.map