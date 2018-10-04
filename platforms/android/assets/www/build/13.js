webpackJsonp([13],{

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoriesPageModule = (function () {
    function CategoriesPageModule() {
    }
    return CategoriesPageModule;
}());
CategoriesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], CategoriesPageModule);

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesPage = (function () {
    function CategoriesPage(nav, loader, woo, restProvider, http) {
        // this.woo.getSubCategories().then( (val) => {
        // 	this.categories = val;
        this.nav = nav;
        this.loader = loader;
        this.woo = woo;
        this.restProvider = restProvider;
        this.http = http;
        this.myBraands = {
            method: 'get_all_brand'
        };
        //	});
        this.getBrands();
    }
    CategoriesPage.prototype.toggleSection = function (i) {
        this.categories[i].open = !this.categories[i].open;
    };
    CategoriesPage.prototype.toggleItem = function (i, j) {
        this.categories[i].child[j].open = !this.categories[i].child[j].open;
    };
    CategoriesPage.prototype.getBrands = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.myBraands)
            .then(function (data) {
            _this.Brands = data;
        });
    };
    CategoriesPage.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categories',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar color="primary">\n        <ion-title>Brands</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-list class="accordion-list">\n        <h1 margin-left margin-bottom>{{ \'CATEGORIES\' | translate}}</h1>\n        <div *ngFor="let item of categories; let i = index">\n          <ion-item tappable (click)="toggleSection(i)" [ngClass]="{\'active\':item.open, \'section\': item.open}">\n              <h2>{{ item.name }}</h2>\n              <ion-icon name="add" item-end></ion-icon>\n          </ion-item>\n\n          <ion-list [class.active]="item.open" class="sub-accordion" no-margin no-padding padding-left no-lines *ngIf="item.child && item.open">\n              <button ion-item no-lines *ngFor="let child of item.child; let j = index" tappable (click)="goTo(\'ProductGridPage\', child)"> \n                <h3>{{child.name}}</h3>\n                <ion-badge item-end color="secondary">{{child.count}}</ion-badge>\n              </button>\n          </ion-list>\n        </div>\n    </ion-list> -->\n\n    <ion-grid>\n        <ion-row >\n        <ion-col col-6  *ngFor="let b of Brands;let i=index" >  \n           <ion-card  style=" width:130px; min-height: calc(100% - 5px);" tappable (click)="goTo(\'ProductGridPage\', Brands[i])" >\n           <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{b.brand_img}}"  style="width:100% ;height: 180px;"  />  \n           </ion-card>\n        </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["l" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ })

});
//# sourceMappingURL=13.js.map