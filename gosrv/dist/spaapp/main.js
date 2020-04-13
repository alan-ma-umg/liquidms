(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");





const routes = [
    { path: 'qrcheckin', component: _pages__WEBPACK_IMPORTED_MODULE_2__["QRCheckinPage"], data: { title: 'Checkin' } },
    { path: 'step2', component: _pages__WEBPACK_IMPORTED_MODULE_2__["QRCheckinStep2Page"], data: { title: 'LF Checkin' } },
    { path: '404', component: _pages__WEBPACK_IMPORTED_MODULE_2__["NotFoundPage"], data: { title: '404' } },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_layouts_topBar_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/topBar.layout */ "./src/app/shared/layouts/topBar.layout.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_utilities_alertBanner_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/utilities/alertBanner.utility */ "./src/app/shared/utilities/alertBanner.utility.ts");
/* harmony import */ var _shared_layouts_bottomBar_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/bottomBar.layout */ "./src/app/shared/layouts/bottomBar.layout.ts");










const _c0 = function (a0) { return { "min-height": a0 }; };
class AppComponent {
    constructor(title, router, activatedRoute) {
        this.title = title;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appTitle = 'GAE-SPA';
        this.clientHeight = window.innerHeight;
        this.clientWidth = window.innerWidth;
    }
    ngOnInit() {
        const appTitle = this.title.getTitle();
        this.router
            .events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const child = this.activatedRoute.firstChild;
            if (child.snapshot.data['title']) {
                return child.snapshot.data['title'];
            }
            return appTitle;
        })).subscribe((ttl) => {
            this.title.setTitle(ttl + " - " + this.appTitle);
        });
    }
    ngAfterViewInit() {
        console.log('AppComponent after view init');
        if (this.clientWidth < 640) {
            // this.footerHeight = document.getElementById('bottombar').offsetHeight - 3;
            this.footerHeight = 63.39;
            this.clientHeight = this.clientHeight - this.footerHeight;
        }
        else {
            this.footerHeight = 63.39;
            this.clientHeight = this.clientHeight - this.footerHeight;
        }
    }
    setPageTitle(pageTitle) {
        this.title.setTitle(pageTitle);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[3, "topbarTitle"], [1, "grid-container", "fluid", 3, "ngStyle"], [1, "grid-x", "grid-padding-y"], [1, "cell", "medium-10", "medium-offset-1"], ["bottomFooter", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "alertBanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "bottombar", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topbarTitle", ctx.appTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.clientHeight - ctx.footerHeight + "px"));
    } }, directives: [_shared_layouts_topBar_layout__WEBPACK_IMPORTED_MODULE_4__["TopBarLayout"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _shared_utilities_alertBanner_utility__WEBPACK_IMPORTED_MODULE_6__["AlertBannerUtility"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_layouts_bottomBar_layout__WEBPACK_IMPORTED_MODULE_7__["BottomBarLayout"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "./node_modules/@fortawesome/pro-regular-svg-icons/index.es.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configs */ "./src/app/configs/index.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controllers */ "./src/app/controllers/index.ts");
/* harmony import */ var _shared_layouts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/layouts */ "./src/app/shared/layouts/index.ts");
/* harmony import */ var _shared_modals__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/modals */ "./src/app/shared/modals/index.ts");
/* harmony import */ var _shared_utilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/utilities */ "./src/app/shared/utilities/index.ts");
/* harmony import */ var _shared_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/spinner */ "./src/app/shared/spinner/index.ts");









//import { faSignIn, faTimesSquare, faPencilAlt, faCheckSquare, faPlusCircle, faCopyright, faBars } from '@fortawesome/pro-regular-svg-icons'; 
//import { faUserAlt, faExclamationTriangle, faFlashlight, faArrowAltSquareLeft, faQrcode, faHome } from '@fortawesome/pro-regular-svg-icons';















