webpackJsonp([1],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @IonicPage()
// @Component({
//   selector: 'page-wishlist',
//template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/wishlist/wishlist.html"*/'<!-- <ion-content padding-top>\n	<div class="subtitle" *ngIf="products.length > 0">\n		<h1 margin-top margin-horizontal>{{ \'WISHLIST\' | translate}}</h1>		\n		<p no-margin margin-horizontal>{{ \'WISH_DESC\' | translate: {value: products.length} }}</p>\n	</div>\n	<ion-grid class="empty" *ngIf="products.length == 0">\n		<ion-row align-items-center>\n			<ion-col align-self-center text-center>\n				<ion-icon name="heart-outline" color="secondary"></ion-icon>\n				<h4 margin-bottom>{{ \'EMPTY\' | translate}}</h4>\n				<button color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-row padding-left padding-right class="product-grid">\n		<ion-col col-6 class="product-item" *ngFor="let x of products">\n			<div tappable (click)="goTo(\'ProductPage\', x)">\n				<div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.images[0].src +\')\'}">\n					<ion-badge *ngIf="x.on_sale">{{x | discount}}</ion-badge>\n				</div>\n				<h5 [innerHTML]="x.name"></h5>\n				<div class="price">\n					<span class="disc" *ngIf="x.on_sale">{{x.regular_price | money}}</span> \n					{{x.price | money}}\n				</div>\n				<ion-row no-padding class="reviews" *ngIf="x.rating_count">\n					<ion-col col-auto no-padding>\n						<ion-rating item-start *ngIf="x.average_rating"\n							[numStars]="5"\n							[readOnly]="true"\n							[value]="x.average_rating">\n						</ion-rating>\n						<span *ngIf="x.rating_count">{{x.rating_count}}</span>\n					</ion-col>\n				</ion-row>\n			</div>\n			<ion-row class="remove">\n				<ion-col col-9><button tappable (click)="addToCart(x)" ion-button small block outline>{{ \'TO_CART\' | translate}}</button></ion-col>\n				<ion-col col-3 text-center><button tappable (click)="removeFromWish(x)" no-padding ion-button icon-only clear><ion-icon no-padding name="trash"></ion-icon></button></ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n	\n</ion-content>\n		 -->\n		 <ion-header>\n			\n			  <ion-navbar color="primary">\n						<button ion-button menuToggle>\n								<ion-icon name="menu"></ion-icon>\n							</button>\n				<ion-title>wishlist</ion-title>\n			  </ion-navbar>\n			\n			</ion-header>\n			\n			\n			\n				<ion-content >\n					<ion-card>\n					<ion-list>\n					  <ion-item *ngFor="let w of wlist" (click)="goTo(\'ProductPage\',w)" >\n						<ion-avatar item-left>\n							<img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n						 </ion-avatar>\n						<h2>{{w.product_name}}</h2>\n						<!-- <p>Rs.: {{w.mrp}}</p> -->\n\n						<ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n								<p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> &nbsp;&nbsp;&nbsp; Rs.:{{pricestrikt(w.per_discount,w.mrp)}} </p>\n							 </ng-container>\n							 <ng-template #elseTemplate>\n									<p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n							 </ng-template>\n\n					  </ion-item>\n					</ion-list>\n				</ion-card>\n				  </ion-content>\n			\n			'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/wishlist/wishlist.html"*/
// })
// export class WishlistPage {
//   products: any[] = [];
//   constructor(public wishlist: WishlistProvider,public http: HttpClient,public restProvider: RestProvider, private translate: TranslateService, public cart: CartProvider, public toast: ToastProvider, public alertCtrl: AlertController, public navCtrl: NavController) {
//   }
//   ionViewWillEnter(){
//     this.wishlist.load().then(() => {
//       this.products = this.wishlist.all;
//     });
//   }
//   removeFromWish(product) {
//     this.translate.get(['REMOVE_TTL', 'REMOVE_MSG', 'CANCEL', 'YES']).subscribe( x=> {
//       let confirm = this.alertCtrl.create({
//         title: x.REMOVE_TTL,
//         message: x.REMOVE_MSG,
//         buttons: [{
//             text: x.CANCEL
//           },{
//             text: x.YES,
//             handler: () => {
//               this.confirmRemove(product);
//             }
//           }]
//       });
//       confirm.present();
//     });
//   }
//   reloadWish(product){
//     product.isFav = true;
//     this.wishlist.post(product);
//     this.products = this.wishlist.all;
//   }
//   addToCart(product){
//     this.cart.post(product, 1);
//     this.reloadWish(product);
//     this.translate.get('ADDED_TO_CART').subscribe( x=> {
//       this.toast.show(x);
//     });
//   }
//   confirmRemove(product: any){
//     this.reloadWish(product);
//     this.translate.get('REMOVE_FROM_WISH').subscribe( x=> {
//       this.toast.show(x);
//     });
//   }
//   goHome(){
//     this.navCtrl.parent.select(0);
//   }
//   goTo(page, params){
//     this.navCtrl.push(page, {params: params});
//   }
// }
// import { Component } from '@angular/core';

// import { RestProvider } from '../../providers/rest/rest';
// import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistPage = (function () {
    function WishlistPage(loader, user, navCtrl, toast, navParams, http, restProvider) {
        this.loader = loader;
        this.user = user;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.http = http;
        this.restProvider = restProvider;
        this.request = {
            method: 'get_fav',
            user_id: ''
        };
        console.log(this.user.user.user_email);
        // this.wishlist1();
    }
    WishlistPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad WishlistPage');
        console.log(this.user.user.user_email);
        if (this.user.user.user_email) {
            this.request.user_id = this.user.user.user_email;
            this.wishlist1();
        }
        else {
            this.toast.show("You are not logged in....");
        }
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad WishlistPage');
    // }
    WishlistPage.prototype.wishlist1 = function () {
        var _this = this;
        this.loader.present();
        if (this.user.user.user_email) {
            this.restProvider.getWishlist(this.request)
                .then(function (data) {
                console.log(data);
                if (data.result == "failed") {
                    console.log(data.result);
                    _this.wlist = [];
                    _this.toast.show("no products in wishlist");
                }
                else if (data.result == "success") {
                    _this.wlist = data.data;
                    console.log(_this.wlist);
                }
            });
        }
        else {
            console.log("You are not Loged in");
        }
        this.loader.dismiss();
    };
    WishlistPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    WishlistPage.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-wishlist',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/wishlist/wishlist.html"*/'<!-- <ion-content padding-top>\n	<div class="subtitle" *ngIf="products.length > 0">\n		<h1 margin-top margin-horizontal>{{ \'WISHLIST\' | translate}}</h1>		\n		<p no-margin margin-horizontal>{{ \'WISH_DESC\' | translate: {value: products.length} }}</p>\n	</div>\n	<ion-grid class="empty" *ngIf="products.length == 0">\n		<ion-row align-items-center>\n			<ion-col align-self-center text-center>\n				<ion-icon name="heart-outline" color="secondary"></ion-icon>\n				<h4 margin-bottom>{{ \'EMPTY\' | translate}}</h4>\n				<button color="secondary" ion-button outline tappable (click)="goHome()">{{ \'START_SHOPPING\' | translate}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-row padding-left padding-right class="product-grid">\n		<ion-col col-6 class="product-item" *ngFor="let x of products">\n			<div tappable (click)="goTo(\'ProductPage\', x)">\n				<div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.images[0].src +\')\'}">\n					<ion-badge *ngIf="x.on_sale">{{x | discount}}</ion-badge>\n				</div>\n				<h5 [innerHTML]="x.name"></h5>\n				<div class="price">\n					<span class="disc" *ngIf="x.on_sale">{{x.regular_price | money}}</span> \n					{{x.price | money}}\n				</div>\n				<ion-row no-padding class="reviews" *ngIf="x.rating_count">\n					<ion-col col-auto no-padding>\n						<ion-rating item-start *ngIf="x.average_rating"\n							[numStars]="5"\n							[readOnly]="true"\n							[value]="x.average_rating">\n						</ion-rating>\n						<span *ngIf="x.rating_count">{{x.rating_count}}</span>\n					</ion-col>\n				</ion-row>\n			</div>\n			<ion-row class="remove">\n				<ion-col col-9><button tappable (click)="addToCart(x)" ion-button small block outline>{{ \'TO_CART\' | translate}}</button></ion-col>\n				<ion-col col-3 text-center><button tappable (click)="removeFromWish(x)" no-padding ion-button icon-only clear><ion-icon no-padding name="trash"></ion-icon></button></ion-col>\n			</ion-row>\n		</ion-col>\n	</ion-row>\n	\n</ion-content>\n		 -->\n		 <ion-header>\n			\n			  <ion-navbar color="primary">\n						<button ion-button menuToggle>\n								<ion-icon name="menu"></ion-icon>\n							</button>\n				<ion-title>wishlist</ion-title>\n			  </ion-navbar>\n			\n			</ion-header>\n			\n			\n			\n				<ion-content >\n					<ion-card>\n					<ion-list>\n					  <ion-item *ngFor="let w of wlist" (click)="goTo(\'ProductPage\',w)" >\n						<ion-avatar item-left>\n							<img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n						 </ion-avatar>\n						<h2>{{w.product_name}}</h2>\n						<!-- <p>Rs.: {{w.mrp}}</p> -->\n\n						<ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n								<p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> &nbsp;&nbsp;&nbsp; Rs.:{{pricestrikt(w.per_discount,w.mrp)}} </p>\n							 </ng-container>\n							 <ng-template #elseTemplate>\n									<p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n							 </ng-template>\n\n					  </ion-item>\n					</ion-list>\n				</ion-card>\n				  </ion-content>\n			\n			'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/wishlist/wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist__ = __webpack_require__(1026);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WishlistPageModule = (function () {
    function WishlistPageModule() {
    }
    return WishlistPageModule;
}());
WishlistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__wishlist__["a" /* WishlistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__wishlist__["a" /* WishlistPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], WishlistPageModule);

//# sourceMappingURL=wishlist.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map