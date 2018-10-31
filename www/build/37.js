webpackJsonp([37],{

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus__ = __webpack_require__(989);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutusPageModule = (function () {
    function AboutusPageModule() {
    }
    return AboutusPageModule;
}());
AboutusPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]),
        ],
    })
], AboutusPageModule);

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    return AboutusPage;
}());
AboutusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aboutus',template:/*ion-inline-start:"/home/maks/abhilash/application/ionstore2/app/src/pages/aboutus/aboutus.html"*/'<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!-- <p style="font-size:18px; text-align:left"> <strong>About Us</strong></p><br><br>\n<p style="font-size:15px; text-align:left">  </p> -->\n<h2>About us</h2>\n <P STYLE="margin-bottom: 0.14in">  <br>    We are a Noida\nbased firm, established in 2015, having our office in Sector 100. Our\npolicy is to supply Baby products only to parents residing in Noida\nregion. We do not ship items outside Noida. Our aim is to provide\nBaby\'s Essential items, within 2 hours, when you need them the most.</P>\n<P STYLE="margin-bottom: 0.14in"><B>Returns/Exchange policy</B> -\nWhen you buy things, you may have to return the items sometimes. Do\nnot worry, you do not have to wait for days to return items. Simply\ncall/Whatsapp on +91-9891850708 &amp; we will return those items\nwithin the same time, we deliver the items.</P>\n<P STYLE="margin-bottom: 0.14in"><B>Our Exchange/Returns Conditions</B>:</P>\n<P STYLE="margin-bottom: 0.14in">1. Baby Food Products &amp;\nCosmetics(Creams, Oil, Shampoo, etc..) are not returnable.</P>\n<P STYLE="margin-bottom: 0.14in">2. Items where packing is opened,\ndestroyed, will not be returned.</P>\n<P STYLE="margin-bottom: 0.14in">3. Partially used items will not be\nexchanged/returned.</P>\n<P STYLE="margin-bottom: 0.14in">4. You must call us within 5 days\nfrom the date of delivery(excluding delivery date) to return the\nproduct. No returns or exchanges will be entertained after 5 days.</P>\n<P STYLE="margin-bottom: 0.14in">5.Nappies &amp; Diapers cannot be\nexchanged after delivery. Please carefully review the size when the\ndelivery boy comes to your home.</P>\n<P STYLE="margin-bottom: 0.14in">6. Items like Baby Toys, Baby\nGear(Strollers, Bather\'s etc) are not returnable. They are guaranteed\nfor free replacement for any defectives you may find. In case the\nsame model is not available, we will do our best to get you the\nsimilar item, but items are not returnable.</P>\n<P STYLE="margin-bottom: 0.14in">7. Items with offers such as Pack of\n2, etc.. all items will have to be returned. Any one packet/package\nif used or opened, then the whole items cannot be returned.</P>\n<P STYLE="margin-bottom: 0.14in">8. If you pay using PayUMoney, a\ncharge of 4% will be deducted from the total refund amount.</P>\n<P STYLE="margin-bottom: 0.14in"><BR><BR>\n</P>\n<P STYLE="margin-bottom: 0.14in"><IMG SRC="assets/img/logo/i_5d7f87e1962256d8_html_ed09a46c.jpg" NAME="Picture 0" ALIGN=BOTTOM WIDTH=208 HEIGHT=208 BORDER=0>\n                                   \n<IMG SRC="assets/img/logo/i_5d7f87e1962256d8_html_4caf1007.jpg" NAME="Picture 1" ALIGN=BOTTOM WIDTH=212 HEIGHT=209 BORDER=0></P>\n<P STYLE="margin-bottom: 0.14in">Simply call us on +91-9891850708    \n                 Delivery boy will come to return/exchange items     \n</P>\n<h2>Contact Us</h2>\n<P STYLE="margin-bottom: 0.14in">   Simply\ncall/Whatsapp us on +91-9891850708 or \n</P>\n<P STYLE="margin-bottom: 0.14in">Email us on\nforyourcare@babyneeds.co.in with your name, phone number &amp;\nquery/concern. We will respond within 24 hours of your email or call.</P>\n<P STYLE="margin-bottom: 0.14in"><B>Credit/EMI Policy</B> -\nUnfortunately we do not have any Credit or EMI policy.</P>\n<!-- <P STYLE="margin-bottom: 0.14in"><h2>Privacy Policy</h2> -\n</P> -->\n<h3>Content Monitoring</h3>\n<P STYLE="margin-bottom: 0.14in"> BabyNeeds\nreserves every right to monitor every content posted on its Website,\nApp, Facebook, Instagram or any other public domain. We have\nexclusive right to delete, report any content which is derogatory in\nnature towards BabyNeeds, or any of the partners of BabyNeeds. Any\nadult content such as Child abuse, porn activities are strictly\nprohibited on our website, app etc. Such content will be dealt under\nthe Indian Penal Code provisions &amp; other laws applicable from\ntime to time.</P>\n<P STYLE="margin-bottom: 0.14in"><B>Customer Data:</B> It is our\nendeavour to safeguard all customer information such as Phone\nnumbers, addresses, etc.. Such data will not be sold to any third\nparty. However such data may be used by BabyNeeds for its own\npromotional purposes only.</P>\n<P STYLE="margin-bottom: 0.14in"><B>Website/App Content</B>: All\ncontents of the website &amp; app are protected by relevant laws\napplicable in India. Any attempt to copy or recreate such content\nwill be strictly dealt with.</P>\n<P STYLE="margin-bottom: 0.14in">We may review our privacy policy\nfrom time to time based on changes in Law, &amp; other conditions.\nThe applicability of such policies will be applicable from the day\nthey are posted on the website/app.</P>\n<P STYLE="margin-bottom: 0.14in">FAQ\'s - \n</P>\n<P STYLE="margin-bottom: 0.14in">1. Delivery Charges - Delivery is\nalways free. Only condition is of minimum order Rs 100.00</P>\n<P STYLE="margin-bottom: 0.14in">2. Out of Stock - You will come to\nknow if the item is stock during checkout. In a case where order is\naccepted, we will call you to check if you can wait for the items to\nreturn in stock. Else you can cancel your order.</P>\n<P STYLE="margin-bottom: 0.14in">3. Cash on Delivery - We have COD\nfacility only. Additionally you can pay through PayUMoney or deposit\nin our Bank account if you wish so. There is no compulsion to pay\nonline.</P>\n<P STYLE="margin-bottom: 0.14in">Account Details:</P>\n<P STYLE="margin-bottom: 0.14in">Bank Name : United Bank of India</P>\n<P STYLE="margin-bottom: 0.14in">A/c no: 1483050012926</P>\n<P STYLE="margin-bottom: 0.14in">IFSC Code : UTBI0SCN560</P>\n<P STYLE="margin-bottom: 0.14in">4. Additional Charges/Taxes - All\nitems are inclusive of all charges, taxes etc.. Please pay according\nto MRP/Invoice amount only. \n</P>\n<P STYLE="margin-bottom: 0.14in">5. Tips - Please do not give tips to\nour delivery boys.                         \n</P>\n<P STYLE="margin-bottom: 0.14in">Our FB page -\n<a href="http://www.facebook.com/babyneedsindia">www.facebook.com/babyneedsindia</a></P>\n<P STYLE="margin-bottom: 0.14in">Instagram -\n<a href="http://www.instagram.com/babyneedsindia">www.instagram.com/babyneedsindia</a></P>\n\n\n<P STYLE="margin-bottom: 0.14in">App designed and developed by Makslab.com.\n</P>\n</ion-content>\n'/*ion-inline-end:"/home/maks/abhilash/application/ionstore2/app/src/pages/aboutus/aboutus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
], AboutusPage);

//# sourceMappingURL=aboutus.js.map

/***/ })

});
//# sourceMappingURL=37.js.map