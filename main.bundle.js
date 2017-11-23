webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NAVIGATION -->\n<app-navigation></app-navigation>\n\n<!-- VIEWS ARE LOADED HERE -->\n<router-outlet></router-outlet>\n<!-- VIEWS ARE LOADED HERE -->\n\n<!-- FOOTER -->\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var apiBaseUrl = "http://kaempe.club/WebSec";
var Config = {
    apiPostsUrl: apiBaseUrl + "/PostController_v2.php",
    apiCommentsUrl: apiBaseUrl + "/CommentController.php",
    apiLoginUrl: apiBaseUrl + "/UserController.php/Login",
    apiRegisterUrl: apiBaseUrl + "/UserController.php/Register",
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_private_component_private_component_component__ = __webpack_require__("../../../../../src/app/components/private-component/private-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//==============================================================================
// [ COMPONENTS START ]
//==============================================================================










//==============================================================================
// [ COMPONENTS END ]
//==============================================================================
//==============================================================================
// [ SERVICES START ]
//==============================================================================




//==============================================================================
// [ SERVICES END ]
//==============================================================================
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_private_component_private_component_component__["a" /* PrivateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_create_post_create_post_component__["a" /* CreatePostComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_post_post_component__["a" /* PostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* Router */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_private_component_private_component_component__ = __webpack_require__("../../../../../src/app/components/private-component/private-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });

// AUTH GUARD SERVICE

// COMPONETNS






//ROUTES
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'create-post', component: __WEBPACK_IMPORTED_MODULE_7__components_create_post_create_post_component__["a" /* CreatePostComponent */] },
    { path: 'private', component: __WEBPACK_IMPORTED_MODULE_5__components_private_component_private_component_component__["a" /* PrivateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var Router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-create-post{\r\n    margin: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Create a Post</h3>\n  <br>\n  \n  <form [formGroup]=\"postForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    \n    <!-- TITLE -->\n    <div class=\"form-group row\">\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">Title</label>\n      <div class=\"col-sm-12\">\n        <input type=\"text\" class=\"form-control\" [class.valid-field]=\"isValidField('title')\" id=\"title\" placeholder=\"Title\"\n          formControlName=\"title\">\n      </div>\n\n      <!-- CONTENT -->\n      <label for=\"content\" class=\"col-sm-2 col-form-label\">Content</label>\n      <div class=\"col-sm-12\">\n        <textarea rows=\"4\" cols=\"50\" class=\"form-control\" [class.valid-field]=\"isValidField('content')\" id=\"content\" placeholder=\"Content\"\n          formControlName=\"content\">\n        </textarea>\n      </div>\n\n      <!-- SUBMIT BUTTON -->\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-success btn-create-post\" [class.btn-disabled]=\"!isValidForm()\" [disabled]=\"!isValidForm()\">\n                      Create Post\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_postModel__ = __webpack_require__("../../../../../src/app/models/postModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePostComponent = (function () {
    function CreatePostComponent(_formBuilder, _postsService) {
        this._formBuilder = _formBuilder;
        this._postsService = _postsService;
        this.createForm();
    }
    // ===========================================================================
    // FUNCTIONS  
    CreatePostComponent.prototype.submitForm = function () {
        // @TODO: SANITIZE INPUT ?
        this._postsService.savePost(this.makeNewPost())
            .then(function (response) {
            console.log('_postsService.savePost RESPONSE');
            console.log(response);
        });
        this.postForm.reset();
    };
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.createForm = function () {
        this.postForm = this._formBuilder.group({
            title: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)])
            ],
            content: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(25)])
            ]
        });
    };
    Object.defineProperty(CreatePostComponent.prototype, "title", {
        // ---------------------------------------------------------------------------
        // FORM GETTERS
        get: function () { return this.postForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatePostComponent.prototype, "content", {
        get: function () { return this.postForm.get('content'); },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.isValidField = function (fieldName) {
        return this.postForm.get(fieldName).status == 'VALID';
    };
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.isValidForm = function () {
        return this.postForm.status == 'VALID';
    };
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.makeNewPost = function () {
        var newPost = new __WEBPACK_IMPORTED_MODULE_2__models_postModel__["a" /* Post */]();
        newPost.title = this.postForm.value.title;
        newPost.content = this.postForm.value.content;
        return newPost;
    };
    return CreatePostComponent;
}());
CreatePostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create-post',
        template: __webpack_require__("../../../../../src/app/components/create-post/create-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-post/create-post.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object])
], CreatePostComponent);