class AppModule {
    constructor(library) {
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"]);
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimesSquare"]);
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSignIn"]);
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPencilAlt"]);
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBackspace"]);
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrashAlt"]);
        library.addIcons(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowAltSquareRight"]);
        //    library.addIcons(faCog);
        //    library.addIcons(faCopyright);
        //    library.addIcons(faTimesSquare);
        //    library.addIcons(faPencilAlt);
        //    library.addIcons(faCheckSquare);
        //    library.addIcons(faPlusCircle);
        //    library.addIcons(faUserAlt);
        //    library.addIcons(faExclamationTriangle);
        //    library.addIcons(faFlashlight);
        //   library.addIcons(faArrowAltSquareLeft);
        //    library.addIcons(faQrcode);
        //    library.addIcons(faHome);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"])); }, providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
        _services__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
        _services__WEBPACK_IMPORTED_MODULE_14__["SetupService"],
        _services__WEBPACK_IMPORTED_MODULE_14__["LoginService"],
        _services__WEBPACK_IMPORTED_MODULE_14__["SpinnerOverlayService"],
        _services__WEBPACK_IMPORTED_MODULE_14__["NumberPadService"],
        _controllers__WEBPACK_IMPORTED_MODULE_15__["CurrentUserController"],
        { provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["AuthServiceConfig"], useFactory: _configs__WEBPACK_IMPORTED_MODULE_11__["AuthConfig"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["OffcanvasModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"],
            _graphql_module__WEBPACK_IMPORTED_MODULE_12__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages__WEBPACK_IMPORTED_MODULE_13__["QRCheckinPage"],
        _pages__WEBPACK_IMPORTED_MODULE_13__["QRCheckinStep2Page"],
        _pages__WEBPACK_IMPORTED_MODULE_13__["NotFoundPage"],
        _shared_layouts__WEBPACK_IMPORTED_MODULE_16__["TopBarLayout"],
        _shared_layouts__WEBPACK_IMPORTED_MODULE_16__["BottomBarLayout"],
        _shared_modals__WEBPACK_IMPORTED_MODULE_17__["SetupModal"],
        _shared_modals__WEBPACK_IMPORTED_MODULE_17__["LoginModal"],
        _shared_utilities__WEBPACK_IMPORTED_MODULE_18__["NumberPadUtility"],
        _shared_utilities__WEBPACK_IMPORTED_MODULE_18__["AlertBannerUtility"],
        _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
        _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerWrapperComponent"],
        _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerOverlayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["AlertModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"], ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["OffcanvasModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"],
        _graphql_module__WEBPACK_IMPORTED_MODULE_12__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages__WEBPACK_IMPORTED_MODULE_13__["QRCheckinPage"],
                    _pages__WEBPACK_IMPORTED_MODULE_13__["QRCheckinStep2Page"],
                    _pages__WEBPACK_IMPORTED_MODULE_13__["NotFoundPage"],
                    _shared_layouts__WEBPACK_IMPORTED_MODULE_16__["TopBarLayout"],
                    _shared_layouts__WEBPACK_IMPORTED_MODULE_16__["BottomBarLayout"],
                    _shared_modals__WEBPACK_IMPORTED_MODULE_17__["SetupModal"],
                    _shared_modals__WEBPACK_IMPORTED_MODULE_17__["LoginModal"],
                    _shared_utilities__WEBPACK_IMPORTED_MODULE_18__["NumberPadUtility"],
                    _shared_utilities__WEBPACK_IMPORTED_MODULE_18__["AlertBannerUtility"],
                    _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
                    _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerWrapperComponent"],
                    _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerOverlayComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                    ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                    ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                    ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["OffcanvasModule"].forRoot(),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"],
                    _graphql_module__WEBPACK_IMPORTED_MODULE_12__["GraphQLModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"],
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
                    _services__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
                    _services__WEBPACK_IMPORTED_MODULE_14__["SetupService"],
                    _services__WEBPACK_IMPORTED_MODULE_14__["LoginService"],
                    _services__WEBPACK_IMPORTED_MODULE_14__["SpinnerOverlayService"],
                    _services__WEBPACK_IMPORTED_MODULE_14__["NumberPadService"],
                    _controllers__WEBPACK_IMPORTED_MODULE_15__["CurrentUserController"],
                    { provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["AuthServiceConfig"], useFactory: _configs__WEBPACK_IMPORTED_MODULE_11__["AuthConfig"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                entryComponents: [
                    _shared_modals__WEBPACK_IMPORTED_MODULE_17__["SetupModal"],
                    _shared_modals__WEBPACK_IMPORTED_MODULE_17__["LoginModal"],
                    _shared_spinner__WEBPACK_IMPORTED_MODULE_19__["SpinnerOverlayComponent"],
                ]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/configs/auth.config.ts":
/*!****************************************!*\
  !*** ./src/app/configs/auth.config.ts ***!
  \****************************************/
/*! exports provided: AuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConfig", function() { return AuthConfig; });
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");

const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]('466898721997-2sp2u49s9jdehqprujtbuclnib8ug6re.apps.googleusercontent.com')
    }
]);
function AuthConfig() {
    return config;
}


/***/ }),

/***/ "./src/app/configs/index.ts":
/*!**********************************!*\
  !*** ./src/app/configs/index.ts ***!
  \**********************************/
/*! exports provided: AuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.config */ "./src/app/configs/auth.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthConfig", function() { return _auth_config__WEBPACK_IMPORTED_MODULE_0__["AuthConfig"]; });




/***/ }),

/***/ "./src/app/controllers/currentUser.controller.ts":
/*!*******************************************************!*\
  !*** ./src/app/controllers/currentUser.controller.ts ***!
  \*******************************************************/
/*! exports provided: CurrentUserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserController", function() { return CurrentUserController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _graphqls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphqls */ "./src/app/graphqls/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class CurrentUserController {
    //  private currentTeamId: string;
    // private isLoaded = false;
    constructor(apollo, cookie, 
    //              private getTeamsGQL: GetTeamsGQL,
    getUserGQL, refreshUserGQL, 
    //              private refreshTeamsGQL: RefreshTeamsGQL,
    router) {
        this.apollo = apollo;
        this.cookie = cookie;
        this.getUserGQL = getUserGQL;
        this.refreshUserGQL = refreshUserGQL;
        this.router = router;
        /**
         * @ignore
         */
        this.isDebug = true;
    }
    updateCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isDebug) {
                console.log('topbar: currentUser', this.currentUser);
            }
            this.currentUserId = yield this.checkCurrentUser();
            if (this.currentUserId !== undefined || this.currentUserId === '') {
                console.log('1-currentUserId', this.currentUserId);
                //      this.checkCurrentTeam();
            }
        });
    }
    checkCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isDebug) {
                console.log('currenUserService: checkCurrentUser enter');
            }
            this.currentUserLoad();
            // const uid = <string> await this.checkCurrentUserExist();
            if (this.isDebug) {
                console.log('currenUserService: checkCurrentUser exit');
            }
            return yield this.checkCurrentUserExist();
        });
    }
    /*
      async checkCurrentTeam(): Promise<boolean> {
        if (this.isDebug) { console.log('currenUserService: checkCurrentTeam enter'); }
        this.userTeamsLoad();
        const teamExist = <boolean> await this.checkCurrentTeamExist();
        if (this.isDebug) { console.log('currenUserService: checkCurrentTeam exit'); }
        return teamExist;
      }
    */
    /**
     * Calls [CurrentUserGQL]{@link CurrentUserGQL} and loads the CurrentUserObject
     */
    currentUserLoad() {
        if (this.isDebug) {
            console.log('currenUserService: currentUserLoad enter');
        }
        this.currentUser = this.getUserGQL.watch()
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.data.getUser));
        if (this.isDebug) {
            console.log('currenUserService: currentUserLoad exit');
        }
    }
    /**
     * Refreshs current user.
     */
    currentUserRefresh() {
        this.refreshUserGQL
            .mutate({})
            .subscribe(result => {
            console.log('result', result.data.getUser.uid);
            if (result.data.getUser.uid !== this.currentUserId && result.data.getUser.uid !== '') {
                //           this.checkCurrentTeam();
            }
            if (this.isDebug) {
                console.log('currenUserService: refreshed current user');
            }
        });
    }
    /**
     * Loads User Teams
     */
    /*  userTeamsLoad(): void {
        if (this.isDebug) { console.log('currenUserService: userTeamsLoad enter'); }
        if (this.initialTeamsLoad) {
          if (this.isDebug) { console.log('currenUserService: Initial Teams Load'); }
          this.userTeams = this.getTeamsGQL.watch()
              .valueChanges
              .pipe(
                map(result => result.data.getTeams)
              );
          this.initialTeamsLoad = false;
        } else {
          if (this.isDebug) { console.log('currenUserService: Refresh Teams Load'); }
          this.apollo
            .mutate({
              mutation: this.refreshTeamsGQL.document,
              variables: {},
              update: (store, { data: { getTeams }}) => {
                let data: any;
                data = store.readQuery({ query: this.getTeamsGQL.document });
                data.getTeams = [];
                for (let i = 0; i < getTeams.length; i++) {
                  data.getTeams.push(getTeams[i]);
                }
                store.writeQuery({ query: this.getTeamsGQL.document, data });
              }
            })
            .subscribe();
        }
        if (this.isDebug) { console.log('currenUserService: userTeamsLoad exit'); }
      }
      checkCurrentTeamExist() {
        if (this.isDebug) { console.log('currentUserService: checkCurrentTeamExist enter'); }
        return new Promise(resolve => {
          const currentTeamId = this.cookie.get('userTeam-' + this.currentUserId);
          let hasTeam: boolean;
          if (currentTeamId === '') {
            if (this.isDebug) { console.log('currentUserService: no current team found'); }
            hasTeam = false;
          } else {
            this.userTeams.subscribe((teams) => {
              const i = teams.map(function(e) { return e.id; }).indexOf(currentTeamId);
              if (i >= 0) {
                if (this.isDebug) { console.log('currentUserService: currentTeam:', teams[i]); }
                this.currentTeam.next(teams[i]);
                this.teamProjects.next(teams[i].projects);
                console.log('teamProjects:', this.teamProjects);
                hasTeam = true;
              } else {
                if (this.isDebug) { console.log('currentUserService: no current team found'); }
                this.currentTeam.next({ id: '',
                                        description: '',
                                        pictureURL: '',
                                        type: '',
                                        role: '',
                                        name: '' });
                hasTeam = false;
              }
            });
          }
          resolve(hasTeam);
        });
        if (this.isDebug) { console.log('currentUserService: checkCurrentTeamExist exit'); }
      }
    */
    checkCurrentUserExist() {
        if (this.isDebug) {
            console.log('currentUserService: checkCurrentUserExist enter');
        }
        return new Promise(resolve => {
            let uid;
            this.currentUser.subscribe((val) => {
                if (val.name !== '') {
                    if (this.isDebug) {
                        console.log('currentUserService: user found', val.uid);
                    }
                    uid = val.uid;
                }
                else {
                    if (this.isDebug) {
                        console.log('currentUserService: no user found');
                    }
                    uid = '';
                    this.cookie.delete('authToken', '/');
                    this.cookie.delete('authType', '/');
                    // this.router.navigate(['']);
                }
                if (this.currentUserId !== uid) {
                    this.currentUserId = uid;
                    //          this.checkCurrentTeam();
                }
            });
            resolve(uid);
        });
        if (this.isDebug) {
            console.log('currentUserService: checkCurrentUserExist exit');
        }
    }
    getCurrentUser() {
        console.log("get current user called");
        console.log(this.currentUser);
        return this.currentUser;
    }
}
CurrentUserController.ɵfac = function CurrentUserController_Factory(t) { return new (t || CurrentUserController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_graphqls__WEBPACK_IMPORTED_MODULE_5__["GetUserGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_graphqls__WEBPACK_IMPORTED_MODULE_5__["RefreshUserGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CurrentUserController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrentUserController, factory: CurrentUserController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrentUserController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }, { type: _graphqls__WEBPACK_IMPORTED_MODULE_5__["GetUserGQL"] }, { type: _graphqls__WEBPACK_IMPORTED_MODULE_5__["RefreshUserGQL"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/index.ts":
/*!**************************************!*\
  !*** ./src/app/controllers/index.ts ***!
  \**************************************/
/*! exports provided: CurrentUserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentUser_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentUser.controller */ "./src/app/controllers/currentUser.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUserController", function() { return _currentUser_controller__WEBPACK_IMPORTED_MODULE_0__["CurrentUserController"]; });




/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











const uri = '../query';
class GraphQLModule {
    constructor(apollo, httpLink, cookie, router) {
        this.cookie = cookie;
        this.router = router;
        const http = httpLink.create({ uri });
        const afterwareLink = new apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"]((operation, forward) => {
            return forward(operation).map((response) => {
                const { response: { body } } = operation.getContext();
                if (body.data.sessionDetail.status === 'Authorized') {
                    console.log('Authorized User');
                    // this.router.navigate(['overview']);
                }
                else if (body.data.sessionDetail.status === 'Refresh') {
                    console.log('Refreshing Session Token');
                    const expDate = new Date();
                    expDate.setSeconds(expDate.getSeconds() + body.data.sessionDetail.expiration);
                    setTimeout(() => this.cookie.set('authToken', body.data.sessionDetail.sessionToken, null, '/', '', true, 'Lax'), 0);
                    setTimeout(() => this.cookie.set('authType', 'Session', null, '/', '', true, 'Lax'), 0);
                    // this.router.navigate(['overview']);
                }
                else {
                    console.log('Unauthorized User');
                    setTimeout(() => this.cookie.delete('authToken', '/'), 0);
                    setTimeout(() => this.cookie.delete('authType', '/'), 0);
                    // this.router.navigate(['']);
                }
                return response;
            });
        });
        const testLink = apollo.create({
            link: afterwareLink.concat(http),
            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"]()
        });
    }
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); }, imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"],
        apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLinkModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, { exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"],
        apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLinkModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"],
                    apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLinkModule"]
                ]
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/graphqls/checkin.graphql.ts":
/*!*********************************************!*\
  !*** ./src/app/graphqls/checkin.graphql.ts ***!
  \*********************************************/
/*! exports provided: GetCheckinGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCheckinGQL", function() { return GetCheckinGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetCheckinGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query GetUser($pinEntry: String!) {
      checkinDetail(pin: $pinEntry) {
        sessionToken
        status
        userID
        expiration
        checkinID
      }
      sessionDetail {
        sessionToken
        status
        userID
        expiration
      }
    }`;
    }
}
GetCheckinGQL.ɵfac = function GetCheckinGQL_Factory(t) { return ɵGetCheckinGQL_BaseFactory(t || GetCheckinGQL); };
GetCheckinGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetCheckinGQL, factory: GetCheckinGQL.ɵfac, providedIn: 'root' });
const ɵGetCheckinGQL_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetCheckinGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetCheckinGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/graphqls/currentUser.graphql.ts":
/*!*************************************************!*\
  !*** ./src/app/graphqls/currentUser.graphql.ts ***!
  \*************************************************/
