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




const routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: "full" },
    { path: 'Accueil', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) },
    { path: 'Association', loadChildren: () => Promise.all(/*! import() | association-association-module */[__webpack_require__.e("default~association-association-module~securite-laboratoire-securite-laboratoire-module"), __webpack_require__.e("association-association-module")]).then(__webpack_require__.bind(null, /*! ./association/association.module */ "./src/app/association/association.module.ts")).then(m => m.AssociationModule) },
    { path: 'SecuriteLaboratoire', loadChildren: () => Promise.all(/*! import() | securite-laboratoire-securite-laboratoire-module */[__webpack_require__.e("default~association-association-module~securite-laboratoire-securite-laboratoire-module"), __webpack_require__.e("securite-laboratoire-securite-laboratoire-module")]).then(__webpack_require__.bind(null, /*! ./securite-laboratoire/securite-laboratoire.module */ "./src/app/securite-laboratoire/securite-laboratoire.module.ts")).then(m => m.SecuriteLaboratoireModule) },
    { path: 'ActualiteActivite', loadChildren: () => __webpack_require__.e(/*! import() | actualite-activite-actualite-activite-module */ "actualite-activite-actualite-activite-module").then(__webpack_require__.bind(null, /*! ./actualite-activite/actualite-activite.module */ "./src/app/actualite-activite/actualite-activite.module.ts")).then(m => m.ActualiteActiviteModule) },
    { path: 'nous-contacter', loadChildren: () => Promise.all(/*! import() | nous-contacter-nous-contacter-module */[__webpack_require__.e("common"), __webpack_require__.e("nous-contacter-nous-contacter-module")]).then(__webpack_require__.bind(null, /*! ./nous-contacter/nous-contacter.module */ "./src/app/nous-contacter/nous-contacter.module.ts")).then(m => m.NousContacterModule) },
    { path: 'DesDons', loadChildren: () => Promise.all(/*! import() | donations-donations-module */[__webpack_require__.e("common"), __webpack_require__.e("donations-donations-module")]).then(__webpack_require__.bind(null, /*! ./donations/donations.module */ "./src/app/donations/donations.module.ts")).then(m => m.DonationsModule) },
    { path: 'Adhésion', loadChildren: () => Promise.all(/*! import() | membership-membership-module */[__webpack_require__.e("common"), __webpack_require__.e("membership-membership-module")]).then(__webpack_require__.bind(null, /*! ./membership/membership.module */ "./src/app/membership/membership.module.ts")).then(m => m.MembershipModule) }
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
/* harmony import */ var _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _fixed_button_fixed_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fixed-button/fixed-button.component */ "./src/app/fixed-button/fixed-button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_front_front_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/front/front.component */ "./src/app/components/front/front.component.ts");










