(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-folder-medical-folder-module"],{

/***/ "31Aq":
/*!*****************************************************************************************!*\
  !*** ./src/app/medical-folder/certificate-follow-up/certificate-follow-up.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CertificateFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateFollowUpComponent", function() { return CertificateFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_utility/date/ngb-datepicker */ "22Pf");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "KZYO");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_utility/date/date-output-format */ "mu7B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utility_string_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_utility/string/slugify */ "EImB");
/* harmony import */ var src_app_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_utility/string/replaceDocParms */ "Ezja");
/* harmony import */ var src_app_services_type_certificate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/type-certificate.service */ "Pd2Q");
/* harmony import */ var src_app_services_patient_certificate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/patient-certificate.service */ "uOhP");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_services/patient.service */ "mx5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/_services/app-cookie.service */ "aioW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../_shared/patient/patient-tag/patient-tag.component */ "cdzU");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");























function CertificateFollowUpComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_tr_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.atModalshow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_tr_22_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const certificate_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.generateCerticifate(certificate_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const certificate_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, certificate_r8.date, "dd/MM/yyyy hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](certificate_r8.certificatType.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](certificate_r8.practician.firstName + " " + certificate_r8.practician.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](certificate_r8.facility.name);
} }
function CertificateFollowUpComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CertificateFollowUpComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CertificateFollowUpComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function CertificateFollowUpComponent_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const certificate_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", certificate_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", certificate_r12.name, " ");
} }
function CertificateFollowUpComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_div_43_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_div_43_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.toggleEditorHidden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_div_43_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fermer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.certificateCustomText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r6.previewData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CertificateFollowUpComponent_ngx_extended_pdf_viewer_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 59);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.docSrc);
} }
const _c0 = function () { return { standalone: true }; };
class CertificateFollowUpComponent {
    constructor(typeCertificateService, patientCertificateService, patientService, sanitizer, alertService, userService, cookieService) {
        this.typeCertificateService = typeCertificateService;
        this.patientCertificateService = patientCertificateService;
        this.patientService = patientService;
        this.sanitizer = sanitizer;
        this.alertService = alertService;
        this.userService = userService;
        this.cookieService = cookieService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 25;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * handle the spinner
         */
        this.loading = true;
        /**
         *
         */
        this.today = Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(new Date());
        /**
        * assign the editor to a public property to make it accessible from the template
        */
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_3__;
        /**
         * share a model in with the editor
         */
        this.model = {
            editorData: ''
        };
        this.certificateCustomText = false;
        this.patientCertificateId = 0;
    }
    ngOnInit() {
        this.initForm();
        this.typeCertificateService.getIdAndName().subscribe(res => { this.certificateTypes = res; });
        this.userService.findByUsername(this.cookieService.get('username')).subscribe(res => { this.pratician = res; });
        this.patientService.findById(this.patientId).subscribe(res => {
            this.patient = res;
            this.getCertificates();
        });
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(new Date())),
            certificate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
        });
    }
    /**
     * get a collection of the patient certificated
     */
    getCertificates() {
        let data = {
            patientId: this.patientId,
            page: this.page,
        };
        this.patientCertificateService.findAllByPage(data).subscribe(res => {
            if (res) {
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.patientCertificates = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.patientCertificates = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     * add the toolbar to the DOM
     *
     */
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    /**
    * set the current page
    * @param pageNum
    */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = this.page - 1;
        this.getCertificates();
    }
    /**
     * set the content for the chosen certificate type
     * @param val
     */
    setCertificateText() {
        let certificateTypeId = this.form.get("certificate").value;
        this.typeCertificateService.findById(certificateTypeId).subscribe(res => {
            this.model.editorData = res['content'];
            for (let index = 0; index < Object.keys(this.patient).length; index++) {
                const element = '@@@-' + Object(src_app_utility_string_slugify__WEBPACK_IMPORTED_MODULE_6__["slugify"])(Object.keys(this.patient)[index]) + '-';
                this.model.editorData = Object(src_app_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_7__["replaceDocVarialbles"])(this.model.editorData, this.patient, this.pratician);
            }
            this.previewData = this.sanitizer.bypassSecurityTrustHtml(this.model.editorData);
        });
    }
    /**
     *  tooble the hiden state of the editor
     */
    toggleEditorHidden() {
        this.certificateCustomText = this.certificateCustomText ? false : true;
    }
    /**
     * save data into the database
     */
    save() {
        if (this.patientCertificateId == 0) {
            let customText = !this.certificateCustomText ? null : this.model.editorData;
            let data = {
                "admission": this.admissionId,
                "docId": this.form.get('certificate').value,
                "custom_text": customText,
                "id": this.patientCertificateId
            };
            this.patientCertificateService.save(data).subscribe(res => {
                if (res) {
                    this.alertService.success('Certificat creé avec succès !');
                    this.page = this.page - 1;
                    this.patientCertificateId = res.id;
                    this.getCertificates();
                }
            });
        }
        else {
            this.alertService.error('Impossible de mofier un certificat qui a deja été crée, veillez creer un autre.');
        }
    }
    /**
     * pgenerate pdf in the ngx-pdf-extended-viewer
     */
    generateCerticifate(certificate) {
        const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
        this.patient = certificate['patient'];
        let doc = this.patientCertificateService.generatePdf(certificate, patientTag);
        this.docSrc = doc.output('datauristring');
    }
    /**
     *  reset the datas and the form
     */
    reset() {
        this.previewData = null;
        this.patientCertificateId = 0;
        this.form.get('certificate').reset();
    }
}
CertificateFollowUpComponent.ɵfac = function CertificateFollowUpComponent_Factory(t) { return new (t || CertificateFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_certificate_service__WEBPACK_IMPORTED_MODULE_8__["TypeCertificateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_certificate_service__WEBPACK_IMPORTED_MODULE_9__["PatientCertificateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_10__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_14__["AppCookieService"])); };
CertificateFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificateFollowUpComponent, selectors: [["app-certificate-follow-up"]], inputs: { patientId: "patientId", admissionId: "admissionId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["I18n"],
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["CustomDatepickerI18n"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["CustomAdapter"] },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["CustomDateParserFormatter"] }
        ] // define custom NgbDatepickerI18n provider
        )], decls: 66, vars: 22, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-certificate-list-tab", "data-toggle", "pill", "href", "#pills-certificate-list", "role", "tab", "aria-controls", "pills-certificate-list", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-new-certificate-tab", "data-toggle", "pill", "href", "#pills-new-certificate", "role", "tab", "aria-controls", "pills-new-certificate", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-certificate-list", "role", "tabpanel", "aria-labelledby", "pills-certificate-list-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive", "mt-3"], [1, "table", "table-sm", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["id", "pills-new-certificate", "role", "tabpanel", "aria-labelledby", "pills-new-certificate-tab", 1, "tab-pane", "fade", "show"], [3, "formGroup"], [1, "col-md-4", "input-group", "input-group-sm"], ["formControlName", "date", "placeholder", "jj-mm-AAAA", "ngbDatepicker", "", 1, "form-control", 3, "value"], ["d", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "far", "fa-calendar-alt"], [1, "col-md-8"], ["placeholder", "Type de certificat", "formControlName", "certificate", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["class", "mt-3", 3, "hidden", 4, "ngIf"], [3, "hidden"], [1, "card"], [1, "card-body", 3, "hidden"], [1, "bg-light", 3, "ngModel", "ngModelOptions", "editor", "ngModelChange", "ready"], ["type", "button", 1, "btn", "btn-danger", "m-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "m-2", 3, "click"], [3, "patient"], ["id", "certificatePdfModal", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["useBrowserLocale", "true", "height", "80vh", 3, "src", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "btn", "btn-link", "text-dark", 3, "click"], ["data-toggle", "modal", "data-target", "#certificatePdfModal", 1, "btn", "btm-sm", "btn-light", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf", "text-danger"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [3, "value"], [1, "mt-3", 3, "hidden"], [1, "card-body", 2, "height", "20rem", 3, "innerHTML"], ["type", "button", 1, "btn", "btn-success", "mx-2", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", "mx-2", 3, "click"], [1, "fas", "fa-pen-alt", "mr-1"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "mx-3", 3, "click"], ["useBrowserLocale", "true", "height", "80vh", 3, "src"]], template: function CertificateFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Liste des certificats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nouveau certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "certificat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CertificateFollowUpComponent_tr_22_Template, 15, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CertificateFollowUpComponent_div_24_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CertificateFollowUpComponent_span_25_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CertificateFollowUpComponent_div_26_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CertificateFollowUpComponent_Template_ngb_pagination_pageChange_29_listener($event) { return ctx.page = $event; })("pageChange", function CertificateFollowUpComponent_Template_ngb_pagination_pageChange_29_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_Template_span_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CertificateFollowUpComponent_Template_ng_select_change_40_listener() { return ctx.setCertificateText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CertificateFollowUpComponent_ng_option_41_Template, 2, 2, "ng-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CertificateFollowUpComponent_div_43_Template, 10, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ckeditor", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CertificateFollowUpComponent_Template_ckeditor_ngModelChange_47_listener($event) { return ctx.model.editorData = $event; })("ready", function CertificateFollowUpComponent_Template_ckeditor_ready_47_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_Template_button_click_49_listener() { return ctx.toggleEditorHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificateFollowUpComponent_Template_button_click_51_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-patient-tag", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CertificateFollowUpComponent_ngx_extended_pdf_viewer_62_Template, 1, 1, "ngx-extended-pdf-viewer", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientCertificates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificateTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.certificateCustomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.certificateCustomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.editorData)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("editor", ctx.Editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_18__["PatientTagComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["ɵr"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["NgxExtendedPdfViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    \r\n    width: 100% !important;\r\n}\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: #dae0e6;\r\n}\r\n.ck-editor__editable_inline[_ngcontent-%COMP%] {\r\n    min-height: 200px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvY2VydGlmaWNhdGUtZm9sbG93LXVwL2NlcnRpZmljYXRlLWZvbGxvdy11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvY2VydGlmaWNhdGUtZm9sbG93LXVwL2NlcnRpZmljYXRlLWZvbGxvdy11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgLyogYm9yZGVyOiAxIHB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgKi9cclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWUwZTY7XHJcbn1cclxuXHJcbi5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificateFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certificate-follow-up',
                templateUrl: './certificate-follow-up.component.html',
                styleUrls: ['./certificate-follow-up.component.css'],
                providers: [
                    _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["I18n"],
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["CustomDatepickerI18n"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["CustomAdapter"] },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: _utility_date_ngb_datepicker__WEBPACK_IMPORTED_MODULE_2__["CustomDateParserFormatter"] }
                ] // define custom NgbDatepickerI18n provider
            }]
    }], function () { return [{ type: src_app_services_type_certificate_service__WEBPACK_IMPORTED_MODULE_8__["TypeCertificateService"] }, { type: src_app_services_patient_certificate_service__WEBPACK_IMPORTED_MODULE_9__["PatientCertificateService"] }, { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_10__["PatientService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] }, { type: src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_14__["AppCookieService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7NaZ":
/*!********************************************************!*\
  !*** ./src/app/_services/current-treatment.service.ts ***!
  \********************************************************/
/*! exports provided: CurrentTreatmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTreatmentService", function() { return CurrentTreatmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CurrentTreatmentService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(currentTreatment) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl2 + '/current-treatment/add', currentTreatment);
    }
    /**
     * get object by id
     * @param patient_id
     */
    findByPatientId(patient_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl2 + '/current-treatment/detail/' + patient_id);
    }
}
CurrentTreatmentService.ɵfac = function CurrentTreatmentService_Factory(t) { return new (t || CurrentTreatmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CurrentTreatmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrentTreatmentService, factory: CurrentTreatmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentTreatmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8z9N":
/*!***************************************************************************!*\
  !*** ./src/app/medical-folder/exam-follow-up/exam-follow-up.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExamFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamFollowUpComponent", function() { return ExamFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_analysis_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/analysis-request.service */ "9tjR");
/* harmony import */ var src_app_services_analysis_domain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/analysis-domain.service */ "mu2C");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/patient.service */ "mx5+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _check_up_follow_up_check_up_follow_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../check-up-follow-up/check-up-follow-up.component */ "l7pL");
/* harmony import */ var _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_shared/patient/patient-tag/patient-tag.component */ "cdzU");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");













const _c0 = function (a0, a1) { return { "text-green": a0, "text-red": a1 }; };
function ExamFollowUpComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_tr_29_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const request_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectedItem(request_r9.id); })("click", function ExamFollowUpComponent_tr_29_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.atModalshow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_tr_29_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const request_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.generateExam(request_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, request_r9.date, "dd/MM/yyyy hh:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r9.analysis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", request_r9.state == "Y" ? "examens effectu\u00E9s" : "examen non effectu\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, request_r9.state == "Y", request_r9.state == "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r9.practicianFirstName + " " + request_r9.practicianLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](request_r9.facility);
} }
function ExamFollowUpComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamFollowUpComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamFollowUpComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function ExamFollowUpComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.message, " ");
} }
function ExamFollowUpComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.error, " ");
} }
function ExamFollowUpComponent_div_56_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_div_56_div_5_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const type_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.checked($event.target, type_r16.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", type_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r16.name);
} }
function ExamFollowUpComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExamFollowUpComponent_div_56_div_5_Template, 4, 2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", domain_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", domain_r14.analysisTypes);
} }
function ExamFollowUpComponent_ngx_extended_pdf_viewer_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 72);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.docSrc);
} }
class ExamFollowUpComponent {
    constructor(analysisRequestService, analysisDomainService, patientService) {
        this.analysisRequestService = analysisRequestService;
        this.analysisDomainService = analysisDomainService;
        this.patientService = patientService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * handle the spinner
         */
        this.loading = true;
        /**
         *
         */
        this.selectectedItems = [];
        this.analysis = [];
    }
    ngOnInit() {
        this.patientService.findById(this.patientId).subscribe(res => { this.patient = res; });
        this.initForm();
        this.analysisDomainService.findActive().subscribe(res => { this.analysisDomains = res; });
        this.getAnalysisRequests();
    }
    /**
     *
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            admission: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.admissionId),
            analysis: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            diagnostic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            observation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            otherAnalysis: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    /**
     *
     */
    getAnalysisRequests() {
        let data = {
            "page": this.page,
            'size': this.perPage,
            "sort": 'createdAt',
            "order": 'desc',
            'patientId': this.patientId
        };
        this.analysisRequestService.findAllByPatientAndPage(data).subscribe(res => {
            if (res) {
                res['content'].forEach(element => {
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(element.analysis = JSON.parse(element.analysis).join(", "));
                });
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.requestLists = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.requestLists = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
    * set the current page
    * @param pageNum
    */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = this.page - 1;
        this.getAnalysisRequests();
    }
    /**
     *
     */
    saveAnalysisRequest() {
        this.atModalshow();
        let data = this.form.value;
        data.analysis = JSON.stringify(this.selectectedItems);
        if (this.form.valid) {
            if (this.selectectedItems.length != 0) {
                this.analysisRequestService.save(data).subscribe(res => {
                    this.analysisRequest = res;
                    this.form.get('id').setValue(res.id);
                    this.message = "Demande d'analyses envoyée";
                    this.loading = true;
                    this.page = this.page - 1;
                    this.getAnalysisRequests();
                });
            }
            else {
                this.error = 'veillez selectionner des actes!';
            }
        }
        else {
            this.error = 'Formulaire invalid';
        }
    }
    /**
     *
     */
    generateExam(request) {
        const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
        console.log(patientTag);
        let doc = this.analysisRequestService.generatePdf(request, 'Chambre 00', patientTag);
        this.docSrc = doc.output('datauristring');
    }
    /**
     *
     * @param target
     * @param item
     */
    checked(target, item) {
        target.classList.toggle('bg-dark');
        if (this.selectectedItems.includes(item)) {
            let index = this.selectectedItems.indexOf(item);
            this.selectectedItems.splice(index, 1);
        }
        else {
            this.selectectedItems.push(item);
        }
    }
    /**
     *
     * @param item
     */
    selectedItem(item) {
        this.analysisRequestService.findById(item).subscribe(res => {
            this.selectectedItems = JSON.parse(res.analysis);
            for (let index = 0; index < this.selectectedItems.length; index++) {
                document.getElementById(this.selectectedItems[index]).classList.add('bg-dark');
            }
            this.form.patchValue(res);
        });
    }
    /**
     *
     */
    atModalshow() {
        this.message = null;
        this.error = null;
    }
    /**
     *
     */
    atModalsClose() {
        let analysisTypes = document.getElementsByClassName('analysisType');
        for (let index = 0; index < analysisTypes.length; index++) {
            document.getElementById(analysisTypes[index].id).classList.remove('bg-dark');
        }
    }
}
ExamFollowUpComponent.ɵfac = function ExamFollowUpComponent_Factory(t) { return new (t || ExamFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_analysis_request_service__WEBPACK_IMPORTED_MODULE_3__["AnalysisRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_analysis_domain_service__WEBPACK_IMPORTED_MODULE_4__["AnalysisDomainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"])); };
ExamFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamFollowUpComponent, selectors: [["app-exam-follow-up"]], inputs: { admissionId: "admissionId", patientId: "patientId" }, decls: 96, vars: 18, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-exams-tab", "data-toggle", "pill", "href", "#pills-exams", "role", "tab", "aria-controls", "pills-exams", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-check-up-tab", "data-toggle", "pill", "href", "#pills-check-up", "role", "tab", "aria-controls", "pills-check-up", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-exams", "role", "tabpanel", "aria-labelledby", "pills-exams-tab", 1, "tab-pane", "fade", "show", "active"], [1, "float-right"], ["type", "button", "data-toggle", "modal", "data-target", "#exam", 1, "btn", "btn-success", "m-2", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["id", "pills-check-up", "role", "tabpanel", "aria-labelledby", "pills-check-up-tab", 1, "tab-pane", "fade"], [3, "patientId", "admissionId"], [3, "patient"], ["id", "exam", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "examLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["id", "examLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "text-right", "mr-2", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "word-spacing", "5px"], ["htmlData", ""], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [3, "formGroup"], [1, "col-md-8"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "col-md-12"], ["for", "otherAnalysis"], [1, "text-bold"], [1, "form-group"], ["formControlName", "otherAnalysis", "rows", "4", "placeholder", "", 1, "form-control"], ["for", "observation"], ["formControlName", "observation", "rows", "4", "placeholder", "", 1, "form-control"], ["for", "diagnostic"], ["formControlName", "diagnostic", "rows", "4", "placeholder", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["id", "examPdfModal", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], ["useBrowserLocale", "true", "height", "80vh", 3, "src", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "text-capitalize", "text-center", "text-nowrap"], [1, "fas", "fa-circle", 3, "ngClass", "ngbTooltip"], ["data-toggle", "modal", "data-target", "#exam", 1, "text-info", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pen-alt"], ["data-toggle", "modal", "data-target", "#examPdfModal", 1, "btn", "btm-sm", "btn-light", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf", "text-danger"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [1, "mt-3"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], [1, "mb-3"], [1, "row", "text-center", "border"], [1, "col-md-12", "text-bold"], ["class", "col-md-3 border", 4, "ngFor", "ngForOf"], [1, "col-md-3", "border"], [1, "d-inline", "mr-2", "analysisType", 2, "width", "13px", "height", "13px", 3, "id", "click"], ["for", "type.name", 1, "d-inline"], ["useBrowserLocale", "true", "height", "80vh", 3, "src"]], template: function ExamFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Examens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bilans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_Template_button_click_10_listener() { return ctx.atModalshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Demande d'examens ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Examens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Editer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ExamFollowUpComponent_tr_29_Template, 19, 12, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ExamFollowUpComponent_div_31_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ExamFollowUpComponent_span_32_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ExamFollowUpComponent_div_33_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngb-pagination", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ExamFollowUpComponent_Template_ngb_pagination_pageChange_36_listener($event) { return ctx.page = $event; })("pageChange", function ExamFollowUpComponent_Template_ngb_pagination_pageChange_36_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-check-up-follow-up", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-patient-tag", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Demande d'examens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_Template_span_click_46_listener() { return ctx.atModalsClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ExamFollowUpComponent_div_51_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ExamFollowUpComponent_div_52_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ExamFollowUpComponent_div_56_Template, 6, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Autres examens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Observation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Diagnostic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_Template_button_click_80_listener() { return ctx.atModalsClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFollowUpComponent_Template_button_click_82_listener() { return ctx.saveAnalysisRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ExamFollowUpComponent_ngx_extended_pdf_viewer_92_Template, 1, 1, "ngx-extended-pdf-viewer", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId)("admissionId", ctx.admissionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.analysisDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPagination"], _check_up_follow_up_check_up_follow_up_component__WEBPACK_IMPORTED_MODULE_8__["CheckUpFollowUpComponent"], _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_9__["PatientTagComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltip"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["NgxExtendedPdfViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    \r\n    width: 100% !important;\r\n}\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: #dae0e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvZXhhbS1mb2xsb3ctdXAvZXhhbS1mb2xsb3ctdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tZWRpY2FsLWZvbGRlci9leGFtLWZvbGxvdy11cC9leGFtLWZvbGxvdy11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgLyogYm9yZGVyOiAxIHB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgKi9cclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWUwZTY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-follow-up',
                templateUrl: './exam-follow-up.component.html',
                styleUrls: ['./exam-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_analysis_request_service__WEBPACK_IMPORTED_MODULE_3__["AnalysisRequestService"] }, { type: src_app_services_analysis_domain_service__WEBPACK_IMPORTED_MODULE_4__["AnalysisDomainService"] }, { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] }]; }, { admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "99PV":
/*!******************************************************!*\
  !*** ./src/app/_services/patient-courier.service.ts ***!
  \******************************************************/
/*! exports provided: PatientCourierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCourierService", function() { return PatientCourierService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utility/date/date-output-format */ "mu7B");
/* harmony import */ var _utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_utility/string/replaceDocParms */ "Ezja");
/* harmony import */ var _utility_string_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_utility/string/slugify */ "EImB");









class PatientCourierService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(document) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-courier/add', document);
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('patientId', data['patientId'])
                .set('page', data['page'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-courier/p_list', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-courier/detail/' + id);
    }
    /**
     * generate mail document
     */
    generatePdf(mail, patientTag) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', 'a4');
        var patient = mail['patient'];
        var practician = mail['practician'];
        var croType = mail['courierType'];
        if (mail) {
            // doc variable
            var date = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(mail['date']);
            ;
            var patientNumber = patient['patientExternalId'];
            var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
            var footer = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].documentFooter;
            //doc head
            doc.addImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.addImage(patientTag['src'], 'JPEG', 380, 30, 170, 50);
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 430, 80);
            doc.text("Date:" + date, 25, 120);
            doc.setFontSize(12);
            doc.setFont('times', 'bold');
            doc.text("Courier: ", 200, 190);
            doc.setLineWidth(1);
            doc.line(250, 192, 200, 192);
            doc.setFontSize(10);
            if (mail['custom_text']) {
                var content = doc.splitTextToSize(mail['custom_text'], 540);
                doc.text(content, 25, 210);
            }
            else {
                for (let index = 0; index < Object.keys(patient).length; index++) {
                    const element = '@@@-' + Object(_utility_string_slugify__WEBPACK_IMPORTED_MODULE_6__["slugify"])(Object.keys(patient)[index]) + '-';
                    croType['content'] = Object(_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_5__["replaceDocVarialbles"])(croType['content'], patient, practician);
                }
                // doc.html(croType['content'], {
                //     callback: function (doc) {
                //       doc.output('dataurlnewwindow');
                //     },
                //     x: 25,
                //     y: 210
                //   });
                var content = doc.splitTextToSize(croType['content'], 540);
                doc.text(content, 25, 210);
            }
            doc.setFont('times', 'bold');
            doc.text("Médécin: ", 350, 700);
            doc.text(practicianFullName, 350, 720);
            doc.setTextColor(150);
            doc.setFontSize(8);
            doc.setLineWidth(0.25);
            doc.line(552, 770, 25, 770);
            var splitFooter = doc.splitTextToSize(footer, 540);
            doc.text(splitFooter, 25, 780);
        }
        return doc;
    }
}
PatientCourierService.ɵfac = function PatientCourierService_Factory(t) { return new (t || PatientCourierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PatientCourierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientCourierService, factory: PatientCourierService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PatientCourierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9pJ2":
/*!*******************************************************!*\
  !*** ./src/app/_services/patient-check-up.service.ts ***!
  \*******************************************************/
/*! exports provided: PatientCheckUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCheckUpService", function() { return PatientCheckUpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class PatientCheckUpService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(document) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/patient-check-up/add', document);
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('patientId', data['patientId'])
                .set('page', data['page'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/patient-check-up/p_list', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/patient-check-up/detail/' + id);
    }
}
PatientCheckUpService.ɵfac = function PatientCheckUpService_Factory(t) { return new (t || PatientCheckUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PatientCheckUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientCheckUpService, factory: PatientCheckUpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PatientCheckUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "BFi1":
/*!*******************************************************************************************!*\
  !*** ./src/app/medical-folder/consultation-follow-up/consultation-follow-up.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConsultationFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationFollowUpComponent", function() { return ConsultationFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utility/date/date-output-format */ "mu7B");
/* harmony import */ var src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/consultation.service */ "nJ+l");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_pathology_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/pathology.service */ "1Bjq");
/* harmony import */ var src_app_services_symptom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/symptom.service */ "+Mff");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");












function ConsultationFollowUpComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultationFollowUpComponent_tr_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const consultation_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectedItem(consultation_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const consultation_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, consultation_r8.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", consultation_r8.conclusion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](consultation_r8.practicianFirstName + " " + consultation_r8.practicianLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](consultation_r8.facility);
} }
function ConsultationFollowUpComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultationFollowUpComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultationFollowUpComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function ConsultationFollowUpComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.updatedMessage, " ");
} }
function ConsultationFollowUpComponent_ng_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r11.value, " ");
} }
function ConsultationFollowUpComponent_ng_option_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symptom_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", symptom_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", symptom_r12.name, " ");
} }
function ConsultationFollowUpComponent_ng_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pathology_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pathology_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pathology_r13.name, " ");
} }
class ConsultationFollowUpComponent {
    constructor(consultationService, alertService, pathologyService, symptomService) {
        this.consultationService = consultationService;
        this.alertService = alertService;
        this.pathologyService = pathologyService;
        this.symptomService = symptomService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'startDate';
        /**
         * handle the spinner
         */
        this.loading = true;
        this.activeTabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * define consultation type option
         */
        this.consultationTypes = [
            { id: 'p', value: 'Prémière consultation' },
            { id: 's', value: 'Consultation de surveillance' },
        ];
    }
    ngOnInit() {
        this.getConsultations();
        this.initForm();
        this.pathologyService.getIdAndName().subscribe(res => { this.pathologies = res; });
        this.symptomService.getIdAndName().subscribe(res => { this.symptoms = res; });
    }
    /**
     *
     */
    getConsultations() {
        let data = {
            "page": this.page,
            "size": this.perPage,
            "sort": 'startDate',
            "order": 'desc',
            'patient': this.patientId
        };
        this.consultationService.findAllPatientConsultations(data).subscribe(res => {
            if (res) {
                console.log(res);
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.consultations = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.consultations = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     * set the current page
     * @param pageNum
     */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = pageNum - 1;
        this.getConsultations();
    }
    sendActiveTab(activeTab) {
        this.activeTabEvent.emit(activeTab);
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            conclusionExamResult: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            admission: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            examinationReasons: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            examinationType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            history: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            pathologies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            symptoms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 'null', disabled: true }),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    selectedItem(itemId) {
        this.updatedMessage = null;
        this.consultationService.findById(itemId).subscribe(res => {
            let pathologies = res['spathologies'].map(({ id }) => id);
            let symptoms = res['symptoms'].map(({ id }) => id);
            this.form.get('conclusion').setValue(res.conclusion);
            this.form.get('examinationReasons').setValue(res.examinationReasons);
            this.form.get('history').setValue(res.history);
            this.form.get('id').setValue(res.id);
            this.form.get('date').setValue(Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_2__["dateOutputFormat"])(res.startDate));
            this.form.get('examinationType').setValue(res.examinationType);
            this.form.get('conclusionExamResult').setValue(res['conclusionExamResult']);
            this.form.get('admission').setValue(res.admission);
            this.form.get('pathologies').setValue(pathologies);
            this.form.get('symptoms').setValue(symptoms);
        });
    }
    /**
     * save
     */
    save() {
        //validate form '
        this.alertService.clear();
        let data = this.form.value;
        if (this.form.valid) {
            this.consultationService.update(data).subscribe(res => {
                this.consultation = res;
                this.updatedMessage = 'Consultation mis a jour avec succés';
            });
        }
        else {
            this.alertService.error('Formulaire non valid');
        }
    }
}
ConsultationFollowUpComponent.ɵfac = function ConsultationFollowUpComponent_Factory(t) { return new (t || ConsultationFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_3__["ConsultationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pathology_service__WEBPACK_IMPORTED_MODULE_5__["PathologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_symptom_service__WEBPACK_IMPORTED_MODULE_6__["SymptomService"])); };
ConsultationFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConsultationFollowUpComponent, selectors: [["app-consultation-follow-up"]], inputs: { patientId: "patientId", patientConsultations: "patientConsultations" }, outputs: { activeTabEvent: "activeTabEvent" }, decls: 105, vars: 17, consts: [[1, "table-responsive"], [1, "table", "table-sm", "table-hover", "table-striped"], [1, "col-1"], [1, "col-3"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["id", "editConsutation", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "patologyLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "patologyLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "formGroup", "submit"], [1, "row", "col-md-9"], [1, "form-group"], [1, "input-group", "input-group-sm"], ["for", "date"], ["type", "text", "formControlName", "date", "disabled", "", 1, "form-control"], [1, "row", "input-group-sm", "col-md-7"], [1, "col-md-5", "float-right"], ["for", "examinationType"], [1, "text-danger"], [1, "col-md-7"], ["formControlName", "examinationType"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "col-md-3"], [1, "col-md-6"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["for", "reason"], [1, "text-bold"], ["formControlName", "examinationReasons", "rows", "4", "placeholder", "Motif de la consultation", 1, "form-control"], [1, "row", "input-group-sm", "mb-4"], ["for", "symptoms"], [1, "text-bold", "mb-2"], ["formControlName", "symptoms", 2, "width", "100%", 3, "multiple"], ["for", "history"], ["formControlName", "history", "rows", "8", "placeholder", "Histoire de la maladie", 1, "form-control"], ["for", "conclusion"], ["formControlName", "conclusion", "rows", "8", "placeholder", "Conclusion l'Interrogatoire", 1, "form-control", "mt-3"], [1, "row", "input-group-sm"], ["for", "pathologies", 1, "mb-4"], ["formControlName", "pathologies", 2, "width", "100%", 3, "multiple"], ["for", "conclusion", 1, "mt-2"], ["formControlName", "conclusionExamResult", "rows", "5", "placeholder", "Interpretation des r\u00E9sultat d'Examens", 1, "form-control"], ["data-toggle", "modal", "data-target", "#editConsutation", 1, "btn", "btn-link", 3, "click"], [1, "text-capitalize"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [1, "mt-3"], ["role", "alert", 1, "alert", "alert-success"], [3, "value"]], template: function ConsultationFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Observation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConsultationFollowUpComponent_tr_11_Template, 11, 7, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConsultationFollowUpComponent_div_13_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConsultationFollowUpComponent_span_14_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ConsultationFollowUpComponent_div_15_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-pagination", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ConsultationFollowUpComponent_Template_ngb_pagination_pageChange_18_listener($event) { return ctx.page = $event; })("pageChange", function ConsultationFollowUpComponent_Template_ngb_pagination_pageChange_18_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ConsultationFollowUpComponent_div_28_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ConsultationFollowUpComponent_Template_form_submit_29_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date : \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Type de consult. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ng-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ConsultationFollowUpComponent_ng_option_46_Template, 2, 2, "ng-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultationFollowUpComponent_Template_button_click_52_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Motif de la consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Choix de sympt\u00F4mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ng-select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ConsultationFollowUpComponent_ng_option_71_Template, 2, 2, "ng-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Histoire de la maladie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "textarea", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Conclusion de l'Interrogatoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "textarea", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Choix de pathologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ng-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ConsultationFollowUpComponent_ng_option_98_Template, 2, 2, "ng-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Interpretation des r\u00E9sultat d'Examens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.consultations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatedMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.consultationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symptoms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pathologies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZm9sZGVyL2NvbnN1bHRhdGlvbi1mb2xsb3ctdXAvY29uc3VsdGF0aW9uLWZvbGxvdy11cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultationFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-consultation-follow-up',
                templateUrl: './consultation-follow-up.component.html',
                styleUrls: ['./consultation-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_3__["ConsultationService"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_services_pathology_service__WEBPACK_IMPORTED_MODULE_5__["PathologyService"] }, { type: src_app_services_symptom_service__WEBPACK_IMPORTED_MODULE_6__["SymptomService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], patientConsultations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTabEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "BPPs":
/*!***********************************************************!*\
  !*** ./src/app/medical-folder/folder/folder.component.ts ***!
  \***********************************************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return FolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/patient.service */ "mx5+");
/* harmony import */ var src_app_services_admission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/admission.service */ "KdyY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _antecedent_antecedent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../antecedent/antecedent.component */ "FbV9");
/* harmony import */ var _new_consultation_new_consultation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-consultation/new-consultation.component */ "kHhZ");
/* harmony import */ var _consultation_follow_up_consultation_follow_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consultation-follow-up/consultation-follow-up.component */ "BFi1");
/* harmony import */ var _constant_follow_up_constant_follow_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constant-follow-up/constant-follow-up.component */ "uAOO");
/* harmony import */ var _exam_follow_up_exam_follow_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../exam-follow-up/exam-follow-up.component */ "8z9N");
/* harmony import */ var _prescription_follow_up_prescription_follow_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../prescription-follow-up/prescription-follow-up.component */ "KjT6");
/* harmony import */ var _certificate_follow_up_certificate_follow_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../certificate-follow-up/certificate-follow-up.component */ "31Aq");
/* harmony import */ var _cro_follow_up_cro_follow_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cro-follow-up/cro-follow-up.component */ "spt0");
/* harmony import */ var _mail_follow_up_mail_follow_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mail-follow-up/mail-follow-up.component */ "wpse");















function FolderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dossier patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correspondants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.patient.firstName + " " + ctx_r0.patient.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - n\u00E9(e) le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, ctx_r0.patient.birthDate, "dd/MM/yyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("tel: ", ctx_r0.patient.contact1, " - ", ctx_r0.patient.profession, " - ", ctx_r0.patient.numberOfChildren, " enfants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.patient.correspondant, ": ", ctx_r0.patient.correspondantCellPhone, "");
} }
class FolderComponent {
    constructor(activatedRoute, patientService, admissionService) {
        this.activatedRoute = activatedRoute;
        this.patientService = patientService;
        this.admissionService = admissionService;
        this.startDate = new Date();
        this.title = '';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.patientId = params.patientId;
            this.admissionId = params.admissionId;
        });
        this.patientService.findById(this.patientId).subscribe(res => { this.patient = res; });
        this.admissionService.findById(this.admissionId).subscribe(res => { this.admission = res; });
    }
    receiveActiveTab($event) {
        this.activeTab = $event;
    }
}
FolderComponent.ɵfac = function FolderComponent_Factory(t) { return new (t || FolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admission_service__WEBPACK_IMPORTED_MODULE_3__["AdmissionService"])); };
FolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FolderComponent, selectors: [["app-folder"]], decls: 68, vars: 17, consts: [[1, "card"], [1, "card-header"], ["class", "row", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-antecedent-tab", "data-toggle", "pill", "href", "#v-pills-antecedent", "role", "tab", "aria-controls", "v-pills-antecedent", "aria-selected", "true", 1, "nav-link", "active"], [1, "badge", "badge-pill", "badge-warning"], ["id", "v-pills-new-consultation-tab", "data-toggle", "pill", "href", "#v-pills-new-consultation", "role", "tab", "aria-controls", "v-pills-new-consultation", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-consultation-follow-up-tab", "data-toggle", "pill", "href", "#v-pills-consultation-follow-up", "role", "tab", "aria-controls", "v-pills-consultation-follow-up", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-constant-follow-up-tab", "data-toggle", "pill", "href", "#v-pills-constant-follow-up", "role", "tab", "aria-controls", "v-pills-constant-follow-up", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-exam-follow-up-tab", "data-toggle", "pill", "href", "#v-pills-exam-follow-up", "role", "tab", "aria-controls", "v-pills-exam-follow-up", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-prescription-follow-up-tab", "data-toggle", "pill", "href", "#v-pills-prescription-follow-up", "role", "tab", "aria-controls", "v-pills-prescription-follow-up", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-certificate-follow-up-tab", "data-toggle", "pill", "href", "#v-pills-certificate-follow-up", "role", "tab", "aria-controls", "v-pills-certificate-follow-up", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-cro-tab", "data-toggle", "pill", "href", "#v-pills-cro", "role", "tab", "aria-controls", "v-pills-cro", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-mail-tab", "data-toggle", "pill", "href", "#v-pills-mail", "role", "tab", "aria-controls", "v-pills-mail", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-attachment-tab", "data-toggle", "pill", "href", "#v-pills-attachment", "role", "tab", "aria-controls", "v-pills-attachment", "aria-selected", "false", 1, "nav-link"], [1, "col-9"], ["id", "v-pills-tabContent", 1, "tab-content"], ["id", "v-pills-antecedent", "role", "tabpanel", "aria-labelledby", "v-pills-antecedent-tab", 1, "tab-pane", "fade", "show", "active"], [3, "patientId"], ["id", "v-pills-new-consultation", "role", "tabpanel", "aria-labelledby", "v-pills-new-consultation-tab", 1, "tab-pane", "fade"], [3, "patientId", "admissionId", "startDate"], ["id", "v-pills-consultation-follow-up", "role", "tabpanel", "aria-labelledby", "v-pills-consultation-follow-up-tab", 1, "tab-pane", "fade"], [3, "patientId", "activeTabEvent"], ["id", "v-pills-constant-follow-up", "role", "tabpanel", "aria-labelledby", "v-pills-constant-follow-up-tab", 1, "tab-pane", "fade"], ["id", "v-pills-exam-follow-up", "role", "tabpanel", "aria-labelledby", "v-pills-exam-follow-up-tab", 1, "tab-pane", "fade"], [3, "admissionId", "patientId"], ["id", "v-pills-prescription-follow-up", "role", "tabpanel", "aria-labelledby", "v-pills-prescription-follow-up-tab", 1, "tab-pane", "fade"], ["id", "v-pills-certificate-follow-up", "role", "tabpanel", "aria-labelledby", "v-pills-certificate-follow-up-tab", 1, "tab-pane", "fade"], [3, "patientId", "admissionId"], ["id", "v-pills-cro", "role", "tabpanel", "aria-labelledby", "v-pills-cro-tab", 1, "tab-pane", "fade"], ["id", "v-pills-mail", "role", "tabpanel", "aria-labelledby", "v-pills-mail-tab", 1, "tab-pane", "fade"], ["id", "v-pills-attachment", "role", "tabpanel", "aria-labelledby", "v-pills-attachment-tab", 1, "tab-pane", "fade"], [1, "float-right"], ["type", "file"], [1, "col-lg-3"], [1, "text-muted"], [1, "col-lg-5", "text-center"], [1, "text-capitalized"], [1, "col-lg-4", "text-center"]], template: function FolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FolderComponent_div_2_Template, 19, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Antecedents & traitements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nouvelle consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Consultations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Suivie des constantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bilans & examens ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ordonances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Certificats m\u00E9dicaux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "CRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Courier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " pi\u00E8ce joints ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-antecedent", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-new-consultation", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "app-consultation-follow-up", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeTabEvent", function FolderComponent_Template_app_consultation_follow_up_activeTabEvent_52_listener($event) { return ctx.receiveActiveTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-constant-follow-up", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-exam-follow-up", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-prescription-follow-up", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-certificate-follow-up", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-cro-follow-up", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-mail-follow-up", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId)("admissionId", ctx.admissionId)("startDate", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("admissionId", ctx.admissionId)("patientId", ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("admissionId", ctx.admissionId)("patientId", ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId)("admissionId", ctx.admissionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId)("admissionId", ctx.admissionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patientId", ctx.patientId)("admissionId", ctx.admissionId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _antecedent_antecedent_component__WEBPACK_IMPORTED_MODULE_5__["AntecedentComponent"], _new_consultation_new_consultation_component__WEBPACK_IMPORTED_MODULE_6__["NewConsultationComponent"], _consultation_follow_up_consultation_follow_up_component__WEBPACK_IMPORTED_MODULE_7__["ConsultationFollowUpComponent"], _constant_follow_up_constant_follow_up_component__WEBPACK_IMPORTED_MODULE_8__["ConstantFollowUpComponent"], _exam_follow_up_exam_follow_up_component__WEBPACK_IMPORTED_MODULE_9__["ExamFollowUpComponent"], _prescription_follow_up_prescription_follow_up_component__WEBPACK_IMPORTED_MODULE_10__["PrescriptionFollowUpComponent"], _certificate_follow_up_certificate_follow_up_component__WEBPACK_IMPORTED_MODULE_11__["CertificateFollowUpComponent"], _cro_follow_up_cro_follow_up_component__WEBPACK_IMPORTED_MODULE_12__["CroFollowUpComponent"], _mail_follow_up_mail_follow_up_component__WEBPACK_IMPORTED_MODULE_13__["MailFollowUpComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: #dae0e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvZm9sZGVyL2ZvbGRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZm9sZGVyL2ZvbGRlci9mb2xkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-folder',
                templateUrl: './folder.component.html',
                styleUrls: ['./folder.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] }, { type: src_app_services_admission_service__WEBPACK_IMPORTED_MODULE_3__["AdmissionService"] }]; }, null); })();


/***/ }),

/***/ "FbV9":
/*!*******************************************************************!*\
  !*** ./src/app/medical-folder/antecedent/antecedent.component.ts ***!
  \*******************************************************************/
/*! exports provided: AntecedentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentComponent", function() { return AntecedentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_patient_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/patient-history.service */ "f3oj");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_antecedent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/antecedent.service */ "2BYl");
/* harmony import */ var src_app_services_antecedent_family_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/antecedent-family.service */ "dTcv");
/* harmony import */ var src_app_services_current_treatment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/current-treatment.service */ "7NaZ");
/* harmony import */ var src_app_services_allergy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/allergy.service */ "xIIC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");












function AntecedentComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_tr_22_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const mHistory_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeMedicalHistory(mHistory_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mHistory_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mHistory_r6);
} }
function AntecedentComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_tr_33_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const sHistory_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeSurgicalHistory(sHistory_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sHistory_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sHistory_r9);
} }
function AntecedentComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_tr_44_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const fHistory_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.removeFamilyHistory(fHistory_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fHistory_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fHistory_r12);
} }
function AntecedentComponent_ng_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r15.name, " ");
} }
function AntecedentComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AntecedentComponent_tr_98_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const history_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.getSelectedHistories(history_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", history_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", history_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", history_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r16.name);
} }
function AntecedentComponent_tr_109_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_tr_109_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const selectedHistory_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.removeSelectedHistory(selectedHistory_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedHistory_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedHistory_r19.name);
} }
class AntecedentComponent {
    constructor(historyService, alertService, antecedentService, antecedentFamiltyService, treatmentService, allergyService) {
        this.historyService = historyService;
        this.alertService = alertService;
        this.antecedentService = antecedentService;
        this.antecedentFamiltyService = antecedentFamiltyService;
        this.treatmentService = treatmentService;
        this.allergyService = allergyService;
        // /**
        //  * 
        //  */
        // surgicalHistories: object;
        this.patientHistories = [];
        this.medicalHistories = [];
        this.surgicalHistories = [];
        this.familyHistories = [];
        this.medicalHistoriesIds = [];
        this.surgicalHistoriesIds = [];
        this.familyHistoriesIds = [];
        this.historyType = 'medicalHistories';
        this.selectedIds = [];
        this.selectedNames = [];
        /**
        * selected  antecedent  */
        this.selectedHistories = [];
    }
    ngOnInit() {
        this.initForm();
        // set patient histories form data
        this.historyService.findByPatientId(this.patientId).subscribe(res => {
            if (res) {
                this.form.get("id").setValue(res.id);
                this.surgicalHistories = res.surgicalHistories.map(({ name }) => name);
                this.surgicalHistoriesIds = res.surgicalHistories.map(({ id }) => id);
                this.familyHistories = res.familyHistories.map(({ name }) => name);
                this.familyHistoriesIds = res.familyHistories.map(({ id }) => id);
                this.medicalHistories = res.medicalHistories.map(({ name }) => name);
                this.medicalHistoriesIds = res.medicalHistories.map(({ id }) => id);
            }
        });
        // set allergy form data 
        this.treatmentService.findByPatientId(this.patientId).subscribe(res => {
            this.currentTreatmentForm.get("id").setValue(res.id);
            this.currentTreatmentForm.get("description").setValue(res.description);
        });
        // set allergy form data 
        this.allergyService.findByPatientId(this.patientId).subscribe(res => {
            this.allergyForm.get("id").setValue(res.id);
            this.allergyForm.get("description").setValue(res.description);
        });
        this.antecedentFamiltyService.getIdAndName().subscribe(res => { this.historyFamilies = res; });
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            medicalHistories: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            surgicalHistories: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            familyHistories: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.patientId),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            allergies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.histories;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            history: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            historyFamily: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.currentTreatmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.patientId)
        });
        this.allergyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.patientId)
        });
    }
    /**
     *
     */
    save() {
        let antecedantdata = this.form.value;
        antecedantdata["medicalHistories"] = this.medicalHistoriesIds.join(',');
        antecedantdata["surgicalHistories"] = this.surgicalHistoriesIds.join(',');
        antecedantdata["familyHistories"] = this.familyHistoriesIds.join(',');
        this.historyService.save(antecedantdata).subscribe(res => { });
        let treatmentData = this.currentTreatmentForm.value;
        this.treatmentService.save(treatmentData).subscribe(res => { });
        let allergyData = this.allergyForm.value;
        this.allergyService.save(allergyData).subscribe(res => { });
        this.alertService.success('Antécedents & traitements mis a jour!');
    }
    /**
       * search function
       */
    search() {
    }
    /**
     * insert or remove a item from the patient antedents array
     * @param history
     */
    getSelectedHistory(history) {
        if (this.patientHistories.includes(history)) {
            let index = this.patientHistories.indexOf(history);
            this.patientHistories.splice(index, 1);
        }
        else {
            this.patientHistories.push(history);
        }
    }
    /**
     *
     */
    getHistories() {
        let data = this.searchForm.value;
        this.antecedentService.getIdAndNameByFamily(data).subscribe(res => { this.histories = res; });
    }
    resetHistories() {
        this.histories = [];
        this.selectedHistories = [];
        this.searchForm.get("historyFamily").setValue(null);
    }
    /**
      * insert or remove an act from the selected act array
      * @param selectedItem
      */
    getSelectedHistories(selectedItem) {
        if (this.selectedHistories.includes(selectedItem)) {
            let index = this.selectedHistories.indexOf(selectedItem);
            this.selectedHistories.splice(index, 1);
        }
        else {
            this.selectedHistories.push(selectedItem);
        }
    }
    /**
     * remove an act from seleted act list
     * @param item
     */
    removeMedicalHistory(item) {
        this.medicalHistories.splice(this.medicalHistories.indexOf(item), 1);
        this.medicalHistoriesIds.splice(this.medicalHistoriesIds.indexOf(item), 1);
    }
    removeSurgicalHistory(item) {
        this.surgicalHistories.splice(this.surgicalHistories.indexOf(item), 1);
        this.surgicalHistoriesIds.splice(this.surgicalHistoriesIds.indexOf(item), 1);
    }
    removeFamilyHistory(item) {
        this.familyHistories.splice(this.familyHistories.indexOf(item), 1);
        this.familyHistoriesIds.splice(this.familyHistoriesIds.indexOf(item), 1);
    }
    removeSelectedHistory(item) {
        let index = this.selectedHistories.indexOf(item);
        this.selectedHistories.splice(index, 1);
    }
    setHistoriesType(type) {
        this.historyType = type;
    }
    setHistories() {
        this.selectedIds = this.selectedHistories.map(({ id }) => id);
        this.selectedNames = this.selectedHistories.map(({ name }) => name);
        switch (this.historyType) {
            case "surgicalHistories":
                this.surgicalHistories = this.selectedNames;
                this.surgicalHistoriesIds = this.selectedIds;
                break;
            case "familyHistories":
                this.familyHistories = this.selectedNames;
                this.familyHistoriesIds = this.selectedIds;
                break;
            default:
                this.medicalHistories = this.selectedNames;
                this.medicalHistoriesIds = this.selectedIds;
                break;
        }
    }
}
AntecedentComponent.ɵfac = function AntecedentComponent_Factory(t) { return new (t || AntecedentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_history_service__WEBPACK_IMPORTED_MODULE_2__["PatientHistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_antecedent_service__WEBPACK_IMPORTED_MODULE_4__["AntecedentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_antecedent_family_service__WEBPACK_IMPORTED_MODULE_5__["AntecedentFamilyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_current_treatment_service__WEBPACK_IMPORTED_MODULE_6__["CurrentTreatmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_allergy_service__WEBPACK_IMPORTED_MODULE_7__["AllergyService"])); };
AntecedentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AntecedentComponent, selectors: [["app-antecedent"]], inputs: { patientId: "patientId" }, decls: 115, vars: 10, consts: [[3, "formGroup", "submit"], [1, "row", "col-md-4", "offset-md-8"], [1, "col-md-6", "mb-1"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger"], [1, "my-2"], [1, "text-bold", "m-3", "text-center"], [1, "row"], [1, "col-lg-4"], ["for", "medicalHistories"], [1, "text-bold"], ["data-toggle", "modal", "data-target", "#history", 1, "badge", "bg-success", "m-1", "p-1", 3, "click"], [1, "fa", "fa-plus"], [1, "form-group", "border", "rounded", 2, "min-height", "10rem"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover"], [4, "ngFor", "ngForOf"], ["for", "surgicalHistories"], ["for", "familyHistories"], [1, "col-md-6"], [3, "formGroup"], ["for", "description"], [1, "form-group"], ["formControlName", "description", "rows", "5", "placeholder", "Traitement actuel", 1, "form-control"], ["formControlName", "description", "rows", "5", "placeholder", "Allergies", 1, "form-control"], ["id", "history", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "historyLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "historyLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-5"], [1, "input-group", "input-group-sm"], ["type", "text", "formControlName", "history", "placeholder", "Ant\u00E9c\u00E9dent", 1, "form-control"], ["formControlName", "historyFamily", "placeholder", " Type d'ant\u00E9c\u00E9dent"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "btn", "btn-light", "px-3", "py-1", 2, "width", "100%", 3, "click"], [1, "fas", "fa-search"], [1, "table", "table-sm", "table-stripped", "table-bordered"], [2, "width", "35px"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light", "text-center"], ["scope", "col"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "text-capitalize"], [1, "badge", "badge-danger", 3, "click"], [3, "value"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "value", "id", "change"], [1, "custom-control-label", 3, "for"]], template: function AntecedentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AntecedentComponent_Template_form_submit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ant\u00E9c\u00E9dents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "M\u00E9dicaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_Template_span_click_17_listener() { return ctx.resetHistories(); })("click", function AntecedentComponent_Template_span_click_17_listener() { return ctx.setHistoriesType("medicalHistories"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AntecedentComponent_tr_22_Template, 6, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Chirugicaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_Template_span_click_28_listener() { return ctx.resetHistories(); })("click", function AntecedentComponent_Template_span_click_28_listener() { return ctx.setHistoriesType("surgicalHistories"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AntecedentComponent_tr_33_Template, 6, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Familiaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_Template_span_click_39_listener() { return ctx.resetHistories(); })("click", function AntecedentComponent_Template_span_click_39_listener() { return ctx.setHistoriesType("familyHistories"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AntecedentComponent_tr_44_Template, 6, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Traitement Actuel & allergie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Traitement actuel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Allergies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Choisir des Antecedents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AntecedentComponent_Template_form_submit_76_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ng-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AntecedentComponent_ng_option_84_Template, 2, 2, "ng-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_Template_button_click_86_listener() { return ctx.getHistories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Ant\u00E9c\u00E9dents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AntecedentComponent_tr_98_Template, 7, 4, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "thead", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Liste des antecedents Selectionn\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AntecedentComponent_tr_109_Template, 6, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AntecedentComponent_Template_button_click_113_listener() { return ctx.setHistories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.medicalHistories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.surgicalHistories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.familyHistories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.currentTreatmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.allergyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyFamilies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.histories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedHistories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], styles: ["h5[_ngcontent-%COMP%]{\r\n    background-color: #dae0e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvYW50ZWNlZGVudC9hbnRlY2VkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tZWRpY2FsLWZvbGRlci9hbnRlY2VkZW50L2FudGVjZWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTBlNjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AntecedentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-antecedent',
                templateUrl: './antecedent.component.html',
                styleUrls: ['./antecedent.component.css']
            }]
    }], function () { return [{ type: src_app_services_patient_history_service__WEBPACK_IMPORTED_MODULE_2__["PatientHistoryService"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: src_app_services_antecedent_service__WEBPACK_IMPORTED_MODULE_4__["AntecedentService"] }, { type: src_app_services_antecedent_family_service__WEBPACK_IMPORTED_MODULE_5__["AntecedentFamilyService"] }, { type: src_app_services_current_treatment_service__WEBPACK_IMPORTED_MODULE_6__["CurrentTreatmentService"] }, { type: src_app_services_allergy_service__WEBPACK_IMPORTED_MODULE_7__["AllergyService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KdyY":
/*!************************************************!*\
  !*** ./src/app/_services/admission.service.ts ***!
  \************************************************/
/*! exports provided: AdmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionService", function() { return AdmissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class AdmissionService {
    constructor(http) {
        this.http = http;
    }
    /**
      *  POST: add a new object to the database
      */
    save(admission) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/admission/add', admission);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(admission) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/admission/update/' + admission.id, admission);
    }
    /**
     * DELETE: delete the hero from the server
     */
    delete(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/admission/delete/' + id);
    }
    /**
     * get a list of object
     */
    findAll(data) {
        let queryParams = {};
        data['practician'] = (data['practician'] == null) ? '' : data['practician'];
        data['service'] = (data['service'] == null) ? '' : data['service'];
        data['act'] = (data['act'] == null) ? '' : data['act'];
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('admissionNumber', data['admissionNumber'])
                .set('firstName', data['firstName'])
                .set('lastName', data['lastName'])
                .set('patientExternalId', data['patientExternalId'])
                .set('cellPhone', data['cellPhone'])
                .set('cnamNumber', data['cnamNumber'])
                .set('idCardNumber', data['idCardNumber'])
                .set('practician', data['practician'])
                .set('service', data['service'])
                .set('act', data['act'])
                .set('fromDate', data['fromDate'])
                .set('toDate', data['toDate'])
                .set('admissionStatus', data['admissionStatus'])
                .set('size', data['size'])
                .set('page', data['page'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/admission/p_list', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/admission/detail/' + id);
    }
    /**
    * add a invoice
    */
    saveInvoice(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/admission/invoice/add', data);
    }
    /**
    * get a list of object
    */
    findAdmissionQueue(data) {
        let queryParams = {};
        data['practician'] = (data['practician'] == null) ? '' : data['practician'];
        data['service'] = (data['service'] == null) ? '' : data['service'];
        data['act'] = (data['act'] == null) ? '' : data['act'];
        data['waitingRoom'] = (data['waitingRoom'] == null) ? '' : data['waitingRoom'];
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('admissionNumber', data['admissionNumber'])
                .set('firstName', data['firstName'])
                .set('lastName', data['lastName'])
                .set('patientExternalId', data['patientExternalId'])
                .set('cellPhone', data['cellPhone'])
                .set('cnamNumber', data['cnamNumber'])
                .set('idCardNumber', data['idCardNumber'])
                .set('practician', data['practician'])
                .set('service', data['service'])
                .set('act', data['act'])
                .set('fromDate', data['fromDate'])
                .set('toDate', data['toDate'])
                .set('waitingRoom', data['waitingRoom'])
                .set('size', data['size'])
                .set('page', data['page'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/admission/queue/p_list', queryParams);
    }
}
AdmissionService.ɵfac = function AdmissionService_Factory(t) { return new (t || AdmissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdmissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdmissionService, factory: AdmissionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmissionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KjT6":
/*!*******************************************************************************************!*\
  !*** ./src/app/medical-folder/prescription-follow-up/prescription-follow-up.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PrescriptionFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionFollowUpComponent", function() { return PrescriptionFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "KZYO");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_prescribing_medication_prescribing_medication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_shared/prescribing-medication/prescribing-medication.component */ "oH+y");
/* harmony import */ var src_app_services_therapeutic_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/therapeutic-class.service */ "x3YC");
/* harmony import */ var src_app_services_pharmacological_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/pharmacological-form.service */ "NFOK");
/* harmony import */ var src_app_services_dci_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/dci.service */ "8lGK");
/* harmony import */ var src_app_services_patient_prescription_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/patient-prescription.service */ "HuKj");
/* harmony import */ var src_app_services_type_prescription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/type-prescription.service */ "sszG");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_shared/patient/patient-tag/patient-tag.component */ "cdzU");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");


