/*! exports provided: GetUserGQL, RefreshUserGQL, PutUserNameGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserGQL", function() { return GetUserGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshUserGQL", function() { return RefreshUserGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutUserNameGQL", function() { return PutUserNameGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetUserGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query GetUser {
      getUser {
        id
        uid
        name
        email
        pictureURL
      }
      sessionDetail {
        sessionToken
        status
        userID
        expiration
      }
    }`;
    }
}
GetUserGQL.ɵfac = function GetUserGQL_Factory(t) { return ɵGetUserGQL_BaseFactory(t || GetUserGQL); };
GetUserGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetUserGQL, factory: GetUserGQL.ɵfac, providedIn: 'root' });
const ɵGetUserGQL_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetUserGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetUserGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
class RefreshUserGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Mutation"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    mutation refreshUser {
      getUser {
        id
        uid
        name
        email
        pictureURL
      }
      sessionDetail{
        sessionToken
        status
        userID
        expiration
      }
    }`;
    }
}
RefreshUserGQL.ɵfac = function RefreshUserGQL_Factory(t) { return ɵRefreshUserGQL_BaseFactory(t || RefreshUserGQL); };
RefreshUserGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefreshUserGQL, factory: RefreshUserGQL.ɵfac, providedIn: 'root' });
const ɵRefreshUserGQL_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RefreshUserGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshUserGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
class PutUserNameGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Mutation"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    mutation putUserName($updateName: String!) {
      putUserName(name: $updateName) {
        id
        uid
        name
        email
        pictureURL
      }
      sessionDetail{
        sessionToken
        status
        userID
        expiration
      }
    }`;
    }
}
PutUserNameGQL.ɵfac = function PutUserNameGQL_Factory(t) { return ɵPutUserNameGQL_BaseFactory(t || PutUserNameGQL); };
PutUserNameGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PutUserNameGQL, factory: PutUserNameGQL.ɵfac, providedIn: 'root' });
const ɵPutUserNameGQL_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PutUserNameGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PutUserNameGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/graphqls/index.ts":
/*!***********************************!*\
  !*** ./src/app/graphqls/index.ts ***!
  \***********************************/
/*! exports provided: GetUserGQL, RefreshUserGQL, PutUserNameGQL, GetCheckinGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentUser_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentUser.graphql */ "./src/app/graphqls/currentUser.graphql.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserGQL", function() { return _currentUser_graphql__WEBPACK_IMPORTED_MODULE_0__["GetUserGQL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshUserGQL", function() { return _currentUser_graphql__WEBPACK_IMPORTED_MODULE_0__["RefreshUserGQL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutUserNameGQL", function() { return _currentUser_graphql__WEBPACK_IMPORTED_MODULE_0__["PutUserNameGQL"]; });

/* harmony import */ var _checkin_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin.graphql */ "./src/app/graphqls/checkin.graphql.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCheckinGQL", function() { return _checkin_graphql__WEBPACK_IMPORTED_MODULE_1__["GetCheckinGQL"]; });





/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: NotFoundPage, QRCheckinPage, QRCheckinStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notFound_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notFound.page */ "./src/app/pages/notFound.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return _notFound_page__WEBPACK_IMPORTED_MODULE_0__["NotFoundPage"]; });

/* harmony import */ var _qrCheckin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qrCheckin.page */ "./src/app/pages/qrCheckin.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCheckinPage", function() { return _qrCheckin_page__WEBPACK_IMPORTED_MODULE_1__["QRCheckinPage"]; });

/* harmony import */ var _qrCheckinStep2_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qrCheckinStep2.page */ "./src/app/pages/qrCheckinStep2.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCheckinStep2Page", function() { return _qrCheckinStep2_page__WEBPACK_IMPORTED_MODULE_2__["QRCheckinStep2Page"]; });






/***/ }),

/***/ "./src/app/pages/notFound.page.ts":
/*!****************************************!*\
  !*** ./src/app/pages/notFound.page.ts ***!
  \****************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_spinner_spinnerWrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/spinner/spinnerWrapper.component */ "./src/app/shared/spinner/spinnerWrapper.component.ts");



/**
 * Not Found page
 */
class NotFoundPage {
    constructor() {
    }
}
NotFoundPage.ɵfac = function NotFoundPage_Factory(t) { return new (t || NotFoundPage)(); };
NotFoundPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPage, selectors: [["ng-component"]], decls: 6, vars: 0, consts: [[1, "grid-container"], [1, "grid-x"], [1, "cell"]], template: function NotFoundPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Page Not Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-spinner-overlay-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_spinner_spinnerWrapper_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerWrapperComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'notFound.page.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/qrCheckin.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/qrCheckin.page.ts ***!
  \*****************************************/
/*! exports provided: QRCheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCheckinPage", function() { return QRCheckinPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _graphqls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphqls */ "./src/app/graphqls/index.ts");
/* harmony import */ var _shared_utilities_numberPad_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utilities/numberPad.utility */ "./src/app/shared/utilities/numberPad.utility.ts");






/**
 * Not Found page
 */
class QRCheckinPage {
    constructor(numberPadService, getCheckinGQL, alertService, spinnerOverlayService) {
        this.numberPadService = numberPadService;
        this.getCheckinGQL = getCheckinGQL;
        this.alertService = alertService;
        this.spinnerOverlayService = spinnerOverlayService;
        this.padType = 'pin';
        this.loading = false;
    }
    ngOnInit() {
        this.subscription = this.numberPadService.getEntry().subscribe((entry) => {
            this.entry = entry;
            console.log(this.entry.text);
            console.log("loading");
            this.loading = true;
            this.spinnerOverlayService.show();
            this.checkinLookup();
        });
    }
    checkinLookup() {
        if (this.entry != null) {
            this.checkinDetail = this.getCheckinGQL.watch({
                pinEntry: this.entry.text
            })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.data.checkinDetail));
        }
        this.checkinDetail.subscribe(val => {
            console.log(val);
            console.log("complete loading");
            this.spinnerOverlayService.hide();
            this.loading = false;
            if (val.status == "Unauthorized") {
                this.alertService.error("Invalid PIN");
            }
        });
    }
}
QRCheckinPage.ɵfac = function QRCheckinPage_Factory(t) { return new (t || QRCheckinPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["NumberPadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphqls__WEBPACK_IMPORTED_MODULE_3__["GetCheckinGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["SpinnerOverlayService"])); };
QRCheckinPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRCheckinPage, selectors: [["ng-component"]], decls: 13, vars: 1, consts: [[1, "grid-container"], [1, "grid-x"], [1, "cell", "small-12"], [1, "cells", "small-0", "medium-2", "large-3"], [1, "cells", "small-12", "medium-8", "large-6"], [3, "padType"]], template: function QRCheckinPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Liquid Family Checkin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Enter Pin to Setup Checkin Station ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "numberpad", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padType", ctx.padType);
    } }, directives: [_shared_utilities_numberPad_utility__WEBPACK_IMPORTED_MODULE_4__["NumberPadUtility"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRCheckinPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'qrCheckin.page.html',
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["NumberPadService"] }, { type: _graphqls__WEBPACK_IMPORTED_MODULE_3__["GetCheckinGQL"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["SpinnerOverlayService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/qrCheckinStep2.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/qrCheckinStep2.page.ts ***!
  \**********************************************/
/*! exports provided: QRCheckinStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCheckinStep2Page", function() { return QRCheckinStep2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_utilities_numberPad_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utilities/numberPad.utility */ "./src/app/shared/utilities/numberPad.utility.ts");



/**
 * Not Found page
 */
class QRCheckinStep2Page {
    constructor() {
        this.padType = 'phone';
    }
}
QRCheckinStep2Page.ɵfac = function QRCheckinStep2Page_Factory(t) { return new (t || QRCheckinStep2Page)(); };
QRCheckinStep2Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRCheckinStep2Page, selectors: [["ng-component"]], decls: 11, vars: 1, consts: [[1, "grid-container"], [1, "grid-x"], [1, "cell", "small-12"], [1, "cells", "small-0", "medium-2", "large-3"], [1, "cells", "small-12", "medium-8", "large-6"], [3, "padType"]], template: function QRCheckinStep2Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Step 2. Search Family ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Please Enter Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "numberpad", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padType", ctx.padType);
    } }, directives: [_shared_utilities_numberPad_utility__WEBPACK_IMPORTED_MODULE_1__["NumberPadUtility"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRCheckinStep2Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'qrCheckinStep2.page.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        setTimeout(() => this.subject.next({ type: 'success', text: message }), 0);
    }
    error(message, keepAfterNavigationChange = false) {
        console.log(message);
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        setTimeout(() => this.subject.next({ type: 'alert', text: message }), 0);
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: SetupService, LoginService, NumberPadService, AlertService, WaitingService, SpinnerOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.service */ "./src/app/services/setup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return _setup_service__WEBPACK_IMPORTED_MODULE_0__["SetupService"]; });

/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]; });

