webpackJsonp([25],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = (function () {
    function CartPage(restProvider, viewCtrl, cart, setting, translate, modal, user, toast, nav, alert) {
        this.restProvider = restProvider;
        this.viewCtrl = viewCtrl;
        this.cart = cart;
        this.setting = setting;
        this.translate = translate;
        this.modal = modal;
        this.user = user;
        this.toast = toast;
        this.nav = nav;
        this.alert = alert;
        this.products = [];
        this.total = 0;
        this.flag = 0;
        this.getproduct = {
            method: 'get_product_detail',
            p_id: '',
            email: 'abc.abc@gmail.com'
        };
    }
    CartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.cart.load().then(function () {
            //  console.log(this.cart.all);
            _this.products = _this.cart.all;
            _this.total = _this.cart.total;
            //  console.log(this.total);
        });
        this.app = this.setting.all.settings;
    };
    // redirect()
    // {
    //  this.flag1=this.goCheckout();
    //    console.log(this.flag1);
    // }
    CartPage.prototype.updateTotal = function () {
        this.total = this.cart.total;
    };
    CartPage.prototype.remove = function (product) {
        var _this = this;
        this.translate.get(['Remove product', 'Do you want to remove from cart', 'CANCEL', 'YES']).subscribe(function (x) {
            _this.alert.create({
                title: "Remove product",
                message: "Do you want to remove from cart?",
                buttons: [{
                        text: x.CANCEL
                    }, {
                        text: x.YES,
                        handler: function () {
                            _this.confirmRemove(product);
                        }
                    }]
            }).present();
        });
        this.viewCtrl._didEnter();
        // console.log(this.total);
        this.updateTotal();
    };
    CartPage.prototype.confirmRemove = function (product) {
        var _this = this;
        this.cart.remove(product);
        this.translate.get('REMOVE_FROM_CART').subscribe(function (x) {
            _this.toast.show("Product removed from cart");
        });
        this.updateTotal();
        // console.log(this.total);
    };
    CartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CartPage.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    CartPage.prototype.goHome = function () {
        this.nav.parent.select(0);
    };
    CartPage.prototype.goCheckout = function () {
        var _this = this;
        //  this.user.logout();
        this.flag = 0;
        console.log(this.flag);
        console.log(this.user.user);
        var _loop_1 = function (i) {
            this_1.getproduct.p_id = this_1.products[i].p_id;
            this_1.restProvider.getProduct(this_1.getproduct)
                .then(function (data) {
                _this.product = data;
                console.log(_this.product);
                if (_this.products[i].quantity > _this.product[0].stock) {
                    console.log("hiiii");
                    if (_this.flag != 1)
                        _this.flag = 1;
                    console.log("i am in compare  " + _this.flag);
                    _this.toast.show(_this.products[i].name + " quantity is exiding the stock");
                    console.log(_this.flag);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.products.length; i++) {
            _loop_1(i);
        }
        if (this.user.user.user_email) {
        }
        else {
            this.nav.push('LoginPage');
        }
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/cart/cart.html"*/'<ion-header>  \n	\n		<ion-navbar color="primary">\n				<button ion-button menuToggle>\n						<ion-icon name="menu"></ion-icon>\n					  </button>\n					  \n			<ion-title>Cart</ion-title>\n		</ion-navbar>\n		\n	  \n	</ion-header>\n	\n \n \n \n \n \n \n <ion-content padding-top>\n	<div class="subtitle" *ngIf="cart.total > 0">\n		<!-- <h1 margin-top margin-horizontal>{{ \'CART\' | translate}}</h1> -->\n		<p text-color="primary" no-margin margin-horizontal>To remove product from cart swipe product to left side</p>\n	</div>\n	 <ion-list no-padding>\n		<ion-grid class="empty" *ngIf="cart.total == 0">\n			<ion-row align-items-center>\n				<ion-col align-self-center text-center>\n					<ion-icon name="basket" color="primary"></ion-icon>\n					<h4 margin-bottom>{{ \'EMPTY\' | translate}}</h4>\n					<button color="primary" ion-button outline tappable (click)="goHome()">{{ \'START SHOPPING\' | translate}}</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n  		 <ion-item-sliding *ngFor="let x of products">\n  			<ion-item>\n				<ion-thumbnail item-start>\n				<div class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' +x.images +\')\'}"></div>\n				 \n				</ion-thumbnail>\n				<h3 [innerHTML]="x.name"></h3>\n				 <p>\n					 <!-- <span ><p>{{x.per_discount}} </p>•</span>  -->\n					  <!-- <span class="price">{{x.finalprice | money}}</span> -->\n					<!-- <ng-container *ngIf="x.attributes.length > 0"><span *ngFor="let y of x.attributes">• <i>{{y.option || y.options[0]}}</i>&nbsp;</span></ng-container> -->\n					<span> x {{x.quantity}}</span>\n				</p>\n				<div item-end>\n					<ion-row no-padding>\n						<ion-col no-padding text-center>\n							<button clear big ion-button icon-only tappable (click)="cart.post(x, 1); updateTotal()">\n								<ion-icon color="secondary" name="add-circle"></ion-icon>\n							</button>\n						</ion-col>\n					</ion-row>\n					<ion-row no-padding *ngIf="x.quantity > 1">\n						<ion-col no-padding text-center> \n							<button small clear ion-button icon-only tappable (click)="cart.post(x, -1); updateTotal()">\n								<ion-icon color="secondary" name="remove-circle"></ion-icon>\n							</button>\n						</ion-col>\n					</ion-row>\n				</div>\n			</ion-item>\n			<ion-item-options side="right">\n				<button ion-button small color="assertive" tappable (click)="remove(x)">\n					<ion-icon name="trash"></ion-icon>\n					{{\'REMOVE\' | translate}}\n				</button>\n			</ion-item-options>\n  		</ion-item-sliding> \n  	</ion-list>\n</ion-content>\n\n<ion-footer>\n   <ion-toolbar padding-horizontal>\n    <ion-row align-items-center no-padding>\n    	<ion-col class="total" align-self-center no-padding *ngIf="products.length > 0">\n    		<span>Total ({{cart.totalQtyDetail}} items)</span>\n			<h5>{{total}}</h5>\n    	</ion-col>\n    	<ion-col col-33 align-self-center no-padding>\n			<button ion-button block tappable [disabled]="products.length <= 0" (click)="goCheckout()">{{\'CHECKOUT\' | translate}}</button>\n  		</ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> '/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/cart/cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart__ = __webpack_require__(1003);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = (function () {
    function CartPageModule() {
    }
    return CartPageModule;
}());
CartPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__cart__["a" /* CartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cart__["a" /* CartPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map