const _c0 = function (a0, a1) { return { "text-green": a0, "text-red": a1 }; };
function PrescriptionFollowUpComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ordonance m\u00E9dical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrescriptionFollowUpComponent_tr_24_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const prescription_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.generatePrescription(prescription_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prescription_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, prescription_r8.date, "dd/MM/yyyy hh:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prescription_r8.practician.firstName + " " + prescription_r8.practician.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", prescription_r8.state == "Y" ? "Servi" : "Non servi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, prescription_r8.state == "Y", prescription_r8.state == "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prescription_r8.facility.name);
} }
function PrescriptionFollowUpComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrescriptionFollowUpComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrescriptionFollowUpComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function PrescriptionFollowUpComponent_ng_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", type_r11.name, " ");
} }
function PrescriptionFollowUpComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.message, " ");
} }
function PrescriptionFollowUpComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.error, " ");
} }
function PrescriptionFollowUpComponent_ngx_extended_pdf_viewer_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 56);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.docSrc);
} }
class PrescriptionFollowUpComponent {
    constructor(theraClassService, pharmaFormService, dciService, patientPrescriptionService, prescriptionTypeService, alertService) {
        this.theraClassService = theraClassService;
        this.pharmaFormService = pharmaFormService;
        this.dciService = dciService;
        this.patientPrescriptionService = patientPrescriptionService;
        this.prescriptionTypeService = prescriptionTypeService;
        this.alertService = alertService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * handle the spinner
         */
        this.loading = true;
        this.prescribedDrugsArray = [];
        /**
         * define drugs options
         */
        this.drugs = [];
        this.prescriptionCustomText = false;
        this.selectedDrugs = [];
        this.drugFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.prescriptionId = 0;
        /**
         * assign the editor to a public property to make it accessible from the template
         */
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__;
        /**
         * share a model in with the editor
         */
        this.model = {
            editorData: ''
        };
    }
    ngOnInit() {
        this.initForm();
        this.theraClassService.getIdAndName().subscribe(res => { this.therapeuticClasses = res; });
        this.pharmaFormService.getIdAndName().subscribe(res => { this.pharmaForms = res; });
        this.dciService.getIdAndName().subscribe(res => { this.dcis = res; });
        this.prescriptionTypeService.getIdAndName().subscribe(res => { this.prescriptionTypes = res; });
        this.getPrescriptions();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            prescriptionType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    /**
     * add the toolbar to the DOM
     */
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    /**
     * get all patient check ups by page
     */
    getPrescriptions() {
        let data = {
            patientId: this.patientId,
            page: this.page,
        };
        this.patientPrescriptionService.findAllByPatientAndPage(data).subscribe(res => {
            if (res) {
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.patientPrescriptions = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.patientPrescriptions = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     *
     */
    save() {
        this.message = null;
        this.error = null;
        let data = {
            "admission": this.admissionId,
            "drugs": JSON.stringify(this.drugFormGroup.value),
            "drugServed": null,
            "id": this.prescriptionId
        };
        if (this.prescriptionId == 0) {
            this.patientPrescriptionService.save(data).subscribe(res => {
                if (res) {
                    this.message = "Ordonance creé avec succès!";
                    this.prescription = res;
                    this.prescriptionId = res['id'];
                }
            });
        }
        else {
            this.error = 'Impossible de mofier une ordonnance qui a deja été crée, veillez creer une autre.';
        }
    }
    setPrescriptionContent() {
        let pTypeId = this.form.get("prescriptionType").value;
        this.prescriptionTypeService.findById(pTypeId).subscribe(res => {
            this.drugs = res.drugs;
            this.selectedDrugs = this.drugs.map(({ drug }) => drug);
            this.drugFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
            this.drugs.forEach(item => {
                const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.id),
                    dosage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.dosage),
                    drug: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.drug),
                    qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.qty),
                    duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.duration)
                });
                this.drugFormGroup.push(group);
            });
        });
    }
    /**
    * generate precription document
    */
    generatePrescription(prescription) {
        const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
        this.patient = prescription['patient'];
        let doc = this.patientPrescriptionService.generatePdf(prescription, patientTag);
        this.docSrc = doc.output('datauristring');
    }
    /**
    * set the current page
    * @param pageNum
    */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = this.page - 1;
        this.getPrescriptions();
    }
    /**
     *
     */
    atModalshow() {
        this.message = null;
        this.error = null;
    }
    /**
     *
     */
    atModalsClose() {
        this.selectedDrugs = [];
        this.prescriptionId = 0;
        this.form.reset();
        this.drugFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
    }
}
PrescriptionFollowUpComponent.ɵfac = function PrescriptionFollowUpComponent_Factory(t) { return new (t || PrescriptionFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_therapeutic_class_service__WEBPACK_IMPORTED_MODULE_4__["TherapeuticClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pharmacological_form_service__WEBPACK_IMPORTED_MODULE_5__["PharmacologicalFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dci_service__WEBPACK_IMPORTED_MODULE_6__["DciService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_prescription_service__WEBPACK_IMPORTED_MODULE_7__["PatientPrescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_prescription_service__WEBPACK_IMPORTED_MODULE_8__["TypePrescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"])); };
PrescriptionFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrescriptionFollowUpComponent, selectors: [["app-prescription-follow-up"]], viewQuery: function PrescriptionFollowUpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_shared_prescribing_medication_prescribing_medication_component__WEBPACK_IMPORTED_MODULE_3__["PrescribingMedicationComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pmComponent = _t.first);
    } }, inputs: { patientId: "patientId", admissionId: "admissionId" }, decls: 76, vars: 18, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-prescription-list-tab", "data-toggle", "pill", "href", "#pills-prescription-list", "role", "tab", "aria-controls", "pills-prescription-list", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-new-prescription-tab", "data-toggle", "pill", "href", "#pills-new-prescription", "role", "tab", "aria-controls", "pills-new-prescription", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content", "mt-3"], ["id", "pills-prescription-list", "role", "tabpanel", "aria-labelledby", "pills-prescription-list-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["id", "pills-new-prescription", "role", "tabpanel", "aria-labelledby", "pills-new-prescription-tab", 1, "tab-pane", "fade"], [3, "formGroup"], [1, "col-md-5"], [1, "form-group"], ["for", "name"], [1, "text-danger"], [1, "input-group", "input-group-sm"], ["placeholder", "Type d'ordonnance", "formControlName", "prescriptionType", 2, "width", "100%", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["type", "button", "data-toggle", "modal", "data-target", "#prescription", 1, "btn", "btn-success", "mt-4", 3, "click"], [3, "patient"], ["id", "prescription", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "prescriptionModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [3, "drugFormGroup", "selectedDrugs"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["id", "prescriptionPdfModal", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["useBrowserLocale", "true", "height", "80vh", 3, "src", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "text-capitalize", "text-center", "text-nowrap"], [1, "fas", "fa-circle", 3, "ngClass", "ngbTooltip"], ["data-toggle", "modal", "data-target", "#prescriptionPdfModal", 1, "btn", "btm-sm", "btn-light", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf", "text-danger"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [1, "mt-3"], [3, "value"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], ["useBrowserLocale", "true", "height", "80vh", 3, "src"]], template: function PrescriptionFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Liste des Ordonance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ordonancier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ordonnance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PrescriptionFollowUpComponent_tr_24_Template, 16, 11, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PrescriptionFollowUpComponent_div_26_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PrescriptionFollowUpComponent_span_27_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PrescriptionFollowUpComponent_div_28_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngb-pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PrescriptionFollowUpComponent_Template_ngb_pagination_pageChange_31_listener($event) { return ctx.page = $event; })("pageChange", function PrescriptionFollowUpComponent_Template_ngb_pagination_pageChange_31_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Type d'ordonnance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PrescriptionFollowUpComponent_Template_ng_select_change_42_listener() { return ctx.setPrescriptionContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PrescriptionFollowUpComponent_ng_option_43_Template, 2, 2, "ng-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrescriptionFollowUpComponent_Template_button_click_45_listener() { return ctx.atModalshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Nouvel ordonnance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-patient-tag", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrescriptionFollowUpComponent_Template_button_click_52_listener() { return ctx.atModalsClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PrescriptionFollowUpComponent_div_56_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PrescriptionFollowUpComponent_div_57_Template, 2, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-prescribing-medication", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrescriptionFollowUpComponent_Template_button_click_60_listener() { return ctx.atModalsClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrescriptionFollowUpComponent_Template_button_click_62_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, PrescriptionFollowUpComponent_ngx_extended_pdf_viewer_72_Template, 1, 1, "ngx-extended-pdf-viewer", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientPrescriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prescriptionTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("drugFormGroup", ctx.drugFormGroup)("selectedDrugs", ctx.selectedDrugs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_13__["PatientTagComponent"], src_app_shared_prescribing_medication_prescribing_medication_component__WEBPACK_IMPORTED_MODULE_3__["PrescribingMedicationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltip"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵr"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["NgxExtendedPdfViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    \r\n    width: 100% !important;\r\n}\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: #dae0e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvcHJlc2NyaXB0aW9uLWZvbGxvdy11cC9wcmVzY3JpcHRpb24tZm9sbG93LXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvcHJlc2NyaXB0aW9uLWZvbGxvdy11cC9wcmVzY3JpcHRpb24tZm9sbG93LXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICAvKiBib3JkZXI6IDEgcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyAqL1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTBlNjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrescriptionFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prescription-follow-up',
                templateUrl: './prescription-follow-up.component.html',
                styleUrls: ['./prescription-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_therapeutic_class_service__WEBPACK_IMPORTED_MODULE_4__["TherapeuticClassService"] }, { type: src_app_services_pharmacological_form_service__WEBPACK_IMPORTED_MODULE_5__["PharmacologicalFormService"] }, { type: src_app_services_dci_service__WEBPACK_IMPORTED_MODULE_6__["DciService"] }, { type: src_app_services_patient_prescription_service__WEBPACK_IMPORTED_MODULE_7__["PatientPrescriptionService"] }, { type: src_app_services_type_prescription_service__WEBPACK_IMPORTED_MODULE_8__["TypePrescriptionService"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }]; }, { pmComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_shared_prescribing_medication_prescribing_medication_component__WEBPACK_IMPORTED_MODULE_3__["PrescribingMedicationComponent"]]
        }], patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "f3oj":
/*!******************************************************!*\
  !*** ./src/app/_services/patient-history.service.ts ***!
  \******************************************************/
/*! exports provided: PatientHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientHistoryService", function() { return PatientHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PatientHistoryService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(history) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl2 + '/antecedant/add', history);
    }
    /**
     * get object by id
     * @param patient_id
     */
    findByPatientId(patient_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl2 + '/antecedant/detail/' + patient_id);
    }
}
PatientHistoryService.ɵfac = function PatientHistoryService_Factory(t) { return new (t || PatientHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PatientHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PatientHistoryService, factory: PatientHistoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientHistoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "h4YA":
/*!*********************************************************!*\
  !*** ./src/app/medical-folder/medical-folder.module.ts ***!
  \*********************************************************/
/*! exports provided: MedicalFolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalFolderModule", function() { return MedicalFolderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _medical_folder_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medical-folder-routing.module */ "yQHv");
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder/folder.component */ "BPPs");
/* harmony import */ var _antecedent_antecedent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./antecedent/antecedent.component */ "FbV9");
/* harmony import */ var _new_consultation_new_consultation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-consultation/new-consultation.component */ "kHhZ");
/* harmony import */ var _consultation_follow_up_consultation_follow_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultation-follow-up/consultation-follow-up.component */ "BFi1");
/* harmony import */ var _exam_follow_up_exam_follow_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exam-follow-up/exam-follow-up.component */ "8z9N");
/* harmony import */ var _prescription_follow_up_prescription_follow_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prescription-follow-up/prescription-follow-up.component */ "KjT6");
/* harmony import */ var _certificate_follow_up_certificate_follow_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./certificate-follow-up/certificate-follow-up.component */ "31Aq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _constant_follow_up_constant_follow_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constant-follow-up/constant-follow-up.component */ "uAOO");
/* harmony import */ var _patient_constant_patient_constant_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../patient-constant/patient-constant.module */ "GDKP");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _cro_follow_up_cro_follow_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cro-follow-up/cro-follow-up.component */ "spt0");
/* harmony import */ var _check_up_follow_up_check_up_follow_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./check-up-follow-up/check-up-follow-up.component */ "l7pL");
/* harmony import */ var _type_prescription_type_prescription_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../type-prescription/type-prescription.module */ "mGmt");
/* harmony import */ var _patient_patient_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../patient/patient.module */ "AMsP");
/* harmony import */ var _mail_follow_up_mail_follow_up_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mail-follow-up/mail-follow-up.component */ "wpse");























