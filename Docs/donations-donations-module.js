(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donations-donations-module"],{

/***/ "./src/app/donations/donation-claculation/donation-claculation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/donations/donation-claculation/donation-claculation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DonationClaculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationClaculationComponent", function() { return DonationClaculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../donation-dialog/donation-dialog.component */ "./src/app/donations/donation-dialog/donation-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function DonationClaculationComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le montant apr\u00E8s imp\u00F4t est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.Result, " \u20AC");
} }
function DonationClaculationComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le montant apr\u00E8s imp\u00F4t est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.Result, " \u20AC");
} }
function DonationClaculationComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le montant apr\u00E8s imp\u00F4t est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.Result, " \u20AC");
} }
function DonationClaculationComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le montant apr\u00E8s imp\u00F4t est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.X, " \u20AC");
} }
class DonationClaculationComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    OpenDialog() {
        const dialog = this.dialogRef.open(_donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DonationDialogComponent"], {
            width: '400px'
        });
    }
    ngOnInit() {
        this.FirstDiv = false;
        this.SecondtDiv = false;
        this.ThirdDiv = false;
        this.FourthDiv = false;
    }
    onCalc() {
        var roundNb;
        roundNb = Math.round((this.Y * 0.34 / 100) * 100).toFixed(2);
        this.X = roundNb;
        this.FourthDiv = true;
        this.FirstDiv = false;
        this.SecondtDiv = false;
        this.ThirdDiv = false;
    }
    showDivF(divVal) {
        var roundNb;
        this.currentBtn = divVal;
        roundNb = Math.round((divVal * 0.34 / 100) * 100).toFixed(2);
        this.Result = roundNb;
        this.FirstDiv = true;
        this.SecondtDiv = false;
        this.ThirdDiv = false;
        this.FourthDiv = false;
    }
    showDivS(divVal) {
        var roundNb;
        this.currentBtn = divVal;
        roundNb = Math.round((divVal * 0.34 / 100) * 100).toFixed(2);
        this.Result = roundNb;
        this.SecondtDiv = true;
        this.FourthDiv = false;
        this.FirstDiv = false;
        this.ThirdDiv = false;
    }
    showDivT(divVal) {
        var roundNb;
        this.currentBtn = divVal;
        roundNb = Math.round((divVal * 0.34 / 100) * 100).toFixed(2);
        this.Result = roundNb;
        this.ThirdDiv = true;
        this.FourthDiv = false;
        this.FirstDiv = false;
        this.SecondtDiv = false;
    }
}
DonationClaculationComponent.ɵfac = function DonationClaculationComponent_Factory(t) { return new (t || DonationClaculationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
DonationClaculationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationClaculationComponent, selectors: [["app-donation-calculation"]], decls: 66, vars: 6, consts: [[1, "content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-12"], [1, "col-xs-12", "col-sm-4"], [1, "card"], ["href", "http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html", 1, "img-card"], ["src", "assets/img/000012664_600x400_c.jpg"], [1, "card-content"], [1, "card-title"], ["type", "button", "value", "50", 1, "btn", "btn-success", 3, "click"], ["type", "button", "value", "100", 1, "btn", "btn-success", 3, "click"], ["type", "button", "value", "150", 1, "btn", "btn-success", 3, "click"], ["type", "number", "placeholder", "_______", "name", "Y", "oninput", "validity.valid||(value='');", 1, "btn", "btn-success", 3, "ngModel", "ngModelChange"], ["class", "FirstDiv", 4, "ngIf"], ["class", "SecondDiv", 4, "ngIf"], ["class", "ThirdDiv", 4, "ngIf"], ["class", "FourthDiv", 4, "ngIf"], [1, "card-read-more"], [1, "btn", "btn-link", "btn-block", "curtainup", 3, "disabled", "click"], [1, "cardes-list"], ["href", "https://www.helloasso.com/associations/emilys/formulaires/1/widget"], [1, "carde"], [1, "carde_image"], [1, "icofont-globe", "fas"], [1, "carde_title", "titlee-white"], ["routerLink", "/DesDons/FormulaireDeDon"], [1, "fas", "fa-money-check-alt"], [1, "icofont-bank", "fas"], [1, "carde_title"], [1, "FirstDiv"], [1, "SecondDiv"], [1, "ThirdDiv"], [1, "FourthDiv"]], template: function DonationClaculationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Le don \u00E0 l\u2019association Emilys ouvre droit \u00E0 une r\u00E9duction fiscale car elle remplit les conditions g\u00E9n\u00E9rales pr\u00E9vues aux articles 200 et 238 bis du code g\u00E9n\u00E9ral des imp\u00F4ts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Veuillez saisir un montant \u00E0 calculer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationClaculationComponent_Template_button_click_13_listener() { return ctx.showDivF(50); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "50\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationClaculationComponent_Template_button_click_15_listener() { return ctx.showDivS(100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "100\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationClaculationComponent_Template_button_click_17_listener() { return ctx.showDivT(150); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "150\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DonationClaculationComponent_Template_input_ngModelChange_19_listener($event) { return ctx.Y = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DonationClaculationComponent_div_21_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DonationClaculationComponent_div_22_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DonationClaculationComponent_div_23_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DonationClaculationComponent_div_24_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationClaculationComponent_Template_button_click_27_listener() { return ctx.onCalc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Calculer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Votre don est d\u00E9ductible \u00E0 hauteur de 66% au titre de l'imp\u00F4t sur le revenu dans la limite de 20% de vos revenus (l\u2019\u00E9ventuel exc\u00E9dent \u00E9tant reportable sur 5 ans). Si vous \u00EAtes assujetti \u00E0 Imp\u00F4ts sur la Fortune Immobil\u00E8re (IFI), votre don est d\u00E9ductible \u00E0 hauteur de 75% dans la limite de 50.000 \u20AC. Les dons d\u2019entreprises sont d\u00E9ductibles \u00E0 hauteur de 60% dans la limite de 5 pour mille du CA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Don s\u00E9curis\u00E9 en ligne: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Via le site Helloasso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Don par ch\u00E8que : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Adress\u00E9 au 129 Avenue de Saint-ouen,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 75017 Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Don par virement bancaire:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Cr\u00E9dit Mutuel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "IBAN: FR76 1027 8062 7400 0210 7770 178 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " BIC: CMCIFR2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Y);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentBtn == 50 && ctx.FirstDiv == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentBtn == 100 && ctx.SecondtDiv == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentBtn == 150 && ctx.ThirdDiv == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.FourthDiv == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.Y);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n\n.container-fostrap[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 1em;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.fostrap-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-bottom: 15px;\n}\n\nh1.heading[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.15em;\n  font-weight: 900;\n  margin: 0 0 0.5em;\n  color: #505050;\n}\n\n@media (max-device-width: 450px) {\n  h1.heading[_ngcontent-%COMP%] {\n    font-size: 3.55em;\n  }\n\n  .card-content[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n}\n\n@media (max-device-width: 760px) {\n  h1.heading[_ngcontent-%COMP%] {\n    font-size: 3.05em;\n  }\n\n  .card-content[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n}\n\n@media (max-device-width: 1200px) {\n  h1.heading[_ngcontent-%COMP%] {\n    font-size: 3.05em;\n  }\n\n  .card-content[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n    margin-right: -10px;\n  }\n\n  .card-content[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n\n@media (max-device-width: 900px) {\n  h1.heading[_ngcontent-%COMP%] {\n    font-size: 3.25em;\n    margin: 0 0 0.3em;\n  }\n\n  .card-content[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n}\n\n@media (max-device-width: 450px) {\n  .card-content[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 17px;\n    background-color: #1c9042;\n    display: inline-block;\n    \n    padding: 15px 19px;\n  }\n\n  .card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-top: 8px;\n  }\n}\n\n@media (max-device-width: 375px) {\n  .card-content[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 17px;\n    background-color: #1c9042;\n    display: inline-block;\n    margin-left: 13px;\n    padding: 14px 14px;\n  }\n\n  .card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-top: 8px;\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: box-shadow 0.25s;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.img-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  display: block;\n  overflow: hidden;\n}\n\n.img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all 0.25s ease;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 5px;\n  justify-content: center;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-weight: 700;\n  font-size: 17px;\n  text-align: center;\n}\n\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none !important;\n}\n\n.card-read-more[_ngcontent-%COMP%] {\n  border-top: 1px solid #D4D4D4;\n  margin-top: 25px;\n}\n\n.card-read-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  padding: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #1c9042;\n  font-size: 17px;\n}\n\n.btn.btn-success[_ngcontent-%COMP%] {\n  color: #edfff4;\n  font-size: 17px;\n  background-color: #1c9042;\n  display: inline-block;\n  margin-left: 15px;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  width: 80px;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n\n.FirstDiv[_ngcontent-%COMP%], .SecondDiv[_ngcontent-%COMP%], .ThirdDiv[_ngcontent-%COMP%], .FourthDiv[_ngcontent-%COMP%] {\n  font-size: 17px;\n  text-align: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #1c9042;\n  text-shadow: 2px 2px 4px #eee2e2;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-bottom: 15px;\n  align-items: center;\n  background-color: #1c9042;\n  border-color: #1c9042;\n}\n\ncol[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn.btn-link[_ngcontent-%COMP%]:hover {\n  background-color: #1c9042;\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n  font-family: system-ui;\n}\n\n.PayWay[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-align: center;\n  padding-bottom: 10px;\n  padding-top: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: system-ui;\n  color: black;\n  font-size: 16px;\n  text-align: justify;\n  line-height: 28px;\n  margin-top: 30px;\n  font-weight: 500;\n}\n\n.curtainup[_ngcontent-%COMP%]:disabled {\n  background-color: lightgray;\n  font-size: 15px;\n  margin-bottom: 15px;\n  align-items: center;\n  border-color: #1c9042;\n}\n\n.cardes-list[_ngcontent-%COMP%] {\n  z-index: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.carde[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  width: 300px;\n  height: 300px;\n  border-radius: 40px;\n  box-shadow: 5px 5px 30px 7px rgba(28, 144, 66, 0.5), -5px -5px 30px 7px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: 0.4s;\n}\n\n.carde[_ngcontent-%COMP%]   .carde_image[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n  border-radius: 40px;\n  border: 1px solid #1c9042;\n  background-color: #edfff4;\n  display: flex;\n  justify-content: center;\n}\n\n.carde[_ngcontent-%COMP%]   .carde_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 0px 0px 40px 40px;\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 17px;\n  margin-top: -160px;\n  height: 40px;\n}\n\n.fas[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 60px;\n  color: #1c9042;\n}\n\n.carde[_ngcontent-%COMP%]:hover {\n  transform: scale(0.9, 0.9);\n  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25), -5px -5px 30px 15px rgba(0, 0, 0, 0.22);\n}\n\n.titlee-white[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.titlee-black[_ngcontent-%COMP%] {\n  color: black;\n}\n\n@media all and (max-width: 500px) {\n  .carde-list[_ngcontent-%COMP%] {\n    \n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb25zL2RvbmF0aW9uLWNsYWN1bGF0aW9uL0Q6XFxFbWlseXMgQXNzb2NpYXRpb24gV2Vic2l0ZVxcRW1pbHlzTkcvc3JjXFxhcHBcXGRvbmF0aW9uc1xcZG9uYXRpb24tY2xhY3VsYXRpb25cXGRvbmF0aW9uLWNsYWN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbnMvZG9uYXRpb24tY2xhY3VsYXRpb24vZG9uYXRpb24tY2xhY3VsYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0ksaUJBQUE7RUNDSjs7RURDQTtJQUNJLGlCQUFBO0VDRUo7QUFDRjs7QURDQTtFQUNFO0lBQ0ksaUJBQUE7RUNDSjs7RURDQTtJQUNJLGlCQUFBO0VDRUo7QUFDRjs7QURDQTtFQUNFO0lBQ0ksaUJBQUE7RUNDSjs7RURDQTtJQUNJLG1CQUFBO0VDRUo7O0VEQUE7SUFDSSxZQUFBO0VDR0o7QUFDRjs7QURDQTtFQUNFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQ0NKOztFRENBO0lBQ0ksaUJBQUE7RUNFSjtBQUNGOztBRENBO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUVBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0VDQUo7O0VERUE7SUFDSSxnQkFBQTtFQ0NKO0FBQ0Y7O0FERUE7RUFDRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBRUEseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNESjs7RURHQTtJQUNJLGdCQUFBO0VDQUo7QUFDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkVBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UsNkVBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7QUNERjs7QURJQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTs7OztFQUlFLGVBQUE7RUFFQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBGQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ1BGOztBRGtCQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2ZGOztBRGtCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNmRjs7QURrQkE7RUFDRSwwQkFBQTtFQUNBLDBGQUFBO0FDZkY7O0FEbUJBO0VBQ0UsWUFBQTtBQ2hCRjs7QURtQkE7RUFDRSxZQUFBO0FDaEJGOztBRG1CQTtFQUNFO0lBQ0Usc0VBQUE7SUFDQSxzQkFBQTtFQ2hCRjtBQUNGOztBRG9CQTs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9ucy9kb25hdGlvbi1jbGFjdWxhdGlvbi9kb25hdGlvbi1jbGFjdWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItZm9zdHJhcCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5mb3N0cmFwLWxvZ28ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbmgxLmhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luOiAwIDAgMC41ZW07XHJcbiAgY29sb3I6ICM1MDUwNTA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogNDUwcHgpIHtcclxuICBoMS5oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAzLjU1ZW07XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQgLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA3NjBweCkge1xyXG4gIGgxLmhlYWRpbmcge1xyXG4gICAgICBmb250LXNpemU6IDMuMDVlbTtcclxuICB9XHJcbiAgLmNhcmQtY29udGVudCAuYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xyXG4gIGgxLmhlYWRpbmcge1xyXG4gICAgICBmb250LXNpemU6IDMuMDVlbTtcclxuICB9XHJcbiAgLmNhcmQtY29udGVudCAuYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICB9XHJcbiAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA5MDBweCkge1xyXG4gIGgxLmhlYWRpbmcge1xyXG4gICAgICBmb250LXNpemU6IDMuMjVlbTtcclxuICAgICAgbWFyZ2luOiAwIDAgMC4zZW07XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQgLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA0NTBweCkge1xyXG4gIC5jYXJkLWNvbnRlbnQgLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MDQyO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE5cHg7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQgZGl2IHtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMzc1cHgpIHtcclxuICAuY2FyZC1jb250ZW50IC5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgICAgcGFkZGluZzogMTRweCAxNHB4O1xyXG4gIH1cclxuICAuY2FyZC1jb250ZW50IGRpdiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cztcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uaW1nLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltZy1jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSBhIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtcmVhZC1tb3JlIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q0RDRENDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1yZWFkLW1vcmUgYnV0dG9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzFjOTA0MjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZWRmZmY0O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcclxuICB1c2VyLXNlbGVjdDogdGV4dDtcclxufVxyXG5cclxuLkZpcnN0RGl2LFxyXG4uU2Vjb25kRGl2LFxyXG4uVGhpcmREaXYsXHJcbi5Gb3VydGhEaXYge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMxYzkwNDI7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICNlZWUyZTI7XHJcbn1cclxuXHJcbi5idG4uYnRuLXByaW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MDQyO1xyXG4gIGJvcmRlci1jb2xvcjogIzFjOTA0MjtcclxufVxyXG5cclxuY29sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4uYnRuLWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxufVxyXG5cclxuLlBheVdheSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jdXJ0YWludXA6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWM5MDQyO1xyXG59XHJcblxyXG4uY2FyZGVzLWxpc3Qge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJkZSB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggN3B4IHJnYmEoMjgsIDE0NCwgNjYsIDAuNSksIC01cHggLTVweCAzMHB4IDdweCByZ2JhKDAsMCwwLDAuMTApO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uY2FyZGUgLmNhcmRlX2ltYWdlIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjgsIDE0NCwgNjYpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGZmZjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vLyAuY2FyZGUgLmNhcmRlX2ltYWdlIGltZyB7XHJcbi8vICAgd2lkdGg6IGluaGVyaXQ7XHJcbi8vICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbi8vICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vIH1cclxuXHJcbi5jYXJkZSAuY2FyZGVfdGl0bGUgcHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDQwcHggNDBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE2MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmZhc3tcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogcmdiKDI4LCAxNDQsIDY2KTtcclxufVxyXG5cclxuLmNhcmRlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggMTVweCByZ2JhKDAsMCwwLDAuMjUpLFxyXG4gICAgLTVweCAtNXB4IDMwcHggMTVweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG59XHJcblxyXG4udGl0bGVlLXdoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZWUtYmxhY2sge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuY2FyZGUtbGlzdCB7XHJcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB3ZSBhcmUgbm8gbG9uZ2VyIHVzaW5nIHJvdyBkaXJlY3Rpb24gYnV0IGNvbHVtbiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5yZWRkLml0L2IzZXNuejVyYTM0eS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJveC1zaGFkb3c6IDVweCA1cHggMzBweCA3cHggcmdiYSgwLDAsMCwwLjI1KSwgLTVweCAtNXB4IDMwcHggN3B4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4qL1xyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWZvc3RyYXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZvc3RyYXAtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaDEuaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMTVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luOiAwIDAgMC41ZW07XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuXG5AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6IDQ1MHB4KSB7XG4gIGgxLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMy41NWVtO1xuICB9XG5cbiAgLmNhcmQtY29udGVudCAuYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA3NjBweCkge1xuICBoMS5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDMuMDVlbTtcbiAgfVxuXG4gIC5jYXJkLWNvbnRlbnQgLmJ0bi5idG4tc3VjY2VzcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMTIwMHB4KSB7XG4gIGgxLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMy4wNWVtO1xuICB9XG5cbiAgLmNhcmQtY29udGVudCAuYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6IDkwMHB4KSB7XG4gIGgxLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMy4yNWVtO1xuICAgIG1hcmdpbjogMCAwIDAuM2VtO1xuICB9XG5cbiAgLmNhcmQtY29udGVudCAuYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA0NTBweCkge1xuICAuY2FyZC1jb250ZW50IC5idG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG4gICAgcGFkZGluZzogMTVweCAxOXB4O1xuICB9XG5cbiAgLmNhcmQtY29udGVudCBkaXYge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMzc1cHgpIHtcbiAgLmNhcmQtY29udGVudCAuYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgIHBhZGRpbmc6IDE0cHggMTRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRlbnQgZGl2IHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICB9XG59XG4uY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cztcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmltZy1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWctY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC10aXRsZSBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1yZWFkLW1vcmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q0RDRENDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhcmQtcmVhZC1tb3JlIGJ1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzFjOTA0MjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNlZGZmZjQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDgwcHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufVxuXG4uRmlyc3REaXYsXG4uU2Vjb25kRGl2LFxuLlRoaXJkRGl2LFxuLkZvdXJ0aERpdiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzFjOTA0MjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICNlZWUyZTI7XG59XG5cbi5idG4uYnRuLXByaW1hcnkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XG4gIGJvcmRlci1jb2xvcjogIzFjOTA0Mjtcbn1cblxuY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLmJ0bi1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0Mjtcbn1cblxuLnJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG59XG5cbi5QYXlXYXkge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY3VydGFpbnVwOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzFjOTA0Mjtcbn1cblxuLmNhcmRlcy1saXN0IHtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkZSB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCA3cHggcmdiYSgyOCwgMTQ0LCA2NiwgMC41KSwgLTVweCAtNXB4IDMwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uY2FyZGUgLmNhcmRlX2ltYWdlIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFjOTA0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZmZmNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkZSAuY2FyZGVfdGl0bGUgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDQwcHggNDBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC0xNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZmFzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogIzFjOTA0Mjtcbn1cblxuLmNhcmRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIC01cHggLTVweCAzMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuLnRpdGxlZS13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlZS1ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNhcmRlLWxpc3Qge1xuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHdlIGFyZSBubyBsb25nZXIgdXNpbmcgcm93IGRpcmVjdGlvbiBidXQgY29sdW1uICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLypcbi5jYXJkIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2kucmVkZC5pdC9iM2Vzbno1cmEzNHkuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJveC1zaGFkb3c6IDVweCA1cHggMzBweCA3cHggcmdiYSgwLDAsMCwwLjI1KSwgLTVweCAtNXB4IDMwcHggN3B4IHJnYmEoMCwwLDAsMC4yMik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationClaculationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donation-calculation',
                templateUrl: './donation-claculation.component.html',
                styleUrls: ['./donation-claculation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/donations/donation-dialog/donation-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/donations/donation-dialog/donation-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: DonationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationDialogComponent", function() { return DonationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DonationDialogComponent {
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
DonationDialogComponent.ɵfac = function DonationDialogComponent_Factory(t) { return new (t || DonationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DonationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationDialogComponent, selectors: [["app-donation-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "click"]], template: function DonationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Formulaire de dons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Merci ! Votre don nous aidera probablement \u00E0 sauver des vies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationDialogComponent_Template_button_click_5_listener() { return ctx.GoToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb25zL2RvbmF0aW9uLWRpYWxvZy9EOlxcRW1pbHlzIEFzc29jaWF0aW9uIFdlYnNpdGVcXEVtaWx5c05HL3NyY1xcYXBwXFxkb25hdGlvbnNcXGRvbmF0aW9uLWRpYWxvZ1xcZG9uYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbnMvZG9uYXRpb24tZGlhbG9nL2RvbmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kb25hdGlvbnMvZG9uYXRpb24tZGlhbG9nL2RvbmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCJoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donation-dialog',
                templateUrl: './donation-dialog.component.html',
                styleUrls: ['./donation-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/donations/donations-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/donations/donations-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DonationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsRoutingModule", function() { return DonationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _donation_claculation_donation_claculation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donation-claculation/donation-claculation.component */ "./src/app/donations/donation-claculation/donation-claculation.component.ts");
/* harmony import */ var _donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donation-dialog/donation-dialog.component */ "./src/app/donations/donation-dialog/donation-dialog.component.ts");
/* harmony import */ var _donations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donations.component */ "./src/app/donations/donations.component.ts");







const routes = [{ path: 'FormulaireDeDon', component: _donations_component__WEBPACK_IMPORTED_MODULE_4__["DonationsComponent"] },
    { path: 'CalculDesDons', component: _donation_claculation_donation_claculation_component__WEBPACK_IMPORTED_MODULE_2__["DonationClaculationComponent"] },
    { path: 'DialogueDeDons', component: _donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DonationDialogComponent"] }
];
class DonationsRoutingModule {
}
DonationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DonationsRoutingModule });
DonationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DonationsRoutingModule_Factory(t) { return new (t || DonationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DonationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/donations/donations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/donations/donations.component.ts ***!
  \**************************************************/
/*! exports provided: DonationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsComponent", function() { return DonationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_Toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Toaster/toaster.service */ "./src/app/core/Toaster/toaster.service.ts");
/* harmony import */ var _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");








class DonationsComponent {
    constructor(http, toastrService, proxy, fb, matDialog) {
        this.http = http;
        this.toastrService = toastrService;
        this.proxy = proxy;
        this.fb = fb;
        this.matDialog = matDialog;
    }
    ngOnInit() {
        this.submitted = false;
        this.memberData = this.fb.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
        });
    }
    onSubmit() {
        this.proxy.DonationForm(this.memberData.value).subscribe(data => {
            data = this.memberData.value;
            //  JSON.stringify(data);
            this.submitted = true;
            this.toastrService.showSuccess("Merci ! Votre don nous aidera probablement à sauver des vies.");
        }, error => {
            this.toastrService.showError("Désolé, l'opération a échoué. Veuillez réessayer plus tard.");
            console.log(error);
        });
        this.submitted = false;
    }
}
DonationsComponent.ɵfac = function DonationsComponent_Factory(t) { return new (t || DonationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_Toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
DonationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationsComponent, selectors: [["app-donations"]], decls: 20, vars: 2, consts: [[1, "contact", "darken-pseudo"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "p-5", 3, "formGroup", "ngSubmit"], [1, "h4", "mb-4", "text-center"], ["id", "textInput", "type", "text", "formControlName", "FirstName", "placeholder", "Pr\u00E9nom", "required", "", 1, "form-control", "mb-4"], ["type", "text", "id", "defaultContactFormName", "formControlName", "LastName", "placeholder", "Nom", "required", "", 1, "form-control", "mb-4"], ["type", "text", "formControlName", "Address", "id", "AddressInp", "value", "", "placeholder", "Adresse", "required", "", 1, "form-control", "mb-4"], ["type", "number", "formControlName", "PostalCode", "id", "postalCodeInp", "value", "", "placeholder", "Code Postal", "min", "0", "minlength", "3", "oninput", "validity.valid||(value='');", "required", "", 1, "form-control", "mb-4"], ["type", "text", "formControlName", "City", "id", "VilleInp", "value", "", "placeholder", "Ville", "required", "", 1, "form-control", "mb-4"], ["type", "number", "formControlName", "amount", "id", "amount", "name", "amount", "value", "", "min", "0", "inputmode", "numeric", "oninput", "validity.valid||(value='');", "required", "", 1, "form-control", "mb-4"], ["id", "currency", 2, "padding-left", "1px"], ["type", "email", "id", "defaultContactFormEmail", "placeholder", "Courriel", "formControlName", "email", "required", "", 1, "form-control", "mb-4"], ["type", "submit", 1, "btn", "btn-info", "btn-block", "curtainup", 3, "disabled"]], template: function DonationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DonationsComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Veuillez remplir le formulaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Montant \u00E0 payer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.memberData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.memberData.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], styles: [".border.p-5[_ngcontent-%COMP%] {\n  border: black;\n}\n\n.h4.mb-4[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: system-ui;\n  color: #d3ffe4;\n  padding-bottom: 20px;\n}\n\n.browser-default[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 495px;\n}\n\n.mb-4[_ngcontent-%COMP%] {\n  font-size: medium;\n  font-weight: bolder;\n  display: block;\n  border-color: #d3ffe4;\n}\n\n#currency[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: system-ui;\n  color: #d3ffe4;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #817d7d;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  background-color: #1c9042;\n}\n\n.contact[_ngcontent-%COMP%] {\n  background-image: url('http://www.icidrinks.store/donations.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: brightness(100%);\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d3ffe4;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #d3ffe4;\n}\n\n#textInput[_ngcontent-%COMP%], #defaultContactFormName[_ngcontent-%COMP%], #defaultContactFormEmail[_ngcontent-%COMP%], #defaultSelect[_ngcontent-%COMP%], #contact-preference[_ngcontent-%COMP%], #AddressInp[_ngcontent-%COMP%], #postalCodeInp[_ngcontent-%COMP%], #VilleInp[_ngcontent-%COMP%], #amount[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #d3ffe4;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #d3ffe4;\n}\n\n#amount[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 1200px) {\n  #amount[_ngcontent-%COMP%] {\n    max-width: 220px;\n  }\n}\n\n.buttonfx[_ngcontent-%COMP%] {\n  color: black;\n  outline: none;\n  background: transparent;\n  border: none;\n  border-bottom: 4px solid #eee;\n  letter-spacing: 0.0625em;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font: bold 16px \"Bitter\", system-ui;\n  line-height: 2;\n  position: relative;\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all 0.5s;\n  transform-style: preserve-3d;\n}\n\n.curtainup[_ngcontent-%COMP%]:disabled {\n  background: gray;\n  color: white;\n  outline: none;\n  border: none;\n  letter-spacing: 0.0625em;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font: bold 14px \"Bitter\", system-ui;\n  line-height: 2;\n  position: relative;\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all 0.5s;\n  margin-top: 25px;\n}\n\n.curtainup[_ngcontent-%COMP%]:enabled {\n  background: #1c9042;\n  color: #edfff4;\n  outline: none;\n  border-radius: 5px;\n  letter-spacing: 0.0625em;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font: bold 14px \"Bitter\", system-ui;\n  line-height: 2;\n  position: relative;\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all 0.5s;\n  transform-style: preserve-3d;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\n.row[_ngcontent-%COMP%] {\n  font-family: system-ui;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb25zL0Q6XFxFbWlseXMgQXNzb2NpYXRpb24gV2Vic2l0ZVxcRW1pbHlzTkcvc3JjXFxhcHBcXGRvbmF0aW9uc1xcZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbnMvZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxpRUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRERBO0VBQ0UsY0FBQTtBQ0FGOztBREdBOzs7Ozs7Ozs7RUFTRSw2QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0ksZ0JBQUE7RUNBSjtBQUNGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9kb25hdGlvbnMvZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci5wLTUge1xyXG4gIGJvcmRlcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oNC5tYi00IHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICBjb2xvcjogI2QzZmZlNDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJyb3dzZXItZGVmYXVsdCB7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIHdpZHRoOiA0OTVweDtcclxufVxyXG5cclxuLm1iLTQge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDNmZmU0O1xyXG59XHJcblxyXG4jY3VycmVuY3kge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICAvL2ZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICBjb2xvcjogI2QzZmZlNDtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTI1LCAxMjUpO1xyXG59XHJcblxyXG5zZWxlY3Qgb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MDQyO1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9kb25hdGlvbnMuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZDNmZmU0O1xyXG59XHJcblxyXG4jdGV4dElucHV0LFxyXG4jZGVmYXVsdENvbnRhY3RGb3JtTmFtZSxcclxuI2RlZmF1bHRDb250YWN0Rm9ybUVtYWlsLFxyXG4jZGVmYXVsdFNlbGVjdCxcclxuI2NvbnRhY3QtcHJlZmVyZW5jZSxcclxuI0FkZHJlc3NJbnAsXHJcbiNwb3N0YWxDb2RlSW5wLFxyXG4jVmlsbGVJbnAsXHJcbiNhbW91bnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZDNmZmU0O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICNkM2ZmZTQ7XHJcbn1cclxuXHJcbiNhbW91bnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI2Ftb3VudCB7XHJcbiAgICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uZngge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2VlZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OmJvbGQgMTZweCAnQml0dGVyJywgc3lzdGVtLXVpO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uY3VydGFpbnVwOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OmJvbGQgMTRweCAnQml0dGVyJywgc3lzdGVtLXVpO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY3VydGFpbnVwOmVuYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMxYzkwNDI7XHJcbiAgY29sb3I6ICNlZGZmZjQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNWVtO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udDpib2xkIDE0cHggJ0JpdHRlcicsIHN5c3RlbS11aTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG59XHJcbiIsIi5ib3JkZXIucC01IHtcbiAgYm9yZGVyOiBibGFjaztcbn1cblxuLmg0Lm1iLTQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gIGNvbG9yOiAjZDNmZmU0O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmJyb3dzZXItZGVmYXVsdCB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDQ5NXB4O1xufVxuXG4ubWItNCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWNvbG9yOiAjZDNmZmU0O1xufVxuXG4jY3VycmVuY3kge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gIGNvbG9yOiAjZDNmZmU0O1xufVxuXG5zZWxlY3Qgb3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxN2Q3ZDtcbn1cblxuc2VsZWN0IG9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkwNDI7XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9kb25hdGlvbnMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2QzZmZlNDtcbn1cblxuI3RleHRJbnB1dCxcbiNkZWZhdWx0Q29udGFjdEZvcm1OYW1lLFxuI2RlZmF1bHRDb250YWN0Rm9ybUVtYWlsLFxuI2RlZmF1bHRTZWxlY3QsXG4jY29udGFjdC1wcmVmZXJlbmNlLFxuI0FkZHJlc3NJbnAsXG4jcG9zdGFsQ29kZUlucCxcbiNWaWxsZUlucCxcbiNhbW91bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkM2ZmZTQ7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6ICNkM2ZmZTQ7XG59XG5cbiNhbW91bnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAjYW1vdW50IHtcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xuICB9XG59XG4uYnV0dG9uZngge1xuICBjb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZWVlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250OiBib2xkIDE2cHggXCJCaXR0ZXJcIiwgc3lzdGVtLXVpO1xuICBsaW5lLWhlaWdodDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmN1cnRhaW51cDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250OiBib2xkIDE0cHggXCJCaXR0ZXJcIiwgc3lzdGVtLXVpO1xuICBsaW5lLWhlaWdodDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmN1cnRhaW51cDplbmFibGVkIHtcbiAgYmFja2dyb3VuZDogIzFjOTA0MjtcbiAgY29sb3I6ICNlZGZmZjQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNWVtO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udDogYm9sZCAxNHB4IFwiQml0dGVyXCIsIHN5c3RlbS11aTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJvdyB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donations',
                templateUrl: './donations.component.html',
                styleUrls: ['./donations.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"] }, { type: _core_Toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }, { type: _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_4__["Proxy"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/donations/donations.module.ts":
/*!***********************************************!*\
  !*** ./src/app/donations/donations.module.ts ***!
  \***********************************************/
/*! exports provided: DonationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsModule", function() { return DonationsModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _donations_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donations-routing.module */ "./src/app/donations/donations-routing.module.ts");
/* harmony import */ var _donations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donations.component */ "./src/app/donations/donations.component.ts");
/* harmony import */ var _donation_claculation_donation_claculation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donation-claculation/donation-claculation.component */ "./src/app/donations/donation-claculation/donation-claculation.component.ts");
/* harmony import */ var _donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donation-dialog/donation-dialog.component */ "./src/app/donations/donation-dialog/donation-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");









class DonationsModule {
}
DonationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DonationsModule });
DonationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DonationsModule_Factory(t) { return new (t || DonationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _donations_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DonationsModule, { declarations: [_donations_component__WEBPACK_IMPORTED_MODULE_4__["DonationsComponent"], _donation_claculation_donation_claculation_component__WEBPACK_IMPORTED_MODULE_5__["DonationClaculationComponent"], _donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DonationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _donations_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DonationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_donations_component__WEBPACK_IMPORTED_MODULE_4__["DonationsComponent"], _donation_claculation_donation_claculation_component__WEBPACK_IMPORTED_MODULE_5__["DonationClaculationComponent"], _donation_dialog_donation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DonationDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _donations_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=donations-donations-module.js.map