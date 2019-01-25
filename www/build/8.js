webpackJsonp([8],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
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
 * Generated class for the ReturnorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnorderPage = (function () {
    function ReturnorderPage(storage, _cart1, datepipe, restProvider, setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
        var _this = this;
        this.storage = storage;
        this._cart1 = _cart1;
        this.datepipe = datepipe;
        this.restProvider = restProvider;
        this.setting = setting;
        this.alert = alert;
        this.platform = platform;
        this.nav = nav;
        this.translate = translate;
        this.toast = toast;
        this.user = user;
        this.loader = loader;
        this.woo = woo;
        this._cart = _cart;
        this.events = events;
        this._order = _order;
        this.address = address;
        this.navParams = navParams;
        this.modal = modal;
        // times=[
        //   {
        //       "stime": 8,
        //       "etime":11,
        //       "slots": ["11-1PM","1-3PM","3-5PM","5-7PM"]
        //   },
        //   {
        //     "stime": 10,
        //     "etime":13,
        //     "slots": ["1-3PM","3-5PM","5-7PM"]
        // },
        // {
        //   "stime": 12,
        //   "etime":15,
        //   "slots": ["3-5PM","5-7PM"]
        // },
        // {
        //   "stime": 14,
        //   "etime":17,
        //   "slots": ["5-7PM"]
        // },
        // ]
        this.time_slot = {
            method: 'time_slot'
        };
        this.returnrequest = {
            method: 'request_return',
            order_id: '',
            user_email: '',
            order_detail: '',
        };
        this.timing = [];
        this.returnrequest.user_email = this.user.user.user_email;
        this.orders = this.navParams.data.params;
        this.minDate = new Date().toISOString();
        this.restProvider.getTimeslot(this.time_slot)
            .then(function (data) {
            _this.response = data;
            _this.storage.set('timejson1', _this.response);
        });
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
        this.str = this.navParams.data.params.o_id;
    }
    ReturnorderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnorderPage');
    };
    ReturnorderPage.prototype.onChange = function () {
        var _this = this;
        var edate = this.datepipe.transform(this.returndate, 'EEEE');
        var latest_date = this.datepipe.transform(this.returndate, 'M/d/yyyy');
        var c_date = this.datepipe.transform(new Date(), 'M/d/yyyy');
        console.log(latest_date);
        console.log(c_date);
        if (edate != 'Tuesday') {
            this.storage.get('timejson1')
                .then(function (data) {
                _this.response = data;
                if (_this.response.result == "success") {
                    _this.timing = [];
                    _this.times = _this.response.data;
                    //  console.log(this.details.deliverydate);
                    if (latest_date == c_date) {
                        _this.ctime = new Date().getHours();
                        console.log("ctime is=" + _this.ctime);
                        if (parseInt(_this.ctime) > 7 && parseInt(_this.ctime) < 17) {
                            for (var _i = 0, _a = _this.times; _i < _a.length; _i++) {
                                var s = _a[_i];
                                console.log("ctime=" + _this.ctime);
                                console.log("stime=" + s.stime);
                                console.log("int ctime=" + parseInt(_this.ctime));
                                if (s.stime < parseInt(_this.ctime) && s.etime > parseInt(_this.ctime)) {
                                    console.log("I am in if stime=" + s.stime);
                                    for (var _b = 0, _c = s.slots; _b < _c.length; _b++) {
                                        var s1 = _c[_b];
                                        _this.timing.push(s1);
                                    }
                                    console.log(_this.timing);
                                }
                            }
                            if (_this.timing.length == 0) {
                                _this.toast.show("Time slots are over please select next date");
                                _this.returndate = '';
                            }
                        }
                        else {
                            // this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
                            if (parseInt(_this.ctime) > 7 && parseInt(_this.ctime) < 17) {
                                for (var _d = 0, _e = _this.times; _d < _e.length; _d++) {
                                    var s = _e[_d];
                                    if (s.stime == 0 && s.etime == 0) {
                                        console.log("I am in if stime=" + s.stime);
                                        for (var _f = 0, _g = s.slots; _f < _g.length; _f++) {
                                            var s1 = _g[_f];
                                            _this.timing.push(s1);
                                        }
                                        console.log(_this.timing);
                                    }
                                }
                            }
                            if (_this.timing.length == 0) {
                                _this.toast.show("Time slots are over please select next date");
                                _this.returndate = '';
                            }
                        }
                    }
                    else {
                        // this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
                        for (var _h = 0, _j = _this.times; _h < _j.length; _h++) {
                            var s = _j[_h];
                            if (s.stime == 0 && s.etime == 0) {
                                console.log("I am in if stime=" + s.stime);
                                for (var _k = 0, _l = s.slots; _k < _l.length; _k++) {
                                    var s1 = _l[_k];
                                    _this.timing.push(s1);
                                }
                                console.log(_this.timing);
                            }
                        }
                    }
                }
                else {
                    _this.toast.show(_this.response.responseMessage);
                }
            });
        }
        else {
            this.toast.show('tuesday is holiday select next day');
            this.returndate = '';
        }
    };
    ReturnorderPage.prototype.returnOrder = function () {
        var _this = this;
        if (this.reason != '' && this.returndate != '' && this.returntime != '') {
            this.returnrequest.order_detail = "Reason for return: " + this.reason + "\n return date: " + this.returndate + "\n return time: " + this.returntime + "";
            this.returnrequest.order_id = this.str.substring(2);
            this.restProvider.orderOperation(this.returnrequest)
                .then(function (data) {
                console.log(data);
                _this.res = data;
                if (_this.res.result == "success") {
                    _this.toast.show(_this.res.responseMessage);
                    _this.returnrequest.order_detail = '';
                    _this.returnrequest.order_id = '';
                    _this.returnrequest.user_email = '';
                    _this.nav.popTo(_this.nav.getByIndex(1));
                }
                else if (_this.res.result == "failure") {
                    _this.toast.show(_this.res.responseMessage);
                }
                else {
                    _this.toast.show("Something went wrong please contact Us");
                }
            });
        }
        else {
            this.toast.show("All Field required");
        }
    };
    return ReturnorderPage;
}());
ReturnorderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-returnorder',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/returnorder/returnorder.html"*/'<!--\n  Generated template for the ReturnorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n  <ion-navbar color="primary">\n    <ion-title>Return request</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n    <ion-label padding floting><P><b>Reason for Return</b></P></ion-label>\n  <ion-item>\n   \n    <ion-textarea placeholder="Enter your reason..." [(ngModel)]="reason" ></ion-textarea>\n    \n  </ion-item>\n  <ion-item>\n    <ion-label>Return Date</ion-label>\n    <ion-datetime displayFormat="DDDD DD/MM/YYYY" [min]="minDate" (ionChange)="onChange()"  [max]="maxDate" [(ngModel)]="returndate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n      <ion-label>Time Slot</ion-label>\n      <ion-select [(ngModel)]="returntime" >\n        <ion-option *ngFor="let time of timing" [value]="time" >{{time}}</ion-option>\n     </ion-select>\n    </ion-item>\n</ion-card>\n<button  full ion-button round tappable (click)="returnOrder()">Request Return</button><br>\n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/returnorder/returnorder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
], ReturnorderPage);

//# sourceMappingURL=returnorder.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnorderPageModule", function() { return ReturnorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__returnorder__ = __webpack_require__(1026);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnorderPageModule = (function () {
    function ReturnorderPageModule() {
    }
    return ReturnorderPageModule;
}());
ReturnorderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__returnorder__["a" /* ReturnorderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__returnorder__["a" /* ReturnorderPage */]),
        ],
    })
], ReturnorderPageModule);

//# sourceMappingURL=returnorder.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map