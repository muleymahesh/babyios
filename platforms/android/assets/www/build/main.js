webpackJsonp([42],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.url1 = "http://babyneeds.co.in/babyneeds/send_invoice.php?o_id=";
        this.url5 = "http://makslab.com/babyneeds/ws/v2/api1.php";
        this.url = "http://babyneeds.co.in/babyneeds/ws/v2/api1.php";
    }
    RestProvider.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getproducts = function (data) {
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            if (data.data) {
                return data.data;
            }
            else if (data.result == 'failed') {
                // console.log('Success', data.data);
                return data.result;
            }
            else {
                return data;
            }
        })
            .catch(function (err) {
            console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getcartitem = function (data) {
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.register = function (data) {
        //  console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //   console.log('Success', data.data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getWishlist = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //console.log(data);
            if (data.result == "failed") {
                return data;
            }
            else {
                //     console.log('Success', data);
                return data;
            }
        })
            .catch(function (err) {
            //   console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getBanner = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getRecommendations = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // getNewArrivalList(data) {
    //   return new Promise((resolve, reject) => {
    //     this.http.post(this.url, JSON.stringify(data))
    //       .subscribe(res => {
    //        resolve(res);
    //       }, (err) => {
    //         reject(err);
    //       });
    //   });
    // }
    RestProvider.prototype.getBrands = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getOffers = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getAgeGroup = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getCategories = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getsearch = function (data) {
        var _this = this;
        // console.log("request sending");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getProduct = function (data) {
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            if (data.data) {
                //    console.log('Success', data.data);
                return data.data;
            }
            else if (data.result == 'failed') {
                // console.log('Success', data.data);
                return data.result;
            }
            else {
                return data;
            }
        })
            .catch(function (err) {
            //  console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getNewArrivalList = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //   console.log('Success', data.data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getSearch = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //   console.log('Success', data.data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getMyOrder = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //  console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            //  console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.changePassword = function (data) {
        //console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            // console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.orderOperation = function (data) {
        //   console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //    console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            //  console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.favOperation = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //  console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.reviweOperation = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            //  console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            //console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.serviceOperations = function (data) {
        //console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            if (data.data) {
                // console.log('Success', data.data);
                return data.data;
            }
            else if (data.result == 'failed') {
                // console.log("services not present");
                return data;
            }
            else {
                return data;
            }
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.Inovice = function (data) {
        console.log("http://babyneeds.co.in/babyneeds/send_invoice.php?o_id=" + data);
        return this.http.post("http://babyneeds.co.in/babyneeds/send_invoice.php?o_id=" + data, [])
            .toPromise()
            .then(function (data) {
            console.log(data);
            return data;
        });
    };
    RestProvider.prototype.feedbackOperation = function (data) {
        //console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            // console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.placeOrderOperation = function (data) {
        //console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            // console.log('Success', data);
            return data;
        })
            .catch(function (err) {
            // console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.updateOrderDetail = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            //  console.log('Error', err);
            return err;
        });
    };
    RestProvider.prototype.getTimeslot = function (data) {
        // console.log("request sending");
        return this.http.post(this.url, JSON.stringify(data))
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(function (err) {
            //  console.log('Error', err);
            return err;
        });
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 245;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_paypal__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_parallax_header_parallax_header__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_components__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_pipes__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_providers__ = __webpack_require__(74);
// Ionic native providers











// Modules





// Directives

// Components

// Pipes

// Providers

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/languages/', '.json');
}
var MODULES = [
    __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__["a" /* IonicImageViewerModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
    // database name for cart, wish, checkout, etc
    __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot({
        name: '_ionstore',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
        loader: {
            provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
            useFactory: (createTranslateLoader),
            deps: [__WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */]]
        }
    })
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_18__pipes_pipes__["b" /* MomentPipe */],
    __WEBPACK_IMPORTED_MODULE_18__pipes_pipes__["a" /* DiscountPipe */],
    __WEBPACK_IMPORTED_MODULE_18__pipes_pipes__["c" /* MoneyPipe */]
];
var PROVIDERS = [
    //AppState,
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["k" /* UserProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["f" /* OrderProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["a" /* AddressProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["m" /* WooCommerceProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["i" /* SettingsProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["l" /* WishlistProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["b" /* CartProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["c" /* HistoryProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["d" /* LoadingProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["e" /* NotifProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["j" /* ToastProvider */],
    __WEBPACK_IMPORTED_MODULE_19__providers_providers__["h" /* RestProvider */],
    // Ionic native specific providers
    __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */],
    __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_3__ionic_native_paypal__["a" /* PayPal */],
    __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */],
    __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
    __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
    __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__["a" /* AppRate */],
    __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */],
    __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_17__components_components__["b" /* IonRating */],
    __WEBPACK_IMPORTED_MODULE_17__components_components__["a" /* FaIconComponent */]
];
var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_16__directives_parallax_header_parallax_header__["a" /* ParallaxHeader */]
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		955,
		39
	],
	"../pages/account/account.module": [
		956,
		38
	],
	"../pages/account/chats/chats.module": [
		958,
		37
	],
	"../pages/account/chats/message/message.module": [
		957,
		36
	],
	"../pages/account/help/help.module": [
		959,
		35
	],
	"../pages/account/notification/notification.module": [
		960,
		34
	],
	"../pages/account/profile/profile.module": [
		961,
		33
	],
	"../pages/account/saved-address/add-address/add-address.module": [
		962,
		32
	],
	"../pages/account/saved-address/saved-address.module": [
		963,
		31
	],
	"../pages/account/settings/languages/languages.module": [
		964,
		30
	],
	"../pages/account/settings/notifications/notifications.module": [
		965,
		29
	],
	"../pages/account/settings/settings.module": [
		966,
		28
	],
	"../pages/account/settings/tos/tos.module": [
		967,
		27
	],
	"../pages/cancleorder/cancleorder.module": [
		968,
		26
	],
	"../pages/cart1/cart1.module": [
		969,
		25
	],
	"../pages/categories/categories.module": [
		970,
		24
	],
	"../pages/change/change.module": [
		971,
		23
	],
	"../pages/checkout1/checkout1.module": [
		972,
		22
	],
	"../pages/confirm/confirm.module": [
		973,
		21
	],
	"../pages/editprofile/editprofile.module": [
		974,
		20
	],
	"../pages/feedback/feedback.module": [
		975,
		19
	],
	"../pages/forgotpassword/forgotpassword.module": [
		976,
		18
	],
	"../pages/home/home.module": [
		977,
		41
	],
	"../pages/list/list.module": [
		978,
		17
	],
	"../pages/login/login.module": [
		979,
		40
	],
	"../pages/menu/menu.module": [
		980,
		16
	],
	"../pages/myorder/myorder.module": [
		981,
		15
	],
	"../pages/orders/orders.module": [
		982,
		14
	],
	"../pages/product/grid/grid.module": [
		983,
		13
	],
	"../pages/product/mini-cart/mini-cart.module": [
		984,
		12
	],
	"../pages/product/modal-categories/modal-categories.module": [
		985,
		11
	],
	"../pages/product/product.module": [
		986,
		10
	],
	"../pages/register/register.module": [
		987,
		9
	],
	"../pages/returnorder/returnorder.module": [
		988,
		8
	],
	"../pages/search/search.module": [
		989,
		7
	],
	"../pages/servicecategory/servicecategory.module": [
		990,
		6
	],
	"../pages/servicedetail/servicedetail.module": [
		991,
		5
	],
	"../pages/services/services.module": [
		992,
		4
	],
	"../pages/tabs/tabs.module": [
		993,
		3
	],
	"../pages/thanks/thanks.module": [
		994,
		2
	],
	"../pages/wishlist/wishlist.module": [
		995,
		1
	],
	"../pages/writereview/writereview.module": [
		996,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 304;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RecentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecentProvider = (function () {
    function RecentProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.HISTORY_KEY = 'history';
        this.history = [];
        this.load();
        console.log('Hello RecentProvider Provider');
    }
    RecentProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.HISTORY_KEY).then(function (val) {
            if (val && val.length > 0) {
                _this.history = val;
                return _this.history;
            }
            else {
                _this.save();
            }
        });
    };
    RecentProvider.prototype.post = function (product1, no_of_time) {
        if (no_of_time === void 0) { no_of_time = 1; }
        console.log(product1);
        this.tohistory(product1, no_of_time);
    };
    RecentProvider.prototype.tohistory = function (product1, qty) {
        var exist = false;
        for (var i in this.history) {
            if (this.history[i].p_id == product1[0].p_id) {
                this.history[i].no_of_time += qty;
                exist = true;
                console.log("recent", product1);
                // console.log(this.cart);
                break;
            }
        }
        if (!exist) {
            product1[0].no_of_time = qty;
            //  console.log("recent",product1.imgs[0].img_url);
            console.log("recent exist", product1[0].imgs[0]);
            this.add(product1);
            console.log("recent", product1);
        }
        this.save();
    };
    RecentProvider.prototype.add = function (product1) {
        console.log("recent add", product1[0].imgs[0]);
        var tmp = {
            no_of_time: product1[0].no_of_time,
            name: product1[0].product_name,
            images: product1[0].imgs[0].img_url,
            p_id: product1[0].p_id,
            price: product1[0].mrp,
            discount: product1[0].per_discount,
            // regular_price: product1.regular_price,
            on_sale: product1[0].offer_name,
            in_stock: product1[0].status,
        };
        this.history.push(tmp);
        return this.save();
    };
    Object.defineProperty(RecentProvider.prototype, "totalQty", {
        get: function () {
            return this.history.length;
        },
        enumerable: true,
        configurable: true
    });
    RecentProvider.prototype.save = function () {
        return this.storage.set(this.HISTORY_KEY, this.history);
    };
    RecentProvider.prototype.reset = function () {
        this.history = [];
        return this.storage.remove(this.HISTORY_KEY).then(function () { });
    };
    Object.defineProperty(RecentProvider.prototype, "all", {
        get: function () {
            return this.history;
        },
        enumerable: true,
        configurable: true
    });
    return RecentProvider;
}());
RecentProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], RecentProvider);

//# sourceMappingURL=recent.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RateProvider = (function () {
    function RateProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.RATE_KEY = 'rate';
        this.rate = 0;
        this.load();
        console.log('Hello RateProvider Provider');
    }
    RateProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.RATE_KEY).then(function (val) {
            if (val && val.length > 0) {
                _this.rate = val;
                _this.save(_this.rate);
                return _this.rate;
                // this.save(this.rate)
            }
        });
    };
    RateProvider.prototype.post = function (no_of_time) {
        if (no_of_time === void 0) { no_of_time = 1; }
        this.tohistory(no_of_time);
    };
    RateProvider.prototype.tohistory = function (qty) {
        console.log(this.rate);
        if (this.rate > 0) {
            this.rate = this.rate + qty;
            console.log(this.rate);
            //  this.save();
        }
        else {
            console.log(this.rate);
            this.add(qty);
        }
    };
    RateProvider.prototype.add = function (qty) {
        // console.log("recent add",product1[0].imgs[0]);
        // attributes: product.attributes,
        console.log(this.rate);
        // variation_id: product.variation_id
        this.rate = qty;
        console.log(this.rate);
        //  return this.save();
    };
    RateProvider.prototype.save = function (int) {
        console.log("save", this.rate);
        return this.storage.set(this.RATE_KEY, int);
    };
    RateProvider.prototype.reset = function () {
        this.rate = 0;
        return this.storage.remove(this.RATE_KEY).then(function () { });
    };
    Object.defineProperty(RateProvider.prototype, "all", {
        get: function () {
            return this.rate;
        },
        enumerable: true,
        configurable: true
    });
    return RateProvider;
}());
RateProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], RateProvider);

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_imports__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["b" /* DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* IonicImageViewerModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["d" /* PIPES */],
            __WEBPACK_IMPORTED_MODULE_0__app_imports__["a" /* COMPONENTS */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_global__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_keyboard__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Keyboard } from '@ionic-native/keyboard';




