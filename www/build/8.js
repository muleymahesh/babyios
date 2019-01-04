webpackJsonp([8],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(57);
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
    function ReturnorderPage(_cart1, datepipe, restProvider, setting, alert, platform, nav, translate, toast, user, loader, woo, _cart, events, _order, address, navParams, modal) {
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
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
        this.str = this.navParams.data.params.o_id;
    }
    ReturnorderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnorderPage');
    };
    // onChange()
    // {
    //   this.timing=[];
    // //  console.log(this.details.deliverydate);
    //   let latest_date =this.datepipe.transform(this.returndate,'M/d/yyyy');
    //   let c_date =this.datepipe.transform(new Date(),'M/d/yyyy');
    //   console.log(latest_date);
    //   console.log( c_date);
    //   if(latest_date==c_date)
    //   {
    //     this.ctime=new Date().getHours();
    //     console.log("ctime is="+this.ctime)
    //     if(parseInt(this.ctime)>7&&parseInt(this.ctime)<17)
    //     {
    //     for(let s of this.times)
    //     {
    //       console.log("ctime="+this.ctime);
    //       console.log("stime="+s.stime)
    //       console.log("int ctime="+parseInt(this.ctime))
    //       if(s.stime<parseInt(this.ctime)&&s.etime>parseInt(this.ctime))
    //       {
    //         console.log("I am in if stime="+s.stime)
    //         for(let s1 of s.slots)
    //         {
    //         this.timing.push(s1);
    //         }
    //         console.log(this.timing);
    //       }
    //     }
    //   }
    //   else if(parseInt(this.ctime)>17)
    //   {
    //     this.toast.show("Time sloats are over please select next date");
    //     this.returndate='';
    //   }
    //   else{
    //     this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
    //   }
    // }
    // else
    // {
    //   this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
    // }
    // }
    ReturnorderPage.prototype.onChange = function () {
        var _this = this;
        this.restProvider.getTimeslot(this.time_slot)
            .then(function (data) {
            _this.response = data;
            if (_this.response.result == "success") {
                _this.timing = [];
                _this.times = _this.response.data;
                //  console.log(this.details.deliverydate);
                var latest_date = _this.datepipe.transform(_this.returndate, 'M/d/yyyy');
                var c_date = _this.datepipe.transform(new Date(), 'M/d/yyyy');
                console.log(latest_date);
                console.log(c_date);
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
                    }
                    else if (parseInt(_this.ctime) > 17) {
                        _this.toast.show("Time sloats are over please select next date");
                        _this.returndate = '';
                    }
                    else {
                        // this.timing= ["9-11AM","11-1PM","1-3PM","3-5PM","5-7PM"];
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
                    _this.toast.show("Something is wrong please contact Us");
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
        selector: 'page-returnorder',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/returnorder/returnorder.html"*/'<!--\n  Generated template for the ReturnorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n  <ion-navbar color="primary">\n    <ion-title>Return request</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n    <ion-label padding floting><P><b>Reason for Return</b></P></ion-label>\n  <ion-item>\n   \n    <ion-textarea placeholder="Enter your reason..." [(ngModel)]="reason" ></ion-textarea>\n    \n  </ion-item>\n  <ion-item>\n    <ion-label>Return Date</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [min]="minDate" (ionChange)="onChange()"  [max]="maxDate" [(ngModel)]="returndate">\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n      <ion-label>Time Slot</ion-label>\n      <ion-select [(ngModel)]="returntime" >\n        <ion-option *ngFor="let time of timing" [value]="time" >{{time}}</ion-option>\n     </ion-select>\n    </ion-item>\n</ion-card>\n<button  full ion-button round tappable (click)="returnOrder()">Request Return</button><br>\n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/returnorder/returnorder.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]) === "function" && _t || Object])
], ReturnorderPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
//# sourceMappingURL=returnorder.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnorderPageModule", function() { return ReturnorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__returnorder__ = __webpack_require__(1023);
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