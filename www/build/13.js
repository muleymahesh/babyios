webpackJsonp([13],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
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
    function OrdersPage(restProvider, toast, navParams, nav, events, modal, loader, user, woo) {
        this.restProvider = restProvider;
        this.toast = toast;
        this.navParams = navParams;
        this.nav = nav;
        this.events = events;
        this.modal = modal;
        this.loader = loader;
        this.user = user;
        this.woo = woo;
        this.returnrequest = {
            method: 'request_return',
            order_id: '',
            user_email: ''
        };
        this.canclerequest = {
            method: 'cancel_order',
            order_id: '',
        };
        // this.setRootForGuest();
        // this.listenIsLoggedIn();
        // this.listenIsLoggedOut();
        this.orders = this.navParams.data.params;
        // this.returnrequest.order_id=this.navParams.data.params.o_id;
        //  this.canclerequest.order_id=this.navParams.data.params.o_id;
        this.returnrequest.user_email = this.user.user.user_email;
        console.log(this.orders);
        this.str = this.navParams.data.params.o_id;
        // this.setForUser();
    }
    // listenIsLoggedIn(){
    //   this.events.subscribe('user:login', (res) => {
    //     this.setForUser();
    //   });
    // }
    // listenIsLoggedOut(){
    //   this.events.subscribe('user:logout', () => {
    //     this.setRootForGuest();
    //   });
    // }
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
                _this.toast.show("Something is wrong please contact Us");
            }
        });
    };
    OrdersPage.prototype.inovice = function () {
        console.log(this.str);
        this.str1 = this.str.substring(2);
        console.log(this.str1);
        this.restProvider.Inovice(this.str1);
    };
    OrdersPage.prototype.returnOrder = function () {
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
                _this.toast.show("Something is wrong please contact Us");
            }
        });
    };
    OrdersPage.prototype.pop = function () {
        this.nav.pop();
    };
    OrdersPage.prototype.goTo = function (params) {
        this.nav.push('OrderDetailPage', { params: params });
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/orders/orders.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <ion-title>Order Detail</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content >\n  \n    <button ion-button block >Total :RS. {{orders.amount}}</button>\n    <div *ngIf="orders.details.length>0">\n    <ion-card *ngFor="let o of orders.details" > \n      <ion-item>\n        \n            <!-- <p style="font-size:9px; text-align:left; color:orange">order id-  {{o.o_id}}</p> -->\n            <ion-avatar item-start>\n              <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{o.img_url}}">\n            </ion-avatar>\n            <h3   >{{o.product_name}}</h3>\n              \n            <p style="font-size:9px; text-align:left">Quantity :{{o.qty}}  </p>\n          \n         \n            <p style="font-size:9px; text-align:left; color:orange">Rs.{{o.mrp}} </p>\n          \n            <!-- <p style="font-size:9px; text-align:left; color:orange">Status-{{o.order_status}}  </p>  -->\n          \n        \n          </ion-item>\n     <!-- <ion-refresher (ionRefresh)="doRefresh(\'\', $event)" (ionPull)="doPulling($event)">\n    <ion-refresher-content\n    pullingIcon="refresh-circle"\n    refreshingSpinner="circles"\n    pullingText="Pull to refresh..."\n    refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid class="empty" *ngIf="!user.all">\n    <ion-row align-items-center>\n      <ion-col align-self-center text-center>\n        <ion-icon name="contact" color="secondary"></ion-icon>\n        <h4 margin-bottom>{{ \'LOGIN_DESC\' | translate}}</h4>\n        <button color="secondary" ion-button outline tappable (click)="login()">{{ \'LOGIN/REGISTER\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div [ngSwitch]="status">\n    <ion-list *ngSwitchCase="\'paid\'">\n      <ion-grid class="empty" *ngIf="orders.paid.length == 0 && user.all">\n        <ion-row align-items-center>\n          <ion-col align-self-center text-center>\n            <ion-icon name="list" color="secondary"></ion-icon>\n            <h4 margin-bottom>{{ \'ORDER_EMPTY\' | translate}}</h4>\n            <button  color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button *ngFor="let x of orders.paid" ion-item tappable (click)="goTo(x)">\n        <h3>{{x.date_created | date:\'short\'}}</h3>\n        <p>#{{x.id}} • {{x.total | money}}</p>\n        <ion-badge item-end>{{x.status}}</ion-badge>\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'unpaid\'">\n      <ion-grid class="empty" *ngIf="orders.unpaid.length == 0 && user.all">\n        <ion-row align-items-center>\n          <ion-col align-self-center text-center>\n            <ion-icon name="list" color="secondary"></ion-icon>\n            <h4 margin-bottom>{{ \'ORDER_EMPTY\' | translate}}</h4>\n            <button color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button *ngFor="let x of orders.unpaid" ion-item tappable (click)="goTo(x)">\n        <h3>{{x.date_created | date:\'short\'}}</h3>\n        <p>#{{x.id}} • {{x.total | money}}</p>\n        <ion-badge item-end>{{x.status}}</ion-badge>\n      </button>\n    </ion-list>\n  </div> -->\n</ion-card>\n</div>\n\n<div  padding align="center">\n<ng-container *ngIf="orders.order_status==\'delivered\'; else elseTemplate">\n  \n<button  full ion-button round tappable (click)="returnOrder()">Request Return</button><br>\n\n<button   full ion-button  tappable round (click)="inovice()">Inovice</button>\n\n</ng-container>\n<ng-template #elseTemplate>\n <div *ngIf="orders.order_status!=\'returned\'">\n   <div  *ngIf="orders.order_status!=\'canceled\'">\n     <div  *ngIf="orders.order_status!=\'out for delivery\'">\n<button   full ion-button round  tppable (click)="cancleOrder()" >Cancle</button>\n</div>\n</div>\n</div>\n</ng-template>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/orders/orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(544);
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
//# sourceMappingURL=13.js.map