//mport { KeyedRead } from '@angular/compiler';
var HomePage = (function () {
    function HomePage(storage, key, alert, network, splashScreen, platform, address, history, nav, statusBar, translate, toast, wishlist, loader, modalCtrl, woo, restProvider, http) {
        var _this = this;
        this.storage = storage;
        this.key = key;
        this.alert = alert;
        this.network = network;
        this.splashScreen = splashScreen;
        this.platform = platform;
        this.address = address;
        this.history = history;
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
        this.showList = false;
        this.searchQuery = '';
        this.orderRequest = {
            method: 'get_order_detail',
            o_id: ''
        };
        this.slideRequest = {
            method: 'get_all_banner'
        };
        this.adRequest = {
            method: 'home'
        };
        this.cateogry = {
            method: 'get_all_category'
        };
        this.agegroup = {
            method: 'get_all_agegroup'
        };
        this.allproduct = {
            method: 'get_all_product'
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
        this.newarrivalrequest = {
            method: 'get_new_arrivals',
        };
        this.searchrequest = {
            method: "search_product",
            query: ""
        };
        this.App = __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */];
        this.flag = 0;
        this.storage.get('O_id')
            .then(function (data) {
            console.log('your data => ', data);
            if (data != null) {
                _this.orderRequest.o_id = data;
                _this.restProvider.getMyOrder(_this.orderRequest)
                    .then(function (data) {
                    console.log(data);
                    if (data.orders[0].order_status == 'delivered') {
                        _this.alert.create({
                            title: "Alert",
                            message: "Do you want to rate the product?",
                            buttons: [{
                                    text: 'NO',
                                    handler: function () {
                                        _this.storage.remove('O_id');
                                    }
                                }, {
                                    text: 'YES',
                                    handler: function () {
                                        _this.storage.remove('O_id');
                                        _this.goTo('OrdersPage', data.orders[0]);
                                    }
                                }]
                        }).present();
                    }
                });
            }
        });
        this.platform.ready().then(function () {
            _this.loader.present();
            //this.getAllproduct();
            _this.restProvider.getNewArrivalList(_this.adRequest)
                .then(function (data) {
                console.log(data);
                if (data.result == "success") {
                    _this.slides = data.banner_data;
                    _this.ad_banner = data.adbanner;
                    _this.adurl = 'http://www.babyneeds.co.in/babyneeds/product_image/' + _this.ad_banner[0].image;
                    console.log(_this.adurl);
                    _this.categories = data.category;
                    _this.agegroups = data.age_data;
                    _this.offers = data.offer_data;
                    _this.Brands = data.brand_data;
                    _this.rlist = data.rec_data;
                    _this.nlist = data.new_data;
                    _this.loader.dismiss();
                }
                else {
                    _this.loader.dismiss();
                    //	this.loader.load();
                    if (_this.flag == 1) {
                        _this.flag = 0;
                    }
                    //		this.toast.show("something went wrong please try again");
                    _this.flag = 1;
                    _this.alert.create({
                        title: "Alert",
                        message: "we are having trouble loading content. try again",
                        buttons: [{
                                text: 'Try again',
                                handler: function () {
                                    //	this.loader.dismiss();
                                    _this.ionViewDidEnter();
                                    _this.flag = 0;
                                }
                            }]
                    }).present();
                }
            });
            _this.splashScreen.hide();
        });
        this.wishlist1();
        this.his = this.history.all;
        this.his.sort(function (obj1, obj2) {
            return obj2.no_of_time - obj1.no_of_time;
        });
        //console.log(this.his);
    }
    HomePage.prototype.getAllproduct = function () {
        var _this = this;
        this.restProvider.getproducts(this.allproduct)
            .then(function (data) {
            _this.aproducts = data;
            //console.log(this.aproducts);
            _this.initializeItems();
        });
    };
    HomePage.prototype.canclesearch = function () {
        this.showList = false;
        this.key.close();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.showList = false;
        //this.loader.present();
        this.restProvider.getNewArrivalList(this.adRequest)
            .then(function (data) {
            console.log(data);
            _this.test = data;
            if (data.result == "success") {
                _this.slides = data.banner_data;
                _this.ad_banner = data.adbanner;
                _this.categories = data.category;
                _this.agegroups = data.age_data;
                _this.offers = data.offer_data;
                _this.Brands = data.brand_data;
                _this.rlist = data.rec_data;
                _this.nlist = data.new_data;
                //this.loader.dismiss();
            }
            else {
                //	this.loader.dismiss();
                if (_this.flag != 1) {
                    //	this.loader.load();
                    //	this.toast.show("something went wrong please try again");
                    _this.alert.create({
                        title: "Alert",
                        message: "we are having trouble loading content. try again",
                        buttons: [{
                                text: 'Try again',
                                handler: function () {
                                    //	this.loader.dismiss();
                                    _this.ionViewDidEnter();
                                }
                            }]
                    }).present();
                    //this.loader.dismiss();
                }
            }
        });
        //	console.log("hiii");
        this.his = this.history.all;
        this.his.sort(function (obj1, obj2) {
            return obj2.no_of_time - obj1.no_of_time;
        });
        this.goHome();
        //	console.log( "his",this.his);
    };
    HomePage.prototype.setFav = function (product) {
        var _this = this;
        this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe(function (x) {
            var msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
            _this.wishlist.post(product);
            product.isFav = product.isFav ? false : true;
            _this.toast.show(msg);
        });
    };
    HomePage.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    HomePage.prototype.go = function (data) {
        if (data.banner_type != 0 && data.banner_type != 4) {
            this.goTo('ProductGridPage', data);
        }
        else if (data.banner_type == 4) {
            this.goTo('ProductPage', data);
        }
    };
    HomePage.prototype.wishlist1 = function () {
        var _this = this;
        this.restProvider.getRecommendations(this.request)
            .then(function (data) {
            _this.rlist = data;
        });
    };
    HomePage.prototype.newArrival = function () {
        var _this = this;
        this.restProvider.getNewArrivalList(this.newarrivalrequest)
            .then(function (data) {
            //console.log(data);
            _this.nlist = data;
        });
    };
    HomePage.prototype.getBanner = function () {
        var _this = this;
        this.restProvider.getBanner(this.slideRequest)
            .then(function (data) {
            _this.slides = data;
        });
        //	this.loader.dismiss();
    };
    HomePage.prototype.getCategory = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.cateogry)
            .then(function (data) {
            _this.categories = data;
        });
    };
    HomePage.prototype.getAdBanner = function () {
        //this.loader.present();	
        var _this = this;
        this.restProvider.getBanner(this.adRequest)
            .then(function (data) {
            _this.ad_banner = data;
            _this.adurl = 'http://www.babyneeds.co.in/babyneeds/product_image/' + _this.ad_banner[0].image;
            console.log(_this.adurl);
            //		console.log(this.ad_banner);
            //	this.wishlist1();
        });
    };
    HomePage.prototype.getOffer = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.offer)
            .then(function (data) {
            _this.offers = data;
            //			console.log(this.offers );
        });
    };
    HomePage.prototype.closeKeyboard = function () {
        this.key.close();
        this.searchrequest.query = '';
        this.Go('ProductGridPage', 'Search', this.item);
    };
    HomePage.prototype.getBrands = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.myBraands)
            .then(function (data) {
            _this.Brands = data;
        });
    };
    HomePage.prototype.getAgeGruops = function () {
        var _this = this;
        this.restProvider.getAgeGroup(this.agegroup)
            .then(function (data) {
            _this.agegroups = data;
        });
    };
    HomePage.prototype.goHome = function () {
        this.searchQuery = '';
        this.showList = false;
        this.nav.popToRoot();
        this.nav.parent.select(0);
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
        if (this.showList == true) {
            this.showList = false;
            this.searchrequest.query = '';
        }
        this.nav.push(page, { params: params });
    };
    HomePage.prototype.Go = function (page, params, data) {
        if (this.showList == true) {
            this.showList = false;
            this.searchrequest.query = '';
        }
        this.nav.push(page, { params: params, data: data });
    };
    HomePage.prototype.initializeItems = function () {
        var _this = this;
        //this.item1=this.aproducts; 
        if (this.loader.isShowing()) {
        }
        else {
            this.loader.present();
        }
        this.restProvider.getSearch(this.searchrequest).
            then(function (data) {
            if (_this.loader.isShowing()) {
                _this.loader.dismiss();
            }
            console.log(data);
            if (data.result == "success") {
                console.log(_this.item);
                _this.showList = true;
                console.log(_this.showList);
                _this.item = data.data;
                console.log(_this.item);
                // return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }
            else {
                _this.item = null;
                _this.showList = false;
            }
        });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        if (val.length >= 3) {
            this.initializeItems();
        }
        //console.log("val=",val);
        //    this. splitted = val.split(" "); 
        // 	console.log(this.splitted);
        //     // if the value is an empty string don't filter the items
        //     if (val && val.trim() != '') {
        // 			// Filter the items
        // 		//	console.log(this.aproducts[0].product_name); 
        //       this.item = this.item1.filter((item) => {
        // 		for(let j=0;j<this.splitted.length;j++)
        // 	{
        // 		if(this.splitted[j]!="" && j>=0 && this.splitted[j]!="baby")
        // 		{
        // 			//console.log("out of if : ",item.p_id);
        //      if(item.product_name.toLowerCase().indexOf(this.splitted[j].toLowerCase()) > -1)
        //       {
        // 		//  console.log("index: ",j);
        // 	    //console.log(item.product_name);
        // 		//  console.log(item.p_id);
        // 		//  console.log(item.product_name.toLowerCase().indexOf(this.splitted[j].toLowerCase()) > -1)
        // 	      return true;
        //       }
        // 	}
        // }
        // 	return false;
        //       });
        // 	  // Show the results
        // 	  var seenNames = {};
        // 	  console.log(this.item);
        // 	  var array = this.item;
        // 	  array = array.filter(function(currentObject) {
        // 		if (currentObject.product_name in seenNames) {
        // 			return false;
        // 		} else {
        // 			seenNames[currentObject.product_name] = true;
        // 			return true;
        // 		}
        // 	})
        //       this.item=array;
        // 	  console.log(array);
        //       this.showList = true;
        //     } else {
        //       // hide the results when the query is empty
        //       this.showList = false;
        //     }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/home/home.html"*/'<ion-header>  \n\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        <ion-title>BabyNeeds</ion-title>\n         <!-- <ion-searchbar [(ngModel)]="searchQuery" (ionInput)="getItems($event)"></ion-searchbar>  -->\n    </ion-navbar>\n    <!-- <ion-searchbar no-padding (ionInput)="getItems($event)"></ion-searchbar> -->\n    <ion-searchbar (keyup.enter)="closeKeyboard()" cancelButtonText="canclesearch()" [(ngModel)]="searchrequest.query" color="primary" placeholder="{{ \'BABYNEEDS\' | translate }}" (ionInput)="getItems($event)"></ion-searchbar>\n    <div  *ngIf="showList">\n        <ion-scroll style="width:100%;height:100vh" scrollY="true">\n          <div *ngFor="let i of item ;let j=index"  scroll="true">\n            <!-- <ion-list scroll="true"> -->\n      <ion-item (click)="goTo(\'ProductPage\',i)"><hr>\n        <ion-avatar item-start  >\n          <img  src="http://www.babyneeds.co.in/babyneeds/product_image/{{i.imgs[0].img_url}}">\n        </ion-avatar>\n       <p style="font-size:12px;"> {{ i.product_name }}</p>\n      </ion-item>\n     <!-- <ion-item  *ngIf="j==item.length-1">\n      <button   item-end ion-button tappable (click)="Go(\'ProductGridPage\',\'Search\',item)">\n        {{ \'SEE ALL\' | translate }}\n             </button>\n     </ion-item> -->\n   \n            <!-- </ion-list> -->\n          </div >\n              \n                      \n                       \n               \n        </ion-scroll>\n    </div>\n    \n        <!-- <div class="newsearch">\n          <div no-padding class="searchbar searchbar-md">\n            <div class="searchbar-input-container">\n              <button ion-button icon-left clear icon-only (click)="showSearch()"><ion-icon name="search" mode="ios"></ion-icon></button>\n               <input (click)="showSearch()" class="searchbar-input" placeholder="{{ \'SEARCH\' | translate }}" value="{{App.store}}" type="search" autocomplete="off" autocorrect="off" spellcheck="false"> -->\n               <!-- <div class="searchbar-input" (click)="showSearch()">\n                BabyNeeds \n              </div>\n            </div>\n          </div>\n        </div>  -->\n  \n</ion-header>\n\n <ion-content no-padding  >\n   \n\n      <!-- <ion-slides loop="true" autoplay="2000" pager>\n        <ion-slide *ngFor="let number of [1,2,3,4]">\n          <img src="assets/img/slides/slide{{number}}.jpg" />\n        </ion-slide>\n      </ion-slides> -->\n\n      <!-- <ion-list>\n        <ion-item *ngFor="let item of aproducts ">\n          {{ aproducts }}\n        </ion-item>\n    </ion-list> -->\n\n   <ion-slides  *ngIf="slides && slides.length"  pager = \'true\'  autoplay="2000" loop="true" speed="3000" style="max-height:200px">\n        <ion-slide *ngFor="let slide of slides">\n                     \n                  <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{slide.image_path}}" (click)="go(slide)"  style="width:100% ;height: 180px;">\n              \n                            \n        </ion-slide>\n      </ion-slides>\n      <div >\n       <img no-padding src="{{adurl}}"  style="width:100% ;height: 50px;"> \n    </div>\n      <div class="">\n        <ion-list  *ngFor="let w of rlist;  let i=index " no-lines no-margin margin-left>\n          <ion-item   *ngIf="i==0" no-padding no-lines>\n            {{ \' Your Recommendations\' | translate }}\n        </ion-item>\n        </ion-list>\n        <div  *ngFor="let w of rlist;  let i=index " (click)="goTo(\'ProductPage\',w)"> \n             \n      <ion-item   *ngIf="i<3" >\n      \n        <ion-avatar item-start>\n            <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n          </ion-avatar>\n          <h3>{{w.product_name}}</h3>\n          \n          <ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n            <p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> &nbsp;&nbsp;&nbsp; Rs.:{{pricestrikt(w.per_discount,w.mrp)}} </p>\n           </ng-container>\n           <ng-template #elseTemplate>\n              <p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n           </ng-template>\n                   \n       </ion-item>\n      </div> \n       \n       <ion-row>\n          <ion-col *ngFor="let w of rlist;  let i=index " text-left>\n            <button   *ngIf="i==0" item-end ion-button clear icon-end tappable (click)="goTo(\'ProductGridPage\',\'Recommendations\')">\n              {{ \'SEE ALL\' | translate }}\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n              </ion-col>\n            </ion-row>\n    \n    </div> \n\n\n<div *ngFor="let w of rlist; let i=index ">\n  <div  *ngIf="i==0">\n    <div class=""*ngFor="let w of his ;  let i=index " >\n      <ion-list no-lines no-margin margin-left>\n        <ion-item no-padding no-lines *ngIf="i==0" >\n          {{ \'Recently viewed \' | translate }}\n      </ion-item>\n      </ion-list>\n\n    </div>\n      <ion-grid >\n        <ion-row >\n            \n         \n              <ion-col col-6 *ngFor="let b of his; let i=index" no-padding>  \n           \n    \n                <ion-card *ngIf="i<4" (click)="goTo(\'ProductPage\',b)">\n                  <ion-badge color="primary" *ngIf="b.discount>0">{{b.discount}}%</ion-badge> \n                 <img *ngIf="b.images!=0"  src="http://www.babyneeds.co.in/babyneeds/product_image/{{b.images}}"  style="max-width:50%;max-height:200px; margin:auto; margin-top:15px"/>\n                \n               \n                 <p style="font-size:10px; text-align:center"> {{b.name}}</p>  <br>\n           \n               <ng-container *ngIf="b.per_discount!=0; else elseTemplate">\n                  <p style="font-size:9px; text-align:center; color:orange" ><del >Rs.:{{b.price}} </del> &nbsp;&nbsp;&nbsp;  Rs.:{{pricestrikt(b.discount,b.price)}} </p>\n                 </ng-container>\n                 <ng-template #elseTemplate>\n                    <p style="font-size:9px; text-align:center; color:orange">Rs.:{{b.price}}</p>\n                 </ng-template>\n                 \n               \n              </ion-card>\n              </ion-col>\n             </ion-row>\n      </ion-grid>\n     \n     \n    </div>\n  </div>\n\n\n    <div class="">\n      <ion-list *ngFor="let w of nlist;  let i=index " no-lines no-margin margin-left>\n        <ion-item *ngIf="i==0" no-padding no-lines>\n          {{ \'New Arrival\' | translate }}\n      </ion-item>\n      </ion-list>\n      \n      \n      <div *ngFor="let w of nlist;  let i=index " (click)="goTo(\'ProductPage\',w)"  >    \n    <ion-item *ngIf="i<3" >\n      \n      <ion-avatar item-start>\n          <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.imgs[0].img_url}}">\n        </ion-avatar>\n        <h3>{{w.product_name}}</h3>\n        \n        <ng-container *ngIf="w.per_discount!=0; else elseTemplate">\n          <p style="font-size:9px; text-align:left; color:orange"><del>Rs.:{{w.mrp}} </del> &nbsp;&nbsp;&nbsp; Rs.:{{pricestrikt(w.per_discount,w.mrp)}} </p>\n         </ng-container>\n         <ng-template #elseTemplate>\n            <p style="font-size:9px; text-align:left; color:orange">Rs.:{{w.mrp}}</p>\n         </ng-template>\n       \n     </ion-item>\n    </div> \n     \n    <ion-row>\n        <ion-col *ngFor="let w of nlist;  let i=index " text-left>\n          <button *ngIf="i==0" item-end ion-button clear icon-end tappable (click)="goTo(\'ProductGridPage\',\'New Arrival\')">\n            {{ \'SEE ALL\' | translate }}\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n            </ion-col>\n          </ion-row>\n      \n   \n  </div> \n\n\n\n\n\n      <div class="">\n        <ion-list *ngFor="let x of categories; let i=index" no-lines no-margin margin-left>\n          <ion-item *ngIf="i==0" no-padding no-lines>\n            {{ \'CATEGORIES\' | translate }}\n             <!-- <button item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n                {{ \'SEE ALL\' | translate }}\n                <ion-icon name="arrow-forward"></ion-icon> \n              </button> -->\n          </ion-item>\n        </ion-list>\n\n        <ion-scroll scrollX="true" class="item category-slide">\n          <ion-row nowrap padding-left>\n            <ng-container *ngFor="let x of categories; let i=index">\n              <ion-col col-auto no-padding *ngIf="categories[i*2] || categories[i*2+1]">\n                <div *ngIf="categories[i*2]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + categories[i*2].cat_img +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2])">\n                  <div class="fade"></div>\n                  <h5>{{categories[i*2].cat_name}}</h5>\n                </div>\n                <div *ngIf="categories[i*2+1]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + categories[i*2+1].cat_img +\')\'}" tappable (click)="goTo(\'ProductGridPage\', categories[i*2+1])">\n                  <div class="fade"></div>\n                  <h5>{{categories[i*2+1].cat_name}}</h5>\n                </div>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-scroll>\n\n          <!-- <ion-row padding-left padding-right class="categories-grid">\n            <ion-col col-4 class="category-item" *ngFor="let x of tmp">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', x)">\n                <div class="fade"></div>\n                <h5>{{x.name}}</h5>\n              </div>\n            </ion-col>\n          </ion-row> -->\n      </div> \n\n      <div class="">\n        <ion-list *ngFor="let x of agegroups ; let i=index" no-lines no-margin margin-left>\n          <ion-item *ngIf="i==0" no-padding no-lines>\n            {{ \'AGE GROUP\' | translate }}\n          </ion-item>\n        </ion-list>\n\n        <ion-scroll scrollX="true" class="item category-slide">\n          <ion-row nowrap padding-left>\n            <ng-container *ngFor="let x of agegroups ; let i=index">\n              <ion-col col-auto no-padding *ngIf="agegroups[i*2] || agegroups[i*2+1]">\n                <div *ngIf="agegroups[i*2]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + agegroups[i*2].img_url +\')\'}" tappable (click)="goTo(\'ProductGridPage\', agegroups[i*2])">\n                  <div class="fade"></div>\n                  <h5>{{agegroups[i*2].name}}</h5>\n                </div>\n                <div *ngIf="agegroups[i*2+1]" class="img" [ngStyle]="{\'background-image\': \'url(http://www.babyneeds.co.in/babyneeds/product_image/\' + agegroups[i*2+1].img_url +\')\'}" tappable (click)="goTo(\'ProductGridPage\', agegroups[i*2+1])">\n                  <div class="fade"></div>\n                  <h5>{{agegroups[i*2+1].name}}</h5>\n                </div>\n              </ion-col>\n            </ng-container>\n          </ion-row>\n        </ion-scroll>\n\n          <!-- <ion-row padding-left padding-right class="categories-grid">\n            <ion-col col-4 class="category-item" *ngFor="let x of tmp">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.image.src +\')\'}" tappable (click)="goTo(\'ProductGridPage\', x)">\n                <div class="fade"></div>\n                <h5>{{x.name}}</h5>\n              </div>\n            </ion-col>\n          </ion-row> -->\n      </div> \n\n\n      \n                   \n            <div class="">\n              <ion-list   *ngFor="let b of Brands;let i=index" no-lines no-margin margin-left>\n                <ion-item *ngIf="i==0" no-padding no-lines>\n                  {{ \' Upto 25% off on top brands\' | translate }}\n              </ion-item>\n              </ion-list>\n             <ion-grid>\n              <ion-row >\n                <ion-col no-padding col-6  *ngFor="let b of Brands;let i=index" >  \n               \n                  <ion-card *ngIf="i<6" style=" width:150px; min-height: calc(100% - 60px);" tappable (click)="goTo(\'ProductGridPage\', Brands[i])" >\n                 <img src="http://www.babyneeds.co.in/babyneeds/product_image/{{b.brand_img}}"  style="width:100% ;height: 150px;"  />  \n                            \n                  </ion-card>\n                </ion-col>\n                \n                 </ion-row>\n        </ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let b of Brands;let i=index" text-left>\n            <button *ngIf="i==0" item-end ion-button clear icon-end tappable (click)="goTo(\'CategoriesPage\')">\n              {{ \'SEE ALL\' | translate }}\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n              </ion-col>\n            </ion-row>\n          </div>\n      \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!-- <div class="product-slide" *ngFor="let x of data">\n        <ion-list no-lines no-margin margin-left>\n          <ion-item no-padding>\n            {{x[0].categories[0].name}}\n            <button item-end ion-button clear icon-end tappable (click)="goTo(\'ProductGridPage\', x[0].categories[0])">\n              {{ \'SEE_ALL\' | translate }}\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </ion-item>\n        </ion-list>\n\n        <ion-slides margin-bottom spaceBetween="10" slidesPerView="2.5">\n          <ion-slide *ngFor="let y of x">\n            <button class="fav" tappable (click)="setFav(y)" ion-button clear icon-only>\n              <ion-icon *ngIf="y.variations.length == 0" no-padding name="heart{{!wishlist.isFav(y) ? \'-outline\' : \'\'}}"></ion-icon>\n            </button>\n            <div text-left class="product-item" tappable (click)="goTo(\'ProductPage\', y)">\n              <div class="img" [ngStyle]="{\'background-image\': \'url(\' + y.images[0].src +\')\'}">\n                <ion-badge *ngIf="y.on_sale">{{y | discount}}</ion-badge>\n              </div>\n              <h5 [innerHTML]="y.name"></h5>\n              <div class="price">\n                  <span class="disc" *ngIf="y.on_sale">{{y.regular_price | money:app}}</span> \n                  {{y.price | money:app}}\n              </div>\n              <ion-row no-padding class="reviews" *ngIf="y.rating_count">\n                <ion-col col-auto no-padding>\n                  <ion-rating *ngIf="y.average_rating" item-start\n                    [numStars]="5"\n                    [readOnly]="true"\n                    [value]="y.average_rating">\n                  </ion-rating>\n                  <span *ngIf="y.rating_count">{{y.rating_count}}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-slide>\n        </ion-slides> -->\n        <!-- <ion-row padding-left padding-right class="product-grid">\n          <ion-col col-6 class="product-item" *ngFor="let x of products" tappable (click)="goTo(\'ProductPage\', x)">\n            <div class="img" [ngStyle]="{\'background-image\': \'url(\' + x.img +\')\'}">\n              <ion-icon class="fav" name="heart{{!x.isFav ? \'-outline\' : \'\'}}"></ion-icon>\n              <ion-badge *ngIf="x.disc">{{x.disc}}% OFF</ion-badge>\n            </div>\n            <h5>{{x.title}}</h5>\n            <div class="price">\n                <span class="disc" *ngIf="x.on_sale">{{x.regular_price | currency:\'USD\':true:\'1.2-2\'}}</span> \n                {{x.price | currency:\'USD\':true:\'1.2-2\'}}\n            </div>\n            <ion-row no-padding class="reviews">\n              <ion-col col-6 no-padding>\n                <ion-rating item-start\n                  [numStars]="5"\n                  [readOnly]="true"\n                  [value]="x.rating">\n                </ion-rating>\n              </ion-col>\n              <ion-col no-padding text-center *ngIf="x.reviews">{{x.reviews}} Reviews</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row> -->\n      <!-- </div> -->\n\n      <div *ngFor="let w of rlist; let i=index ">\n        <div  *ngIf="i==0">\n          <div class=""*ngFor="let w of his ;  let i=index " >\n            <ion-list no-lines no-margin margin-left>\n              <ion-item no-padding no-lines *ngIf="i==0" >\n                {{ \'Recently viewed \' | translate }}\n            </ion-item>\n            </ion-list>\n      \n          </div>\n            <ion-grid >\n              <ion-row >\n                  \n               \n                    <ion-col col-6 *ngFor="let b of his; let i=index" no-padding>  \n                 \n          \n                      <ion-card *ngIf="i>=4" (click)="goTo(\'ProductPage\',b)">\n                        <ion-badge color="primary" *ngIf="b.discount>0">{{b.discount}}%</ion-badge> \n                       <img *ngIf="b.images!=0"  src="http://www.babyneeds.co.in/babyneeds/product_image/{{b.images}}"  style="max-width:50%;max-height:200px; margin:auto; margin-top:15px"/>\n                      \n                     \n                       <p style="font-size:10px; text-align:center"> {{b.name}}</p>  <br>\n                 \n                     <ng-container *ngIf="b.per_discount!=0; else elseTemplate">\n                        <p style="font-size:9px; text-align:center; color:orange" ><del >Rs.:{{b.price}} </del> &nbsp;&nbsp;&nbsp;  Rs.:{{pricestrikt(b.discount,b.price)}} </p>\n                       </ng-container>\n                       <ng-template #elseTemplate>\n                          <p style="font-size:9px; text-align:center; color:orange">Rs.:{{b.price}}</p>\n                       </ng-template>\n                       \n                     \n                    </ion-card>\n                    </ion-col>\n                   </ion-row>\n            </ion-grid>\n           \n           \n          </div>\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        <div class="">\n     \n          <ion-list *ngFor="let w of offers; let i=index" no-lines no-margin margin-left>\n            <ion-item *ngIf="i==0" no-padding no-lines>\n              {{ \'  Offers\' | translate }}\n          </ion-item>\n          </ion-list>\n         \n       \n        <ion-card  *ngFor="let w of offers; let i=index">\n            <ion-item *ngIf="i<6">\n                <img tappable (click)="goTo(\'ProductGridPage\', offers[i])"  src="http://www.babyneeds.co.in/babyneeds/product_image/{{w.offer_img}}" style="width:100% ;height: 150px;" >\n              </ion-item>\n          \n          </ion-card>\n      \n    </div>\n</ion-content>'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_platform_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* AddressProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["g" /* RecentProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["l" /* WishlistProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["m" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { GooglePlus } from '@ionic-native/google-plus';
var LoginPage = (function () {
    function LoginPage(nav, fb, translate, navParams, toast, user, loader, alertCtrl, app, viewCtrl, http, restProvider, navCtrl, FB) {
        this.nav = nav;
        this.fb = fb;
        this.translate = translate;
        this.navParams = navParams;
        this.toast = toast;
        this.user = user;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.FB = FB;
        this.todo = {
            method: 'login',
            email: '',
            password: ''
        };
        this.loginForm = this.fb.group({
            user: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.signupForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            user: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email],
            pass: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            pass2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.resetForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]
        });
    }
    LoginPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginPage.prototype.submitSignup = function () {
        var _this = this;
        this.loader.present();
        this.user.nonce('user', 'register').map(function (x) { return x.json(); }).subscribe(function (x) {
            _this.signupForm.value.nonce = x.nonce;
            _this.user.signup(_this.signupForm.value).map(function (y) { return y.json(); })
                .subscribe(function (y) {
                var tmp = {
                    user: _this.signupForm.value.user,
                    pass: _this.signupForm.value.pass
                };
                _this.user.login(tmp).map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    if (res.status == 'ok') {
                        _this.user._loggedIn(res, _this.navParams.data.tabIndex);
                        _this.translate.get(['REGIST_SUCCESS'], { value: _this.signupForm.value.name }).subscribe(function (x) {
                            _this.toast.show(x.REGIST_SUCCESS);
                        });
                        _this.dismiss();
                        _this.loader.dismiss();
                    }
                    else {
                        _this.toast.show(res.error);
                    }
                }, function (err) {
                    _this.loader.dismiss();
                    _this.toast.show(err.json().error);
                });
            }, function (err) {
                _this.loader.dismiss();
                _this.toast.show(err.json().error);
            });
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.submitReset = function () {
        var _this = this;
        this.loader.present();
        this.user.reset(this.resetForm.value).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.status == 'ok')
                _this.toast.show(res.msg);
            else
                _this.toast.show(res.error);
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            _this.toast.show(err.json().error);
        });
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        this.loader.present();
        // this.restProvider.login(this.todo)
        // .then(data => {
        //   this.users = data;
        //   console.log(this.users);
        // });
        // this.user.login(this.loginForm.value).map(res => res.json())
        //   .subscribe( (res) => {
        if (this.todo.email != '' && this.todo.password != '') {
            this.restProvider.login(this.todo)
                .then(function (data) {
                console.log(data);
                _this.users = data;
                if (_this.users.result == 'success') {
                    console.log(_this.users);
                    _this.user._loggedIn(_this.users, _this.navParams.data.tabIndex);
                    _this.translate.get(['LOGIN_SUCCESS'], { value: _this.user.user.fname }).subscribe(function (x) {
                        _this.toast.show("login successfull");
                    });
                    _this.todo = {
                        method: 'login',
                        email: '',
                        password: ''
                    };
                    //this.nav.popToRoot();
                    //  this.nav.parent.select(0);
                    //  this.nav.setRoot(this.rootPage);
                    _this.goHome();
                }
                else
                    _this.toast.show(_this.users.result);
                _this.todo = {
                    method: 'login',
                    email: '',
                    password: ''
                };
                _this.loader.dismiss();
            }, function (err) {
                _this.loader.dismiss();
                _this.todo = {
                    method: 'login',
                    email: '',
                    password: ''
                };
                _this.toast.show(err.json().error);
            });
        }
        else {
            this.todo = {
                method: 'login',
                email: '',
                password: ''
            };
            this.toast.show("All feild are required");
            this.loader.dismiss();
        }
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.goHome = function () {
        this.nav.popToRoot();
        this.nav.parent.select(0);
    };
    LoginPage.prototype.goTo = function (page, params) {
        this.navCtrl.push(page, { params: params });
    };
    LoginPage.prototype.loginwithfb = function () {
        var _this = this;
        this.FB.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.getdata(res.authResponse.accessToken);
                _this.goHome();
            }
            else {
                _this.toast.show("Login Failed");
            }
            console.log('Logged into Facebook!', res);
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getdata = function (access_token) {
        var _this = this;
        var url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
        this.http.get(url).subscribe(function (data) {
            console.log(data);
            _this.users = data;
            _this.user._loggedInFB(_this.users, _this.navParams.data.tabIndex);
            _this.translate.get(['LOGIN_SUCCESS'], { value: _this.user.user.fname }).subscribe(function (x) {
                _this.toast.show("login successfull");
            });
        });
    };
    LoginPage.prototype.loginwithGoogle = function () {
        // this.google.login({})
        // .then(res => console.log(res))
        // .catch(err => console.error(err));
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
], LoginPage.prototype, "slider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('innerSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
], LoginPage.prototype, "innerSlider", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/pages/login/login.html"*/'\n    <ion-header transparent no-border no-lines >\n        <ion-navbar color="primary" >\n          <ion-title>Login</ion-title>\n        </ion-navbar>\n      </ion-header>\n   \n          \n         \n            \n              <ion-content>\n                  <img src="assets/img/logo/logo.jpg" />\n                 \n                  <ion-list>\n                   \n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                       <ion-input  [(ngModel)]="todo.email" ngControl="title"></ion-input>\n                    </ion-item>\n                      <ion-item>\n                          <ion-label floating>Password</ion-label>\n                          <ion-input type="password" minlength="3" [(ngModel)]="todo.password" ngControl="description"></ion-input>\n                      </ion-item>\n                  </ion-list>\n\n                  <ion-row align-items-center >\n                     \n                        <ion-col align-self-center>\n                            <button ion-button block  type="button" padding="5" color="app_primary"  tappable (click)="submitLogin()" >LOG IN</button>\n                        </ion-col>\n                   </ion-row>\n                     \n                            \n                              <p  (click)="goTo(\'ForgotpasswordPage\')"> Forgot Password</p>\n                        \n                        \n                    \n                 \n                    <p (click)="goTo(\'RegisterPage\')"> No account yet ? Create one</p>\n\n                    <p (click)="loginwithfb()"> Login with facebook</p>\n                    <!-- <p (click)="loginwithGoogle()"> Login with Google</p> -->\n                \n                    <!-- <ion-item> \n                        \n                           <ion-label  (click)="goTo(\'RegisterPage\')">Login with facebook</ion-label>\n                           </ion-item> \n                    -->\n\n              </ion-content>\n         \n  '/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["j" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["h" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_imports__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_recent_recent__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_rate__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rate_rate__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { LocalNotifications } from '@ionic-native/local-notifications';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__app_imports__["c" /* MODULES */],
            __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: false,
                backButtonText: '',
            }, {
                links: [
                    { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/chats/message/message.module#AccountChatsMessagePageModule', name: 'AccountChatsMessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/chats/chats.module#AccountChatsPageModule', name: 'AccountChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/help/help.module#AccountHelpPageModule', name: 'AccountHelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/notification/notification.module#AccountNotificationPageModule', name: 'AccountNotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/profile/profile.module#AccountProfilePageModule', name: 'AccountProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/saved-address/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/saved-address/saved-address.module#SavedAddressPageModule', name: 'SavedAddressPage', segment: 'saved-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/languages/languages.module#AccountSettingsLanguagesPageModule', name: 'AccountSettingsLanguagesPage', segment: 'languages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/notifications/notifications.module#AccountSettingsNotificationsPageModule', name: 'AccountSettingsNotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/settings.module#AccountSettingsPageModule', name: 'AccountSettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/settings/tos/tos.module#AccountSettingsTosPageModule', name: 'AccountSettingsTosPage', segment: 'tos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cancleorder/cancleorder.module#CancleorderPageModule', name: 'CancleorderPage', segment: 'cancleorder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart1/cart1.module#Cart1PageModule', name: 'Cart1Page', segment: 'cart1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change/change.module#ChangePageModule', name: 'ChangePage', segment: 'change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout1/checkout1.module#Checkout1PageModule', name: 'Checkout1Page', segment: 'checkout1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/myorder/myorder.module#MyorderPageModule', name: 'MyorderPage', segment: 'myorder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/grid/grid.module#ProductGridPageModule', name: 'ProductGridPage', segment: 'grid', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/mini-cart/mini-cart.module#MiniCartPageModule', name: 'MiniCartPage', segment: 'mini-cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/modal-categories/modal-categories.module#ModalCategoriesPageModule', name: 'ModalCategoriesPage', segment: 'modal-categories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/returnorder/returnorder.module#ReturnorderPageModule', name: 'ReturnorderPage', segment: 'returnorder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/servicecategory/servicecategory.module#ServicecategoryPageModule', name: 'ServicecategoryPage', segment: 'servicecategory', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/servicedetail/servicedetail.module#ServicedetailPageModule', name: 'ServicedetailPage', segment: 'servicedetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/thanks/thanks.module#ThanksPageModule', name: 'ThanksPage', segment: 'thanks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/writereview/writereview.module#WritereviewPageModule', name: 'WritereviewPage', segment: 'writereview', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__app_imports__["e" /* PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */],
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_11__providers_recent_recent__["a" /* RecentProvider */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_15__providers_rate_rate__["a" /* RateProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProvider = (function () {
    function UserProvider(storage, events, http) {
        this.storage = storage;
        this.events = events;
        this.http = http;
        this.USER_KEY = 'user';
        this.user = {};
        this.load();
        __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url = __WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/api';
        // console.log(App.url);
    }
    UserProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.USER_KEY).then(function (val) {
            if (val)
                _this._loggedIn(val, 0);
        });
    };
    UserProvider.prototype._loggedIn = function (user, index) {
        this.user.fname = user.fname;
        this.user.lname = user.lname;
        this.user.user_email = user.user_email;
        this.user.user_id = user.user_id;
        console.log(this, user.fname);
        this.save();
        console.log(this, user.fname);
        this.events.publish('user:login', { tabIndex: index });
        return this.user;
    };
    UserProvider.prototype._loggedInFB = function (user, index) {
        this.user.fname = user.first_name;
        this.user.lname = user.last_name;
        this.user.user_email = user.email;
        this.user.user_id = user.user_id;
        console.log(this, user.first_name);
        this.save();
        console.log(this, user.first_name);
        this.events.publish('user:login', { tabIndex: index });
        return this.user;
    };
    UserProvider.prototype.login = function (data) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/generate_auth_cookie/?insecure=cool&username=' + data.user + '&password=' + data.pass);
        seq.map(function (res) { });
        return seq;
    };
    UserProvider.prototype.reset = function (data) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/retrieve_password/?insecure=cool&user_login=' + data.email);
        seq.map(function (res) { });
        return seq;
    };
    UserProvider.prototype.signup = function (data) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/register/?insecure=cool&nonce=' + data.nonce + '&first_name=' + data.name + '&display_name=' + data.name + '&username=' + data.user + '&user_pass=' + data.pass + '&email=' + data.email);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.update = function (data) {
        var cookie = this.user.cookie;
        var f = data.first ? '&first_name=' + data.first : '';
        var l = data.last ? '&last_name=' + data.last : '';
        var b = data.bio ? '&description=' + data.bio : '';
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/update_user_meta_vars/?insecure=cool&cookie=' + cookie + f + l + b);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.nonce = function (controller, method) {
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/get_nonce/?controller=' + controller + '&method=' + method);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.isLoggedIn = function () {
        var cookie = this.user.cookie;
        var seq = this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_app_global__["a" /* App */].url + '/user/validate_auth_cookie/?insecure=cool&cookie=' + cookie);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    UserProvider.prototype.logout = function () {
        var _this = this;
        this.user = {};
        return this.storage.remove(this.USER_KEY).then(function () {
            _this.events.publish('user:logout');
        });
    };
    UserProvider.prototype.setUserUpdate = function (data) {
        if (data.fname)
            this.user.user.fname = data.fname;
        if (data.lname)
            this.user.user.lname = data.lname;
        if (data.bio)
            this.user.user.description = data.bio;
        return this.save();
    };
    Object.defineProperty(UserProvider.prototype, "email", {
        get: function () {
            if (this.user.user.email)
                return this.user.user.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "name", {
        get: function () {
            if (this.user.user.displayname)
                return this.user.user.displayname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "firstname", {
        get: function () {
            if (this.user.user.firstname)
                return this.user.user.firstname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "lastname", {
        get: function () {
            if (this.user.user.lastname)
                return this.user.user.lastname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "displayname", {
        get: function () {
            if (this.user.user.displayname)
                return this.user.user.displayname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "id", {
        get: function () {
            if (this.user.user.id)
                return this.user.user.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "username", {
        get: function () {
            if (this.user.user.username)
                return this.user.user.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "cookie", {
        get: function () {
            if (this.user.cookie)
                return this.user.cookie;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProvider.prototype, "all", {
        get: function () {
            console.log(this.user);
            if (this.user)
                return this.user;
        },
        enumerable: true,
        configurable: true
    });
    UserProvider.prototype.save = function () {
        return this.storage.set(this.USER_KEY, this.user);
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_global__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_stripe__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrderProvider = (function () {
    function OrderProvider(storage, http, stripe, events, payPal) {
        this.storage = storage;
        this.http = http;
        this.stripe = stripe;
        this.events = events;
        this.payPal = payPal;
        this.ORDER_KEY = 'order';
        this.order = {};
        this.load();
    }
    OrderProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.ORDER_KEY).then(function (val) {
            if (val) {
                _this.order = val;
                return _this.order;
            }
            else {
                _this.save();
            }
        });
    };
    OrderProvider.prototype.setBilling = function (billing) {
        this.order.billing = billing;
        this.events.publish('order:go');
        return this.save();
    };
    OrderProvider.prototype.setShipping = function (shipping) {
        this.order.shipping = shipping;
        this.events.publish('order:go');
        return this.save();
    };
    Object.defineProperty(OrderProvider.prototype, "billing", {
        get: function () {
            return this.order.billing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderProvider.prototype, "shipping", {
        get: function () {
            return this.order.shipping;
        },
        enumerable: true,
        configurable: true
    });
    OrderProvider.prototype.getToken = function (opt) {
        this.stripe.setPublishableKey(opt.publishable_key);
        var card = {
            number: opt.no,
            expMonth: opt.month,
            expYear: opt.year,
            cvc: opt.cvc
        };
        return this.stripe.createCardToken(card)
            .then(function (token) {
            return token;
        }, function (err) {
            return err;
        });
    };
    OrderProvider.prototype.stripeCharge = function (opt, token) {
        var data = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* URLSearchParams */](opt);
        data.set('currency', opt.currency);
        data.set('amount', opt.total);
        data.set('description', opt.billing.first_name + ' - ' + opt.total);
        data.set('receipt_email', opt.billing.email);
        if (opt.customer_id)
            data.set("metadata[Customer ID]", opt.customer_id);
        data.set("metadata[Customer Email]", opt.billing.email);
        data.set("metadata[Customer Name]", opt.billing.first_name);
        data.set("metadata[Customer Device]", opt.device);
        data.set('shipping[phone]', opt.shipping.phone);
        data.set('shipping[carrier]', opt.carrier);
        data.set('shipping[name]', opt.shipping.first_name);
        data.set('shipping[address][line1]', opt.shipping.address_1);
        data.set('shipping[address][postal_code]', opt.shipping.postcode);
        data.set('shipping[address][city]', opt.shipping.city);
        data.set('shipping[address][state]', opt.shipping.state);
        data.set('shipping[address][country]', opt.shipping.country);
        data.set('source', token.id);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + opt.secret_key);
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var seq = this.http.post('https://api.stripe.com/v1/charges', data.toString(), options);
        seq.map(function (res) {
            res.json();
            console.log(res.json());
        });
        return seq;
    };
    OrderProvider.prototype.checkoutPaypal = function (order, opt) {
        var _this = this;
        return this.payPal.init({
            PayPalEnvironmentProduction: __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* App */].paypalLiveClientID,
            PayPalEnvironmentSandbox: __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* App */].paypalSandboxClientID
        }).then(function () {
            return _this.payPal.prepareToRender(__WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* App */].paypalState, new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var paymentDetail = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["d" /* PayPalPaymentDetails */](opt.detail.subtotal.toFixed(2), opt.detail.shipping.toFixed(2), '0.00');
                var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](opt.total.toFixed(2), opt.currency, opt.desc, 'sale', paymentDetail);
                return _this.payPal.renderSinglePaymentUI(payment).then(function (x) {
                    return x;
                    // Successfully paid`
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    OrderProvider.prototype.reset = function () {
        this.order = {};
        return this.storage.remove(this.ORDER_KEY).then(function () { });
    };
    OrderProvider.prototype.save = function () {
        return this.storage.set(this.ORDER_KEY, this.order);
    };
    return OrderProvider;
}());
OrderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */]])
], OrderProvider);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressProvider = (function () {
    function AddressProvider(storage, platform) {
        var _this = this;
        this.storage = storage;
        this.platform = platform;
        this.ADDRESS_KEY = 'address';
        this.address = [];
        this.platform.ready().then(function () {
            _this.adressprimary = _this.getPrimary;
        });
        this.load();
    }
    AddressProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.ADDRESS_KEY).then(function (val) {
            if (val) {
                _this.address = val;
                return _this.address;
            }
            else {
                _this.save();
            }
        });
    };
    AddressProvider.prototype.add = function (data) {
        this.address.push(data);
        console.log(this.address);
        return this.save();
    };
    AddressProvider.prototype.update = function (index, data) {
        this.address[index] = data;
        return this.save();
    };
    AddressProvider.prototype.remove = function (index) {
        this.address.splice(index, 1);
        return this.save();
    };
    AddressProvider.prototype.getById = function (id) {
        var tmp = {};
        for (var i in this.address) {
            if (this.address[i].id == id) {
                tmp = {
                    index: i,
                    data: this.address[i]
                };
                break;
            }
        }
        return tmp;
    };
    Object.defineProperty(AddressProvider.prototype, "getPrimary", {
        get: function () {
            var tmp = {};
            for (var i in this.address) {
                if (this.address[i].primary) {
                    tmp = this.address[i];
                    break;
                }
            }
            if (this.address.length > 0)
                return tmp;
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressProvider.prototype, "length", {
        get: function () {
            return this.address.length;
        },
        enumerable: true,
        configurable: true
    });
    AddressProvider.prototype.setPrimary = function (index) {
        for (var i in this.address)
            this.address[i].primary = false;
        this.address[index].primary = true;
        return this.save();
    };
    AddressProvider.prototype.save = function () {
        return this.storage.set(this.ADDRESS_KEY, this.address);
    };
    Object.defineProperty(AddressProvider.prototype, "all", {
        get: function () {
            return this.address;
        },
        enumerable: true,
        configurable: true
    });
    return AddressProvider;
}());
AddressProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */]])
], AddressProvider);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartProvider = (function () {
    function CartProvider(storage) {
        this.storage = storage;
        this.CART_KEY = 'cart';
        this.cart = [];
        this.load();
    }
    CartProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.CART_KEY).then(function (val) {
            if (val && val.length > 0) {
                _this.cart = val;
                return _this.cart;
            }
            else {
                _this.save();
            }
        });
    };
    CartProvider.prototype.post = function (product1, qty) {
        if (qty === void 0) { qty = 1; }
        this.toCart(product1, qty);
    };
    CartProvider.prototype.toCart = function (product1, qty) {
        var exist = false;
        for (var i in this.cart) {
            if (this.cart[i].p_id == product1.p_id) {
                this.cart[i].quantity += qty;
                exist = true;
                // console.log(this.cart);
                break;
            }
        }
        if (!exist) {
            product1.quantity = qty;
            this.add(product1);
        }
        this.save();
    };
    CartProvider.prototype.add = function (product1) {
        var tmp = {
            quantity: product1.quantity,
            name: product1.product_name,
            images: product1.imgs[0].img_url,
            p_id: product1.p_id,
            price: product1.mrp,
            discount: product1.per_discount,
            // regular_price: product1.regular_price,
            on_sale: product1.offer_name,
            in_stock: product1.status,
        };
        this.cart.push(tmp);
        return this.save();
    };
    CartProvider.prototype.remove = function (product) {
        for (var i in this.cart) {
            if (product.variation_id) {
                if (this.cart[i].id == product.id && this.cart[i].variation_id == product.variation_id) {
                    this.cart.splice(parseInt(i), 1);
                    break;
                }
            }
            else {
                if (this.cart[i].p_id == product.p_id) {
                    this.cart.splice(parseInt(i), 1);
                    break;
                }
            }
        }
        return this.save();
    };
    Object.defineProperty(CartProvider.prototype, "totalQty", {
        get: function () {
            return this.cart.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProvider.prototype, "totalQtyDetail", {
        get: function () {
            var qty = 0;
            for (var i in this.cart)
                qty += this.cart[i].quantity;
            return qty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProvider.prototype, "total", {
        // get lineItems(){
        //   let tmp, line_items = [];
        //   for(let i in this.cart){
        //     tmp = {
        //       meta_data: [{
        //         key: 'img',
        //         value: this.cart[i].images[0].src
        //       }],
        //       product_id: this.cart[i].id,
        //       quantity: this.cart[i].quantity
        //     };
        //     if(this.cart[i].variation_id)
        //       tmp.variation_id = this.cart[i].variation_id;
        //     line_items.push(tmp);
        //   }
        //   return line_items;
        // }
        get: function () {
            this.total1 = 0;
            var total = 0;
            for (var i in this.cart) {
                // console.log(this.cart);
                // console.log(i);
                if (this.cart[i].discount > 0) {
                    this.total1 = this.pricestrikt(this.cart[i].discount, this.cart[i].price);
                    // console.log(this.total1);
                    total += parseInt(this.total1) * parseInt(this.cart[i].quantity);
                    // return total;
                }
                else {
                    total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity);
                }
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    CartProvider.prototype.save = function () {
        return this.storage.set(this.CART_KEY, this.cart);
    };
    CartProvider.prototype.reset = function () {
        this.cart = [];
        return this.storage.remove(this.CART_KEY).then(function () { });
    };
    Object.defineProperty(CartProvider.prototype, "all", {
        get: function () {
            return this.cart;
        },
        enumerable: true,
        configurable: true
    });
    CartProvider.prototype.pricestrikt = function (discount, price) {
        if (discount != 0) {
            this.result = (discount / 100) * price;
            this.finalprice = price - this.result;
            return parseInt(this.finalprice);
        }
        else {
            return 0;
        }
    };
    return CartProvider;
}());
CartProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], CartProvider);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryProvider = (function () {
    function HistoryProvider(storage) {
        this.storage = storage;
        this.HISTORY_KEY = 'history';
        this.load();
    }
    HistoryProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.HISTORY_KEY).then(function (val) {
            if (val) {
                _this.history1 = val;
                return _this.history1;
            }
            else {
                _this.save();
            }
        });
    };
    HistoryProvider.prototype.post = function (product) {
        var exist = false;
        for (var i in this.history1) {
            if (this.history1[i].p_id == product.p_id) {
                exist = true;
                break;
            }
        }
        if (!exist)
            this.history1.push(product);
        return this.save();
    };
    Object.defineProperty(HistoryProvider.prototype, "clear", {
        get: function () {
            this.history1 = [];
            return this.save();
        },
        enumerable: true,
        configurable: true
    });
    HistoryProvider.prototype.save = function () {
        return this.storage.set(this.HISTORY_KEY, this.history1);
    };
    Object.defineProperty(HistoryProvider.prototype, "all", {
        get: function () {
            return this.history1;
        },
        enumerable: true,
        configurable: true
    });
    return HistoryProvider;
}());
HistoryProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], HistoryProvider);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifProvider = (function () {
    function NotifProvider(storage) {
        this.storage = storage;
        this.NOTIF_KEY = 'notif';
        this.notif = [];
        this.load();
    }
    NotifProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.NOTIF_KEY).then(function (val) {
            if (val) {
                _this.notif = val;
                return _this.notif;
            }
            else {
                _this.save();
            }
        });
    };
    NotifProvider.prototype.remove = function (id) {
        for (var i in this.notif) {
            if (this.notif[i].id == id) {
                this.notif.splice(i, 1);
                break;
            }
        }
        return this.save();
    };
    NotifProvider.prototype.post = function (data) {
        data.id = new Date().getTime();
        this.notif.push(data);
        return this.save();
    };
    Object.defineProperty(NotifProvider.prototype, "clear", {
        get: function () {
            this.notif = [];
            return this.save();
        },
        enumerable: true,
        configurable: true
    });
    NotifProvider.prototype.save = function () {
        return this.storage.set(this.NOTIF_KEY, this.notif);
    };
    Object.defineProperty(NotifProvider.prototype, "all", {
        get: function () {
            return this.notif;
        },
        enumerable: true,
        configurable: true
    });
    return NotifProvider;
}());
NotifProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], NotifProvider);

//# sourceMappingURL=notif.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistProvider = (function () {
    function WishlistProvider(storage) {
        this.storage = storage;
        this.WISHLIST_KEY = 'wish';
        this.wishlist = [];
        this.load();
    }
    WishlistProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.WISHLIST_KEY).then(function (val) {
            if (val && val.length > 0) {
                _this.wishlist = val;
                return _this.wishlist;
            }
            else {
                _this.save();
            }
        });
    };
    WishlistProvider.prototype.post = function (product) {
        if (product.isFav)
            this.remove(product);
        else
            this.setFav(product);
    };
    WishlistProvider.prototype.isFav = function (product) {
        var exist = false;
        for (var i in this.wishlist) {
            if (this.wishlist[i].id == product.id) {
                exist = true;
                break;
            }
        }
        return exist;
    };
    Object.defineProperty(WishlistProvider.prototype, "total", {
        get: function () {
            return this.wishlist.length || 0;
        },
        enumerable: true,
        configurable: true
    });
    WishlistProvider.prototype.setFav = function (product) {
        this.wishlist.push(product);
        return this.save();
    };
    WishlistProvider.prototype.remove = function (product) {
        for (var i in this.wishlist) {
            if (this.wishlist[i].id == product.id) {
                this.wishlist.splice(parseInt(i), 1);
                break;
            }
        }
        return this.save();
    };
    WishlistProvider.prototype.save = function () {
        return this.storage.set(this.WISHLIST_KEY, this.wishlist);
    };
    WishlistProvider.prototype.setFirst = function (value) {
        return this.storage.set(this.WISHLIST_KEY, value);
    };
    Object.defineProperty(WishlistProvider.prototype, "all", {
        get: function () {
            return this.wishlist;
        },
        enumerable: true,
        configurable: true
    });
    return WishlistProvider;
}());
WishlistProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], WishlistProvider);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingProvider = (function () {
    function LoadingProvider(loader, translate) {
        this.loader = loader;
        this.translate = translate;
        this.isloading = false;
    }
    LoadingProvider.prototype.present = function () {
        var _this = this;
        this.translate.get(['WAIT']).subscribe(function (x) {
            _this.load = _this.loader.create({
                spinner: 'dots'
            });
        });
        this.load.present();
        this.isloading = true;
    };
    LoadingProvider.prototype.dismiss = function () {
        this.load.dismiss();
        this.isloading = false;
    };
    LoadingProvider.prototype.isShowing = function () {
        return this.isloading;
    };
    return LoadingProvider;
}());
LoadingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], LoadingProvider);

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastProvider = (function () {
    function ToastProvider(_toast) {
        this._toast = _toast;
    }
    ToastProvider.prototype.show = function (msg, pos) {
        if (pos === void 0) { pos = 'bottom'; }
        this._toast.create({
            message: msg,
            duration: 4000,
            position: pos
        }).present();
    };
    ToastProvider.prototype.showWithClose = function (msg, pos) {
        if (pos === void 0) { pos = 'bottom'; }
        this._toast.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: 'Ok'
        }).present();
    };
    return ToastProvider;
}());
ToastProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */]])
], ToastProvider);

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = (function () {
    function SettingsProvider(storage) {
        this.storage = storage;
        this.SETTINGS_KEY = 'settings';
        this.settings = {};
        this.load();
    }
    SettingsProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (val) {
            if (val) {
                _this.settings = val;
                return _this.settings;
            }
            else {
                _this.storage.set(_this.SETTINGS_KEY, _this.settings);
            }
        });
    };
    SettingsProvider.prototype.getCountries = function () {
        var countries = [];
        var val = this.settings.countries;
        if (val.value.length == 0) {
            for (var i in val.options)
                countries.push({ id: i, name: val.options[i] });
        }
        else {
            for (var i in val.value)
                countries.push({ id: i, name: val.value[i] });
        }
        return countries;
    };
    SettingsProvider.prototype.setSettings = function (data, id) {
        var tmp = this.settings;
        tmp[id] = data;
        return this.save(tmp);
    };
    SettingsProvider.prototype.save = function (data) {
        return this.storage.set(this.SETTINGS_KEY, data);
    };
    Object.defineProperty(SettingsProvider.prototype, "all", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooCommerceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_global__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WooCommerceProvider = (function () {
    function WooCommerceProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.url = "http://makslab.com/babyneeds/ws/v2/api1.php";
        this.woo = {};
        this.categories = [];
        this.init();
        this.tmp = new __WEBPACK_IMPORTED_MODULE_5__providers__["i" /* SettingsProvider */](this.storage);
    }
    WooCommerceProvider.prototype.getBanner = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("http://192.168.1.106/baby/ws/v2/api1.php", JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WooCommerceProvider.prototype.loadSetting = function () {
        var _this = this;
        return this.WooCommerce.getAsync('system_status').then(function (x) {
            _this.tmp.setSettings(JSON.parse(x.body).settings, 'settings');
            return JSON.parse(x.body).settings;
        }, function (err) {
            console.log(err);
        });
    };
    WooCommerceProvider.prototype.saveCountries = function () {
        var _this = this;
        return this.WooCommerce.getAsync('settings/general/woocommerce_specific_ship_to_countries').then(function (x) {
            _this.tmp.setSettings(JSON.parse(x.body), 'countries');
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.loadZones = function () {
        var _this = this;
        return this.setShippingZone().then(function (x) {
            _this.tmp.setSettings(x, 'zones');
            return x;
        });
    };
    WooCommerceProvider.prototype.loadPayments = function () {
        return this.WooCommerce.getAsync('payment_gateways').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getOrders = function (id, page, per_page, status) {
        var p = page ? '&page=' + page : '';
        var pp = per_page ? '&per_page=' + per_page : '&per_page=10';
        var s = status ? '&status=' + status : '';
        return this.WooCommerce.getAsync('orders?customer=' + id + p + pp + s).then(function (x) {
            var tmp = JSON.parse(x.body);
            var order = {
                paid: [],
                unpaid: []
            };
            for (var i in tmp) {
                for (var j in tmp[i].line_items) {
                    for (var k in tmp[i].line_items[j].meta_data) {
                        if (tmp[i].line_items[j].meta_data[k].key == 'img')
                            tmp[i].line_items[j].img = tmp[i].line_items[j].meta_data[k].value;
                    }
                }
                if (tmp[i].status == 'completed')
                    order.paid.push(tmp[i]);
                else
                    order.unpaid.push(tmp[i]);
            }
            return order;
        });
    };
    WooCommerceProvider.prototype.getOrderDetail = function (id) {
        return this.WooCommerce.getAsync('orders/' + id).then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getZoneLocation = function (id) {
        return this.WooCommerce.getAsync('shipping/zones/' + id + '/locations').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getShippingZoneMethod = function (id) {
        return this.WooCommerce.getAsync('shipping/zones/' + id + '/methods').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getTaxes = function () {
        return this.WooCommerce.getAsync('taxes').then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getSingleZone = function (zones, data) {
        var zone = false, rest = false, tmp;
        for (var i in zones) {
            if (zones[i].locations.length > 0) {
                for (var j in zones[i].locations) {
                    if ((zones[i].locations[j].type == 'country' && zones[i].locations[j].code == data.country) ||
                        (zones[i].locations[j].type == 'state' && zones[i].locations[j].code == data.country + ':' + data.state) ||
                        (zones[i].locations[j].type == 'postcode' && zones[i].locations[j].code == data.postcode)) {
                        tmp = zones[i].id;
                        zone = true;
                        break;
                    }
                }
            }
        }
        if (!zone) {
            for (var i in zones) {
                if (zones[i].locations.length == 0 && zones[i].id > 0) {
                    tmp = zones[i].id;
                    rest = true;
                    break;
                }
            }
        }
        if (!zone && !rest && zones[0])
            tmp = zones[0].id;
        return tmp;
    };
    WooCommerceProvider.prototype.setShippingZone = function () {
        var _this = this;
        return this.WooCommerce.getAsync('shipping/zones').then(function (x) {
            var zone = [];
            var tmp = JSON.parse(x.body);
            var _loop_1 = function (i) {
                // if(tmp[i].id > 0){
                _this.getZoneLocation(tmp[i].id).then(function (val) {
                    // if(val.length > 0){
                    zone.push({
                        id: tmp[i].id,
                        name: tmp[i].name,
                        order: tmp[i].order,
                        locations: val
                    });
                    // }
                });
                // }
            };
            for (var i in tmp) {
                _loop_1(i);
            }
            return zone;
        });
    };
    WooCommerceProvider.prototype.getProductReviews = function (id) {
        return this.WooCommerce.getAsync("products/" + id + "/reviews").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getProductVariations = function (id) {
        return this.WooCommerce.getAsync("products/" + id + "/variations").then(function (x) {
            return JSON.parse(x.body);
            //tmp.price = tmp.variations[0].price + ' - ' + tmp.variations[tmp.variations.length-1].price;
        });
    };
    WooCommerceProvider.prototype.getSingleProduct = function (id) {
        return this.WooCommerce.getAsync("products/" + id).then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getProductRelated = function (related_ids) {
        var tmp = [];
        for (var i in related_ids) {
            this.getSingleProduct(related_ids[i]).then(function (x) {
                tmp.push(x);
            });
        }
        return tmp;
    };
    WooCommerceProvider.prototype.getAllProducts = function (page, category, search, min_price, max_price, per_page, status, order, attribute, attribute_term) {
        if (attribute === void 0) { attribute = ''; }
        if (attribute_term === void 0) { attribute_term = ''; }
        var p = page ? '&page=' + page : '';
        var pp = per_page ? '&per_page=' + per_page : '&per_page=10';
        var c = category ? '&category=' + category : '';
        var q = search ? '&search=' + search : '';
        var min = min_price ? '&min_price=' + min_price : '';
        var max = max_price ? '&max_price=' + max_price : '';
        var s = status ? '?status=' + status : '?status=publish';
        var a = attribute ? '&attribute=' + attribute : '';
        var t = attribute_term ? '&attribute_term=' + attribute_term : '';
        var o = order ? '&order=' + order : '';
        return this.WooCommerce.getAsync("products" + s + p + pp + c + q + min + max + a + t + o).then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getAllCategories = function () {
        return this.WooCommerce.getAsync("products/categories").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getAttributeTerms = function (id) {
        return this.WooCommerce.getAsync("products/attributes/" + id + "/terms?hide_empty=true").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getAttributes = function () {
        return this.WooCommerce.getAsync("products/attributes").then(function (x) {
            return JSON.parse(x.body);
        });
    };
    WooCommerceProvider.prototype.getStates = function (id) {
        var seq = this.http.get('assets/i18n/states/' + id + '.json');
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    WooCommerceProvider.prototype.getSubCategories = function () {
        return this.WooCommerce.getAsync("products/categories").then(function (x) {
            var tmp = JSON.parse(x.body), root = [];
            for (var i in tmp) {
                if (tmp[i].parent == 0) {
                    var child = [];
                    child.push({ id: tmp[i].id, count: tmp[i].count, image: tmp[i].image, name: 'All ' + tmp[i].name, slug: tmp[i].slug });
                    for (var j in tmp) {
                        if (tmp[j].parent == tmp[i].id)
                            child.push(tmp[j]);
                    }
                    tmp[i].child = child;
                    root.push(tmp[i]);
                }
            }
            return root;
        });
    };
    WooCommerceProvider.prototype.createOrder = function (data) {
        return this.WooCommerce.postAsync("orders", data).then(function (x) {
            return JSON.parse(x.body);
        }, function (e) {
            console.log(e);
        });
    };
    WooCommerceProvider.prototype.init = function () {
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].url,
            consumerKey: __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].consumerKey,
            consumerSecret: __WEBPACK_IMPORTED_MODULE_4__app_app_global__["a" /* App */].consumerSecret,
            wpAPI: true,
            version: 'wc/v2',
            verifySsl: true,
            queryStringAuth: true
        });
        return this.WooCommerce;
    };
    return WooCommerceProvider;
}());
WooCommerceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], WooCommerceProvider);

//# sourceMappingURL=woocommerce.js.map

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_order__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notif_notif__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_loading__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toast_toast__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__woocommerce_woocommerce__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rest_rest__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recent_recent__ = __webpack_require__(369);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__order_order__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__address_address__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__history_history__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__woocommerce_woocommerce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__loading_loading__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__toast_toast__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__notif_notif__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__rest_rest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_12__recent_recent__["a"]; });














//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
var App = {
    store: 'Babyneeds',
    ContactEmail: '',
    url: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    OneSignalAppID: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    GCM: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumerKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumerSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    paypalSandboxClientID: 'AZjyISbp1zmOhZ0o_iAG3W2IGjlz2hvEC-8cGoQ7fXcMFN9afaRuW0X1B1PVSgkSuTQWOKqM9N4NTkOP',
    paypalLiveClientID: '',
    paypalState: 'PayPalEnvironmentSandbox',
    languages: [
        { id: 'en', title: 'English' },
        { id: 'id', title: 'Indonesian' },
        { id: 'fr', title: 'French' },
        { id: 'in', title: 'Hindi' },
        { id: 'cn', title: 'Chinese' }
    ],
    defaultLang: 'en'
};
//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ParallaxHeader directive.
  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
var ParallaxHeader = (function () {
    function ParallaxHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ParallaxHeader Directive');
    }
    ParallaxHeader.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeader.prototype.onWindowResize = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeader.prototype.updateParallaxHeader = function (ev) {
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0, ' + this.translateAmt + 'px, 0) scale(' + this.scaleAmt + ', ' + this.scaleAmt + ')');
    };
    return ParallaxHeader;
}());
ParallaxHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[parallax-header]',
        host: {
            'ionScroll': 'onContentScroll($event)',
            '(window:resize)': 'onWindowResize($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ParallaxHeader);

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fa_icon_fa_icon__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_rating_ion_rating__ = __webpack_require__(945);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fa_icon_fa_icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ion_rating_ion_rating__["a"]; });



//# sourceMappingURL=components.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaIconComponent = (function (_super) {
    __extends(FaIconComponent, _super);
    function FaIconComponent(config, elementRef, renderer) {
        return _super.call(this, config, elementRef, renderer, "fa") || this;
    }
    Object.defineProperty(FaIconComponent.prototype, "fixedWidth", {
        set: function (fixedWidth) {
            this.setElementClass("fa-fw", this.isTrueProperty(fixedWidth));
        },
        enumerable: true,
        configurable: true
    });
    FaIconComponent.prototype.ngOnChanges = function (changes) {
        if (changes.name) {
            this.unsetPrevAndSetCurrentClass(changes.name);
        }
        if (changes.size) {
            this.unsetPrevAndSetCurrentClass(changes.size);
        }
    };
    FaIconComponent.prototype.isTrueProperty = function (val) {
        if (typeof val === "string") {
            val = val.toLowerCase().trim();
            return (val === "true" || val === "on" || val === "");
        }
        return !!val;
    };
    ;
    FaIconComponent.prototype.unsetPrevAndSetCurrentClass = function (change) {
        this.setElementClass("fa-" + change.previousValue, false);
        this.setElementClass("fa-" + change.currentValue, true);
    };
    return FaIconComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Ion */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FaIconComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FaIconComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("fixed-width"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FaIconComponent.prototype, "fixedWidth", null);
FaIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "fa-icon",
        template: "",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], FaIconComponent);

//# sourceMappingURL=fa-icon.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonRating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonRating = (function () {
    function IonRating() {
        this.numStars = 5;
        this.readOnly = true;
        this.value = 5;
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.stars = [];
    }
    IonRating.prototype.ngAfterContentInit = function () {
        this.calc();
    };
    IonRating.prototype.calc = function () {
        this.stars = [];
        var tmp = this.value;
        for (var i = 0; i < this.numStars; i++, tmp--)
            if (tmp >= 1)
                this.stars.push("star");
            else if (tmp < 1 && tmp > 0)
                this.stars.push("star-half-o");
            else
                this.stars.push("star-o");
    };
    IonRating.prototype.starClicked = function (index) {
        if (!this.readOnly) {
            this.value = index + 1;
            this.calc();
            this.clicked.emit(this.value);
        }
    };
    return IonRating;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRating.prototype, "numStars", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], IonRating.prototype, "readOnly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], IonRating.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], IonRating.prototype, "clicked", void 0);
IonRating = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-rating',template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/components/ion-rating/ion-rating.html"*/'\n    <ion-row no-padding no-margin class="ion-rating-container">\n        <ion-col no-padding text-center *ngFor="let star of stars; let i = index" tappable (click)="starClicked(i)">\n            <!-- <ion-icon [name]="star"></ion-icon> -->\n            <fa-icon [name]="star"></fa-icon>\n        </ion-col>\n    </ion-row>\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/components/ion-rating/ion-rating.html"*/
    }),
    __metadata("design:paramtypes", [])
], IonRating);

