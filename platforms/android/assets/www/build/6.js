webpackJsonp([6],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicecategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(84);
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
 * Generated class for the ServicecategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicecategoryPage = (function () {
    function ServicecategoryPage(navParam, loader, user, navCtrl, toast, navParams, http, restProvider) {
        this.navParam = navParam;
        this.loader = loader;
        this.user = user;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.http = http;
        this.restProvider = restProvider;
        this.servicesreq = {
            method: 'get_services_by_cat',
            category: ''
        };
        this.servicesreq.category = this.navParam.data.params.category;
        this.getServices();
    }
    ServicecategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicecategoryPage');
    };
    ServicecategoryPage.prototype.getServices = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.serviceOperations(this.servicesreq)
            .then(function (data) {
            console.log(data);
            if (data.length > 0) {
                _this.services = data;
                console.log(_this.services);
            }
            else {
                _this.toast.show("Data not available");
            }
        });
        this.loader.dismiss();
    };
    ServicecategoryPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    return ServicecategoryPage;
}());
ServicecategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-servicecategory',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/servicecategory/servicecategory.html"*/'<!--\n  Generated template for the ServicecategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" >\n    <ion-title>Baby Needs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card padding  *ngFor="let s of services" (click)="goTo(\'ServicedetailPage\',s)">\n        <p style="font-size:17px; text-align:left; color:#381c76;">{{s.name}}</p>\n        <p style="font-size:14px; text-align:left;">{{s.address}}</p>\n        <p style="font-size:14px; text-align:left;">Contact :{{s.contact}}</p>\n       \n      \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/servicecategory/servicecategory.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]])
], ServicecategoryPage);

//# sourceMappingURL=servicecategory.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicecategoryPageModule", function() { return ServicecategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicecategory__ = __webpack_require__(1021);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicecategoryPageModule = (function () {
    function ServicecategoryPageModule() {
    }
    return ServicecategoryPageModule;
}());
ServicecategoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__servicecategory__["a" /* ServicecategoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servicecategory__["a" /* ServicecategoryPage */]),
        ],
    })
], ServicecategoryPageModule);

//# sourceMappingURL=servicecategory.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map