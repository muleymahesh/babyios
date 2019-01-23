webpackJsonp([5],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(76);
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
 * Generated class for the ServicedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicedetailPage = (function () {
    function ServicedetailPage(navParam, loader, user, navCtrl, toast, navParams, http, restProvider) {
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
        this.services = this.navParam.data.params;
    }
    ServicedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicedetailPage');
    };
    return ServicedetailPage;
}());
ServicedetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-servicedetail',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/servicedetail/servicedetail.html"*/'<!--\n  Generated template for the ServicedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>service detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-card>\n  <div padding>\n    <p style="font-size:20px; text-align:center; color:#381c76;">{{services.name}}</p><br>\n    Address: <p style="font-size:14px; text-align:left;">{{services.address}}</p><br>\n    <p style="font-size:14px; text-align:left;">Contact :{{services.contact}}</p><br>\n    Detail:<p style="font-size:14px; text-align:left;">{{services.detail}}</p><br>\n  </div>\n</ion-card><br>\n  <div padding>\n    Disclaimer:\n<p>The Services section on our app is based on reviews from other users and is for assistance for its customers only. BabyNeeds in no way guarantees the services provided by the respective service providers. All customers are expected, themselves make necessary inquiries before availing their services. In case of complaints, issues please contact the respective service provider directly.</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/servicedetail/servicedetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]])
], ServicedetailPage);

//# sourceMappingURL=servicedetail.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedetailPageModule", function() { return ServicedetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicedetail__ = __webpack_require__(1027);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicedetailPageModule = (function () {
    function ServicedetailPageModule() {
    }
    return ServicedetailPageModule;
}());
ServicedetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__servicedetail__["a" /* ServicedetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servicedetail__["a" /* ServicedetailPage */]),
        ],
    })
], ServicedetailPageModule);

//# sourceMappingURL=servicedetail.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map