//# sourceMappingURL=ion-rating.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discount_discount__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__money_money__ = __webpack_require__(950);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__discount_discount__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__moment_moment__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__money_money__["a"]; });




//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiscountPipe = (function () {
    function DiscountPipe() {
    }
    DiscountPipe.prototype.transform = function (value, args) {
        return Math.ceil((value.regular_price - value.price) / value.regular_price * 100) + "% OFF";
    };
    return DiscountPipe;
}());
DiscountPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'discount',
    })
], DiscountPipe);

//# sourceMappingURL=discount.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'moment'
    })
], MomentPipe);

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 423,
	"./af.js": 423,
	"./ar": 424,
	"./ar-dz": 425,
	"./ar-dz.js": 425,
	"./ar-kw": 426,
	"./ar-kw.js": 426,
	"./ar-ly": 427,
	"./ar-ly.js": 427,
	"./ar-ma": 428,
	"./ar-ma.js": 428,
	"./ar-sa": 429,
	"./ar-sa.js": 429,
	"./ar-tn": 430,
	"./ar-tn.js": 430,
	"./ar.js": 424,
	"./az": 431,
	"./az.js": 431,
	"./be": 432,
	"./be.js": 432,
	"./bg": 433,
	"./bg.js": 433,
	"./bm": 434,
	"./bm.js": 434,
	"./bn": 435,
	"./bn.js": 435,
	"./bo": 436,
	"./bo.js": 436,
	"./br": 437,
	"./br.js": 437,
	"./bs": 438,
	"./bs.js": 438,
	"./ca": 439,
	"./ca.js": 439,
	"./cs": 440,
	"./cs.js": 440,
	"./cv": 441,
	"./cv.js": 441,
	"./cy": 442,
	"./cy.js": 442,
	"./da": 443,
	"./da.js": 443,
	"./de": 444,
	"./de-at": 445,
	"./de-at.js": 445,
	"./de-ch": 446,
	"./de-ch.js": 446,
	"./de.js": 444,
	"./dv": 447,
	"./dv.js": 447,
	"./el": 448,
	"./el.js": 448,
	"./en-au": 449,
	"./en-au.js": 449,
	"./en-ca": 450,
	"./en-ca.js": 450,
	"./en-gb": 451,
	"./en-gb.js": 451,
	"./en-ie": 452,
	"./en-ie.js": 452,
	"./en-il": 453,
	"./en-il.js": 453,
	"./en-nz": 454,
	"./en-nz.js": 454,
	"./eo": 455,
	"./eo.js": 455,
	"./es": 456,
	"./es-do": 457,
	"./es-do.js": 457,
	"./es-us": 458,
	"./es-us.js": 458,
	"./es.js": 456,
	"./et": 459,
	"./et.js": 459,
	"./eu": 460,
	"./eu.js": 460,
	"./fa": 461,
	"./fa.js": 461,
	"./fi": 462,
	"./fi.js": 462,
	"./fo": 463,
	"./fo.js": 463,
	"./fr": 464,
	"./fr-ca": 465,
	"./fr-ca.js": 465,
	"./fr-ch": 466,
	"./fr-ch.js": 466,
	"./fr.js": 464,
	"./fy": 467,
	"./fy.js": 467,
	"./gd": 468,
	"./gd.js": 468,
	"./gl": 469,
	"./gl.js": 469,
	"./gom-latn": 470,
	"./gom-latn.js": 470,
	"./gu": 471,
	"./gu.js": 471,
	"./he": 472,
	"./he.js": 472,
	"./hi": 473,
	"./hi.js": 473,
	"./hr": 474,
	"./hr.js": 474,
	"./hu": 475,
	"./hu.js": 475,
	"./hy-am": 476,
	"./hy-am.js": 476,
	"./id": 477,
	"./id.js": 477,
	"./is": 478,
	"./is.js": 478,
	"./it": 479,
	"./it.js": 479,
	"./ja": 480,
	"./ja.js": 480,
	"./jv": 481,
	"./jv.js": 481,
	"./ka": 482,
	"./ka.js": 482,
	"./kk": 483,
	"./kk.js": 483,
	"./km": 484,
	"./km.js": 484,
	"./kn": 485,
	"./kn.js": 485,
	"./ko": 486,
	"./ko.js": 486,
	"./ky": 487,
	"./ky.js": 487,
	"./lb": 488,
	"./lb.js": 488,
	"./lo": 489,
	"./lo.js": 489,
	"./lt": 490,
	"./lt.js": 490,
	"./lv": 491,
	"./lv.js": 491,
	"./me": 492,
	"./me.js": 492,
	"./mi": 493,
	"./mi.js": 493,
	"./mk": 494,
	"./mk.js": 494,
	"./ml": 495,
	"./ml.js": 495,
	"./mn": 496,
	"./mn.js": 496,
	"./mr": 497,
	"./mr.js": 497,
	"./ms": 498,
	"./ms-my": 499,
	"./ms-my.js": 499,
	"./ms.js": 498,
	"./mt": 500,
	"./mt.js": 500,
	"./my": 501,
	"./my.js": 501,
	"./nb": 502,
	"./nb.js": 502,
	"./ne": 503,
	"./ne.js": 503,
	"./nl": 504,
	"./nl-be": 505,
	"./nl-be.js": 505,
	"./nl.js": 504,
	"./nn": 506,
	"./nn.js": 506,
	"./pa-in": 507,
	"./pa-in.js": 507,
	"./pl": 508,
	"./pl.js": 508,
	"./pt": 509,
	"./pt-br": 510,
	"./pt-br.js": 510,
	"./pt.js": 509,
	"./ro": 511,
	"./ro.js": 511,
	"./ru": 512,
	"./ru.js": 512,
	"./sd": 513,
	"./sd.js": 513,
	"./se": 514,
	"./se.js": 514,
	"./si": 515,
	"./si.js": 515,
	"./sk": 516,
	"./sk.js": 516,
	"./sl": 517,
	"./sl.js": 517,
	"./sq": 518,
	"./sq.js": 518,
	"./sr": 519,
	"./sr-cyrl": 520,
	"./sr-cyrl.js": 520,
	"./sr.js": 519,
	"./ss": 521,
	"./ss.js": 521,
	"./sv": 522,
	"./sv.js": 522,
	"./sw": 523,
	"./sw.js": 523,
	"./ta": 524,
	"./ta.js": 524,
	"./te": 525,
	"./te.js": 525,
	"./tet": 526,
	"./tet.js": 526,
	"./tg": 527,
	"./tg.js": 527,
	"./th": 528,
	"./th.js": 528,
	"./tl-ph": 529,
	"./tl-ph.js": 529,
	"./tlh": 530,
	"./tlh.js": 530,
	"./tr": 531,
	"./tr.js": 531,
	"./tzl": 532,
	"./tzl.js": 532,
	"./tzm": 533,
	"./tzm-latn": 534,
	"./tzm-latn.js": 534,
	"./tzm.js": 533,
	"./ug-cn": 535,
	"./ug-cn.js": 535,
	"./uk": 536,
	"./uk.js": 536,
	"./ur": 537,
	"./ur.js": 537,
	"./uz": 538,
	"./uz-latn": 539,
	"./uz-latn.js": 539,
	"./uz.js": 538,
	"./vi": 540,
	"./vi.js": 540,
	"./x-pseudo": 541,
	"./x-pseudo.js": 541,
	"./yo": 542,
	"./yo.js": 542,
	"./zh-cn": 543,
	"./zh-cn.js": 543,
	"./zh-hk": 544,
	"./zh-hk.js": 544,
	"./zh-tw": 545,
	"./zh-tw.js": 545
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 949;

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(57);
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



