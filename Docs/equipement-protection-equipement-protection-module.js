(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipement-protection-equipement-protection-module"],{

/***/ "./src/app/securite-laboratoire/equipement-protection/equipement-protection-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/equipement-protection/equipement-protection-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: EquipementProtectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipementProtectionRoutingModule", function() { return EquipementProtectionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _equipement_protection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipement-protection.component */ "./src/app/securite-laboratoire/equipement-protection/equipement-protection.component.ts");
/* harmony import */ var _protection_individuelle_protection_individuelle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./protection-individuelle/protection-individuelle.component */ "./src/app/securite-laboratoire/equipement-protection/protection-individuelle/protection-individuelle.component.ts");
/* harmony import */ var _protection_collective_protection_collective_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./protection-collective/protection-collective.component */ "./src/app/securite-laboratoire/equipement-protection/protection-collective/protection-collective.component.ts");







const routes = [
    { path: '', component: _equipement_protection_component__WEBPACK_IMPORTED_MODULE_2__["EquipementProtectionComponent"] },
    { path: 'ProtectionIndividuelle', component: _protection_individuelle_protection_individuelle_component__WEBPACK_IMPORTED_MODULE_3__["ProtectionIndividuelleComponent"] },
    { path: 'ProtectionCollective', component: _protection_collective_protection_collective_component__WEBPACK_IMPORTED_MODULE_4__["ProtectionCollectiveComponent"] }
];
class EquipementProtectionRoutingModule {
}
EquipementProtectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EquipementProtectionRoutingModule });
EquipementProtectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EquipementProtectionRoutingModule_Factory(t) { return new (t || EquipementProtectionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EquipementProtectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipementProtectionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/equipement-protection/equipement-protection.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/equipement-protection/equipement-protection.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EquipementProtectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipementProtectionComponent", function() { return EquipementProtectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class EquipementProtectionComponent {
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
        this.getSectionsParams.SECTION_ID = 13;
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
EquipementProtectionComponent.ɵfac = function EquipementProtectionComponent_Factory(t) { return new (t || EquipementProtectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
EquipementProtectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EquipementProtectionComponent, selectors: [["app-equipement-protection"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function EquipementProtectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function EquipementProtectionComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2VxdWlwZW1lbnQtcHJvdGVjdGlvbi9lcXVpcGVtZW50LXByb3RlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipementProtectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-equipement-protection',
                templateUrl: './equipement-protection.component.html',
                styleUrls: ['./equipement-protection.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/equipement-protection/equipement-protection.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/equipement-protection/equipement-protection.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EquipementProtectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipementProtectionModule", function() { return EquipementProtectionModule; });
/* harmony import */ var _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/Material/material.module */ "./src/app/core/Material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _equipement_protection_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipement-protection-routing.module */ "./src/app/securite-laboratoire/equipement-protection/equipement-protection-routing.module.ts");
/* harmony import */ var _equipement_protection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipement-protection.component */ "./src/app/securite-laboratoire/equipement-protection/equipement-protection.component.ts");
/* harmony import */ var _protection_individuelle_protection_individuelle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protection-individuelle/protection-individuelle.component */ "./src/app/securite-laboratoire/equipement-protection/protection-individuelle/protection-individuelle.component.ts");
/* harmony import */ var _protection_collective_protection_collective_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./protection-collective/protection-collective.component */ "./src/app/securite-laboratoire/equipement-protection/protection-collective/protection-collective.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");









class EquipementProtectionModule {
}
EquipementProtectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EquipementProtectionModule });
EquipementProtectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EquipementProtectionModule_Factory(t) { return new (t || EquipementProtectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _equipement_protection_routing_module__WEBPACK_IMPORTED_MODULE_3__["EquipementProtectionRoutingModule"],
            _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EquipementProtectionModule, { declarations: [_equipement_protection_component__WEBPACK_IMPORTED_MODULE_4__["EquipementProtectionComponent"], _protection_individuelle_protection_individuelle_component__WEBPACK_IMPORTED_MODULE_5__["ProtectionIndividuelleComponent"], _protection_collective_protection_collective_component__WEBPACK_IMPORTED_MODULE_6__["ProtectionCollectiveComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _equipement_protection_routing_module__WEBPACK_IMPORTED_MODULE_3__["EquipementProtectionRoutingModule"],
        _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EquipementProtectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_equipement_protection_component__WEBPACK_IMPORTED_MODULE_4__["EquipementProtectionComponent"], _protection_individuelle_protection_individuelle_component__WEBPACK_IMPORTED_MODULE_5__["ProtectionIndividuelleComponent"], _protection_collective_protection_collective_component__WEBPACK_IMPORTED_MODULE_6__["ProtectionCollectiveComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _equipement_protection_routing_module__WEBPACK_IMPORTED_MODULE_3__["EquipementProtectionRoutingModule"],
                    _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/equipement-protection/protection-collective/protection-collective.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/equipement-protection/protection-collective/protection-collective.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ProtectionCollectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionCollectiveComponent", function() { return ProtectionCollectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class ProtectionCollectiveComponent {
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
        this.getSectionsParams.SECTION_ID = 15;
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
ProtectionCollectiveComponent.ɵfac = function ProtectionCollectiveComponent_Factory(t) { return new (t || ProtectionCollectiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
ProtectionCollectiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProtectionCollectiveComponent, selectors: [["app-protection-collective"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function ProtectionCollectiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function ProtectionCollectiveComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2VxdWlwZW1lbnQtcHJvdGVjdGlvbi9wcm90ZWN0aW9uLWNvbGxlY3RpdmUvcHJvdGVjdGlvbi1jb2xsZWN0aXZlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtectionCollectiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-protection-collective',
                templateUrl: './protection-collective.component.html',
                styleUrls: ['./protection-collective.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/equipement-protection/protection-individuelle/protection-individuelle.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/equipement-protection/protection-individuelle/protection-individuelle.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProtectionIndividuelleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionIndividuelleComponent", function() { return ProtectionIndividuelleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class ProtectionIndividuelleComponent {
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
        this.getSectionsParams.SECTION_ID = 14;
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
ProtectionIndividuelleComponent.ɵfac = function ProtectionIndividuelleComponent_Factory(t) { return new (t || ProtectionIndividuelleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
ProtectionIndividuelleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProtectionIndividuelleComponent, selectors: [["app-protection-individuelle"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function ProtectionIndividuelleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function ProtectionIndividuelleComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL2VxdWlwZW1lbnQtcHJvdGVjdGlvbi9wcm90ZWN0aW9uLWluZGl2aWR1ZWxsZS9wcm90ZWN0aW9uLWluZGl2aWR1ZWxsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtectionIndividuelleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-protection-individuelle',
                templateUrl: './protection-individuelle.component.html',
                styleUrls: ['./protection-individuelle.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=equipement-protection-equipement-protection-module.js.map