(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accident-maladie-accident-maladie-module"],{

/***/ "./src/app/securite-laboratoire/accident-maladie/accident-maladie-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/accident-maladie/accident-maladie-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AccidentMaladieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentMaladieRoutingModule", function() { return AccidentMaladieRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accident_maladie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accident-maladie.component */ "./src/app/securite-laboratoire/accident-maladie/accident-maladie.component.ts");
/* harmony import */ var _maladie_proffessionelle_maladie_proffessionelle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maladie-proffessionelle/maladie-proffessionelle.component */ "./src/app/securite-laboratoire/accident-maladie/maladie-proffessionelle/maladie-proffessionelle.component.ts");
/* harmony import */ var _accident_travail_accident_travail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accident-travail/accident-travail.component */ "./src/app/securite-laboratoire/accident-maladie/accident-travail/accident-travail.component.ts");
/* harmony import */ var _faute_inexcusable_faute_inexcusable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faute-inexcusable/faute-inexcusable.component */ "./src/app/securite-laboratoire/accident-maladie/faute-inexcusable/faute-inexcusable.component.ts");








const routes = [
    { path: '', component: _accident_maladie_component__WEBPACK_IMPORTED_MODULE_2__["AccidentMaladieComponent"] },
    { path: 'MaladieProffessionelle', component: _maladie_proffessionelle_maladie_proffessionelle_component__WEBPACK_IMPORTED_MODULE_3__["MaladieProffessionelleComponent"] },
    { path: 'AccidentTravail', component: _accident_travail_accident_travail_component__WEBPACK_IMPORTED_MODULE_4__["AccidentTravailComponent"] },
    { path: 'FauteInexcusable', component: _faute_inexcusable_faute_inexcusable_component__WEBPACK_IMPORTED_MODULE_5__["FauteInexcusableComponent"] },
];
class AccidentMaladieRoutingModule {
}
AccidentMaladieRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccidentMaladieRoutingModule });
AccidentMaladieRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccidentMaladieRoutingModule_Factory(t) { return new (t || AccidentMaladieRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccidentMaladieRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccidentMaladieRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/accident-maladie/accident-maladie.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/accident-maladie/accident-maladie.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccidentMaladieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentMaladieComponent", function() { return AccidentMaladieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class AccidentMaladieComponent {
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
        this.getSectionsParams.SECTION_ID = 19;
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
AccidentMaladieComponent.ɵfac = function AccidentMaladieComponent_Factory(t) { return new (t || AccidentMaladieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
AccidentMaladieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccidentMaladieComponent, selectors: [["app-accident-maladie"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function AccidentMaladieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function AccidentMaladieComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2FjY2lkZW50LW1hbGFkaWUvYWNjaWRlbnQtbWFsYWRpZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccidentMaladieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accident-maladie',
                templateUrl: './accident-maladie.component.html',
                styleUrls: ['./accident-maladie.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/accident-maladie/accident-maladie.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/securite-laboratoire/accident-maladie/accident-maladie.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AccidentMaladieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentMaladieModule", function() { return AccidentMaladieModule; });
/* harmony import */ var _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/Material/material.module */ "./src/app/core/Material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _accident_maladie_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accident-maladie-routing.module */ "./src/app/securite-laboratoire/accident-maladie/accident-maladie-routing.module.ts");
/* harmony import */ var _accident_maladie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accident-maladie.component */ "./src/app/securite-laboratoire/accident-maladie/accident-maladie.component.ts");
/* harmony import */ var _accident_travail_accident_travail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accident-travail/accident-travail.component */ "./src/app/securite-laboratoire/accident-maladie/accident-travail/accident-travail.component.ts");
/* harmony import */ var _maladie_proffessionelle_maladie_proffessionelle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maladie-proffessionelle/maladie-proffessionelle.component */ "./src/app/securite-laboratoire/accident-maladie/maladie-proffessionelle/maladie-proffessionelle.component.ts");
/* harmony import */ var _faute_inexcusable_faute_inexcusable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faute-inexcusable/faute-inexcusable.component */ "./src/app/securite-laboratoire/accident-maladie/faute-inexcusable/faute-inexcusable.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");










class AccidentMaladieModule {
}
AccidentMaladieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccidentMaladieModule });
AccidentMaladieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AccidentMaladieModule_Factory(t) { return new (t || AccidentMaladieModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _accident_maladie_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccidentMaladieRoutingModule"],
            _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccidentMaladieModule, { declarations: [_accident_maladie_component__WEBPACK_IMPORTED_MODULE_4__["AccidentMaladieComponent"], _accident_travail_accident_travail_component__WEBPACK_IMPORTED_MODULE_5__["AccidentTravailComponent"], _maladie_proffessionelle_maladie_proffessionelle_component__WEBPACK_IMPORTED_MODULE_6__["MaladieProffessionelleComponent"], _faute_inexcusable_faute_inexcusable_component__WEBPACK_IMPORTED_MODULE_7__["FauteInexcusableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _accident_maladie_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccidentMaladieRoutingModule"],
        _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccidentMaladieModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_accident_maladie_component__WEBPACK_IMPORTED_MODULE_4__["AccidentMaladieComponent"], _accident_travail_accident_travail_component__WEBPACK_IMPORTED_MODULE_5__["AccidentTravailComponent"], _maladie_proffessionelle_maladie_proffessionelle_component__WEBPACK_IMPORTED_MODULE_6__["MaladieProffessionelleComponent"], _faute_inexcusable_faute_inexcusable_component__WEBPACK_IMPORTED_MODULE_7__["FauteInexcusableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _accident_maladie_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccidentMaladieRoutingModule"],
                    _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/accident-maladie/accident-travail/accident-travail.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/accident-maladie/accident-travail/accident-travail.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AccidentTravailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentTravailComponent", function() { return AccidentTravailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class AccidentTravailComponent {
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
        this.getSectionsParams.SECTION_ID = 20;
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
AccidentTravailComponent.ɵfac = function AccidentTravailComponent_Factory(t) { return new (t || AccidentTravailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
AccidentTravailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccidentTravailComponent, selectors: [["app-accident-travail"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function AccidentTravailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function AccidentTravailComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2FjY2lkZW50LW1hbGFkaWUvYWNjaWRlbnQtdHJhdmFpbC9hY2NpZGVudC10cmF2YWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccidentTravailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accident-travail',
                templateUrl: './accident-travail.component.html',
                styleUrls: ['./accident-travail.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/accident-maladie/faute-inexcusable/faute-inexcusable.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/accident-maladie/faute-inexcusable/faute-inexcusable.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FauteInexcusableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FauteInexcusableComponent", function() { return FauteInexcusableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class FauteInexcusableComponent {
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
        this.getSectionsParams.SECTION_ID = 22;
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
FauteInexcusableComponent.ɵfac = function FauteInexcusableComponent_Factory(t) { return new (t || FauteInexcusableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
FauteInexcusableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FauteInexcusableComponent, selectors: [["app-faute-inexcusable"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function FauteInexcusableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function FauteInexcusableComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2FjY2lkZW50LW1hbGFkaWUvZmF1dGUtaW5leGN1c2FibGUvZmF1dGUtaW5leGN1c2FibGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FauteInexcusableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faute-inexcusable',
                templateUrl: './faute-inexcusable.component.html',
                styleUrls: ['./faute-inexcusable.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/accident-maladie/maladie-proffessionelle/maladie-proffessionelle.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/accident-maladie/maladie-proffessionelle/maladie-proffessionelle.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MaladieProffessionelleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaladieProffessionelleComponent", function() { return MaladieProffessionelleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class MaladieProffessionelleComponent {
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
        this.getSectionsParams.SECTION_ID = 21;
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
MaladieProffessionelleComponent.ɵfac = function MaladieProffessionelleComponent_Factory(t) { return new (t || MaladieProffessionelleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
MaladieProffessionelleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaladieProffessionelleComponent, selectors: [["app-maladie-proffessionelle"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function MaladieProffessionelleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function MaladieProffessionelleComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2FjY2lkZW50LW1hbGFkaWUvbWFsYWRpZS1wcm9mZmVzc2lvbmVsbGUvbWFsYWRpZS1wcm9mZmVzc2lvbmVsbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaladieProffessionelleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maladie-proffessionelle',
                templateUrl: './maladie-proffessionelle.component.html',
                styleUrls: ['./maladie-proffessionelle.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=accident-maladie-accident-maladie-module.js.map