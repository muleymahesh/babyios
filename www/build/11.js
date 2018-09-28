webpackJsonp([11],{

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_global__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(nav, statusBar, translate, toast, wishlist, loader, modalCtrl, woo, restProvider, http) {
        this.nav = nav;
        this.translate = translate;
        this.toast = toast;
        this.wishlist = wishlist;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.woo = woo;
        this.restProvider = restProvider;
        this.http = http;
        //categories: any[] = new Array;
        this.data = new Array();
        this.slideRequest = {
            method: 'get_all_banner'
        };
        this.cateogry = {
            method: 'get_all_category'
        };
        this.agegroup = {
            method: 'get_all_agegroup'
        };
        this.offer = {
            method: 'get_all_offers'
        };
        this.myBraands = {
            method: 'get_all_brand'
        };
        this.request = {
            method: 'get_recommended',
        };
        this.App = __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */];
        // this.woo.getAllCategories().then( (tmp) => {
        // 	this.categories = tmp;
        // 	this.woo.loadSetting().then( x=> {
        // 		if(x.currency){
        // 			this.app = x;
        // 			for(let i in tmp){
        // 				if(tmp[i].count > 4 && tmp[i].parent !=0){
        // 					this.woo.getAllProducts(null, tmp[i].id, null, null, null, 9, null, null).then( (val) => {
        // 						this.data.push(val);
        // 					})
        // 				}
        // 			}
        // 			this.loader.dismiss();
        // 		}		
        // 	});
        // });
        this.getBanner();
    }
    HomePage.prototype.setFav = function (product) {
        var _this = this;
        this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe(function (x) {
            var msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
            _this.wishlist.post(product);
            product.isFav = product.isFav ? false : true;
            _this.toast.show(msg);
        });
    };
    HomePage.prototype.wishlist1 = function () {
        var _this = this;
        this.restProvider.getRecommendations(this.request)
            .then(function (data) {
            _this.rlist = data;
            _this.getCategory();
        });
    };
    HomePage.prototype.getBanner = function () {
        var _this = this;
        //
        this.loader.present();
        this.restProvider.getBanner(this.slideRequest)
            .then(function (data) {
            console.log(data);
            _this.slides = data;
            _this.wishlist1();
            _this.loader.dismiss();
        });
    };
    HomePage.prototype.getCategory = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.cateogry)
            .then(function (data) {
            _this.categories = data;
            _this.getAgeGruops();
        });
    };
    HomePage.prototype.getOffer = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.offer)
            .then(function (data) {
            _this.offers = data;
        });
    };
    HomePage.prototype.getBrands = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.myBraands)
            .then(function (data) {
            _this.Brands = data;
            _this.getOffer();
        });
    };
    HomePage.prototype.getAgeGruops = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.agegroup)
            .then(function (data) {
            _this.agegroups = data;
            _this.getBrands();
        });
    };
    HomePage.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    HomePage.prototype.showSearch = function () {
        this.modalCtrl.create('SearchPage').present();
    };
    HomePage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/home/home.html"*/'<ion-header>  \n\n    <ion-navbar color="primary">\n        <ion-title>BabyNeeds</ion-title>\n    </ion-navbar>\n        <div class="newsearch">\n          <div no-padding class="searchbar searchbar-md">\n            <div class="searchbar-input-container">\n              <button ion-button icon-left clear icon-only (click)="showSearch()"><ion-icon name="search" mode="ios"></ion-icon></button>\n              <!-- <input (click)="showSearch()" class="searchbar-input" placeholder="{{ \'SEARCH\' | translate }}" value="{{App.store}}" type="search" autocomplete="off" autocorrect="off" spellcheck="false"> -->\n              <div class="searchbar-input" (click)="showSearch()">\n                  {{App.store}}\n              </div>\n            </div>\n          </div>\n        </div>\n  \n</ion-header>\n\n <ion-content no-padding>\n\n      <!-- <ion-slides loop="true" autoplay="2000" pager>\n        <ion-slide *ngFor="let number of [1,2,3,4]">\n          <img src="assets/img/slides/slide{{number}}.jpg" />\n        </ion-slide>\n      </ion-slides> -->\n\n   <ion-slides  *ngIf="slides && slides.length"  pager = \'true\'  autoplay="3000" loop="true" speed="3000" style="max-height:200px">\n        <ion-slide *ngFor="let slide of slides">\n          <img [src]="slide.image_path "  style="width:100% ;height: 180px;">\n        </ion-slide>\n      </ion-slides>\n\n      <div class="">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding no-lines>\n            {{ \' Your recommendations\' | translate }}\n        </ion-item>\n        </ion-list>\n        \n             \n      <ion-item *ngFor="let w of rlist;  let i=index " (click)="goTo(\'ProductPage\',w)" >\n          <ion-avatar item-start>\n            <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n          </ion-avatar>\n          <h3>{{w.product_name}}</h3>\n          \n          <ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n            <p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> <span> Rs.:{{pricestrikt(w.per_discount,w.mrp)}}</span> </p>\n           </ng-container>\n           <ng-template #elseTemplate>\n              <p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n           </ng-template>\n        \n       </ion-item>\n        \n       \n      <ion-row>\n          <ion-col text-left>\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n              {{ \'SEE_ALL\' | translate }}\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n              </ion-col>\n            </ion-row>\n        \n     \n\n\n    </div> \n\n\n\n\n      <div class="">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding no-lines>\n            {{ \'CATEGORIES\' | translate }}\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n                {{ \'SEE_ALL\' | translate }}\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </ion-item>\n        </ion-list>\n\n        <ion-scroll scrollX="true" class="item category-slide">\n          <ion-row nowrap padding-left>\n            <ng-container *ngFor="let x of categories; let i=index">\n              <ion-col col-auto no-padding *ngIf="categories[i*2] || categories[i*2+1]">\n                <div *ngIf="categories[i*2]" class="img"  [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + categories[i*2].cat_img +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2])">\n                  <div class="fade"></div>\n                  <h5>{{categories[i*2].cat_name}}</h5>\n                </div>\n                <div *ngIf="categories[i*2+1]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + categories[i*2+1].cat_img +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2+1])">\n                  <div class="fade"></div>\n                  <h5>{{categories[i*2+1].cat_name}}</h5>\n                </div>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-scroll>\n\n          <!-- <ion-row padding-left padding-right class="categories-grid">\n            <ion-col col-4 class="category-item" *ngFor="let x of tmp">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', x)">\n                <div class="fade"></div>\n                <h5>{{x.name}}</h5>\n              </div>\n            </ion-col>\n          </ion-row> -->\n      </div> \n\n      <div class="">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding no-lines>\n            {{ \'AGE GROUP\' | translate }}\n          </ion-item>\n        </ion-list>\n\n        <ion-scroll scrollX="true" class="item category-slide">\n          <ion-row nowrap padding-left>\n            <ng-container *ngFor="let x of agegroups ; let i=index">\n              <ion-col col-auto no-padding *ngIf="agegroups[i*2] || agegroups[i*2+1]">\n                <div *ngIf="agegroups[i*2]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + agegroups[i*2].img_url +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2])">\n                  <div class="fade"></div>\n                  <h5>{{agegroups[i*2].name}}</h5>\n                </div>\n                <div *ngIf="agegroups[i*2+1]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + agegroups[i*2+1].img_url +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2+1])">\n                  <div class="fade"></div>\n                  <h5>{{agegroups[i*2+1].name}}</h5>\n                </div>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-scroll>\n\n          <!-- <ion-row padding-left padding-right class="categories-grid">\n            <ion-col col-4 class="category-item" *ngFor="let x of tmp">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', x)">\n                <div class="fade"></div>\n                <h5>{{x.name}}</h5>\n              </div>\n            </ion-col>\n          </ion-row> -->\n      </div> \n\n\n      \n                   \n            <div class="">\n              <ion-list no-lines no-margin margin-left>\n                <ion-item no-padding no-lines>\n                  {{ \' Upto 25% off on top brands\' | translate }}\n              </ion-item>\n              </ion-list>\n<ion-grid>\n              <ion-row >\n                <ion-col col-6  *ngFor="let b of Brands" >  \n               \n                  <ion-card  style=" width:130px; min-height: calc(100% - 5px);" >\n                 <img (click)="OpenProductListByBrand($event,b.brand_id,b.name)" src="http://www.babyneeds.co.in/babyneeds/product_image/{{b.brand_img}}"  style="width:100% ;height: 180px;"  />  \n                            \n                  </ion-card>\n                </ion-col>\n                \n                 </ion-row>\n        </ion-grid>\n        <ion-row>\n          <ion-col text-left>\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n              {{ \'SEE_ALL\' | translate }}\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n              </ion-col>\n            </ion-row>\n          </div>\n      \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!-- <div class="product-slide" *ngFor="let x of data">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding>\n            {{x[0].categories[0].name}}\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'ProductGridPage\', x[0].categories[0])">\n              {{ \'SEE_ALL\' | translate }}\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </ion-item>\n        </ion-list>\n\n        <ion-slides margin-bottom spaceBetween="10" slidesPerView="2.5">\n          <ion-slide *ngFor="let y of x">\n            <button class="fav" tappable (click)="setFav(y)" ion-button clear icon-only>\n              <ion-icon *ngIf="y.variations.length == 0" no-padding name="heart{{!wishlist.isFav(y) ? \'-outline\' : \'\'}}"></ion-icon>\n            </button>\n            <div text-left class="product-item" tappable (click)="goTo(\'ProductPage\', y)">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + y.images[0].src +\')\'}">\n                <ion-badge *ngIf="y.on_sale">{{y | discount}}</ion-badge>\n              </div>\n              <h5 [innerHTML]="y.name"></h5>\n              <div class="price">\n                  <span class="disc" *ngIf="y.on_sale">{{y.regular_price | money:app}}</span> \n                  {{y.price | money:app}}\n              </div>\n              <ion-row no-padding class="reviews" *ngIf="y.rating_count">\n                <ion-col col-auto no-padding>\n                  <ion-rating *ngIf="y.average_rating" item-start\n                    [numStars]="5"\n                    [readOnly]="true"\n                    [value]="y.average_rating">\n                  </ion-rating>\n                  <span *ngIf="y.rating_count">{{y.rating_count}}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-slide>\n        </ion-slides> -->\n        <!-- <ion-row padding-left padding-right class="product-grid">\n          <ion-col col-6 class="product-item" *ngFor="let x of products" tappable (click)="goTo(\'ProductPage\', x)">\n            <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.img +\')\'}">\n              <ion-icon class="fav" name="heart{{!x.isFav ? \'-outline\' : \'\'}}"></ion-icon>\n              <ion-badge *ngIf="x.disc">{{x.disc}}% OFF</ion-badge>\n            </div>\n            <h5>{{x.title}}</h5>\n            <div class="price">\n                <span class="disc" *ngIf="x.on_sale">{{x.regular_price | currency:\'USD\':true:\'1.2-2\'}}</span> \n                {{x.price | currency:\'USD\':true:\'1.2-2\'}}\n            </div>\n            <ion-row no-padding class="reviews">\n              <ion-col col-6 no-padding>\n                <ion-rating item-start\n                  [numStars]="5"\n                  [readOnly]="true"\n                  [value]="x.rating">\n                </ion-rating>\n              </ion-col>\n              <ion-col no-padding text-center *ngIf="x.reviews">{{x.reviews}} Reviews</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row> -->\n      <!-- </div> -->\n\n        <div class="">\n     \n          <ion-list no-lines no-margin margin-left>\n            <ion-item no-padding no-lines>\n              {{ \'  Offers\' | translate }}\n          </ion-item>\n          </ion-list>\n         \n       \n        <ion-card  *ngFor="let w of offers; let i=index">\n            <ion-item *ngIf="i<6">\n                <img  (click)="OpenProductListByOffer($event,w.offer_id,w.name)" src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.offer_img}}" style="width:100% ;height: 150px;" >\n              </ion-item>\n          \n          </ion-card>\n      \n    </div>\n</ion-content>'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["k" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["l" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map