var _a, _b;
//# sourceMappingURL=create-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Login Form</h3>\n  <br>\n\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"submitForm()\">\n    <div class=\"form-group row\">\n      <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\n      <div class=\"col-sm-6\">\n        <input type=\"username\" \n               class=\"form-control\" \n               id=\"username\" \n               placeholder=\"username\"\n               [(ngModel)]=\"loginModel.username\" name=\"username\"\n               required>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n      <div class=\"col-sm-6\">\n        <input type=\"password\" \n               class=\"form-control\" \n               id=\"password\" \n               placeholder=\"Password\"\n               [(ngModel)]=\"loginModel.password\" name=\"password\"\n               required>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"offset-sm-2 col-sm-6\">\n        <button class=\"btn btn-primary\"\n                [class.btn-disabled]=\"!loginForm.form.valid\"\n                [disabled]=\"!loginForm.form.valid\">Sign in</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_loginModel__ = __webpack_require__("../../../../../src/app/models/loginModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_auth) {
        this._auth = _auth;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_2__models_loginModel__["a" /* LoginModel */]();
    }
    LoginComponent.prototype.submitForm = function () {
        this.login(this.loginModel);
    };
    //------------------------------------------------
    // Login
    LoginComponent.prototype.login = function (credentials) {
        this._auth.login(credentials)
            .then(function (response) {
            console.log('Server Login Response');
            console.log(response);
            location.reload();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"starter-template\">\n    <h2>Recent Posts</h2>\n  </div>\n\n  <!-- LOOP TROUGH POSTS-->\n  <div *ngIf=\"posts\">\n    <div *ngFor=\"let post of posts\">\n      <post-component [post]=\"post\"></post-component>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_postModel__ = __webpack_require__("../../../../../src/app/models/postModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(_postService) {
        this._postService = _postService;
        this.posts = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getPosts();
        //this.getDummyPosts();
    };
    //------------------------------------------------
    // GET POSTS
    MainComponent.prototype.getPosts = function () {
        var _this = this;
        this._postService.getPosts()
            .then(function (posts) {
            _this.posts = posts;
            console.log('WE HAVE POSTS ==> ');
            console.log(_this.posts);
        });
    };
    //------------------------------------------------
    // GET DUMMy POSTS
    MainComponent.prototype.getDummyPosts = function () {
        for (var i = 0; i < 25; i++) {
            var post = new __WEBPACK_IMPORTED_MODULE_2__models_postModel__["a" /* Post */]();
            post.id = i;
            post.title = "Post #" + i + " title";
            post.content = "Post #" + i + " content.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
            post.createdAt = new Date().toString();
            this.posts.push(post);
        }
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  <a class=\"navbar-brand\" href=\"#\">SiteName</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/create-post\">Create Post</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!loggedInUser\">\n          Login\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/register\" *ngIf=\"!loggedInUser\">\n          Register\n        </a>\n      </li>\n      <li class=\"nav-item\" (click)=\"logout()\" *ngIf=\"loggedInUser\">\n        <a class=\"nav-link\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(_authService) {
        this._authService = _authService;
        this.loggedInUser = this._authService.isAuthenticated();
    }
    NavigationComponent.prototype.logout = function () {
        console.log('Logout....');
        this._authService.logout();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_alert_service_service__["a" /* AlertService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Page You Are Looking for i not found...</h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-author{\r\n    color: rgba(128, 128, 128, 0.7);\r\n}\r\n\r\n/* COMMENTS RELATED */\r\n\r\n\r\n.comments-read{\r\n    color: rgba(33, 150, 243, 0.8);\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-decoration: underline;\r\n}\r\n\r\n.comment-write{\r\n    color: rgba(33, 150, 243, 0.8);\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.comments-amount{\r\n    background-color: rgba(5, 115, 203, 0.9686274509803922) !important;\r\n}\r\n\r\n.comments-container{\r\n    background: rgba(128, 128, 128, 0.0784313725490196);\r\n    border-top: 2px solid rgba(128, 128, 128, 0.23137254901960785);\r\n    margin-top: 10px;\r\n    padding: 15px;\r\n}\r\n\r\n.comment-author{\r\n    font-weight: 500;\r\n}\r\n\r\n.comment-date{\r\n    color: rgba(7, 118, 206, 0.83);\r\n    font-size: 13px\r\n}\r\n\r\n.comment{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.comment-content{\r\n    font-size: 15px;\r\n}\r\n\r\n.comment-submit{\r\n    cursor: pointer;\r\n    background: rgba(5, 115, 203, 0.9686274509803922);\r\n    color: white;\r\n}\r\n\r\n.post-posted-on{\r\n    font-weight: 200;\r\n    color: black;\r\n}\r\n\r\n.post-date{\r\n    font-weight: 200;\r\n    color: #2196F3;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card post\">\n\n  <!-- POST BODY-->\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{post.title}}</h4>\n    <h6 class=\"card-subtitle mb-2 post-author\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i> by <span class=\"post-author-name\">{{post.username}}</span>\n      <span class=\"post-posted-on\">posted on </span>\n      <span class=\"post-date\">{{post.createdAt}}</span>\n    </h6>\n    <p class=\"card-text\">{{post.content}}</p>\n\n    <!-- POST COMMENTS SECTION-->\n    <!-- Read Comments -->\n    <div class=\"comments-read\" (click)=\"showComments()\">\n      Read Comments\n    </div>\n\n    <div class=\"comments-container\" *ngIf=\"commentsVisible\">\n\n      <!-- POST COMMENTS START-->\n      <div class=\"comments\">\n\n        <div class=\"comment\" *ngFor=\"let comment of comments\">\n          <div>\n            <span class=\"comment-author\">{{ comment.username }}:</span>\n            <span class=\"comment-content\">{{comment.content}} </span>\n          </div>\n          <span class=\"comment-date\">{{comment.createdAt | date:'medium'}}</span>\n        </div>\n\n      </div>\n      <!-- POST COMMENTS END-->\n\n      <!-- CREATE A COMMENT -->\n      <div class=\"comment-write\">\n        <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i> Write a comment\n      </div>\n      <div class=\"input-group\">\n        <input type=\"text\" \n               class=\"form-control\" \n               placeholder=\"Recipient's username\" \n               aria-describedby=\"basic-addon2\"\n               [(ngModel)]=\"newComment\">\n        <span class=\"input-group-addon comment-submit\" \n              id=\"basic-addon2\" (click)=\"submitComment()\"> \n          <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n\n    </div>\n    <!-- POST COMMENTS END-->\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_postModel__ = __webpack_require__("../../../../../src/app/models/postModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_commentModel__ = __webpack_require__("../../../../../src/app/models/commentModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = (function () {
    function PostComponent(_commentService) {
        this._commentService = _commentService;
        this.comments = [];
        this.newComment = "";
    }
    //----------------------------------------------------------------------------
    PostComponent.prototype.submitComment = function () {
        var _this = this;
        // SANITIZE COMMENT ?
        var sanitizedComment = this._sanitize(this.newComment);
        // SUBMIT COMMENT
        this._commentService.saveComment(sanitizedComment, this.post.id)
            .then(function (response) {
            console.log('_commentService.saveComment received response');
            console.log(response);
            // @TODO: ADD COMMENT TO THE COMMENTS ARRAY
            var newComment = new __WEBPACK_IMPORTED_MODULE_3__models_commentModel__["a" /* Comment */]();
            newComment.id = 777;
            newComment.author = "John Galt";
            newComment.content = sanitizedComment;
            newComment.createdAt = new Date();
            _this.comments.push(newComment);
        });
        // REST FORM
        this.newComment = "";
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype.showComments = function () {
        this.commentsVisible = !this.commentsVisible;
        //Get Comments for the post PROD
        this._getCommentsForPost();
    };
    //============================================================================
    // Private Function
    PostComponent.prototype._getCommentsForPost = function () {
        var _this = this;
        this._commentService.getComments(this.post.id)
            .then(function (comments) {
            _this.comments = comments;
            console.log('WE HAVE COMMENTS FOR POST ==> ' + _this.post.id);
            console.log(_this.comments);
        });
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype._getDummyComments = function () {
        var comments = [];
        for (var i = 0; i < 7; i++) {
            var comment = new __WEBPACK_IMPORTED_MODULE_3__models_commentModel__["a" /* Comment */]();
            comment.author = "John Galt #" + i;
            comment.content = "If you're hotter than me, then that means I'm cooler than you.";
            comment.createdAt = new Date();
            comments.push(comment);
        }
        return comments;
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype._sanitize = function (dataToSanitize) {
        // do somesanitization
        return dataToSanitize;
    };
    return PostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_postModel__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_postModel__["a" /* Post */]) === "function" && _a || Object)
], PostComponent.prototype, "post", void 0);
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'post-component',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */]) === "function" && _b || Object])
], PostComponent);

var _a, _b;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/private-component/private-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 style=\"color:red;\">THIS IS PRIVATE AREA OF THE WEBSITE</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/private-component/private-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivateComponent = (function () {
    function PrivateComponent() {
    }
    return PrivateComponent;
}());
PrivateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-private-component',
        template: __webpack_require__("../../../../../src/app/components/private-component/private-component.component.html")
    })
], PrivateComponent);

