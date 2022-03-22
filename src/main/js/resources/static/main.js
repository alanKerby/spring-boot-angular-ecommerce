(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding-top: 65px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-ecommerce></app-ecommerce>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ecommerce/products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _ecommerce_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ecommerce/footer/footer.component */ "./src/app/ecommerce/footer/footer.component.ts");
/* harmony import */ var _ecommerce_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ecommerce/header/header.component */ "./src/app/ecommerce/header/header.component.ts");
/* harmony import */ var _ecommerce_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ecommerce/homepage/homepage.component */ "./src/app/ecommerce/homepage/homepage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["EcommerceComponent"],
                _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _ecommerce_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _ecommerce_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _ecommerce_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _ecommerce_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"] },
                    { path: 'product/:id', component: _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
                ])
            ],
            providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_8__["EcommerceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.css":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{ background:#F97300;}\n/*.navbar-brand{ background:#F97300;}*/\n\n"

/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.html":
/*!****************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.ts ***!
  \**************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
    }
    EcommerceComponent.prototype.ngOnInit = function () {
    };
    EcommerceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! ./ecommerce.component.html */ "./src/app/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./ecommerce.component.css */ "./src/app/ecommerce/ecommerce.component.css")]
        })
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ecommerce/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #ccc\">\n    <h1>{{title}}</h1>\n</div>\n\n<footer class=\"site-footer border-top\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 mb-5 mb-lg-0\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3 class=\"footer-heading mb-4\">Navigation</h3>\n                    </div>\n                    <div class=\"col-md-6 col-lg-4\">\n                        <ul class=\"list-unstyled\">\n                            <li><a href=\"#\">Womens Shoes</a></li>\n                            <li><a href=\"#\">Womens Boots</a></li>\n                            <li><a href=\"#\">Womens Sandals</a></li>\n                            <li><a href=\"#\">Mens Shoes</a></li>\n                            <li><a href=\"#\">Mens Boots</a></li>\n                            <li><a href=\"#\">Mens Sandals</a></li>\n                            <li><a href=\"#\">Mens Shoes</a></li>\n                            <li><a href=\"#\">Mens Shoes</a></li>\n                            <li><a href=\"#\">Mens Shoes</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6 col-lg-4\">\n                        <ul class=\"list-unstyled\">\n                            <li><a href=\"#\">Store Locator</a></li>\n                            <li><a href=\"#\">About Us</a></li>\n                            <li><a href=\"#\">Gift Cards</a></li>\n                            <li><a href=\"#\">Terms and Conditions</a></li>\n                            <li><a href=\"#\">Newsletter Signup</a></li>\n                            <li><a href=\"#\">Careers</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6 col-lg-4\">\n                        <ul class=\"list-unstyled\">\n                            <li><a href=\"#\">Customer Service</a></li>\n                            <li><a href=\"#\">Track Order</a></li>\n                            <li><a href=\"#\">Delivery and Collection</a></li>\n                            <li><a href=\"#\">Fit Guarantee</a></li>\n                            <li><a href=\"#\">Returns and Refunds</a></li>\n                            <li><a href=\"#\">Contact Us</a></li>\n                            <li><a href=\"#\">Shoe Size Chart</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3 mb-4 mb-lg-0\">\n                <h3 class=\"footer-heading mb-4\">Promo</h3>\n                <a href=\"#\" class=\"block-6\">\n                    <img src=\"assets/images/hero_1.jpg\" alt=\"Image placeholder\" class=\"img-fluid rounded mb-4\">\n                    <h3 class=\"font-weight-light  mb-0\">Get 10% Off Your First Order</h3>\n                </a>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"block-5 mb-5\">\n                    <h3 class=\"footer-heading mb-4\">Contact Info</h3>\n                    <ul class=\"list-unstyled\">\n                        <li class=\"phone\"><a href=\"tel://23923929210\">0345 845 356</a></li>\n                        <li class=\"email\">customerservice@goldenshoe.com</li>\n                    </ul>\n                </div>\n\n                <div class=\"block-7\">\n                    <form action=\"#\" method=\"post\">\n                        <label for=\"email_subscribe\" class=\"footer-heading\">Subscribe</label>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control py-4\" id=\"email_subscribe\" placeholder=\"Email\">\n                            <input type=\"submit\" class=\"btn btn-sm btn-primary\" value=\"Send\">\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/ecommerce/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FooterComponent.prototype, "title", void 0);
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ecommerce/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ecommerce/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ecommerce/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"site-navbar\" role=\"banner\">\n    <div class=\"site-navbar-top\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n\n                <div class=\"col-6 col-md-4 order-2 order-md-1 site-search-icon text-left\">\n                    <form action=\"\" class=\"site-block-top-search\">\n                        <span class=\"icon icon-search2\"></span>\n                        <input type=\"text\" class=\"form-control border-0\" placeholder=\"Search\">\n                    </form>\n                </div>\n\n                <div class=\"col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center\">\n                    <div class=\"site-logo\">\n                        <a routerLink=\"\" class=\"js-logo-clone\">Golden Shoe</a>\n                    </div>\n                </div>\n\n                <div class=\"col-6 col-md-4 order-3 order-md-3 text-right\">\n                    <div class=\"site-top-icons\">\n                        <ul>\n                            <li><a href=\"#\"><span class=\"icon icon-person\"></span></a></li>\n                            <li><a href=\"#\"><span class=\"icon icon-heart-o\"></span></a></li>\n                            <li>\n                                <a routerLink=\"cart\" class=\"site-cart\">\n                                    <span class=\"icon icon-shopping_cart\"></span>\n                                    <span class=\"count\">{{cartNum}}</span>\n                                </a>\n                            </li>\n                            <li class=\"d-inline-block d-md-none ml-md-0\"><a href=\"#\" class=\"site-menu-toggle js-menu-toggle\"><span class=\"icon-menu\"></span></a></li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <nav class=\"site-navigation text-right text-md-center\" role=\"navigation\">\n        <div class=\"container\">\n            <ul class=\"site-menu js-clone-nav d-none d-md-block\">\n                <li class=\"has-children active\">\n                    <a routerLink=\"\">Home</a>\n                    <ul class=\"dropdown\">\n                        <li><a href=\"#\">Menu One</a></li>\n                        <li><a href=\"#\">Menu Two</a></li>\n                        <li><a href=\"#\">Menu Three</a></li>\n                        <li class=\"has-children\">\n                            <a href=\"#\">Sub Menu</a>\n                            <ul class=\"dropdown\">\n                                <li><a href=\"#\">Menu One</a></li>\n                                <li><a href=\"#\">Menu Two</a></li>\n                                <li><a href=\"#\">Menu Three</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"has-children\">\n                    <a href=\"#\">About</a>\n                    <ul class=\"dropdown\">\n                        <li><a href=\"#\">Menu One</a></li>\n                        <li><a href=\"#\">Menu Two</a></li>\n                        <li><a href=\"#\">Menu Three</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"#\">Shop</a></li>\n                <li><a href=\"#\">Catalogue</a></li>\n                <li><a href=\"#\">New Arrivals</a></li>\n                <li><a href=\"#\">Contact</a></li>\n            </ul>\n        </div>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/ecommerce/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.cartNum = 0;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeaderComponent.prototype, "cartNum", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ecommerce/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ecommerce/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/homepage/homepage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ecommerce/homepage/homepage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ecommerce/homepage/homepage.component.html":
/*!************************************************************!*\
  !*** ./src/app/ecommerce/homepage/homepage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"site-blocks-cover\" style=\"background-image: url(assets/images/hero_1.jpg);\" data-aos=\"fade\">\n    <div class=\"container\">\n        <div class=\"row align-items-start align-items-md-center justify-content-end\">\n            <div class=\"col-md-5 text-center text-md-left pt-5 pt-md-0\">\n                <h1 class=\"mb-2\">Step-Up Your Style With Golden Shoe</h1>\n                <div class=\"intro-text text-center text-md-left\">\n                    <p class=\"mb-4\">For the latest fashion and classic styles we've got you covered</p>\n                    <p>\n                        <a href=\"#\" class=\"btn btn-sm btn-primary\">Shop Now</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section site-section-sm site-blocks-1\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4\" data-aos=\"fade-up\" data-aos-delay=\"\">\n                <div class=\"icon mr-4 align-self-start\">\n                    <span class=\"icon-truck\"></span>\n                </div>\n                <div class=\"text\">\n                    <h2 class=\"text-uppercase\">Free Shipping</h2>\n                    <p>Fast and free delivery to your door</p>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                <div class=\"icon mr-4 align-self-start\">\n                    <span class=\"icon-refresh2\"></span>\n                </div>\n                <div class=\"text\">\n                    <h2 class=\"text-uppercase\">Free Returns</h2>\n                    <p>Don't like your purchase for any reason? No problem with free returns</p>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4\" data-aos=\"fade-up\" data-aos-delay=\"200\">\n                <div class=\"icon mr-4 align-self-start\">\n                    <span class=\"icon-help\"></span>\n                </div>\n                <div class=\"text\">\n                    <h2 class=\"text-uppercase\">Customer Support</h2>\n                    <p>Contact our friendly support team for any queries</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section site-blocks-2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0\" data-aos=\"fade\" data-aos-delay=\"\">\n                <a class=\"block-2-item\" href=\"#\">\n                    <figure class=\"image\">\n                        <img src=\"assets/images/women.jpg\" alt=\"\" class=\"img-fluid\">\n                    </figure>\n                    <div class=\"text\">\n                        <span class=\"text-uppercase\">Collections</span>\n                        <h3>Women</h3>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0\" data-aos=\"fade\" data-aos-delay=\"100\">\n                <a class=\"block-2-item\" href=\"#\">\n                    <figure class=\"image\">\n                        <img src=\"assets/images/children.jpg\" alt=\"\" class=\"img-fluid\">\n                    </figure>\n                    <div class=\"text\">\n                        <span class=\"text-uppercase\">Collections</span>\n                        <h3>Children</h3>\n                    </div>\n                </a>\n            </div>\n            <div class=\"col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0\" data-aos=\"fade\" data-aos-delay=\"200\">\n                <a class=\"block-2-item\" href=\"#\">\n                    <figure class=\"image\">\n                        <img src=\"assets/images/men.jpg\" alt=\"\" class=\"img-fluid\">\n                    </figure>\n                    <div class=\"text\">\n                        <span class=\"text-uppercase\">Collections</span>\n                        <h3>Men</h3>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"site-section block-3 site-blocks-2 bg-light\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-7 site-section-heading text-center pt-4\">\n                <h2>Featured Products</h2>\n            </div>\n        </div>\n        <div class=\"row\"  *ngFor=\"let order of productOrders\">\n            <div class=\"col-md-12\">\n                <div class=\"nonloop-block-3 owl-carousel\">\n                    <div class=\"item\">\n                        <div class=\"block-4 text-center\">\n                            <figure class=\"block-4-image\">\n                                <img  [routerLink]=\"['/product', order.product.id]\" src={{order.product.pictureUrl}} alt=\"Image placeholder\" class=\"img-fluid\">\n                            </figure>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ecommerce/homepage/homepage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/homepage/homepage.component.ts ***!
  \**********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.productOrders = [];
        this.products = [];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.productOrders = [];
        this.loadProducts();
    };
    HomepageComponent.prototype.loadProducts = function () {
        var _this = this;
        this.ecommerceService.getAllProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.products.forEach(function (product) {
                _this.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrder"](product, 0));
            });
        }, function (error) { return console.log(error); });
    };
    HomepageComponent.prototype.reset = function () {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/ecommerce/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/ecommerce/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product-order.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/models/product-order.model.ts ***!
  \*********************************************************/
