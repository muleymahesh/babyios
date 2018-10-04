webpackJsonp([10],{

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(fb, translate, navParams, toast, user, loader, alertCtrl, app, viewCtrl, http, restProvider) {
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
        this.todo = {
            method: 'login',
            email: 'muley.mahesh@gmail.com',
            password: 'mahesh'
        };
        this.loginForm = this.fb.group({
            user: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.signupForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            user: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pass2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.resetForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]
        });
    }
    LoginPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginPage.prototype.submitSignup = function () {
        var _this = this;
        this.loader.present();
        this.user.nonce('user', 'register').map(function (x) { return x.json(); }).subscribe(function (x) {
            _this.signupForm.value.nonce = x.nonce;
            _this.user.signup(_this.signupForm.value).map(function (y) { return y.json(); })
                .subscribe(function (y) {
                var tmp = {
                    user: _this.signupForm.value.user,
                    pass: _this.signupForm.value.pass
                };
                _this.user.login(tmp).map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    if (res.status == 'ok') {
                        _this.user._loggedIn(res, _this.navParams.data.tabIndex);
                        _this.translate.get(['REGIST_SUCCESS'], { value: _this.signupForm.value.name }).subscribe(function (x) {
                            _this.toast.show(x.REGIST_SUCCESS);
                        });
                        _this.dismiss();
                        _this.loader.dismiss();
                    }
                    else {
                        _this.toast.show(res.error);
                    }
                }, function (err) {
                    _this.loader.dismiss();
                    _this.toast.show(err.json().error);
                });
            }, function (err) {
                _this.loader.dismiss();
                _this.toast.show(err.json().error);
            });
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.submitReset = function () {
        var _this = this;
        this.loader.present();
        this.user.reset(this.resetForm.value).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.status == 'ok')
                _this.toast.show(res.msg);
            else
                _this.toast.show(res.error);
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        this.loader.present();
        // this.restProvider.login(this.todo)
        // .then(data => {
        //   this.users = data;
        //   console.log(this.users);
        // });
        // this.user.login(this.loginForm.value).map(res => res.json())
        //   .subscribe( (res) => {
        this.restProvider.login(this.todo)
            .then(function (data) {
            _this.users = data;
            if (_this.users.result == 'success') {
                console.log(_this.users);
                _this.user._loggedIn(_this.users, _this.navParams.data.tabIndex);
                // this.translate.get(['LOGIN_SUCCESS'], {value: this.user.name}).subscribe( x=> {
                //   this.toast.show(x.LOGIN_SUCCESS);
                // });
                _this.dismiss();
            }
            else
                _this.toast.show(_this.users.result);
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], LoginPage.prototype, "slider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('innerSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
], LoginPage.prototype, "innerSlider", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/login/login.html"*/'<ion-content scroll="false">\n    <ion-header transparent no-border no-lines >\n        <ion-navbar color="primary" >\n           <ion-buttons>\n            <button ion-button icon-only tappable (click)="dismiss()">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-buttons> \n        </ion-navbar>\n      </ion-header>\n   \n          \n         \n            \n              <ion-content>\n                  <img class="logo" src="assets/img/logo/logo.jpg" width="100"/>\n                 \n                  <ion-list>\n                   \n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                       <ion-input  [(ngModel)]="todo.email" ngControl="title"></ion-input>\n                    </ion-item>\n                      <ion-item>\n                          <ion-label floating>Password</ion-label>\n                          <ion-input type="password"  [(ngModel)]="todo.password" ngControl="description"></ion-input>\n                      </ion-item>\n                  </ion-list>\n                      <button ion-button full round  color="app_primary"  tappable (click)="submitLogin()" >LOG IN</button>\n                      <button ion-button full round  >Login with google</button>\n                  <ion-list> \n                    <ion-item> \n                 \n                    <ion-label (click)="getSignup()">No account yet Create one</ion-label>\n                    </ion-item>\n                    </ion-list>\n\n              </ion-content>\n         \n  '/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map