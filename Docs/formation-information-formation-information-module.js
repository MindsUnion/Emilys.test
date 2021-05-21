(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formation-information-formation-information-module"],{

/***/ "./src/app/securite-laboratoire/formation-information/formation-information-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/formation-information/formation-information-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: FormationInformationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationInformationRoutingModule", function() { return FormationInformationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _formation_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formation-information.component */ "./src/app/securite-laboratoire/formation-information/formation-information.component.ts");
/* harmony import */ var _formation_formation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formation/formation.component */ "./src/app/securite-laboratoire/formation-information/formation/formation.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./information/information.component */ "./src/app/securite-laboratoire/formation-information/information/information.component.ts");







const routes = [
    { path: '', component: _formation_information_component__WEBPACK_IMPORTED_MODULE_2__["FormationInformationComponent"] },
    { path: 'Formation', component: _formation_formation_component__WEBPACK_IMPORTED_MODULE_3__["FormationComponent"] },
    { path: 'Information', component: _information_information_component__WEBPACK_IMPORTED_MODULE_4__["InformationComponent"] },
];
class FormationInformationRoutingModule {
}
FormationInformationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormationInformationRoutingModule });
FormationInformationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormationInformationRoutingModule_Factory(t) { return new (t || FormationInformationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormationInformationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormationInformationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/formation-information/formation-information.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/formation-information/formation-information.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FormationInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationInformationComponent", function() { return FormationInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class FormationInformationComponent {
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
        this.getSectionsParams.SECTION_ID = 16;
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
FormationInformationComponent.ɵfac = function FormationInformationComponent_Factory(t) { return new (t || FormationInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
FormationInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormationInformationComponent, selectors: [["app-formation-information"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function FormationInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function FormationInformationComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2Zvcm1hdGlvbi1pbmZvcm1hdGlvbi9mb3JtYXRpb24taW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormationInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formation-information',
                templateUrl: './formation-information.component.html',
                styleUrls: ['./formation-information.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/formation-information/formation-information.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/formation-information/formation-information.module.ts ***!
  \********************************************************************************************/
/*! exports provided: FormationInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationInformationModule", function() { return FormationInformationModule; });
/* harmony import */ var _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/Material/material.module */ "./src/app/core/Material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _formation_information_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formation-information-routing.module */ "./src/app/securite-laboratoire/formation-information/formation-information-routing.module.ts");
/* harmony import */ var _formation_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formation-information.component */ "./src/app/securite-laboratoire/formation-information/formation-information.component.ts");
/* harmony import */ var _formation_formation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formation/formation.component */ "./src/app/securite-laboratoire/formation-information/formation/formation.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information/information.component */ "./src/app/securite-laboratoire/formation-information/information/information.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");









class FormationInformationModule {
}
FormationInformationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormationInformationModule });
FormationInformationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FormationInformationModule_Factory(t) { return new (t || FormationInformationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _formation_information_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormationInformationRoutingModule"],
            _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormationInformationModule, { declarations: [_formation_information_component__WEBPACK_IMPORTED_MODULE_4__["FormationInformationComponent"], _formation_formation_component__WEBPACK_IMPORTED_MODULE_5__["FormationComponent"], _information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _formation_information_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormationInformationRoutingModule"],
        _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormationInformationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_formation_information_component__WEBPACK_IMPORTED_MODULE_4__["FormationInformationComponent"], _formation_formation_component__WEBPACK_IMPORTED_MODULE_5__["FormationComponent"], _information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _formation_information_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormationInformationRoutingModule"],
                    _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/formation-information/formation/formation.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/formation-information/formation/formation.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationComponent", function() { return FormationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class FormationComponent {
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
        this.getSectionsParams.SECTION_ID = 17;
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
FormationComponent.ɵfac = function FormationComponent_Factory(t) { return new (t || FormationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
FormationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormationComponent, selectors: [["app-formation"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function FormationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function FormationComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2Zvcm1hdGlvbi1pbmZvcm1hdGlvbi9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formation',
                templateUrl: './formation.component.html',
                styleUrls: ['./formation.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/formation-information/information/information.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/formation-information/information/information.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class InformationComponent {
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
        this.getSectionsParams.SECTION_ID = 18;
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
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function InformationComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2Zvcm1hdGlvbi1pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-information',
                templateUrl: './information.component.html',
                styleUrls: ['./information.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=formation-information-formation-information-module.js.map