class MedicalFolderModule {
}
MedicalFolderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MedicalFolderModule });
MedicalFolderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MedicalFolderModule_Factory(t) { return new (t || MedicalFolderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _medical_folder_routing_module__WEBPACK_IMPORTED_MODULE_2__["MedicalFolderRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
            _patient_constant_patient_constant_module__WEBPACK_IMPORTED_MODULE_15__["PatientConstantModule"],
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["NgxExtendedPdfViewerModule"],
            _type_prescription_type_prescription_module__WEBPACK_IMPORTED_MODULE_19__["TypePrescriptionModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"],
            _patient_patient_module__WEBPACK_IMPORTED_MODULE_20__["PatientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MedicalFolderModule, { declarations: [_folder_folder_component__WEBPACK_IMPORTED_MODULE_3__["FolderComponent"],
        _antecedent_antecedent_component__WEBPACK_IMPORTED_MODULE_4__["AntecedentComponent"],
        _new_consultation_new_consultation_component__WEBPACK_IMPORTED_MODULE_5__["NewConsultationComponent"],
        _consultation_follow_up_consultation_follow_up_component__WEBPACK_IMPORTED_MODULE_6__["ConsultationFollowUpComponent"],
        _exam_follow_up_exam_follow_up_component__WEBPACK_IMPORTED_MODULE_7__["ExamFollowUpComponent"],
        _prescription_follow_up_prescription_follow_up_component__WEBPACK_IMPORTED_MODULE_8__["PrescriptionFollowUpComponent"],
        _certificate_follow_up_certificate_follow_up_component__WEBPACK_IMPORTED_MODULE_9__["CertificateFollowUpComponent"],
        _constant_follow_up_constant_follow_up_component__WEBPACK_IMPORTED_MODULE_14__["ConstantFollowUpComponent"],
        _cro_follow_up_cro_follow_up_component__WEBPACK_IMPORTED_MODULE_17__["CroFollowUpComponent"],
        _check_up_follow_up_check_up_follow_up_component__WEBPACK_IMPORTED_MODULE_18__["CheckUpFollowUpComponent"],
        _mail_follow_up_mail_follow_up_component__WEBPACK_IMPORTED_MODULE_21__["MailFollowUpComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _medical_folder_routing_module__WEBPACK_IMPORTED_MODULE_2__["MedicalFolderRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
        _patient_constant_patient_constant_module__WEBPACK_IMPORTED_MODULE_15__["PatientConstantModule"],
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["NgxExtendedPdfViewerModule"],
        _type_prescription_type_prescription_module__WEBPACK_IMPORTED_MODULE_19__["TypePrescriptionModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"],
        _patient_patient_module__WEBPACK_IMPORTED_MODULE_20__["PatientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicalFolderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _folder_folder_component__WEBPACK_IMPORTED_MODULE_3__["FolderComponent"],
                    _antecedent_antecedent_component__WEBPACK_IMPORTED_MODULE_4__["AntecedentComponent"],
                    _new_consultation_new_consultation_component__WEBPACK_IMPORTED_MODULE_5__["NewConsultationComponent"],
                    _consultation_follow_up_consultation_follow_up_component__WEBPACK_IMPORTED_MODULE_6__["ConsultationFollowUpComponent"],
                    _exam_follow_up_exam_follow_up_component__WEBPACK_IMPORTED_MODULE_7__["ExamFollowUpComponent"],
                    _prescription_follow_up_prescription_follow_up_component__WEBPACK_IMPORTED_MODULE_8__["PrescriptionFollowUpComponent"],
                    _certificate_follow_up_certificate_follow_up_component__WEBPACK_IMPORTED_MODULE_9__["CertificateFollowUpComponent"],
                    _constant_follow_up_constant_follow_up_component__WEBPACK_IMPORTED_MODULE_14__["ConstantFollowUpComponent"],
                    _cro_follow_up_cro_follow_up_component__WEBPACK_IMPORTED_MODULE_17__["CroFollowUpComponent"],
                    _check_up_follow_up_check_up_follow_up_component__WEBPACK_IMPORTED_MODULE_18__["CheckUpFollowUpComponent"],
                    _mail_follow_up_mail_follow_up_component__WEBPACK_IMPORTED_MODULE_21__["MailFollowUpComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _medical_folder_routing_module__WEBPACK_IMPORTED_MODULE_2__["MedicalFolderRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
                    _patient_constant_patient_constant_module__WEBPACK_IMPORTED_MODULE_15__["PatientConstantModule"],
                    ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["NgxExtendedPdfViewerModule"],
                    _type_prescription_type_prescription_module__WEBPACK_IMPORTED_MODULE_19__["TypePrescriptionModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"],
                    _patient_patient_module__WEBPACK_IMPORTED_MODULE_20__["PatientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kHhZ":
/*!*******************************************************************************!*\
  !*** ./src/app/medical-folder/new-consultation/new-consultation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewConsultationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewConsultationComponent", function() { return NewConsultationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utility/date/date-output-format */ "mu7B");
/* harmony import */ var src_app_utility_form_invalid_form_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_utility/form/invalid-form-controls */ "Y9Bn");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/consultation.service */ "nJ+l");
/* harmony import */ var src_app_services_pathology_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/pathology.service */ "1Bjq");
/* harmony import */ var src_app_services_symptom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/symptom.service */ "+Mff");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function NewConsultationComponent_ng_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r7.value, " ");
} }
function NewConsultationComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewConsultationComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewConsultationComponent_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symptom_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", symptom_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", symptom_r8.name, " ");
} }
function NewConsultationComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewConsultationComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ce champ doit \u00EAtre renseign\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewConsultationComponent_ng_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pathology_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pathology_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pathology_r9.name, " ");
} }
class NewConsultationComponent {
    constructor(alertService, consultationService, pathologyService, symptomService) {
        this.alertService = alertService;
        this.consultationService = consultationService;
        this.pathologyService = pathologyService;
        this.symptomService = symptomService;
        /**
         * define consultation type option
         */
        this.consultationTypes = [
            { id: 'p', value: 'Prémière consultation' },
            { id: 's', value: 'Consultation de surveillance' },
        ];
    }
    ngOnInit() {
        this.initForm();
        this.pathologyService.getIdAndName().subscribe(res => { this.pathologies = res; });
        this.symptomService.getIdAndName().subscribe(res => {
            this.symptoms = res;
            console.log(res);
        });
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_2__["dateOutputFormat"])(new Date())),
            conclusionExamResult: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            admission: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.admissionId),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            examinationReasons: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            examinationType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            history: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            pathologies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            symptoms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.startDate)
        });
    }
    /**
     * save
     */
    save() {
        //validate form '
        this.invalidFormControls = Object(src_app_utility_form_invalid_form_controls__WEBPACK_IMPORTED_MODULE_3__["invalidformControls"])(this.form);
        this.alertService.clear();
        let data = this.form.value;
        if (this.form.valid) {
            if (!this.consultation) {
                this.consultationService.save(data).subscribe(res => {
                    this.alertService.success('Consultation ajoutée au dossier du patient avec succes ! ');
                    this.consultation = res;
                    this.form.get("conclusion").disable();
                    this.form.get("examinationReasons").disable();
                    this.form.get("examinationType").disable();
                    this.form.get("history").disable();
                    this.form.get("symptoms").disable();
                });
            }
            else {
                this.consultationService.update(data).subscribe(res => {
                    this.alertService.success('Consultation mis a jour avec succes ! ');
                    this.consultation = res;
                });
            }
        }
        else {
            this.alertService.error('Formulaire non valid');
        }
    }
}
NewConsultationComponent.ɵfac = function NewConsultationComponent_Factory(t) { return new (t || NewConsultationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_5__["ConsultationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pathology_service__WEBPACK_IMPORTED_MODULE_6__["PathologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_symptom_service__WEBPACK_IMPORTED_MODULE_7__["SymptomService"])); };
NewConsultationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewConsultationComponent, selectors: [["app-new-consultation"]], inputs: { patientId: "patientId", admissionId: "admissionId", startDate: "startDate" }, decls: 77, vars: 10, consts: [[3, "formGroup", "submit"], [1, "row"], [1, "row", "col-md-9"], [1, "form-group"], [1, "input-group", "input-group-sm"], ["for", "date"], ["type", "text", "formControlName", "date", "disabled", "", 1, "form-control"], [1, "row", "input-group-sm", "col-md-7"], [1, "col-md-5", "float-right"], ["for", "examinationType"], [1, "text-danger"], [1, "col-md-7"], ["formControlName", "examinationType"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "row", "col-md-3"], [1, "col-md-6"], ["type", "submit", 1, "btn", "btn-success"], ["for", "reason"], [1, "text-bold"], ["formControlName", "examinationReasons", "rows", "4", "placeholder", "Motif de la consultation", 1, "form-control"], [1, "row", "input-group-sm", "mb-4"], ["for", "symptoms"], [1, "text-bold", "mb-2"], ["formControlName", "symptoms", 2, "width", "100%", 3, "multiple"], ["for", "history"], ["formControlName", "history", "rows", "8", "placeholder", "Histoire de la maladie", 1, "form-control"], ["for", "conclusion"], ["formControlName", "conclusion", "rows", "8", "placeholder", "Conclusion l'Interrogatoire", 1, "form-control", "mt-3"], [1, "row", "input-group-sm"], ["for", "pathologies", 1, "mb-4"], ["formControlName", "pathologies", 2, "width", "100%", 3, "multiple"], ["for", "conclusion", 1, "mt-2"], ["formControlName", "conclusionExamResult", "rows", "5", "placeholder", "Interpretation des r\u00E9sultat d'Examens", 1, "form-control"], [3, "value"]], template: function NewConsultationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NewConsultationComponent_Template_form_submit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date : \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Type de consult. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewConsultationComponent_ng_option_17_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NewConsultationComponent_span_18_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Motif de la consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NewConsultationComponent_span_34_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Choix de sympt\u00F4mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NewConsultationComponent_ng_option_41_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Histoire de la maladie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, NewConsultationComponent_span_51_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Conclusion de l'Interrogatoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, NewConsultationComponent_span_62_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Choix de pathologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ng-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, NewConsultationComponent_ng_option_70_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Interpretation des r\u00E9sultat d'Examens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.consultationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.examinationType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.examinationReasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symptoms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.history);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidFormControls && ctx.invalidFormControls.conclusion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pathologies);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZm9sZGVyL25ldy1jb25zdWx0YXRpb24vbmV3LWNvbnN1bHRhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewConsultationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-consultation',
                templateUrl: './new-consultation.component.html',
                styleUrls: ['./new-consultation.component.css']
            }]
    }], function () { return [{ type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_5__["ConsultationService"] }, { type: src_app_services_pathology_service__WEBPACK_IMPORTED_MODULE_6__["PathologyService"] }, { type: src_app_services_symptom_service__WEBPACK_IMPORTED_MODULE_7__["SymptomService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "l7pL":
/*!***********************************************************************************!*\
  !*** ./src/app/medical-folder/check-up-follow-up/check-up-follow-up.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckUpFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUpFollowUpComponent", function() { return CheckUpFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_check_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/check-up.service */ "fcKF");
/* harmony import */ var src_app_services_patient_check_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/patient-check-up.service */ "9pJ2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/patient/patient-tag/patient-tag.component */ "cdzU");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");









function CheckUpFollowUpComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckUpFollowUpComponent_tr_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const pc_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.generateCheckUpPdf(pc_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, pc_r5.date, "dd/MM/yyyy hh:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pc_r5.checkUp.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pc_r5.practician.firstName + " " + pc_r5.practician.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pc_r5.facility.name);
} }
function CheckUpFollowUpComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckUpFollowUpComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckUpFollowUpComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function CheckUpFollowUpComponent_ngx_extended_pdf_viewer_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 29);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.docSrc);
} }
class CheckUpFollowUpComponent {
    constructor(checkUpService, patientCheckUpService) {
        this.checkUpService = checkUpService;
        this.patientCheckUpService = patientCheckUpService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * handle the spinner
         */
        this.loading = true;
        /**
         * selected items
         */
        this.selectectedItems = [];
    }
    ngOnInit() {
        this.initForm();
        this.checkUpService.getIdAndName().subscribe(res => { this.checkUps = res; });
        this.getCheckUps();
    }
    /**
     *
     */
    initForm() {
        this.checkUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            checkUp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    /**
    * set the current page
    * @param pageNum
    */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = this.page - 1;
        this.getCheckUps();
    }
    /**
     *
     * @param target
     * @param item
     */
    checked(target, item) {
        target.classList.toggle('bg-dark');
        if (this.selectectedItems.includes(item)) {
            let index = this.selectectedItems.indexOf(item);
            this.selectectedItems.splice(index, 1);
        }
        else {
            this.selectectedItems.push(item);
        }
    }
    /**
     *
     */
    atModalshow() {
        this.message = null;
        this.error = null;
    }
    /**
     *
     */
    onCheckUpChange() {
        let checkUpId = this.checkUpForm.get("checkUp").value;
        this.checkUpService.findById(checkUpId).subscribe(res => {
            this.checkUp = res;
        });
    }
    /**
     * get all patient check ups by page
     */
    getCheckUps() {
        let data = {
            patientId: this.patientId,
            page: this.page,
        };
        this.patientCheckUpService.findAllByPage(data).subscribe(res => {
            if (res) {
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.patientCheckUps = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.patientCheckUps = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     *
     */
    saveCheckUpRequest() {
        let data = {
            "admission": this.admissionId,
            "docId": this.checkUp['id'],
            "custom_text": null,
            "id": 0
        };
        this.patientCheckUpService.save(data).subscribe(res => {
            if (res) {
                this.message = "bilan creé avec succès!";
                this.page = this.page - 1;
                this.getCheckUps();
            }
        });
    }
    generateCheckUpPdf(checkUp) {
        const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
        this.patient = checkUp['patient'];
        let doc = this.checkUpService.generatePdf(checkUp, patientTag);
        this.docSrc = doc.output('datauristring');
    }
    reset() { }
}
CheckUpFollowUpComponent.ɵfac = function CheckUpFollowUpComponent_Factory(t) { return new (t || CheckUpFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_check_up_service__WEBPACK_IMPORTED_MODULE_2__["CheckUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_check_up_service__WEBPACK_IMPORTED_MODULE_3__["PatientCheckUpService"])); };
CheckUpFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckUpFollowUpComponent, selectors: [["app-check-up-follow-up"]], inputs: { patientId: "patientId", admissionId: "admissionId" }, decls: 37, vars: 12, consts: [[1, "float-right"], ["type", "button", "data-toggle", "modal", "data-target", "#checkUp", 1, "btn", "btn-success", "m-2", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], [3, "patient"], ["id", "checkUpPdf", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "examLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["useBrowserLocale", "true", "height", "80vh", 3, "src", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["data-toggle", "modal", "data-target", "#checkUpPdf", 1, "btn", "btm-sm", "btn-light", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 0, "size", "3x", "", 1, "fa", "fa-file-pdf", "text-danger"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [1, "mt-3"], ["useBrowserLocale", "true", "height", "80vh", 3, "src"]], template: function CheckUpFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckUpFollowUpComponent_Template_button_click_1_listener() { return ctx.atModalshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Demande de bilan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bilan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckUpFollowUpComponent_tr_16_Template, 13, 7, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckUpFollowUpComponent_div_18_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CheckUpFollowUpComponent_span_19_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckUpFollowUpComponent_div_20_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-pagination", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CheckUpFollowUpComponent_Template_ngb_pagination_pageChange_23_listener($event) { return ctx.page = $event; })("pageChange", function CheckUpFollowUpComponent_Template_ngb_pagination_pageChange_23_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-patient-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CheckUpFollowUpComponent_ngx_extended_pdf_viewer_33_Template, 1, 1, "ngx-extended-pdf-viewer", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientCheckUps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_6__["PatientTagComponent"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxExtendedPdfViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZm9sZGVyL2NoZWNrLXVwLWZvbGxvdy11cC9jaGVjay11cC1mb2xsb3ctdXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckUpFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-up-follow-up',
                templateUrl: './check-up-follow-up.component.html',
                styleUrls: ['./check-up-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_check_up_service__WEBPACK_IMPORTED_MODULE_2__["CheckUpService"] }, { type: src_app_services_patient_check_up_service__WEBPACK_IMPORTED_MODULE_3__["PatientCheckUpService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mu2C":
/*!******************************************************!*\
  !*** ./src/app/_services/analysis-domain.service.ts ***!
  \******************************************************/
/*! exports provided: AnalysisDomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisDomainService", function() { return AnalysisDomainService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class AnalysisDomainService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(analysisDomain) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/add', analysisDomain);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/analysis-domain/active_name');
    }
}
AnalysisDomainService.ɵfac = function AnalysisDomainService_Factory(t) { return new (t || AnalysisDomainService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AnalysisDomainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnalysisDomainService, factory: AnalysisDomainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalysisDomainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nJ+l":
/*!***************************************************!*\
  !*** ./src/app/_services/consultation.service.ts ***!
  \***************************************************/
/*! exports provided: ConsultationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationService", function() { return ConsultationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ConsultationService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(consultaion) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/examination/add', consultaion);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(consultation) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/examination/update/' + consultation.id, consultation);
    }
    /**
     * get a list of object
     */
    findAllPatientConsultations(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('patient', data['patient'])
                .set('size', data['size'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/examination/p_list/by_patient/', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/examination/detail/' + id);
    }
}
ConsultationService.ɵfac = function ConsultationService_Factory(t) { return new (t || ConsultationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ConsultationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConsultationService, factory: ConsultationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConsultationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pMq1":
/*!**************************************************!*\
  !*** ./src/app/_services/patient-cro.service.ts ***!
  \**************************************************/
/*! exports provided: PatientCroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCroService", function() { return PatientCroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utility/date/date-output-format */ "mu7B");
/* harmony import */ var _utility_string_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_utility/string/slugify */ "EImB");
/* harmony import */ var _utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_utility/string/replaceDocParms */ "Ezja");









class PatientCroService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(document) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/patient-cro/add', document);
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('patientId', data['patientId'])
                .set('page', data['page'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/patient-cro/p_list', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/patient-cro/detail/' + id);
    }
    /**
    * generate cro document
    */
    generatePdf(cro, patientTag) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('p', 'pt', 'a4');
        var patient = cro['patient'];
        var practician = cro['practician'];
        var croType = cro['croType'];
        if (cro) {
            // doc variable
            var date = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(cro['date']);
            ;
            var patientNumber = patient['patientExternalId'];
            var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
            var footer = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].documentFooter;
            //doc head
            doc.addImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.addImage(patientTag['src'], 'JPEG', 380, 30, 170, 50);
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 430, 80);
            doc.text("Date:" + date, 25, 120);
            doc.setFontSize(12);
            doc.setFont('times', 'bold');
            doc.text("Compte rendu Opératoire: ", 200, 190);
            doc.setLineWidth(1);
            doc.line(340, 192, 200, 192);
            doc.setFontSize(10);
            if (cro['custom_text']) {
                var content = doc.splitTextToSize(cro['custom_text'], 540);
                doc.text(content, 25, 210);
            }
            else {
                for (let index = 0; index < Object.keys(patient).length; index++) {
                    const element = '@@@-' + Object(_utility_string_slugify__WEBPACK_IMPORTED_MODULE_5__["slugify"])(Object.keys(patient)[index]) + '-';
                    croType['content'] = Object(_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_6__["replaceDocVarialbles"])(croType['content'], patient, practician);
                }
                // doc.html(croType['content'], {
                //     callback: function (doc) {
                //       doc.output('dataurlnewwindow');
                //     },
                //     x: 25,
                //     y: 210
                //   });
                var content = doc.splitTextToSize(croType['content'], 540);
                doc.text(content, 25, 210);
            }
            doc.setFont('times', 'bold');
            doc.text("Médécin: ", 350, 700);
            doc.text(practicianFullName, 350, 720);
            doc.setTextColor(150);
            doc.setFontSize(8);
            doc.setLineWidth(0.25);
            doc.line(552, 770, 25, 770);
            var splitFooter = doc.splitTextToSize(footer, 540);
            doc.text(splitFooter, 25, 780);
        }
        return doc;
    }
}
PatientCroService.ɵfac = function PatientCroService_Factory(t) { return new (t || PatientCroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PatientCroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PatientCroService, factory: PatientCroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientCroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "spt0":
/*!*************************************************************************!*\
  !*** ./src/app/medical-folder/cro-follow-up/cro-follow-up.component.ts ***!
  \*************************************************************************/
/*! exports provided: CroFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CroFollowUpComponent", function() { return CroFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "KZYO");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_utility/date/date-output-format */ "mu7B");
/* harmony import */ var src_app_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_utility/string/replaceDocParms */ "Ezja");
/* harmony import */ var src_app_utility_string_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_utility/string/slugify */ "EImB");
/* harmony import */ var src_app_services_type_cro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/type-cro.service */ "Lf5d");
/* harmony import */ var src_app_services_patient_cro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/patient-cro.service */ "pMq1");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/patient.service */ "mx5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_services/app-cookie.service */ "aioW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../_shared/patient/patient-tag/patient-tag.component */ "cdzU");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");





















function CroFollowUpComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_tr_22_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const cro_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.generateCro(cro_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cro_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, cro_r8.date, "dd/MM/yyyy hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cro_r8.croType.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cro_r8.practician.firstName + " " + cro_r8.practician.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cro_r8.facility.name);
} }
function CroFollowUpComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CroFollowUpComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CroFollowUpComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function CroFollowUpComponent_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cro_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cro_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cro_r11.name, " ");
} }
function CroFollowUpComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_div_44_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_div_44_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleEditorHidden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_div_44_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fermer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.croCustomText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r6.previewData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CroFollowUpComponent_ngx_extended_pdf_viewer_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 59);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.docSrc);
} }
const _c0 = function () { return { standalone: true }; };
class CroFollowUpComponent {
    constructor(typeCroService, patientCroService, patientService, sanitizer, alertService, userService, cookieService) {
        this.typeCroService = typeCroService;
        this.patientCroService = patientCroService;
        this.patientService = patientService;
        this.sanitizer = sanitizer;
        this.alertService = alertService;
        this.userService = userService;
        this.cookieService = cookieService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * handle the spinner
         */
        this.loading = true;
        /**
         *
         */
        this.today = Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_3__["dateOutputFormat"])(new Date());
        /**
        * assign the editor to a public property to make it accessible from the template
        */
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__;
        /**
         * share a model in with the editor
         */
        this.model = {
            editorData: ''
        };
        this.croCustomText = false;
        this.patientCroId = 0;
    }
    ngOnInit() {
        this.initForm();
        this.typeCroService.getIdAndName().subscribe(res => { this.croTypes = res; });
        this.userService.findByUsername(this.cookieService.get('username')).subscribe(res => { this.practician = res; });
        this.patientService.findById(this.patientId).subscribe(res => {
            this.patient = res;
            this.getCros();
        });
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_3__["dateOutputFormat"])(new Date())),
            cro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    /**
     * get a collection of the patient certificated
     */
    getCros() {
        let data = {
            patientId: this.patientId,
            page: this.page,
        };
        this.patientCroService.findAllByPage(data).subscribe(res => {
            if (res) {
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.patientCros = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.patientCros = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     * add the toolbar to the DOM
     *
     */
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    /**
    * set the current page
    * @param pageNum
    */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = this.page - 1;
        this.getCros();
    }
    /**
     * set the content for the chosen cro type
     * @param val
     */
    setCroText() {
        let croTypeId = this.form.get("cro").value;
        this.typeCroService.findById(croTypeId).subscribe(res => {
            this.model.editorData = res['content'];
            for (let index = 0; index < Object.keys(this.patient).length; index++) {
                const element = '@@@-' + Object(src_app_utility_string_slugify__WEBPACK_IMPORTED_MODULE_5__["slugify"])(Object.keys(this.patient)[index]) + '-';
                this.model.editorData = Object(src_app_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_4__["replaceDocVarialbles"])(this.model.editorData, this.patient, this.practician);
            }
            this.previewData = this.sanitizer.bypassSecurityTrustHtml(this.model.editorData);
        });
    }
    /**
     *  tooble the hiden state of the editor
     */
    toggleEditorHidden() {
        this.croCustomText = this.croCustomText ? false : true;
    }
    /**
     * save data into the database
     */
    save() {
        if (this.patientCroId == 0) {
            let customText = !this.croCustomText ? null : this.model.editorData;
            let data = {
                "admission": this.admissionId,
                "docId": this.form.get('cro').value,
                "custom_text": customText,
                "id": this.patientCroId
            };
            this.patientCroService.save(data).subscribe(res => {
                if (res) {
                    this.alertService.success('CRO creé avec succès !');
                    this.page = this.page - 1;
                    this.patientCroId = res.id;
                    this.getCros();
                }
            });
        }
        else {
            this.alertService.error('Impossible de mofier un CRO qui a deja été crée, veillez creer un autre.');
        }
    }
    /**
     * generate pdf in the ngx-pdf-extended-viewer
     */
    generateCro(cro) {
        const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
        this.patient = cro['patient'];
        let doc = this.patientCroService.generatePdf(cro, patientTag);
        this.docSrc = doc.output('datauristring');
        // doc.html(data, {
        //   callback: function (doc) {
        //     doc.output('dataurlnewwindow');
        //   },
        //   x: 10,
        //   y: 10
        // });
    }
    /**
     *  reset the datas and the form
     */
    reset() {
        this.previewData = null;
        this.patientCroId = 0;
        this.form.get('cro').reset();
    }
}
CroFollowUpComponent.ɵfac = function CroFollowUpComponent_Factory(t) { return new (t || CroFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_cro_service__WEBPACK_IMPORTED_MODULE_6__["TypeCroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_cro_service__WEBPACK_IMPORTED_MODULE_7__["PatientCroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_12__["AppCookieService"])); };
CroFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CroFollowUpComponent, selectors: [["app-cro-follow-up"]], inputs: { patientId: "patientId", admissionId: "admissionId" }, decls: 67, vars: 22, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-cro-list-tab", "data-toggle", "pill", "href", "#pills-cro-list", "role", "tab", "aria-controls", "pills-cro-list", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-new-cro-tab", "data-toggle", "pill", "href", "#pills-new-cro", "role", "tab", "aria-controls", "pills-new-cro", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-cro-list", "role", "tabpanel", "aria-labelledby", "pills-cro-list-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive", "mt-3"], [1, "table", "table-sm", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["id", "pills-new-cro", "role", "tabpanel", "aria-labelledby", "pills-new-cro-tab", 1, "tab-pane", "fade", "show"], [3, "formGroup"], [1, "mt-3"], [1, "col-md-4", "input-group", "input-group-sm"], ["formControlName", "date", "placeholder", "jj-mm-AAAA", "ngbDatepicker", "", 1, "form-control", 3, "value"], ["d", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "far", "fa-calendar-alt"], [1, "col-md-8"], ["placeholder", "Type de CRO", "formControlName", "cro", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mt-3", 3, "hidden", 4, "ngIf"], [3, "hidden"], [1, "card"], [1, "card-body", 3, "hidden"], [1, "bg-light", 3, "ngModel", "ngModelOptions", "editor", "ngModelChange", "ready"], ["type", "button", 1, "btn", "btn-danger", "m-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "m-2", 3, "click"], [3, "patient"], ["id", "croPdfModal", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["useBrowserLocale", "true", "height", "80vh", 3, "src", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "btn", "btn-link", "text-dark"], ["data-toggle", "modal", "data-target", "#croPdfModal", 1, "btn", "btm-sm", "btn-light", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf", "text-danger"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [3, "value"], [1, "mt-3", 3, "hidden"], [1, "card-body", 2, "height", "20rem", 3, "innerHTML"], ["type", "button", 1, "btn", "btn-success", "mx-2", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", "mx-2", 3, "click"], [1, "fas", "fa-pen-alt", "mr-1"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "mx-3", 3, "click"], ["useBrowserLocale", "true", "height", "80vh", 3, "src"]], template: function CroFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Liste des CRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nouveau CRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CroFollowUpComponent_tr_22_Template, 15, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CroFollowUpComponent_div_24_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CroFollowUpComponent_span_25_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CroFollowUpComponent_div_26_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CroFollowUpComponent_Template_ngb_pagination_pageChange_29_listener($event) { return ctx.page = $event; })("pageChange", function CroFollowUpComponent_Template_ngb_pagination_pageChange_29_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_Template_span_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CroFollowUpComponent_Template_ng_select_change_41_listener() { return ctx.setCroText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CroFollowUpComponent_ng_option_42_Template, 2, 2, "ng-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CroFollowUpComponent_div_44_Template, 10, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ckeditor", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CroFollowUpComponent_Template_ckeditor_ngModelChange_48_listener($event) { return ctx.model.editorData = $event; })("ready", function CroFollowUpComponent_Template_ckeditor_ready_48_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_Template_button_click_50_listener() { return ctx.toggleEditorHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CroFollowUpComponent_Template_button_click_52_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-patient-tag", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CroFollowUpComponent_ngx_extended_pdf_viewer_63_Template, 1, 1, "ngx-extended-pdf-viewer", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientCros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.croTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.croCustomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.croCustomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.editorData)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("editor", ctx.Editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_17__["PatientTagComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["NgxExtendedPdfViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    \r\n    width: 100% !important;\r\n}\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: #dae0e6;\r\n}\r\n.ck-editor__editable_inline[_ngcontent-%COMP%] {\r\n    min-height: 200px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvY3JvLWZvbGxvdy11cC9jcm8tZm9sbG93LXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9tZWRpY2FsLWZvbGRlci9jcm8tZm9sbG93LXVwL2Nyby1mb2xsb3ctdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIC8qIGJvcmRlcjogMSBweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7ICovXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xyXG59XHJcblxyXG4uY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CroFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cro-follow-up',
                templateUrl: './cro-follow-up.component.html',
                styleUrls: ['./cro-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_type_cro_service__WEBPACK_IMPORTED_MODULE_6__["TypeCroService"] }, { type: src_app_services_patient_cro_service__WEBPACK_IMPORTED_MODULE_7__["PatientCroService"] }, { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }, { type: src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_12__["AppCookieService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uAOO":
/*!***********************************************************************************!*\
  !*** ./src/app/medical-folder/constant-follow-up/constant-follow-up.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ConstantFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantFollowUpComponent", function() { return ConstantFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_patient_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/patient-constant.service */ "mAp9");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var _shared_patient_constant_patient_constant_list_patient_constant_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_shared/patient-constant/patient-constant-list/patient-constant-list.component */ "3Div");
/* harmony import */ var _shared_patient_constant_patient_constant_form_patient_constant_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/patient-constant/patient-constant-form/patient-constant-form.component */ "cYSY");