/* harmony import */ var _numberPad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numberPad.service */ "./src/app/services/numberPad.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberPadService", function() { return _numberPad_service__WEBPACK_IMPORTED_MODULE_2__["NumberPadService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]; });

/* harmony import */ var _waiting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waiting.service */ "./src/app/services/waiting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitingService", function() { return _waiting_service__WEBPACK_IMPORTED_MODULE_4__["WaitingService"]; });

/* harmony import */ var _spinnerOverlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinnerOverlay.service */ "./src/app/services/spinnerOverlay.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerOverlayService", function() { return _spinnerOverlay_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerOverlayService"]; });









/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modals */ "./src/app/shared/modals/index.ts");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");





class LoginService {
    /**
     * Component constructor
     */
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
    }
    /**
     * Open Login Modal Component and subscribe to modal action.
     */
    open() {
        //  open(): void {
        const initialState = {
            class: 'full'
        };
        this.bsModalRef = this.bsModalService.show(_shared_modals__WEBPACK_IMPORTED_MODULE_2__["LoginModal"], { class: 'full' });
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](this.getConfirmSubscriber());
    }
    getConfirmSubscriber() {
        return (observer) => {
            const subscription = this.bsModalService.onHidden.subscribe((reason) => {
                if (reason !== null) {
                    observer.next(reason);
                }
                else {
                    observer.next(this.bsModalRef.content.action);
                }
                observer.complete();
            });
            return {
                unsubscribe() {
                    subscription.unsubscribe();
                }
            };
        };
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsModalService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/numberPad.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/numberPad.service.ts ***!
  \***********************************************/
/*! exports provided: NumberPadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPadService", function() { return NumberPadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class NumberPadService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(entry, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        setTimeout(() => this.subject.next({ type: 'success', text: entry }), 0);
    }
    getEntry() {
        return this.subject.asObservable();
    }
}
NumberPadService.ɵfac = function NumberPadService_Factory(t) { return new (t || NumberPadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NumberPadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NumberPadService, factory: NumberPadService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/setup.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/setup.service.ts ***!
  \*******************************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modals */ "./src/app/shared/modals/index.ts");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");





class SetupService {
    /**
     * Component constructor
     */
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
    }
    /**
     * Open Login Modal Component and subscribe to modal action.
     */
    open() {
        //  open(): void {
        const initialState = {
            class: 'small'
        };
        this.bsModalRef = this.bsModalService.show(_shared_modals__WEBPACK_IMPORTED_MODULE_2__["SetupModal"], { initialState });
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](this.getConfirmSubscriber());
    }
    getConfirmSubscriber() {
        return (observer) => {
            const subscription = this.bsModalService.onHidden.subscribe((reason) => {
                if (reason !== null) {
                    observer.next(reason);
                }
                else {
                    observer.next(this.bsModalRef.content.action);
                }
                observer.complete();
            });
            return {
                unsubscribe() {
                    subscription.unsubscribe();
                }
            };
        };
    }
}
SetupService.ɵfac = function SetupService_Factory(t) { return new (t || SetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsModalService"])); };
SetupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SetupService, factory: SetupService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/spinnerOverlay.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/spinnerOverlay.service.ts ***!
  \****************************************************/
/*! exports provided: SpinnerOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerOverlayService", function() { return SpinnerOverlayService; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/spinner */ "./src/app/shared/spinner/index.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");





class SpinnerOverlayService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayRef = null;
    }
    show(message = '') {
        // Returns an OverlayRef (which is a PortalHost)
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create();
        }
        // Create ComponentPortal that can be attached to a PortalHost
        const spinnerOverlayPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](_shared_spinner__WEBPACK_IMPORTED_MODULE_2__["SpinnerOverlayComponent"]);
        const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
    }
    hide() {
        if (!!this.overlayRef) {
            this.overlayRef.detach();
        }
    }
}
SpinnerOverlayService.ɵfac = function SpinnerOverlayService_Factory(t) { return new (t || SpinnerOverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"])); };
SpinnerOverlayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SpinnerOverlayService, factory: SpinnerOverlayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpinnerOverlayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/waiting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/waiting.service.ts ***!
  \*********************************************/
/*! exports provided: WaitingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingService", function() { return WaitingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/modals */ "./src/app/shared/modals/index.ts");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");




class WaitingService {
    /**
     * Component constructor
     */
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
    }
    /**
     * Open Login Modal Component and subscribe to modal action.
     */
    open() {
        const initialState = {
            class: 'small waiting'
        };
        this.bsModalRef = this.bsModalService.show(_shared_modals__WEBPACK_IMPORTED_MODULE_1__["WaitingModal"], { initialState });
    }
    close() {
        this.bsModalRef.hide();
    }
}
WaitingService.ɵfac = function WaitingService_Factory(t) { return new (t || WaitingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_foundation__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
WaitingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WaitingService, factory: WaitingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_foundation__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/bottomBar.layout.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/layouts/bottomBar.layout.ts ***!
  \****************************************************/
/*! exports provided: BottomBarLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBarLayout", function() { return BottomBarLayout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Bottom Bar Component
 */
class BottomBarLayout {
    constructor() {
    }
}
BottomBarLayout.ɵfac = function BottomBarLayout_Factory(t) { return new (t || BottomBarLayout)(); };
BottomBarLayout.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomBarLayout, selectors: [["bottombar"]], decls: 6, vars: 0, consts: [["id", "bottombar", 1, "social-footer"], [1, "grid-x"], [1, "cell", "small-12", "small-text-center", "medium-shrink", "item-list"], [1, "cell", "small-12", "text-center", "medium-auto", "medium-text-right"], ["src", "/assets/images/logo-footer.png", 1, "logo-footer"]], template: function BottomBarLayout_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".top-bar[_ngcontent-%COMP%] {\n  background-color: #28343E;  \n}\n\n.top-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  background-color: #0C0E13;  \n}\n\n.top-bar[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  font-size:1.4em;\n}\n\n.top-bar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size:1.4em;\n  color: #06A7E2;\n}\n\n.top-bar-left[_ngcontent-%COMP%] {\n  padding-left:10px;\n  max-width: 220px !important;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n\n.top-bar-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  font-size:0.8em;\n  width: 250px !important; \n}\n\n.top-bar-center[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  padding-right: 15px;\n  font-size:0.8em;\n  max-width: 200px;\n  color: #06A7E2;\n}\n\n.top-bar-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left:5px;\n}\n\n.menu.vertical[_ngcontent-%COMP%] {\n  width: 0px;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E6F4F1;\n  font-weight:bold;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 30px;\n  padding-top: 9px;\n  font-weight: bold;\n  color: #E6F4F1;\n}\n\n.logo-footer[_ngcontent-%COMP%] {\n  max-width: 175px;\n  padding-top: 5px;\n  font-weight: bold;\n  color: #E6F4F1;\n}\n\n.button[_ngcontent-%COMP%] {\n  background:#00000000;\n  color: #06A7E2;\n}\n\n.is-dropdown-submenu[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 8px;\n}\n\n.item[_ngcontent-%COMP%] {\n  background-color: #2F536A;\n  border-style: solid;\n  border-width: thin;\n  border-color: #9F8261;\n  opacity:.8;\n}\n\n.social-footer[_ngcontent-%COMP%] {\n  padding: 0.9rem 20px 0 20px;\n  background-color: #28343E; \n  font-size:0.9em;\n  color:white;\n}\n\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  padding-right: 15px;\n  white-space: nowrap;\n}\n\n.item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  color: #06A7E2;\n}\n\n.ng-fa-icon[_ngcontent-%COMP%] {\n  color: #E6F4F1;\n  margin-left: -12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvbGF5b3V0cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2xheW91dHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzNDNFOyAgXG59XG5cbi50b3AtYmFyIHVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEUxMzsgIFxufVxuXG4udG9wLWJhciAubmctZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZToxLjRlbTtcbn1cblxuLnRvcC1iYXIgLm5hbWUge1xuICBmb250LXNpemU6MS40ZW07XG4gIGNvbG9yOiAjMDZBN0UyO1xufVxuXG4udG9wLWJhci1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gIG1heC13aWR0aDogMjIwcHggIWltcG9ydGFudDtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi50b3AtYmFyLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOjAuOGVtO1xuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDsgXG59XG5cbi50b3AtYmFyLWNlbnRlciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6MC44ZW07XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGNvbG9yOiAjMDZBN0UyO1xufVxuXG4udG9wLWJhci1yaWdodCB1bCBsaSB7XG4gIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbi5tZW51LnZlcnRpY2FsIHtcbiAgd2lkdGg6IDBweDtcbn1cblxuLm1lbnUgYSB7XG4gIGNvbG9yOiAjRTZGNEYxO1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogMzBweDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRTZGNEYxO1xufVxuXG4ubG9nby1mb290ZXIge1xuICBtYXgtd2lkdGg6IDE3NXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNFNkY0RjE7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiMwMDAwMDAwMDtcbiAgY29sb3I6ICMwNkE3RTI7XG59XG5cbi5pcy1kcm9wZG93bi1zdWJtZW51IHtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGNTM2QTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItY29sb3I6ICM5RjgyNjE7XG4gIG9wYWNpdHk6Ljg7XG59XG5cbi5zb2NpYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMC45cmVtIDIwcHggMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzNDNFOyBcbiAgZm9udC1zaXplOjAuOWVtO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaXRlbS1saXN0IGEge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGNvbG9yOiAjMDZBN0UyO1xufVxuXG4ubmctZmEtaWNvbiB7XG4gIGNvbG9yOiAjRTZGNEYxO1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomBarLayout, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bottombar',
                templateUrl: 'bottomBar.layout.html',
                styleUrls: ['layouts.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: TopBarLayout, BottomBarLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topBar_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topBar.layout */ "./src/app/shared/layouts/topBar.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBarLayout", function() { return _topBar_layout__WEBPACK_IMPORTED_MODULE_0__["TopBarLayout"]; });

/* harmony import */ var _bottomBar_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottomBar.layout */ "./src/app/shared/layouts/bottomBar.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomBarLayout", function() { return _bottomBar_layout__WEBPACK_IMPORTED_MODULE_1__["BottomBarLayout"]; });





/***/ }),

/***/ "./src/app/shared/layouts/topBar.layout.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/layouts/topBar.layout.ts ***!
  \*************************************************/