class AppComponent {
    constructor(proxy, CmSvc, translate) {
        this.proxy = proxy;
        this.CmSvc = CmSvc;
        this.translate = translate;
        this.ui_direction = 'ltr';
        this.isLoading = true;
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.CmSvc.UI_Direction.subscribe(x => this.ui_direction = x);
    }
    ngOnInit() {
        this.Show_Logout$ = this.CmSvc.Is_Logged_In;
    }
    onActivate(event) {
        window.scroll(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [["id", "preloder"], [1, "content-wrapper"], [1, "content"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-fixed-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"], _fixed_button_fixed_button_component__WEBPACK_IMPORTED_MODULE_6__["FixedButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _components_front_front_component__WEBPACK_IMPORTED_MODULE_8__["FrontComponent"]], styles: [".page-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.sticky-header[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  min-height: 60px;\n  \n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.footer[_ngcontent-%COMP%] {\n  min-height: 60px;\n  \n  flex-grow: 0;\n  background-color: #1c9042 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEVtaWx5cyBBc3NvY2lhdGlvbiBXZWJzaXRlXFxFbWlseXNORy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0NKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0aWNreS1oZWFkZXIge1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIC8qIHdoYXRldmVyIHlvdSB3YW50IGl0IHRvIGJlICovXHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgLyogd2hhdGV2ZXIgeW91IHdhbnQgaXQgdG8gYmUgKi9cclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiLnBhZ2Utd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0aWNreS1oZWFkZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIC8qIHdoYXRldmVyIHlvdSB3YW50IGl0IHRvIGJlICovXG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mb290ZXIge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICAvKiB3aGF0ZXZlciB5b3Ugd2FudCBpdCB0byBiZSAqL1xuICBmbGV4LWdyb3c6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDIgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: _core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_front_front_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/front/front.component */ "./src/app/components/front/front.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_main_menu_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-menu/coming-soon/coming-soon.component */ "./src/app/components/main-menu/coming-soon/coming-soon.component.ts");
/* harmony import */ var _components_front_copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/front/copyrights/copyrights.component */ "./src/app/components/front/copyrights/copyrights.component.ts");
/* harmony import */ var _core_Guard_RouterGuard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/Guard/RouterGuard */ "./src/app/core/Guard/RouterGuard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_Interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/Interceptor/interceptor.service */ "./src/app/core/Interceptor/interceptor.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_Material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/Material/material.module */ "./src/app/core/Material/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _send_forms_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./send-forms.service */ "./src/app/send-forms.service.ts");
/* harmony import */ var _contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-dialog/contact-dialog.component */ "./src/app/contact-dialog/contact-dialog.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navigation-menu/navigation-menu.component */ "./src/app/components/navigation-menu/navigation-menu.component.ts");
/* harmony import */ var _fixed_button_fixed_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fixed-button/fixed-button.component */ "./src/app/fixed-button/fixed-button.component.ts");
/* harmony import */ var _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _send_forms_service__WEBPACK_IMPORTED_MODULE_16__["SendFormsService"],
        _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_21__["Proxy"],
        _core_services_common_service__WEBPACK_IMPORTED_MODULE_22__["CommonService"],
        _core_Guard_RouterGuard__WEBPACK_IMPORTED_MODULE_8__["CanActivateThisRoute"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _core_Interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["MyHttpInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_Material_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-top-right',
                closeButton: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_front_front_component__WEBPACK_IMPORTED_MODULE_4__["FrontComponent"],
        _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"],
        _components_front_copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_7__["CopyrightsComponent"],
        _components_main_menu_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonComponent"],
        _contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ContactDialogComponent"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"],
        _components_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_19__["NavigationMenuComponent"],
        _fixed_button_fixed_button_component__WEBPACK_IMPORTED_MODULE_20__["FixedButtonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_Material_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_front_front_component__WEBPACK_IMPORTED_MODULE_4__["FrontComponent"],
                    _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"],
                    _components_front_copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_7__["CopyrightsComponent"],
                    _components_main_menu_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonComponent"],
                    _contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ContactDialogComponent"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"],
                    _components_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_19__["NavigationMenuComponent"],
                    _fixed_button_fixed_button_component__WEBPACK_IMPORTED_MODULE_20__["FixedButtonComponent"],
                ],
                entryComponents: [],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_Material_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                        }
                    }),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                        timeOut: 5000,
                        positionClass: 'toast-top-right',
                        closeButton: true
                    })
                ],
                providers: [
                    _send_forms_service__WEBPACK_IMPORTED_MODULE_16__["SendFormsService"],
                    _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_21__["Proxy"],
                    _core_services_common_service__WEBPACK_IMPORTED_MODULE_22__["CommonService"],
                    _core_Guard_RouterGuard__WEBPACK_IMPORTED_MODULE_8__["CanActivateThisRoute"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _core_Interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["MyHttpInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/front/copyrights/copyrights.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/front/copyrights/copyrights.component.ts ***!
  \*********************************************************************/
/*! exports provided: CopyrightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightsComponent", function() { return CopyrightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CopyrightsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CopyrightsComponent.ɵfac = function CopyrightsComponent_Factory(t) { return new (t || CopyrightsComponent)(); };
CopyrightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightsComponent, selectors: [["app-copyrights"]], decls: 23, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], ["id", "logo"], [1, "Men-Leg"], [1, "text-center"], ["href", "https://mail.google.com/mail/?view=cm&fs=1&to=associationemilys@gmail.com&su=subject_here&body=body_here"]], template: function CopyrightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mentions l\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "En vertu de l'article 6 de la loi n\u00B0 2004-575 du 21 juin 2004 pour la confiance dans l'\u00E9conomie num\u00E9rique, il est pr\u00E9cis\u00E9 aux utilisateurs du site Emilys l'identit\u00E9 des diff\u00E9rents intervenants dans le cadre de sa r\u00E9alisation et de son suivi : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "L\u2019Association Emilys est une association reconnue loi de 1901. Le si\u00E8ge social de l\u2019association a \u00E9t\u00E9 d\u00E9fini \u00E0 l\u2019adresse suivante : 129 avenue de Saint Ouen, 75017 PARIS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Le nom du directeur de la publication: Abir Tadmouri.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "H\u00E9bergeur : IONOS by 1&1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RGPD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conform\u00E9ment \u00E0 la Loi \u00AB Informatique et Libert\u00E9s \u00BB n\u00B0 78-17 du 6 janvier 1978, les informations vous concernant sont destin\u00E9es \u00E0 Emilys, responsable du traitement. Vous disposez d'un droit d'acc\u00E8s, de rectification et de suppression des donn\u00E9es qui vous concernent. Vous pouvez exercer ce droit en adressant un e-mail \u00E0 l'adresse \u00E9lectronique suivante:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "associationemilys@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Le responsable du traitement des Donn\u00E9es Personnelles (DPO) \u00E9tant : G\u00E9rald Sellier. Vos donn\u00E9es personnelles communiqu\u00E9es ne seront en aucun cas vendues ou transmises \u00E0 des tiers ou \u00E0 d'autres entreprises \u00E0 des fins commerciales et publicitaires. Consultez le site cnil.fr pour plus d\u2019informations sur vos droits. Si vous estimez, apr\u00E8s nous avoir contact\u00E9s, que vos droits \u00AB Informatique et Libert\u00E9s \u00BB ne sont pas respect\u00E9s, vous pouvez adresser une r\u00E9clamation \u00E0 la CNIL.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".col-md-12[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n#logo[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  font-family: system-ui;\n  color: #555;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 25px;\n  font-weight: 800;\n  letter-spacing: -3px;\n  line-height: 1;\n  text-shadow: #EDEDED 3px 2px 0;\n  position: relative;\n}\n\n#logo[_ngcontent-%COMP%]:after {\n  \n  background-image: -webkit-linear-gradient(left top, transparent 0%, transparent 25%, #555 25%, #555 50%, transparent 50%, transparent 75%, #555 75%);\n  background-size: 4px 4px;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  z-index: -5;\n  display: block;\n  text-shadow: none;\n}\n\np[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-family: system-ui;\n  font-size: 20px;\n  font-weight: 800;\n  padding-bottom: 10px;\n  text-align: left;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-family: system-ui;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: left;\n  text-align: left;\n  list-style-type: decimal;\n}\n\na[_ngcontent-%COMP%] {\n  font-family: system-ui;\n  font-size: 18px;\n  font-weight: bold;\n  color: #196919;\n}\n\na[_ngcontent-%COMP%]:hover {\n  font-style: italic;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcm9udC9jb3B5cmlnaHRzL0Q6XFxFbWlseXMgQXNzb2NpYXRpb24gV2Vic2l0ZVxcRW1pbHlzTkcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZyb250XFxjb3B5cmlnaHRzXFxjb3B5cmlnaHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zyb250L2NvcHlyaWdodHMvY29weXJpZ2h0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtRkFBQTtFQUNBLG9KQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zyb250L2NvcHlyaWdodHMvY29weXJpZ2h0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMTIge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXNoYWRvdzogI0VERURFRCAzcHggMnB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNsb2dvOmFmdGVyIHtcclxuICAgIC8qYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc3VidGxlcGF0dGVybnMuY29tL3BhdHRlcm5zL2Nyb3NzZWRfc3RyaXBlcy5wbmcpIHJlcGVhdDsqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCB0b3AsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAyNSUsICM1NTUgMjUlLCAjNTU1IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCA3NSUsICM1NTUgNzUlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogLTU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyNSwgMTA1LCAyNSk7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4iLCIuY29sLW1kLTEyIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuI2xvZ28ge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogLTNweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtc2hhZG93OiAjRURFREVEIDNweCAycHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbG9nbzphZnRlciB7XG4gIC8qYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc3VidGxlcGF0dGVybnMuY29tL3BhdHRlcm5zL2Nyb3NzZWRfc3RyaXBlcy5wbmcpIHJlcGVhdDsqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDI1JSwgIzU1NSAyNSUsICM1NTUgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50IDc1JSwgIzU1NSA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCA0cHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IC01O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbnAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudWwgbGkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xufVxuXG5hIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMxOTY5MTk7XG59XG5cbmE6aG92ZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copyrights',
                templateUrl: './copyrights.component.html',
                styleUrls: ['./copyrights.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/front/front.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/front/front.component.ts ***!
  \*****************************************************/
/*! exports provided: FrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontComponent", function() { return FrontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FrontComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FrontComponent.ɵfac = function FrontComponent_Factory(t) { return new (t || FrontComponent)(); };
FrontComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontComponent, selectors: [["app-front"]], decls: 32, vars: 4, consts: [[1, "footer-bottom"], [1, "copyright", 2, "margin-right", "10px"], ["href", "https://www.facebook.com/Association-Emilys-112651087182550/", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "copyright"], ["href", "https://mail.google.com/mail/?view=cm&fs=1&to=associationemilys@gmail.com&su=subject_here&body=body_here", "target", "_blank"], [1, "fab", "fa-google-plus-g"], [1, "footer-bottom-copyright-text"], [1, "footer-bottom-social-icons"], ["id", "footer-social-links"], [3, "routerLink"], [1, "footer-bottom-site-credit"], ["id", "site-credit"], ["href", "https://www.facebook.com/mindsunionleb", "target", "_blank"]], template: function FrontComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A9 2020 Association Emilys | Tous droits r\u00E9serv\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mentions L\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "RGPD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nous contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Copyright \u00A9 2020-2021 MindsUnion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/MentionsL\u00E9gales/RGPD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/MentionsL\u00E9gales/RGPD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/nous-contacter");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #1c9042;\n  min-width: 400px;\n  width: 100%;\n  text-align: center;\n  \n  color: black;\n  font-weight: bold;\n}\n\n.footer-bottom-site-credit[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 27px;\n  cursor: pointer;\n}\n\n.copyright[_ngcontent-%COMP%]:hover {\n  color: #6fb86f;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #6fb86f;\n}\n\n@media only screen and (max-width: 480px) {\n  .footer-bottom-copyright-text[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n\n  .footer-bottom-social-icons[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .footer-bottom[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .footer-bottom-copyright-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .footer-bottom-social-icons[_ngcontent-%COMP%] {\n    background-color: #1c9042;\n  }\n\n  .footer-bottom-site-credit[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n\n  #footer-social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    display: inline-block;\n    padding: 0px 10px;\n  }\n}\n\n@media only screen and (min-width: 961px) {\n  .footer-bottom[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .footer-bottom-copyright-text[_ngcontent-%COMP%] {\n    float: center;\n    \n    \n  }\n\n  .footer-bottom-social-icons[_ngcontent-%COMP%] {\n    background-color: #1c9042;\n    text-align: center;\n    \n  }\n\n  #footer-social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    display: inline-block;\n    padding: 8px 10px 0px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcm9udC9EOlxcRW1pbHlzIEFzc29jaWF0aW9uIFdlYnNpdGVcXEVtaWx5c05HL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmcm9udFxcZnJvbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEY0E7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQ1hEOztBRGNBO0VBQ0UsY0FBQTtBQ1hGOztBRGNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxjQUFBO0FDWEo7O0FEY0E7RUFDSTtJQUNJLGNBQUE7RUNYTjs7RURhRTtJQUNJLGNBQUE7RUNWTjtBQUNGOztBRGFBO0VBQ0k7SUFDSSxrQkFBQTtFQ1hOOztFRGFFO0lBQ0ksV0FBQTtFQ1ZOOztFRGFFO0lBQ0kseUJBQUE7RUNWTjs7RURZRTtJQUNJLGtCQUFBO0VDVE47O0VEV0U7SUFDSSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUNSTjtBQUNGOztBRFdBO0VBQ0k7SUFDSSxrQkFBQTtFQ1ROOztFRFdFO0lBQ0ksYUFBQTtJQUVBLGlDQUFBO0lBQ0E7bUJBQUE7RUNSTjs7RURXRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSx3QkFBQTtFQ1JOOztFRFVFO0lBQ0ksZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLDBCQUFBO0VDUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAyNXB4OyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tLXNpdGUtY3JlZGl0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vIHNwYW4jc2l0ZS1jcmVkaXQgYSB7XHJcbi8vICAgICBjb2xvcjogcmdiKDE4MiwgMjM4LCAxODIpO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgLy9mb250LXN0eWxlOiBpdGFsaWM7XHJcbi8vICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4vLyB9XHJcblxyXG4vLyBzcGFuI3NpdGUtY3JlZGl0IGE6aG92ZXIge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgICBjb2xvcjogI2ZiZTkyYztcclxuLy8gfVxyXG5cclxuLmNvcHlyaWdodHtcclxuIGZvbnQtc2l6ZTogMjdweDtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvcHlyaWdodDpob3ZlcntcclxuICBjb2xvcjpyZ2IoMTExLCAxODQsIDExMSlcclxuIH1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTExLCAxODQsIDExMSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5mb290ZXItYm90dG9tLWNvcHlyaWdodC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDgwJTtcclxuICAgIH1cclxuICAgIC5mb290ZXItYm90dG9tLXNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5mb290ZXItYm90dG9tIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWJvdHRvbS1jb3B5cmlnaHQtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1ib3R0b20tc29jaWFsLWljb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MDQyO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1ib3R0b20tc2l0ZS1jcmVkaXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgICNmb290ZXItc29jaWFsLWxpbmtzIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xyXG4gICAgLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5mb290ZXItYm90dG9tLWNvcHlyaWdodC10ZXh0IHtcclxuICAgICAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgICAgIC8vbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAvKiBwYWRkaW5nOiAzMHB4IDEwcHggMHB4IDEwcHg7ICovXHJcbiAgICAgICAgLyogbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyAqL1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1ib3R0b20tc29jaWFsLWljb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MDQyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvKiBwYWRkaW5nOiAyMHB4IDEwcHg7ICovXHJcbiAgICB9XHJcbiAgICAjZm9vdGVyLXNvY2lhbC1saW5rcyBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogbGluZS1oZWlnaHQ6IDI1cHg7ICovXG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb290ZXItYm90dG9tLXNpdGUtY3JlZGl0IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29weXJpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICM2ZmI4NmY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNmZiODZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb290ZXItYm90dG9tLWNvcHlyaWdodC10ZXh0IHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgfVxuXG4gIC5mb290ZXItYm90dG9tLXNvY2lhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmZvb3Rlci1ib3R0b20ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mb290ZXItYm90dG9tLWNvcHlyaWdodC10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5mb290ZXItYm90dG9tLXNvY2lhbC1pY29ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcbiAgfVxuXG4gIC5mb290ZXItYm90dG9tLXNpdGUtY3JlZGl0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cblxuICAjZm9vdGVyLXNvY2lhbC1saW5rcyBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcbiAgLmZvb3Rlci1ib3R0b20ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mb290ZXItYm90dG9tLWNvcHlyaWdodC10ZXh0IHtcbiAgICBmbG9hdDogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDMwcHggMTBweCAwcHggMTBweDsgKi9cbiAgICAvKiBsaW5lLWhlaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7ICovXG4gIH1cblxuICAuZm9vdGVyLWJvdHRvbS1zb2NpYWwtaWNvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDIwcHggMTBweDsgKi9cbiAgfVxuXG4gICNmb290ZXItc29jaWFsLWxpbmtzIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTBweCAwcHggMTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-front',
                templateUrl: './front.component.html',
                styleUrls: ['./front.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 9, vars: 0, template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["figure[_ngcontent-%COMP%] {\n  margin: 0;\n  transform: translate(-50%, -50%) rotate(0deg) scale(1.4, 1.4);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 150px;\n  box-sizing: border-box;\n  -webkit-animation: rotation 20s infinite linear;\n          animation: rotation 20s infinite linear;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border: 1px solid #08220c;\n  box-sizing: border-box;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  -webkit-animation: shuffle 2s infinite;\n          animation: shuffle 2s infinite;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(45deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(90deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(135deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(180deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  -webkit-animation-delay: -2.5s;\n          animation-delay: -2.5s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(225deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(270deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  -webkit-animation-delay: -3.5s;\n          animation-delay: -3.5s;\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(315deg);\n}\n\nfigure[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  -webkit-animation-delay: -4;\n          animation-delay: -4;\n}\n\n@-webkit-keyframes rotation {\n  100% {\n    transform: translate(-50%, -50%) rotate(-360deg) scale(1.4, 1.4);\n  }\n}\n\n@keyframes rotation {\n  100% {\n    transform: translate(-50%, -50%) rotate(-360deg) scale(1.4, 1.4);\n  }\n}\n\n@-webkit-keyframes shuffle {\n  50% {\n    transform: scale(0.4, 0.4) rotate(-90deg);\n    border-radius: 50%;\n  }\n}\n\n@keyframes shuffle {\n  50% {\n    transform: scale(0.4, 0.4) rotate(-90deg);\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvRDpcXEVtaWx5cyBBc3NvY2lhdGlvbiBXZWJzaXRlXFxFbWlseXNORy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFPLFNBQUE7RUFBUyw2REFBQTtFQUEyRCxrQkFBQTtFQUFrQixTQUFBO0VBQVMsUUFBQTtFQUFRLG9CQUFBO0VBQW9CLHNCQUFBO0VBQXNCLCtDQUFBO1VBQUEsdUNBQUE7QUNReEo7O0FETkE7RUFBaUIsV0FBQTtFQUFXLFdBQUE7RUFBVyxZQUFBO0VBQVkseUJBQUE7RUFBeUIsc0JBQUE7RUFBc0Isa0JBQUE7RUFBa0IsVUFBQTtFQUFVLFNBQUE7RUFBUyxzQ0FBQTtVQUFBLDhCQUFBO0FDa0J2STs7QURoQkE7RUFBd0IsdUJBQUE7QUNvQnhCOztBRG5CQTtFQUE4Qiw4QkFBQTtVQUFBLHNCQUFBO0FDdUI5Qjs7QUR0QkE7RUFBd0Isd0JBQUE7QUMwQnhCOztBRHpCQTtFQUE4Qiw0QkFBQTtVQUFBLG9CQUFBO0FDNkI5Qjs7QUQ1QkE7RUFBd0Isd0JBQUE7QUNnQ3hCOztBRC9CQTtFQUE4Qiw4QkFBQTtVQUFBLHNCQUFBO0FDbUM5Qjs7QURsQ0E7RUFBd0IseUJBQUE7QUNzQ3hCOztBRHJDQTtFQUE4Qiw0QkFBQTtVQUFBLG9CQUFBO0FDeUM5Qjs7QUR4Q0E7RUFBd0IseUJBQUE7QUM0Q3hCOztBRDNDQTtFQUE4Qiw4QkFBQTtVQUFBLHNCQUFBO0FDK0M5Qjs7QUQ5Q0E7RUFBd0IseUJBQUE7QUNrRHhCOztBRGpEQTtFQUE4Qiw0QkFBQTtVQUFBLG9CQUFBO0FDcUQ5Qjs7QURwREE7RUFBd0IseUJBQUE7QUN3RHhCOztBRHZEQTtFQUE4Qiw4QkFBQTtVQUFBLHNCQUFBO0FDMkQ5Qjs7QUQxREE7RUFBd0IseUJBQUE7QUM4RHhCOztBRDdEQTtFQUE4QiwyQkFBQTtVQUFBLG1CQUFBO0FDaUU5Qjs7QUQvREE7RUFDRTtJQUFLLGdFQUFBO0VDbUVMO0FBQ0Y7O0FEckVBO0VBQ0U7SUFBSyxnRUFBQTtFQ21FTDtBQUNGOztBRGxFQTtFQUNFO0lBQUkseUNBQUE7SUFBd0Msa0JBQUE7RUNzRTVDO0FBQ0Y7O0FEeEVBO0VBQ0U7SUFBSSx5Q0FBQTtJQUF3QyxrQkFBQTtFQ3NFNUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5maWd1cmV7bWFyZ2luOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjQsMS40KTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO2JvcmRlci1yYWRpdXM6MTUwcHg7Ym94LXNpemluZzpib3JkZXItYm94O2FuaW1hdGlvbjpyb3RhdGlvbiAyMHMgaW5maW5pdGUgbGluZWFyO31cclxuXHJcbmZpZ3VyZSBkaXY6YWZ0ZXJ7Y29udGVudDpcIlwiO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7Ym9yZGVyOjFweCBzb2xpZCAjMDgyMjBjO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIwcHg7dG9wOjIwcHg7YW5pbWF0aW9uOnNodWZmbGUgMnMgaW5maW5pdGU7fVxyXG5cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoMSl7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX1cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXJ7YW5pbWF0aW9uLWRlbGF5Oi0wLjVzO31cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoMil7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9XHJcbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDIpOmFmdGVye2FuaW1hdGlvbi1kZWxheTotMXM7fVxyXG5maWd1cmUgZGl2Om50aC1jaGlsZCgzKXt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX1cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXJ7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzO31cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoNCl7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfVxyXG5maWd1cmUgZGl2Om50aC1jaGlsZCg0KTphZnRlcnthbmltYXRpb24tZGVsYXk6LTJzO31cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoNSl7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfVxyXG5maWd1cmUgZGl2Om50aC1jaGlsZCg1KTphZnRlcnthbmltYXRpb24tZGVsYXk6LTIuNXM7fVxyXG5maWd1cmUgZGl2Om50aC1jaGlsZCg2KXt0cmFuc2Zvcm06cm90YXRlKDIyNWRlZyl9XHJcbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDYpOmFmdGVye2FuaW1hdGlvbi1kZWxheTotM3M7fVxyXG5maWd1cmUgZGl2Om50aC1jaGlsZCg3KXt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9XHJcbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDcpOmFmdGVye2FuaW1hdGlvbi1kZWxheTotMy41czt9XHJcbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDgpe3RyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKX1cclxuZmlndXJlIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXJ7YW5pbWF0aW9uLWRlbGF5Oi00O31cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb257XHJcbiAgMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuNCwxLjQpO31cclxufVxyXG5Aa2V5ZnJhbWVzIHNodWZmbGV7XHJcbiAgNTAle3RyYW5zZm9ybTpzY2FsZSgwLjQsMC40KSByb3RhdGUoLTkwZGVnKTtib3JkZXItcmFkaXVzOjUwJTt9XHJcbn1cclxuIiwiZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZykgc2NhbGUoMS40LCAxLjQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IHJvdGF0aW9uIDIwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbmZpZ3VyZSBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDgyMjBjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgYW5pbWF0aW9uOiBzaHVmZmxlIDJzIGluZmluaXRlO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuZmlndXJlIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjVzO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCg0KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XG59XG5cbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuZmlndXJlIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICBhbmltYXRpb24tZGVsYXk6IC0yLjVzO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCg2KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XG59XG5cbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuZmlndXJlIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICBhbmltYXRpb24tZGVsYXk6IC0zLjVzO1xufVxuXG5maWd1cmUgZGl2Om50aC1jaGlsZCg4KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG59XG5cbmZpZ3VyZSBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtMzYwZGVnKSBzY2FsZSgxLjQsIDEuNCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2h1ZmZsZSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCkgcm90YXRlKC05MGRlZyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main-menu/coming-soon/coming-soon.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/main-menu/coming-soon/coming-soon.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ComingSoonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(); };
ComingSoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 11, vars: 0, consts: [["id", "minimal-bootstrap-carousel", "data-ride", "carousel", "data-interval", "6000", 1, "carousel", "slide", "carousel-fade", "slider-content-style", "slider-home-one"], [1, "carousel-inner"], [1, "carousel-item", "active", "slide-1", "darken-pseudo", 2, "background-image", "url('assets/img/page-en-construction.jpg')"], [1, "carousel-caption"], [1, "container"], [1, "box", "valign-middle"], [1, "content", "text-center"], ["data-animation", "animated fadeInUp"]], template: function ComingSoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Travail en cours..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cette section est actuellement en d\u00E9veloppement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#minimal-bootstrap-carousel[_ngcontent-%COMP%] {\r\n        margin-top: 0px;\r\n        position: relative;\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n        padding: 0;\r\n        text-align: right;\r\n        text-shadow: none;\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n        display: table;\r\n        width: 100%;\r\n        height: 100%;\r\n        max-width: 1140px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 1199px) {\r\n        #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n            max-width: 960px;\r\n        }\r\n    }\r\n    @media (max-width: 991px) {\r\n        #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n            max-width: 720px;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n    }\r\n    @media (max-width: 667px) {\r\n        #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n            max-width: 720px;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n        #minimal-bootstrap-carousel[_ngcontent-%COMP%]   [class*=carousel-control][_ngcontent-%COMP%] {\r\n            width: 30px;\r\n            height: 30px;\r\n            font-size: 15px;\r\n            line-height: 30px;\r\n        }\r\n    }\r\n    @media (max-width: 480px) {\r\n        #minimal-bootstrap-carousel[_ngcontent-%COMP%]   [class*=carousel-control][_ngcontent-%COMP%] {\r\n            width: 40px;\r\n            height: 40px;\r\n            font-size: 17px;\r\n            line-height: 40px;\r\n            background: rgba(255, 255, 255, 0.4);\r\n            color: #000;\r\n        }\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n        display: table-cell;\r\n        text-align: left;\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box.valign-top[_ngcontent-%COMP%] {\r\n        vertical-align: top;\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box.valign-bottom[_ngcontent-%COMP%] {\r\n        vertical-align: bottom;\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box.valign-middle[_ngcontent-%COMP%] {\r\n        vertical-align: middle;\r\n    }\r\n    #minimal-bootstrap-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .darken-pseudo[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n    .darken-pseudo[_ngcontent-%COMP%]:after {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        display: block;\r\n        background-color: rgba(0, 0, 0, 0.733);\r\n    }\r\n    #minimal-bootstrap-carousel.slider-home-one[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\r\n        min-height: 650px;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center center;\r\n        background-color: #222;\r\n    }\r\n    .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        position: relative;\r\n        z-index: 999;\r\n    }\r\n    .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n    .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        color: rgb(151, 151, 52);\r\n        font-size: 80px;\r\n        line-height: 1em;\r\n        font-weight: 600;\r\n        font-family: 'Josefin Sans';\r\n        -webkit-animation-delay: .5s;\r\n        animation-delay: .5s;\r\n    }\r\n    .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n        font-weight: bold;\r\n        font-size: 30px;\r\n        color: #FFFFFF;\r\n        letter-spacing: .150em;\r\n        margin-top: 20px;\r\n        -webkit-animation-delay: 1.5s;\r\n        animation-delay: 1.5s;\r\n    }\r\n    .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a.thm-btn[_ngcontent-%COMP%] {\r\n        background: #ffba60;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        color: #222222;\r\n        font-size: 18px;\r\n        letter-spacing: .1em;\r\n        font-family: 'Josefin Sans';\r\n        font-weight: 600;\r\n        padding: 10px 17px;\r\n        margin-top: 27px;\r\n        transition: all .4s ease;\r\n        -webkit-animation-delay: 2s;\r\n        animation-delay: 2s;\r\n    }\r\n    .slider-content-style[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a.thm-btn[_ngcontent-%COMP%]:hover {\r\n        background: #fff;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW1lbnUvY29taW5nLXNvb24vY29taW5nLXNvb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTs7Ozs7Ozs7Ozs7OztHQWFEO0lBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJEO0lBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFFSDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sUUFBUTtRQUNSLE9BQU87UUFDUCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUVBO1FBQ0k7WUFDSSxnQkFBZ0I7UUFDcEI7SUFDSjtJQUVBO1FBQ0k7WUFDSSxnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtRQUN2QjtJQUNKO0lBRUE7UUFDSTtZQUNJLGdCQUFnQjtZQUNoQix1QkFBdUI7WUFDdkIsbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7UUFDckI7SUFDSjtJQUVBO1FBQ0k7WUFDSSxXQUFXO1lBQ1gsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsb0NBQW9DO1lBQ3BDLFdBQVc7UUFDZjtJQUNKO0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLGNBQWM7UUFDZCxzQ0FBc0M7SUFDMUM7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztRQUNYLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsa0NBQWtDO1FBQ2xDLHNCQUFzQjtJQUMxQjtJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCO0lBRUE7OztRQUdJLFNBQVM7SUFDYjtJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsb0JBQW9CO0lBQ3hCO0lBRUE7UUFDSSxxR0FBcUc7UUFDckcsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQiw2QkFBNkI7UUFDN0IscUJBQXFCO0lBQ3pCO0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQixtQkFBbUI7SUFDdkI7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLyogLmRhcmtlbi1wc2V1ZG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGFya2VuLXBzZXVkbzphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU3NSk7XHJcbn0gKi9cclxuICAgIC8qIC5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSksIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGFnZS1lbi1jb25zdHJ1Y3Rpb24uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkaW5nLXByaW1hcnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkaW5nLXNlY29uZGFyeSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDQuNXB4O1xyXG59ICovXHJcbiAgICAvKiAuaGVyby1iYW5uZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZXJvLW92ZXJsYXkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZXJvLWhlYWRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICBtYXJnaW46IDAgMTAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9ICovXHJcbiAgICBcclxuICAgICNtaW5pbWFsLWJvb3RzdHJhcC1jYXJvdXNlbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI21pbmltYWwtYm9vdHN0cmFwLWNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNtaW5pbWFsLWJvb3RzdHJhcC1jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgICAgICNtaW5pbWFsLWJvb3RzdHJhcC1jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICNtaW5pbWFsLWJvb3RzdHJhcC1jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcclxuICAgICAgICAjbWluaW1hbC1ib290c3RyYXAtY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbWluaW1hbC1ib290c3RyYXAtY2Fyb3VzZWwgW2NsYXNzKj1jYXJvdXNlbC1jb250cm9sXSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAjbWluaW1hbC1ib290c3RyYXAtY2Fyb3VzZWwgW2NsYXNzKj1jYXJvdXNlbC1jb250cm9sXSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWluaW1hbC1ib290c3RyYXAtY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNvbnRhaW5lciAuYm94IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNtaW5pbWFsLWJvb3RzdHJhcC1jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY29udGFpbmVyIC5ib3gudmFsaWduLXRvcCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI21pbmltYWwtYm9vdHN0cmFwLWNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIC5jb250YWluZXIgLmJveC52YWxpZ24tYm90dG9tIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWluaW1hbC1ib290c3RyYXAtY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gLmNvbnRhaW5lciAuYm94LnZhbGlnbi1taWRkbGUge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNtaW5pbWFsLWJvb3RzdHJhcC1jYXJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiAuY29udGFpbmVyIC5ib3ggLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGFya2VuLXBzZXVkbyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGFya2VuLXBzZXVkbzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzMzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI21pbmltYWwtYm9vdHN0cmFwLWNhcm91c2VsLnNsaWRlci1ob21lLW9uZSAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQtc3R5bGUgLmNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQtc3R5bGUgLmNvbnRlbnQgaDMsXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQtc3R5bGUgLmNvbnRlbnQgaDIsXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQtc3R5bGUgLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQtc3R5bGUgLmNvbnRlbnQgaDMge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTUxLCAxNTEsIDUyKTtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjVzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2xpZGVyLWNvbnRlbnQtc3R5bGUgLmNvbnRlbnQgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMTUwZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41cztcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zbGlkZXItY29udGVudC1zdHlsZSAuY29udGVudCBhLnRobS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmJhNjA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTdweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNsaWRlci1jb250ZW50LXN0eWxlIC5jb250ZW50IGEudGhtLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingSoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coming-soon',
                templateUrl: './coming-soon.component.html',
                styleUrls: ['./coming-soon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/contact-dialog/contact-dialog.component */ "./src/app/contact-dialog/contact-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation-menu/navigation-menu.component */ "./src/app/components/navigation-menu/navigation-menu.component.ts");






class MainMenuComponent {
    constructor(router, matDialog) {
        this.router = router;
        this.matDialog = matDialog;
    }
    ngOnInit() {
    }
    GoToMembers() {
        this.router.navigate(['/Adhésion']);
    }
    GoToDonations() {
        this.router.navigate(['/AvantLesDons']);
    }
    openDialog() {
        this.matDialog.open(src_app_contact_dialog_contact_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ContactDialogComponent"], {
            panelClass: 'contact-dialog-container'
        });
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 12, vars: 0, consts: [[1, "container-fluid", 2, "background-color", "#edfff4"], [1, "row", "justify-content-sm-center"], [1, "col-md-1.5"], [1, "Image-Logo"], ["title", "Association pour la protection\n                        et la s\u00E9curit\u00E9 en laboratoire", "src", "./assets/img/EMILYS-LOGO.png", 1, "emily-logo"], [1, "col-md-10"], [1, "text-place"], [1, "titleAnimationP1"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ASSOCIATION POUR LA PROTECTION ET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LA S\u00C9CURIT\u00C9 EN LABORATOIRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-navigation-menu");
    } }, directives: [_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_4__["NavigationMenuComponent"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);\r\nh4[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.site-logo[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 1px;\r\n    padding-top: -2px;\r\n    width: 200px;\r\n    height: 250px;\r\n}\r\n.container-fluid[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n    overflow: visible;\r\n}\r\nul.social-network[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline;\r\n    margin-left: 0 !important;\r\n    \r\n}\r\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 0;\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoRss[_ngcontent-%COMP%]:hover {\r\n    background: radial-gradient( circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #3B5998;\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover {\r\n    background-color: #33ccff;\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover {\r\n    background-color: #BD3518;\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoVimeo[_ngcontent-%COMP%]:hover {\r\n    background-color: #0590B8;\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoLinkedin[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoRss[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoVimeo[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoLinkedin[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\na.socialIcon[_ngcontent-%COMP%]:hover, .socialHoverClass[_ngcontent-%COMP%] {\r\n    color: #44BCDD;\r\n}\r\n.iconn[_ngcontent-%COMP%] {\r\n    background-color: rgb(13, 27, 14);\r\n    border: rgb(153, 153, 153);\r\n}\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin: 0 auto 0 auto;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 20px;\r\n    background-color: #D3D3D3;\r\n}\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    \r\n    text-align: center;\r\n}\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .triggeredHover[_ngcontent-%COMP%] {\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -ms--transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n    transition: all 0.2s;\r\n}\r\n.social-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: rgb(21, 68, 21);\r\n    transition: all 0.8s;\r\n    padding-left: 1px;\r\n    padding-top: 5px;\r\n}\r\n.emily-logo[_ngcontent-%COMP%] {\r\n    height: 110px;\r\n    float: center;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    \r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    text-align: center;\r\n    font-size: 60px;\r\n    line-height: 70px;\r\n    font-family: system-ui;\r\n}\r\n#container[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 890px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    float: none;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.navbar-custom[_ngcontent-%COMP%] {\r\n    background-color: #08220c;\r\n    border: 0;\r\n    border-radius: 0;\r\n    min-height: 60px;\r\n    font-family: system-ui;\r\n    font-size: 19px;\r\n    box-sizing: content-box;\r\n    \r\n    margin-bottom: 0;\r\n}\r\n.navbar-toggler-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n}\r\n@media (min-width: 992px) {\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        margin-left: 3em;\r\n        margin-right: 3em;\r\n    }\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: green;\r\n    cursor: pointer;\r\n}\r\nul[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    background-color: #08220c;\r\n    text-align: center;\r\n    font-family: system-ui;\r\n    font-size: 18px;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background-color: #08220c;\r\n}\r\nul[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: green;\r\n    cursor: pointer;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    color: green;\r\n}\r\n@media (max-width: 768px) {\r\n    .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n        margin-left: 3em;\r\n        margin-right: 3em;\r\n    }\r\n    .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-size: 20px;\r\n        font-weight: bolder;\r\n    }\r\n    .navbar-toggler-icon[_ngcontent-%COMP%]:hover {\r\n        color: green;\r\n    }\r\n    .text[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n        font-size: 26px;\r\n    }\r\n    .custom-toggler[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    border: none;\r\n    font-weight: bolder;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    background: white;\r\n    background-color: rgb(13, 27, 14)\r\n}\r\n.header__title[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-size: 25px;\r\n}\r\n.header__cta[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n.site-btn[_ngcontent-%COMP%] {\r\n    padding: 9px 10px;\r\n    display: inline-block;\r\n    border-color: rgb(26, 25, 25);\r\n    font-family: system-ui;\r\n    font-weight: 700;\r\n    \r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    border-radius: 8px;\r\n    background: darkseagreen;\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    margin-top: 0px;\r\n    \r\n}\r\n#Second[_ngcontent-%COMP%] {\r\n    width: 173px;\r\n}\r\n.header-section[_ngcontent-%COMP%]   .site-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(185, 67, 67);\r\n}\r\n@media screen and (max-width: 720px) {\r\n    .header__title[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        text-align: center;\r\n    }\r\n    .header__cta[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .header__cta--question[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .site-btn[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n    }\r\n    #Second[_ngcontent-%COMP%] {\r\n        margin-left: 13px;\r\n    }\r\n}\r\n@media screen and (max-width: 420px) {\r\n    .site-btn[_ngcontent-%COMP%] {\r\n        margin-left: 0 !important;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n.text-place[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    display: inline-block;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    color: #08220c;\r\n    -webkit-background-clip: text;\r\n    -moz-background-clip: text;\r\n    background-clip: text;\r\n    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);\r\n    font-family: system-ui;\r\n    font-size: 24px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 45em;\r\n    -webkit-animation: type 4s steps(60, end);\r\n            animation: type 4s steps(60, end);\r\n    font-weight: bolder;\r\n\r\n}\r\n.titleAnimationP1[_ngcontent-%COMP%]{\r\n  color: #08220c;\r\n  -webkit-background-clip: text;\r\n  -moz-background-clip: text;\r\n  background-clip: text;\r\n  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);\r\n  font-family: system-ui;\r\n  font-size: 24px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  -webkit-animation: type 4s steps(60, end);\r\n          animation: type 4s steps(60, end);\r\n  font-weight: bolder;\r\n  padding-top: 20px;\r\n}\r\n.titleAnimationP2[_ngcontent-%COMP%]{\r\n  color: #08220c;\r\n  -webkit-background-clip: text;\r\n  -moz-background-clip: text;\r\n  background-clip: text;\r\n  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);\r\n  font-family: system-ui;\r\n  font-size: 24px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 56em;\r\n  -webkit-animation: type 6s steps(60, end);\r\n          animation: type 6s steps(60, end);\r\n  font-weight: bolder;\r\n\r\n}\r\np[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation: type2 8s steps(60, end);\r\n            animation: type2 8s steps(60, end);\r\n}\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: lime;\r\n    text-decoration: none;\r\n}\r\n@-webkit-keyframes type {\r\n    from {\r\n        width: 0;\r\n    }\r\n}\r\n@keyframes type {\r\n    from {\r\n        width: 0;\r\n    }\r\n}\r\n@-webkit-keyframes type2 {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    50% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100;\r\n    }\r\n}\r\n@keyframes type2 {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    50% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100;\r\n    }\r\n}\r\n@-webkit-keyframes blink {\r\n    to {\r\n        opacity: .0;\r\n    }\r\n}\r\n@keyframes blink {\r\n    to {\r\n        opacity: .0;\r\n    }\r\n}\r\n[_ngcontent-%COMP%]::-moz-selection {\r\n    background: black;\r\n}\r\n[_ngcontent-%COMP%]::selection {\r\n    background: black;\r\n}\r\n@media only screen and (min-width: 320px) and (max-width: 568px) {\r\n\r\n  .titleAnimationP1[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    width:23em;\r\n    padding-top: 3px;\r\n  }\r\n  .Image-Logo[_ngcontent-%COMP%]{\r\n     padding-left: 18px;\r\n     padding-top: 5px;\r\n  }\r\n  .emily-logo[_ngcontent-%COMP%]{\r\n    padding-left: 100px;\r\n  }\r\n  }\r\n@media only screen and (min-width: 374px) and (max-width: 668px) {\r\n\r\n    .titleAnimationP1[_ngcontent-%COMP%]{\r\n      font-size: 12px;\r\n      width:29em;\r\n      padding-top: 3px;\r\n    }\r\n    .Image-Logo[_ngcontent-%COMP%]{\r\n       padding-left: 60px;\r\n       padding-top: 2px;\r\n    }\r\n  }\r\n@media only screen and (min-width: 413px) and (max-width: 737px) {\r\n\r\n    .titleAnimationP1[_ngcontent-%COMP%]{\r\n      font-size: 12px;\r\n      width: 34em;\r\n      padding-top: 3px;\r\n    }\r\n    .Image-Logo[_ngcontent-%COMP%]{\r\n       padding-left: 80px;\r\n       padding-top: 2px;\r\n    }\r\n  }\r\n@media only screen and (min-width: 767px) and (max-width: 1025px) {\r\n\r\n    .titleAnimationP1[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      width: 35em;\r\n      padding-top: 15px;\r\n    }\r\n    .Image-Logo[_ngcontent-%COMP%]{\r\n       padding-left: 0px;\r\n       padding-top: 2px;\r\n    }\r\n    .emily-logo[_ngcontent-%COMP%]{\r\n      padding-left:0px;\r\n    }\r\n  }\r\n@media only screen and (min-width: 1024px) {\r\n\r\n    br[_ngcontent-%COMP%]{\r\n      display: none;\r\n    }\r\n    .titleAnimationP1[_ngcontent-%COMP%]{\r\n      font-size: 24px;\r\n      width: 45em;\r\n      \r\n    }\r\n    .Image-Logo[_ngcontent-%COMP%]{\r\n       padding-left: 0px;\r\n       padding-top: 2px;\r\n    }\r\n    .emily-logo[_ngcontent-%COMP%]{\r\n      padding-left:0px;\r\n    }\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFO0FBQ2xFO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7Ozs7OztJQU1JLFdBQVc7QUFDZjtBQUVBOztJQUVJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQywwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBR3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUt6QixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHNCQUFzQjtJQUt0QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFHQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakI7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtDQUFrQztBQUN0QztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsa0JBQWtCO0lBQ3RCO0FBQ0o7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixpREFBaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxtQkFBbUI7O0FBRXZCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsaURBQWlEO0VBQ2pELHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsaURBQWlEO0VBQ2pELHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsbUJBQW1COztBQUVyQjtBQUVBO0lBQ0ksMENBQWtDO1lBQWxDLGtDQUFrQztBQUN0QztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7QUFDSjtBQUpBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7QUFDSjtBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFWQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBSkE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBRUM7SUFDRyxpQkFBaUI7QUFDckI7QUFGQztJQUNHLGlCQUFpQjtBQUNyQjtBQUVBOztFQUVFO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7RUFDQTtLQUNHLGtCQUFrQjtLQUNsQixnQkFBZ0I7RUFDbkI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0FBRUE7O0lBRUU7TUFDRSxlQUFlO01BQ2YsVUFBVTtNQUNWLGdCQUFnQjtJQUNsQjtJQUNBO09BQ0csa0JBQWtCO09BQ2xCLGdCQUFnQjtJQUNuQjtFQUNGO0FBRUE7O0lBRUU7TUFDRSxlQUFlO01BQ2YsV0FBVztNQUNYLGdCQUFnQjtJQUNsQjtJQUNBO09BQ0csa0JBQWtCO09BQ2xCLGdCQUFnQjtJQUNuQjtFQUNGO0FBRUE7O0lBRUU7TUFDRSxlQUFlO01BQ2YsV0FBVztNQUNYLGlCQUFpQjtJQUNuQjtJQUNBO09BQ0csaUJBQWlCO09BQ2pCLGdCQUFnQjtJQUNuQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7QUFFQTs7SUFFRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsZUFBZTtNQUNmLFdBQVc7TUFDWCx1QkFBdUI7SUFDekI7SUFDQTtPQUNHLGlCQUFpQjtPQUNqQixnQkFBZ0I7SUFDbkI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFub255bW91cytQcm8pO1xyXG5oNCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNpdGUtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctdG9wOiAtMnB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbnVsLnNvY2lhbC1uZXR3b3JrIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxufVxyXG5cclxudWwuc29jaWFsLW5ldHdvcmsgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29Sc3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCBjaXJjbGUgYXQgMzMlIDEwMCUsICNmZWQzNzMgNCUsICNmMTUyNDUgMzAlLCAjZDkyZTdmIDYyJSwgIzliMzZiNyA4NSUsICM1MTVlY2YpXHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0ZhY2Vib29rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU5OTg7XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb1R3aXR0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzY2NmZjtcclxufVxyXG5cclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvR29vZ2xlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDM1MTg7XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb1ZpbWVvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTkwQjg7XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0xpbmtlZGluOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvUnNzOmhvdmVyIGksXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0ZhY2Vib29rOmhvdmVyIGksXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb1R3aXR0ZXI6aG92ZXIgaSxcclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvR29vZ2xlOmhvdmVyIGksXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb1ZpbWVvOmhvdmVyIGksXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0xpbmtlZGluOmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEuc29jaWFsSWNvbjpob3ZlcixcclxuLnNvY2lhbEhvdmVyQ2xhc3Mge1xyXG4gICAgY29sb3I6ICM0NEJDREQ7XHJcbn1cclxuXHJcbi5pY29ubiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDI3LCAxNCk7XHJcbiAgICBib3JkZXI6IHJnYigxNTMsIDE1MywgMTUzKTtcclxufVxyXG5cclxuLnNvY2lhbC1jaXJjbGUgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBsaSBpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAzMHB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBsaSBhOmhvdmVyIGksXHJcbi50cmlnZ2VyZWRIb3ZlciB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBpIHtcclxuICAgIGNvbG9yOiByZ2IoMjEsIDY4LCAyMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5lbWlseS1sb2dvIHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwMHB4OyAqL1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogODkwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLWN1c3RvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyMjBjO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAvKiBmb3IgYm90dG9tIGJvcmRlciAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubmF2YmFyIGxpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xyXG4gICAgfVxyXG59XHJcblxyXG51bCBsaSBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODIyMGM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyMjBjO1xyXG59XHJcblxyXG51bCAuZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwgbGk6aG92ZXIge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5uYXZiYXIgbGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzZW07XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci10b2dnbGVyLWljb246aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLXRvZ2dsZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCAyNywgMTQpXHJcbn1cclxuXHJcbi5oZWFkZXJfX3RpdGxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyX19jdGEge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2l0ZS1idG4ge1xyXG4gICAgcGFkZGluZzogOXB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNiwgMjUsIDI1KTtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLyogYm9yZGVyOiAxcHg7ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrc2VhZ3JlZW47XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyNXB4OyAqL1xyXG59XHJcblxyXG4jU2Vjb25kIHtcclxuICAgIHdpZHRoOiAxNzNweDtcclxufVxyXG5cclxuLmhlYWRlci1zZWN0aW9uIC5zaXRlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCA2NywgNjcpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgLmhlYWRlcl9fdGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX2N0YSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9fY3RhLS1xdWVzdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zaXRlLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgICNTZWNvbmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLnNpdGUtYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtcGxhY2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogIzA4MjIwYztcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDQ1ZW07XHJcbiAgICBhbmltYXRpb246IHR5cGUgNHMgc3RlcHMoNjAsIGVuZCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxufVxyXG5cclxuLnRpdGxlQW5pbWF0aW9uUDF7XHJcbiAgY29sb3I6ICMwODIyMGM7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IHR5cGUgNHMgc3RlcHMoNjAsIGVuZCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRpdGxlQW5pbWF0aW9uUDJ7XHJcbiAgY29sb3I6ICMwODIyMGM7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNTZlbTtcclxuICBhbmltYXRpb246IHR5cGUgNnMgc3RlcHMoNjAsIGVuZCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbjogdHlwZTIgOHMgc3RlcHMoNjAsIGVuZCk7XHJcbn1cclxuXHJcbnAgYSB7XHJcbiAgICBjb2xvcjogbGltZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGUyIHtcclxuICAgIDAlIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogMTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAuMDtcclxuICAgIH1cclxufVxyXG5cclxuIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcclxuXHJcbiAgLnRpdGxlQW5pbWF0aW9uUDF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDoyM2VtO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICB9XHJcbiAgLkltYWdlLUxvZ297XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5lbWlseS1sb2dve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NHB4KSBhbmQgKG1heC13aWR0aDogNjY4cHgpIHtcclxuXHJcbiAgICAudGl0bGVBbmltYXRpb25QMXtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB3aWR0aDoyOWVtO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgLkltYWdlLUxvZ297XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTNweCkgYW5kIChtYXgtd2lkdGg6IDczN3B4KSB7XHJcblxyXG4gICAgLnRpdGxlQW5pbWF0aW9uUDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgd2lkdGg6IDM0ZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgICAuSW1hZ2UtTG9nb3tcclxuICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XHJcblxyXG4gICAgLnRpdGxlQW5pbWF0aW9uUDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgd2lkdGg6IDM1ZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLkltYWdlLUxvZ297XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAuZW1pbHktbG9nb3tcclxuICAgICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgYnJ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGl0bGVBbmltYXRpb25QMXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB3aWR0aDogNDVlbTtcclxuICAgICAgLyogcGFkZGluZy10b3A6IDE1cHg7ICovXHJcbiAgICB9XHJcbiAgICAuSW1hZ2UtTG9nb3tcclxuICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5lbWlseS1sb2dve1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-menu',
                templateUrl: './main-menu.component.html',
                styleUrls: ['./main-menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navigation-menu/navigation-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-menu/navigation-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavigationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMenuComponent", function() { return NavigationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavigationMenuComponent {
    constructor() {
    }
    ngOnInit() {
        this.NavigationBarResponsive();
    }
    NavigationBarResponsive() {
        const menu = document.querySelector(".menu");
        const menuMain = menu.querySelector(".menu-main");
        const goBack = menu.querySelector(".go-back");
        const menuTrigger = document.querySelector(".mobile-menu-trigger");
        const closeMenu = menu.querySelector(".mobile-menu-close");
        let subMenu;
        menuMain.addEventListener("click", (e) => {
            if (e.target.closest(".menu-item-has-children")) {
                const hasChildren = e.target.closest(".menu-item-has-children");
                showSubMenu(hasChildren);
            }
        });
        goBack.addEventListener("click", () => {
            hideSubMenu();
        });
        menuTrigger.addEventListener("click", () => {
            toggleMenu();
        });
        closeMenu.addEventListener("click", () => {
            toggleMenu();
        });
        document.querySelector(".menu-overlay").addEventListener("click", () => {
            toggleMenu();
        });
        function toggleMenu() {
            menu.classList.toggle("active");
            document.querySelector(".menu-overlay").classList.toggle("active");
        }
        function showSubMenu(hasChildren) {
            subMenu = hasChildren.querySelector(".sub-menu");
            subMenu.classList.add("active");
            subMenu.style.animation = "slideLeft 0.5s ease forwards";
            const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
            menu.querySelector(".current-menu-title").innerHTML = menuTitle;
            menu.querySelector(".mobile-menu-head").classList.add("active");
        }
        function hideSubMenu() {
            subMenu.style.animation = "slideRight 0.5s ease forwards";
            setTimeout(() => {
                subMenu.classList.remove("active");
            }, 300);
            menu.querySelector(".current-menu-title").innerHTML = "";
            menu.querySelector(".mobile-menu-head").classList.remove("active");
        }
        window.onresize = function () {
            if (this.innerWidth > 991) {
                if (menu.classList.contains("active")) {
                    toggleMenu();
                }
            }
        };
    }
    toggleMenu() {
        const menu = document.querySelector(".menu");
        menu.classList.toggle("active");
        document.querySelector(".menu-overlay").classList.toggle("active");
    }
}
NavigationMenuComponent.ɵfac = function NavigationMenuComponent_Factory(t) { return new (t || NavigationMenuComponent)(); };
NavigationMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationMenuComponent, selectors: [["app-navigation-menu"]], decls: 120, vars: 0, consts: [[1, "header", "banner-section"], [1, "container-fluid"], [1, "row", "v-center"], [1, "header-item", "item-center"], [1, "menu-overlay"], [1, "menu"], [1, "mobile-menu-head"], [1, "go-back"], [1, "icofont-arrow-left"], [1, "current-menu-title"], [1, "mobile-menu-close"], [1, "icofont-close-line"], [1, "menu-main"], [1, "SpacingNavbar", "SpacingNavbarMobile"], ["routerLink", "", 3, "click"], [1, "menu-item-has-children", "SpacingNavbar", "SpacingNavbarMobile"], ["routerLink", "/Emilie"], [1, "sub-menu", "single-column-menu", 2, "border-radius", "3px"], ["routerLink", "/Association/Emilie", 3, "click"], [1, "dropdown-divider"], ["routerLink", "/Association/Presentation", 3, "click"], ["routerLink", "/Association/NosMissions", 3, "click"], ["routerLink", "/Association/LeBurreau", 3, "click"], ["routerLink", "/Association/LesAntennes", 3, "click"], [1, "sub-menu", "mega-menu", "mega-menu-column-6", 2, "border-radius", "3px"], [1, "list-item"], ["routerLink", "/SecuriteLaboratoire/RisquePrevention", 1, "title", 3, "click"], [2, "padding-bottom", "20px"], ["routerLink", "/SecuriteLaboratoire/RisquePrevention/RisqueBiologique", 3, "click"], ["routerLink", "/SecuriteLaboratoire/RisquePrevention/RisqueChimique", 3, "click"], ["routerLink", "/SecuriteLaboratoire/RisquePrevention/RisquePhysique", 3, "click"], ["routerLink", "/SecuriteLaboratoire/RisquePrevention/RisqueRadioActif", 3, "click"], ["routerLink", "/SecuriteLaboratoire/EquipementProtection", 1, "title"], ["routerLink", "/SecuriteLaboratoire/EquipementProtection/ProtectionIndividuelle", 3, "click"], ["routerLink", "/SecuriteLaboratoire/EquipementProtection/ProtectionCollective", 3, "click"], ["routerLink", "/SecuriteLaboratoire/AccidentMaladie", 1, "title", 3, "click"], ["routerLink", "/SecuriteLaboratoire/AccidentMaladie/AccidentTravail", 3, "click"], ["routerLink", "/SecuriteLaboratoire/AccidentMaladie/MaladieProffessionelle", 3, "click"], ["routerLink", "/SecuriteLaboratoire/AccidentMaladie/FauteInexcusable", 3, "click"], ["routerLink", "/SecuriteLaboratoire/FormationInformation", 1, "title", "spacing"], ["routerLink", "/SecuriteLaboratoire/FormationInformation/Formation", 3, "click"], ["routerLink", "/SecuriteLaboratoire/FormationInformation/Information", 3, "click"], ["routerLink", "/SecuriteLaboratoire/ReponsabiliteDroit", 1, "title", 3, "click"], ["routerLink", "/SecuriteLaboratoire/ReponsabiliteDroit/NotionResponsabilite", 3, "click"], ["routerLink", "/SecuriteLaboratoire/ReponsabiliteDroit/Delits", 3, "click"], ["routerLink", "/SecuriteLaboratoire/ReponsabiliteDroit/ActeursResponsabilite", 3, "click"], ["routerLink", "/SecuriteLaboratoire/LienUtile", 1, "title", "spacing", 3, "click"], ["routerLink", "/ActualiteActivite/actualite", 3, "click"], ["routerLink", "/nous-contacter", 3, "click"], [1, "mobile-menu-trigger"]], template: function NavigationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_14_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ACCUEIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "L'ASSOCIATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_22_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "EMILIE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_26_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PRESENTATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_30_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "NOS MISSIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_34_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "LE BURREAU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_38_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "LES ANTENNES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "S\u00C9CURIT\u00C9 EN LABORATOIRE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_h4_click_45_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "RISQUES ET PR\u00C9VENTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_50_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "LE RISQUE BIOLOGIQUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_53_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "LE RISQUE CHIMIQUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_56_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "LE RISQUE PHYSIQUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_59_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "LE RISQUE RADIOACTIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " LES \u00C9QUIPEMENTS DE PROTECTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_66_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "PROTECTION INDIVIDUELLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_69_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "PROTECTION COLLECTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_h4_click_72_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "ACCIDENTS ET MALADIE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_77_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "ACCIDENT DU TRAVAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_80_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "MALADIE PROFESSIONELLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_83_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "LA FAUTE INEXCULABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "FORMATIONS ET INFORMATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_90_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "FORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_93_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_h4_click_96_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "RESPONSABILIT\u00C9 ET DROITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_101_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "LA NOTION DE REPONSABILIT\u00C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_104_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "LES D\u00C9LITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_107_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "LES ACTEURS ET LEUR REPONSABILIT\u00C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_h4_click_109_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "LIENS UTILES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_113_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "ACTUALIT\u00C9S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationMenuComponent_Template_a_click_116_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "NOUS CONTACTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".header-item[_ngcontent-%COMP%] {\n  width: 100% !important;\n  text-align: center;\n}\n\n.SpacingNavbar[_ngcontent-%COMP%] {\n  width: 15% !important;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 479px) {\n  .SpacingNavbar[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 979px) {\n  .SpacingNavbar[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n  font-family: system-ui;\n  font-weight: bold;\n}\n\nbody[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nh4[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #1c9042 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  z-index: 99;\n  width: 100%;\n  padding: 15px;\n}\n\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 900;\n  color: black;\n  text-transform: uppercase;\n}\n\n.header[_ngcontent-%COMP%]   .item-left[_ngcontent-%COMP%] {\n  flex: 0 0 17%;\n}\n\n.spacing[_ngcontent-%COMP%] {\n  margin-top: 15.5%;\n}\n\n.header[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%] {\n  flex: 0 0 17%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.header[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: black;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 30px;\n  margin-left: 25px;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  position: relative;\n  color: black;\n  cursor: pointer;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 500;\n  background-color: #edfff4;\n  box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .single-column-menu[_ngcontent-%COMP%] {\n  min-width: 168px;\n  max-width: 231px;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  line-height: 1;\n  display: block;\n  cursor: pointer;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  display: inline-block;\n  font-size: 12px;\n  color: #555;\n  cursor: pointer;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 0;\n  font-size: 12px;\n  color: black;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (min-width: 992px) {\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.menu-item-has-children[_ngcontent-%COMP%]:hover   .sub-menu[_ngcontent-%COMP%] {\n    margin-top: 0;\n    opacity: 1;\n    margin-top: 14px;\n    visibility: visible;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 15px;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%] {\n  flex: 0 0 32%;\n  padding: 0px 15px;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  margin-bottom: 5%;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  margin-top: 10px;\n  vertical-align: middle;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item.text-center[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.banner-section[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background-color: #1c9042;\n}\n\n.mobile-menu-head[_ngcontent-%COMP%], .mobile-menu-trigger[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   .item-center[_ngcontent-%COMP%] {\n    order: 3;\n    flex: 0 0 100%;\n  }\n\n  .header[_ngcontent-%COMP%]   .item-left[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n\n  .v-center[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .header[_ngcontent-%COMP%]   .mobile-menu-trigger[_ngcontent-%COMP%] {\n    display: flex;\n    height: 30px;\n    width: 30px;\n    margin-left: 15px;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .header[_ngcontent-%COMP%]   .mobile-menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    height: 2px;\n    background-color: #333;\n    width: 24px;\n  }\n\n  .header[_ngcontent-%COMP%]   .mobile-menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .mobile-menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #333;\n  }\n\n  .header[_ngcontent-%COMP%]   .mobile-menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    top: -6px;\n  }\n\n  .header[_ngcontent-%COMP%]   .mobile-menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n    top: 6px;\n  }\n\n  .header[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 320px;\n    height: 100%;\n    background-color: white;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n    transform: translate(-100%);\n    transition: all 0.5s ease;\n    z-index: 1099;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu.active[_ngcontent-%COMP%] {\n    transform: translate(0%);\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    line-height: 1;\n    margin: 0;\n    display: block;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    line-height: 50px;\n    height: 50px;\n    padding: 0px 50px 0 15px;\n    display: block;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    top: 0;\n    right: 0;\n    text-align: center;\n    line-height: 50px;\n    transform: rotate(-90deg);\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .mobile-menu-head[_ngcontent-%COMP%] {\n    display: flex;\n    height: 50px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    justify-content: space-between;\n    align-items: center;\n    z-index: 5012;\n    position: -webkit-sticky;\n    position: sticky;\n    background-color: #edfff4;\n    top: 0;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .mobile-menu-head[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n    font-size: 16px;\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    line-height: 50px;\n    text-align: center;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .mobile-menu-head.active[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .mobile-menu-head[_ngcontent-%COMP%]   .current-menu-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: 900;\n    color: black;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .mobile-menu-head[_ngcontent-%COMP%]   .mobile-menu-close[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n    font-size: 22px;\n    border-left: 1px solid rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    line-height: 50px;\n    text-align: center;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-main[_ngcontent-%COMP%] {\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background-color: #edfff4;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n    visibility: visible;\n    opacity: 1;\n    position: absolute;\n    box-shadow: none;\n    margin: 0;\n    padding: 15px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding-top: 65px;\n    transform: translateX(0%);\n    max-width: none;\n    min-width: auto;\n    display: none;\n    overflow-x: auto;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.active[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  \n  @-webkit-keyframes slideLeft {\n    0% {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0%);\n    }\n  }\n  @keyframes slideLeft {\n    0% {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0%);\n    }\n  }\n  \n  @-webkit-keyframes slideRight {\n    0% {\n      opacity: 1;\n      transform: translateX(0%);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n  }\n  @keyframes slideRight {\n    0% {\n      opacity: 1;\n      transform: translateX(0%);\n    }\n    100% {\n      opacity: 0;\n      transform: translateX(100%);\n    }\n  }\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    padding: 0px;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item.text-center[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .sub-menu.mega-menu-column-6[_ngcontent-%COMP%]    > .list-item.text-center[_ngcontent-%COMP%]:last-child   .title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .menu-overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.5);\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1098;\n    visibility: hidden;\n    opacity: 0;\n    transition: all 0.5s ease;\n  }\n\n  .menu-overlay.active[_ngcontent-%COMP%] {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uLW1lbnUvRDpcXEVtaWx5cyBBc3NvY2lhdGlvbiBXZWJzaXRlXFxFbWlseXNORy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvbi1tZW51XFxuYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1tZW51L25hdmlnYXRpb24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQ0E7RUFFRTtJQUNFLHNCQUFBO0VDQ0Y7QUFDRjs7QURFRTtFQUVFO0lBQ0Usc0JBQUE7RUNESjtBQUNGOztBREtBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BOztFQUVFLHNCQUFBO0FDSEY7O0FETUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNIQTs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUEsU0FBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDQSxpQkFBQTtBQ0pBOztBRE9BO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0EsY0FBQTs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNBLDBCQUFBO0FDTEE7O0FEUUEsV0FBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNQRjs7QURVQTtFQUNFLDBCQUFBO0FDUEY7O0FEVUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0EsMEJBQUE7QUNQQTs7QURVQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDUEY7QUFDRjs7QURVQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtBQ1JGOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNSRjs7QURXQTtFQU9FLGtCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2RGOztBRGtCQTs7RUFFRSxhQUFBO0FDZkY7O0FEa0JBLGlCQUFBOztBQUVBO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsY0FBQTtFQ2hCRjs7RURtQkE7O0lBRUUsY0FBQTtFQ2hCRjs7RURtQkE7SUFDRSw4QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VDaEJGOztFRG1CQTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7RUNoQkY7O0VEbUJBOztJQUVFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0VDaEJGOztFRG1CQTtJQUNFLFNBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsUUFBQTtFQ2hCRjs7RURtQkE7SUFDRSxtQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSx3QkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxjQUFBO0lBQ0EsU0FBQTtJQUNBLGNBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0Esd0JBQUE7SUFDQSxjQUFBO0lBQ0EsMkNBQUE7RUNoQkY7O0VEbUJBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VDaEJGOztFRG1CQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsMkNBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLE1BQUE7RUNoQkY7O0VEbUJBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsMENBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxjQUFBO0VDaEJGOztFRG1CQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EseUNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VDaEJGOztFRG1CQTs7SUFFRSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VDaEJGOztFRG1CQTtJQUNFLGNBQUE7RUNoQkY7O0VEbUJBLGlCQUFBO0VBRUE7SUFDRTtNQUNFLFVBQUE7TUFDQSwyQkFBQTtJQ2pCRjtJRG1CQTtNQUNFLFVBQUE7TUFDQSx5QkFBQTtJQ2pCRjtFQUNGO0VEU0E7SUFDRTtNQUNFLFVBQUE7TUFDQSwyQkFBQTtJQ2pCRjtJRG1CQTtNQUNFLFVBQUE7TUFDQSx5QkFBQTtJQ2pCRjtFQUNGO0VEcUJBLGtCQUFBO0VBQ0E7SUFDRTtNQUNFLFVBQUE7TUFDQSx5QkFBQTtJQ25CRjtJRHFCQTtNQUNFLFVBQUE7TUFDQSwyQkFBQTtJQ25CRjtFQUNGO0VEV0E7SUFDRTtNQUNFLFVBQUE7TUFDQSx5QkFBQTtJQ25CRjtJRHFCQTtNQUNFLFVBQUE7TUFDQSwyQkFBQTtJQ25CRjtFQUNGO0VEc0JBO0lBQ0UsY0FBQTtJQUNBLFlBQUE7RUNwQkY7O0VEdUJBO0lBQ0UsbUJBQUE7RUNwQkY7O0VEdUJBOztJQUVFLGNBQUE7RUNwQkY7O0VEdUJBO0lBQ0UsYUFBQTtFQ3BCRjs7RUR1QkE7SUFPRSxjQUFBO0VDMUJGOztFRDZCQTtJQU9FLGdCQUFBO0VDaENGOztFRG1DQTtJQUNFLGVBQUE7SUFDQSxvQ0FBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EseUJBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDaENGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24tbWVudS9uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWl0ZW17XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uU3BhY2luZ05hdmJhciB7XHJcbiAgd2lkdGg6MTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gIC8vQ1NTIENvZGVcclxuICAuU3BhY2luZ05hdmJhcntcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcclxuICAgIC8vQ1NTIENvZGVcclxuICAgIC5TcGFjaW5nTmF2YmFye1xyXG4gICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbjpiZWZvcmUsXHJcbjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDQ6aG92ZXIge1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmNvbG9yOiAjMWM5MDQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi52LWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLypIRUFERVIqL1xyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmxvZ28gYSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oZWFkZXIgLml0ZW0tbGVmdCB7XHJcbiAgZmxleDogMCAwIDE3JTtcclxufVxyXG5cclxuLnNwYWNpbmd7XHJcbm1hcmdpbi10b3AgOiAxNS41JTtcclxufVxyXG5cclxuLmhlYWRlciAuaXRlbS1yaWdodCB7XHJcbiAgZmxleDogMCAwIDE3JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgLml0ZW0tcmlnaHQgYSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qSEVBREVSIE1FTlUqL1xyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgPiBhIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpID4gYTpob3ZlciB7XHJcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKlNVQiBNRU5VKi9cclxuXHJcbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmZmY0O1xyXG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDcwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc2luZ2xlLWNvbHVtbi1tZW51IHtcclxuICBtaW4td2lkdGg6IDE2OHB4O1xyXG4gIG1heC13aWR0aDogMjMxcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudS5tZWdhLW1lbnUgPiAubGlzdC1pdGVtID4gdWwgPiBsaSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51ID4gLmxpc3QtaXRlbSA+IHVsID4gbGkgPiBhIHtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudSA+IC5saXN0LWl0ZW0gPiB1bCA+IGxpID4gYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51ID4gdWwgPiBsaSA+IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUgPiB1bCA+IGxpID4gYTpob3ZlciB7XHJcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuOmhvdmVyIC5zdWItbWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudSB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiB7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51LWNvbHVtbi02ID4gLmxpc3QtaXRlbSB7XHJcbiAgZmxleDogMCAwIDMyJTtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiA+IC5saXN0LWl0ZW0gLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51LWNvbHVtbi02ID4gLmxpc3QtaXRlbSBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5oZWFkZXJcclxuICAubWVudVxyXG4gID4gdWxcclxuICA+IGxpXHJcbiAgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNlxyXG4gID4gLmxpc3QtaXRlbS50ZXh0LWNlbnRlclxyXG4gIC50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFubmVyLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XHJcbiAgLy9oZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4ubW9iaWxlLW1lbnUtaGVhZCxcclxuLm1vYmlsZS1tZW51LXRyaWdnZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qUkVTUE9OU0lWRU5FU1MqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmhlYWRlciAuaXRlbS1jZW50ZXIge1xyXG4gICAgb3JkZXI6IDM7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLml0ZW0tbGVmdCxcclxuICAuaGVhZGVyIC5pdGVtLXJpZ2h0IHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnYtY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm1vYmlsZS1tZW51LXRyaWdnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tb2JpbGUtbWVudS10cmlnZ2VyIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm1vYmlsZS1tZW51LXRyaWdnZXIgc3BhbjpiZWZvcmUsXHJcbiAgLmhlYWRlciAubW9iaWxlLW1lbnUtdHJpZ2dlciBzcGFuOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubW9iaWxlLW1lbnUtdHJpZ2dlciBzcGFuOmJlZm9yZSB7XHJcbiAgICB0b3A6IC02cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tb2JpbGUtbWVudS10cmlnZ2VyIHNwYW46YWZ0ZXIge1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5pdGVtLXJpZ2h0IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgei1pbmRleDogMTA5OTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm1lbnUuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSA+IGEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNTBweCAwIDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSA+IGEgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubWVudSAubW9iaWxlLW1lbnUtaGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA1MDEyO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGZmZjQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51IC5tb2JpbGUtbWVudS1oZWFkIC5nby1iYWNrIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51IC5tb2JpbGUtbWVudS1oZWFkLmFjdGl2ZSAuZ28tYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm1lbnUgLm1vYmlsZS1tZW51LWhlYWQgLmN1cnJlbnQtbWVudS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubWVudSAubW9iaWxlLW1lbnUtaGVhZCAubW9iaWxlLW1lbnUtY2xvc2Uge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubWVudSAubWVudS1tYWluIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmZmY0XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51LFxyXG4gIC5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDY1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLypLRVlGUkFNRVMgTEVGVCovXHJcblxyXG4gIEBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLypLRVlGUkFNRVMgUklHSFQqL1xyXG4gIEBrZXlmcmFtZXMgc2xpZGVSaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiA+IC5saXN0LWl0ZW0ge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51ID4gLmxpc3QtaXRlbSA+IHVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5tZW51ID4gbGkgLnN1Yi1tZW51ID4gdWwgPiBsaSA+IGEsXHJcbiAgLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudSA+IC5saXN0LWl0ZW0gPiB1bCA+IGxpID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudS5tZWdhLW1lbnUtY29sdW1uLTYgPiAubGlzdC1pdGVtIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlclxyXG4gICAgLm1lbnVcclxuICAgID4gdWxcclxuICAgID4gbGlcclxuICAgIC5zdWItbWVudS5tZWdhLW1lbnUtY29sdW1uLTZcclxuICAgID4gLmxpc3QtaXRlbS50ZXh0LWNlbnRlclxyXG4gICAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlclxyXG4gICAgLm1lbnVcclxuICAgID4gdWxcclxuICAgID4gbGlcclxuICAgIC5zdWItbWVudS5tZWdhLW1lbnUtY29sdW1uLTZcclxuICAgID4gLmxpc3QtaXRlbS50ZXh0LWNlbnRlcjpsYXN0LWNoaWxkXHJcbiAgICAudGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5tZW51LW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA5ODtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtb3ZlcmxheS5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItaXRlbSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlNwYWNpbmdOYXZiYXIge1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAuU3BhY2luZ05hdmJhciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIC5TcGFjaW5nTmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG46YmVmb3JlLFxuOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMWM5MDQyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKkhFQURFUiovXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogOTk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaGVhZGVyIC5sb2dvIGEge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlciAuaXRlbS1sZWZ0IHtcbiAgZmxleDogMCAwIDE3JTtcbn1cblxuLnNwYWNpbmcge1xuICBtYXJnaW4tdG9wOiAxNS41JTtcbn1cblxuLmhlYWRlciAuaXRlbS1yaWdodCB7XG4gIGZsZXg6IDAgMCAxNyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5oZWFkZXIgLml0ZW0tcmlnaHQgYSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vKkhFQURFUiBNRU5VKi9cbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpID4gYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qU1VCIE1FTlUqL1xuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGZmZjQ7XG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDcwcHggLTI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zaW5nbGUtY29sdW1uLW1lbnUge1xuICBtaW4td2lkdGg6IDE2OHB4O1xuICBtYXgtd2lkdGg6IDIzMXB4O1xufVxuXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51ID4gLmxpc3QtaXRlbSA+IHVsID4gbGkge1xuICBsaW5lLWhlaWdodDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudSA+IC5saXN0LWl0ZW0gPiB1bCA+IGxpID4gYSB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudSA+IC5saXN0LWl0ZW0gPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUgPiB1bCA+IGxpID4gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlciAubWVudSA+IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbjpob3ZlciAuc3ViLW1lbnUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudS5tZWdhLW1lbnUge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudS5tZWdhLW1lbnUtY29sdW1uLTYgPiAubGlzdC1pdGVtIHtcbiAgZmxleDogMCAwIDMyJTtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudS5tZWdhLW1lbnUtY29sdW1uLTYgPiAubGlzdC1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiA+IC5saXN0LWl0ZW0gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiA+IC5saXN0LWl0ZW0udGV4dC1jZW50ZXIgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFubmVyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XG59XG5cbi5tb2JpbGUtbWVudS1oZWFkLFxuLm1vYmlsZS1tZW51LXRyaWdnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKlJFU1BPTlNJVkVORVNTKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaGVhZGVyIC5pdGVtLWNlbnRlciB7XG4gICAgb3JkZXI6IDM7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gIH1cblxuICAuaGVhZGVyIC5pdGVtLWxlZnQsXG4uaGVhZGVyIC5pdGVtLXJpZ2h0IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgfVxuXG4gIC52LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmhlYWRlciAubW9iaWxlLW1lbnUtdHJpZ2dlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaGVhZGVyIC5tb2JpbGUtbWVudS10cmlnZ2VyIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5cbiAgLmhlYWRlciAubW9iaWxlLW1lbnUtdHJpZ2dlciBzcGFuOmJlZm9yZSxcbi5oZWFkZXIgLm1vYmlsZS1tZW51LXRyaWdnZXIgc3BhbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgfVxuXG4gIC5oZWFkZXIgLm1vYmlsZS1tZW51LXRyaWdnZXIgc3BhbjpiZWZvcmUge1xuICAgIHRvcDogLTZweDtcbiAgfVxuXG4gIC5oZWFkZXIgLm1vYmlsZS1tZW51LXRyaWdnZXIgc3BhbjphZnRlciB7XG4gICAgdG9wOiA2cHg7XG4gIH1cblxuICAuaGVhZGVyIC5pdGVtLXJpZ2h0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlciAubWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICB6LWluZGV4OiAxMDk5O1xuICB9XG5cbiAgLmhlYWRlciAubWVudS5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcbiAgfVxuXG4gIC5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSA+IGEge1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwcHggNTBweCAwIDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuXG4gIC5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpID4gYSBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgfVxuXG4gIC5oZWFkZXIgLm1lbnUgLm1vYmlsZS1tZW51LWhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTAxMjtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGZmZjQ7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLmhlYWRlciAubWVudSAubW9iaWxlLW1lbnUtaGVhZCAuZ28tYmFjayB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5oZWFkZXIgLm1lbnUgLm1vYmlsZS1tZW51LWhlYWQuYWN0aXZlIC5nby1iYWNrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5oZWFkZXIgLm1lbnUgLm1vYmlsZS1tZW51LWhlYWQgLmN1cnJlbnQtbWVudS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmhlYWRlciAubWVudSAubW9iaWxlLW1lbnUtaGVhZCAubW9iaWxlLW1lbnUtY2xvc2Uge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5oZWFkZXIgLm1lbnUgLm1lbnUtbWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGZmZjQ7XG4gIH1cblxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51LFxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8qS0VZRlJBTUVTIExFRlQqL1xuICBAa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG4gIH1cbiAgLypLRVlGUkFNRVMgUklHSFQqL1xuICBAa2V5ZnJhbWVzIHNsaWRlUmlnaHQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICB9XG4gIC5oZWFkZXIgLm1lbnUgPiB1bCA+IGxpIC5zdWItbWVudS5tZWdhLW1lbnUtY29sdW1uLTYgPiAubGlzdC1pdGVtIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51ID4gLmxpc3QtaXRlbSA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmhlYWRlciAubWVudSA+IGxpIC5zdWItbWVudSA+IHVsID4gbGkgPiBhLFxuLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudSA+IC5saXN0LWl0ZW0gPiB1bCA+IGxpID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51LWNvbHVtbi02ID4gLmxpc3QtaXRlbSBpbWcge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuaGVhZGVyIC5tZW51ID4gdWwgPiBsaSAuc3ViLW1lbnUubWVnYS1tZW51LWNvbHVtbi02ID4gLmxpc3QtaXRlbS50ZXh0LWNlbnRlciAudGl0bGUge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5cbiAgLmhlYWRlciAubWVudSA+IHVsID4gbGkgLnN1Yi1tZW51Lm1lZ2EtbWVudS1jb2x1bW4tNiA+IC5saXN0LWl0ZW0udGV4dC1jZW50ZXI6bGFzdC1jaGlsZCAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAubWVudS1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDk4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIH1cblxuICAubWVudS1vdmVybGF5LmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation-menu',
                templateUrl: './navigation-menu.component.html',
                styleUrls: ['./navigation-menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contact-dialog/contact-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-dialog/contact-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDialogComponent", function() { return ContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ContactDialogComponent {
    constructor(dialogRef, router) {
        this.dialogRef = dialogRef;
        this.router = router;
    }
    ngOnInit() {
    }
    closeDialog(response) {
        this.dialogRef.close(response);
    }
    GoToHome() {
        this.router.navigate(['']);
    }
}
ContactDialogComponent.ɵfac = function ContactDialogComponent_Factory(t) { return new (t || ContactDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDialogComponent, selectors: [["app-contact-dialog"]], decls: 23, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "row"], [1, "col-xl-6", "col-md-6", "mb-30"], [1, "single-cta"], [1, "fas", "fa-map-marker-alt"], [1, "cta-text"], [1, "far", "fa-envelope-open"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "click"]], template: function ContactDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " En raison de probl\u00E8mes techniques, veuillez nous contacter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Par Courrier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Adress\u00E9 au 129 Avenue de Saint-ouen, 75017 Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Par mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "association.emilys@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDialogComponent_Template_button_click_21_listener() { return ctx.GoToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-dialog-content[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\n  color: red;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.footer-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.footer-cta[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #373636;\n}\n\n.single-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #125812;\n  font-size: 1.5em;\n  float: left;\n  margin-top: 8px;\n}\n\n.cta-text[_ngcontent-%COMP%] {\n  padding-left: 19px;\n  padding-bottom: 13px;\n}\n\n.cta-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #062306;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 2px;\n}\n\n.cta-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #06301e;\n  font-size: 1.05em;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.footer-pattern[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 330px;\n  background-size: cover;\n  background-position: 100% 100%;\n}\n\n.footer-logo[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  font-size: 14px;\n  color: #7e7e7e;\n  line-height: 28px;\n}\n\n.footer-social-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 20px;\n}\n\n.footer-social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  margin-right: 15px;\n}\n\n.footer-social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  line-height: 38px;\n  border-radius: 50%;\n}\n\n.facebook-bg[_ngcontent-%COMP%] {\n  background: #3B5998;\n}\n\n.twitter-bg[_ngcontent-%COMP%] {\n  background: #55ACEE;\n}\n\n.google-bg[_ngcontent-%COMP%] {\n  background: #DD4B39;\n}\n\n.footer-widget-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 40px;\n  position: relative;\n}\n\n.footer-widget-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -15px;\n  height: 2px;\n  width: 50px;\n  background: #ff5e14;\n}\n\n.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: left;\n  width: 50%;\n  margin-bottom: 12px;\n}\n\n.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff5e14;\n}\n\n.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #878787;\n  text-transform: capitalize;\n}\n\n.subscribe-form[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.subscribe-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 28px;\n  background: #2E2E2E;\n  border: 1px solid #2E2E2E;\n  color: #fff;\n}\n\n.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  background: #ff5e14;\n  padding: 13px 20px;\n  border: 1px solid #ff5e14;\n  top: 0;\n}\n\n.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  transform: rotate(-6deg);\n}\n\n.copyright-area[_ngcontent-%COMP%] {\n  background: #202020;\n  padding: 25px 0;\n}\n\n.copyright-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #878787;\n}\n\n.copyright-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff5e14;\n}\n\n.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 20px;\n}\n\n.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #ff5e14;\n}\n\n.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #878787;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kaWFsb2cvRDpcXEVtaWx5cyBBc3NvY2lhdGlvbiBXZWJzaXRlXFxFbWlseXNORy9zcmNcXGFwcFxcY29udGFjdC1kaWFsb2dcXGNvbnRhY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWRpYWxvZy9jb250YWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFFQSxrQkFBQTtBQ0NBOztBRENBO0VBQ0EsZ0NBQUE7QUNFQTs7QURBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDT0E7O0FETEE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNRQTs7QUROQTtFQUNBLG1CQUFBO0FDU0E7O0FEUEE7RUFDRSxnQkFBQTtBQ1VGOztBRFJBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0ksY0FBQTtFQUNKLGlCQUFBO0FDV0E7O0FEVEE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNZQTs7QURWQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNhQTs7QURYQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDY0E7O0FEWkE7RUFDQSxtQkFBQTtBQ2VBOztBRGJBO0VBQ0EsbUJBQUE7QUNnQkE7O0FEZEE7RUFDQSxtQkFBQTtBQ2lCQTs7QURmQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDa0JBOztBRGhCQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ21CQTs7QURqQkE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNvQkE7O0FEbEJBO0VBQ0EsY0FBQTtBQ3FCQTs7QURuQkE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNzQkE7O0FEcEJBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3VCQTs7QURyQkE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ3dCQTs7QUR0QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0FDeUJGOztBRHZCQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUMwQkE7O0FEeEJBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDMkJBOztBRHpCQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzRCQTs7QUQxQkE7RUFDQSxjQUFBO0FDNkJBOztBRDNCQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUM4QkE7O0FENUJBO0VBQ0EsY0FBQTtBQytCQTs7QUQ3QkE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2dDQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGlhbG9nL2NvbnRhY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCAuY3VzdG9tIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5mb290ZXItc2VjdGlvbiB7XHJcblxyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvb3Rlci1jdGEge1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3MzYzNjtcclxufVxyXG4uc2luZ2xlLWN0YSBpIHtcclxuICBjb2xvcjogIzEyNTgxMjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uY3RhLXRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxufVxyXG4uY3RhLXRleHQgaDQge1xyXG4gIGNvbG9yOiAjMDYyMzA2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLmN0YS10ZXh0IHNwYW4ge1xyXG4gIGNvbG9yOiAjMDYzMDFlO1xyXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xyXG59XHJcbi5mb290ZXItY29udGVudCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuei1pbmRleDogMjtcclxufVxyXG4uZm9vdGVyLXBhdHRlcm4gaW1nIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbmhlaWdodDogMzMwcHg7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxufVxyXG4uZm9vdGVyLWxvZ28ge1xyXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mb290ZXItbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuLmZvb3Rlci10ZXh0IHAge1xyXG5tYXJnaW4tYm90dG9tOiAxNHB4O1xyXG5mb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzdlN2U3ZTtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbiBzcGFuIHtcclxuY29sb3I6ICNmZmY7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaWNvbiBhIHtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5mb290ZXItc29jaWFsLWljb24gaSB7XHJcbmhlaWdodDogNDBweDtcclxud2lkdGg6IDQwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubGluZS1oZWlnaHQ6IDM4cHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uZmFjZWJvb2stYmd7XHJcbmJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbn1cclxuLnR3aXR0ZXItYmd7XHJcbmJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbn1cclxuLmdvb2dsZS1iZ3tcclxuYmFja2dyb3VuZDogI0RENEIzOTtcclxufVxyXG4uZm9vdGVyLXdpZGdldC1oZWFkaW5nIGgzIHtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxubWFyZ2luLWJvdHRvbTogNDBweDtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb290ZXItd2lkZ2V0LWhlYWRpbmcgaDM6OmJlZm9yZSB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDtcclxuYm90dG9tOiAtMTVweDtcclxuaGVpZ2h0OiAycHg7XHJcbndpZHRoOiA1MHB4O1xyXG5iYWNrZ3JvdW5kOiAjZmY1ZTE0O1xyXG59XHJcbi5mb290ZXItd2lkZ2V0IHVsIGxpIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDUwJTtcclxubWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uZm9vdGVyLXdpZGdldCB1bCBsaSBhOmhvdmVye1xyXG5jb2xvcjogI2ZmNWUxNDtcclxufVxyXG4uZm9vdGVyLXdpZGdldCB1bCBsaSBhIHtcclxuY29sb3I6ICM4Nzg3ODc7XHJcbnRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5zdWJzY3JpYmUtZm9ybSB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3Vic2NyaWJlLWZvcm0gaW5wdXQge1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogMTRweCAyOHB4O1xyXG5iYWNrZ3JvdW5kOiAjMkUyRTJFO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMkUyRTJFO1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG4uc3Vic2NyaWJlLWZvcm0gYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmNWUxNDtcclxuICBwYWRkaW5nOiAxM3B4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNWUxNDtcclxuICB0b3A6IDA7XHJcbn1cclxuLnN1YnNjcmliZS1mb3JtIGJ1dHRvbiBpIHtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxudHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xyXG59XHJcbi5jb3B5cmlnaHQtYXJlYXtcclxuYmFja2dyb3VuZDogIzIwMjAyMDtcclxucGFkZGluZzogMjVweCAwO1xyXG59XHJcbi5jb3B5cmlnaHQtdGV4dCBwIHtcclxubWFyZ2luOiAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmNvbG9yOiAjODc4Nzg3O1xyXG59XHJcbi5jb3B5cmlnaHQtdGV4dCBwIGF7XHJcbmNvbG9yOiAjZmY1ZTE0O1xyXG59XHJcbi5mb290ZXItbWVudSBsaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1tZW51IGxpOmhvdmVyIGF7XHJcbmNvbG9yOiAjZmY1ZTE0O1xyXG59XHJcbi5mb290ZXItbWVudSBsaSBhIHtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5jb2xvcjogIzg3ODc4NztcclxufVxyXG4iLCIubWF0LWRpYWxvZy1jb250ZW50IC5jdXN0b20ge1xuICBjb2xvcjogcmVkO1xufVxuXG51bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5mb290ZXItc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3Rlci1jdGEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3MzYzNjtcbn1cblxuLnNpbmdsZS1jdGEgaSB7XG4gIGNvbG9yOiAjMTI1ODEyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uY3RhLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuXG4uY3RhLXRleHQgaDQge1xuICBjb2xvcjogIzA2MjMwNjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uY3RhLXRleHQgc3BhbiB7XG4gIGNvbG9yOiAjMDYzMDFlO1xuICBmb250LXNpemU6IDEuMDVlbTtcbn1cblxuLmZvb3Rlci1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9vdGVyLXBhdHRlcm4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMzMwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvb3Rlci1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5mb290ZXItdGV4dCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzdlN2U3ZTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5mb290ZXItc29jaWFsLWljb24gc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb290ZXItc29jaWFsLWljb24gYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZvb3Rlci1zb2NpYWwtaWNvbiBpIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZmFjZWJvb2stYmcge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuXG4udHdpdHRlci1iZyB7XG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XG59XG5cbi5nb29nbGUtYmcge1xuICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xufVxuXG4uZm9vdGVyLXdpZGdldC1oZWFkaW5nIGgzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9vdGVyLXdpZGdldC1oZWFkaW5nIGgzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTE1cHg7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmNWUxNDtcbn1cblxuLmZvb3Rlci13aWRnZXQgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZm9vdGVyLXdpZGdldCB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZjVlMTQ7XG59XG5cbi5mb290ZXItd2lkZ2V0IHVsIGxpIGEge1xuICBjb2xvcjogIzg3ODc4NztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zdWJzY3JpYmUtZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN1YnNjcmliZS1mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMjhweDtcbiAgYmFja2dyb3VuZDogIzJFMkUyRTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJFMkUyRTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdWJzY3JpYmUtZm9ybSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmY1ZTE0O1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjVlMTQ7XG4gIHRvcDogMDtcbn1cblxuLnN1YnNjcmliZS1mb3JtIGJ1dHRvbiBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xufVxuXG4uY29weXJpZ2h0LWFyZWEge1xuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG5cbi5jb3B5cmlnaHQtdGV4dCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODc4Nzg3O1xufVxuXG4uY29weXJpZ2h0LXRleHQgcCBhIHtcbiAgY29sb3I6ICNmZjVlMTQ7XG59XG5cbi5mb290ZXItbWVudSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5mb290ZXItbWVudSBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICNmZjVlMTQ7XG59XG5cbi5mb290ZXItbWVudSBsaSBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg3ODc4Nztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-dialog',
                templateUrl: './contact-dialog.component.html',
                styleUrls: ['./contact-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/Guard/RouterGuard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/Guard/RouterGuard.ts ***!
  \*******************************************/
/*! exports provided: CanActivateThisRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateThisRoute", function() { return CanActivateThisRoute; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class CanActivateThisRoute {
    constructor(CmSvc, router) {
        this.CmSvc = CmSvc;
        this.router = router;
    }
    canActivate() {
        if (this.CmSvc.Is_Logged_In.getValue()) {
            return true;
        }
        else {
            this.router.navigate(['/Login']);
            return false;
        }
    }
}
CanActivateThisRoute.ɵfac = function CanActivateThisRoute_Factory(t) { return new (t || CanActivateThisRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CanActivateThisRoute.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivateThisRoute, factory: CanActivateThisRoute.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanActivateThisRoute, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/Interceptor/interceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/Interceptor/interceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: MyHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHttpInterceptor", function() { return MyHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MyHttpInterceptor {
    constructor() {
    }
    intercept(request, next) {
        return next.handle(request);
    }
}
MyHttpInterceptor.ɵfac = function MyHttpInterceptor_Factory(t) { return new (t || MyHttpInterceptor)(); };
MyHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyHttpInterceptor, factory: MyHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/Material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/Material/material.module.ts ***!
  \**************************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");















































class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_45__["PdfViewerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_45__["PdfViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_45__["PdfViewerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");




//import { MatSnackBar } from '@angular/material';
class CommonService {
    //AZURE_BLOB_IMAGES_CONTAINER =  "";
    //constructor(private snackBar: MatSnackBar) { }
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.APIUrl = 'http://icidrinks.store/api/Data';
        //public APIUrl = 'https://webapi-cq3.conveyor.cloud/api/Data';
        this.ticket = '';
        this.Is_Logged_In = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.UI_Direction = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('ltr');
        this.User = [];
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    setValue(newValue) {
        this.isLoading.next(newValue);
    }
    getValue() {
        return this.isLoading.asObservable();
    }
    ShowMessage(message, d = 6000) {
        this.snackBar.open(message, '', { duration: d });
    }
    Handle_Exception(msg) {
        if ((msg != null) && (msg !== '')) {
            this.ShowMessage(msg, 3000);
        }
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/proxy.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/proxy.service.ts ***!
  \************************************************/
/*! exports provided: Proxy, Params_Authenticate, User, Team_member, Uploaded_file, Params_Change_Password, Params_Delete_News, Params_Delete_News_source, Params_Delete_Team_member, News, News_source, Section, Params_Forgot_Password, Params_Get_News_By_Where, Params_Get_Section_By_OWNER_ID, Params_Get_Section_By_SECTION_ID, Params_Get_Team_member_By_OWNER_ID, Params_Get_User_By_OWNER_ID, Params_Verify_Account, Params_Get_User_By_USER_ID, Params_Get_Section_With_Uploaded_Files, Params_Get_Team_member_With_Uploaded_Files, Params_ContactUsForm, Params_MembershipForm, Params_DonationForm, Params_Delete_Uploaded_file, Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD, Action_Result, Result_Authenticate, Result_Change_Password, Result_Delete_News, Result_Delete_News_source, Result_Delete_Team_member, Result_Edit_News, Result_Edit_News_source, Result_Edit_Section, Result_Edit_Team_member, Result_Forgot_Password, Result_Get_News_By_Where, Result_Get_Section_By_OWNER_ID, Result_Get_Section_By_SECTION_ID, Result_Get_Team_member_By_OWNER_ID, Result_Get_User_By_OWNER_ID, Result_Verify_Account, Result_Get_User_By_USER_ID, Result_Get_Section_With_Uploaded_Files, Result_Get_Team_member_With_Uploaded_Files, Result_ContactUsForm, Result_MembershipForm, Result_DonationForm, Result_Get_News_By_Where_Adv, Result_Edit_Uploaded_file, Result_Delete_Uploaded_file, Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proxy", function() { return Proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Authenticate", function() { return Params_Authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team_member", function() { return Team_member; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uploaded_file", function() { return Uploaded_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Change_Password", function() { return Params_Change_Password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Delete_News", function() { return Params_Delete_News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Delete_News_source", function() { return Params_Delete_News_source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Delete_Team_member", function() { return Params_Delete_Team_member; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News_source", function() { return News_source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Forgot_Password", function() { return Params_Forgot_Password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_News_By_Where", function() { return Params_Get_News_By_Where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_Section_By_OWNER_ID", function() { return Params_Get_Section_By_OWNER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_Section_By_SECTION_ID", function() { return Params_Get_Section_By_SECTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_Team_member_By_OWNER_ID", function() { return Params_Get_Team_member_By_OWNER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_User_By_OWNER_ID", function() { return Params_Get_User_By_OWNER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Verify_Account", function() { return Params_Verify_Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_User_By_USER_ID", function() { return Params_Get_User_By_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_Section_With_Uploaded_Files", function() { return Params_Get_Section_With_Uploaded_Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Get_Team_member_With_Uploaded_Files", function() { return Params_Get_Team_member_With_Uploaded_Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_ContactUsForm", function() { return Params_ContactUsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_MembershipForm", function() { return Params_MembershipForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_DonationForm", function() { return Params_DonationForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Delete_Uploaded_file", function() { return Params_Delete_Uploaded_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD", function() { return Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action_Result", function() { return Action_Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Authenticate", function() { return Result_Authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Change_Password", function() { return Result_Change_Password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Delete_News", function() { return Result_Delete_News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Delete_News_source", function() { return Result_Delete_News_source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Delete_Team_member", function() { return Result_Delete_Team_member; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Edit_News", function() { return Result_Edit_News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Edit_News_source", function() { return Result_Edit_News_source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Edit_Section", function() { return Result_Edit_Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Edit_Team_member", function() { return Result_Edit_Team_member; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Forgot_Password", function() { return Result_Forgot_Password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_News_By_Where", function() { return Result_Get_News_By_Where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_Section_By_OWNER_ID", function() { return Result_Get_Section_By_OWNER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_Section_By_SECTION_ID", function() { return Result_Get_Section_By_SECTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_Team_member_By_OWNER_ID", function() { return Result_Get_Team_member_By_OWNER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_User_By_OWNER_ID", function() { return Result_Get_User_By_OWNER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Verify_Account", function() { return Result_Verify_Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_User_By_USER_ID", function() { return Result_Get_User_By_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_Section_With_Uploaded_Files", function() { return Result_Get_Section_With_Uploaded_Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_Team_member_With_Uploaded_Files", function() { return Result_Get_Team_member_With_Uploaded_Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_ContactUsForm", function() { return Result_ContactUsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_MembershipForm", function() { return Result_MembershipForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_DonationForm", function() { return Result_DonationForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Get_News_By_Where_Adv", function() { return Result_Get_News_By_Where_Adv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Edit_Uploaded_file", function() { return Result_Edit_Uploaded_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Delete_Uploaded_file", function() { return Result_Delete_Uploaded_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD", function() { return Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/core/services/common.service.ts");






class Proxy {
    constructor(api, common) {
        this.api = api;
        this.common = common;
        this.APIBaseUrl = '';
        this.url = '';
        this.APIBaseUrl = common.APIUrl;
    }
    Authenticate(i_Params_Authenticate) {
        this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Authenticate), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Change_Password(i_Params_Change_Password) {
        this.url = this.APIBaseUrl + '/Change_Password?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Change_Password), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); }));
    }
    Delete_News(i_Params_Delete_News) {
        this.url = this.APIBaseUrl + '/Delete_News?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Delete_News), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Delete_News_source(i_Params_Delete_News_source) {
        this.url = this.APIBaseUrl + '/Delete_News_source?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Delete_News_source), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Delete_Team_member(i_Params_Delete_Team_member) {
        this.url = this.APIBaseUrl + '/Delete_Team_member?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Delete_Team_member), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Edit_News(i_News) {
        this.url = this.APIBaseUrl + '/Edit_News?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_News), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_News; }));
    }
    Edit_News_source(i_News_source) {
        this.url = this.APIBaseUrl + '/Edit_News_source?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_News_source), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_News_source; }));
    }
    Edit_Section(i_Section) {
        this.url = this.APIBaseUrl + '/Edit_Section?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Section), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Section; }));
    }
    Edit_Team_member(i_Team_member) {
        this.url = this.APIBaseUrl + '/Edit_Team_member?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Team_member), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Team_member; }));
    }
    Forgot_Password(i_Params_Forgot_Password) {
        this.url = this.APIBaseUrl + '/Forgot_Password?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Forgot_Password), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_News_By_Where(i_Params_Get_News_By_Where) {
        this.url = this.APIBaseUrl + '/Get_News_By_Where?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_News_By_Where), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Section_By_OWNER_ID(i_Params_Get_Section_By_OWNER_ID) {
        this.url = this.APIBaseUrl + '/Get_Section_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Section_By_OWNER_ID), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Section_By_SECTION_ID(i_Params_Get_Section_By_SECTION_ID) {
        this.url = this.APIBaseUrl + '/Get_Section_By_SECTION_ID?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Section_By_SECTION_ID), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Team_member_By_OWNER_ID(i_Params_Get_Team_member_By_OWNER_ID) {
        this.url = this.APIBaseUrl + '/Get_Team_member_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Team_member_By_OWNER_ID), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID) {
        this.url = this.APIBaseUrl + '/Get_User_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_User_By_OWNER_ID), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Verify_Account(i_Params_Verify_Account) {
        this.url = this.APIBaseUrl + '/Verify_Account?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Verify_Account), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); }));
    }
    Get_User_By_USER_ID(i_Params_Get_User_By_USER_ID) {
        this.url = this.APIBaseUrl + '/Get_User_By_USER_ID?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_User_By_USER_ID), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Section_With_Uploaded_Files(i_Params_Get_Section_With_Uploaded_Files) {
        this.url = this.APIBaseUrl + '/Get_Section_With_Uploaded_Files?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Section_With_Uploaded_Files), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Team_member_With_Uploaded_Files(i_Params_Get_Team_member_With_Uploaded_Files) {
        this.url = this.APIBaseUrl + '/Get_Team_member_With_Uploaded_Files?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_Team_member_With_Uploaded_Files), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    ContactUsForm(i_Params_ContactUsForm) {
        this.url = this.APIBaseUrl + '/ContactUsForm?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_ContactUsForm), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); }));
    }
    MembershipForm(i_Params_MembershipForm) {
        this.url = this.APIBaseUrl + '/MembershipForm?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_MembershipForm), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); }));
    }
    DonationForm(i_Params_DonationForm) {
        this.url = this.APIBaseUrl + '/DonationForm?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_DonationForm), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); }));
    }
    Get_News_By_Where_Adv(i_Params_Get_News_By_Where) {
        this.url = this.APIBaseUrl + '/Get_News_By_Where_Adv?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Get_News_By_Where), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Edit_Uploaded_file(i_Uploaded_file) {
        this.url = this.APIBaseUrl + '/Edit_Uploaded_file?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Uploaded_file), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Uploaded_file; }));
    }
    Delete_Uploaded_file(i_Params_Delete_Uploaded_file) {
        this.url = this.APIBaseUrl + '/Delete_Uploaded_file?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Delete_Uploaded_file), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD) {
        this.url = this.APIBaseUrl + '/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=' + this.common.ticket;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post(this.url, JSON.stringify(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
}
Proxy.ɵfac = function Proxy_Factory(t) { return new (t || Proxy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
Proxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Proxy, factory: Proxy.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Proxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }]; }, null); })();
class Params_Authenticate {
}
class User {
}
class Team_member {
}
class Uploaded_file {
}
class Params_Change_Password {
}
class Params_Delete_News {
}
class Params_Delete_News_source {
}
class Params_Delete_Team_member {
}
class News {
}
class News_source {
}
class Section {
}
class Params_Forgot_Password {
}
class Params_Get_News_By_Where {
}
class Params_Get_Section_By_OWNER_ID {
}
class Params_Get_Section_By_SECTION_ID {
}
class Params_Get_Team_member_By_OWNER_ID {
}
class Params_Get_User_By_OWNER_ID {
}
class Params_Verify_Account {
}
class Params_Get_User_By_USER_ID {
}
class Params_Get_Section_With_Uploaded_Files {
}
class Params_Get_Team_member_With_Uploaded_Files {
}
class Params_ContactUsForm {
}
class Params_MembershipForm {
}
class Params_DonationForm {
}
class Params_Delete_Uploaded_file {
}
class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD {
}
class Action_Result {
}
class Result_Authenticate extends Action_Result {
}
class Result_Change_Password extends Action_Result {
}
class Result_Delete_News extends Action_Result {
}
class Result_Delete_News_source extends Action_Result {
}
class Result_Delete_Team_member extends Action_Result {
}
class Result_Edit_News extends Action_Result {
}
class Result_Edit_News_source extends Action_Result {
}
class Result_Edit_Section extends Action_Result {
}
class Result_Edit_Team_member extends Action_Result {
}
class Result_Forgot_Password extends Action_Result {
}
class Result_Get_News_By_Where extends Action_Result {
}
class Result_Get_Section_By_OWNER_ID extends Action_Result {
}
class Result_Get_Section_By_SECTION_ID extends Action_Result {
}
class Result_Get_Team_member_By_OWNER_ID extends Action_Result {
}
class Result_Get_User_By_OWNER_ID extends Action_Result {
}
class Result_Verify_Account extends Action_Result {
}
class Result_Get_User_By_USER_ID extends Action_Result {
}
class Result_Get_Section_With_Uploaded_Files extends Action_Result {
}
class Result_Get_Team_member_With_Uploaded_Files extends Action_Result {
}
class Result_ContactUsForm extends Action_Result {
}
class Result_MembershipForm extends Action_Result {
}
class Result_DonationForm extends Action_Result {
}
class Result_Get_News_By_Where_Adv extends Action_Result {
}
class Result_Edit_Uploaded_file extends Action_Result {
}
class Result_Delete_Uploaded_file extends Action_Result {
}
class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
}


/***/ }),

/***/ "./src/app/fixed-button/fixed-button.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fixed-button/fixed-button.component.ts ***!
  \********************************************************/
/*! exports provided: FixedButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedButtonComponent", function() { return FixedButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FixedButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FixedButtonComponent.ɵfac = function FixedButtonComponent_Factory(t) { return new (t || FixedButtonComponent)(); };
FixedButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FixedButtonComponent, selectors: [["app-fixed-button"]], decls: 9, vars: 0, consts: [[1, "float-sm"], [1, "fl-fl", "float-fb"], [1, "fas", "fa-donate"], ["routerLink", "./DesDons/CalculDesDons"], [1, "fl-fl", "float-tw"], [1, "fas", "fa-users"], ["routerLink", "./Adh\u00E9sion"]], template: function FixedButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Donation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Etre Membre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #E5D5CA;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin: 0 60px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-top: 0;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  font-style: italic;\n  text-align: center;\n  background: #FF7D6D;\n  color: #fff;\n  padding: 4px;\n}\n\np[_ngcontent-%COMP%], span[_ngcontent-%COMP%], .twitter[_ngcontent-%COMP%] {\n  font: normal normal 10px Arial;\n  text-align: center;\n  color: #998578;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n\n.twitter[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n  display: block;\n  padding: 14px;\n  transition: all 0.25s ease;\n}\n\n.twitter[_ngcontent-%COMP%]:hover {\n  color: #FF7D6D;\n  text-decoration: none;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-style: italic;\n  display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n\n\n.fl-fl[_ngcontent-%COMP%] {\n  background: rgba(21, 66, 19, 0.8);\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  padding: 4px;\n  width: 190px;\n  position: fixed;\n  right: -160px;\n  z-index: 1000;\n  font: normal normal 10px Arial;\n  transition: all 0.25s ease;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #edfff4;\n  padding: 10px 0;\n  width: 40px;\n  margin-left: 5px;\n}\n\n.fl-fl[_ngcontent-%COMP%]:hover {\n  right: 0;\n  cursor: pointer;\n}\n\n.fl-fl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #edfff4 !important;\n  text-decoration: none;\n  text-align: center;\n  line-height: 43px !important;\n  vertical-align: top !important;\n}\n\n.float-fb[_ngcontent-%COMP%] {\n  top: 50px;\n}\n\n.float-tw[_ngcontent-%COMP%] {\n  top: 105px;\n}\n\n.float-gp[_ngcontent-%COMP%] {\n  top: 270px;\n}\n\n.float-rs[_ngcontent-%COMP%] {\n  top: 325px;\n}\n\n.float-ig[_ngcontent-%COMP%] {\n  top: 380px;\n}\n\n.float-pn[_ngcontent-%COMP%] {\n  top: 435px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZml4ZWQtYnV0dG9uL0Q6XFxFbWlseXMgQXNzb2NpYXRpb24gV2Vic2l0ZVxcRW1pbHlzTkcvc3JjXFxhcHBcXGZpeGVkLWJ1dHRvblxcZml4ZWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maXhlZC1idXR0b24vZml4ZWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7OztFQUdFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFLQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURFQSxnREFBQTs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFLQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxRQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREVBLDhDQUFBIiwiZmlsZSI6InNyYy9hcHAvZml4ZWQtYnV0dG9uL2ZpeGVkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjRTVENUNBO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luOiAwIDYwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI0ZGN0Q2RDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbnAsXHJcbnNwYW4sXHJcbi50d2l0dGVyIHtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDEwcHggQXJpYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjOTk4NTc4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG5cclxuLnR3aXR0ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG59XHJcblxyXG4udHdpdHRlcjpob3ZlciB7XHJcbiAgY29sb3I6ICNGRjdENkQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIEZsb2F0aW5nIFNvY2lhbCBNZWRpYSBCYXIgU3R5bGUgU3RhcnRzIEhlcmUgKi9cclxuXHJcbi5mbC1mbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxLCA2NiwgMTksIDAuOCk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAtMTYwcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIDEwcHggQXJpYWw7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2VkZmZmNDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmZsLWZsOmhvdmVyIHtcclxuICByaWdodDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mbC1mbCBhIHtcclxuICBjb2xvcjogI2VkZmZmNCAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDQzcHghaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3AhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxvYXQtZmIge1xyXG4gIHRvcDogNTBweDtcclxufVxyXG5cclxuLmZsb2F0LXR3IHtcclxuICB0b3A6IDEwNXB4O1xyXG59XHJcblxyXG4uZmxvYXQtZ3Age1xyXG4gIHRvcDogMjcwcHg7XHJcbn1cclxuXHJcbi5mbG9hdC1ycyB7XHJcbiAgdG9wOiAzMjVweDtcclxufVxyXG5cclxuLmZsb2F0LWlnIHtcclxuICB0b3A6IDM4MHB4O1xyXG59XHJcblxyXG4uZmxvYXQtcG4ge1xyXG4gIHRvcDogNDM1cHg7XHJcbn1cclxuLyogRmxvYXRpbmcgU29jaWFsIE1lZGlhIEJhciBTdHlsZSBFbmRzIEhlcmUgKi9cclxuIiwiYm9keSB7XG4gIGJhY2tncm91bmQ6ICNFNUQ1Q0E7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luOiAwIDYwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0ZGN0Q2RDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxucCxcbnNwYW4sXG4udHdpdHRlciB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgMTBweCBBcmlhbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk5ODU3ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuLnR3aXR0ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG59XG5cbi50d2l0dGVyOmhvdmVyIHtcbiAgY29sb3I6ICNGRjdENkQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyogRmxvYXRpbmcgU29jaWFsIE1lZGlhIEJhciBTdHlsZSBTdGFydHMgSGVyZSAqL1xuLmZsLWZsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMSwgNjYsIDE5LCAwLjgpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAxOTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTE2MHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBmb250OiBub3JtYWwgbm9ybWFsIDEwcHggQXJpYWw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xufVxuXG4uZmFzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2VkZmZmNDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZsLWZsOmhvdmVyIHtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZsLWZsIGEge1xuICBjb2xvcjogI2VkZmZmNCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQzcHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IHRvcCAhaW1wb3J0YW50O1xufVxuXG4uZmxvYXQtZmIge1xuICB0b3A6IDUwcHg7XG59XG5cbi5mbG9hdC10dyB7XG4gIHRvcDogMTA1cHg7XG59XG5cbi5mbG9hdC1ncCB7XG4gIHRvcDogMjcwcHg7XG59XG5cbi5mbG9hdC1ycyB7XG4gIHRvcDogMzI1cHg7XG59XG5cbi5mbG9hdC1pZyB7XG4gIHRvcDogMzgwcHg7XG59XG5cbi5mbG9hdC1wbiB7XG4gIHRvcDogNDM1cHg7XG59XG5cbi8qIEZsb2F0aW5nIFNvY2lhbCBNZWRpYSBCYXIgU3R5bGUgRW5kcyBIZXJlICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fixed-button',
                templateUrl: './fixed-button.component.html',
                styleUrls: ['./fixed-button.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/send-forms.service.ts":
/*!***************************************!*\
  !*** ./src/app/send-forms.service.ts ***!
  \***************************************/
/*! exports provided: SendFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFormsService", function() { return SendFormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SendFormsService {
    constructor(ApiCaller) {
        this.ApiCaller = ApiCaller;
        this.pdfSrc = "http://localhost:5000/api/Data/Get_PDF";
        this.BaseUrL = 'https://api.association-emilys.com/api/Data';
        this.url = 'https://api.association-emilys.com/Data/Data';
        this.memberURL = 'https://api.association-emilys.com/api/Data/memberData';
        this.donateURL = 'https://api.association-emilys.com/api/Data/Donations';
        this.dateURL = 'http://localhost:5000/api/Data/GetDate';
    }
    sendData(items) {
        return this.ApiCaller.post(this.url, items, {
            headers: { 'Content-type': 'application/json;charset=utf-8' }
        });
    }
    sendMembersData(items) {
        return this.ApiCaller.post(this.memberURL, items, {
            headers: { 'Content-type': 'application/json;charset=utf-8' }
        });
    }
    sendDonationsData(items) {
        return this.ApiCaller.post(this.donateURL, items, {
            headers: { 'Content-type': 'application/json;charset=utf-8' }
        });
    }
    Test_PDF() {
        return this.ApiCaller.get(this.pdfSrc, {
            headers: { 'Content-type': 'application/pdf; charset=utf-8' }
        });
    }
}
SendFormsService.ɵfac = function SendFormsService_Factory(t) { return new (t || SendFormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SendFormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SendFormsService, factory: SendFormsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendFormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! D:\Emilys Association Website\EmilysNG\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map