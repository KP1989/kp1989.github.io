webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/products/products.module": [
		"./src/app/products/products.module.ts",
		"products.module"
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
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".iconpos{\r\n    position: relative; \r\n    top: 10px;\r\n}\r\n\r\n.footertxtpos{\r\n    position: relative; \r\n    top: 20px; \r\n    left: 520px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class='navbar navbar-default navbar-fixed-top'>\n        <div class='container-fluid'>\n          <ul class=\"social-network social-circle iconpos\">\n            <li>\n              <a href=\"#\" class=\"icoFacebook\" title=\"Facebook\">\n                <i class=\"fa fa-facebook fa-1x\"></i>\n              </a>\n            </li>\n            <li class=\"divider-vertical\"></li>\n            <li><a href=\"#\" class=\"icoTwitter\" title=\"Twitter\"><i\n                class=\"fa fa-twitter fa-1x\"></i></a></li>\n          </ul>\n    \n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              <div class=\"panel-heading text-right\" style=\"display:none;padding:0px;position:relative;top:15px;\" id=\"welcome\">Welcome {{userName | titlecase}}</div>\n            </li>\n            <li class=\"divider-vertical\"></li>\n            <li>\n              <div class=\"btn-nav\" style=\"padding-right:15px\">\n                <a id=\"login\" class=\"btn btn-primary btn-small navbar-btn\" (click)=\"login()\">{{loginTitle}}</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </nav>\n      <router-outlet></router-outlet>\n      <footer class=\"footer\">\n          <div class=\"txtcolor\">\n            <span class=\"footertxtpos\">Copyright\n              &copy; UI & Markup Team, Abc Corporation</span>\n          </div>\n        </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.pageTitle = 'mCart';
        this.loginTitle = 'Login';
    }
    AppComponent.prototype.ngDoCheck = function () {
        this.userName = sessionStorage.getItem('username');
    };
    AppComponent.prototype.login = function () {
        var value = document.getElementById('login').innerHTML;
        if (value === 'Login') {
            this._router.navigate(['/login']);
        }
        else if (value === 'Logout') {
            sessionStorage.clear();
            document.getElementById('login').innerHTML = 'Login';
            document.getElementById('welcome').style.display = 'none';
            this._router.navigate(['/welcome']);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__welcome_welcome_component__["a" /* WelcomeComponent */], __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container-styles {\r\n    position: relative;\r\n    top: 180px;\r\n    width: 50%;\r\n}\r\n.padding{\r\n    padding-bottom:0px;\r\n    margin-bottom:0px;\r\n  }\r\n.link-underline{\r\n     color:#337ab7;\r\n      text-decoration: underline;\r\n  }\r\n.error{\r\n      color: red;\r\n      position:relative;\r\n      left:50px;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-styles\">\n    <div class=\"col-xs-7 col-xs-offset-3\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Login</div>\n        <div class=\"panel-body padding\">\n          <form class=\"form-horizontal\" #loginForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"username\" class=\"col-xs-4 control-label\" style=\"text-align:left\">User Name</label>\n              <div class=\"col-xs-7\">\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"login.userName\" #username=\"ngModel\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"username.touched && !username.valid\">Username is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"col-xs-4 control-label\" style=\"text-align:left\">Password</label>\n                <div class=\"col-xs-7\">\n                  <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"login.password\" #password=\"ngModel\" required>\n                  <div class=\"alert alert-danger\" *ngIf=\"password.touched && !password.valid\">Password is required</div>\n                </div>\n            </div>\n            <div *ngIf=\"!valid\" class=\"error\">Invalid credentials...Please try again...</div><br/>\n            <div class=\"form-group\">\n              <span class=\"col-xs-4\"></span>\n              <div class=\"col-xs-3\">\n                <button (click) = \"onSubmit()\" class=\"btn btn-primary\" [disabled]=\"!loginForm.form.valid\">Login</button>\n              </div>\n              <span class=\"col-xs-5\" style=\"top:8px;\">\n                <a [routerLink] = \"['/welcome']\" style=\"color: #337ab7; text-decoration: underline;\">Cancel</a>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__("./src/app/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.login = new __WEBPACK_IMPORTED_MODULE_1__login__["a" /* Login */]();
        this.valid = true;
        this.isLoggedIn = 'false';
        document.getElementById('login').style.display = 'none';
        this.loginService.getUsers().subscribe(function (users) { return _this.users = users; });
    }
    LoginComponent.prototype.onSubmit = function () {
        this.valid = true;
        var name = this.login.userName;
        sessionStorage.setItem('username', this.login.userName);
        var password = this.login.password;
        var user = this.users.filter(function (currUser) { return currUser.userName === name && currUser.password === password; })[0];
        if (user) {
            this.isLoggedIn = 'true';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.router.navigate(['/products']);
        }
        else {
            this.isLoggedIn = 'false';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.valid = false;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getUsers = function () {
        return this.http.get('assets/users/users.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    LoginService.prototype.handleError = function (err) {
        console.log(err);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.error() || 'Server Error');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ".logo-styles {\r\n    width: 50px;\r\n    font-size: 50px;\r\n    color: #ff0080;\r\n}\r\n.shadow{\r\n    text-shadow: 3px 3px 2px rgba(150,150,150,1);\r\n}\r\n.title-styles {\r\n    text-align: center;\r\n    font-size: 40px;\r\n    color: #ff0080;\r\n}\r\n.text-styles {\r\n    color: #337ab7;\r\n    font-size: 15px;\r\n}\r\n.container-styles {\r\n    position: relative;\r\n    top: 180px;\r\n    width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-styles\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">{{pageTitle}}</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <span class=\"img-responsive center-block logo-styles\">\n            <span class=\"glyphicon glyphicon-shopping-cart\"></span>\n        </span>\n        <div id=\"div1\" class=\"shadow title-styles\">\n          mCart\n        </div>\n      </div><br/>\n      <div class=\"row\">\n        <div class=\"text-center text-styles\">An online app to purchase mobile gadgets</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.pageTitle = "Welcome";
        document.getElementById("login").style.display = "";
    }
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map