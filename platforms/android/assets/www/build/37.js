webpackJsonp([37],{

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    return AccountPageModule;
}());
AccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_global__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = (function () {
    function AccountPage(emailComposer, appVersion, appRate, translate, alert, platform, _notif, navCtrl, _address, modal, _user, navParams) {
        this.emailComposer = emailComposer;
        this.appVersion = appVersion;
        this.appRate = appRate;
        this.translate = translate;
        this.alert = alert;
        this.platform = platform;
        this._notif = _notif;
        this.navCtrl = navCtrl;
        this._address = _address;
        this.modal = modal;
        this._user = _user;
        this.navParams = navParams;
        this.notif = this._notif;
        this.address = this._address;
        this.user = this._user.user;
    }
    // ionViewDidLoad() {
    // }
    AccountPage.prototype.ionViewDidEnter = function () {
        if (this._user.user.fname) {
            this.notif = this._notif;
            this.address = this._address;
            this.user = this._user.user;
        }
    };
    AccountPage.prototype.rateUs = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe(function (x) {
                _this.alert.create({
                    title: x.ONLY_DEVICE,
                    message: x.ONLY_DEVICE_DESC,
                    buttons: [{ text: x.OK }]
                }).present();
                return false;
            });
        }
        else {
            this.appVersion.getAppName().then(function (res) {
                _this.appRate.preferences.displayAppName = res;
            });
            this.appVersion.getPackageName().then(function (res) {
                _this.appRate.preferences.storeAppURL = {
                    //ios: '<app_id>', // FOR IOS
                    android: 'market://details?id=' + res,
                };
                _this.appRate.promptForRating(true);
            });
        }
    };
    AccountPage.prototype.goProfile = function () {
        this.modal.create('AccountProfilePage').present();
    };
    AccountPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    AccountPage.prototype.emailUs = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.emailComposer.isAvailable().then(function (available) {
                // this.emailComposer.addAlias('gmail', 'com.google.android.gm');  // if you want to use gmail
                var email = {
                    //app: 'gmail', // if you want to use gmail
                    to: __WEBPACK_IMPORTED_MODULE_6__app_app_global__["a" /* App */].ContactEmail,
                    //bcc: ['john@doe.com', 'jane@doe.com'],
                    //  attachments: [
                    // 	 'file://img/logo.png',
                    // 	 'res://icon.png',
                    // 	 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                    // 	 'file://README.pdf'
                    //  ],
                    subject: 'App Support',
                    body: 'Hi, please help me.',
                    isHtml: true
                };
                _this.emailComposer.open(email);
            });
        }
        else {
            this.translate.get(['ONLY_DEVICE', 'ONLY_DEVICE_DESC', 'OK']).subscribe(function (x) {
                _this.alert.create({
                    title: x.ONLY_DEVICE,
                    message: x.ONLY_DEVICE_DESC,
                    buttons: [{
                            text: x.OK
                        }]
                }).present();
            });
        }
    };
    // login(){
    // 	this.modal.create('LoginPage', {}).present();
    // }
    AccountPage.prototype.logout = function () {
        this.user = {};
        this._user.logout();
        this.ionViewDidEnter();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/account.html"*/'\n<ion-header>  \n	\n		<ion-navbar color="primary">\n				<button ion-button menuToggle>\n						<ion-icon name="menu"></ion-icon>\n					  </button>\n			<ion-title>Profile</ion-title>\n		</ion-navbar>\n		\n	  \n	</ion-header>\n\n<ion-content>\n			<ion-item no-padding color="primary" *ngIf="_user.user.fname" >\n			\n				<div align="center">	\n			<img align-items="center" src="assets/img/logo/ic_launcher.png"></div>\n				\n			<h3 style="font-size:14px; text-align:center; color:#ffff">{{user.fname}}</h3>\n			<h3 style="font-size:14px; text-align:center ; color:#ffff" >{{user.user_email}}</h3>\n			<!-- <p style="font-size:10px; text-align:center">{{ \'EDIT PROFILE\' | translate}}</p> -->\n			<!-- <ion-avatar item-end>\n				<img src="assets/img/miscellaneous/user.png">\n			</ion-avatar> -->\n		</ion-item>\n\n\n		<ion-item no-padding  color="primary" *ngIf="!_user.user.fname">\n			\n				<div align="center">		<img align-items="center" src="assets/img/logo/ic_launcher.png"></div>\n				\n			<h3 style="font-size:14px; text-align:center; color:#ffff"></h3>\n			<h3 style="font-size:14px; text-align:center ; color:#ffff" >Welcome Guest</h3>\n		</ion-item>\n\n       <ion-list  *ngIf="_user.user.fname">\n		<!-- <ion-item mode="ios" tappable (click)="goTo(\'AccountChatsPage\')">\n			Chats\n			<ion-badge>3</ion-badge>\n			<ion-icon name="fa-paypal" item-end></ion-icon>\n		</ion-item> -->\n		<!-- <button ion-item tappable (click)="goTo(\'AccountNotificationPage\')">\n			{{ \'NOTIFICATIONS\' | translate}}\n			<ion-badge item-end *ngIf="_notif.all.length > 0">{{_notif.all.length}}</ion-badge>\n		</button> -->\n<div align="center" padding >\n	\n		\n\n		<br>	<button  ion-button full round  color="app_primary" tappable (click)="goTo(\'ChangePage\')">\n					{{ \'Change Password\' | translate}}\n					<!-- <ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge> -->\n				</button><br>\n\n				<button  ion-button full  round  color="app_primary" tappable (click)="goTo(\'SavedAddressPage\')">\n					{{ \'Saved Address\' | translate}}\n					<ion-badge  item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge>\n				</button><br>\n		\n			\n				<button  ion-button full  round  color="app_primary" tappable (click)="goTo(\'MyorderPage\')">\n					{{ \'My Orders\' | translate}}\n					<!-- <ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge> -->\n				</button><br>\n	\n				<button  ion-button full round  color="app_primary" tappable (click)="goTo(\'EditprofilePage\')">\n					{{ \'Edit Profile\' | translate}}\n					<!-- <ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge> -->\n				</button><br><br>\n\n\n			<button  ion-button full round  color="app_primary" tappable (click)="logout()">\n					{{ \'Logout\' | translate}}\n					<!-- <ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge> -->\n				</button><br><br>\n\n		<!-- <button ion-item tappable (click)="goTo(\'AccountSettingsPage\')">\n			{{ \'SETTINGS\' | translate}}\n		</button>\n\n		<button ion-item tappable (click)="goTo(\'AccountHelpPage\')">\n			{{ \'FAQ\' | translate}}\n		</button>\n\n		<button ion-item tappable (click)="emailUs()">\n			{{ \'CONTACT\' | translate}}\n		</button>\n\n		<button ion-item tappable (click)="rateUs()">\n			{{ \'GIVE_FEEDBACK\' | translate}}\n		</button> -->\n	</div>\n	</ion-list>\n\n\n\n	<ion-list  *ngIf="!_user.user.fname">\n		<div padding align="center">\n\n\n			<br>	<button  ion-button  round full color="app_primary" tappable (click)="goTo(\'RegisterPage\')">\n						{{ \'Register\' | translate}}\n						<!-- <ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge> -->\n					</button> <br>\n		\n				\n\n\n			<button  ion-button  round full color="app_primary" tappable  (click)="goTo(\'LoginPage\')">\n					{{ \'Log In\' | translate}}\n					<!-- <ion-badge item-end *ngIf="_address.all.length > 0">{{_address.all.length}}</ion-badge> -->\n				</button> <br>\n		\n			</div>\n\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["e" /* NotifProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=37.js.map