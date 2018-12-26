webpackJsonp([0],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritereviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(84);
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
 * Generated class for the WritereviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WritereviewPage = (function () {
    function WritereviewPage(user, history, cart, http, restProvider, alert, platform, socialSharing, translate, toast, wishlist, navCtrl, loader, modal, navParam, woo) {
        this.user = user;
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
        this.rate = 0;
        this.reviewreq = {
            method: 'rate_product',
            p_id: '',
            review: '',
            rating: '',
            user_id: '',
            name: '',
            title: ''
        };
        this.product = this.navParam.data.params;
        console.log(this.product);
    }
    WritereviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WritereviewPage');
    };
    WritereviewPage.prototype.onModelChange = function (event) {
        this.rate = event;
        console.log(event);
    };
    WritereviewPage.prototype.submitReview = function () {
        var _this = this;
        if (this.reviewreq.rating != '' && this.reviewreq.rating != '' && this.reviewreq.title != '') {
            if (this.user.user.user_email) {
                this.reviewreq.p_id = this.product.p_id;
                this.reviewreq.user_id = this.user.user.user_email;
                this.reviewreq.name = this.user.user.fname;
                this.restProvider.reviweOperation(this.reviewreq)
                    .then(function (data) {
                    console.log(data);
                    if (data.result == "failed") {
                        _this.toast.show("Review not submited");
                    }
                    else if (data.result == "success") {
                        _this.reviewreq = {
                            method: 'rate_product',
                            p_id: '',
                            review: '',
                            rating: '',
                            user_id: '',
                            name: '',
                            title: ''
                        };
                        _this.toast.show("Review submited");
                    }
                });
            }
            else {
                this.toast.show("You are not Loged in");
            }
        }
        else {
            this.toast.show("all field required");
        }
    };
    return WritereviewPage;
}());
WritereviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-writereview',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/writereview/writereview.html"*/'<!--\n  Generated template for the WritereviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Write Review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n    <ion-content padding>\n        \n            <ion-list>\n               \n                <ion-item>\n                 \n                    <ion-input placeholder="Title"type="text"  [(ngModel)]="reviewreq.title" ngControl="description" required></ion-input>\n                \n                </ion-item>\n                <ion-item>\n                  \n                    <ion-input type="text" placeholder="Review" [(ngModel)]="reviewreq.review" ngControl="description" required ></ion-input>\n                    \n                </ion-item>\n                <ion-item>\n                    <!-- <ion-label floating>Rating</ion-label> -->\n                    <!-- <ion-input type="number" [(ngModel)]="reviewreq.rating" ngControl="title"></ion-input>\n                    <ion-item> -->\n                            <ion-label>Rating</ion-label>\n                            <ion-select value="5"  [(ngModel)]="reviewreq.rating" required>\n                              <ion-option>1</ion-option>\n                              <ion-option>2</ion-option>\n                              <ion-option>3</ion-option>\n                              <ion-option>4</ion-option>\n                              <ion-option>5</ion-option>\n                                  </ion-select>\n                          </ion-item>\n                    <!-- <rating [(ngModel)]="rate" max="5" emptyStarIconName="star-outline"  halfStarIconName="star-half"     starIconName="star"  nullable="false"  (ngModelChange)="onModelChange($event)">\n                        </rating> -->\n                       \n                        <!-- <ion-rating color=primary\n                        [numStars]="5"\n                        [readOnly]="true"\n                        [value]=5>\n                        </ion-rating> -->\n\n\n\n                        <!-- <ion-rating [(ngModel)]="rate" \n                        readOnly="false" \n                        max="5" \n                        emptyStarIconName="star-outline" \n                        halfStarIconName="star-half" \n                        starIconName="star" \n                        nullable="false" \n                        (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n                        <!-- </ion-rating>--> \n                  <!-- </ion-item> -->\n              \n        \n              </ion-list>\n                 \n                  <button ion-button full round  color="app_primary" (click)="submitReview()" >Submit</button>\n        \n      \n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/writereview/writereview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* HistoryProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */]])
], WritereviewPage);

//# sourceMappingURL=writereview.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritereviewPageModule", function() { return WritereviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__writereview__ = __webpack_require__(1026);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WritereviewPageModule = (function () {
    function WritereviewPageModule() {
    }
    return WritereviewPageModule;
}());
WritereviewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__writereview__["a" /* WritereviewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__writereview__["a" /* WritereviewPage */]),
        ],
    })
], WritereviewPageModule);

//# sourceMappingURL=writereview.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map