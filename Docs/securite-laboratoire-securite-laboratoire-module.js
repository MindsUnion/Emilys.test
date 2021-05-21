(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["securite-laboratoire-securite-laboratoire-module"],{

/***/ "./src/app/securite-laboratoire/securite-laboratoire-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/securite-laboratoire/securite-laboratoire-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SecuriteLaboratoireRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuriteLaboratoireRoutingModule", function() { return SecuriteLaboratoireRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _securite_laboratoire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./securite-laboratoire.component */ "./src/app/securite-laboratoire/securite-laboratoire.component.ts");





const routes = [{ path: '', component: _securite_laboratoire_component__WEBPACK_IMPORTED_MODULE_2__["SecuriteLaboratoireComponent"] },
    { path: 'RisquePrevention', loadChildren: () => __webpack_require__.e(/*! import() | risque-prevention-risque-prevention-module */ "risque-prevention-risque-prevention-module").then(__webpack_require__.bind(null, /*! ./risque-prevention/risque-prevention.module */ "./src/app/securite-laboratoire/risque-prevention/risque-prevention.module.ts")).then(m => m.RisquePreventionModule) },
    { path: 'LienUtile', loadChildren: () => __webpack_require__.e(/*! import() | lien-utile-lien-utile-module */ "lien-utile-lien-utile-module").then(__webpack_require__.bind(null, /*! ./lien-utile/lien-utile.module */ "./src/app/securite-laboratoire/lien-utile/lien-utile.module.ts")).then(m => m.LienUtileModule) },
    { path: 'AccidentMaladie', loadChildren: () => __webpack_require__.e(/*! import() | accident-maladie-accident-maladie-module */ "accident-maladie-accident-maladie-module").then(__webpack_require__.bind(null, /*! ./accident-maladie/accident-maladie.module */ "./src/app/securite-laboratoire/accident-maladie/accident-maladie.module.ts")).then(m => m.AccidentMaladieModule) },
    { path: 'EquipementProtection', loadChildren: () => __webpack_require__.e(/*! import() | equipement-protection-equipement-protection-module */ "equipement-protection-equipement-protection-module").then(__webpack_require__.bind(null, /*! ./equipement-protection/equipement-protection.module */ "./src/app/securite-laboratoire/equipement-protection/equipement-protection.module.ts")).then(m => m.EquipementProtectionModule) },
    { path: 'FormationInformation', loadChildren: () => __webpack_require__.e(/*! import() | formation-information-formation-information-module */ "formation-information-formation-information-module").then(__webpack_require__.bind(null, /*! ./formation-information/formation-information.module */ "./src/app/securite-laboratoire/formation-information/formation-information.module.ts")).then(m => m.FormationInformationModule) },
    { path: 'ReponsabiliteDroit', loadChildren: () => __webpack_require__.e(/*! import() | responsabilite-droit-responsabilite-droit-module */ "responsabilite-droit-responsabilite-droit-module").then(__webpack_require__.bind(null, /*! ./responsabilite-droit/responsabilite-droit.module */ "./src/app/securite-laboratoire/responsabilite-droit/responsabilite-droit.module.ts")).then(m => m.ResponsabiliteDroitModule) },
];
class SecuriteLaboratoireRoutingModule {
}
SecuriteLaboratoireRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecuriteLaboratoireRoutingModule });
SecuriteLaboratoireRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecuriteLaboratoireRoutingModule_Factory(t) { return new (t || SecuriteLaboratoireRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecuriteLaboratoireRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecuriteLaboratoireRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/securite-laboratoire.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/securite-laboratoire/securite-laboratoire.component.ts ***!
  \************************************************************************/
/*! exports provided: SecuriteLaboratoireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuriteLaboratoireComponent", function() { return SecuriteLaboratoireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SecuriteLaboratoireComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SecuriteLaboratoireComponent.ɵfac = function SecuriteLaboratoireComponent_Factory(t) { return new (t || SecuriteLaboratoireComponent)(); };
SecuriteLaboratoireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecuriteLaboratoireComponent, selectors: [["app-securite-laboratoire"]], decls: 2, vars: 0, template: function SecuriteLaboratoireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "securite-laboratoire works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXRlLWxhYm9yYXRvaXJlL3NlY3VyaXRlLWxhYm9yYXRvaXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecuriteLaboratoireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-securite-laboratoire',
                templateUrl: './securite-laboratoire.component.html',
                styleUrls: ['./securite-laboratoire.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/securite-laboratoire/securite-laboratoire.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/securite-laboratoire/securite-laboratoire.module.ts ***!
  \*********************************************************************/
/*! exports provided: SecuriteLaboratoireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuriteLaboratoireModule", function() { return SecuriteLaboratoireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _securite_laboratoire_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./securite-laboratoire-routing.module */ "./src/app/securite-laboratoire/securite-laboratoire-routing.module.ts");
/* harmony import */ var _securite_laboratoire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./securite-laboratoire.component */ "./src/app/securite-laboratoire/securite-laboratoire.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");






class SecuriteLaboratoireModule {
}
SecuriteLaboratoireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecuriteLaboratoireModule });
SecuriteLaboratoireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecuriteLaboratoireModule_Factory(t) { return new (t || SecuriteLaboratoireModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _securite_laboratoire_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecuriteLaboratoireRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecuriteLaboratoireModule, { declarations: [_securite_laboratoire_component__WEBPACK_IMPORTED_MODULE_3__["SecuriteLaboratoireComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _securite_laboratoire_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecuriteLaboratoireRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecuriteLaboratoireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_securite_laboratoire_component__WEBPACK_IMPORTED_MODULE_3__["SecuriteLaboratoireComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _securite_laboratoire_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecuriteLaboratoireRoutingModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=securite-laboratoire-securite-laboratoire-module.js.map