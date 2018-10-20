webpackJsonp([9],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(104);
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
    function ProductPage(user, history, cart, http, restProvider, alert, platform, socialSharing, translate, toast, wishlist, navCtrl, loader, modal, navParam, woo) {
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
        this.reviewreq = {
            method: 'get_product_rating',
            p_id: ''
        };
        this.getproduct = {
            method: 'get_product_detail',
            p_id: '',
            email: 'abc.abc@gmail.com'
        };
        this.setfav = {
            method: 'add_fav',
            user_id: '',
            p_id: '',
        };
        this.remfav = {
            method: 'delete_fav',
            user_id: '',
            p_id: '',
        };
        // variations: any[] = [];
        this.related = [];
        this.loader.present();
        this.product = this.navParam.data.params;
        //ss this.history.post(this.product);
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
        if (this.user.user.user_id) {
            this.getproduct.p_id = this.product.p_id;
            this.getproduct.email = this.user.user.user_email;
            this.restProvider.getProduct(this.getproduct)
                .then(function (data) {
                _this.products = data;
                console.log(_this.products);
            });
            this.getReviwe();
        }
        else {
            this.getproduct.p_id = this.product.p_id;
            this.restProvider.getProduct(this.getproduct)
                .then(function (data) {
                _this.products = data;
                console.log(_this.products);
            });
            this.getReviwe();
        }
    };
    ProductPage.prototype.viewCart = function () {
        this.modal.create('CartPage', {}, { cssClass: 'inset-modal' }).present();
    };
    ProductPage.prototype.openModal = function (pageName) {
        console.log(this.products[0]);
        this.modal.create(pageName, { product: this.products[0] }, { cssClass: 'inset-modal' }).present();
        //  this.translate.get(['ADDED_TO_CART']).subscribe( x=> {
        //   this.toast.show(x.ADDED_TO_CART);
        // });
    };
    ProductPage.prototype.setFav = function (product) {
        var _this = this;
        console.log(this.products[0].is_fav);
        this.getproduct.p_id = product.p_id;
        this.getproduct.email = this.user.user.user_email;
        console.log(this.product);
        this.product.is_fav = this.products[0].is_fav;
        console.log(this.product.is_fav);
        if (this.product.is_fav == "true") {
            if (this.user.user.user_id) {
                this.remfav.user_id = this.user.user.user_email;
                this.remfav.p_id = product.p_id;
                this.restProvider.favOperation(this.remfav)
                    .then(function (data) {
                    _this.res = data;
                    if (_this.res.result == "success") {
                        _this.products[0].is_fav = "false";
                        _this.toast.show(_this.res.responseMessage);
                    }
                    else if (_this.res.result == "failed") {
                        _this.toast.show(_this.res.responseMessage);
                    }
                    else {
                        _this.toast.show("Something is wrong please contact Us");
                    }
                });
            }
            else {
                this.toast.show("You are not Loged in");
            }
        }
        else {
            if (this.user.user.user_id) {
                this.setfav.user_id = this.user.user.user_email;
                this.setfav.p_id = product.p_id;
                console.log(product);
                console.log(product.is_fav);
                this.restProvider.favOperation(this.setfav)
                    .then(function (data) {
                    _this.res = data;
                    if (_this.res.result == "success") {
                        _this.products[0].is_fav = "true";
                        _this.toast.show(_this.res.responseMessage);
                    }
                    else if (_this.res.result == "failed") {
                        _this.toast.show(_this.res.responseMessage);
                    }
                    else {
                        _this.toast.show("Something is wrong please contact Us");
                    }
                });
            }
            else {
                this.toast.show("You are not Loged in");
            }
        }
    };
    ProductPage.prototype.setFav1 = function (product) {
        if (product.is_fav == "true") {
            console.log("Remove fav");
        }
        else if (product.is_fav == "false") {
            console.log("add to fav");
        }
    };
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
    ProductPage.prototype.addTOCart = function () {
        this.product1 = this.products[0];
        if (this.product1.stock == 0) {
            this.toast.show("Currently this product is out of stock");
        }
        else {
            this.cart.post(this.product1);
            this.toast.show("Product added to cart");
        }
    };
    ProductPage.prototype.getReviwe = function () {
        var _this = this;
        this.reviewreq.p_id = this.product.p_id;
        this.restProvider.reviweOperation(this.reviewreq)
            .then(function (data) {
            console.log(data);
            if (data.result == "failed") {
                _this.reviews = [];
            }
            else if (data.result == "success") {
                _this.reviews = data.data;
                console.log(_this.reviews);
            }
        });
    };
    ProductPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/product/product.html"*/'<ion-header transparent no-border no-lines>\n  <ion-navbar color="primary" >\n      <ion-title>Product details</ion-title>\n  	<ion-buttons end>\n      <button ion-button icon-only tappable (click)="viewCart()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n\n\n\n\n\n\n   \n    <ion-card>\n    \n    \n      <!-- <img src="img/advance-card-bttf.png"> -->\n\n      <div *ngFor="let y of products">\n          <ion-badge color="primary" *ngIf="y.per_discount>0">{{y.per_discount}}%</ion-badge> \n                    <ng-container *ngIf="y.imgs.length!=1; else elseTemplate">\n                  <ion-slides  *ngIf="products && products.length" pager = \'true\'  style="max-height:200px" class="featured" loop="true" autoplay="3000" >\n              <ion-slide *ngFor="let x of products[0].imgs">\n                <div><img src="http://www.babyneeds.co.in/babyneeds/product_image/{{x.img_url}}" style="width:100% ;height:200px;" imageViewer /></div>\n              </ion-slide>\n            </ion-slides>  \n       \n        </ng-container>\n        <ng-template #elseTemplate>\n            <div *ngFor="let x of products[0].imgs"><img src="http://www.babyneeds.co.in/babyneeds/product_image/{{x.img_url}}" style="width:100% ;height: 200px;" imageViewer /></div>\n          \n        </ng-template>\n        \n      </div>\n    \n      <!-- <ion-card-content>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n      </ion-card-content> -->\n    \n      <ion-row *ngFor="let y of products">\n       <ng-container *ngIf="y.avg_rating==\'null\'; else elseTemplate">\n              <ion-col align="center">\n              <ion-rating color=primary\n              [numStars]="5"\n              [readOnly]="true"\n              [value]="0">\n              </ion-rating>\n              </ion-col>\n       </ng-container>\n       <ng-template #elseTemplate>\n              <ion-col>\n              <ion-rating color=primary\n              [numStars]="5"\n              [readOnly]="true"\n              [value]="y.avg_rating">\n              </ion-rating>\n              </ion-col>\n       </ng-template>\n       \n       \n          <!-- <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button> -->\n        \n        <ion-col>\n        \n          \n            <div>Review({{y.reviews}})</div>\n         \n        </ion-col>\n       \n        <ion-col center text-center>\n            <button class="fav" tappable (click)="setFav(products[0])"  ion-button clear icon-only>\n                <ion-icon no-padding name="heart{{y.is_fav===\'true\' ? \'\' : \'-outline\'}}"></ion-icon>\n              </button>\n          </ion-col>\n\n\n              \n        \n       \n      </ion-row>\n    \n    </ion-card>\n    \n    \n\n   <!-- <div *ngFor="let y of products">\n    <ng-container *ngIf="y.imgs.length!=1; else elseTemplate">\n            <ion-slides  *ngIf="products && products.length" pager = \'true\'  style="max-height:200px" class="featured" loop="true" autoplay="3000" >\n        <ion-slide *ngFor="let x of products[0].imgs">\n          <div><img src="http://www.babyneeds.co.in/babyneeds/product_image/{{x.img_url}}" style="width:100% ;height:200px;" imageViewer /></div>\n        </ion-slide>\n      </ion-slides>  \n \n  </ng-container>\n  <ng-template #elseTemplate>\n      <div *ngFor="let x of products[0].imgs"><img src="http://www.babyneeds.co.in/babyneeds/product_image/{{x.img_url}}" style="width:100% ;height: 200px;" imageViewer /></div>\n    \n  </ng-template>\n  \n</div> -->\n      \n\n    <!-- <ion-slides  *ngIf="product && product.length"   pager = \'true\'  autoplay="3000" loop="true" speed="3000" style="max-height:200px">\n      <ion-slide *ngFor="let slide of product[0].imgs">\n        <ion-img src="http://www.babyneeds.co.in/babyneeds/product_image/{{slide.img_url}}"  style="width:100% ;height: 180px;"></ion-img>\n      </ion-slide>\n    </ion-slides> -->\n\n    <!-- <ion-slides  *ngIf="slides && slides.length"  pager = \'true\'  autoplay="3000" loop="true" speed="3000" style="max-height:200px">\n      <ion-slide *ngFor="let slide of slides">\n       <div> <img [src]="slide.image_path "  style="width:100% ;height: 180px;"></div>\n      </ion-slide>\n    </ion-slides> -->\n<!-- \n    <ion-card *ngFor="let p1 of products" no padding>\n        \n       <ion-card-title  >\n          <p style="font-size:14px; text-align:left"><b> {{p1.product_name}}</b></p>\n       </ion-card-title>\n   \n       <div >\n         <p style="font-size:12px; text-align:left"><b>Product Description</b></p>\n       </div>\n   \n       \n         <p style="font-size:11px; text-align:left"> {{p1.long_desc}}</p>\n       \n   <div>    <button ion-button full color="gray">Write a review</button></div>\n   \n   <div>\n       <b>Item Detail</b><br>\n         <ng-container *ngIf="p1.per_discount!=0; else elseTemplate">\n         <p style="font-size:10px; text-align:left; "><b>Brand    :{{p1.brand_name}}</b> </p>\n         <p style="font-size:10px; text-align:left; "><b>Price    :<del>Rs.{{p1.mrp}} </del> <span> Rs.{{pricestrikt(p1.per_discount,p1.mrp)}}</span></b></p>\n        </ng-container>\n        <ng-template #elseTemplate>\n         <p style="font-size:12px; text-align:left; "><b>Brand    :{{p1.brand_name}}</b></p>  \n         <p style="font-size:12px; text-align:left; "><b>Price    :Rs.{{p1.mrp}}</b></p>\n        </ng-template>\n   \n        \n       </div><br>\n        \n\n -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n	  <div class="main-content">\n        <ion-card *ngFor="let p1 of products" no padding>\n        <div padding>\n          <ion-grid no-padding>\n              <ion-row no-padding align-items-center>\n                <ion-col col-75 no-padding>\n                  <p style="font-size:14px; text-align:left" item-start no-margin [innerHTML]="product.product_name"></p>\n                </ion-col>\n                <!-- <ion-col col-auto no-padding>\n                  <button item-end no-margin no-padding ion-button icon-only clear tappable (click)="share(product)">\n                    <ion-icon no-padding name="ios-share"></ion-icon>\n                  </button>\n                </ion-col> -->\n              </ion-row>\n          </ion-grid><br>\n\n          <div>\n              <p style="font-size:12px; text-align:left"><b>Product Description</b></p>\n            </div><br>\n\n          <div style="font-size:12px; text-align:left">{{p1.long_desc}}</div>\n        </div>\n        <div>    <button ion-button full (click)="goTo(\'WritereviewPage\',p1)" >Write a review</button></div>\n         <ion-list mode="md" class="specs">\n            <ion-list-header mode="md" no-margin no-padding margin-left>\n              {{\'Item details\' | translate}}\n            </ion-list-header>\n            <ion-item>\n              <ion-grid no-padding>\n                 \n                  <ion-row no-padding>\n                      <ion-col col-4 no-padding>Brand</ion-col>\n                      <ion-col col-8 no-padding>\n                        :{{p1.brand_name}}\n                      </ion-col>\n                  </ion-row>\n                  <ion-row no-padding>\n                      <ng-container *ngIf="p1.per_discount!=0; else elseTemplate">\n                      <ion-col col-4 no-padding>Price</ion-col>\n                      <ion-col col-8 no-padding>\n                          <del>:Rs.{{p1.mrp}} </del> &nbsp;&nbsp;&nbsp; :Rs.{{pricestrikt(p1.per_discount,p1.mrp)}}\n                      </ion-col>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n                        <ion-col col-4 no-padding>Price</ion-col>\n                        <ion-col col-8 no-padding>\n                          :Rs.{{p1.mrp}}\n                        </ion-col>\n                      </ng-template>\n                    </ion-row>\n\n                    <!-- <ng-container *ngIf="p1.stock!=0; else elseTemplate"> -->\n                        \n                  <ion-row no-padding>\n                      <ion-col col-4 no-padding>Stock</ion-col>\n                      <ion-col col-8 no-padding>\n                       :{{p1.stock===\'0\'?\'out of stock\':\'Available\'}} \n                      </ion-col>\n                      </ion-row>\n                    <!-- </ng-container> -->\n                    <!-- <ng-template #elseTemplate>\n                      <ion-row no-padding >\n                      <ion-col col-4 no-padding>Stock</ion-col>\n                      <ion-col col-8 no-padding>\n                       :Out of stock\n                      </ion-col>\n                  </ion-row>\n                    </ng-template> -->\n                    \n\n                  <ion-row no-padding *ngIf="p1.weight!=\'NA\'">\n                      <ion-col col-4 no-padding>Weight</ion-col>\n                      <ion-col col-8 no-padding>\n                        :{{p1.weight}}\n                      </ion-col>\n                  </ion-row>\n                  <ion-row no-padding *ngIf="p1.size!=\'NA\'">\n                      <ion-col col-4 no-padding>Size</ion-col>\n                      <ion-col col-8 no-padding>\n                        :{{p1.size}}\n                      </ion-col>\n                     </ion-row>\n\n\n                     \n\n                     <ion-row no-padding *ngIf="p1.expiry_date!=\'Na\'">\n                       <div *ngIf="p1.expiry_date!=\'NA\'">\n                        <ion-col col-4 no-padding>Expiry date</ion-col>\n                        <ion-col col-8 no-padding>\n                          :{{p1.expiry_date}}\n                        </ion-col>\n                      </div>\n                       </ion-row>\n              </ion-grid>\n            </ion-item>\n        </ion-list>\n\n        <!-- <ion-list-header mode="md" no-margin no-padding margin-left *ngIf="product.variations.length > 0">\n          {{\'VARIATION\' | translate}}\n        </ion-list-header>\n        <ion-list mode="md" radio-group (ionChange)="setVariation($event)" padding-bottom no-margin margin-horizontal margin-bottom *ngIf="product.variations.length > 0">\n          <ion-item mode="ios" *ngFor="let x of product.variations" no-padding>\n              <ion-label>\n                <span *ngFor="let y of x.attributes">\n                  {{y.name}}: {{y.option}}\n                </span>\n              </ion-label>\n              <ion-radio mode="ios" value="{{x | json}}"></ion-radio>\n          </ion-item>\n        </ion-list> -->\n\n        <!-- <ion-list mode="md" *ngIf="product.description">\n          <ion-list-header mode="md" no-margin no-padding margin-left margin-top>\n            {{\'DESCRIPTION\' | translate}}\n          </ion-list-header>\n          <ion-item mode="md">\n            <div [innerHTML]="product.description"></div>\n          </ion-item>\n        </ion-list>\n\n        <ion-list-header mode="md" no-margin no-padding margin-left *ngIf="product.rating_count > 0">\n          {{\'REVIEW\' | translate}}\n        </ion-list-header>\n        <ion-list no-margin margin-horizontal padding-bottom *ngIf="product.rating_count > 0">\n          <ion-item *ngFor="let x of product.reviews" no-padding>\n            <ion-row no-padding>\n                <ion-col col-4>\n                  <div>{{x.name}}</div>\n                  <div class="ago">{{x.date_created | moment:"ago" | lowercase}}</div>\n                  <ion-rating *ngIf="x.rating"\n                    [numStars]="5"\n                    [readOnly]="true"\n                    [value]="x.rating">\n                  </ion-rating>\n                </ion-col>\n                <ion-col col-8>\n                  {{x.review}}\n                </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n\n        <div class="product-slide">\n          <ion-list-header mode="md" no-margin no-padding margin-left margin-bottom>\n            {{\'RELATED\' | translate}}\n          </ion-list-header>\n\n          <ion-slides margin-bottom spaceBetween="10" slidesPerView="2.5">\n            <ion-slide *ngFor="let y of product.related">\n              <button class="fav" tappable (click)="setFav(y)"  ion-button clear icon-only>\n                <ion-icon *ngIf="y.variations.length == 0" no-padding name="heart{{!wishlist.isFav(y) ? \'-outline\' : \'\'}}"></ion-icon>\n              </button>\n              <div text-left class="product-item" tappable (click)="goTo(\'ProductPage\', y)">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + y.images[0].src +\')\'}">\n                  <ion-badge *ngIf="y.on_sale">{{y | discount}}</ion-badge>\n                </div>\n                <h5 [innerHTML]="y.name"></h5>\n                <div class="price">\n                    <span class="disc" *ngIf="y.on_sale">{{y.regular_price | money}}</span> \n                    {{y.price | money}}\n                </div>\n                <ion-row no-padding class="reviews" *ngIf="y.rating_count">\n                  <ion-col col-auto no-padding>\n                    <ion-rating *ngIf="y.average_rating" item-start\n                      [numStars]="5"\n                      [readOnly]="true"\n                      [value]="y.average_rating">\n                    </ion-rating>\n                    <span *ngIf="y.rating_count">{{y.rating_count}}</span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>-->\n      </ion-card>\n    </div> \n    \n    <ion-card>\n   <div>\n       \n   </div>\n        <div *ngFor="let r of reviews; let i=index ">   \n            <ion-title *ngIf="i==0">Customer Review</ion-title> \n            <ion-item *ngIf="i<10" >\n              \n              <!-- <ion-avatar item-start>\n                  <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n                </ion-avatar> -->\n                <h3>{{r.title}}</h3>\n                <p text-color="primary" style="font-size:9px; text-align:left;">{{r.review_date}} &nbsp;&nbsp;&nbsp;    {{r.reviewer_name}} </p>\n                <p style="font-size:12px; text-align:left">{{r.review}}</p>\n\n                <ion-rating color=primary\n                [numStars]="5"\n                [readOnly]="true"\n                [value]="r.rating">\n                </ion-rating>\n                <!-- <ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n                  <p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> <span> Rs.:{{pricestrikt(w.per_discount,w.mrp)}}</span> </p>\n                 </ng-container>\n                 <ng-template #elseTemplate>\n                    <p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n                 </ng-template> -->\n               \n             </ion-item>\n            </div> \n\n    </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n     <ion-row align-items-center >\n    <!--  <ion-col class="total" align-self-center>\n        <h5>\n          <span class="disc" *ngIf="p1.per_discount">{{p1.mrp | money}}</span>\n          {{ pricestrikt(p1.per_discount,p1.mrp)| money}}\n        </h5>\n        <ion-row no-padding class="reviews">\n          <ion-col col-auto no-padding>\n            <ion-rating *ngIf="p1.average_rating" item-start\n              [numStars]="5"\n              [readOnly]="true"\n              [value]="p1.average_rating">\n            </ion-rating>\n             <span *ngIf="product.rating_count">{{product.rating_count}}</span> \n          </ion-col>\n        </ion-row>\n      </ion-col> -->\n      <ion-col align-self-center>\n        <button ion-button block tappable (click)="addTOCart()">{{\'Add to cart\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> \n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/product/product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* HistoryProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WooCommerceProvider */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(231);
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

/***/ })

});
//# sourceMappingURL=9.js.map