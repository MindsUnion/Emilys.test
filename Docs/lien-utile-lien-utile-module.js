(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lien-utile-lien-utile-module"],{

/***/ "./src/app/securite-laboratoire/lien-utile/lien-utile-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/securite-laboratoire/lien-utile/lien-utile-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LienUtileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienUtileRoutingModule", function() { return LienUtileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lien_utile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lien-utile.component */ "./src/app/securite-laboratoire/lien-utile/lien-utile.component.ts");





const routes = [
    { path: '', component: _lien_utile_component__WEBPACK_IMPORTED_MODULE_2__["LienUtileComponent"] }
];
class LienUtileRoutingModule {
}
LienUtileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LienUtileRoutingModule });
LienUtileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LienUtileRoutingModule_Factory(t) { return new (t || LienUtileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LienUtileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LienUtileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/lien-utile/lien-utile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/securite-laboratoire/lien-utile/lien-utile.component.ts ***!
  \*************************************************************************/
/*! exports provided: LienUtileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienUtileComponent", function() { return LienUtileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class LienUtileComponent {
    constructor(_proxy, _CmSvc, spinner) {
        this._proxy = _proxy;
        this._CmSvc = _CmSvc;
        this.spinner = spinner;
        this.pdfSrc = "";
        this.subscriptions = [];
        this.getSectionsParams = new src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Params_Get_Section_By_SECTION_ID"]();
        this.sections = [];
        this.uploadImage = [];
    }
    ngOnInit() {
        this.fetchData();
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    onProgress(progressData) {
        if (progressData.loaded == progressData.total) {
            this.spinner.hide();
        }
    }
    fetchData() {
        this.spinner.show();
        this.getSectionsParams.SECTION_ID = 27;
        this.subscriptions.push(this._proxy
            .Get_Section_By_SECTION_ID(this.getSectionsParams)
            .subscribe((result) => {
            if (result != null) {
                this.uploadImage.push(result);
                this.uploadImage.forEach((element) => {
                    element.MyURL =
                        this._CmSvc.APIUrl +
                            "/Upload_Image?REL_ENTITY=[TBL_SECTION]&REL_FIELD=SECTION_IMAGE&REL_KEY=" +
                            element.SECTION_ID;
                    if (element.My_Uploaded_files != null) {
                        element.MyUploadedImages = [];
                        element.My_Uploaded_files.forEach((x) => {
                            this.pdfSrc = x.My_URL;
                            element.MyUploadedImages.push(x.My_URL);
                        });
                    }
                    this.sections.push(element);
                    this._CmSvc.setValue(false);
                });
            }
        }));
    }
}
LienUtileComponent.ɵfac = function LienUtileComponent_Factory(t) { return new (t || LienUtileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
LienUtileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LienUtileComponent, selectors: [["app-lien-utile"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function LienUtileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function LienUtileComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2xpZW4tdXRpbGUvbGllbi11dGlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LienUtileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lien-utile',
                templateUrl: './lien-utile.component.html',
                styleUrls: ['./lien-utile.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/lien-utile/lien-utile.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/securite-laboratoire/lien-utile/lien-utile.module.ts ***!
  \**********************************************************************/
/*! exports provided: LienUtileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienUtileModule", function() { return LienUtileModule; });
/* harmony import */ var _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/Material/material.module */ "./src/app/core/Material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lien_utile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lien-utile-routing.module */ "./src/app/securite-laboratoire/lien-utile/lien-utile-routing.module.ts");
/* harmony import */ var _lien_utile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lien-utile.component */ "./src/app/securite-laboratoire/lien-utile/lien-utile.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");







class LienUtileModule {
}
LienUtileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LienUtileModule });
LienUtileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LienUtileModule_Factory(t) { return new (t || LienUtileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _lien_utile_routing_module__WEBPACK_IMPORTED_MODULE_3__["LienUtileRoutingModule"],
            _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LienUtileModule, { declarations: [_lien_utile_component__WEBPACK_IMPORTED_MODULE_4__["LienUtileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _lien_utile_routing_module__WEBPACK_IMPORTED_MODULE_3__["LienUtileRoutingModule"],
        _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LienUtileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_lien_utile_component__WEBPACK_IMPORTED_MODULE_4__["LienUtileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _lien_utile_routing_module__WEBPACK_IMPORTED_MODULE_3__["LienUtileRoutingModule"],
                    _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=lien-utile-lien-utile-module.js.map