(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["risque-prevention-risque-prevention-module"],{

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-biologique/risque-biologique.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-biologique/risque-biologique.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RisqueBiologiqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisqueBiologiqueComponent", function() { return RisqueBiologiqueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class RisqueBiologiqueComponent {
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
        this.getSectionsParams.SECTION_ID = 9;
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
RisqueBiologiqueComponent.ɵfac = function RisqueBiologiqueComponent_Factory(t) { return new (t || RisqueBiologiqueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
RisqueBiologiqueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RisqueBiologiqueComponent, selectors: [["app-risque-biologique"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function RisqueBiologiqueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function RisqueBiologiqueComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL3Jpc3F1ZS1wcmV2ZW50aW9uL3Jpc3F1ZS1iaW9sb2dpcXVlL3Jpc3F1ZS1iaW9sb2dpcXVlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RisqueBiologiqueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-risque-biologique",
                templateUrl: "./risque-biologique.component.html",
                styleUrls: ["./risque-biologique.component.scss"],
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-chimique/risque-chimique.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-chimique/risque-chimique.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RisqueChimiqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisqueChimiqueComponent", function() { return RisqueChimiqueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class RisqueChimiqueComponent {
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
    fetchData() {
        this.spinner.show();
        this.getSectionsParams.SECTION_ID = 10;
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
    onProgress(progressData) {
        if (progressData.loaded == progressData.total) {
            this.spinner.hide();
        }
    }
}
RisqueChimiqueComponent.ɵfac = function RisqueChimiqueComponent_Factory(t) { return new (t || RisqueChimiqueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
RisqueChimiqueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RisqueChimiqueComponent, selectors: [["app-risque-chimique"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function RisqueChimiqueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function RisqueChimiqueComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL3Jpc3F1ZS1wcmV2ZW50aW9uL3Jpc3F1ZS1jaGltaXF1ZS9yaXNxdWUtY2hpbWlxdWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RisqueChimiqueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-risque-chimique",
                templateUrl: "./risque-chimique.component.html",
                styleUrls: ["./risque-chimique.component.scss"],
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-physique/risque-physique.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-physique/risque-physique.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RisquePhysiqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisquePhysiqueComponent", function() { return RisquePhysiqueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class RisquePhysiqueComponent {
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
        this.getSectionsParams.SECTION_ID = 11;
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
RisquePhysiqueComponent.ɵfac = function RisquePhysiqueComponent_Factory(t) { return new (t || RisquePhysiqueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
RisquePhysiqueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RisquePhysiqueComponent, selectors: [["app-risque-physique"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function RisquePhysiqueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function RisquePhysiqueComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL3Jpc3F1ZS1wcmV2ZW50aW9uL3Jpc3F1ZS1waHlzaXF1ZS9yaXNxdWUtcGh5c2lxdWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RisquePhysiqueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risque-physique',
                templateUrl: './risque-physique.component.html',
                styleUrls: ['./risque-physique.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-prevention-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-prevention-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: RisquePreventionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisquePreventionRoutingModule", function() { return RisquePreventionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _risque_prevention_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./risque-prevention.component */ "./src/app/securite-laboratoire/risque-prevention/risque-prevention.component.ts");
/* harmony import */ var _risque_chimique_risque_chimique_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./risque-chimique/risque-chimique.component */ "./src/app/securite-laboratoire/risque-prevention/risque-chimique/risque-chimique.component.ts");
/* harmony import */ var _risque_biologique_risque_biologique_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./risque-biologique/risque-biologique.component */ "./src/app/securite-laboratoire/risque-prevention/risque-biologique/risque-biologique.component.ts");
/* harmony import */ var _risque_physique_risque_physique_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./risque-physique/risque-physique.component */ "./src/app/securite-laboratoire/risque-prevention/risque-physique/risque-physique.component.ts");
/* harmony import */ var _risque_radioactif_risque_radioactif_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risque-radioactif/risque-radioactif.component */ "./src/app/securite-laboratoire/risque-prevention/risque-radioactif/risque-radioactif.component.ts");









const routes = [
    { path: '', component: _risque_prevention_component__WEBPACK_IMPORTED_MODULE_2__["RisquePreventionComponent"] },
    { path: 'RisqueChimique', component: _risque_chimique_risque_chimique_component__WEBPACK_IMPORTED_MODULE_3__["RisqueChimiqueComponent"] },
    { path: 'RisqueBiologique', component: _risque_biologique_risque_biologique_component__WEBPACK_IMPORTED_MODULE_4__["RisqueBiologiqueComponent"] },
    { path: 'RisquePhysique', component: _risque_physique_risque_physique_component__WEBPACK_IMPORTED_MODULE_5__["RisquePhysiqueComponent"] },
    { path: 'RisqueRadioActif', component: _risque_radioactif_risque_radioactif_component__WEBPACK_IMPORTED_MODULE_6__["RisqueRadioactifComponent"] }
];
class RisquePreventionRoutingModule {
}
RisquePreventionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RisquePreventionRoutingModule });
RisquePreventionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RisquePreventionRoutingModule_Factory(t) { return new (t || RisquePreventionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RisquePreventionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RisquePreventionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-prevention.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-prevention.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RisquePreventionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisquePreventionComponent", function() { return RisquePreventionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class RisquePreventionComponent {
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
        this.getSectionsParams.SECTION_ID = 8;
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
RisquePreventionComponent.ɵfac = function RisquePreventionComponent_Factory(t) { return new (t || RisquePreventionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
RisquePreventionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RisquePreventionComponent, selectors: [["app-risque-prevention"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function RisquePreventionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function RisquePreventionComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL3Jpc3F1ZS1wcmV2ZW50aW9uL3Jpc3F1ZS1wcmV2ZW50aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RisquePreventionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risque-prevention',
                templateUrl: './risque-prevention.component.html',
                styleUrls: ['./risque-prevention.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-prevention.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-prevention.module.ts ***!
  \************************************************************************************/
/*! exports provided: RisquePreventionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisquePreventionModule", function() { return RisquePreventionModule; });
/* harmony import */ var _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/Material/material.module */ "./src/app/core/Material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _risque_prevention_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./risque-prevention-routing.module */ "./src/app/securite-laboratoire/risque-prevention/risque-prevention-routing.module.ts");
/* harmony import */ var _risque_prevention_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./risque-prevention.component */ "./src/app/securite-laboratoire/risque-prevention/risque-prevention.component.ts");
/* harmony import */ var _risque_biologique_risque_biologique_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./risque-biologique/risque-biologique.component */ "./src/app/securite-laboratoire/risque-prevention/risque-biologique/risque-biologique.component.ts");
/* harmony import */ var _risque_chimique_risque_chimique_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risque-chimique/risque-chimique.component */ "./src/app/securite-laboratoire/risque-prevention/risque-chimique/risque-chimique.component.ts");
/* harmony import */ var _risque_physique_risque_physique_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./risque-physique/risque-physique.component */ "./src/app/securite-laboratoire/risque-prevention/risque-physique/risque-physique.component.ts");
/* harmony import */ var _risque_radioactif_risque_radioactif_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./risque-radioactif/risque-radioactif.component */ "./src/app/securite-laboratoire/risque-prevention/risque-radioactif/risque-radioactif.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");











class RisquePreventionModule {
}
RisquePreventionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RisquePreventionModule });
RisquePreventionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RisquePreventionModule_Factory(t) { return new (t || RisquePreventionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _risque_prevention_routing_module__WEBPACK_IMPORTED_MODULE_3__["RisquePreventionRoutingModule"],
            _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RisquePreventionModule, { declarations: [_risque_prevention_component__WEBPACK_IMPORTED_MODULE_4__["RisquePreventionComponent"], _risque_biologique_risque_biologique_component__WEBPACK_IMPORTED_MODULE_5__["RisqueBiologiqueComponent"], _risque_chimique_risque_chimique_component__WEBPACK_IMPORTED_MODULE_6__["RisqueChimiqueComponent"], _risque_physique_risque_physique_component__WEBPACK_IMPORTED_MODULE_7__["RisquePhysiqueComponent"], _risque_radioactif_risque_radioactif_component__WEBPACK_IMPORTED_MODULE_8__["RisqueRadioactifComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _risque_prevention_routing_module__WEBPACK_IMPORTED_MODULE_3__["RisquePreventionRoutingModule"],
        _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RisquePreventionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_risque_prevention_component__WEBPACK_IMPORTED_MODULE_4__["RisquePreventionComponent"], _risque_biologique_risque_biologique_component__WEBPACK_IMPORTED_MODULE_5__["RisqueBiologiqueComponent"], _risque_chimique_risque_chimique_component__WEBPACK_IMPORTED_MODULE_6__["RisqueChimiqueComponent"], _risque_physique_risque_physique_component__WEBPACK_IMPORTED_MODULE_7__["RisquePhysiqueComponent"], _risque_radioactif_risque_radioactif_component__WEBPACK_IMPORTED_MODULE_8__["RisqueRadioactifComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _risque_prevention_routing_module__WEBPACK_IMPORTED_MODULE_3__["RisquePreventionRoutingModule"],
                    _core_Material_material_module__WEBPACK_IMPORTED_MODULE_0__["DemoMaterialModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/risque-prevention/risque-radioactif/risque-radioactif.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/securite-laboratoire/risque-prevention/risque-radioactif/risque-radioactif.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RisqueRadioactifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RisqueRadioactifComponent", function() { return RisqueRadioactifComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");







class RisqueRadioactifComponent {
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
        this.getSectionsParams.SECTION_ID = 12;
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
RisqueRadioactifComponent.ɵfac = function RisqueRadioactifComponent_Factory(t) { return new (t || RisqueRadioactifComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
RisqueRadioactifComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RisqueRadioactifComponent, selectors: [["app-risque-radioactif"]], decls: 4, vars: 5, consts: [[1, "container", "custom"], [1, "pdf-container", 2, "position", "relative", "min-height", "500px"], ["bdColor", "rgba(255,255,255", "size", "large", "color", "#1c9042", "type", "ball-spin-fade-rotating", 3, "fullScreen"], [3, "src", "original-size", "render-text", "external-link-target", "on-progress"]], template: function RisqueRadioactifComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pdf-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-progress", function RisqueRadioactifComponent_Template_pdf_viewer_on_progress_3_listener($event) { return ctx.onProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("original-size", false)("render-text", true)("external-link-target", "blank");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL3Jpc3F1ZS1wcmV2ZW50aW9uL3Jpc3F1ZS1yYWRpb2FjdGlmL3Jpc3F1ZS1yYWRpb2FjdGlmLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RisqueRadioactifComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risque-radioactif',
                templateUrl: './risque-radioactif.component.html',
                styleUrls: ['./risque-radioactif.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["Proxy"] }, { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=risque-prevention-risque-prevention-module.js.map