class ConstantFollowUpComponent {
    constructor(patientConstantService, alertService) {
        this.patientConstantService = patientConstantService;
        this.alertService = alertService;
        this.title = '';
    }
    ngOnInit() { }
    save(data) {
        let patientConstants = data.patientConstants;
        this.patientConstantService.save(patientConstants).subscribe(res => {
            this.patientConstant = res;
            this.alertService.success('Constantes ajoutées avec succès');
        }, error => {
            this.alertService.error(error);
        });
    }
}
ConstantFollowUpComponent.ɵfac = function ConstantFollowUpComponent_Factory(t) { return new (t || ConstantFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_constant_service__WEBPACK_IMPORTED_MODULE_1__["PatientConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
ConstantFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConstantFollowUpComponent, selectors: [["app-constant-follow-up"]], inputs: { patientId: "patientId" }, decls: 12, vars: 4, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3"], ["role", "presentation", 1, "nav-item"], ["id", "pills-constant-list-tab", "data-toggle", "pill", "href", "#pills-constant-list", "role", "tab", "aria-controls", "pills-constant-list", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-new-constant-tab", "data-toggle", "pill", "href", "#pills-new-constant", "role", "tab", "aria-controls", "pills-new-constant", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-constant-list", "role", "tabpanel", "aria-labelledby", "pills-constant-list-tab", 1, "tab-pane", "fade", "show", "active"], [3, "title", "patientId"], ["id", "pills-new-constant", "role", "tabpanel", "aria-labelledby", "pills-new-constant-tab", 1, "tab-pane", "fade"], [3, "title", "patientId", "objectEmitter"]], template: function ConstantFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Suivie des constantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nouvelles constantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-patient-constant-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-patient-constant-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("objectEmitter", function ConstantFollowUpComponent_Template_app_patient_constant_form_objectEmitter_11_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("patientId", ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("patientId", ctx.patientId);
    } }, directives: [_shared_patient_constant_patient_constant_list_patient_constant_list_component__WEBPACK_IMPORTED_MODULE_3__["PatientConstantListComponent"], _shared_patient_constant_patient_constant_form_patient_constant_form_component__WEBPACK_IMPORTED_MODULE_4__["PatientConstantFormComponent"]], styles: [".nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    background-color: #dae0e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhbC1mb2xkZXIvY29uc3RhbnQtZm9sbG93LXVwL2NvbnN0YW50LWZvbGxvdy11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZm9sZGVyL2NvbnN0YW50LWZvbGxvdy11cC9jb25zdGFudC1mb2xsb3ctdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-constant-follow-up',
                templateUrl: './constant-follow-up.component.html',
                styleUrls: ['./constant-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_patient_constant_service__WEBPACK_IMPORTED_MODULE_1__["PatientConstantService"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uOhP":
/*!**********************************************************!*\
  !*** ./src/app/_services/patient-certificate.service.ts ***!
  \**********************************************************/
/*! exports provided: PatientCertificateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientCertificateService", function() { return PatientCertificateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utility/date/date-output-format */ "mu7B");
/* harmony import */ var _utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_utility/string/replaceDocParms */ "Ezja");
/* harmony import */ var _utility_string_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_utility/string/slugify */ "EImB");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










