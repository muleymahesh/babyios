webpackJsonp([20],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(550);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(history, cart, http, restProvider, alert, platform, socialSharing, translate, toast, wishlist, navCtrl, loader, modal, navParam, woo, _user) {
        this.history = history;
        this.cart = cart;
        this.http = http;
        this.restProvider = restProvider;
        this.alert = alert;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.toast = toast;
        this.wishlist = wishlist;
        this.navCtrl = navCtrl;
        this.loader = loader;
        this.modal = modal;
        this.navParam = navParam;
        this.woo = woo;
        this._user = _user;
        this.todo = {
            method: 'editprofile',
            fname: '',
            lname: '',
            email: '',
            mobile: ''
        };
        this.user = this._user.user;
        // this._user.user.fname='abhinandan';
        // this._user.save();
        // this.user=this._user.user;
        this.todo.fname = this.user.fname;
        this.todo.lname = this.user.lname;
        this.todo.email = this.user.user_email;
        console.log(this.user);
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.updateuser = function () {
        var _this = this;
        if (this.todo.email != "" && this.todo.fname != "" && this.todo.lname != '' && this.todo.mobile != "") {
            if (this.todo.mobile.length == 10) {
                this.loader.present();
                this.restProvider.register(this.todo)
                    .then(function (data) {
                    _this.reply = data;
                    if (_this.reply.result == "success") {
                        _this.toast.show(_this.reply.responseMessage);
                        _this._user.user.fname = _this.reply.fname;
                        _this._user.user.lname = _this.reply.lname;
                        _this._user.save();
                    }
                    else if (_this.reply.result == "failure") {
                        _this.toast.show(_this.reply.responseMessage);
                    }
                    _this.loader.dismiss();
                });
            }
        }
        else {
            this.toast.show("Mobile no should be 10 digit");
        }
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar color="primary">\n        <ion-title>Edit profile</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <ion-list>\n         \n          <ion-item>\n              <ion-label floating>First Name</ion-label>\n              <ion-input type="text"  [(ngModel)]="todo.fname" ngControl="description"></ion-input>\n          \n          </ion-item>\n          <ion-item>\n              <ion-label floating>Last Name</ion-label>\n              <ion-input type="text"  [(ngModel)]="todo.lname" ngControl="description"></ion-input>\n              \n          </ion-item>\n                         \n            <ion-item>\n                <ion-label floating>Mobile no</ion-label>\n                <ion-input type="number" maxlength="10" minlength="10" [(ngModel)]="todo.mobile" ngControl="description"></ion-input>\n                \n            </ion-item>\n  \n        </ion-list>\n           \n            <button ion-button full round  color="app_primary" (click)="updateuser()" >Update</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/editprofile/editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* HistoryProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* HistoryProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WishlistProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WishlistProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */]) === "function" && _r || Object])
], EditprofilePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(1014);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = (function () {
    function EditprofilePageModule() {
    }
    return EditprofilePageModule;
}());
EditprofilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
        ],
    })
], EditprofilePageModule);

//# sourceMappingURL=editprofile.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map