(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "18Wu":
/*!**************************************!*\
  !*** ./src/app/tab1/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get("assets/profileSample.json");
    }
    getTaskData() {
        return this.http.get("assets/taskSample.json");
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>My Tasks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"profileData; else noProfileData\">\n    <ion-item>Profile Id is {{ profileData[0].profile_id }}</ion-item>\n  </div>\n  <ng-template #noProfileData>\n    <ion-item>Profile Id is currently not available.</ion-item>\n  </ng-template>\n  <div *ngIf=\"taskData; else noTaskData\">\n    <div *ngIf=\"profileData; else noProfileData\">\n      <span *ngFor=\"let curr_task of taskData\">\n        <span *ngIf=\"profileData[0].profile_id == curr_task.profile_id\">\n            <ion-item-divider>\n              <h3>{{ curr_task.title_of_task }}</h3>\n            </ion-item-divider>\n            <ion-card><ion-card-content>\n              Description: {{ curr_task.description_of_task }}\n              <br>\n              Time: {{ curr_task.time_of_task }}\n              <br>\n              Date: {{ curr_task.date_of_task }}\n              <br>\n            <span *ngFor=\"let curr_prof of profileData\">\n              <span *ngIf=\"curr_task.helper_id == curr_prof.profile_id\">\n                  Helper: {{ curr_prof.username }}\n              </span>\n            </span>\n            <br>\n            <ion-button size=\"small\" color=\"danger\" href=\"#\">\n              <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n              Delete Task\n            </ion-button>\n            </ion-card-content></ion-card>\n        </span>\n      </span>\n    </div>\n  </div>\n\n</ion-content>\n\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "18Wu");




//import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';
//import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

let Tab1Page = class Tab1Page {
    constructor(_http) {
        this._http = _http;
    }
    ngOnInit() {
        this._http.getTaskData().subscribe(t_data => {
            this.taskData = t_data;
            console.log(this.taskData);
        });
        this._http.getData().subscribe(p_data => {
            this.profileData = p_data;
            console.log(this.profileData);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --ion-background-color:#7FB069;\n}\n\nion-item-divider {\n  --ion-background-color:#006600;\n  --ion-text-color: #b3ffb3;\n}\n\nion-item-divider:hover {\n  --ion-background-color:#537345;\n}\n\nion-toolbar {\n  --ion-background-color:#313131;\n  --ion-text-color: #7FB069;\n}\n\nion-card {\n  --ion-background-color:#313131;\n}\n\nion-content {\n  --ion-background-color:#7FB069;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWl0ZW17XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojN0ZCMDY5O1xufVxuICAgIFxuaW9uLWl0ZW0tZGl2aWRlcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMDY2MDA7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2IzZmZiMztcbn1cblxuaW9uLWl0ZW0tZGl2aWRlcjpob3ZlcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1MzczNDU7XG59XG5cbmlvbi10b29sYmFye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzMxMzEzMTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjN0ZCMDY5O1xufVxuaW9uLWNhcmR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzEzMTMxO1xuXG59XG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM3RkIwNjk7XG59Il19 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
        ],
        //entryComponents: [ProfilePopoverComponent],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]] //, ProfilePopoverComponent]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map