/*! exports provided: TopBarLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarLayout", function() { return TopBarLayout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers */ "./src/app/controllers/index.ts");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function TopBarLayout_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scan Badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Event Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "What to Expect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["far", "sign-in"]; };
function TopBarLayout_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function TopBarLayout_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentUser_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentUser_r24.name, " ");
} }
function TopBarLayout_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopBarLayout_div_14_div_1_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopBarLayout_div_14_div_2_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentUser_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentUser_r24.name == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentUser_r24.name != "");
} }
const _c1 = function () { return ["far", "bars"]; };
/**
 * Top Bar Component
 */
class TopBarLayout {
    constructor(loginService, currentUserController) {
        this.loginService = loginService;
        this.currentUserController = currentUserController;
    }
    /**
     * Initialize Top Bar Component and calls checkUser()
     */
    ngOnInit() {
        this.currentUserController.updateCurrentUser();
        this.currentUser = this.currentUserController.getCurrentUser();
    }
    /**
     * Opens [LoginModalComponent]{@link LoginModalComponent}
     */
    openModal() {
        this.loginService.open().subscribe((action) => {
        });
    }
}
TopBarLayout.ɵfac = function TopBarLayout_Factory(t) { return new (t || TopBarLayout)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controllers__WEBPACK_IMPORTED_MODULE_2__["CurrentUserController"])); };
TopBarLayout.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarLayout, selectors: [["topbar"]], inputs: { topbarTitle: "topbarTitle" }, decls: 16, vars: 5, consts: [[1, "top-bar"], [1, "top-bar-left", "text-left"], ["dropdown", "", 1, "dropdown", "menu"], ["dropdown", "bs-dropdown"], [1, "is-dropdown-submenu-parent"], ["dropdownToggle", "", "type", "button", "aria-controls", "dropdown-button", 1, "button"], [3, "icon"], ["id", "dropdown-button", "class", "menu is-dropdown-submenu", "role", "menu", 4, "dropdownMenu"], [1, "logo"], ["src", "/assets/images/logo.png", 2, "width", "30px"], [1, "top-bar-center"], [1, "menu", "float-right"], [3, "click"], [4, "ngIf"], ["id", "dropdown-button", "role", "menu", 1, "menu", "is-dropdown-submenu"], ["role", "menuitem", 1, "item"], ["routerLink", "/", "routerLinkActive", "active"], ["routerLink", "/guest-lookup", "routerLinkActive", "active"], ["routerLink", "/site-plan", "routerLinkActive", "active"], ["routerLink", "/schedule", "routerLinkActive", "active"], ["routerLink", "/role-docs", "routerLinkActive", "active"], [1, "name"]], template: function TopBarLayout_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TopBarLayout_ul_7_Template, 16, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarLayout_Template_button_click_13_listener($event) { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TopBarLayout_div_14_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 2, ctx.currentUser));
    } }, directives: [ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsDropdownDirective"], ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsDropdownToggleDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], ngx_foundation__WEBPACK_IMPORTED_MODULE_3__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".top-bar[_ngcontent-%COMP%] {\n  background-color: #28343E;  \n}\n\n.top-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  background-color: #0C0E13;  \n}\n\n.top-bar[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  font-size:1.4em;\n}\n\n.top-bar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size:1.4em;\n  color: #06A7E2;\n}\n\n.top-bar-left[_ngcontent-%COMP%] {\n  padding-left:10px;\n  max-width: 220px !important;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n\n.top-bar-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  font-size:0.8em;\n  width: 250px !important; \n}\n\n.top-bar-center[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  padding-right: 15px;\n  font-size:0.8em;\n  max-width: 200px;\n  color: #06A7E2;\n}\n\n.top-bar-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left:5px;\n}\n\n.menu.vertical[_ngcontent-%COMP%] {\n  width: 0px;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E6F4F1;\n  font-weight:bold;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 30px;\n  padding-top: 9px;\n  font-weight: bold;\n  color: #E6F4F1;\n}\n\n.logo-footer[_ngcontent-%COMP%] {\n  max-width: 175px;\n  padding-top: 5px;\n  font-weight: bold;\n  color: #E6F4F1;\n}\n\n.button[_ngcontent-%COMP%] {\n  background:#00000000;\n  color: #06A7E2;\n}\n\n.is-dropdown-submenu[_ngcontent-%COMP%] {\n  border: 0px;\n  padding-top: 8px;\n}\n\n.item[_ngcontent-%COMP%] {\n  background-color: #2F536A;\n  border-style: solid;\n  border-width: thin;\n  border-color: #9F8261;\n  opacity:.8;\n}\n\n.social-footer[_ngcontent-%COMP%] {\n  padding: 0.9rem 20px 0 20px;\n  background-color: #28343E; \n  font-size:0.9em;\n  color:white;\n}\n\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  padding-right: 15px;\n  white-space: nowrap;\n}\n\n.item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  color: #06A7E2;\n}\n\n.ng-fa-icon[_ngcontent-%COMP%] {\n  color: #E6F4F1;\n  margin-left: -12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvbGF5b3V0cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2xheW91dHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzNDNFOyAgXG59XG5cbi50b3AtYmFyIHVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEUxMzsgIFxufVxuXG4udG9wLWJhciAubmctZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZToxLjRlbTtcbn1cblxuLnRvcC1iYXIgLm5hbWUge1xuICBmb250LXNpemU6MS40ZW07XG4gIGNvbG9yOiAjMDZBN0UyO1xufVxuXG4udG9wLWJhci1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gIG1heC13aWR0aDogMjIwcHggIWltcG9ydGFudDtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi50b3AtYmFyLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOjAuOGVtO1xuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDsgXG59XG5cbi50b3AtYmFyLWNlbnRlciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6MC44ZW07XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGNvbG9yOiAjMDZBN0UyO1xufVxuXG4udG9wLWJhci1yaWdodCB1bCBsaSB7XG4gIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbi5tZW51LnZlcnRpY2FsIHtcbiAgd2lkdGg6IDBweDtcbn1cblxuLm1lbnUgYSB7XG4gIGNvbG9yOiAjRTZGNEYxO1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogMzBweDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRTZGNEYxO1xufVxuXG4ubG9nby1mb290ZXIge1xuICBtYXgtd2lkdGg6IDE3NXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNFNkY0RjE7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiMwMDAwMDAwMDtcbiAgY29sb3I6ICMwNkE3RTI7XG59XG5cbi5pcy1kcm9wZG93bi1zdWJtZW51IHtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGNTM2QTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItY29sb3I6ICM5RjgyNjE7XG4gIG9wYWNpdHk6Ljg7XG59XG5cbi5zb2NpYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMC45cmVtIDIwcHggMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzNDNFOyBcbiAgZm9udC1zaXplOjAuOWVtO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaXRlbS1saXN0IGEge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGNvbG9yOiAjMDZBN0UyO1xufVxuXG4ubmctZmEtaWNvbiB7XG4gIGNvbG9yOiAjRTZGNEYxO1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarLayout, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'topbar',
                templateUrl: 'topBar.layout.html',
                styleUrls: ['layouts.css'],
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _controllers__WEBPACK_IMPORTED_MODULE_2__["CurrentUserController"] }]; }, { topbarTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modals/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/modals/index.ts ***!
  \****************************************/
/*! exports provided: SetupModal, LoginModal, WaitingModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.modal */ "./src/app/shared/modals/setup.modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetupModal", function() { return _setup_modal__WEBPACK_IMPORTED_MODULE_0__["SetupModal"]; });

/* harmony import */ var _login_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.modal */ "./src/app/shared/modals/login.modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginModal", function() { return _login_modal__WEBPACK_IMPORTED_MODULE_1__["LoginModal"]; });

/* harmony import */ var _waiting_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waiting.modal */ "./src/app/shared/modals/waiting.modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitingModal", function() { return _waiting_modal__WEBPACK_IMPORTED_MODULE_2__["WaitingModal"]; });






/***/ }),

/***/ "./src/app/shared/modals/login.modal.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/modals/login.modal.ts ***!
  \**********************************************/
/*! exports provided: LoginModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModal", function() { return LoginModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controllers */ "./src/app/controllers/index.ts");
/* harmony import */ var _graphqls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../graphqls */ "./src/app/graphqls/index.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function LoginModal_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModal_div_7_div_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.signinWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign in with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginModal_div_7_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentUser_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentUser_r1.name);
} }
const _c0 = function () { return ["far", "pencil-alt"]; };
function LoginModal_div_7_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModal_div_7_div_2_div_11_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.editNameOn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["far", "check-square"]; };
const _c2 = function () { return ["far", "times-square"]; };
function LoginModal_div_7_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModal_div_7_div_2_div_12_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.editNameSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModal_div_7_div_2_div_12_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.editNameCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
function LoginModal_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginModal_div_7_div_2_span_10_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginModal_div_7_div_2_div_11_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginModal_div_7_div_2_div_12_Template, 5, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModal_div_7_div_2_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logoff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentUser_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", currentUser_r1.pictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isEditingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isEditingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isEditingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentUser_r1.email);
} }
function LoginModal_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginModal_div_7_div_1_Template, 7, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginModal_div_7_div_2_Template, 23, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentUser_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentUser_r1.name == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentUser_r1.name != "");
} }
/**
 * Login Modal component
 */
