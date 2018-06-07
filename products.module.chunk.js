webpackJsonp(["products.module"],{

/***/ "./node_modules/rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./src/app/products/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (sessionStorage.getItem('isLoggedIn') === 'true')
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/products/cart/Cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart() {
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/products/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ".panelpos{\r\n    position: relative; top: 150px; left: 380px; width: 46%;\r\n}\r\n.center{\r\n    text-align: center;\r\n}\r\n.tableheadercolor{\r\n    color: blue;\r\n}\r\n.paymentpanelpos{\r\n    position: relative; \r\n    top: 150px; \r\n    left: 380px; \r\n    text-align: center; \r\n    width: 43%;\r\n}"

/***/ }),

/***/ "./src/app/products/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"submit\" class=\"panel panel-primary panelpos\">\n  <div class=\"panel-heading\">{{pageTitle}}</div>\n  <div class=\"panel-body\">\n    <table class=\"table\" *ngIf=\"selectedProducts && selectedProducts.length\" style=\"margin-top: 0px; margin-left: 0px;\">\n      <thead>\n        <tr class=\"tableheadercolor\">\n          <th class=\"center\">Product</th>\n          <th class=\"center\">Quantity</th>\n          <th class=\"center\">Price</th>\n          <th class=\"center\">Total Price</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of selectedProducts; let i=index\">\n          <td class=\"center\">{{product.productName}}</td>\n          <td class=\"center\">\n            <input type=\"number\" id=\"quant\" class=\"\" [(ngModel)]=\"product.quantity\" \n              onkeypress=\"return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >=48 && event.charCode<=57\"\n              min=\"1\" max=\"100\" (change)=\"updateCart(product)\">\n          </td>\n          <td class=\"center\">{{product.price | currency:'INR':'symbol':'1.2-2'}}</td>\n          <td class=\"center\">{{product.totalPrice | currency:'INR':'symbol':'1.2-2'}}</td>\n          <td> \n            <a (click)=remove(i)>\n              <span title=\"Delete\" class=\"glyphicon glyphicon-trash\"></span>\n            </a>\n          </td>\n        </tr> \n        <tr>\n          <td></td>\n          <td></td>\n          <th class=\"center\">Total</th>\n          <td class=\"center\">\n            <strong>{{grandTotal | currency:'INR':'symbol':'1.2-2'}}</strong>\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBack()\">\n              <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continue Shopping\n            </button>\n          </td>\n          <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkout()\">\n                  Checkout <span class=\"glyphicon glyphicon-play\"></span>\n                </button>\n          </td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"selectedProducts.length <= 0\" class=\"panel-footer\">\n      <a class=\"btn btn-primary\" (click)=\"gotoProducts()\">\n        <i class=\"glyphicon glyphicon-chevron-left\"></i> Go to Products Page\n      </a>\n  </div>\n</div>\n\n<div *ngIf=\"!submit\" class=\"panel panel-primary paymentpanelpos\">\n    <div class=\"panel-heading\">{{pageTitle}}</div>\n    <div class=\"panel-body\" style=\"position:relative;left:-40px;padding:0px;margin:0px\">\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have purchased following items.Thank you for\n        making the payment.\n        <br/>Your order will be shipped soon...\n        <br/>\n        <br/>\n      <table class=\"table\" align=\"center\" *ngIf=\"selectedProducts && selectedProducts.length\" style=\"margin-left: 90px; width: auto; margin-bottom: 0px; margin-right: 0px\">\n        <thead>\n          <tr class=\"tableheadercolor\">\n            <th>Order Id</th>\n            <th>Product</th>\n            <th>Quantity</th>\n            <th class=\"center\">Price</th>\n            <th>Total Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of selectedProducts; let i=index\">\n            <td>{{product.orderId}}</td>\n            <td style=\"width: auto;\">{{product.productName}}</td>\n            <td>{{product.quantity}}</td>\n            <td class=\"center\">{{product.price | currency:'INR':'symbol':'1.2-2'}}</td>\n            <td class=\"center\">{{product.totalPrice | currency:'INR':'symbol':'1.2-2'}}</td>\n          </tr> \n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <th class=\"center\">Total</th>\n            <td class=\"center\">\n              <strong>{{grandTotal | currency:'INR':'symbol':'1.2-2'}}</strong>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"panel-footer\">\n      <a class=\"btn btn-primary\" (click)=\"gotoProducts()\">\n        <i class=\"glyphicon glyphicon-chevron-left\"></i> Go to Products Page\n      </a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/products/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(productService, _route, _router) {
        this.productService = productService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = "My Cart";
        this.selectedProducts = [];
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.grandTotal = 0;
        this.quantity = 0;
        this.submit = true;
        this.selectedProducts = this.productService.selectedProducts;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    }
    CartComponent.prototype.updateCart = function (product) {
        product.totalPrice = product.price * product.quantity;
        this.grandTotal = 0;
        this.quantity = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    };
    CartComponent.prototype.remove = function (index) {
        this.selectedProducts.splice(index, 1);
        this.grandTotal = 0;
        this.quantity = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    };
    CartComponent.prototype.onBack = function () {
        this._router.navigate(['/products', this.selectedProducts]);
    };
    CartComponent.prototype.checkout = function () {
        this.submit = false;
        this.productService.selectedProducts = [];
        sessionStorage.removeItem('selectedProducts');
    };
    CartComponent.prototype.gotoProducts = function () {
        sessionStorage.removeItem('grandTotal');
        sessionStorage.removeItem('selectedItems');
        this._router.navigate(['/products']);
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/products/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/products/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".tablebgcolor{\r\n    background-color: none;\r\n}\r\n.txtsize{\r\n    font-size: 20px;\r\n}\r\n.backbtnpos{\r\n    width: 80px;\r\n}\r\n.hrcolor{\r\n    background-color: #ff0080;\r\n}"

/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container panelpos\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-7 col-xs-offset-3\">\n\t\t\t<div class='panel panel-primary'>\n\t\t\t\t<div class='panel-heading'>{{pageTitle}}</div>\n\t\t\t\t<div class='panel-body'>\n\t\t\t\t\t<table class=\"table table-striped tablebgcolor\" *ngIf = \"product\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align=\"center\"><img [src]='product.imageUrl' [style.width.px]='imageWidth' [style.margin.px]='imageMargin' class='img-thumbnail'/></td>\n\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"txtsize txtcolor\">{{product.productName}}</div>\n\t\t\t\t\t\t\t\t<div>by {{product.manufacturer}}</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<app-rating class=\"ratingcolor\" [rate]='product.rating'></app-rating>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr class=\"hrcolor\">\n\t\t\t\t\t\t\t\t<div>Price: {{product.price}}</div>\n\n\t\t\t\t\t\t\t\t<div>Description: {{product.description}}</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class='panel-footer'>\n\t\t\t\t\t<a class='btn btn-default backbtnpos' (click)='onBack()'>\n\t\t\t\t\t\t<i class='glyphicon glyphicon-chevron-left'></i> Back\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router, productService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.id = 0;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = this.productService.products.filter(function (product) { return product.productId === _this.id; })[0];
    }
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/products/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/products/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-list/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyPipe = /** @class */ (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (value, args) {
        if (args === 'popularity') {
            return value.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return -1;
                }
                else if (a.rating < b.rating) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (args === 'pricelh') {
            return value.sort(function (a, b) {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (args === 'pricehl') {
            return value.sort(function (a, b) {
                if (a.price > b.price) {
                    return -1;
                }
                else if (a.price < b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return value;
    };
    OrderbyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderby'
        })
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "./src/app/products/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = "thead {\r\n\tcolor: #337AB7;\r\n}\r\n.display{\r\n\tdisplay:\"\";\r\n}\r\n.row{\r\n    margin-top:40px;\r\n    padding: 0 10px;\r\n}\r\n.clickable{\r\n    cursor: pointer;   \r\n}\r\n.head-span {\r\n\tmargin-top: -20px;\r\n\tfont-size: 15px;\r\n}\r\n.heading-color {\r\n\tbackground-color: white;\r\n\tcolor: #FF00FF;\r\n}\r\n.dropdown-menu {\r\n\tmin-width: 600px;\r\n}\r\n.dropdown-menu li a {\r\n\tpadding: 5px 15px;\r\n\tfont-weight: 300;\r\n}\r\n.multi-column-dropdown {\r\n\tlist-style: none;\r\n}\r\n@media (max-width: 800px) {\r\n\t.dropdown-menu.multi-column {\r\n\t\tmin-width: 240px !important;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n}\r\n.caret {\r\n\tborder-top:4px solid magenta;\r\n}\r\n.navbarpos{\r\n\tbackground-color: white;\r\n\ttop: 50px; \r\n\twidth:100%\r\n}\r\n.searchboxpos{\r\n\tposition:relative;\r\n\ttop:10px;\r\n}\r\n.cartpos{\r\n\tposition:relative;\r\n\ttop:10px;\r\n\tpadding:8px\r\n}\r\n.carouselpos{\r\n\tposition:relative;\r\n\ttop:65px;\r\n\twidth:100%;\r\n}\r\n.carouselheight{\r\n\theight:350px;\r\n}\r\n.noborder{\r\n\tborder:0;\r\n}\r\n.bgcolor{\r\n\tbackground-color: white;\r\n}\r\n.tabpos{\r\n\twidth: 50%;\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-default navbar-fixed-top navbarpos'>\n\t<div class='container-fluid'>\n\t\t<a class='navbar-brand txtcolor'>{{pageTitle}} <span\n\t\t\tclass=\"glyphicon glyphicon-shopping-cart txtcolor\"></span></a>\n\t\t<div class=\"input-group pull-right col-md-3 searchboxpos\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\" [(ngModel)]=\"listFilter\" (change)=\"searchtext()\">\n\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t<button class=\"btn btn-default\">\n\t\t\t\t\t<i class=\"glyphicon glyphicon-search\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"pull-right txtcolor cartpos\">\n\t\t\t<span class=\"glyphicon glyphicon-shopping-cart\"></span> <a\n\t\t\t\t[routerLink]=\"['cart']\" class=\"txtcolor\">{{selectedItems}}&nbsp;items</a>\n\t\t\t<span>, {{total | currency:'INR':'symbol':'1.2-2'}} </span>\n\t\t</div>\n\t</div>\n</nav>\n\n<br />\n<br />\n<div class=\"container\" class=\"carouselpos\">\n\t<div id=\"carousel-example-generic\" class=\"carousel slide carouselheight\" data-ride=\"carousel\" data-interval=\"3000\">\n\t\t<ol class=\"carousel-indicators\">\n\t\t\t<li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t<li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n\t\t\t<li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n\t\t</ol>\n\t\t<div class=\"carousel-inner\">\n\t\t\t<div class=\"item active\">\n\t\t\t\t<img src=\"assets/imgs/carousel_smart_phone.jpg\" alt=\"First slide\" style=\"min-width:100%;height:350px;\">\n\n\t\t\t</div>\n\t\t\t<div class=\"item carouselimgpos\">\n\t\t\t\t<img src=\"assets/imgs/carousel1.jpg\" alt=\"Second slide\" style=\"min-width:100%;height:350px;\">\n\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<img src=\"assets/imgs/tablet_blue_stylus.jpg\" alt=\"Third slide\" style=\"min-width:100%;height:350px;\">\n\t\t\t</div>\n\t\t</div>\n\t\t<a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span>\n\t\t</a>\n\t\t<a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n\t\t\t<span class=\"glyphicon glyphicon-chevron-right\"></span>\n\t\t</a>\n\t</div>\n\n\t<div class='panel with-nav-tabs panel-primary noborder'>\n\t\t<div class='panel-heading noborder bgcolor'>\n\t\t\t<ul class=\"nav nav-tabs noborder\">\n\t\t\t\t<li class=\"active tabpos\"><a href=\"#tabprimary\" (click)=\"tabselect('tablet')\" data-toggle=\"tab\"><i\n\t\t\t\t\tclass=\"fa fa-tablet fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<div>Tablets</div></a></li>\n\t\t\t\t<li class=\"tabpos\"><a (click)=\"tabselect('mobile')\" href=\"#tabprimary\" data-toggle=\"tab\"><i\n\t\t\t\t\tclass=\"fa fa-mobile fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<div>Mobiles</div></a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class='panel-body'>\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t<div class=\"tab-pane fade in active\" id=\"tabprimary\">\n\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">Filter</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t<span class=\"caret\"></span> <span class=\"sr-only\">Toggle\n\t\t\t\t\t\t\tDropdown</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class=\"dropdown-menu multi-column columns-3 noclose\">\n\t\t\t\t\t\t\t<div class=\"row vdivide\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown noclose\">\n\t\t\t\t\t\t\t\t\t\t<h4>Manufacturer</h4>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let manufac of manufacturers\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"manufac.checked\" (change)=\"filter(manufac)\"> <label>\n\t\t\t\t\t\t\t\t\t\t\t{{manufac.id}} </label></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown noclose\">\n\t\t\t\t\t\t\t\t\t\t<h4>OS</h4>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let ostypes of os\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"ostypes.checked\" (change)=\"filter(ostypes)\">\n\t\t\t\t\t\t\t\t\t\t\t<label> {{ostypes.id}}</label></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown noclose\">\n\t\t\t\t\t\t\t\t\t\t<h4>Price Range</h4>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let price of price_range\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel]=\"price.checked\" (change)=filter(price)> <label>{{ price.id}} </label></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span *ngIf=\"chkmanosprice.length> 0\"> {{products.length}}\n\t\t\t\t\tresults</span>\n\n\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t<span>Sort By </span>\n\t\t\t\t\t\t<select [ngModel]=\"sortoption\" (change)=\"onChange($event.target.value)\">\n\t\t\t\t\t\t\t<option value=\"popularity\">Popularity</option>\n\t\t\t\t\t\t\t<option value=\"pricelh\">Price - Low to High</option>\n\t\t\t\t\t\t\t<option value=\"pricehl\">Price - High to Low</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf='products && products.length'>\n\t\t\t\t\t\t<div class=\"row\" *ngFor='let product of products | orderby:sortoption ; let i = index' [hidden]=\"(i%4)>0\">\n\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t<span class=\"thumbnail text-center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<img [src] ='product.imageUrl' [title]='product.productName'\n\t\t\t\t\t\t\t\t\t\t[style.width.px]='imageWidth' [style.height.px]='imageHeight' [style.margin.px]='imageMargin'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"[product.productId]\" >\n\t\t\t\t\t\t\t\t\t\t\t{{product.productName}} </a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div>{{ product.price | currency:'INR':'symbol':'1.2-2'}}</div>\n\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t<app-rating  class=\"ratingcolor\" [rate]='product.rating'></app-rating>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"addCart(product.productId)\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\">Add to Cart</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"products[i+1]\" class=\"thumbnail text-center\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<img [src]='products[i+1].imageUrl' [title]='products[i+1].productName' [style.width.px]='imageWidth' [style.height.px]='imageHeight'\n\t\t\t\t\t\t\t\t\t\t [style.margin.px]='imageMargin'>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"[products[i+1].productId]\">\n\t\t\t\t\t\t\t\t\t\t\t{{products[i+1].productName}} </a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>{{ products[i+1].price | currency:'INR':'symbol':'1.2-2'}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<app-rating class=\"ratingcolor\" [rate]='products[i+1].rating'></app-rating>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"addCart(products[i+1].productId)\" class=\"btn btn-primary\">Add to Cart</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"products[i+2]\" class=\"thumbnail text-center\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<img [src]='products[i+2].imageUrl' [title]='products[i+2].productName' [style.width.px]='imageWidth' [style.height.px]='imageHeight'\n\t\t\t\t\t\t\t\t\t\t [style.margin.px]='imageMargin'>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"[products[i+2].productId]\">\n\t\t\t\t\t\t\t\t\t\t\t{{products[i+2].productName}} </a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>{{ products[i+2].price | currency:'INR':'symbol':'1.2-2'}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<app-rating class=\"ratingcolor\" [rate]='products[i+2].rating'></app-rating>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"addCart(products[i+2].productId)\" class=\"btn btn-primary\">Add to Cart</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"products[i+3]\" class=\"thumbnail text-center\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<img [src]='products[i+3].imageUrl' [title]='products[i+3].productName' [style.width.px]='imageWidth' [style.height.px]='imageHeight'\n\t\t\t\t\t\t\t\t\t\t [style.margin.px]='imageMargin'>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"[products[i+3].productId]\">\n\t\t\t\t\t\t\t\t\t\t\t{{products[i+3].productName}} </a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div>{{ products[i+3].price | currency:'INR':'symbol':'1.2-2'}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<app-rating class=\"ratingcolor\" [rate]='products[i+3].rating'></app-rating>\n\t\t\t\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"addCart(products[i+3].productId)\" class=\"btn btn-primary\">Add to Cart</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br/><br/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_Cart__ = __webpack_require__("./src/app/products/cart/Cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.pageTitle = 'mCart';
        this.selectedItems = 0;
        this.imageWidth = 80;
        this.imageHeight = 120;
        this.imageMargin = 12;
        this.total = 0;
        this.orderId = 0;
        this.chkmanosprice = [];
        this.products = [];
        this.sortoption = '';
        this.manufacturers = [{ 'id': 'Samsung', 'checked': false },
            { 'id': 'Microsoft', 'checked': false },
            { 'id': 'Apple', 'checked': false },
            { 'id': 'Micromax', 'checked': false }
        ];
        this.os = [{ 'id': 'Android', 'checked': false },
            { 'id': 'Windows', 'checked': false },
            { 'id': 'iOS', 'checked': false }];
        this.price_range = [{ 'id': '3000-5000', 'checked': false },
            { 'id': '13000-15000', 'checked': false },
            { 'id': '19000-35000', 'checked': false },
            { 'id': '40000-70000', 'checked': false }];
        document.getElementById('login').style.display = '';
        document.getElementById('login').innerHTML = "Logout";
        this.orderId++;
        sessionStorage.setItem('loginTitle', 'Logout');
        document.getElementById('welcome').style.display = '';
        document.getElementById('welcome').style.color = "#ff0080";
        this._productService.getProducts().subscribe(function (products) {
            _this._productService.products = products;
            _this.products = _this._productService.products;
        }, function (error) { return _this.errorMessage = error; });
        if (_productService.selectedProducts.length > 0) {
            this.selectedItems = Number(sessionStorage.getItem('selectedItems'));
            this.total = Number(sessionStorage.getItem('grandTotal'));
        }
    }
    ProductListComponent.prototype.searchtext = function () {
        var _this = this;
        this.products = this._productService.products;
        if (this.listfilter.length > 0) {
            this.products = this.products.filter(function (product) {
                return product.manufacturer.toLowerCase().indexOf(_this.listfilter) !== -1;
            });
        }
    };
    ProductListComponent.prototype.tabselect = function (producttype) {
        var _this = this;
        this.products = [];
        this._productService.producttype = producttype;
        this._productService.getProducts().subscribe(function (products) {
            _this._productService.products = products;
            _this.products = _this._productService.products;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.filter = function (name) {
        var checkedProducts;
        var chkman = [];
        var chkmanos = [];
        this.chkmanosprice = [];
        var index = 0;
        checkedProducts = this._productService.products;
        name.checked = (name.checked) ? false : true;
        this.checkedManufacturers = this.manufacturers.filter(function (product) { return product.checked; }).map(function (product) { return product.id; });
        this.checkedOS = this.os.filter(function (product) { return product.checked; }).map(function (product) { return product.id; });
        this.checkedPrice = this.price_range.filter(function (product) { return product.checked; }).map(function (product) { return product.id; });
        if (this.checkedManufacturers.length > 0) {
            for (var i = 0; i < this.checkedManufacturers.length; i++) {
                for (var j = 0; j < checkedProducts.length; j++) {
                    if (checkedProducts[j].manufacturer.toLowerCase() === this.checkedManufacturers[i].toLowerCase()) {
                        chkman.push(checkedProducts[j]);
                    }
                }
            }
        }
        else {
            chkman = checkedProducts;
        }
        if (this.checkedOS.length > 0) {
            for (var i = 0; i < this.checkedOS.length; i++) {
                for (var j = 0; j < chkman.length; j++) {
                    if (chkman[j].ostype.toLowerCase() === this.checkedOS[i].toLowerCase()) {
                        chkmanos.push(chkman[j]);
                    }
                }
            }
        }
        else {
            chkmanos = chkman;
        }
        if (this.checkedPrice.length > 0) {
            for (var i = 0; i < this.checkedPrice.length; i++) {
                for (var j = 0; j < chkmanos.length; j++) {
                    if (this.checkedPrice[i] === '3000-5000') {
                        if (chkmanos[j].price >= 3000 && chkmanos[j].price <= 5000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '13000-15000') {
                        if (chkmanos[j].price > 13000 && chkmanos[j].price <= 15000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '19000-35000') {
                        if (chkmanos[j].price > 19000 && chkmanos[j].price <= 35000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '40000-70000') {
                        if (chkmanos[j].price > 40000 && chkmanos[j].price <= 70000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                }
            }
        }
        else {
            this.chkmanosprice = chkmanos;
        }
        this.products = [];
        this.products = this.chkmanosprice;
    };
    ProductListComponent.prototype.onChange = function (value) {
        this.sortoption = value;
    };
    ProductListComponent.prototype.addCart = function (id) {
        this.cart = new __WEBPACK_IMPORTED_MODULE_2__cart_Cart__["a" /* Cart */]();
        this.selectedItems += 1;
        var product = this._productService.products.filter(function (currProduct) { return currProduct.productId === id; })[0];
        this.total += product.price;
        sessionStorage.setItem('selectedItems', this.selectedItems);
        sessionStorage.setItem('grandTotal', this.total);
        var sp = this._productService.selectedProducts.filter(function (currProduct) { return currProduct.productId === id; })[0];
        if (sp) {
            var index = this._productService.selectedProducts.findIndex(function (currProduct) { return currProduct.productId === id; });
            this._productService.selectedProducts[index].quantity += 1;
            this._productService.selectedProducts[index].totalPrice += product.price;
        }
        else {
            this.cart.orderId = 'ORD_' + this.orderId;
            this.cart.productId = id;
            this.cart.userId = sessionStorage.getItem('username');
            this.cart.productName = product.productName;
            this.cart.price = product.price;
            this.cart.quantity = 1;
            this.cart.dateOfPurchase = new Date().toString();
            this.cart.totalPrice = product.price * this.cart.quantity;
            this._productService.selectedProducts.push(this.cart);
            sessionStorage.setItem('selectedProducts', JSON.stringify(this._productService.selectedProducts));
            this.orderId++;
        }
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/products/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/products/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this._productUrl = 'assets/products/mobiles.json';
        this.selectedProducts = [];
        this.products = [];
        this.producttype = 'tablet';
        if (sessionStorage.getItem('selectedProducts')) {
            this.selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts'));
        }
    }
    ProductService.prototype.getProducts = function () {
        if (this.producttype === 'tablet') {
            return this.http.get('assets/products/tablets.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
        }
        else if (this.producttype === 'mobile') {
            return this.http.get('assets/products/mobiles.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
        }
    };
    ProductService.prototype.handleError = function (err) {
        console.log(err);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.error() || 'Server Error');
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__ = __webpack_require__("./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__ = __webpack_require__("./src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart_component__ = __webpack_require__("./src/app/products/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_service__ = __webpack_require__("./src/app/products/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_4__cart_cart_component__["a" /* CartComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__["a" /* ProductDetailComponent */] }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_service__["a" /* AuthGuardService */]]
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_routing_module__ = __webpack_require__("./src/app/products/products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__ = __webpack_require__("./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail_component__ = __webpack_require__("./src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__ = __webpack_require__("./src/app/products/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("./src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_list_orderby_pipe__ = __webpack_require__("./src/app/products/product-list/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rating_component__ = __webpack_require__("./src/app/products/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__ = __webpack_require__("./src/app/products/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["a" /* ProductsRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__product_list_product_list_component__["a" /* ProductListComponent */], __WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_8__product_list_orderby_pipe__["a" /* OrderbyPipe */], __WEBPACK_IMPORTED_MODULE_9__rating_component__["a" /* RatingComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_10__auth_guard_service__["a" /* AuthGuardService */]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/products/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.range = [1, 2, 3, 4, 5];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rating',
            template: "\n        <span *ngFor = \"let r of range; let i = index\">\n            <i class = \"glyphicon\" [ngClass]=\"i<rate ? 'glyphicon-star' : 'glyphicon-star-empty'\"></i>\n        </span>\n    "
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ })

});
//# sourceMappingURL=products.module.chunk.js.map