//# sourceMappingURL=private-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Create an Account</h3>\n  <br>\n  \n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <!-- USERNAME -->\n    <div class=\"form-group row\">\n      <label for=\"email\" class=\"col-sm-2 col-form-label\">Username</label>\n      <div class=\"col-sm-6\">\n        <input type=\"username\" class=\"form-control\" [class.valid-field]=\"isValidField('username')\" id=\"username\" placeholder=\"Username\"\n          formControlName=\"username\">\n      </div>\n      <!-- IF USERNAME ERRORS-->\n      <div *ngIf=\"username.errors && username.dirty && username.touched\" class=\"form-group row\">\n        <label *ngIf=\"username.errors.required\" for=\"username\" class=\"col-sm-8 col-form-label form-error-message\">\n        Username is required\n      </label>\n      </div>\n\n\n    </div>\n    <!-- EMAIL -->\n    <!--<div class=\"form-group row\">\n      <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n      <div class=\"col-sm-6\">\n        <input type=\"email\" class=\"form-control\" [class.valid-field]=\"isValidField('email')\" id=\"email\" placeholder=\"Email\" formControlName=\"email\">\n      </div>\n    </div>-->\n    <!-- IF EMAIL ERRORS-->\n    <!--<div *ngIf=\"email.errors && email.dirty && email.touched\" class=\"form-group row\">\n      <label *ngIf=\"email.errors.email\" for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\n        Wrong Email Format\n      </label>\n\n      <label *ngIf=\"email.errors.required\" for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\n        Email is Required\n      </label>\n    </div>-->\n\n    <!-- PASSWORD -->\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n      <div class=\"col-sm-6\">\n        <input type=\"password\" class=\"form-control\" [class.valid-field]=\"isValidField('password1')\" id=\"password1\" placeholder=\"Password\"\n          formControlName=\"password1\">\n      </div>\n    </div>\n    <!-- IF PASSWORD ERROR -->\n    <div *ngIf=\"password1.errors && (password1.dirty && password1.touched)\" class=\"form-group row\">\n\n      <!-- if password is too short-->\n      <label *ngIf=\"password1.errors.minlength\" for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\n        Password is too short\n      </label>\n    </div>\n\n    <!-- REPEAT PASSWORD -->\n    <div class=\"form-group row\">\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">Repeat Password</label>\n      <div class=\"col-sm-6\">\n        <input type=\"password\" class=\"form-control\" [class.valid-field]=\"isValidField('password2')\" id=\"password2\" placeholder=\"Repeat Password\"\n          formControlName=\"password2\">\n      </div>\n    </div>\n\n    <!-- IF PASSWORD2 ERROR -->\n    <div *ngIf=\"password2.errors && (password2.dirty && password2.touched)\">\n      <!-- if password is too short-->\n      <div *ngIf=\"password2.errors.minlength\" class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\n        Password is too short\n      </label>\n      </div>\n    </div>\n\n\n    <!-- IF PASSWORDS DONT MATCH-->\n    <div *ngIf=\"!areMatchingPasswords() && \n                (password1.dirty && password1.touched) &&\n                (password2.dirty && password2.touched)\" class=\"form-group row\">\n      <label for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\n        Passwords dont match\n      </label>\n    </div>\n\n\n\n    <div class=\"form-group row\">\n      <div class=\"offset-sm-2 col-sm-6\">\n        <button class=\"btn btn-success\" [class.btn-disabled]=\"!isValidForm()\" [disabled]=\"!isValidForm()\">\n                    Register\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_auth, _alert, _formBuilder) {
        this._auth = _auth;
        this._alert = _alert;
        this._formBuilder = _formBuilder;
        this.createForm();
    }
    RegisterComponent.prototype.submitForm = function () {
        var testUser = this._makeUser();
        this._auth.register(testUser).then(function (response) {
            console.log("YOU MADE IT!.. MAYBE");
        });
        this.registerForm.reset();
        window.location.reload(true);
    };
    // ===========================================================================
    // FUNCTIONS  
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this._formBuilder.group({
            username: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])
            ],
            password1: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6)])
            ],
            password2: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6)])
            ]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        // ---------------------------------------------------------------------------
        // FROM GETTERS
        get: function () { return this.registerForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password1", {
        get: function () { return this.registerForm.get('password1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password2", {
        get: function () { return this.registerForm.get('password2'); },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype.isValidField = function (fieldName) {
        return this.registerForm.get(fieldName).status == 'VALID';
    };
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype.isValidForm = function () {
        var isValidForm = this.registerForm.status == 'VALID';
        var passwordsMatch = this.areMatchingPasswords();
        return isValidForm && passwordsMatch;
    };
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype.areMatchingPasswords = function () {
        return this.registerForm.get('password1').value === this.registerForm.get('password2').value;
    };
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype._makeUser = function () {
        return {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password1
        };
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_alert_service_service__["a" /* AlertService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/commentModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=commentModel.js.map

/***/ }),

/***/ "../../../../../src/app/models/loginModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=loginModel.js.map

/***/ }),

/***/ "../../../../../src/app/models/postModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=postModel.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertService = (function () {
    function AlertService() {
    }
    //------------------------------------------------------------------
    AlertService.prototype.success = function (title, message) {
        swal(title, message, 'success');
    };
    //------------------------------------------------------------------
    AlertService.prototype.error = function (title, message) {
        swal(title, message, 'error');
    };
    //------------------------------------------------------------------
    AlertService.prototype.info = function (title) {
        swal(title);
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AlertService);

//# sourceMappingURL=alert-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    //----------------------------------------------------------------------------
    AuthGuard.prototype.canActivate = function () {
        return this.authenticationCheck();
    };
    //----------------------------------------------------------------------------
    AuthGuard.prototype.authenticationCheck = function () {
        var isAthenticated = this.authService.isAuthenticated();
        console.log('isAthenticated');
        console.log(isAthenticated);
        if (!isAthenticated) {
            this.router.navigate(['/login']);
            return false;
        }
        return isAthenticated;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    // LOGIN
    //-----------------------------------------------------------
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var dataPayload = JSON.stringify({
            username: credentials.username,
            password: credentials.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */].apiLoginUrl, dataPayload, { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            _this.setToken(data);
        })
            .catch(this.handleError);
    };
    //-----------------------------------------------------------
    AuthService.prototype.register = function (userData) {
        var _this = this;
        var dataPayload = JSON.stringify({
            username: userData.username,
            password: userData.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */].apiRegisterUrl, dataPayload, { headers: headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            _this.setToken(data);
        })
            .catch(this.handleError);
    };
    //-----------------------------------------------------------
    AuthService.prototype.isAuthenticated = function () {
        return this.validateToken();
    };
    //-----------------------------------------------------------
    AuthService.prototype.validateToken = function () {
        var token = this.getToken();
        if (token.token === null || token.tta === null) {
            return false;
        }
        // check if token.token = has value
        var isValidToken = (token.token.length == 128 || token.token.length == 127);
        //check if token.tta still valid
        var isValidTta = this.checkTokenTTA(token.tta);
        return isValidToken && isValidTta;
    };
    //-----------------------------------------------------------
    AuthService.prototype.getToken = function () {
        return {
            token: localStorage.getItem("token"),
            tta: localStorage.getItem("tta"),
        };
    };
    //------------------------------------------------------------------
    AuthService.prototype.setToken = function (data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('tta', data.timeAlive);
    };
    //------------------------------------------------------------------
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('tta');
        location.reload();
    };
    //------------------------------------------------------------------
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    //------------------------------------------------------------------
    AuthService.prototype.checkTokenTTA = function (timestamp) {
        if (typeof timestamp == 'undefined') {
            return false;
        }
        var now = new Date();
        var tokenExpiration = new Date(timestamp);
        // TTA should be bigger(later) than 'now' 
        return now < tokenExpiration;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CommentsService = (function () {
    function CommentsService(_http, _requestService) {
        this._http = _http;
        this._requestService = _requestService;
    }
    //----------------------------------------------------------------------------
    // GET COMMENTS
    CommentsService.prototype.getComments = function (post_id) {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiCommentsUrl + "?post_id=" + post_id, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (comments) { return comments.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // POST COMMENT
    CommentsService.prototype.saveComment = function (newComment, post_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiCommentsUrl, this.makeCommentPayload(newComment, post_id), this._requestService.AuthHeadersForPOST())
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log('saveComment response =>');
            console.log(data);
            return data;
        })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTION ----------------------------------------------------------
    //----------------------------------------------------------------------------
    CommentsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //----------------------------------------------------------------------------
    CommentsService.prototype.makeCommentPayload = function (newComment, post_id) {
        return JSON.stringify({
            content: newComment,
            post_id: post_id
        });
    };
    return CommentsService;
}());
CommentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], CommentsService);