class LoginModal {
    /**
     * Component constructor
     */
    constructor(
    /**
     * Imports BsModalRef
     */
    bsModalRef, router, socialAuthService, cookie, currentUserController, putUserNameGQL) {
        this.bsModalRef = bsModalRef;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.cookie = cookie;
        this.currentUserController = currentUserController;
        this.putUserNameGQL = putUserNameGQL;
        /**
         * @ignore
         */
        this.isDebug = true;
    }
    /**
     * Initialize modal component by loading current user.
     */
    ngOnInit() {
        if (this.isDebug) {
            console.log('loginModal ngOnInit');
        }
        this.currentUser = this.currentUserController.getCurrentUser();
        //this.currentUser = null;
        this.isEditingName = false;
    }
    /**
     * Close the modal.
     */
    closeModal() {
        this.bsModalRef.content.action = 'canceled';
        this.bsModalRef.hide();
    }
    /**
     * Triggers sign in using Google.
     * Sets Google Auth Token.
     * Triggers current user refresh to update name.
     */
    signinWithGoogle() {
        const socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
            console.log('socialAuthService userData', userData);
            setTimeout(() => this.cookie.set('authToken', userData.idToken, null, '/', '', true, 'Lax'), 0);
            this.cookie.set('authType', 'Google', null, '/', '', true, 'Lax');
            setTimeout(() => this.currentUserController.currentUserRefresh(), 300);
            setTimeout(() => {
                this.bsModalRef.content.action = 'logged in';
                this.bsModalRef.hide();
            }, 300);
        });
    }
    /**
     * Triggers sign out.
     */
    signOut() {
        this.bsModalRef.content.action = 'logged out';
        this.cookie.delete('authToken', '/');
        this.cookie.delete('authType', '/');
        this.socialAuthService.signOut();
        this.isEditingName = false;
        setTimeout(() => this.currentUserController.currentUserRefresh(), 200);
    }
    /**
     * Triggers display name edit.
     */
    editNameOn() {
        this.currentUser.subscribe((val) => {
            this.newName = val.name;
        });
        this.isEditingName = true;
    }
    /**
     * Cancels display name edit.
     */
    editNameCancel() {
        setTimeout(() => this.isEditingName = false, 40);
        this.currentUser.subscribe((val) => {
            this.newName = val.name;
        });
    }
    /**
     * Saves new display name if not the same as current display name.
     */
    editNameSubmit() {
        /**
        this.currentUser.subscribe((val) => {
          if (this.newName.trim() !== val.name) {
            this.putUserNameGQL
                .mutate({
                    updateName: this.newName.trim(),
                })
                .subscribe(result => {
                });
              setTimeout(() => this.isEditingName = false, 40);
          } else {
            this.editNameCancel();
          }
        });
        */
    }
}
LoginModal.ɵfac = function LoginModal_Factory(t) { return new (t || LoginModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_foundation__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controllers__WEBPACK_IMPORTED_MODULE_5__["CurrentUserController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphqls__WEBPACK_IMPORTED_MODULE_6__["PutUserNameGQL"])); };
LoginModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginModal, selectors: [["loginModal"]], decls: 9, vars: 5, consts: [["aria-label", "Close modal", "type", "button", 1, "close-button", 3, "click"], ["size", "xs", 3, "icon"], [4, "ngIf"], ["class", "grid-y", "style", "height: 200px;", 4, "ngIf"], ["class", "grid-y", "style", "height: 400px;", 4, "ngIf"], [1, "grid-y", 2, "height", "200px"], [1, "grid-x"], [1, "cell", "small-10", "small-offset-1", "medium-6", "medium-offset-3", "text-center"], [1, "button", "expanded", "google", "loginButton", 3, "click"], [1, "icon-google"], [1, "text-google"], [1, "grid-y", 2, "height", "400px"], [1, "cell", "small-8"], [1, "cell", "small-10", "small-offset-1", "medium-8", "medium-offset-2"], ["alt", "User Picture", 1, "thumbnail", "float-center", 3, "src"], [1, "cell", "small-10"], [1, "name"], ["class", "cell auto", 4, "ngIf"], [1, "cell", "small-4"], [1, "cell", "small-6", "small-offset-3", "medium-4", "medium-offset-4"], [1, "hollow", "button", "expanded", "alert", 3, "click"], [1, "cell", "auto"], ["type", "button", 1, "textbox-button", 3, "click"], [3, "icon"], [1, "cta", "green", 3, "icon"], [1, "cta", "red", 3, "icon"]], template: function LoginModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModal_Template_button_click_2_listener($event) { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This login is for Administrators only.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginModal_div_7_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.currentUser));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".button.google[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  color: #444;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  padding: 10px 0 10px 0;\n}\n\nspan.label[_ngcontent-%COMP%] {\n  font-family: serif;\n  font-weight: normal;\n}\n\nspan.icon-google[_ngcontent-%COMP%] {\n  background: url('https://developers.google.com/identity/images/g-logo.png') transparent 5px 50% no-repeat;\n  background-size: 20px 20px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 25px;\n  height: 20px;\n}\n\nspan.text-google[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 1.1em;\n  font-weight: bold;\n  font-color: #000000;\n  \n  font-family: 'Roboto', sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top:8px;\n}\n\n.loginButton[_ngcontent-%COMP%] {\n  margin-top:65px;\n}\n\n.cta[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  padding-left: 4px;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n.cookie-warning[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.waiting[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFscy9tb2RhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLG1CQUFjO1VBQWQsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5R0FBeUc7RUFDekcsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFscy9tb2RhbHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi5nb29nbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHRoaW4gc29saWQgIzg4ODtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggZ3JleTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleDogMSAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbnNwYW4ubGFiZWwge1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnNwYW4uaWNvbi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2lkZW50aXR5L2ltYWdlcy9nLWxvZ28ucG5nJykgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbnNwYW4udGV4dC1nb29nbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtY29sb3I6ICMwMDAwMDA7XG4gIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6OHB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBtYXJnaW4tdG9wOjY1cHg7XG59XG5cbi5jdGEge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLmNvb2tpZS13YXJuaW5nIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi53YWl0aW5nIHtcbiAgb3BhY2l0eTogMC45O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loginModal',
                templateUrl: 'login.modal.html',
                styleUrls: ['modals.css']
            }]
    }], function () { return [{ type: ngx_foundation__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }, { type: _controllers__WEBPACK_IMPORTED_MODULE_5__["CurrentUserController"] }, { type: _graphqls__WEBPACK_IMPORTED_MODULE_6__["PutUserNameGQL"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modals/setup.modal.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/modals/setup.modal.ts ***!
  \**********************************************/
/*! exports provided: SetupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModal", function() { return SetupModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");




const _c0 = function () { return ["far", "times-square"]; };
/**
 * Login Modal component
 */
class SetupModal {
    /**
     * Component constructor
     */
    constructor(
    /**
     * Imports BsModalRef
     */
    bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    /**
     * Initialize modal component by loading current user.
     */
    ngOnInit() {
        console.log('setupModal ngOnInit');
    }
    /**
     * Close the modal.
     */
    closeModal() {
        this.bsModalRef.content.action = 'canceled';
        this.bsModalRef.hide();
    }
}
SetupModal.ɵfac = function SetupModal_Factory(t) { return new (t || SetupModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_foundation__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"])); };
SetupModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupModal, selectors: [["setupModal"]], decls: 7, vars: 2, consts: [["aria-label", "Close modal", "type", "button", 1, "close-button", 3, "click"], ["size", "xs", 3, "icon"]], template: function SetupModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetupModal_Template_button_click_2_listener($event) { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Site Setup\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".button.google[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  color: #444;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  padding: 10px 0 10px 0;\n}\n\nspan.label[_ngcontent-%COMP%] {\n  font-family: serif;\n  font-weight: normal;\n}\n\nspan.icon-google[_ngcontent-%COMP%] {\n  background: url('https://developers.google.com/identity/images/g-logo.png') transparent 5px 50% no-repeat;\n  background-size: 20px 20px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 25px;\n  height: 20px;\n}\n\nspan.text-google[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 1.1em;\n  font-weight: bold;\n  font-color: #000000;\n  \n  font-family: 'Roboto', sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top:8px;\n}\n\n.loginButton[_ngcontent-%COMP%] {\n  margin-top:65px;\n}\n\n.cta[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  padding-left: 4px;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n.cookie-warning[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.waiting[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFscy9tb2RhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLG1CQUFjO1VBQWQsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5R0FBeUc7RUFDekcsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFscy9tb2RhbHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi5nb29nbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHRoaW4gc29saWQgIzg4ODtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggZ3JleTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleDogMSAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbnNwYW4ubGFiZWwge1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnNwYW4uaWNvbi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2lkZW50aXR5L2ltYWdlcy9nLWxvZ28ucG5nJykgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbnNwYW4udGV4dC1nb29nbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtY29sb3I6ICMwMDAwMDA7XG4gIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6OHB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBtYXJnaW4tdG9wOjY1cHg7XG59XG5cbi5jdGEge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLmNvb2tpZS13YXJuaW5nIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi53YWl0aW5nIHtcbiAgb3BhY2l0eTogMC45O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'setupModal',
                templateUrl: 'setup.modal.html',
                styleUrls: ['modals.css']
            }]
    }], function () { return [{ type: ngx_foundation__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modals/waiting.modal.ts":
/*!************************************************!*\
  !*** ./src/app/shared/modals/waiting.modal.ts ***!
  \************************************************/
/*! exports provided: WaitingModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingModal", function() { return WaitingModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Login Modal component
 */
class WaitingModal {
}
WaitingModal.ɵfac = function WaitingModal_Factory(t) { return new (t || WaitingModal)(); };
WaitingModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitingModal, selectors: [["waitingModal"]], decls: 2, vars: 0, template: function WaitingModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".button.google[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  color: #444;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  padding: 10px 0 10px 0;\n}\n\nspan.label[_ngcontent-%COMP%] {\n  font-family: serif;\n  font-weight: normal;\n}\n\nspan.icon-google[_ngcontent-%COMP%] {\n  background: url('https://developers.google.com/identity/images/g-logo.png') transparent 5px 50% no-repeat;\n  background-size: 20px 20px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 25px;\n  height: 20px;\n}\n\nspan.text-google[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 1.1em;\n  font-weight: bold;\n  font-color: #000000;\n  \n  font-family: 'Roboto', sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top:8px;\n}\n\n.loginButton[_ngcontent-%COMP%] {\n  margin-top:65px;\n}\n\n.cta[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  padding-left: 4px;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n.cookie-warning[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.waiting[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFscy9tb2RhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLG1CQUFjO1VBQWQsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5R0FBeUc7RUFDekcsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFscy9tb2RhbHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi5nb29nbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHRoaW4gc29saWQgIzg4ODtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggZ3JleTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleDogMSAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbnNwYW4ubGFiZWwge1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnNwYW4uaWNvbi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2lkZW50aXR5L2ltYWdlcy9nLWxvZ28ucG5nJykgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbnNwYW4udGV4dC1nb29nbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtY29sb3I6ICMwMDAwMDA7XG4gIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6OHB4O1xufVxuXG4ubG9naW5CdXR0b24ge1xuICBtYXJnaW4tdG9wOjY1cHg7XG59XG5cbi5jdGEge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLmNvb2tpZS13YXJuaW5nIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi53YWl0aW5nIHtcbiAgb3BhY2l0eTogMC45O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitingModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'waitingModal',
                templateUrl: 'waiting.modal.html',
                styleUrls: ['modals.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/spinner/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/spinner/index.ts ***!
  \*****************************************/
/*! exports provided: SpinnerComponent, SpinnerWrapperComponent, SpinnerOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return _spinner_component__WEBPACK_IMPORTED_MODULE_0__["SpinnerComponent"]; });

/* harmony import */ var _spinnerWrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinnerWrapper.component */ "./src/app/shared/spinner/spinnerWrapper.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerWrapperComponent", function() { return _spinnerWrapper_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerWrapperComponent"]; });

/* harmony import */ var _spinnerOverlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinnerOverlay.component */ "./src/app/shared/spinner/spinnerOverlay.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerOverlayComponent", function() { return _spinnerOverlay_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerOverlayComponent"]; });






/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerComponent {
    constructor() {
        this.message = '';
    }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { message: "message" }, decls: 2, vars: 0, consts: [[1, "loader2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n          animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n          animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #00ffea none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n          animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #00aaff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n          animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #0040ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n          animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n          animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #9500ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n          animation: 0.8s linear 0.7s normal none infinite running load;\n  background: magenta none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n          animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@-webkit-keyframes load {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n.spinner-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.loader2[_ngcontent-%COMP%], .loader2[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n\n.loader2[_ngcontent-%COMP%] {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(120, 120, 32, 0.2);\n  border-right: 1.1em solid rgba(120, 120, 32, 0.2);\n  border-bottom: 1.1em solid rgba(120, 120, 32, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhYm94L3dvcmtzcGFjZS9uZ2FwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNDRjs7QURFQTtFQUNFLHFFQUFBO1VBQUEsNkRBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUVBQUE7VUFBQSw2REFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFFQUFBO1VBQUEsNkRBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUVBQUE7VUFBQSw2REFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7QUNDRjs7QURFQTtFQUNFLHFFQUFBO1VBQUEsNkRBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNDRjtBQUNGOztBRExBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7WUFBQSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtZQUFBLG1CQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGtCQUFBO0FDREY7O0FES0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaURBQUE7RUFDQSxrREFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx3QkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7QUNERjs7QURHQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQ0FGO0VERUE7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VDQUY7QUFDRjs7QURFQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSx1QkFBQTtFQ0FGO0VERUE7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGVyIHtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE3NXB4O1xufVxuXG4jbG9hZGVyIHtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE3NXB4O1xufVxuXG4jbG9hZGVyIC5kb3Qge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA4Ny41cHg7XG59XG5cbiNsb2FkZXIgLmRvdDo6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA4Ny41cHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgd2lkdGg6IDg3LjVweDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisxKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisxKTo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcbiAgYmFja2dyb3VuZDogIzAwZmY4MCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzIpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjMDBmZmVhIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjMDBhYWZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjMDA0MGZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjMmEwMGZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjOTUwMGZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiBtYWdlbnRhIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rOCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjZmYwMDk1IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3R0b206IC00MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkIHtcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZCB7XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uc3Bpbm5lci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5sb2FkZXIyLFxuLmxvYWRlcjI6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG59XG4ubG9hZGVyMiB7XG4gIG1hcmdpbjogNjBweCBhdXRvO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMTIwLDEyMCwgMzIsIDAuMik7XG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgxMjAsMTIwLCAzMiwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgxMjAsMTIwLCAzMiwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiIsIiNsb2FkZXIge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTc1cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbiNsb2FkZXIge1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTc1cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbiNsb2FkZXIgLmRvdCB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDg3LjVweDtcbn1cblxuI2xvYWRlciAuZG90OjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDg3LjVweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB3aWR0aDogODcuNXB4O1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpOjpiZWZvcmUge1xuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICBiYWNrZ3JvdW5kOiAjMDBmZjgwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMik6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4ycyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6ICMwMGZmZWEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMyk6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4zcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6ICMwMGFhZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNCk6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC40cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6ICMwMDQwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNSk6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC41cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6ICMyYTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNik6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC42cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6ICM5NTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNyk6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC43cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6IG1hZ2VudGEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rOCk6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC44cyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XG4gIGJhY2tncm91bmQ6ICNmZjAwOTUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAubG9hZGluZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvdHRvbTogLTQwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWQge1xuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZCB7XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLnNwaW5uZXItbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvYWRlcjIsXG4ubG9hZGVyMjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbn1cblxuLmxvYWRlcjIge1xuICBtYXJnaW46IDYwcHggYXV0bztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDEyMCwgMTIwLCAzMiwgMC4yKTtcbiAgYm9yZGVyLXJpZ2h0OiAxLjFlbSBzb2xpZCByZ2JhKDEyMCwgMTIwLCAzMiwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgxMjAsIDEyMCwgMzIsIDAuMik7XG4gIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjZmZmZmZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/spinner/spinnerOverlay.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/spinner/spinnerOverlay.component.ts ***!
  \************************************************************/
/*! exports provided: SpinnerOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerOverlayComponent", function() { return SpinnerOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component */ "./src/app/shared/spinner/spinner.component.ts");



class SpinnerOverlayComponent {
    constructor() {
    }
    ngOnInit() { }
}
SpinnerOverlayComponent.ɵfac = function SpinnerOverlayComponent_Factory(t) { return new (t || SpinnerOverlayComponent)(); };
SpinnerOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerOverlayComponent, selectors: [["spinnerOverlay"]], inputs: { message: "message" }, decls: 2, vars: 0, consts: [[1, "spinner-wrapper"]], template: function SpinnerOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_spinner_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerComponent"]], styles: [".spinner-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 998;\n}\n.spinner-wrapper[_ngcontent-%COMP%]   app-spinner[_ngcontent-%COMP%] {\n  width: 6rem;\n  height: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhYm94L3dvcmtzcGFjZS9uZ2FwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXJPdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyT3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXJPdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHotaW5kZXg6IDk5ODtcbiAgICBhcHAtc3Bpbm5lciB7XG4gICAgICAgIHdpZHRoOiA2cmVtO1xuICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgfVxufSIsIi5zcGlubmVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgei1pbmRleDogOTk4O1xufVxuLnNwaW5uZXItd3JhcHBlciBhcHAtc3Bpbm5lciB7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spinnerOverlay',
                templateUrl: './spinnerOverlay.component.html',
                styleUrls: ['./spinnerOverlay.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/spinner/spinnerWrapper.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/spinner/spinnerWrapper.component.ts ***!
  \************************************************************/
/*! exports provided: SpinnerWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWrapperComponent", function() { return SpinnerWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ "./src/app/shared/spinner/spinner.component.ts");




function SpinnerWrapperComponent_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.message);
} }
function SpinnerWrapperComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerWrapperComponent_div_1_p_3_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.message);
} }
const _c0 = ["*"];
class SpinnerWrapperComponent {
    constructor() {
        this.showSpinner = false;
        this.message = 'Loading...';
    }
    ngOnInit() {
    }
}
SpinnerWrapperComponent.ɵfac = function SpinnerWrapperComponent_Factory(t) { return new (t || SpinnerWrapperComponent)(); };
SpinnerWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerWrapperComponent, selectors: [["app-spinner-overlay-wrapper"]], inputs: { showSpinner: "showSpinner", message: "message" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "wrapper"], ["class", "overlay", 4, "ngIf"], [1, "loaded-content"], [1, "overlay"], [1, "spinner-wrapper"], [4, "ngIf"]], template: function SpinnerWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerWrapperComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blurred", ctx.showSpinner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%;\n}\n\n.spinner-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhYm94L3dvcmtzcGFjZS9uZ2FwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXJXcmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyV3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXJXcmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3Bpbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn0iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner-overlay-wrapper',
                templateUrl: './spinnerWrapper.component.html',
                styleUrls: ['./spinnerWrapper.component.scss']
            }]
    }], function () { return []; }, { showSpinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/utilities/alertBanner.utility.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/utilities/alertBanner.utility.ts ***!
  \*********************************************************/
/*! exports provided: AlertBannerUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBannerUtility", function() { return AlertBannerUtility; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/__ivy_ngcc__/index.js");






function AlertBannerUtility_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "alert", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertBannerUtility_div_0_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.clearAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r32.type)("dismissible", ctx_r31.dismissible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", alert_r32.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AlertBannerUtility {
    constructor(alertBannerService) {
        this.alertBannerService = alertBannerService;
        this.dismissible = true;
        this.alerts = [];
    }
    ngOnInit() {
        this.subscription = this.alertBannerService.getMessage().subscribe((message) => {
            console.log('error', message);
            if (message != null) {
                console.log('message exist');
                this.alerts.push(message);
                setTimeout(() => this.alerts.pop(), 5000);
            }
        });
        // this.alerts.push({
        //   type: 'success',
        //  text: `<strong>Well done!</strong> You successfully read this important alert message.`
        // });
        console.log(this.alerts);
    }
    clearAlert() {
        this.alerts.pop();
        // setTimeout(() => this.message = '', 500);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AlertBannerUtility.ɵfac = function AlertBannerUtility_Factory(t) { return new (t || AlertBannerUtility)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
AlertBannerUtility.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertBannerUtility, selectors: [["alertBanner"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "type", "dismissible"], [3, "innerHtml"], ["aria-label", "Dismiss alert", "type", "button", "data-close", "", 1, "close-button", 3, "click"], ["aria-hidden", "true"]], template: function AlertBannerUtility_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertBannerUtility_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('insertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)', opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertBannerUtility, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alertBanner',
                templateUrl: 'alertBanner.utility.html',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('insertRemoveTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)', opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/utilities/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/utilities/index.ts ***!
  \*******************************************/
/*! exports provided: AlertBannerUtility, NumberPadUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _numberPad_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberPad.utility */ "./src/app/shared/utilities/numberPad.utility.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberPadUtility", function() { return _numberPad_utility__WEBPACK_IMPORTED_MODULE_0__["NumberPadUtility"]; });

/* harmony import */ var _alertBanner_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alertBanner.utility */ "./src/app/shared/utilities/alertBanner.utility.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertBannerUtility", function() { return _alertBanner_utility__WEBPACK_IMPORTED_MODULE_1__["AlertBannerUtility"]; });





/***/ }),

/***/ "./src/app/shared/utilities/numberPad.utility.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/utilities/numberPad.utility.ts ***!
  \*******************************************************/
/*! exports provided: NumberPadUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPadUtility", function() { return NumberPadUtility; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





const _c0 = function () { return ["far", "arrow-alt-square-right"]; };
function NumberPadUtility_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_div_5_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.submitEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["far", "trash-alt"]; };
const _c2 = function () { return ["far", "backspace"]; };
/**
 * Bottom Bar Component
 */
class NumberPadUtility {
    constructor(numberPadService) {
        this.numberPadService = numberPadService;
        this.entryNumber = '';
        this.pinNumber = '';
        this.numberComplete = false;
    }
    ngOnInit() {
        var element = document.getElementById('buttonCell');
        var positionInfo = element.getBoundingClientRect();
        this.buttonCellWidth = positionInfo.width;
        var elements = document.getElementsByClassName('buttonCtr');
        var i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.marginLeft = ((this.buttonCellWidth / 2) - 30).toString() + "px";
        }
        var elements = document.getElementsByClassName('buttonLeft');
        var i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.marginLeft = (this.buttonCellWidth - 60).toString() + "px";
        }
    }
    numberEnter(inputValue) {
        switch (this.padType) {
            case "phone":
                if (!this.numberComplete) {
                    if (this.entryNumber === '') {
                        if (inputValue !== '0' && inputValue !== '1') {
                            this.entryNumber = inputValue;
                        }
                    }
                    else if (this.entryNumber !== '') {
                        this.entryNumber = this.entryNumber + inputValue;
                    }
                    this.phoneNumFormat();
                }
                break;
            case "pin":
                if (!this.numberComplete) {
                    this.entryNumber = this.entryNumber + '*';
                    this.pinNumber = this.pinNumber + inputValue;
                    this.pinNumberFormat();
                }
                break;
        }
    }
    numberDelete() {
        switch (this.padType) {
            case "phone":
                if (this.entryNumber !== undefined) {
                    if (this.entryNumber.charAt(this.entryNumber.length - 1) == '-') {
                        this.entryNumber = this.entryNumber.substring(0, this.entryNumber.length - 1);
                    }
                    this.entryNumber = this.entryNumber.substring(0, this.entryNumber.length - 1);
                    this.numberComplete = false;
                }
                break;
            case "pin":
                if (this.entryNumber !== undefined) {
                    this.entryNumber = this.entryNumber.substring(0, this.entryNumber.length - 1);
                    this.pinNumber = this.pinNumber.substring(0, this.pinNumber.length - 1);
                    this.numberComplete = false;
                    break;
                }
        }
    }
    clearEntry() {
        this.entryNumber = "";
        this.pinNumber = "";
        this.numberComplete = false;
    }
    submitEntry() {
        if (this.numberComplete) {
            this.numberPadService.success(this.pinNumber);
            this.clearEntry();
        }
    }
    pinNumberFormat() {
        if (this.entryNumber == "******") {
            this.numberComplete = true;
        }
    }
    phoneNumFormat() {
        if (this.entryNumber == '1') {
            this.entryNumber = '1-';
        }
        let phoneSegment = this.entryNumber.split('-');
        let phoneSegmentCount = phoneSegment.length;
        if (this.entryNumber.charAt(0) == '1') {
            phoneSegmentCount = phoneSegmentCount - 1;
        }
        switch (phoneSegmentCount) {
            case 1:
                if (phoneSegment[phoneSegment.length - 1].length == 3) {
                    this.entryNumber = this.entryNumber + '-';
                }
                ;
                break;
            case 2:
                if (phoneSegment[phoneSegment.length - 1].length == 3) {
                    this.entryNumber = this.entryNumber + '-';
                }
                ;
                break;
            case 3:
                if (phoneSegment[phoneSegment.length - 1].length == 4) {
                    this.numberComplete = true;
                }
                ;
                break;
        }
    }
}
NumberPadUtility.ɵfac = function NumberPadUtility_Factory(t) { return new (t || NumberPadUtility)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["NumberPadService"])); };
NumberPadUtility.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPadUtility, selectors: [["numberpad"]], inputs: { padType: "padType" }, decls: 53, vars: 6, consts: [[1, "grid-x"], [1, "cell", "small-1", "medium-2"], [1, "cell", "small-10", "medium-8", "numberDisplay"], [4, "ngIf"], ["id", "buttonCell", 1, "cell", "small-4"], [1, "buttonLeft", "numberBtn", "hollow", "button", 3, "click"], [1, "cell", "small-4"], [1, "buttonCtr", "numberBtn", "hollow", "button", 3, "click"], [1, "buttonRgt", "numberBtn", "hollow", "button", 3, "click"], [1, "buttonLeft", "trashBtn", 3, "click"], [3, "icon"], [1, "buttonRgt", "deleteBtn", 3, "click"], [1, "submitBtn", 3, "click"]], template: function NumberPadUtility_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPadUtility_div_5_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_8_listener($event) { return ctx.numberEnter("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_12_listener($event) { return ctx.numberEnter("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_16_listener($event) { return ctx.numberEnter("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_20_listener($event) { return ctx.numberEnter("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_24_listener($event) { return ctx.numberEnter("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_28_listener($event) { return ctx.numberEnter("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_32_listener($event) { return ctx.numberEnter("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_36_listener($event) { return ctx.numberEnter("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_40_listener($event) { return ctx.numberEnter("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_44_listener($event) { return ctx.clearEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_47_listener($event) { return ctx.numberEnter("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPadUtility_Template_a_click_51_listener($event) { return ctx.numberDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.entryNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberComplete == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".numberBtn[_ngcontent-%COMP%] { \n  font-family: monospace; \n  border-radius: 1.4em; \n  width: 2.8em; \n  height: 2.8em; \n  font-size: 1.4em; \n  padding-top: 0.8em; \n  padding-left: 1.0em; \n  text-align: center;\n  border-width: 0.1em;\n}\n\n.deleteBtn[_ngcontent-%COMP%] {\n  font-size: 1.8em !important;\n  padding-left: 0.2em;\n}\n\n.trashBtn[_ngcontent-%COMP%] {\n  font-size: 1.8em !important;\n  padding-left: 0.4em;\n}\n\n.submitBtn[_ngcontent-%COMP%] {\n  font-size: 1.8em !important;\n}\n\n.numberDisplay[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 2em;\n  text-align: center;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3V0aWxpdGllcy9udW1iZXJQYWQudXRpbGl0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3V0aWxpdGllcy9udW1iZXJQYWQudXRpbGl0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyQnRuIHsgXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IFxuICBib3JkZXItcmFkaXVzOiAxLjRlbTsgXG4gIHdpZHRoOiAyLjhlbTsgXG4gIGhlaWdodDogMi44ZW07IFxuICBmb250LXNpemU6IDEuNGVtOyBcbiAgcGFkZGluZy10b3A6IDAuOGVtOyBcbiAgcGFkZGluZy1sZWZ0OiAxLjBlbTsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXdpZHRoOiAwLjFlbTtcbn1cblxuLmRlbGV0ZUJ0biB7XG4gIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbn1cblxuLnRyYXNoQnRuIHtcbiAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgZm9udC1zaXplOiAxLjhlbSAhaW1wb3J0YW50O1xufVxuXG4ubnVtYmVyRGlzcGxheSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPadUtility, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'numberpad',
                templateUrl: 'numberPad.utility.html',
                styleUrls: ['numberPad.utility.css'],
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["NumberPadService"] }]; }, { padType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cabox/workspace/ngapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map