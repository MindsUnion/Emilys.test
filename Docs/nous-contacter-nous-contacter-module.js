(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nous-contacter-nous-contacter-module"],{

/***/ "./src/app/nous-contacter/nous-contacter-dialog/nous-contacter-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/nous-contacter/nous-contacter-dialog/nous-contacter-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NousContacterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NousContacterDialogComponent", function() { return NousContacterDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NousContacterDialogComponent {
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
NousContacterDialogComponent.ɵfac = function NousContacterDialogComponent_Factory(t) { return new (t || NousContacterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NousContacterDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NousContacterDialogComponent, selectors: [["app-nous-contacter-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "click"]], template: function NousContacterDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Formulaire de contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Merci ! Votre message a bien \u00E9t\u00E9 pris en compte. Votre retour nous sera utile pour optimiser nos d\u00E9marches.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NousContacterDialogComponent_Template_button_click_5_listener() { return ctx.GoToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm91cy1jb250YWN0ZXIvbm91cy1jb250YWN0ZXItZGlhbG9nL0Q6XFxFbWlseXMgQXNzb2NpYXRpb24gV2Vic2l0ZVxcRW1pbHlzTkcvc3JjXFxhcHBcXG5vdXMtY29udGFjdGVyXFxub3VzLWNvbnRhY3Rlci1kaWFsb2dcXG5vdXMtY29udGFjdGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm91cy1jb250YWN0ZXIvbm91cy1jb250YWN0ZXItZGlhbG9nL25vdXMtY29udGFjdGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3VzLWNvbnRhY3Rlci9ub3VzLWNvbnRhY3Rlci1kaWFsb2cvbm91cy1jb250YWN0ZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NousContacterDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nous-contacter-dialog',
                templateUrl: './nous-contacter-dialog.component.html',
                styleUrls: ['./nous-contacter-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nous-contacter/nous-contacter-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nous-contacter/nous-contacter-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NousContacterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NousContacterRoutingModule", function() { return NousContacterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nous_contacter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nous-contacter.component */ "./src/app/nous-contacter/nous-contacter.component.ts");





const routes = [{ path: '', component: _nous_contacter_component__WEBPACK_IMPORTED_MODULE_2__["NousContacterComponent"] }];
class NousContacterRoutingModule {
}
NousContacterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NousContacterRoutingModule });
NousContacterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NousContacterRoutingModule_Factory(t) { return new (t || NousContacterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NousContacterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NousContacterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nous-contacter/nous-contacter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nous-contacter/nous-contacter.component.ts ***!
  \************************************************************/
/*! exports provided: NousContacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NousContacterComponent", function() { return NousContacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nous_contacter_dialog_nous_contacter_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nous-contacter-dialog/nous-contacter-dialog.component */ "./src/app/nous-contacter/nous-contacter-dialog/nous-contacter-dialog.component.ts");
/* harmony import */ var _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/proxy.service */ "./src/app/core/services/proxy.service.ts");
/* harmony import */ var _core_Toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Toaster/toaster.service */ "./src/app/core/Toaster/toaster.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");








class NousContacterComponent {
    constructor(DataService, toastrService, fb, matDialog) {
        this.DataService = DataService;
        this.toastrService = toastrService;
        this.fb = fb;
        this.matDialog = matDialog;
        this.title = "Example Angular 8 Material Dialog";
        this.submitted = false;
    }
    ngOnInit() {
        this.submitted = false;
        this.userData = this.fb.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            HelpOrExp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            msgUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            // YesOrNo:  ['', Validators.required]
        });
    }
    openDialog() {
        this.matDialog.open(_nous_contacter_dialog_nous_contacter_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NousContacterDialogComponent"], {
            panelClass: 'custom-dialog-container'
        });
    }
    sendDataAsFormBody() {
        this.DataService.ContactUsForm(this.userData.value).subscribe(data => {
            this.toastrService.showSuccess("Merci ! Votre e-mail a bien été reçu.");
            this.submitted = true;
        }, error => {
            console.log(error);
            this.toastrService.showError("Désolé, l'opération a échoué. Veuillez réessayer plus tard.");
        });
        this.submitted = false;
    }
}
NousContacterComponent.ɵfac = function NousContacterComponent_Factory(t) { return new (t || NousContacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_proxy_service__WEBPACK_IMPORTED_MODULE_3__["Proxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_Toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
NousContacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NousContacterComponent, selectors: [["app-nous-contacter"]], decls: 25, vars: 2, consts: [[1, "contact", "darken-pseudo"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "p-5", 3, "formGroup", "ngSubmit"], [1, "h4", "mb-4", "text-center"], ["id", "textInput", "type", "text", "formControlName", "FirstName", "placeholder", "Pr\u00E9nom", "required", "", 1, "form-control", "mb-4"], ["type", "text", "id", "defaultContactFormName", "formControlName", "LastName", "placeholder", "Nom", "required", "", 1, "form-control", "mb-4"], ["type", "email", "id", "defaultContactFormEmail", "placeholder", "E-mail", "formControlName", "email", "required", "", 1, "form-control", "mb-4"], ["for", "contact-preference"], [1, "field"], ["type", "radio", "name", "HelpOrExp", "id", "contact-preference", "value", "Demandez de l'aide", "formControlName", "HelpOrExp", "required", ""], ["type", "radio", "name", "HelpOrExp", "id", "contact-preference", "value", "Partagez votre exp\u00E9rience", "formControlName", "HelpOrExp"], ["id", "exampleFormControlTextarea2", "rows", "3", "formControlName", "msgUser", "placeholder", "Message", "required", "", 1, "form-control", "rounded-0"], ["type", "submit", 1, "btn", "btn-info", "btn-block", "curtainup", 3, "disabled"]], template: function NousContacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NousContacterComponent_Template_form_ngSubmit_4_listener() { return ctx.sendDataAsFormBody(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nous contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Motif:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Demadez de l'aide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Partagez votre exp\u00E9rience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userData.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], styles: [".border.p-5[_ngcontent-%COMP%] {\n  border: black;\n}\n\n.h4.mb-4[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-family: system-ui;\n  color: black;\n  padding-bottom: 20px;\n}\n\n.mb-4[_ngcontent-%COMP%], #exampleFormControlTextarea2[_ngcontent-%COMP%] {\n  font-size: medium;\n  font-weight: bolder;\n  display: block;\n  border-color: #1c9042;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: black;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: black;\n}\n\n.browser-default[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 495px;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #817d7d;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  background-color: #1c9042;\n}\n\n.contact[_ngcontent-%COMP%] {\n  background-image: url('http://www.icidrinks.store/Contact-us-1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: brightness(80%);\n  border: none;\n}\n\n#textInput[_ngcontent-%COMP%], #defaultContactFormName[_ngcontent-%COMP%], #defaultContactFormEmail[_ngcontent-%COMP%], #defaultSelect[_ngcontent-%COMP%], #exampleFormControlTextarea2[_ngcontent-%COMP%], #contact-preference[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: black;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: black;\n  padding-left: 10px;\n}\n\n.btn.btn-info[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.buttonfx[_ngcontent-%COMP%] {\n  color: black;\n  outline: none;\n  background: transparent;\n  border: none;\n  border-bottom: 4px solid #edfff4;\n  letter-spacing: 0.0625em;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font: 14px \"Bitter\", system-ui;\n  line-height: 2;\n  position: relative;\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all 0.5s;\n  transform-style: preserve-3d;\n  margin-top: 25px;\n}\n\n.curtainup[_ngcontent-%COMP%]:disabled {\n  background: gray;\n  color: #edfff4;\n  outline: none;\n  border: none;\n  letter-spacing: 0.0625em;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font: 14px \"Bitter\", system-ui;\n  line-height: 2;\n  position: relative;\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all 0.5s;\n  margin-top: 25px;\n}\n\n.curtainup[_ngcontent-%COMP%]:enabled {\n  background: #1c9042;\n  color: #edfff4;\n  outline: none;\n  border-radius: 5px;\n  letter-spacing: 0.0625em;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font: 14px \"Bitter\", system-ui;\n  line-height: 2;\n  position: relative;\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all 0.5s;\n  transform-style: preserve-3d;\n  cursor: pointer;\n  margin-top: 25px;\n}\n\n.row[_ngcontent-%COMP%] {\n  font-family: system-ui;\n  font-size: 14px;\n  font-weight: bold;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm91cy1jb250YWN0ZXIvRDpcXEVtaWx5cyBBc3NvY2lhdGlvbiBXZWJzaXRlXFxFbWlseXNORy9zcmNcXGFwcFxcbm91cy1jb250YWN0ZXJcXG5vdXMtY29udGFjdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3VzLWNvbnRhY3Rlci9ub3VzLWNvbnRhY3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBOztFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURGQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLG9FQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBOzs7Ozs7RUFNRSw2QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbm91cy1jb250YWN0ZXIvbm91cy1jb250YWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLnAtNSB7XHJcbiAgYm9yZGVyOiBibGFjaztcclxufVxyXG5cclxuLmg0Lm1iLTQge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1iLTQsXHJcbiNleGFtcGxlRm9ybUNvbnRyb2xUZXh0YXJlYTIge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWM5MDQyO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5icm93c2VyLWRlZmF1bHQge1xyXG4gIGhlaWdodDogMzRweDtcclxuICB3aWR0aDogNDk1cHg7XHJcbn1cclxuXHJcbnNlbGVjdCBvcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjksIDEyNSwgMTI1KTtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTA0MjtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9Db250YWN0LXVzLTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI3RleHRJbnB1dCxcclxuI2RlZmF1bHRDb250YWN0Rm9ybU5hbWUsXHJcbiNkZWZhdWx0Q29udGFjdEZvcm1FbWFpbCxcclxuI2RlZmF1bHRTZWxlY3QsXHJcbiNleGFtcGxlRm9ybUNvbnRyb2xUZXh0YXJlYTIsXHJcbiNjb250YWN0LXByZWZlcmVuY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLWluZm8ge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uZngge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2VkZmZmNDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiAxNHB4ICdCaXR0ZXInLCBzeXN0ZW0tdWk7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmN1cnRhaW51cDpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxuICBjb2xvcjogI2VkZmZmNDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OjE0cHggJ0JpdHRlcicsIHN5c3RlbS11aTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmN1cnRhaW51cDplbmFibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMWM5MDQyO1xyXG4gIGNvbG9yOiAjZWRmZmY0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA2MjVlbTtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IDE0cHggJ0JpdHRlcicsIHN5c3RlbS11aTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuIiwiLmJvcmRlci5wLTUge1xuICBib3JkZXI6IGJsYWNrO1xufVxuXG4uaDQubWItNCB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLm1iLTQsXG4jZXhhbXBsZUZvcm1Db250cm9sVGV4dGFyZWEyIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItY29sb3I6ICMxYzkwNDI7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5icm93c2VyLWRlZmF1bHQge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiA0OTVweDtcbn1cblxuc2VsZWN0IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTdkN2Q7XG59XG5cbnNlbGVjdCBvcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MDQyO1xufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvQ29udGFjdC11cy0xLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI3RleHRJbnB1dCxcbiNkZWZhdWx0Q29udGFjdEZvcm1OYW1lLFxuI2RlZmF1bHRDb250YWN0Rm9ybUVtYWlsLFxuI2RlZmF1bHRTZWxlY3QsXG4jZXhhbXBsZUZvcm1Db250cm9sVGV4dGFyZWEyLFxuI2NvbnRhY3QtcHJlZmVyZW5jZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4uYnRuLWluZm8ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmJ1dHRvbmZ4IHtcbiAgY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2VkZmZmNDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNWVtO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udDogMTRweCBcIkJpdHRlclwiLCBzeXN0ZW0tdWk7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY3VydGFpbnVwOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgY29sb3I6ICNlZGZmZjQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNWVtO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udDogMTRweCBcIkJpdHRlclwiLCBzeXN0ZW0tdWk7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY3VydGFpbnVwOmVuYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjMWM5MDQyO1xuICBjb2xvcjogI2VkZmZmNDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250OiAxNHB4IFwiQml0dGVyXCIsIHN5c3RlbS11aTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnJvdyB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRleHRhcmVhIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NousContacterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nous-contacter',
                templateUrl: './nous-contacter.component.html',
                styleUrls: ['./nous-contacter.component.scss']
            }]
    }], function () { return [{ type: _core_services_proxy_service__WEBPACK_IMPORTED_MODULE_3__["Proxy"] }, { type: _core_Toaster_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nous-contacter/nous-contacter.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/nous-contacter/nous-contacter.module.ts ***!
  \*********************************************************/
/*! exports provided: NousContacterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NousContacterModule", function() { return NousContacterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nous_contacter_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nous-contacter-routing.module */ "./src/app/nous-contacter/nous-contacter-routing.module.ts");
/* harmony import */ var _nous_contacter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nous-contacter.component */ "./src/app/nous-contacter/nous-contacter.component.ts");
/* harmony import */ var _nous_contacter_dialog_nous_contacter_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nous-contacter-dialog/nous-contacter-dialog.component */ "./src/app/nous-contacter/nous-contacter-dialog/nous-contacter-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class NousContacterModule {
}
NousContacterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NousContacterModule });
NousContacterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NousContacterModule_Factory(t) { return new (t || NousContacterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _nous_contacter_routing_module__WEBPACK_IMPORTED_MODULE_2__["NousContacterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NousContacterModule, { declarations: [_nous_contacter_component__WEBPACK_IMPORTED_MODULE_3__["NousContacterComponent"], _nous_contacter_dialog_nous_contacter_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NousContacterDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nous_contacter_routing_module__WEBPACK_IMPORTED_MODULE_2__["NousContacterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NousContacterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_nous_contacter_component__WEBPACK_IMPORTED_MODULE_3__["NousContacterComponent"], _nous_contacter_dialog_nous_contacter_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NousContacterDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nous_contacter_routing_module__WEBPACK_IMPORTED_MODULE_2__["NousContacterRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=nous-contacter-nous-contacter-module.js.map