var _a, _b;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PostsService = (function () {
    function PostsService(_http, _requestService) {
        this._http = _http;
        this._requestService = _requestService;
    }
    //----------------------------------------------------------------------------
    // GET POSTS
    PostsService.prototype.getPosts = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiPostsUrl, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (posts) {
            console.log('getPosts');
            return posts.json();
        })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // GET POSTS
    PostsService.prototype.savePost = function (newPost) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiPostsUrl, this.makePostPayload(newPost), this._requestService.AuthHeadersForPOST())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTION ----------------------------------------------------------
    //----------------------------------------------------------------------------
    PostsService.prototype.handleError = function (error) {
        console.log("%c An error occurred", "background: red; color:white; font-size:22px;");
        console.error(error);
        return Promise.reject(error.message || error);
    };
    //----------------------------------------------------------------------------
    PostsService.prototype.makePostPayload = function (newPost) {
        return JSON.stringify({
            title: newPost.title,
            content: newPost.content
        });
    };
    return PostsService;
}());
PostsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], PostsService);

var _a, _b;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(authService) {
        this.authService = authService;
    }
    RequestService.prototype.AuthHeadersForGET = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', "Token=" + this._getToken());
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    RequestService.prototype.AuthHeadersForPOST = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', "Token=" + this._getToken());
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTIONS
    RequestService.prototype._getToken = function () {
        var tokenData = this.authService.getToken();
        return tokenData.token;
    };
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map