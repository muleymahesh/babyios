webpackJsonp([13],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductGridPage = (function () {
    function ProductGridPage(toast, alert, fb, translate, loader, navCtrl, modalCtrl, navParams, woo, wishlist, actionSheetCtrl, http, restProvider) {
        // this.page = 1;
        // this.param.name = this.navParams.data.params.cat_name;
        // this.product3.cat_id= this.navParams.data.params.cat_id;
        // this.param.search = this.navParams.data.params.search;
        // this.param.per_page = 10;
        this.toast = toast;
        this.alert = alert;
        this.translate = translate;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.woo = woo;
        this.wishlist = wishlist;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.product = {
            method: 'get_product_by_brand',
            brand_id: ''
        };
        this.product1 = {
            method: 'get_product_by_offer',
            offer_id: ''
        };
        this.product2 = {
            method: 'get_product_by_age',
            age_id: ''
        };
        this.param = {};
        this.attributes = [];
        this.product3 = {
            method: 'get_product_by_cat',
            cat_id: ''
        };
        this.request = {
            method: 'get_recommended',
        };
        this.newarrivalrequest = {
            method: 'get_new_arrivals',
        };
        this.sortByProperty = function (property) {
            return function (x, y) {
                return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
            };
        };
        // this.search = fb.group({
        // 	name: this.param.name || this.param.search
        // });
        if (this.navParams.data.params.brand_id || this.navParams.data.params.banner_type == 3) {
            if (this.navParams.data.params.brand_id) {
                this.param.name = this.navParams.data.params.name;
                this.product.brand_id = this.navParams.data.params.brand_id;
            }
            else {
                this.param.name = this.navParams.data.params.banner_name;
                this.product.brand_id = this.navParams.data.params.type_id;
            }
            this.productByBrandId();
        }
        else if (this.navParams.data.params.offer_id || this.navParams.data.params.banner_type == 2) {
            if (this.navParams.data.params.offer_id) {
                this.param.name = this.navParams.data.params.name;
                this.product1.offer_id = this.navParams.data.params.offer_id;
            }
            else {
                this.param.name = this.navParams.data.params.banner_name;
                this.product1.offer_id = this.navParams.data.params.type_id;
            }
            this.productByOfferId();
        }
        else if (this.navParams.data.params.cat_id || this.navParams.data.params.banner_type == 1) {
            if (this.navParams.data.params.cat_id) {
                this.param.name = this.navParams.data.params.cat_name;
                this.product3.cat_id = this.navParams.data.params.cat_id;
            }
            else {
                this.param.name = this.navParams.data.params.banner_name;
                this.product3.cat_id = this.navParams.data.params.type_id;
            }
            this.productByCatId();
        }
        else if (this.navParams.data.params == 'New Arrival') {
            this.param.name = this.navParams.data.params;
            this.newArrival();
        }
        else if (this.navParams.data.params == 'Recommendations') {
            this.param.name = this.navParams.data.params;
            this.wishlist1();
        }
        else {
            this.param.name = this.navParams.data.params.name;
            this.product2.age_id = this.navParams.data.params.id;
            this.productByAgeId();
        }
        //   this.loader.present();
        //   if(this.navParams.data.params.cat_id)
        //   {
        //   this.product3.cat_id= this.navParams.data.params.cat_id;
        //  this. productByCatId()
        //  this.loader.dismiss();
        //  }
        // this.param.min = this.min;
        // this.param.max = this.max;
        // this.loadProducts(this.param);
    }
    ProductGridPage.prototype.loadProducts = function (x) {
        var _this = this;
        this.product3.cat_id = x.id;
        console.log(this.product3.cat_id);
        this.restProvider.getProduct(this.product3)
            .then(function (data) {
            _this.products = data;
            console.log(_this.products);
            // if (this.products.length == x.per_page)
            //   this.more = true;
        });
    };
    ProductGridPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        this.woo.getAllProducts(this.page, this.param.id, this.param.search, null, null, this.param.per_page, null, this.param.order, this.param.attribute, this.param.attribute_term).then(function (val) {
            var temp = val;
            event.complete();
            _this.products = _this.products.concat(temp);
            if (temp.length < _this.param.per_page) {
                _this.more = false;
                event.enable(false);
                _this.translate.get(['NOMORE']).subscribe(function (x) {
                    _this.toast.show(x.NOMORE);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductGridPage.prototype.showSort = function () {
        var _this = this;
        this.translate.get(['SORT', 'ByName', 'ByPrice', 'ByDiscount', 'CANCEL']).subscribe(function (x) {
            _this.actionSheetCtrl.create({
                title: x.SORT,
                buttons: [{
                        text: x.ByName,
                        handler: function () {
                            // this.param.order = 'desc';
                            // this.loadProducts(this.param);
                            //console.log(this.products);
                            _this.products.sort(_this.sortByProperty('product_name'));
                            // console.log(this.products);
                        }
                    }, {
                        text: x.ByPrice,
                        handler: function () {
                            // this.param.order = 'asc';
                            // this.loadProducts(this.param);
                            //this.products.sort(this.sortByProperty('mrp'));
                            _this.products.sort(function (obj1, obj2) {
                                return obj1.mrp - obj2.mrp;
                            });
                        }
                    }, {
                        text: x.ByDiscount,
                        handler: function () {
                            // this.param.order = 'asc';
                            // this.loadProducts(this.param);
                            //this.products .sort(this.sortByProperty('per_discount'));
                            _this.products.sort(function (obj1, obj2) {
                                return obj1.per_discount - obj2.per_discount;
                            });
                        }
                    },
                    {
                        text: x.CANCEL,
                        role: 'cancel'
                    }
                ]
            }).present();
        });
    };
    ProductGridPage.prototype.setFav = function (product) {
        var _this = this;
        this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe(function (x) {
            var msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
            _this.wishlist.post(product);
            product.isFav = product.isFav ? false : true;
            _this.toast.show(msg);
        });
    };
    ProductGridPage.prototype.showFilter = function (attribute) {
        var _this = this;
        this.loader.present();
        var alert = this.alert.create();
        alert.setTitle(attribute.name);
        this.translate.get(['FILTER_DESC'], { value: attribute.name }).subscribe(function (x) {
            alert.setSubTitle(x.FILTER_DESC);
        });
        for (var x in attribute.options) {
            alert.addInput({
                type: 'checkbox',
                label: attribute.options[x].name,
                value: attribute.options[x].id,
                checked: this.param.attribute_term ? this.param.attribute_term.includes(attribute.options[x].id) : false
            });
        }
        this.translate.get(['CANCEL']).subscribe(function (x) {
            alert.addButton(x.CANCEL);
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.param.attribute = attribute.slug;
                _this.param.attribute_term = data.join();
                _this.loadProducts(_this.param);
            }
        });
        alert.present();
        this.loader.dismiss();
    };
    ProductGridPage.prototype.showCategory = function () {
        var _this = this;
        this.loader.present();
        var alert = this.alert.create();
        this.translate.get(['CATEGORIES', 'CATEGORIES_DESC']).subscribe(function (x) {
            alert.setTitle(x.CATEGORIES);
            alert.setSubTitle(x.CATEGORIES_DESC);
        });
        for (var x in this.categories) {
            alert.addInput({
                disabled: true,
                type: 'radio',
                label: this.categories[x].name
            });
            for (var y in this.categories[x].child) {
                alert.addInput({
                    type: 'radio',
                    label: this.categories[x].child[y].name + ' (' + this.categories[x].child[y].count + ')',
                    value: this.categories[x].child[y],
                    checked: this.categories[x].child[y].id == this.param.id ? true : false
                });
            }
        }
        this.translate.get(['CANCEL']).subscribe(function (x) {
            alert.addButton(x.CANCEL);
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.param.id = data.id;
                _this.param.name = data.name;
                _this.loadProducts(_this.param);
            }
        });
        alert.present();
        this.loader.dismiss();
    };
    ProductGridPage.prototype.submit = function () {
        this.param.search = this.search.value.name;
        this.loadProducts(this.param);
    };
    ProductGridPage.prototype.reset = function (e) {
        this.param.search = '';
        this.search.reset();
    };
    ProductGridPage.prototype.backToRoot = function () {
        this.navCtrl.pop();
    };
    ProductGridPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    ProductGridPage.prototype.productByCatId = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.getProduct(this.product3)
            .then(function (data) {
            if (data == 'failed') {
                _this.toast.show("Product not available");
            }
            else {
                _this.products = data;
            }
            console.log(_this.products);
        });
        this.loader.dismiss();
    };
    ProductGridPage.prototype.productByBrandId = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.getProduct(this.product)
            .then(function (data) {
            if (data == 'failed') {
                _this.toast.show("Product not available");
            }
            else {
                _this.products = data;
            }
            console.log(_this.products);
        });
        this.loader.dismiss();
    };
    ProductGridPage.prototype.productByOfferId = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.getProduct(this.product1)
            .then(function (data) {
            if (data == 'failed') {
                _this.toast.show("Product not available");
            }
            else {
                _this.products = data;
            }
            console.log(_this.products);
        });
        this.loader.dismiss();
    };
    ProductGridPage.prototype.productByAgeId = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.getProduct(this.product2)
            .then(function (data) {
            _this.products = data;
            console.log(_this.products);
        });
        this.loader.dismiss();
    };
    ProductGridPage.prototype.sortByKey = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 0 : 1));
        });
    };
    ProductGridPage.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    ProductGridPage.prototype.wishlist1 = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.getRecommendations(this.request)
            .then(function (data) {
            _this.products = data;
        });
        this.loader.dismiss();
    };
    ProductGridPage.prototype.newArrival = function () {
        var _this = this;
        this.loader.present();
        this.restProvider.getNewArrivalList(this.newarrivalrequest)
            .then(function (data) {
            console.log(data);
            _this.products = data;
        });
        this.loader.dismiss();
    };
    return ProductGridPage;
}());
ProductGridPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-grid',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/product/grid/grid.html"*/' <ion-header>\n	<ion-navbar color="primary">\n      <ion-title>{{param.name}}</ion-title>\n      </ion-navbar>\n      <div class="newsearch">\n          <!-- <div no-padding class="searchbar searchbar-md">\n            <div class="searchbar-input-container">\n              <button ion-button icon-left icon-only clear tappable (click)="backToRoot()"><ion-icon name="arrow-back"></ion-icon></button>\n               <form [formGroup]="search" (ngSubmit)="submit()" novalidate>\n                <ion-input formControlName="name" class="searchbar-input" placeholder="{{ \'enter search\' | translate }}" type="search"></ion-input>\n                <button type="reset" *ngIf="(search.controls[\'name\'].value)" tappable (click)="reset(currForm)" ion-button icon-right icon-only clear><ion-icon name="close"></ion-icon></button>\n              </form>\n            </div>\n          </div> -->\n        \n            <!-- <div no-padding class="searchbar searchbar-md">\n              <div class="searchbar-input-container">\n                <button ion-button icon-left clear icon-only (click)="showSearch()"><ion-icon name="search" mode="ios"></ion-icon></button>\n                 <input (click)="showSearch()" class="searchbar-input" placeholder="{{ \'SEARCH\' | translate }}" value="{{App.store}}" type="search" autocomplete="off" autocorrect="off" spellcheck="false"> -->\n                <!-- <div class="searchbar-input" (click)="showSearch()"> -->\n                    <!-- {{App.store}} -->\n                <!-- </div>\n              </div>\n            </div> -->\n          \n          <div class="filter">\n              <ion-scroll scrollX="true" class="item filter">\n                <ion-row nowrap>\n                  <!-- <ion-col col-auto no-padding>\n                    <button ion-button small round outline >{{param.name || (\'CATEGORIES\' | translate)}}</button>\n                  </ion-col> -->\n                  <!-- <ion-col col-auto no-padding *ngFor="let x of attributes">\n                    <button ion-button small round outline (click)="showFilter(x)">\n                      {{x.name}} \n                      <span *ngIf="param.attribute_term && param.attribute==x.slug">&nbsp;•&nbsp;{{param.attribute_term.split(",").length}}</span>\n                    </button>\n                  </ion-col> -->\n                  <ion-col col-auto no-padding>\n                    <button ion-button small round outline (click)="showSort()">Sort</button>\n                  </ion-col>\n                </ion-row>\n              </ion-scroll>\n          </div>\n        </div>\n  \n\n</ion-header>\n\n <ion-content>\n\n  <ion-grid >\n    <ion-row >\n        \n     \n          <ion-col col-6 *ngFor="let b of products" no-padding>  \n       \n\n            <ion-card  (click)="goTo(\'ProductPage\',b)">\n              <ion-badge color="primary" *ngIf="b.per_discount>0">{{b.per_discount}}%</ion-badge> \n             <img *ngIf="b.imgs!=0"  src="http://www.babyneeds.co.in/babyneeds/product_image/{{b.imgs[0].img_url}}"  style="max-width:50%;max-height:200px; margin:auto; margin-top:15px"/>\n            \n            <!-- <div class="img" *ngIf="b.imgs!=0" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + b.imgs[0].img_ur +\')\'}">\n              <ion-badge *ngIf="b.per_discount">{{b.per_discount}}</ion-badge>\n            </div>                  -->\n             <p style="font-size:10px; text-align:center"> {{b.product_name}}</p>  <br>\n       \n           <ng-container *ngIf="b.per_discount!=0; else elseTemplate">\n              <p style="font-size:9px; text-align:center; color:orange" ><del >Rs.:{{b.mrp}} </del> &nbsp;&nbsp;&nbsp;  Rs.:{{pricestrikt(b.per_discount,b.mrp)}} </p>\n             </ng-container>\n             <ng-template #elseTemplate>\n                <p style="font-size:9px; text-align:center; color:orange">Rs.:{{b.mrp}}</p>\n             </ng-template>\n             \n           \n          </ion-card>\n          </ion-col>\n         </ion-row>\n  </ion-grid>\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/product/grid/grid.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["m" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */]])
], ProductGridPage);

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGridPageModule", function() { return ProductGridPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid__ = __webpack_require__(1019);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductGridPageModule = (function () {
    function ProductGridPageModule() {
    }
    return ProductGridPageModule;
}());
ProductGridPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__grid__["a" /* ProductGridPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__grid__["a" /* ProductGridPage */]),
            __WEBPACK_IMPORTED_MODULE_0__app_shared_module__["a" /* SharedModule */]
        ],
    })
], ProductGridPageModule);

//# sourceMappingURL=grid.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map