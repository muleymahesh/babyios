webpackJsonp([23],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePage; });
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
 * Generated class for the ChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePage = (function () {
    function ChangePage(fb, translate, navParams, toast, user, loader, alertCtrl, app, viewCtrl, http, restProvider, navCtrl) {
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
        this.passRequest = {
            method: 'change_password',
            email: this.user.user.user_email,
            oldpass: '',
            newpass: ''
        };
    }
    ChangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePage');
    };
    ChangePage.prototype.changePassword = function () {
        var _this = this;
        if (this.passRequest.oldpass != '' && this.passRequest.newpass != '' && this.cfrmpass != '') {
            if (this.passRequest.newpass.length > 3) {
                if (this.passRequest.newpass == this.cfrmpass) {
                    this.restProvider.changePassword(this.passRequest)
                        .then(function (data) {
                        _this.response = data;
                        if (_this.response.result == "success") {
                            _this.toast.show("Your password changed successfully...");
                        }
                        else {
                            _this.toast.show(_this.response.responseMessage);
                        }
                    });
                    console.log(this.response);
                }
                else {
                    this.toast.show("new password and confirm password are not same");
                }
            }
            else {
                this.toast.show("Password should be more than 3 character");
            }
        }
        else {
            this.toast.show("All field required");
        }
    };
    return ChangePage;
}());
ChangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/change/change.html"*/'<ion-header >\n    <ion-navbar color="primary" >\n        <ion-title> Reset Password</ion-title>\n    \n    </ion-navbar>\n  </ion-header>\n\n      \n     \n        \n          <ion-content>\n            <div align="center">\n              <img class="logo" src="assets/img/logo/logo.jpg" width="100" height="100"/>\n            </div>\n              <ion-list>\n               \n                <ion-item>\n                    <ion-label floating>Old Password</ion-label>\n                   <ion-input min-length="3"  type="password" [(ngModel)]="passRequest.oldpass" ngControl="title" required></ion-input>\n                </ion-item>\n                  <ion-item>\n                      <ion-label floating>Password</ion-label>\n                      <ion-input type="password" min-length="3" [(ngModel)]="cfrmpass" required></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label floating>Confirm Password</ion-label>\n                      <ion-input min-length="3"  type="password"  [(ngModel)]="passRequest.newpass"required ></ion-input>\n                  </ion-item>\n              </ion-list>\n\n              <ion-row align-items-center >\n                 \n                    <ion-col align-self-center>\n                        <button ion-button round full type="button" padding="5" color="primary"  tappable (click)="changePassword()" >Reset Password</button>\n                    </ion-col>\n               </ion-row>\n                 \n\n          </ion-content>\n     \n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/change/change.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
], ChangePage);

//# sourceMappingURL=change.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePageModule", function() { return ChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change__ = __webpack_require__(1013);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePageModule = (function () {
    function ChangePageModule() {
    }
    return ChangePageModule;
}());
ChangePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */]),
        ],
    })
], ChangePageModule);

//# sourceMappingURL=change.module.js.map

/***/ })

});
//# sourceMappingURL=23.js.map