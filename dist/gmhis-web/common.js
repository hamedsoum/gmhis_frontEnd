(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+4er":
/*!***************************************************!*\
  !*** ./src/app/_services/act-category.service.ts ***!
  \***************************************************/
/*! exports provided: ActCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActCategoryService", function() { return ActCategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ActCategoryService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(actCategory) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/add', actCategory);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-category/active_categories_name');
    }
}
ActCategoryService.ɵfac = function ActCategoryService_Factory(t) { return new (t || ActCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ActCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActCategoryService, factory: ActCategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActCategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "+Mff":
/*!**********************************************!*\
  !*** ./src/app/_services/symptom.service.ts ***!
  \**********************************************/
/*! exports provided: SymptomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomService", function() { return SymptomService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class SymptomService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(symptom) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/add', symptom);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/symptom/names');
    }
}
SymptomService.ɵfac = function SymptomService_Factory(t) { return new (t || SymptomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SymptomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SymptomService, factory: SymptomService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SymptomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "+PNq":
/*!***********************************************!*\
  !*** ./src/app/_services/act-code.service.ts ***!
  \***********************************************/
/*! exports provided: ActCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActCodeService", function() { return ActCodeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ActCodeService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(actCode) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/add', actCode);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-code/active_codes_name');
    }
}
ActCodeService.ɵfac = function ActCodeService_Factory(t) { return new (t || ActCodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ActCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActCodeService, factory: ActCodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActCodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1Bjq":
/*!************************************************!*\
  !*** ./src/app/_services/pathology.service.ts ***!
  \************************************************/
/*! exports provided: PathologyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathologyService", function() { return PathologyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class PathologyService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(pathology) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/add', pathology);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/pathology/active_pathologies_name');
    }
}
PathologyService.ɵfac = function PathologyService_Factory(t) { return new (t || PathologyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PathologyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PathologyService, factory: PathologyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PathologyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2BYl":
/*!*************************************************!*\
  !*** ./src/app/_services/antecedent.service.ts ***!
  \*************************************************/
/*! exports provided: AntecedentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentService", function() { return AntecedentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class AntecedentService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(antecedent) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/add', antecedent);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        data['antecedantType'] = (data['antecedantType'] == null) ? '' : data['antecedantType'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('antecedantType', data['antecedantType'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/active_antecedent_lists_name');
    }
    /**
   * get a list of object
   */
    getIdAndNameByFamily(data) {
        let queryParams = {};
        data['historyFamily'] = (data['historyFamily'] == null) ? '' : data['historyFamily'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('type', data["historyFamily"])
                .set('name', data['history'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-list/by-type', queryParams);
    }
}
AntecedentService.ɵfac = function AntecedentService_Factory(t) { return new (t || AntecedentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AntecedentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AntecedentService, factory: AntecedentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AntecedentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2gEX":
/*!*******************************************************!*\
  !*** ./src/app/_services/article-location.service.ts ***!
  \*******************************************************/
/*! exports provided: ArticleLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleLocationService", function() { return ArticleLocationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ArticleLocationService {
    constructor(http) {
        this.http = http;
    }
    /**
    *  POST: add a new object to the database
    */
    save(articleLocation) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/add', articleLocation);
    }
    /**
   * PUT: update the object on the server. Returns the updated objet upon success.
   */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/list');
    }
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/p_list', queryParams);
    }
    /**
    * get a list of active object
    */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-location/active_locations_name');
    }
}
ArticleLocationService.ɵfac = function ArticleLocationService_Factory(t) { return new (t || ArticleLocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ArticleLocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticleLocationService, factory: ArticleLocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleLocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4Z2d":
/*!*******************************************************!*\
  !*** ./src/app/_services/article-supplier.service.ts ***!
  \*******************************************************/
/*! exports provided: ArticleSupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSupplierService", function() { return ArticleSupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ArticleSupplierService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(articlesupplier) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/add', articlesupplier);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        data['country'] = (data['country'] == null) ? '' : data['country'];
        //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('contact', data['contact'])
                .set('country', data['country'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-supplier/active_suppliers_name');
    }
}
ArticleSupplierService.ɵfac = function ArticleSupplierService_Factory(t) { return new (t || ArticleSupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArticleSupplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleSupplierService, factory: ArticleSupplierService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleSupplierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9tjR":
/*!*******************************************************!*\
  !*** ./src/app/_services/analysis-request.service.ts ***!
  \*******************************************************/
/*! exports provided: AnalysisRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisRequestService", function() { return AnalysisRequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utility/date/date-output-format */ "mu7B");







class AnalysisRequestService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(analysisRequest) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/analysis-request/add', analysisRequest);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/analysis-request/update/' + data.id, data);
    }
    /**
     * get a paginated list of object
     */
    findAllByPatientAndPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('patientId', data['patientId'])
                .set('page', data['page'])
                .set('size', data['size'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/analysis-request/p_list', queryParams);
    }
    /**
     * get a paginated list of object
     */
    findAllPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('cnamNumber', data['cnamNumber'])
                .set('idCardNumber', data['idCardNumber'])
                .set('firstName', data['firstName'])
                .set('lastName', data['lastName'])
                .set('patientExternalId', data['patientExternalId'])
                .set('cellPhone', data['cellPhone'])
                .set('state', data['state'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/analysis-request/all_page', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/analysis-request/detail/' + id);
    }
    ;
    /**
    * performed analysis. Returns the updated objet upon success.
    */
    setPerformed(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/analysis-request/performed/' + id);
    }
    /**
     * generate analysis request document
     */
    generatePdf(analysisRequest, room, patientTag) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', 'a5');
        if (analysisRequest) {
            // doc variable
            var date = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(analysisRequest['date']);
            var patientFullName = analysisRequest['patientFirstName'] + ' ' + analysisRequest['patientMaidenName'] + ' ' + analysisRequest['patientLastName'];
            var patientNumber = analysisRequest['patientExternalId'];
            var birthDate = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(analysisRequest["patientBirthDate"]);
            var cellPhone = analysisRequest['patientCellPhone1'] + ' ' + analysisRequest['patientCellPhone2'];
            var practicianFullName = analysisRequest['practicianFirstName'] + ' ' + analysisRequest['practicianLastName'];
            var analysis = analysisRequest['analysis'].split(',');
            var footer = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].documentFooter;
            var performededAt = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(analysisRequest['performedAt']);
            var performedByFullName = analysisRequest['performedByFirstName'] + ' ' + analysisRequest['performedByLastName'];
            //doc head
            doc.addImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.text("Laboratoire d'analyses médicales 24h/24", 230, 30);
            doc.addImage(patientTag['src'], 'JPEG', 230, 30, 150, 50);
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 260, 80);
            doc.text("Date:" + date, 15, 120);
            doc.text("Chambre: " + room, 250, 120);
            doc.text("Date de naissance: " + birthDate, 15, 140);
            doc.text("Télephone: " + cellPhone, 250, 140);
            doc.text("Prélèvement effectué par: " + performedByFullName, 15, 160);
            doc.text("Prélèvement effectué à : " + performededAt, 250, 160);
            doc.text("patient: " + patientFullName, 15, 180);
            doc.text("Médécin: " + practicianFullName, 15, 200);
            doc.setFontSize(12);
            doc.text("Analyses: ", 150, 220);
            doc.setLineWidth(1);
            doc.line(200, 222, 150, 222);
            doc.setFontSize(10);
            var splitAnalysis = doc.splitTextToSize(analysis.join(", ") + ', ' + analysisRequest['otherAnalysis'], 360);
            doc.text("- " + splitAnalysis, 15, 250);
            doc.setTextColor(150);
            doc.setFontSize(8);
            doc.setLineWidth(0.25);
            doc.line(390, 530, 25, 530);
            var splitFooter = doc.splitTextToSize(footer, 360);
            doc.text(splitFooter, 25, 540);
        }
        return doc;
    }
}
AnalysisRequestService.ɵfac = function AnalysisRequestService_Factory(t) { return new (t || AnalysisRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AnalysisRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnalysisRequestService, factory: AnalysisRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalysisRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AKVh":
/*!***********************************************!*\
  !*** ./src/app/_services/facility.service.ts ***!
  \***********************************************/
/*! exports provided: FacilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityService", function() { return FacilityService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class FacilityService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(facility) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/add', facility);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/facility/active_facilities_name');
    }
}
FacilityService.ɵfac = function FacilityService_Factory(t) { return new (t || FacilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FacilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FacilityService, factory: FacilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FacilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "EJ4i":
/*!*******************************************!*\
  !*** ./src/app/_services/role.service.ts ***!
  \*******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class RoleService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(role) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/add', role);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/update/' + data.roleDTO.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/role/active_roles_name');
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FGX1":
/*!*************************************************!*\
  !*** ./src/app/_services/speciality.service.ts ***!
  \*************************************************/
/*! exports provided: SpecialityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialityService", function() { return SpecialityService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class SpecialityService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(speciality) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/add', speciality);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/speciality/active_specialities_name');
    }
}
SpecialityService.ɵfac = function SpecialityService_Factory(t) { return new (t || SpecialityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SpecialityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SpecialityService, factory: SpecialityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpecialityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HuKj":
/*!***********************************************************!*\
  !*** ./src/app/_services/patient-prescription.service.ts ***!
  \***********************************************************/
/*! exports provided: PatientPrescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPrescriptionService", function() { return PatientPrescriptionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utility/date/date-output-format */ "mu7B");







class PatientPrescriptionService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(prescription) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-prescription/add', prescription);
    }
    /**
    * PUT: update the object on the server. Returns the updated objet upon success.
    */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-prescription/update/' + data.id, data);
    }
    /**
   * get a paginated list of object
   */
    findAllByPatientAndPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('patientId', data['patientId'])
                .set('page', data['page'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-prescription/p_list', queryParams);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-prescription/detail/' + id);
    }
    /**
   * get a paginated list of object
   */
    findAllPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('cnamNumber', data['cnamNumber'])
                .set('idCardNumber', data['idCardNumber'])
                .set('firstName', data['firstName'])
                .set('lastName', data['lastName'])
                .set('patientExternalId', data['patientExternalId'])
                .set('cellPhone', data['cellPhone'])
                .set('state', data['state'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/patient-prescription/all_page', queryParams);
    }
    /**
     *
     */
    servePrescription(prescription) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/prescription/update/' + prescription.id, prescription);
    }
    /**
     * generate prescription document
     */
    generatePdf(prescription, patientTag) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', 'a5');
        var patient = prescription['patient'];
        var practician = prescription['practician'];
        var drugs = JSON.parse(prescription['drugs']);
        if (prescription) {
            // doc variable
            var date = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(prescription['date']);
            var patientFullName = patient['firstName'] + ' ' + patient['maidenName'] + ' ' + patient['lastName'];
            var patientNumber = patient['patientExternalId'];
            var cellPhone = patient['cellPhone1'] + ' ' + patient['cellPhone2'];
            var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
            var footer = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].documentFooter;
            //doc head
            doc.addImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.addImage(patientTag['src'], 'JPEG', 230, 30, 170, 50);
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 260, 80);
            doc.text("Date:" + date, 15, 120);
            doc.text("patient: " + patientFullName, 15, 140);
            doc.text("Télephone: " + cellPhone, 15, 160);
            // doc.text("Médécin: " + practicianFullName, 15, 160);
            doc.setFontSize(12);
            doc.setFont('times', 'bold');
            doc.text("Ordonance médical: ", 150, 190);
            doc.setLineWidth(1);
            doc.line(250, 192, 150, 192);
            doc.setFontSize(10);
            for (let index = 0; index < drugs.length; index++) {
                const element = drugs[index];
                var drug = element['drug'];
                var qty = element['qty'];
                var duration = element['duration'];
                var dosage = element['dosage'];
                if (qty)
                    drug = drug + ' - ' + qty;
                if (duration)
                    drug = drug + ' - ' + duration;
                doc.setFont('times', 'bold');
                doc.text("- " + drug, 15, 220 + index * 35);
                doc.setFont('times', 'italic');
                if (dosage)
                    doc.text(dosage, 15, 235 + index * 35);
            }
            doc.setFont('times', 'bold');
            doc.text("Médécin: ", 200, 220 + drugs.length * 35);
            doc.text(practicianFullName, 200, 230 + drugs.length * 35);
            doc.setTextColor(150);
            doc.setFontSize(8);
            doc.setLineWidth(0.25);
            doc.line(390, 530, 25, 530);
            var splitFooter = doc.splitTextToSize(footer, 360);
            doc.text(splitFooter, 25, 540);
            doc.setTextColor(0, 0, 0);
            doc.text(" Arrêté la présente facture à la somme de : " + 1200, 25, 730);
        }
        return doc;
    }
}
PatientPrescriptionService.ɵfac = function PatientPrescriptionService_Factory(t) { return new (t || PatientPrescriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PatientPrescriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientPrescriptionService, factory: PatientPrescriptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PatientPrescriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "J4dh":
/*!************************************************!*\
  !*** ./src/app/_services/type-mail.service.ts ***!
  \************************************************/
/*! exports provided: TypeMailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMailService", function() { return TypeMailService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class TypeMailService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(typeMail) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/add', typeMail);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/courier-type/active_names');
    }
}
TypeMailService.ɵfac = function TypeMailService_Factory(t) { return new (t || TypeMailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TypeMailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TypeMailService, factory: TypeMailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypeMailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JknV":
/*!*************************************************!*\
  !*** ./src/app/_services/act-family.service.ts ***!
  \*************************************************/
/*! exports provided: ActFamilyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActFamilyService", function() { return ActFamilyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ActFamilyService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(actFamily) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/add', actFamily);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/act-group/active_groups_name');
    }
}
ActFamilyService.ɵfac = function ActFamilyService_Factory(t) { return new (t || ActFamilyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ActFamilyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActFamilyService, factory: ActFamilyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActFamilyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Lf5d":
/*!***********************************************!*\
  !*** ./src/app/_services/type-cro.service.ts ***!
  \***********************************************/
/*! exports provided: TypeCroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCroService", function() { return TypeCroService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class TypeCroService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(typeCro) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/add', typeCro);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/list');
    }
    /**
   * get a paginated list of object
   */
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        data['croGroup'] = (data['croGroup'] == null) ? '' : data['croGroup'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('croGroup', data['croGroup'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-type/active_names');
    }
}
TypeCroService.ɵfac = function TypeCroService_Factory(t) { return new (t || TypeCroService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TypeCroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TypeCroService, factory: TypeCroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypeCroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NwNM":
/*!***********************************************!*\
  !*** ./src/app/_services/district.service.ts ***!
  \***********************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class DistrictService {
    constructor(http) {
        this.http = http;
    }
    /**
    * get a list of id and name of objects
    */
    findByRegion(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/region/districts_name/{id}' + id);
    }
    /**
     * get a paginated list of object
     */
    findAllByPage(data) {
        let queryParams = {};
        queryParams = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/region/p_districts/' + data['region'], queryParams);
    }
    /**
    * get a list of active object
    */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/district/names');
    }
}
DistrictService.ɵfac = function DistrictService_Factory(t) { return new (t || DistrictService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DistrictService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DistrictService, factory: DistrictService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DistrictService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OUpu":
/*!******************************************!*\
  !*** ./src/app/_services/dcu.service.ts ***!
  \******************************************/
/*! exports provided: DcuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DcuService", function() { return DcuService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class DcuService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(dcu) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/add', dcu);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/dcu/active_name');
    }
}
DcuService.ɵfac = function DcuService_Factory(t) { return new (t || DcuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DcuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DcuService, factory: DcuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DcuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Pd2Q":
/*!*******************************************************!*\
  !*** ./src/app/_services/type-certificate.service.ts ***!
  \*******************************************************/
/*! exports provided: TypeCertificateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCertificateService", function() { return TypeCertificateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class TypeCertificateService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(typeCertificate) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/add', typeCertificate);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/certificat-type/active_names');
    }
}
TypeCertificateService.ɵfac = function TypeCertificateService_Factory(t) { return new (t || TypeCertificateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TypeCertificateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TypeCertificateService, factory: TypeCertificateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypeCertificateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Puoh":
/*!******************************************************!*\
  !*** ./src/app/_services/unit-of-measure.service.ts ***!
  \******************************************************/
/*! exports provided: UnitOfMeasureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitOfMeasureService", function() { return UnitOfMeasureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class UnitOfMeasureService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(uom) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/add', uom);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/uom/names');
    }
}
UnitOfMeasureService.ɵfac = function UnitOfMeasureService_Factory(t) { return new (t || UnitOfMeasureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UnitOfMeasureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnitOfMeasureService, factory: UnitOfMeasureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitOfMeasureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dTcv":
/*!********************************************************!*\
  !*** ./src/app/_services/antecedent-family.service.ts ***!
  \********************************************************/
/*! exports provided: AntecedentFamilyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntecedentFamilyService", function() { return AntecedentFamilyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class AntecedentFamilyService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(antecedentFamily) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/add', antecedentFamily);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/antecedant-type/active_antecedant_types_name');
    }
}
AntecedentFamilyService.ɵfac = function AntecedentFamilyService_Factory(t) { return new (t || AntecedentFamilyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AntecedentFamilyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AntecedentFamilyService, factory: AntecedentFamilyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AntecedentFamilyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fOrZ":
/*!******************************************************!*\
  !*** ./src/app/_services/type-cro-family.service.ts ***!
  \******************************************************/
/*! exports provided: TypeCroFamilyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCroFamilyService", function() { return TypeCroFamilyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class TypeCroFamilyService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(typeCroFamily) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/add', typeCroFamily);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/cro-group/active_names');
    }
}
TypeCroFamilyService.ɵfac = function TypeCroFamilyService_Factory(t) { return new (t || TypeCroFamilyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TypeCroFamilyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TypeCroFamilyService, factory: TypeCroFamilyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypeCroFamilyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fcKF":
/*!***********************************************!*\
  !*** ./src/app/_services/check-up.service.ts ***!
  \***********************************************/
/*! exports provided: CheckUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUpService", function() { return CheckUpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_utility/date/date-output-format */ "mu7B");







class CheckUpService {
    constructor(http) {
        this.http = http;
    }
    /**
     *  POST: add a new object to the database
     */
    save(checkUp) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/add', checkUp);
    }
    /**
     * PUT: update the object on the server. Returns the updated objet upon success.
     */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/list');
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/p_list', queryParams);
    }
    /**
     * get a list of active object
     */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2 + '/check-up/active_name');
    }
    /**
      * generate analysis request document
      */
    generatePdf(checkUp, patientTag) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'pt', 'a5');
        var patient = checkUp['patient'];
        var practician = checkUp['practician'];
        var pc = checkUp['checkUp'];
        if (checkUp) {
            // doc variable
            var date = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(checkUp['date']);
            var patientFullName = patient['firstName'] + ' ' + patient['maidenName'] + ' ' + patient['lastName'];
            var patientNumber = patient['patientExternalId'];
            var birthDate = Object(_utility_date_date_output_format__WEBPACK_IMPORTED_MODULE_4__["dateOutputFormat"])(patient["birthDate"]);
            var cellPhone = patient['cellPhone1'] + ' - ' + patient['cellPhone2'];
            var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
            var footer = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].documentFooter;
            //     //doc head
            doc.addImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.addImage(patientTag['src'], 'JPEG', 230, 30, 170, 50);
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 260, 80);
            doc.text("Date:" + date, 15, 120);
            doc.text("patient: " + patientFullName, 15, 140);
            doc.text("Télephone: " + cellPhone, 15, 160);
            doc.text("Médécin: " + practicianFullName, 15, 180);
            doc.setFontSize(12);
            doc.setFont("bold");
            doc.text(pc['name'] + ": ", 150, 220);
            doc.setFontSize(10);
            for (let index = 0; index < pc["acts"].length; index++) {
                doc.text("- " + pc['acts'][index]['name'], 15, 250 + index * 20);
            }
            doc.setTextColor(150);
            doc.setFontSize(8);
            doc.setLineWidth(0.25);
            doc.line(390, 530, 25, 530);
            var splitFooter = doc.splitTextToSize(footer, 360);
            doc.text(splitFooter, 25, 540);
        }
        return doc;
    }
}
CheckUpService.ɵfac = function CheckUpService_Factory(t) { return new (t || CheckUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CheckUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CheckUpService, factory: CheckUpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fdDw":
/*!***********************************************!*\
  !*** ./src/app/_services/locality.service.ts ***!
  \***********************************************/
/*! exports provided: LocalityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalityService", function() { return LocalityService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class LocalityService {
    constructor(http) {
        this.http = http;
    }
    /**
     * get a list  of objects
     */
    findByDistrict(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/district/localities_name/{id}' + id);
    }
    /**
    * get a list  of objects
    */
    findByCity(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/city/localities_name/' + id);
    }
    /**
     * get a paginated list of object
     */
    findAllPage(data) {
        let queryParams = {};
        data['district'] = (data['district'] == null) ? '' : data['district'];
        data['city'] = (data['city'] == null) ? '' : data['city'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('district', data['district'])
                .set('city', data['city'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/locality/p_all/', queryParams);
    }
    /**
     * get a paginated list of object
     */
    findAllPageByCity(data) {
        let queryParams = {};
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/city/p_localities/' + data['city'], queryParams);
    }
    /**
     * get a paginated list of object
     */
    findAllPageByDistrict(data) {
        let queryParams = {};
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/district/p_districts/' + data['district'], queryParams);
    }
}
LocalityService.ɵfac = function LocalityService_Factory(t) { return new (t || LocalityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LocalityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalityService, factory: LocalityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nU+Q":
/*!*********************************************!*\
  !*** ./src/app/_services/region.service.ts ***!
  \*********************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class RegionService {
    constructor(http) {
        this.http = http;
    }
    /**
      * get a list of id and name of objects
      */
    findByCountry(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/country/regions_name/{id}' + id);
    }
    /**
     * get a paginated list of object
     */
    findAllByPage(data) {
        let queryParams = {};
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/country/p_regions/' + data['country'], queryParams);
    }
    /**
    * get a list of active object
    */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/region/names');
    }
}
RegionService.ɵfac = function RegionService_Factory(t) { return new (t || RegionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RegionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegionService, factory: RegionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qf91":
/*!****************************************************!*\
  !*** ./src/app/_services/article-group.service.ts ***!
  \****************************************************/
/*! exports provided: ArticleGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleGroupService", function() { return ArticleGroupService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ArticleGroupService {
    constructor(http) {
        this.http = http;
    }
    /**
    *  POST: add a new object to the database
    */
    save(articleGroup) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/add', articleGroup);
    }
    /**
   * PUT: update the object on the server. Returns the updated objet upon success.
   */
    update(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/update/' + data.id, data);
    }
    /**
     * get a list of object
     */
    findAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/list');
    }
    findAllByPage(data) {
        let queryParams = {};
        data['active'] = (data['active'] == null) ? '' : data['active'];
        queryParams = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', data['page'])
                .set('size', data['entries'])
                .set('name', data['name'])
                .set('active', data['active'])
                .set('sort', data['sort'] + ',' + data['order'])
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/p_list', queryParams);
    }
    /**
    * get a list of active object
    */
    findActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/active_list');
    }
    /**
     * enable a object
     */
    enable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/enable/' + id);
    }
    /**
     * disable a object
     */
    disable(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/disable/' + id);
    }
    /**
     * get object by id
     * @param id
     */
    findById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/detail/' + id);
    }
    /**
     * get a list of object
     */
    getIdAndName() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl2 + '/article-group/active_groups_name');
    }
}
ArticleGroupService.ɵfac = function ArticleGroupService_Factory(t) { return new (t || ArticleGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ArticleGroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticleGroupService, factory: ArticleGroupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleGroupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "y+nr":
/*!************************************************************!*\
  !*** ./src/app/_utility/CustomValidators/int.Validator.ts ***!
  \************************************************************/
/*! exports provided: ValidateInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateInt", function() { return ValidateInt; });
function ValidateInt(control) {
    let value = control.value;
    if (Number(value) % 1 !== 0) {
        return { 'invalid type number': true };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map