/*! exports provided: ProductOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrder", function() { return ProductOrder; });
var ProductOrder = /** @class */ (function () {
    function ProductOrder(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    return ProductOrder;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product-orders.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/models/product-orders.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrders", function() { return ProductOrders; });
var ProductOrders = /** @class */ (function () {
    function ProductOrders() {
        this.productOrders = [];
    }
    return ProductOrders;
}());



/***/ }),

/***/ "./src/app/ecommerce/products/products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-0 {\n    padding-right: 0;\n    padding-left: 1;\n}\n"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.html":
/*!************************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [cartNum]=\"cart\"></app-header>\n<div class=\"row\" *ngIf=\"singleProduct\">\n    <div class=\"col-lg-4 col-md-12 text-black text-center\">\n        <div>\n            <br>\n            <h2>{{singleProduct.name}}</h2>\n            <h3>£{{singleProduct.price}}</h3>\n        </div>\n        <br>\n        <br>\n        <div class=\"order-md-2\">\n            <h4 class=\"text-primary\">Select Size</h4>\n            <div>\n                <button type=\"button\" class=\"btn btn-sm btn-light mb-1 mr-1\">5</button>\n                <button type=\"button\" class=\"btn btn-sm btn-light mb-1 mr-1\">6</button>\n                <button type=\"button\" class=\"btn btn-sm btn-light mb-1 mr-1\">7</button>\n                <button type=\"button\" class=\"btn btn-sm btn-light mb-1 mr-1\">8</button>\n                <button type=\"button\" class=\"btn btn-sm btn-light mb-1 mr-1\">9</button>\n                <button type=\"button\" class=\"btn btn-sm btn-light mb-1 mr-1\">10</button>\n            </div>\n        </div>\n        <br>\n        <br>\n        <button class=\"btn btn-primary\" (click)=\"addToCart()\"\n                [disabled]=\"singleProduct.stock <= 0\">{{cartButtonSelector(singleProduct)}}\n        </button>\n    </div>\n    <div class=\"col-lg-8 col-md-12 order-md-1\">\n        <a href=\"#\"><img class=\"img-fluid\" src={{singleProduct.pictureUrl}} alt=\"\"></a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ecommerceService, route) {
        this.ecommerceService = ecommerceService;
        this.route = route;
        this.productOrders = [];
        this.products = [];
        this.productSelected = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
        this.getRouteId();
        this.getProduct();
        this.cart = 0;
    };
    ProductsComponent.prototype.cartButtonSelector = function (product) {
        if (product.stock > 0) {
            return "add to cart";
        }
        else {
            return "out of stock";
        }
    };
    ProductsComponent.prototype.addToCart = function () {
        if (this.singleProduct.stock > 0) {
            this.cart++;
            this.singleProduct.stock--;
        }
    };
    ProductsComponent.prototype.getRouteId = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.routeID = id;
        });
    };
    ProductsComponent.prototype.getProduct = function () {
        var _this = this;
        this.ecommerceService.getProduct(this.routeID)
            .subscribe(function (product) { return _this.singleProduct = product; });
        this.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_1__["ProductOrder"](this.singleProduct, 0));
    };
    ProductsComponent.prototype.loadProducts = function () {
        var _this = this;
        this.ecommerceService.getAllProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.products.forEach(function (product) {
                _this.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_1__["ProductOrder"](product, 0));
            });
        }, function (error) { return console.log(error); });
    };
    ProductsComponent.prototype.loadOrders = function () {
        var _this = this;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.shoppingCartOrders = _this.ecommerceService.ProductOrders;
        });
    };
    ProductsComponent.prototype.reset = function () {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/ecommerce/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/ecommerce/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/services/EcommerceService.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/services/EcommerceService.ts ***!
  \********************************************************/
/*! exports provided: EcommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceService", function() { return EcommerceService; });
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/ecommerce/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EcommerceService = /** @class */ (function () {
    function EcommerceService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.productsUrl = "/api/products";
        this.ordersUrl = "/api/orders";
        this.singleProductUrl = 'api/products/readById';
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_1__["ProductOrders"]();
        this.ordersSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.OrdersChanged = this.ordersSubject.asObservable();
    }
    EcommerceService.prototype.getProduct = function (id) {
        var _this = this;
        var url = this.singleProductUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("fetched product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getProduct id=" + id)));
    };
    EcommerceService.prototype.log = function (message) {
        this.messageService.add("ProductService: " + message);
    };
    EcommerceService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    EcommerceService.prototype.getAllProducts = function () {
        return this.http.get(this.productsUrl);
    };
    EcommerceService.prototype.saveOrder = function (order) {
        return this.http.post(this.ordersUrl, order);
    };
    Object.defineProperty(EcommerceService.prototype, "ProductOrders", {
        get: function () {
            return this.orders;
        },
        enumerable: true,
        configurable: true
    });
    EcommerceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], EcommerceService);
    return EcommerceService;
}());



/***/ }),

/***/ "./src/app/ecommerce/services/message.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/services/message.service.ts ***!
  \*******************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alk/golden-shoe-projects/spring-boot-angular-alan/src/main/js/ecommerce/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map