(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n<div class=\"container mt-5\">\r\n    <section>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <button class=\"btn btn-transperent\" (click)=\"goBack()\" matTooltip=\"Go Back\" matTooltipPosition=\"left\"><i\n                    class=\"fa fa-arrow-circle-o-left\" style=\"font-size:30px\"></i></button>\n        </div>\n        <div class=\"col-4 text-center\">\n            <h5>Employee Details</h5>\n        </div>\n        <div class=\"col-4 text-right\">\n            <!-- <a (click)=\"redirect()\" class=\"btn text-info pointer\">Flip To Resume</a> -->\n            <button class=\"btn btn-transperent\" (click)=\"redirect()\" matTooltip=\"Flip To Resume\" matTooltipPosition=\"left\">\n                <i class=\"fa fa-file\" style=\"font-size:25px\"></i></button>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row mt-5\">\n        <div class=\"col-md-4 text-center\">\n            <img src=\"assets/images/user.png\" class=\"img-thumbnail\">\n        </div>\n        <div class=\"col-md-7 details\" style=\"line-height: 35px;\">\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Emp ID <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">1000</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Emp Name <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">{{empData.firstName}} {{empData.lastName}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Gender <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">{{empData.gender}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Designation <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">{{empData.designation}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Email <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">{{empData.email}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Mobile <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">{{empData.mobile}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5\"><strong>Address <span class=\"pull-right mr-3\"> : </span></strong></div>\n                <div class=\"col-7\">{{empData.address}}</div>\n            </div>\n        </div>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-4\">\r\n            <button class=\"btn btn-transperent\" (click)=\"goBack()\" matTooltip=\"Go Back\" matTooltipPosition=\"left\"><i\r\n                    class=\"fa fa-arrow-circle-o-left\" style=\"font-size:30px\"></i></button>\r\n        </div>\r\n        <div class=\"col-4 text-center\">\r\n            <h5>Employee List</h5>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row justify-content-between\">\r\n        <div class=\"col-6\">\r\n            <button class=\"btn btn-info add-btn\" data-toggle=\"modal\" data-target=\"#addEmpModal\" (click)=\"addEmployee()\">Add\r\n                Employee</button>\r\n        </div>\r\n        <div class=\"col-6 col-md-4\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" (keyup)=\"filterByName(searchKey.value)\"\r\n                #searchKey>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"search-result mat-elevation-z8 mt-3\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\"\r\n        (scrolled)=\"onScroll()\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-hover data-table\">\r\n\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"empId\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-light\"> Emp ID </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.empId}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-light\"> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\" class=\"empNameLink pointer\" (click)=\"redirect(element.id)\">\r\n                    {{element.name}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"designation\">\r\n                <th mat-sort-header mat-header-cell *matHeaderCellDef class=\"bg-light\"> Designation </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.designation}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef class=\"bg-light\"> </th>\r\n                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                    <a class=\"btn text-info pointer\" (click)=\"editEmployee(element)\" data-toggle=\"modal\"\r\n                        data-dismiss=\"modal\" matTooltip=\"Update Employee\" data-target=\"#addEmpModal\"><i\r\n                            class=\"fa fa-edit\"></i></a>\r\n                    <a *ngIf=\"role==='admin'\" class=\"btn text-danger pointer\" (click)=\"deleteEmployee(element)\"\r\n                        matTooltip=\"Delete Employee\"><i class=\"fa fa-trash\"></i></a>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25]\" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"search-result\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\"\r\n        (scrolled)=\"onScroll()\">\r\n\r\n        <table class=\"table table-hover mt-3 shadow\">\r\n            <thead class=\"bg-light\">\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Designation</th>\r\n                <th></th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let emp of empData | searchName: searchKey.value \">\r\n                    <td>{{emp.empId}}</td>\r\n                    <td class=\"empNameLink pointer\"><a (click)=\"redirect(emp.id)\">{{emp.firstName}} {{emp.lastName}}</a>\r\n                    </td>\r\n                    <td>{{emp.designation}}</td>\r\n                    <td class=\"text-center\">\r\n                        <a class=\"btn text-info pointer\" (click)=\"editEmployee(emp)\" data-toggle=\"modal\"\r\n                            data-dismiss=\"modal\" matTooltip=\"Update Employee\" data-target=\"#addEmpModal\"><i\r\n                                class=\"fa fa-edit\"></i></a>\r\n                        <a *ngIf=\"role==='admin'\" class=\"btn text-danger pointer\" (click)=\"deleteEmployee(emp)\"\r\n                            matTooltip=\"Delete Employee\"><i class=\"fa fa-trash\"></i></a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div> -->\r\n\r\n    <div class=\"row pb-5\">\r\n        <div class=\"col-md-12 p-5\">\r\n            <ngx-spinner bdOpacity=\"0.9\" bdColor=\"\" size=\"default\" color=\"#581f87\" type=\"ball-pulse-sync\"\r\n                [fullScreen]=\"false\">\r\n            </ngx-spinner>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n\r\n<div id=\"addEmpModal\" class=\"modal fade\" role=\"dialog\" #empFormModal>\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">{{formHeader}}</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"formGroup\" (ngSubmit)=\"formGroup.valid\" (change)=\"onFormChange()\">\r\n                    <input type=\"hidden\" name=\"id\" #empId=\"ngModel\" [(ngModel)]=\"id\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                    <div class=\"row col-md-12\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"firstName\">First Name</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"firstName\"\r\n                                    placeholder=\"Enter First Name\"\r\n                                    [ngClass]=\"{'is-invalid':formGroup.get('firstName').touched && formGroup.get('firstName').invalid}\">\r\n                                <div class=\"invalid-feedback\">\r\n                                    <p>Field is required</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lastName\">Last Name</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\"\r\n                                    formControlName=\"lastName\"\r\n                                    [ngClass]=\"{'is-invalid': formGroup.get('lastName').touched && formGroup.get('lastName').invalid}\">\r\n                                <div class=\"invalid-feedback\">\r\n                                    <p>Field is required</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"designation\">Designation</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\"\r\n                                    formControlName=\"designation\"\r\n                                    [ngClass]=\"{'is-invalid': formGroup.get('designation').touched && formGroup.get('designation').invalid}\">\r\n                                <div class=\"invalid-feedback\">\r\n                                    <p>Field is required</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Email</label>\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter Email\"\r\n                                    formControlName=\"email\"\r\n                                    [ngClass]=\"{'is-invalid': formGroup.get('email').touched && formGroup.get('email').invalid}\">\r\n                                <div *ngIf=\"formGroup.get('email').touched && formGroup.get('email').invalid\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <p *ngIf=\"formGroup.get('email').errors.required\">Email is required</p>\r\n                                    <p *ngIf=\"formGroup.get('email').errors.email\">Invalid Email</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"mobile\">Mobile No.</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile No.\"\r\n                                    formControlName=\"mobile\" maxlength=\"10\"\r\n                                    [ngClass]=\"{'is-invalid': formGroup.get('mobile').touched && formGroup.get('mobile').invalid}\">\r\n                                <div *ngIf=\"formGroup.get('mobile').touched && formGroup.get('mobile').invalid\"\r\n                                    class=\"invalid-feedback\">\r\n                                    <p *ngIf=\"formGroup.get('mobile').errors.required\">Field is required</p>\r\n                                    <p\r\n                                        *ngIf=\"formGroup.get('mobile').invalid && !formGroup.get('mobile').errors.required\">\r\n                                        Invalid Mobile No.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"\">Gender</label>\r\n                                <select formControlName=\"gender\" class=\"form-control\"\r\n                                    [ngClass]=\"{'is-invalid': formGroup.get('gender').touched && formGroup.get('gender').invalid}\">\r\n                                    <option value=\"male\">Male</option>\r\n                                    <option value=\"felame\">Female</option>\r\n                                </select>\r\n                                <div class=\"invalid-feedback\">\r\n                                    <p>Field is required</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"address\">Address</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Full Address\"\r\n                                    formControlName=\"address\"\r\n                                    [ngClass]=\"{'is-invalid': formGroup.get('address').touched && formGroup.get('address').invalid}\">\r\n                                <div class=\"invalid-feedback\">\r\n                                    <p>Field is required</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 text-center\">\r\n                            <button type=\"submit\" class=\"btn btn-info mr-2\" [disabled]=\"!formGroup.valid || isDisabled\"\r\n                                data-dismiss=\"modal\" data-target=\"#addEmpModal\"\r\n                                (click)=\"onSubmit()\">{{btnLabel}}</button>\r\n                            <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" #closeModal>Close</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-resume/employee-resume.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-resume/employee-resume.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <button class=\"btn btn-transperent\" (click)=\"goBack()\" matTooltip=\"Go Back\" matTooltipPosition=\"left\"><i\n                    class=\"fa fa-arrow-circle-o-left\" style=\"font-size:30px\"></i></button>\n        </div>\n        <div class=\"col-4 text-center\">\n            <h5>Resume</h5>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-tab-group>\n                <mat-tab label=\"Info\">\n                    <div class=\"mt-4 text-justify\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Projects\">\n                    <div class=\"mt-4 text-justify\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Hobbies\">\n                    <div class=\"mt-4 text-justify\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Notes\">\n                    <div class=\"mt-4 text-justify\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron text-center\">\n    <h3><span>Home</span></h3>\n</div>\n\n<section style=\"display:flex; justify-content: center;\">\n    <div class=\"row\">\n        <button class=\"btn btn-primary\" routerLink=\"/notfound\">Not Found</button>\n        <button class=\"btn btn-primary ml-2\" routerLink=\"/empList\" (click)=\"validate()\">Employee List</button>\n        <button class=\"btn btn-primary ml-2\" (click)=\"addProject()\">Add Project</button>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/login-dialog.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/login-dialog.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button class=\"pull-right\" (click)=\"onNoClick()\" \r\nstyle=\"margin-right:-15px; \r\nmargin-top:-15px; \r\nbackground-color: Transparent;\r\nbackground-repeat:no-repeat;\r\nborder: none;\r\ncursor:pointer;\r\noverflow: hidden;\">\r\n    <i class=\"fa fa-close\" id=\"closeIcon\"></i>\r\n</button>\r\n<h1 mat-dialog-title class=\"text-center\">Login</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"loginForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" placeholder=\"username\" formControlName=\"username\" class=\"form-control\"\r\n                        [ngClass]=\"{'is-invalid':loginForm.get('username').touched && loginForm.get('username').invalid}\">\r\n                    <div class=\"invalid-feedback\">\r\n                        <p>username required</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" placeholder=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                        autocomplete=\"false\"\r\n                        [ngClass]=\"{'is-invalid':loginForm.get('password').touched && loginForm.get('password').invalid}\">\r\n                    <div class=\"invalid-feedback\">\r\n                        <p>password required</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <button class=\"form-control btn btn-info\" [disabled]=\"loginForm.invalid\"\r\n                    (click)=\"validateLogin()\">Login</button>\r\n                <!-- <button class=\"btn btn-primary ml-2\" (click)=\"onNoClick()\">Cancel</button> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 alert alert-danger mt-2\" *ngIf=\"invalidLogin\">\r\n            Invalid Credentials\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"text-center bg-light mt-2\">\r\n    <span>Forgot Password?</span>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/logout-dialog.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/logout-dialog.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n    Are You Sure?\r\n    <button class=\"btn btn-primary ml-3\" mat-button [mat-dialog-close]=\"'logout'\" cdkFocusInitial>Yes</button>\r\n    <button class=\"btn btn-primary ml-3\" mat-button (click)=\"onNoClick()\">No</button>\r\n</h1>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">TexT</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"openDialog()\">Login</a>\n        </li>\n    </ul>\n</nav> -->\n\n<nav class=\"navbar navbar-toggleable-sm  bg-inverse navbar-dark bg-dark sticky-top\">\n    <!-- <img src=\"assets/images/logo.png\" class=\"img\" alt=\"\" style=\"height:50px;\"> -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"\">Persistent System Ltd.</a>\n        </li>\n    </ul>\n    <a class=\"btn btn-default bg-light\" (click)=\"openDialog()\" style=\"border: 1px solid white;\" [hidden]=\"!isLogin\">Login</a>\n    <a class=\"btn btn-default bg-light\" (click)=\"logout()\" style=\"border: 1px solid white;\" [hidden]=\"isLogin\">Logout</a>\n\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%)\">\n    <div class=\"col-sm-12 col-xs-12\" id=\"contents\">\n        <p>404 - Page Not Found</p>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <button class=\"btn btn-transperent\" (click)=\"goBack()\" matTooltip=\"Go Back\" matTooltipPosition=\"left\"><i\n                    class=\"fa fa-arrow-circle-o-left\" style=\"font-size:30px\"></i></button>\n        </div>\n        <div class=\"col-4 text-center\">\n            <h4>Projects</h4>\n        </div>\n    </div>\n    <hr>\n\n    <div class=\"row justify-content-between\">\n        <div class=\"col-6\">\n            <button class=\"btn btn-info add-btn\" data-toggle=\"modal\" data-target=\"#addProjectModal\"\n                (click)=\"addProject()\">Add Project\n            </button>\n        </div>\n    </div>\n\n    <table class=\"table table-hover mt-3 shadow\">\n        <thead class=\"bg-light\">\n            <th>Project ID</th>\n            <th>Project Name</th>\n            <th>Description</th>\n            <th></th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let project of projects\">\n                <td>{{project.projectId}}</td>\n                <td class=\"empNameLink pointer\"><a>{{project.name}}</a>\n                </td>\n                <td>{{project.description}}</td>\n                <td class=\"text-center\">\n                    <a class=\"btn text-info pointer\" data-toggle=\"modal\" data-dismiss=\"modal\"\n                        (click)=\"editProject(project)\" matTooltip=\"Update Project\" data-target=\"#addProjectModal\"><i\n                            class=\"fa fa-edit\"></i></a>\n                    <a class=\"btn text-danger pointer\" matTooltip=\"Delete Project\"\n                        (click)=\"deleteProject(project.id)\"><i class=\"fa fa-trash\"></i></a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</section>\n\n<div id=\"addProjectModal\" class=\"modal fade\" role=\"dialog\" #empFormModal>\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Add Project</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formGroup\">\n                    <div class=\"row\" hidden>\n                        <input type=\"hidden\" [(ngModel)]=\"projectId\" [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Project Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Project Name\"\n                                formControlName=\"name\"\n                                [ngClass]=\"{'is-invalid': formGroup.get('name').touched && formGroup.get('name').invalid}\">\n                            <div class=\"invalid-feedback\">\n                                <p>Field is required</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Project Description</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Description\"\n                                formControlName=\"description\"\n                                [ngClass]=\"{'is-invalid': formGroup.get('description').touched && formGroup.get('description').invalid}\">\n                            <div class=\"invalid-feedback\">\n                                <p>Email is required</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"mobile\">Required Technologies</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Technologies\"\n                                formControlName=\"technologies\"\n                                [ngClass]=\"{'is-invalid': formGroup.get('technologies').touched && formGroup.get('technologies').invalid}\">\n                            <div class=\"invalid-feedback\">\n                                <p>Field is required</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"client\">Client Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Client Detail\"\n                                formControlName=\"client\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"\">Location</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Location\"\n                                formControlName=\"location\"\n                                [ngClass]=\"{'is-invalid': formGroup.get('location').touched && formGroup.get('location').invalid}\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 text-center\">\n                        <button type=\"submit\" class=\"btn btn-info mr-2\" [disabled]=\"formGroup.invalid\"\n                            (click)=\"onSubmit()\" data-dismiss=\"modal\">{{label}}</button>\n                        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" #closeModal>Close</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
            /* harmony import */ var _employee_resume_employee_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-resume/employee-resume.component */ "./src/app/employee-resume/employee-resume.component.ts");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
            /* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
            var routes = [
                {
                    path: "",
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                },
                {
                    path: "empList",
                    component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"],
                    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
                },
                {
                    path: 'empDetails/:id',
                    component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailsComponent"],
                    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
                },
                {
                    path: 'resume/:id',
                    component: _employee_resume_employee_resume_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeResumeComponent"],
                    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
                },
                {
                    path: "notfound",
                    component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
                },
                {
                    path: "addProject",
                    component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]]
                },
                {
                    path: "**",
                    component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'TextAssignment';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _employee_resume_employee_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee-resume/employee-resume.component */ "./src/app/employee-resume/employee-resume.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _search_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-name.pipe */ "./src/app/search-name.pipe.ts");
            /* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
            /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDetailsComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                        _employee_resume_employee_resume_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeResumeComponent"],
                        _search_name_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchNamePipe"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["LoginDialog"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["LogoutDialog"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                        _projects_projects_component__WEBPACK_IMPORTED_MODULE_23__["ProjectsComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                        _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_18__["InfiniteScrollModule"],
                        ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"]
                    ],
                    entryComponents: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["LoginDialog"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["LogoutDialog"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/employee-details/employee-details.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/employee-details/employee-details.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("i:hover {\r\n    color: #17a2ba;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 786px){\r\n    .details {\r\n        margin-top:20px;\r\n        margin-left:10px;\r\n        padding-bottom: 40px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQkFBb0I7SUFDeEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE3YTJiYTtcclxufVxyXG5cclxuLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODZweCl7XHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/employee-details/employee-details.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/employee-details/employee-details.component.ts ***!
          \****************************************************************/
        /*! exports provided: EmployeeDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function () { return EmployeeDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
            var EmployeeDetailsComponent = /** @class */ (function () {
                function EmployeeDetailsComponent(router, empService, route) {
                    var _this = this;
                    this.router = router;
                    this.empService = empService;
                    this.route = route;
                    this.router.params.subscribe(function (param) {
                        _this.id = param.id;
                    });
                    this.empData = {
                        id: '',
                        empId: '',
                        firstName: '',
                        lastName: '',
                        address: '',
                        email: '',
                        mobile: '',
                        designation: ''
                    };
                }
                EmployeeDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.empService.getEmployeeById(this.id).subscribe(function (data) {
                        _this.empData = data.payload.data();
                    });
                };
                EmployeeDetailsComponent.prototype.goBack = function () {
                    window.history.back();
                };
                EmployeeDetailsComponent.prototype.redirect = function () {
                    this.route.navigateByUrl("resume/" + this.id);
                };
                return EmployeeDetailsComponent;
            }());
            EmployeeDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee-details/employee-details.component.css")).default]
                })
            ], EmployeeDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-list/employee-list.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/employee-list/employee-list.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".pointer{\r\n    cursor: pointer;\r\n}\r\n\r\ni:hover {\r\n    color: #17a2ba;\r\n}\r\n\r\n.empNameLink{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.mat-elevation-z8, .data-table {\r\n    width: 100%;\r\n}\r\n\r\n.add-btn {\r\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n}\r\n\r\n.bg-light {\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n}\r\n\r\ntr.mat-footer-row, tr.mat-row {\r\n    height: 55px !important;\r\n}\r\n\r\ntr.mat-row:hover .empNameLink{\r\n    color: #17a2ba;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUdBQXlHO0FBQzdHOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE3YTJiYTtcclxufVxyXG5cclxuLmVtcE5hbWVMaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCwgLmRhdGEtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLmJnLWxpZ2h0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG50ci5tYXQtZm9vdGVyLXJvdywgdHIubWF0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxudHIubWF0LXJvdzpob3ZlciAuZW1wTmFtZUxpbmt7XHJcbiAgICBjb2xvcjogIzE3YTJiYTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employee-list/employee-list.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/employee-list/employee-list.component.ts ***!
          \**********************************************************/
        /*! exports provided: EmployeeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () { return EmployeeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            var EmployeeListComponent = /** @class */ (function () {
                function EmployeeListComponent(empService, router, tostr, firestore, spinner) {
                    this.empService = empService;
                    this.router = router;
                    this.tostr = tostr;
                    this.firestore = firestore;
                    this.spinner = spinner;
                    this.empData = [];
                    this.mobileNumber = "[0-9]{10}";
                    this.formHeader = '';
                    this.btnLabel = '';
                    this.isDisabled = false;
                    this.role = '';
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
                    this.displayedColumns = ['empId', 'name', 'designation', 'actions'];
                    this.notEmptyPost = true;
                    this.notScroll = true;
                    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                        designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.mobileNumber)])
                    });
                }
                EmployeeListComponent.prototype.ngOnInit = function () {
                    this.spinner.show();
                    this.getEmployeeData();
                    this.role = localStorage.getItem('role');
                };
                EmployeeListComponent.prototype.getEmployeeData = function () {
                    var _this = this;
                    this.empService.getEmployeeData().subscribe(function (data) {
                        _this.empData = data.map(function (item) {
                            return Object.assign({ id: item.payload.doc.id, empId: Number(item.payload.newIndex) + 1 * 1000, name: item.payload.doc.get('firstName') + ' ' + item.payload.doc.get('lastName') }, item.payload.doc.data());
                        });
                        _this.dataSource.data = _this.empData;
                        _this.dataSource.sort = _this.sort;
                        _this.dataSource.paginator = _this.paginator;
                    });
                };
                EmployeeListComponent.prototype.goBack = function () {
                    window.history.back();
                };
                EmployeeListComponent.prototype.onSubmit = function () {
                    var formData = this.formGroup.value;
                    if (this.id == null) {
                        if (this.formGroup.valid) {
                            this.empService.addEmployee(formData);
                            this.tostr.success('Employee Added!');
                        }
                    }
                    else {
                        formData.id = this.id;
                        this.empService.updateEmployee(formData);
                        this.tostr.success('Employee Updated!');
                    }
                    this.closeModal.nativeElement.click(); //programatically closing the modal
                    this.formGroup.reset();
                };
                EmployeeListComponent.prototype.addEmployee = function () {
                    this.formGroup.reset();
                    this.id = null;
                    this.formHeader = 'Add New Employee';
                    this.btnLabel = "Submit";
                    this.isDisabled = false;
                };
                EmployeeListComponent.prototype.deleteEmployee = function (emp) {
                    var isDelete = confirm('Do You Want To Delete Employee - ' + emp.firstName + ' ' + emp.lastName + '(' + emp.empId + ')');
                    if (isDelete) {
                        this.empService.deleteEmployee(emp.id);
                        this.tostr.info('Employee Deleted');
                    }
                };
                EmployeeListComponent.prototype.editEmployee = function (emp) {
                    this.formGroup.reset();
                    this.isDisabled = true;
                    this.formHeader = 'Emp ID - ' + emp.empId;
                    this.btnLabel = "Update";
                    this.formGroup.setValue({
                        firstName: emp.firstName,
                        lastName: emp.lastName,
                        email: emp.email,
                        designation: emp.designation,
                        gender: emp.gender,
                        address: emp.address,
                        mobile: emp.mobile
                    });
                    this.id = emp.id;
                };
                EmployeeListComponent.prototype.filterByName = function (serachKey) {
                    this.dataSource.filter = serachKey.trim().toLowerCase();
                    this.spinner.hide();
                };
                EmployeeListComponent.prototype.redirect = function (id) {
                    this.router.navigateByUrl('empDetails/' + id);
                };
                EmployeeListComponent.prototype.onFormChange = function () {
                    this.isDisabled = false;
                };
                EmployeeListComponent.prototype.onScroll = function () {
                    if (this.notEmptyPost && this.notScroll) {
                        this.spinner.show();
                        this.notScroll = false;
                        this.loadNextPost();
                    }
                };
                EmployeeListComponent.prototype.loadNextPost = function () {
                    var _this = this;
                    //return last post from array
                    var lastPost = this.empData[this.empData.length - 1];
                    //get id of last post
                    var lastPostId = lastPost.id;
                    //send this id as key value parse using formdata()
                    var dataToSend = new FormData();
                    dataToSend.append('id', lastPostId);
                    //call http request
                    this.empService.getEmployeeData().subscribe(function (data) {
                        var newPost = data.map(function (item) {
                            return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
                        });
                        _this.spinner.hide();
                        if (newPost.length === 0) {
                            _this.notEmptyPost = false;
                        }
                        //add newly fetched post to already existing data
                        //   this.empData = this.empData.concat(newPost);
                        _this.notScroll = true;
                    });
                };
                return EmployeeListComponent;
            }());
            EmployeeListComponent.ctorParameters = function () { return [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
                { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: false })
            ], EmployeeListComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], { static: false })
            ], EmployeeListComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal', { static: false })
            ], EmployeeListComponent.prototype, "closeModal", void 0);
            EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
                })
            ], EmployeeListComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-resume/employee-resume.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/employee-resume/employee-resume.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("i:hover {\r\n    color: #17a2ba;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtcmVzdW1lL2VtcGxveWVlLXJlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLXJlc3VtZS9lbXBsb3llZS1yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImk6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxN2EyYmE7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employee-resume/employee-resume.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/employee-resume/employee-resume.component.ts ***!
          \**************************************************************/
        /*! exports provided: EmployeeResumeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeResumeComponent", function () { return EmployeeResumeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var EmployeeResumeComponent = /** @class */ (function () {
                function EmployeeResumeComponent(routes) {
                    var _this = this;
                    this.routes = routes;
                    this.routes.params.subscribe(function (param) {
                        _this.id = param.id;
                    });
                }
                EmployeeResumeComponent.prototype.ngOnInit = function () {
                };
                EmployeeResumeComponent.prototype.goBack = function () {
                    window.history.back();
                };
                return EmployeeResumeComponent;
            }());
            EmployeeResumeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            EmployeeResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee-resume',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-resume/employee-resume.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-resume.component.css */ "./src/app/employee-resume/employee-resume.component.css")).default]
                })
            ], EmployeeResumeComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/footer/footer.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/admin.guard.ts": 
        /*!***************************************!*\
          !*** ./src/app/guards/admin.guard.ts ***!
          \***************************************/
        /*! exports provided: AdminGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function () { return AdminGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminGuard = /** @class */ (function () {
                function AdminGuard(router) {
                    this.router = router;
                }
                AdminGuard.prototype.canActivate = function () {
                    if (localStorage.getItem('role') == "admin")
                        return true;
                    else {
                        this.router.navigateByUrl('');
                        return false;
                    }
                };
                return AdminGuard;
            }());
            AdminGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminGuard);
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, empService) {
                    this.router = router;
                    this.empService = empService;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (this.empService.isLogin()) {
                        return true;
                    }
                    else {
                        this.router.navigateByUrl('');
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(snackBar, empService, router) {
                    this.snackBar = snackBar;
                    this.empService = empService;
                    this.router = router;
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent.prototype.ngAfterViewInit = function () {
                };
                HomeComponent.prototype.validate = function () {
                    if (!this.empService.isLogin()) {
                        this.snackBar.open('Please Login First?', 'Login', {
                            duration: 1000,
                        });
                    }
                };
                HomeComponent.prototype.addProject = function () {
                    if (localStorage.getItem('role') == "admin") {
                        this.router.navigateByUrl("/addProject");
                    }
                    else if (!this.empService.isLogin()) {
                        this.snackBar.open('Please Login First?', 'Login', {
                            duration: 1000,
                        });
                    }
                    else {
                        this.snackBar.open('Unauthorized Access?', '', {
                            duration: 1000
                        });
                    }
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/material.module.ts": 
        /*!************************************!*\
          !*** ./src/app/material.module.ts ***!
          \************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
                    ],
                    exports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
                    ]
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/navbar/navbar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent, LoginDialog, LogoutDialog */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialog", function () { return LoginDialog; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDialog", function () { return LogoutDialog; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(dialog, router, empService) {
                    this.dialog = dialog;
                    this.router = router;
                    this.empService = empService;
                    this.isLogin = false;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    if (!this.empService.isLogin()) {
                        this.openDialog();
                        this.isLogin = true;
                    }
                    else {
                        this.isLogin = false;
                    }
                };
                NavbarComponent.prototype.ngAfterViewInit = function () { };
                NavbarComponent.prototype.openDialog = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(LoginDialog, {
                        width: '400px',
                        data: { name: 'akshay' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (!_this.empService.isLogin())
                            _this.isLogin = true;
                        else
                            _this.isLogin = false;
                    });
                };
                NavbarComponent.prototype.openLogoutDialog = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(LogoutDialog, {
                        width: '350px'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result == 'logout') {
                            _this.empService.logout();
                            _this.router.navigateByUrl('');
                            _this.openDialog();
                        }
                    });
                };
                NavbarComponent.prototype.logout = function () {
                    this.openLogoutDialog();
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            var LoginDialog = /** @class */ (function () {
                function LoginDialog(empService, router, dialogRef, data) {
                    this.empService = empService;
                    this.router = router;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.username = '';
                    this.password = '';
                    this.invalidLogin = false;
                    this.users = [];
                    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
                    });
                }
                LoginDialog.prototype.ngOnInit = function () {
                    var _this = this;
                    this.empService.getUsers().subscribe(function (data) {
                        data.forEach(function (user) {
                            _this.users.push(user.payload.doc.data());
                        });
                    });
                };
                LoginDialog.prototype.onNoClick = function () {
                    this.dialogRef.close();
                    this.loginForm.reset();
                };
                LoginDialog.prototype.validateLogin = function () {
                    var _this = this;
                    var user = this.loginForm.get('username').value;
                    var pass = this.loginForm.get('password').value;
                    this.users.forEach(function (usr) {
                        if (user == usr.username && pass == usr.password) {
                            _this.invalidLogin = false;
                            localStorage.setItem('token', 'true');
                            localStorage.setItem('role', usr.role);
                            _this.empService.isLogin();
                            _this.onNoClick();
                            _this.router.navigateByUrl('/empList');
                        }
                        else {
                            _this.invalidLogin = true;
                        }
                    });
                };
                return LoginDialog;
            }());
            LoginDialog.ctorParameters = function () { return [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            LoginDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'login-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/login-dialog.html")).default,
                    styles: ["i:hover{ color: blue;}"]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], LoginDialog);
            var LogoutDialog = /** @class */ (function () {
                function LogoutDialog(empService, router, dialogRef, data) {
                    this.empService = empService;
                    this.router = router;
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                LogoutDialog.prototype.ngOnInit = function () { };
                LogoutDialog.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return LogoutDialog;
            }());
            LogoutDialog.ctorParameters = function () { return [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            LogoutDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'logout-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/logout-dialog.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], LogoutDialog);
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media (min-width:768px)  {\r\n    #contents {\r\n        font-size: 30px;\r\n        font-weight: 500;\r\n    }\r\n}\r\n\r\n@media (max-width:768px)  {\r\n    #contents {\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpICB7XHJcbiAgICAjY29udGVudHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkgIHtcclxuICAgICNjb250ZW50cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/projects/projects.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/projects/projects.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("i:hover {\r\n    color: #17a2ba;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE3YTJiYTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/projects/projects.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/projects/projects.component.ts ***!
          \************************************************/
        /*! exports provided: ProjectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () { return ProjectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/employee.service */ "./src/app/shared/employee.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ProjectsComponent = /** @class */ (function () {
                function ProjectsComponent(empService, toastr) {
                    this.empService = empService;
                    this.toastr = toastr;
                    this.projects = [];
                    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        technologies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    this.getProjects();
                };
                ProjectsComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ProjectsComponent.prototype.addProject = function () {
                    this.label = "Create";
                    this.projectId = "";
                    this.formGroup.reset();
                };
                ProjectsComponent.prototype.onSubmit = function () {
                    console.log(this.label);
                    if (this.label == "Update") {
                        this.updateProject(this.formGroup.value);
                    }
                    else {
                        this.createProject();
                    }
                };
                ProjectsComponent.prototype.createProject = function () {
                    this.empService.addProject(this.formGroup.value);
                    this.closeModal.nativeElement.click();
                    this.toastr.success("Project Created!");
                };
                ProjectsComponent.prototype.editProject = function (project) {
                    this.formGroup.reset();
                    this.label = "Update";
                    this.projectId = project.id;
                    this.formGroup.setValue({
                        name: project.name,
                        description: project.description,
                        technologies: project.technologies,
                        client: project.client,
                        location: project.location
                    });
                };
                ProjectsComponent.prototype.getProjects = function () {
                    var _this = this;
                    this.empService.getProjects().subscribe(function (data) {
                        _this.projects = data.map(function (project) {
                            return Object.assign({ id: project.payload.doc.id, projectId: Number(project.payload.newIndex) + 1 }, project.payload.doc.data());
                        });
                    });
                };
                ProjectsComponent.prototype.updateProject = function (project) {
                    project.id = this.projectId;
                    this.empService.updateProject(project);
                    this.closeModal.nativeElement.click();
                    this.toastr.success("Project Updated!");
                };
                ProjectsComponent.prototype.deleteProject = function (projectId) {
                    this.empService.deleteProject(projectId);
                    this.toastr.info('Project Deleted');
                };
                return ProjectsComponent;
            }());
            ProjectsComponent.ctorParameters = function () { return [
                { type: _shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeModal', { static: false })
            ], ProjectsComponent.prototype, "closeModal", void 0);
            ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
                })
            ], ProjectsComponent);
            /***/ 
        }),
        /***/ "./src/app/search-name.pipe.ts": 
        /*!*************************************!*\
          !*** ./src/app/search-name.pipe.ts ***!
          \*************************************/
        /*! exports provided: SearchNamePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNamePipe", function () { return SearchNamePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SearchNamePipe = /** @class */ (function () {
                function SearchNamePipe() {
                }
                SearchNamePipe.prototype.transform = function (value, args) {
                    if (!args) {
                        return value;
                    }
                    else {
                        args = args.trim().toLowerCase();
                    }
                    var filterData = [];
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var emp = value_1[_i];
                        var name = emp.firstName + ' ' + emp.lastName + ' ' + emp.designation;
                        if (name.toLowerCase().includes(args)) {
                            filterData.push(emp);
                        }
                    }
                    return filterData;
                };
                return SearchNamePipe;
            }());
            SearchNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'searchName'
                })
            ], SearchNamePipe);
            /***/ 
        }),
        /***/ "./src/app/shared/employee.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/shared/employee.service.ts ***!
          \********************************************/
        /*! exports provided: EmployeeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function () { return EmployeeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            var EmployeeService = /** @class */ (function () {
                function EmployeeService(firestore, db) {
                    this.firestore = firestore;
                    this.db = db;
                }
                EmployeeService.prototype.getEmployeeData = function () {
                    // return this.empData;
                    // return this.firestore.collection('EmployeeDB').valueChanges(); // will return data but not id
                    // FETCH DATA ORDER BY FIELD "address"
                    // let data = this.firestore.collection('EmployeeDB').ref.orderBy('address').onSnapshot(data => {
                    //   data.forEach(item => {
                    //     console.log(item.data())
                    //   })
                    // })
                    // FETCH DATA WHERE FIELD NAME "firstName" = "Akshay"
                    // let data = this.firestore.collection('EmployeeDB').ref.where('firstName', '==' ,'Akshay').onSnapshot(data => {
                    //   data.forEach(item => {
                    //     console.log(item.data())
                    //   })
                    // })  
                    return this.firestore.collection('EmployeeDB', function (ref) { return ref.orderBy('firstName', 'asc'); }).snapshotChanges();
                };
                EmployeeService.prototype.addEmployee = function (emp) {
                    // this.empData.push(emp);
                    this.firestore.collection('EmployeeDB').add(emp).then(function (ref) {
                        ref.set({ id: ref.id }, { merge: true });
                    });
                };
                EmployeeService.prototype.updateEmployee = function (emp) {
                    this.firestore.doc('EmployeeDB/' + emp.id).update(emp);
                };
                EmployeeService.prototype.deleteEmployee = function (id) {
                    this.firestore.doc('EmployeeDB/' + id).delete();
                };
                EmployeeService.prototype.getEmployeeById = function (id) {
                    return this.firestore.collection('EmployeeDB').doc(id).snapshotChanges();
                };
                EmployeeService.prototype.getUsers = function () {
                    return this.firestore.collection("users").snapshotChanges();
                };
                EmployeeService.prototype.isLogin = function () {
                    if (localStorage.getItem('token')) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                EmployeeService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                };
                EmployeeService.prototype.addProject = function (project) {
                    this.firestore.collection('Projects').add(project);
                };
                EmployeeService.prototype.getProjects = function () {
                    return this.firestore.collection('Projects').snapshotChanges();
                };
                EmployeeService.prototype.updateProject = function (projectData) {
                    this.firestore.doc('Projects/' + projectData.id).update(projectData);
                };
                EmployeeService.prototype.deleteProject = function (projectId) {
                    this.firestore.doc('Projects/' + projectId).delete();
                };
                return EmployeeService;
            }());
            EmployeeService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
            ]; };
            EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmployeeService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: "AIzaSyAmfqkM6TM2Zeb1sG29jhsVmUtRdOS6F_w",
                    authDomain: "employeefirebase-7c2bc.firebaseapp.com",
                    databaseURL: "https://employeefirebase-7c2bc.firebaseio.com",
                    projectId: "employeefirebase-7c2bc",
                    storageBucket: "employeefirebase-7c2bc.appspot.com",
                    messagingSenderId: "386023579899",
                    appId: "1:386023579899:web:4b7123e6a52e2f4a29505e",
                    measurementId: "G-GPJQNVLNM9"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Workspace\Angular\textassignment\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map