webpackJsonp([18],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(76);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(fb, translate, navParams, toast, user, loader, alertCtrl, app, viewCtrl, http, restProvider, navCtrl) {
        this.fb = fb;
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
        this.reset = {
            method: 'forgot_password',
            email: '',
            mobile: '',
        };
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.resetpassword = function () {
        var _this = this;
        if (this.reset.email != '' && this.reset.mobile != '') {
            this.restProvider.changePassword(this.reset)
                .then(function (data) {
                _this.response = data;
                if (_this.response.result == "success") {
                    _this.toast.show(_this.response.responseMessage);
                    _this.reset = {
                        method: 'change_password',
                        email: '',
                        mobile: '',
                    };
                }
                else {
                    _this.toast.show(_this.response.responseMessage);
                    _this.reset = {
                        method: 'forgot_password',
                        email: '',
                        mobile: '',
                    };
                }
            });
            console.log(this.response);
        }
        else {
            this.toast.show("All field required");
        }
    };
    return ForgotpasswordPage;
}());
ForgotpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/forgotpassword/forgotpassword.html"*/'<!--\n  Generated template for the ForgotpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Forgot password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <div align="center">\n    <img class="logo" src="assets/img/logo/logo.jpg" width="100" height="100"/>\n  </div>\n    <ion-list>\n     \n      <ion-item>\n          <ion-label floating>Email</ion-label>\n         <ion-input   type="email" [(ngModel)]="reset.email" ngControl="title" required></ion-input>\n      </ion-item>\n        <ion-item>\n            <ion-label floating>Mobile</ion-label>\n            <ion-input type="password"  [(ngModel)]="reset.mobile" required></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-row align-items-center >\n       \n          <ion-col align-self-center padding >\n              <button ion-button round full type="button" padding="5" color="primary"  tappable (click)="resetpassword()" >Reset Password</button>\n          </ion-col>\n     </ion-row>\n       \n\n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/forgotpassword/forgotpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
], ForgotpasswordPage);

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(1014);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = (function () {
    function ForgotpasswordPageModule() {
    }
    return ForgotpasswordPageModule;
}());
ForgotpasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
        ],
    })
], ForgotpasswordPageModule);

//# sourceMappingURL=forgotpassword.module.js.map

/***/ })

});
//# sourceMappingURL=18.js.map