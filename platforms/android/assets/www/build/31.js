webpackJsonp([31],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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




var SavedAddressPage = (function () {
    function SavedAddressPage(toast, alertCtrl, translate, order, viewCtrl, navParams, address, modalCtrl) {
        var _this = this;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.order = order;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.address = address;
        this.modalCtrl = modalCtrl;
        this.action = this.navParams.data.params ? this.navParams.data.params.action : 0;
        this.translate.get(['SELECT', 'ADDRESS', 'SAVED_ADDRESS']).subscribe(function (x) {
            _this.title = _this.action == 3 || _this.action == 4 ? x.SELECT + ' ' + x.ADDRESS : x.SAVED_ADDRESS;
        });
    }
    SavedAddressPage.prototype.editAddress = function (params, index, action) {
        console.log(action);
        if (action == 3) {
            this.order.setBilling(params);
            this.dismiss();
        }
        else if (action == 4) {
            this.order.setShipping(params);
            this.dismiss();
        }
        else {
            params.action = 2;
            var modal = this.modalCtrl.create('AddAddressPage', { params: params, index: index });
            modal.present();
        }
    };
    SavedAddressPage.prototype.remove = function (index, item) {
        var _this = this;
        this.translate.get(['Do you want to remove this address?', 'REMOVE_MSG', 'CANCEL', 'YES']).subscribe(function (x) {
            var confirm = _this.alertCtrl.create({
                title: 'Remove address',
                message: 'Do you want to remove this address?',
                buttons: [{
                        text: x.CANCEL
                    }, {
                        text: x.YES,
                        handler: function () {
                            _this.confirmRemove(index);
                            item.close();
                        }
                    }]
            });
            confirm.present();
        });
    };
    SavedAddressPage.prototype.confirmRemove = function (index) {
        var _this = this;
        this.address.remove(index);
        this.translate.get('Remove from address').subscribe(function (x) {
            _this.toast.show(x);
        });
    };
    SavedAddressPage.prototype.setPrimary = function (index, item) {
        var _this = this;
        this.address.setPrimary(index);
        item.close();
        this.translate.get('Primary has set').subscribe(function (x) {
            _this.toast.showWithClose(x);
        });
    };
    SavedAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SavedAddressPage.prototype.addNew = function () {
        var params = { action: 1 };
        var modal = this.modalCtrl.create('AddAddressPage', { params: params });
        modal.present();
    };
    return SavedAddressPage;
}());
SavedAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-saved-address',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/saved-address/saved-address.html"*/'<ion-header  >\n  <ion-navbar color="primary"> \n      <ion-buttons start *ngIf="action==3 || action==4">\n        <button color="white" start icon-only ion-button (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons> \n      <ion-buttons end>\n        <button color="white" small ion-button (click)="addNew()">\n            {{ \'ADD\' | translate}}\n        </button>\n      </ion-buttons>\n\n     \n          <ion-title>Saved Address</ion-title>\n        </ion-navbar>\n \n</ion-header>\n\n<ion-content>\n  <br><br><p text-color="primary" no-margin margin-horizontal>Swipe address to left side for options</p>\n    <ion-list>\n        <ion-grid class="empty" *ngIf="address.length == 0">\n        <ion-row align-items-center>\n          <ion-col align-self-center text-center>\n            <ion-icon name="list" color="primary"></ion-icon>\n            <h4 margin-bottom>{{ \'NO_ADDRESS\' | translate}}</h4>\n            <button color="primary" ion-button outline (click)="addNew()">{{ \'ADD\' | translate}} {{ \'NEW_ADDRESS\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-item-sliding *ngFor="let x of address.all; let i = index" #item>\n        <ion-item (click)="editAddress(x, i, action)">\n          <h3>{{x.first_name}} • {{x.phone}}</h3>\n          <p>{{x.pincode}} - {{x.area}}</p>\n          <p>{{x.landmark}}</p>\n          <p>{{x.address_1}}</p>\n          <ion-badge item-end *ngIf="x.primary">{{ \'PRIMARY\' | translate}}</ion-badge>\n        </ion-item>\n        <ion-item-options side="right" *ngIf="!x.primary">\n          <button small ion-button color="assertive"  (click)="remove(i, item)">\n            <ion-icon name="fa-trash-o"></ion-icon>\n            {{ \'REMOVE\' | translate}}\n          </button>\n          <button small ion-button color="secondary" (click)="setPrimary(i, item)">\n            <ion-icon name="fa-star"></ion-icon>\n            {{ \'SET_PRIMARY\' | translate}}\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/account/saved-address/saved-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
], SavedAddressPage);

//# sourceMappingURL=saved-address.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAddressPageModule", function() { return SavedAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saved_address__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SavedAddressPageModule = (function () {
    function SavedAddressPageModule() {
    }
    return SavedAddressPageModule;
}());
SavedAddressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__saved_address__["a" /* SavedAddressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__saved_address__["a" /* SavedAddressPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], SavedAddressPageModule);

//# sourceMappingURL=saved-address.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map