webpackJsonp([14],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersPage = (function () {
    function OrdersPage(alert, cart, storage, restProvider, datepipe, toast, navParams, nav, events, modal, loader, user, woo) {
        var _this = this;
        this.alert = alert;
        this.cart = cart;
        this.storage = storage;
        this.restProvider = restProvider;
        this.datepipe = datepipe;
        this.toast = toast;
        this.navParams = navParams;
        this.nav = nav;
        this.events = events;
        this.modal = modal;
        this.loader = loader;
        this.user = user;
        this.woo = woo;
        this.getproduct = {
            method: 'get_product_detail',
            p_id: 0,
            email: 'abc.abc@gmail.com'
        };
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
        this.udatereq = {
            method: 'updateTimeSlot',
            order_id: '',
            order_detail: ''
        };
        this.timing = [];
        this.returnrequest = {
            method: 'request_return',
            order_id: '',
            user_email: ''
        };
        this.canclerequest = {
            method: 'cancel_order',
            order_id: '',
        };
        this.flag = 0;
        this.time_slot = {
            method: 'time_slot'
        };
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
        this.c_date = this.datepipe.transform(new Date(), 'yyyy-M-d');
        this.orders = this.navParams.data.params;
        this.restProvider.getTimeslot(this.time_slot)
            .then(function (data) {
            _this.response = data;
            _this.storage.set('timejson1', _this.response);
        });
        this.deliverydate = this.orders.order_detail.substring(14, 24);
        console.log(this.deliverydate);
        console.log(this.c_date);
        this.returnrequest.user_email = this.user.user.user_email;
        console.log(this.orders);
        this.str = this.navParams.data.params.o_id;
    }
    OrdersPage.prototype.setForUser = function (status) {
        var _this = this;
        if (status === void 0) { status = ''; }
        if (this.user.all) {
            this.woo.getOrders(this.user.id, null, null, status).then(function (x) {
                _this.loader.dismiss();
                _this.orders = x;
            }, function (err) {
                _this.loader.dismiss();
            });
        }
    };
    OrdersPage.prototype.doRefresh = function (status, refresher) {
        this.setForUser(status);
        refresher.complete();
    };
    OrdersPage.prototype.doPulling = function (refresher) {
        // console.log('DOPULLING', refresher.progress);
    };
    OrdersPage.prototype.login = function () {
        this.modal.create('LoginPage', {}).present();
    };
    OrdersPage.prototype.goHome = function () {
        this.nav.parent.select(0);
    };
    OrdersPage.prototype.cancleOrder = function () {
        var _this = this;
        this.canclerequest.order_id = this.str.substring(2);
        console.log(this.canclerequest.order_id);
        this.restProvider.orderOperation(this.canclerequest)
            .then(function (data) {
            console.log(data);
            _this.res = data;
            if (_this.res.result == "success") {
                _this.toast.show(_this.res.responseMessage);
                _this.pop();
            }
            else if (_this.res.result == "failure") {
                _this.toast.show(_this.res.responseMessage);
            }
            else {
                _this.toast.show("Something went wrong please contact Us");
            }
        });
    };
    OrdersPage.prototype.inovice = function () {
        var _this = this;
        console.log(this.str);
        this.str1 = this.str.substring(2);
        console.log(this.str1);
        this.restProvider.Inovice(this.str1)
            .then(function (data) {
            _this.toast.show(data.result);
        });
    };
    OrdersPage.prototype.returnOrder1 = function () {
        var _this = this;
        this.returnrequest.order_id = this.str.substring(2);
        this.restProvider.orderOperation(this.returnrequest)
            .then(function (data) {
            console.log(data);
            _this.res = data;
            if (_this.res.result == "success") {
                _this.toast.show(_this.res.responseMessage);
            }
            else if (_this.res.result == "failure") {
                _this.toast.show(_this.res.responseMessage);
            }
            else {
                _this.toast.show("Something went wrong please contact Us");
            }
        });
    };
    // onChange()
    // {
    //   this.timing=[];
    // //  console.log(this.details.deliverydate);
    //   let latest_date =this.datepipe.transform(this.newdeliverydate,'M/d/yyyy');
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
    //     this.toast.show("Time slots are over please select next date");
    //     this.newdeliverydate='';
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
    OrdersPage.prototype.onChange = function () {
        var _this = this;
        var edate = this.datepipe.transform(this.newdeliverydate, 'EEEE');
        console.log("" + edate);
        var latest_date = this.datepipe.transform(this.newdeliverydate, 'M/d/yyyy');
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
                                _this.newdeliverydate = '';
                            }
                        }
                        else {
                            if (parseInt(_this.ctime) > 7 && parseInt(_this.ctime) < 17) {
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
                            if (_this.timing.length == 0) {
                                _this.toast.show("Time slots are over please select next date");
                                _this.newdeliverydate = '';
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
            this.newdeliverydate = '';
        }
    };
    OrdersPage.prototype.pop = function () {
        this.nav.pop();
    };
    OrdersPage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    OrdersPage.prototype.updateOrderDetails = function () {
        var _this = this;
        if (this.newdeliverydate != '' && this.newtimeslot != '') {
            this.udatereq.order_id = this.str.substring(2);
            this.udatereq.order_detail = "Delivery Date" + this.datepipe.transform(this.newdeliverydate, 'yyyy-M-d') + "between" + this.newtimeslot;
            this.restProvider.updateOrderDetail(this.udatereq)
                .then(function (data) {
                console.log(data);
                _this.res = data;
                if (_this.res.result == "success") {
                    _this.orders.order_detail = _this.udatereq.order_detail;
                    _this.toast.show(_this.res.responseMessage);
                    _this.newdeliverydate = '';
                    _this.newtimeslot = '';
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
            this.toast.show("All Field Required ");
        }
    };
    OrdersPage.prototype.reqbyagain = function () {
        var _this = this;
        this.alert.create({
            title: "Buy again",
            message: "Do you want to repeat this order",
            buttons: [{
                    text: 'Yes',
                    handler: function () {
                        //	this.loader.dismiss();
                        _this.buyAgain();
                    }
                },
                {
                    text: 'No',
                }
            ]
        }).present();
    };
    OrdersPage.prototype.buyAgain = function () {
        var _this = this;
        this.cart.reset();
        this.getproduct.email = this.user.user.user_email;
        console.log(this.orders);
        for (var _i = 0, _a = this.orders.details; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p);
            this.getproduct.p_id = p.p_id;
            this.restProvider.getProduct(this.getproduct)
                .then(function (data) {
                _this.products = data;
                console.log(_this.products);
                _this.product1 = _this.products[0];
                if (_this.product1.stock < 1) {
                    //this.toast.show("Currently this product is out of stock");
                    _this.flag = 1;
                }
                else {
                    _this.cart.post(_this.product1);
                    // this.toast.show("Product added to cart");
                }
            });
        }
        if (this.flag == 1) {
            this.toast.show("Some product(s) are out of stock from this order");
            this.cart.reset();
        }
        else {
            this.toast.show("product(s) are added to cart ");
            //this.nav.push('Cart1Page');
        }
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/orders/orders.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <ion-title>Order Detail</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content >\n  \n    <button ion-button block >Total :RS. {{orders.amount}}</button>\n    <div *ngIf="orders.details.length>0">\n        <p padding style="font-size:12px; text-align:left">Summery: {{orders.order_detail}}  </p>\n    <ion-card *ngFor="let o of orders.details" > \n      <ion-item>\n        \n            <!-- <p style="font-size:9px; text-align:left; color:orange">order id-  {{o.o_id}}</p> -->\n            <ion-avatar item-start>\n              <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{o.img_url}}">\n            </ion-avatar>\n            <h3   >{{o.product_name}}</h3>\n              \n            <p style="font-size:9px; text-align:left">Quantity :{{o.qty}}  </p>\n          \n         \n            <!-- <p style="font-size:9px; text-align:left; color:orange">Rs.{{o.mrp}} </p> -->\n          \n            <!-- <p style="font-size:9px; text-align:left; color:orange">Status-{{o.order_status}}  </p>  -->\n          \n        \n          </ion-item>\n    \n</ion-card>\n</div>\n\n<div  padding align="center">\n<ng-container *ngIf="orders.order_status==\'delivered\'; else elseTemplate">\n  \n<button  full ion-button round tappable (click)="goTo(\'ReturnorderPage\',orders)">Request Return</button><br>\n\n<button  full ion-button  tappable round (click)="inovice()">Invoice</button>\n<button  full ion-button  tappable round (click)="reqbyagain()">Buy Again</button>\n\n</ng-container>\n<ng-template #elseTemplate>\n <div *ngIf="orders.order_status!=\'returned\'">\n   <div  *ngIf="orders.order_status!=\'canceled\'">\n     <div  *ngIf="orders.order_status!=\'out for delivery\'">\n<button   full ion-button round  tppable (click)="goTo(\'CancleorderPage\',orders)" >Cancel</button>\n<ion-item>\n  <p>You can change your order delivery timing befor its out for delivery by editing fields below</p>\n  <ion-label>Date</ion-label>\n  <ion-datetime displayFormat="DDDD DD/MM/YYYY" [min]="minDate" (ionChange)="onChange()"  [max]="maxDate" [(ngModel)]="newdeliverydate">\n  </ion-datetime>\n</ion-item>\n<ion-item>\n  <ion-label>Edit Time Slot</ion-label>\n<ion-select [(ngModel)]="newtimeslot">\n  <ion-option *ngFor="let time of timing" [value]="time"  >{{time}}</ion-option>\n</ion-select>\n</ion-item>\n<button   full ion-button round  tppable (click)="updateOrderDetails()" >Update order</button>\n</div>\n</div>\n\n</div>\n<button  full ion-button  tappable round (click)="reqbyagain()">Buy Again</button>\n</ng-template>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/orders/orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersPageModule = (function () {
    function OrdersPageModule() {
    }
    return OrdersPageModule;
}());
OrdersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], OrdersPageModule);

//# sourceMappingURL=orders.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map