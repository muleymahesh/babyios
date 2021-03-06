webpackJsonp([28],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountSettingsPage = (function () {
    function AccountSettingsPage(navCtrl, platform, appVersion, translate, alert, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.appVersion = appVersion;
        this.translate = translate;
        this.alert = alert;
        this.user = user;
        this.app = __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */];
        if (this.platform.is('cordova')) {
            this.appVersion.getVersionNumber().then(function (res) {
                _this.app.version = res;
            });
        }
    }
    AccountSettingsPage.prototype.logout = function () {
        var _this = this;
        this.translate.get(['LOGOUT', 'LOGOUT_MSG', 'YES', 'CANCEL']).subscribe(function (x) {
            var confirm = _this.alert.create({
                title: x.LOGOUT,
                message: x.LOGOUT_MSG,
                buttons: [{
                        text: x.CANCEL
                    }, {
                        text: x.YES,
                        handler: function () {
                            _this.confirmLogout();
                        }
                    }]
            });
            confirm.present();
        });
    };
    AccountSettingsPage.prototype.confirmLogout = function () {
        var _this = this;
        this.user.logout().then(function () {
            _this.navCtrl.popToRoot();
            _this.navCtrl.parent.select(0);
        });
    };
    AccountSettingsPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    return AccountSettingsPage;
}());
AccountSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-settings',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/settings/settings.html"*/'\n<ion-header no-border no-lines>\n	<ion-navbar></ion-navbar>\n</ion-header>\n<ion-content fullscreen no-padding>\n	<ion-list class="account-list" no-padding>\n		<h1 margin-left margin-bottom>{{ \'SETTINGS\' | translate}}</h1>\n		<!-- <button ion-item mode="ios" (click)="goTo(\'AccountSettingsNotificationsPage\')">\n			Notifications\n		</button> -->\n		<button ion-item mode="ios" (click)="goTo(\'AccountSettingsLanguagesPage\')">\n			{{ \'LANGUAGES\' | translate}}\n		</button>\n		<ion-item mode="ios" (click)="goTo(\'AccountSettingsTosPage\')">\n			{{ \'TOS\' | translate}}\n		</ion-item>\n		<ion-item *ngIf="app.version">\n			Version {{app.version}}\n		</ion-item>\n		<ion-item ion-item *ngIf="user.all" (click)="logout()">\n			{{ \'LOGOUT\' | translate}}\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["k" /* UserProvider */]])
], AccountSettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsPageModule", function() { return AccountSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountSettingsPageModule = (function () {
    function AccountSettingsPageModule() {
    }
    return AccountSettingsPageModule;
}());
AccountSettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* AccountSettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* AccountSettingsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountSettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ })

});
//# sourceMappingURL=28.js.map