class PatientCertificateService {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    /**
     *  POST: add a new object to the database
     */
    save(document) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-certificat/add', document);
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('custom_text', data['custom_text'])
                .set('patientId', data['patientId'])
                .set('page', data['page'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-certificat/p_list', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-certificat/detail/' + id);
    }
    /**
     * generate certificate document
     */
    generatePdf(certificate, patientTag) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', 'a4');
        var patient = certificate['patient'];
        var practician = certificate['practician'];
        var certificateType = certificate['certificatType'];
        if (certificate) {
            // doc variable
            var date = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(certificate['date']);
            ;
            var patientNumber = patient['patientExternalId'];
            var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
            var footer = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].documentFooter;
            //doc head
            doc.addImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.addImage(patientTag['src'], 'JPEG', 380, 30, 170, 50);
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 430, 80);
            doc.text("Date:" + date, 25, 120);
            doc.setFontSize(12);
            doc.setFont('times', 'bold');
            doc.text("Certificat médical: ", 200, 190);
            doc.setLineWidth(1);
            doc.line(285, 192, 200, 192);
            doc.setFontSize(10);
            if (certificate['custom_text']) {
                var content = doc.splitTextToSize(certificate['custom_text'], 540);
                doc.text(content, 25, 210);
            }
            else {
                for (let index = 0; index < Object.keys(patient).length; index++) {
                    const element = '@@@-' + Object(_utility_string_slugify__WEBPACK_IMPORTED_MODULE_6__["slugify"])(Object.keys(patient)[index]) + '-';
                    certificateType['content'] = Object(_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_5__["replaceDocVarialbles"])(certificateType['content'], patient, practician);
                }
                // doc.html(certificateType['content'], {
                //     callback: function (doc) {
                //       doc.output('dataurlnewwindow');
                //     },
                //     x: 25,
                //     y: 210
                //   });
                var content = doc.splitTextToSize(certificateType['content'], 540);
                doc.text(content, 25, 210);
            }
            doc.setFont('times', 'bold');
            doc.text("Médécin: ", 350, 700);
            doc.text(practicianFullName, 350, 720);
            doc.setTextColor(150);
            doc.setFontSize(8);
            doc.setLineWidth(0.25);
            doc.line(552, 770, 25, 770);
            var splitFooter = doc.splitTextToSize(footer, 540);
            doc.text(splitFooter, 25, 780);
        }
        return doc;
    }
}
PatientCertificateService.ɵfac = function PatientCertificateService_Factory(t) { return new (t || PatientCertificateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"])); };
PatientCertificateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientCertificateService, factory: PatientCertificateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PatientCertificateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "wpse":
/*!***************************************************************************!*\
  !*** ./src/app/medical-folder/mail-follow-up/mail-follow-up.component.ts ***!
  \***************************************************************************/
/*! exports provided: MailFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailFollowUpComponent", function() { return MailFollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "KZYO");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_utility/date/date-output-format */ "mu7B");
/* harmony import */ var src_app_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_utility/string/replaceDocParms */ "Ezja");
/* harmony import */ var src_app_utility_string_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_utility/string/slugify */ "EImB");
/* harmony import */ var src_app_services_type_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/type-mail.service */ "J4dh");
/* harmony import */ var src_app_services_patient_courier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/patient-courier.service */ "99PV");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/patient.service */ "mx5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_utility/alert/alert.service */ "gJOZ");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_services/app-cookie.service */ "aioW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../_shared/patient/patient-tag/patient-tag.component */ "cdzU");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");





















function MailFollowUpComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_tr_22_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const mail_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.generateMail(mail_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, mail_r8.date, "dd/MM/yyyy hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r8.courierType.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r8.practician.firstName + " " + mail_r8.practician.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r8.facility.name);
} }
function MailFollowUpComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MailFollowUpComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MailFollowUpComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.EmptyMessage);
} }
function MailFollowUpComponent_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mail_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mail_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mail_r11.name, " ");
} }
function MailFollowUpComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_div_44_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_div_44_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleEditorHidden(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_div_44_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fermer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.mailCustomText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r6.previewData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MailFollowUpComponent_ngx_extended_pdf_viewer_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-extended-pdf-viewer", 59);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.docSrc);
} }
const _c0 = function () { return { standalone: true }; };
class MailFollowUpComponent {
    constructor(typeMailService, patientMailService, patientService, sanitizer, alertService, userService, cookieService) {
        this.typeMailService = typeMailService;
        this.patientMailService = patientMailService;
        this.patientService = patientService;
        this.sanitizer = sanitizer;
        this.alertService = alertService;
        this.userService = userService;
        this.cookieService = cookieService;
        /**
        * init first page
        */
        this.page = 0;
        /**
         * number of item par page default 10
         */
        this.perPage = 10;
        /**
         *  order direction
         */
        this.order = 'desc';
        /**
         * order column default id
         */
        this.sort = 'id';
        /**
         * handle the spinner
         */
        this.loading = true;
        /**
         *
         */
        this.today = Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_3__["dateOutputFormat"])(new Date());
        /**
        * assign the editor to a public property to make it accessible from the template
        */
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__;
        /**
         * share a model in with the editor
         */
        this.model = {
            editorData: ''
        };
        this.mailCustomText = false;
        this.patientMailId = 0;
    }
    ngOnInit() {
        this.initForm();
        this.typeMailService.getIdAndName().subscribe(res => { this.mailTypes = res; console.log(res); });
        this.userService.findByUsername(this.cookieService.get('username')).subscribe(res => { this.practician = res; });
        this.patientService.findById(this.patientId).subscribe(res => {
            this.patient = res;
            this.getMails();
        });
    }
    /**
     * init form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Object(src_app_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_3__["dateOutputFormat"])(new Date())),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    /**
     * get a collection of the patient certificated
     */
    getMails() {
        let data = {
            patientId: this.patientId,
            page: this.page,
        };
        this.patientMailService.findAllByPage(data).subscribe(res => {
            if (res) {
                this.loading = false;
                this.hasNoData = false;
                this.totalItem = res['totalElements'];
                this.pages = res['totalPages'];
                this.patientMails = res['content'];
                this.page = res['pageNumber'] + 1;
            }
            ;
        }, error => {
            this.patientMails = [];
            this.loading = false;
            this.hasNoData = true;
            this.EmptyMessage = error;
        });
    }
    /**
     * add the toolbar to the DOM
     *
     */
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    /**
    * set the current page
    * @param pageNum
    */
    onPageChange(pageNum) {
        this.loading = true;
        this.page = this.page - 1;
        this.getMails();
    }
    /**
     * set the content for the chosen cro type
     * @param val
     */
    setMailText() {
        let croTypeId = this.form.get("mail").value;
        this.typeMailService.findById(croTypeId).subscribe(res => {
            this.model.editorData = res['content'];
            for (let index = 0; index < Object.keys(this.patient).length; index++) {
                const element = '@@@-' + Object(src_app_utility_string_slugify__WEBPACK_IMPORTED_MODULE_5__["slugify"])(Object.keys(this.patient)[index]) + '-';
                this.model.editorData = Object(src_app_utility_string_replaceDocParms__WEBPACK_IMPORTED_MODULE_4__["replaceDocVarialbles"])(this.model.editorData, this.patient, this.practician);
            }
            this.previewData = this.sanitizer.bypassSecurityTrustHtml(this.model.editorData);
        });
    }
    /**
     *  tooble the hiden state of the editor
     */
    toggleEditorHidden() {
        this.mailCustomText = this.mailCustomText ? false : true;
    }
    /**
     * save data into the database
     */
    save() {
        if (this.patientMailId == 0) {
            let customText = !this.mailCustomText ? null : this.model.editorData;
            let data = {
                "admission": this.admissionId,
                "docId": this.form.get('mail').value,
                "custom_text": customText,
                "id": this.patientMailId
            };
            this.patientMailService.save(data).subscribe(res => {
                if (res) {
                    this.alertService.success('Courier creé avec succès !');
                    this.page = this.page - 1;
                    this.patientMailId = res.id;
                    this.getMails();
                }
            });
        }
        else {
            this.alertService.error('Impossible de mofier un  Courier qui a deja été crée, veillez creer un autre.');
        }
    }
    /**
     * generate pdf in the ngx-pdf-extended-viewer
     */
    generateMail(mail) {
        const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
        this.patient = mail['patient'];
        let doc = this.patientMailService.generatePdf(mail, patientTag);
        this.docSrc = doc.output('datauristring');
        // doc.html(data, {
        //   callback: function (doc) {
        //     doc.output('dataurlnewwindow');
        //   },
        //   x: 10,
        //   y: 10
        // });
    }
    /**
     *  reset the datas and the form
     */
    reset() {
        this.previewData = null;
        this.patientMailId = 0;
        this.form.get('mail').reset();
    }
}
MailFollowUpComponent.ɵfac = function MailFollowUpComponent_Factory(t) { return new (t || MailFollowUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_type_mail_service__WEBPACK_IMPORTED_MODULE_6__["TypeMailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_courier_service__WEBPACK_IMPORTED_MODULE_7__["PatientCourierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_12__["AppCookieService"])); };
MailFollowUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailFollowUpComponent, selectors: [["app-mail-follow-up"]], inputs: { patientId: "patientId", admissionId: "admissionId" }, decls: 67, vars: 22, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-mail-list-tab", "data-toggle", "pill", "href", "#pills-mail-list", "role", "tab", "aria-controls", "pills-mail-list", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-new-mail-tab", "data-toggle", "pill", "href", "#pills-new-mail", "role", "tab", "aria-controls", "pills-new-mail", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-mail-list", "role", "tabpanel", "aria-labelledby", "pills-mail-list-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive", "mt-3"], [1, "table", "table-sm", "table-hover", "table-striped"], [4, "ngFor", "ngForOf"], [1, "text-center", "mb-5", "mt-4"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], ["class", "text-muted ml-3 ", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "row"], [1, "col-md-7", "offset-md-5"], [3, "collectionSize", "pageSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["id", "pills-new-mail", "role", "tabpanel", "aria-labelledby", "pills-new-mail-tab", 1, "tab-pane", "fade", "show"], [3, "formGroup"], [1, "mt-3"], [1, "col-md-4", "input-group", "input-group-sm"], ["formControlName", "date", "placeholder", "jj-mm-AAAA", "ngbDatepicker", "", 1, "form-control", 3, "value"], ["d", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "far", "fa-calendar-alt"], [1, "col-md-8"], ["placeholder", "Type de Couriers", "formControlName", "mail", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mt-3", 3, "hidden", 4, "ngIf"], [3, "hidden"], [1, "card"], [1, "card-body", 3, "hidden"], [1, "bg-light", 3, "ngModel", "ngModelOptions", "editor", "ngModelChange", "ready"], ["type", "button", 1, "btn", "btn-danger", "m-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "m-2", 3, "click"], [3, "patient"], ["id", "mailPdfModal", "data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["useBrowserLocale", "true", "height", "80vh", 3, "src", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "btn", "btn-link", "text-dark"], ["data-toggle", "modal", "data-target", "#mailPdfModal", 1, "btn", "btm-sm", "btn-light", 2, "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf", "text-danger"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "text-muted", "ml-3"], [3, "value"], [1, "mt-3", 3, "hidden"], [1, "card-body", 2, "height", "20rem", 3, "innerHTML"], ["type", "button", 1, "btn", "btn-success", "mx-2", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", "mx-2", 3, "click"], [1, "fas", "fa-pen-alt", "mr-1"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "mx-3", 3, "click"], ["useBrowserLocale", "true", "height", "80vh", 3, "src"]], template: function MailFollowUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Liste des Couriers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nouveau Courier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Couriers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Medecin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Centre M\u00E9dical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MailFollowUpComponent_tr_22_Template, 15, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MailFollowUpComponent_div_24_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MailFollowUpComponent_span_25_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MailFollowUpComponent_div_26_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MailFollowUpComponent_Template_ngb_pagination_pageChange_29_listener($event) { return ctx.page = $event; })("pageChange", function MailFollowUpComponent_Template_ngb_pagination_pageChange_29_listener() { return ctx.onPageChange(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_Template_span_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MailFollowUpComponent_Template_ng_select_change_41_listener() { return ctx.setMailText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MailFollowUpComponent_ng_option_42_Template, 2, 2, "ng-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MailFollowUpComponent_div_44_Template, 10, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ckeditor", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MailFollowUpComponent_Template_ckeditor_ngModelChange_48_listener($event) { return ctx.model.editorData = $event; })("ready", function MailFollowUpComponent_Template_ckeditor_ready_48_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_Template_button_click_50_listener() { return ctx.toggleEditorHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailFollowUpComponent_Template_button_click_52_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Valider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-patient-tag", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MailFollowUpComponent_ngx_extended_pdf_viewer_63_Template, 1, 1, "ngx-extended-pdf-viewer", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientMails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.totalItem)("pageSize", ctx.perPage)("page", ctx.page)("maxSize", 10)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mailTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.mailCustomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.mailCustomText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.editorData)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("editor", ctx.Editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("patient", ctx.patient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _shared_patient_patient_tag_patient_tag_component__WEBPACK_IMPORTED_MODULE_17__["PatientTagComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["NgxExtendedPdfViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZm9sZGVyL21haWwtZm9sbG93LXVwL21haWwtZm9sbG93LXVwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailFollowUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mail-follow-up',
                templateUrl: './mail-follow-up.component.html',
                styleUrls: ['./mail-follow-up.component.css']
            }]
    }], function () { return [{ type: src_app_services_type_mail_service__WEBPACK_IMPORTED_MODULE_6__["TypeMailService"] }, { type: src_app_services_patient_courier_service__WEBPACK_IMPORTED_MODULE_7__["PatientCourierService"] }, { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }, { type: src_app_utility_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }, { type: src_app_services_app_cookie_service__WEBPACK_IMPORTED_MODULE_12__["AppCookieService"] }]; }, { patientId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], admissionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "xIIC":
/*!**********************************************!*\
  !*** ./src/app/_services/allergy.service.ts ***!
  \**********************************************/
/*! exports provided: AllergyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllergyService", function() { return AllergyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AllergyService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(allergy) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl2 + '/allergy/add', allergy);
    }
    /**
     * get object by id
     * @param patient_id
     */
    findByPatientId(patient_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl2 + '/allergy/detail/' + patient_id);
    }
}
AllergyService.ɵfac = function AllergyService_Factory(t) { return new (t || AllergyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AllergyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllergyService, factory: AllergyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllergyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yQHv":
/*!*****************************************************************!*\
  !*** ./src/app/medical-folder/medical-folder-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MedicalFolderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalFolderRoutingModule", function() { return MedicalFolderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder/folder.component */ "BPPs");





const routes = [
    { path: ':patientId', component: _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__["FolderComponent"] },
    { path: ':patientId/:admissionId', component: _folder_folder_component__WEBPACK_IMPORTED_MODULE_2__["FolderComponent"] }
];
class MedicalFolderRoutingModule {
}
MedicalFolderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MedicalFolderRoutingModule });
MedicalFolderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MedicalFolderRoutingModule_Factory(t) { return new (t || MedicalFolderRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MedicalFolderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicalFolderRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=medical-folder-medical-folder-module.js.map