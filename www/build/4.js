webpackJsonp([4],{

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductPageModule = (function () {
    function ProductPageModule() {
    }
    return ProductPageModule;
}());
ProductPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__product__["a" /* ProductPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__product__["a" /* ProductPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* IonicImageViewerModule */]
        ],
    })
], ProductPageModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(545);
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






var ProductPage = (function () {
    // isSetVariation: boolean = false;
    function ProductPage(history, http, restProvider, alert, platform, socialSharing, translate, toast, wishlist, navCtrl, loader, modal, navParam, woo) {
        this.history = history;
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
        this.getproduct = {
            method: 'get_product_detail',
            p_id: '',
            email: 'abc.abc@gmail.com'
        };
        // variations: any[] = [];
        this.reviews = [];
        this.related = [];
        this.loader.present();
        this.product = this.navParam.data.params;
        // this.history.post(this.product);
        // // if(this.product.variations){
        // //   this.woo.getProductVariations(this.product.id).then( (val) => {
        // //     this.product.variations = val;
        // //   })
        // }
        // if(this.product.rating_count > 0){
        //   this.woo.getProductReviews(this.product.id).then( (val) => {
        //     this.product.reviews = val;
        //     this.loader.dismiss();
        //   })
        // }
        this.getproductdetail();
        // this.product.related = this.woo.getProductRelated(this.product.related_ids);
        this.loader.dismiss();
    }
    // setVariation(e){
    //   let x = JSON.parse(e);
    //   this.product.variation_id = x.id;
    //   this.product.price = x.price;
    //   this.product.regular_price = x.regular_price;
    //   this.product.on_sale = x.on_sale;
    //   this.product.in_stock = x.in_stock;
    //   this.product.attributes = x.attributes;
    //   this.isSetVariation = true;
    // }
    ProductPage.prototype.getproductdetail = function () {
        var _this = this;
        this.getproduct.p_id = this.product.p_id;
        console.log(this.getproduct.p_id);
        this.restProvider.getProduct(this.getproduct)
            .then(function (data) {
            _this.products = data;
            console.log(_this.products);
        });
    };
    // viewCart(){
    //   this.modal.create('MiniCartPage', {}, { cssClass: 'inset-modal' }).present();
    // }
    // openModal(pageName) {
    //   if(this.product.variations.length > 0 && !this.isSetVariation){
    //     this.translate.get(['SELECT_VARIATION']).subscribe( x=> {
    //       this.toast.show(x.SELECT_VARIATION);
    //     });
    //   }else{
    //     this.modal.create(pageName, {product: this.product}, { cssClass: 'inset-modal' }).present();
    //     this.translate.get(['ADDED_TO_CART']).subscribe( x=> {
    //       this.toast.show(x.ADDED_TO_CART);
    //     });
    //   }
    // }
    // setFav(product: any){
    //   this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
    // 		let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
    // 		this.wishlist.post(product);
    // 		product.isFav = product.isFav ? false : true;
    // 		this.toast.show(msg);
    //   });
    // }
    // share(product: any){
    //   // console.log(product);
    //   if (!this.platform.is('cordova')) {
    //     this.translate.get(['OK', 'ONLY_DEVICE', 'ONLY_DEVICE_DESC']).subscribe( x=> {
    //       this.alert.create({
    //         title: x.ONLY_DEVICE,
    //         message: x.ONLY_DEVICE_DESC,
    //         buttons: [{
    //             text: x.OK
    //           }]
    //       }).present();
    //       return false;
    //     });
    //   }else{
    //     let img = [];
    //     for(let i in product.images)
    //       img.push(product.images[i].src);
    //     this.socialSharing.share(product.name, product.name, img, product.permalink).then((x) => {
    //       console.log(x);
    //       this.toast.show('Successfully shared');
    //     }).catch((err) => {
    //       console.log(err);
    //     });
    //   }
    // }
    ProductPage.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    ProductPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/product/product.html"*/'<ion-header transparent no-border no-lines>\n  <ion-navbar color="primary" >\n      <ion-title>Product details</ion-title>\n  	<ion-buttons end>\n      <button ion-button icon-only tappable (click)="viewCart()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n   <div *ngFor="let y of products">\n    <ng-container *ngIf="y.imgs.length!=1; else elseTemplate">\n            <ion-slides  *ngIf="products && products.length" pager = \'true\'  style="max-height:200px" class="featured" loop="true" autoplay="3000" >\n        <ion-slide *ngFor="let x of products[0].imgs">\n          <div><img src="http://www.babyneeds.co.in/babyneeds/product_image/{{x.img_url}}" style="width:100% ;height:200px;" imageViewer /></div>\n        </ion-slide>\n      </ion-slides>  \n \n  </ng-container>\n  <ng-template #elseTemplate>\n      <div *ngFor="let x of products[0].imgs"><img src="http://www.babyneeds.co.in/babyneeds/product_image/{{x.img_url}}" style="width:100% ;height: 200px;" imageViewer /></div>\n    \n  </ng-template>\n  \n</div>\n      \n\n    <!-- <ion-slides  *ngIf="product && product.length"   pager = \'true\'  autoplay="3000" loop="true" speed="3000" style="max-height:200px">\n      <ion-slide *ngFor="let slide of product[0].imgs">\n        <ion-img src="http://www.babyneeds.co.in/babyneeds/product_image/{{slide.img_url}}"  style="width:100% ;height: 180px;"></ion-img>\n      </ion-slide>\n    </ion-slides> -->\n\n    <!-- <ion-slides  *ngIf="slides && slides.length"  pager = \'true\'  autoplay="3000" loop="true" speed="3000" style="max-height:200px">\n      <ion-slide *ngFor="let slide of slides">\n       <div> <img [src]="slide.image_path "  style="width:100% ;height: 180px;"></div>\n      </ion-slide>\n    </ion-slides> -->\n<!-- \n    <ion-card *ngFor="let p1 of products" no padding>\n        \n       <ion-card-title  >\n          <p style="font-size:14px; text-align:left"><b> {{p1.product_name}}</b></p>\n       </ion-card-title>\n   \n       <div >\n         <p style="font-size:12px; text-align:left"><b>Product Description</b></p>\n       </div>\n   \n       \n         <p style="font-size:11px; text-align:left"> {{p1.long_desc}}</p>\n       \n   <div>    <button ion-button full color="gray">Write a review</button></div>\n   \n   <div>\n       <b>Item Detail</b><br>\n         <ng-container *ngIf="p1.per_discount!=0; else elseTemplate">\n         <p style="font-size:10px; text-align:left; "><b>Brand    :{{p1.brand_name}}</b> </p>\n         <p style="font-size:10px; text-align:left; "><b>Price    :<del>Rs.{{p1.mrp}} </del> <span> Rs.{{pricestrikt(p1.per_discount,p1.mrp)}}</span></b></p>\n        </ng-container>\n        <ng-template #elseTemplate>\n         <p style="font-size:12px; text-align:left; "><b>Brand    :{{p1.brand_name}}</b></p>  \n         <p style="font-size:12px; text-align:left; "><b>Price    :Rs.{{p1.mrp}}</b></p>\n        </ng-template>\n   \n        \n       </div><br>\n        \n\n -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n	  <div class="main-content">\n        <ion-card *ngFor="let p1 of products" no padding>\n        <div padding>\n          <ion-grid no-padding>\n              <ion-row no-padding align-items-center>\n                <ion-col col-75 no-padding>\n                  <p style="font-size:14px; text-align:left" item-start no-margin [innerHTML]="product.product_name"></p>\n                </ion-col>\n                <!-- <ion-col col-auto no-padding>\n                  <button item-end no-margin no-padding ion-button icon-only clear tappable (click)="share(product)">\n                    <ion-icon no-padding name="ios-share"></ion-icon>\n                  </button>\n                </ion-col> -->\n              </ion-row>\n          </ion-grid><br>\n\n          <div>\n              <p style="font-size:12px; text-align:left"><b>Product Description</b></p>\n            </div><br>\n\n          <div style="font-size:12px; text-align:left">{{p1.long_desc}}</div>\n        </div>\n        <div>    <button ion-button full color="gray">Write a review</button></div>\n         <ion-list mode="md" class="specs">\n            <ion-list-header mode="md" no-margin no-padding margin-left>\n              {{\'Item details\' | translate}}\n            </ion-list-header>\n            <ion-item>\n              <ion-grid no-padding>\n                 \n                  <ion-row no-padding>\n                      <ion-col col-4 no-padding>Brand</ion-col>\n                      <ion-col col-8 no-padding>\n                        :{{p1.brand_name}}\n                      </ion-col>\n                  </ion-row>\n                  <ion-row no-padding>\n                      <ng-container *ngIf="p1.per_discount!=0; else elseTemplate">\n                      <ion-col col-4 no-padding>Price</ion-col>\n                      <ion-col col-8 no-padding>\n                          <del>:Rs.{{p1.mrp}} </del> &nbsp;&nbsp;&nbsp; :Rs.{{pricestrikt(p1.per_discount,p1.mrp)}}\n                      </ion-col>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n                        <ion-col col-4 no-padding>Price</ion-col>\n                        <ion-col col-8 no-padding>\n                          :Rs.{{p1.mrp}}\n                        </ion-col>\n                      </ng-template>\n                    </ion-row>\n\n                    <ng-container *ngIf="p1.stock>=1; else elseTemplate">\n                      \n                  <ion-row no-padding>\n                      <ion-col col-4 no-padding>Stock</ion-col>\n                      <ion-col col-8 no-padding>\n                       :Availabe\n                      </ion-col>\n                      </ion-row>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n                      \n                  <ion-row no-padding >\n                      <ion-col col-4 no-padding>Stock</ion-col>\n                      <ion-col col-8 no-padding>\n                       :Out of stock\n                      </ion-col>\n                  </ion-row>\n                    </ng-template>\n                    \n\n                  <ion-row no-padding *ngIf="p1.weight">\n                      <ion-col col-4 no-padding>Weight</ion-col>\n                      <ion-col col-8 no-padding>\n                        :{{p1.weight}}\n                      </ion-col>\n                  </ion-row>\n                  <ion-row no-padding *ngIf="p1.size!=0">\n                      <ion-col col-4 no-padding>Size</ion-col>\n                      <ion-col col-8 no-padding>\n                        :{{p1.size}}\n                      </ion-col>\n                     </ion-row>\n              </ion-grid>\n            </ion-item>\n        </ion-list>\n\n        <!-- <ion-list-header mode="md" no-margin no-padding margin-left *ngIf="product.variations.length > 0">\n          {{\'VARIATION\' | translate}}\n        </ion-list-header>\n        <ion-list mode="md" radio-group (ionChange)="setVariation($event)" padding-bottom no-margin margin-horizontal margin-bottom *ngIf="product.variations.length > 0">\n          <ion-item mode="ios" *ngFor="let x of product.variations" no-padding>\n              <ion-label>\n                <span *ngFor="let y of x.attributes">\n                  {{y.name}}: {{y.option}}\n                </span>\n              </ion-label>\n              <ion-radio mode="ios" value="{{x | json}}"></ion-radio>\n          </ion-item>\n        </ion-list> -->\n\n        <!-- <ion-list mode="md" *ngIf="product.description">\n          <ion-list-header mode="md" no-margin no-padding margin-left margin-top>\n            {{\'DESCRIPTION\' | translate}}\n          </ion-list-header>\n          <ion-item mode="md">\n            <div [innerHTML]="product.description"></div>\n          </ion-item>\n        </ion-list>\n\n        <ion-list-header mode="md" no-margin no-padding margin-left *ngIf="product.rating_count > 0">\n          {{\'REVIEW\' | translate}}\n        </ion-list-header>\n        <ion-list no-margin margin-horizontal padding-bottom *ngIf="product.rating_count > 0">\n          <ion-item *ngFor="let x of product.reviews" no-padding>\n            <ion-row no-padding>\n                <ion-col col-4>\n                  <div>{{x.name}}</div>\n                  <div class="ago">{{x.date_created | moment:"ago" | lowercase}}</div>\n                  <ion-rating *ngIf="x.rating"\n                    [numStars]="5"\n                    [readOnly]="true"\n                    [value]="x.rating">\n                  </ion-rating>\n                </ion-col>\n                <ion-col col-8>\n                  {{x.review}}\n                </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n\n        <div class="product-slide">\n          <ion-list-header mode="md" no-margin no-padding margin-left margin-bottom>\n            {{\'RELATED\' | translate}}\n          </ion-list-header>\n\n          <ion-slides margin-bottom spaceBetween="10" slidesPerView="2.5">\n            <ion-slide *ngFor="let y of product.related">\n              <button class="fav" tappable (click)="setFav(y)"  ion-button clear icon-only>\n                <ion-icon *ngIf="y.variations.length == 0" no-padding name="heart{{!wishlist.isFav(y) ? \'-outline\' : \'\'}}"></ion-icon>\n              </button>\n              <div text-left class="product-item" tappable (click)="goTo(\'ProductPage\', y)">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + y.images[0].src +\')\'}">\n                  <ion-badge *ngIf="y.on_sale">{{y | discount}}</ion-badge>\n                </div>\n                <h5 [innerHTML]="y.name"></h5>\n                <div class="price">\n                    <span class="disc" *ngIf="y.on_sale">{{y.regular_price | money}}</span> \n                    {{y.price | money}}\n                </div>\n                <ion-row no-padding class="reviews" *ngIf="y.rating_count">\n                  <ion-col col-auto no-padding>\n                    <ion-rating *ngIf="y.average_rating" item-start\n                      [numStars]="5"\n                      [readOnly]="true"\n                      [value]="y.average_rating">\n                    </ion-rating>\n                    <span *ngIf="y.rating_count">{{y.rating_count}}</span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>-->\n      </ion-card>\n	  </div> \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar *ngFor="let p1 of products">\n    <ion-row align-items-center>\n      <ion-col class="total" align-self-center>\n        <h5>\n          <span class="disc" *ngIf="p1.per_discount">{{p1.mrp | money}}</span>\n          {{ pricestrikt(p1.per_discount,p1.mrp)| money}}\n        </h5>\n        <ion-row no-padding class="reviews" *ngIf="product.rating_count">\n          <ion-col col-auto no-padding>\n            <ion-rating *ngIf="product.average_rating" item-start\n              [numStars]="5"\n              [readOnly]="true"\n              [value]="product.average_rating">\n            </ion-rating>\n            <span *ngIf="product.rating_count">{{product.rating_count}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col align-self-center>\n        <button ion-button block tappable (click)="openModal(\'MiniCartPage\')">{{\'TO_CART\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> \n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/product/product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* HistoryProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WooCommerceProvider */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=4.js.map