var MoneyPipe = (function () {
    function MoneyPipe(setting) {
        var _this = this;
        this.setting = setting;
        this.app = {};
        this.setting.load().then(function (x) {
            if (x)
                _this.app = x.settings;
        });
    }
    MoneyPipe.prototype.ionViewDidLoad = function () {
    };
    MoneyPipe.prototype.transform = function (value, app) {
        var x = app || this.setting.all.settings;
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */](x.currency).transform(value, x.currency, true, '1.' + x.number_of_decimals + '-' + x.number_of_decimals);
    };
    return MoneyPipe;
}());
MoneyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'money',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["i" /* SettingsProvider */]])
], MoneyPipe);

//# sourceMappingURL=money.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_rate__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rate_rate__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















//import { LocalNotifications } from '@ionic-native/local-notifications';
var MyApp = (function () {
    function MyApp(network, alertCtrl, storage, rate, push, appRate, fcm, _user, oneSignal, notif, platform, /*private config: Config,*/ settings, translate, woo, statusBar, splashScreen) {
        var _this = this;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.rate = rate;
        this.push = push;
        this.appRate = appRate;
        this.fcm = fcm;
        this._user = _user;
        this.oneSignal = oneSignal;
        this.notif = notif;
        this.platform = platform;
        this.settings = settings;
        this.translate = translate;
        this.woo = woo;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'TabsPage';
        this.flagrate = 0;
        this.rate1 = 0;
        this.app = {};
        this.platform.ready().then(function () {
            _this.listenConnection();
            _this.statusBar.styleDefault();
            // this.storage1=this.storage;
            //   this.splashScreen.hide();
            _this.fcm.onNotification().subscribe(function (data) {
                console.log("", data);
                if (data.wasTapped == false) {
                    // if application open, show popup
                    var confirmAlert = _this.alertCtrl.create({
                        title: data.title,
                        message: data.body,
                        buttons: [{
                                text: 'Ignore',
                                role: 'cancel'
                            },
                        ]
                    });
                    confirmAlert.present();
                }
            });
            _this.pushSetup();
            _this.rate.load();
            _this.appRate.preferences.storeAppURL = {
                ios: '1130791321',
                android: 'market://details?id=com.maks.babyneeds',
                windows: 'ms-windows-store://review/?ProductId=< Store_ID >',
            };
            _this.storage1 = storage;
            _this.appRate.preferences.callbacks = {
                onRateDialogShow: function (callback) {
                    console.log('rate dialog shown!');
                },
                onButtonClicked: function (buttonIndex) {
                    console.log('Selected index: -> ' + buttonIndex);
                    if (buttonIndex == 3) {
                        this.flagrate = 1;
                        //  this.storage1.set('yourKey',this.flagrate);
                        // this.storage.Set();
                        // ts.rate.rate=this.flagrate;
                        //  console.log('111111Selected index: -> ' +   this.rate.rate);
                        // this.apprate1(this.flagrate);
                    }
                }
            };
            _this.storage.get('yourStorageKey')
                .then(function (data) {
                console.log('your data => ', data);
                if (data > 0) {
                    console.log('your data if => ', data);
                    //this.storage.set('yourStorageKey',this.rate1);
                    _this.rate1 = data + 1;
                    _this.storage.set('yourStorageKey', _this.rate1);
                }
                else {
                    _this.rate1 = 1;
                    _this.storage.set('yourStorageKey', _this.rate1);
                }
            });
            _this.storage.get('yourStorageKey')
                .then(function (data) {
                console.log('your data abhi => ', data);
                _this.flag = data;
                if (_this.flag == 3) {
                    _this.flagrate = _this.rate.all;
                    console.log('flagrate', _this.flagrate);
                    _this.appRate.promptForRating(true);
                }
            });
        });
        this.user = this._user.user;
        this.pages = [
            { title: 'home',
                Component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
            { title: 'Login',
                Component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.ionViewDidLoad = function () {
    };
    MyApp.prototype.ionViewDidEnter = function () {
    };
    MyApp.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(this.app && this.app.language !== undefined ? this.app.language : __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* App */].defaultLang);
        if (this.app && this.app.language !== undefined)
            this.translate.use(this.app.language);
        else
            this.translate.use(__WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* App */].defaultLang);
        // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        // });
    };
    MyApp.prototype.OnHomeClicked = function () {
        this.nav.setRoot(this.rootPage);
    };
    // public goTo(page,params):void{
    // 	this.nav.setRoot(page, {params: params});
    // }
    MyApp.prototype.apprate1 = function (rate) {
        console.log('apprate1', rate);
    };
    MyApp.prototype.pushSetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '1063542947486'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('registration').subscribe(function (data) {
            console.log("device registered -> ", data);
            //  this.saveToken(data.registrationId);
            var topic = "alerts";
            pushObject.subscribe(topic).then(function (res) {
                console.log("subscribed to topic: ", res);
            });
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('Received a notification', data);
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        },
                    ]
                });
                confirmAlert.present();
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                // this.nav.push(DetailsPage, { message: data.message });
                console.log('Push notification clicked');
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp.prototype.goTo = function (page, params) {
        this.nav.push(page, { params: params });
    };
    MyApp.prototype.logout = function () {
        this.user = {};
        this._user.logout();
        this.ionViewDidEnter();
    };
    MyApp.prototype.rateMe = function () {
        //   this.appRate.preferences.storeAppURL = {
        //   ios: '< my_app_id >',
        //   android: 'market://details?id=com.maks.babyneeds',
        //   windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
        //   };
        //   this.appRate.promptForRating(true); 
        // }
    };
    MyApp.prototype.listenConnection = function () {
        var _this = this;
        this.network.onDisconnect()
            .subscribe(function () {
            _this.showAlert();
        });
    };
    MyApp.prototype.showAlert = function () {
        // omitted;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/maks/abhilash/application/Babyneeds/app/src/app/app.html"*/'\n<ion-menu [content]="content">\n    <ion-header>\n    \n      <ion-navbar color="primary" >\n        <ion-title>Menu</ion-title>\n      \n            \n       \n       \n\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content >\n\n        <ion-item no-padding color="primary" *ngIf="_user.user.fname" >\n            \n              <div align="center">	\n            <img align-items="center" src="assets/img/logo/ic_launcher.png"></div>\n              \n            <h3 style="font-size:14px; text-align:center; color:#ffff">{{user.fname}}</h3>\n            <h3 style="font-size:14px; text-align:center ; color:#ffff" >{{user.user_email}}</h3>\n            <!-- <p style="font-size:10px; text-align:center">{{ \'EDIT PROFILE\' | translate}}</p> -->\n            <!-- <ion-avatar item-end>\n              <img src="assets/img/miscellaneous/user.png">\n            </ion-avatar> -->\n          </ion-item>\n      \n      \n          <ion-item no-padding  color="primary" *ngIf="!_user.user.fname">\n            \n              <div align="center">		<img align-items="center" src="assets/img/logo/ic_launcher.png"></div>\n              \n            <h3 style="font-size:14px; text-align:center; color:#ffff"></h3>\n            <h3 style="font-size:14px; text-align:center ; color:#ffff" >Welcome Guest</h3>\n          </ion-item>\n      \n      \n\n    <ion-list>\n        <button menuClose ion-item (click)="OnHomeClicked()">\n        <ion-label>Home</ion-label>\n      </button>\n      <button menuClose ion-item (click)="goTo(\'ProductGridPage\',\'New Arrival\')">\n          \n          <ion-label>New Arrivals </ion-label>\n      </button>\n      <button menuClose ion-item  (click)="goTo(\'CategoriesPage\',\'0\')">\n         \n          <ion-label>Shop by Brand</ion-label>\n      </button>\n\n      <!--<button ion-item (click)="goTo()">\n          \n           <ion-label>Categories</ion-label>\n       </button>-->\n       <button menuClose ion-item  (click)="goTo(\'MyorderPage\',\'0\')"> \n        <ion-label>My Orders</ion-label>\n       </button>\n    \n    </ion-list>\n    <hr>\n    <ion-list>\n        <button menuClose ion-item (click)="goTo(\'ServicesPage\',\'0\')">\n        <ion-label>Services</ion-label>\n      </button>\n      <button menuClose ion-item (click)="goTo(\'AboutusPage\',\'0\')">\n          <ion-label>About Us</ion-label>\n      </button>\n      <button menuClose ion-item (click)="goTo(\'FeedbackPage\',\'0\')">\n          <ion-label>Feedback</ion-label>\n      </button>\n      <button  *ngIf="_user.user.fname" menuClose ion-item (click)="logout()">\n        <ion-label>Log out</ion-label>\n      </button>\n\n     \n    </ion-list>\n    <!-- <button menuClose ion-item (click)="rateMe()">Rate Me</button> -->\n    </ion-content>\n    </ion-menu>\n    <ion-nav [root]="rootPage" type="overlay"  #content swipeBackEnabled="false"></ion-nav> \n\n\n\n\n'/*ion-inline-end:"/home/maks/abhilash/application/Babyneeds/app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_14__providers_rate_rate__["a" /* RateProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["k" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["e" /* NotifProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["i" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["m" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[556]);
//# sourceMappingURL=main.js.map