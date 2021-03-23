(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "1goR":
/*!**************************************************************!*\
  !*** ./src/app/buddies-popover/buddies-popover.component.ts ***!
  \**************************************************************/
/*! exports provided: BuddiesPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddiesPopoverComponent", function() { return BuddiesPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buddies_popover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buddies-popover.component.html */ "lXlr");
/* harmony import */ var _buddies_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buddies-popover.component.scss */ "xHpf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let BuddiesPopoverComponent = class BuddiesPopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    close() {
        this.popoverController.dismiss();
    }
};
BuddiesPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
BuddiesPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buddies-popover',
        template: _raw_loader_buddies_popover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buddies_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuddiesPopoverComponent);



/***/ }),

/***/ "4bX0":
/*!***********************************************!*\
  !*** ./src/app/buddies-modal/http.service.ts ***!
  \***********************************************/
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
    getRequests() {
        return this.http.get("assets/sample.json");
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

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buddies_modal_buddies_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buddies-modal/buddies-modal.component */ "Puef");
/* harmony import */ var _buddies_popover_buddies_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buddies-popover/buddies-popover.component */ "1goR");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "Mv2f");








let Tab2Page = class Tab2Page {
    constructor(popoverController, modalController, _http) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this._http = _http;
    }
    ngOnInit() {
        this._http.getBuddies().subscribe(data => {
            this.buddies = data;
            console.log(this.buddies);
        });
    }
    presentPopover(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _buddies_popover_buddies_popover_component__WEBPACK_IMPORTED_MODULE_6__["BuddiesPopoverComponent"]
            });
            return yield popover.present();
        });
    }
    presentModal(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _buddies_modal_buddies_modal_component__WEBPACK_IMPORTED_MODULE_5__["BuddiesModalComponent"]
            });
            return yield modal.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "Mv2f":
/*!**************************************!*\
  !*** ./src/app/tab2/http.service.ts ***!
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
    getBuddies() {
        return this.http.get("assets/sample.json");
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

/***/ "Puef":
/*!**********************************************************!*\
  !*** ./src/app/buddies-modal/buddies-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: BuddiesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuddiesModalComponent", function() { return BuddiesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buddies_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buddies-modal.component.html */ "pdcB");
/* harmony import */ var _buddies_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buddies-modal.component.scss */ "bZ44");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "4bX0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let BuddiesModalComponent = class BuddiesModalComponent {
    constructor(modalController, _http) {
        this.modalController = modalController;
        this._http = _http;
    }
    ngOnInit() {
        this._http.getRequests().subscribe(data => {
            this.requests = data;
            console.log(this.requests);
        });
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    accept(username) {
        // TODO: add to buddies list (database)
        this.removeRequest(username);
    }
    removeRequest(request) {
        // TODO: remove from requests (database)
        let index = this.requests.map(function (rq) { return rq.username; }).indexOf(request);
        if (index > -1) {
            this.requests.splice(index, 1);
        }
    }
};
BuddiesModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
BuddiesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buddies-modal',
        template: _raw_loader_buddies_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buddies_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuddiesModalComponent);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _buddies_popover_buddies_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buddies-popover/buddies-popover.component */ "1goR");
/* harmony import */ var _buddies_modal_buddies_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../buddies-modal/buddies-modal.component */ "Puef");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_9__["Tab2PageRoutingModule"],
        ],
        entryComponents: [_buddies_popover_buddies_popover_component__WEBPACK_IMPORTED_MODULE_7__["BuddiesPopoverComponent"], _buddies_modal_buddies_modal_component__WEBPACK_IMPORTED_MODULE_8__["BuddiesModalComponent"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _buddies_popover_buddies_popover_component__WEBPACK_IMPORTED_MODULE_7__["BuddiesPopoverComponent"], _buddies_modal_buddies_modal_component__WEBPACK_IMPORTED_MODULE_8__["BuddiesModalComponent"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "bZ44":
/*!************************************************************!*\
  !*** ./src/app/buddies-modal/buddies-modal.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRkaWVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n\n</head>\n<body>\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>My Buddies</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"presentPopover($event)\">Search</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" (click)=\"presentModal()\">Requests</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"buddies; else noBuddies\">\n      <ion-list>\n        <ion-item *ngFor=\"let buddy of buddies\">\n          <ion-avatar slot=\"start\">\n            <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{ buddy.username }}</h3>\n            <p>{{ buddy.firstname }} {{ buddy.lastname }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <ng-template #noBuddies>\n      <div class=\"ion-text-center ion-margin-top\">\n        <ion-note style=\"text-align: center;\">You have no buddies. Add some by searching!</ion-note>\n      </div>\n    </ng-template>\n\n  </ion-content>\n</body>\n\n");

/***/ }),

/***/ "lXlr":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buddies-popover/buddies-popover.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-input placeholder=\"Username\"></ion-input>\n  <ion-button expand=\"block\">Search</ion-button>\n</ion-content>");

/***/ }),

/***/ "pdcB":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buddies-modal/buddies-modal.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Buddy Requests</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"dismiss()\"><ion-icon name=\"close\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"requests; else noRequests\">\n    <ion-list *ngIf=\"requests\">\n      <ion-item *ngFor=\"let request of requests\">\n        <ion-avatar slot=\"start\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{ request.username }}</h3>\n          <p>{{ request.firstname }} {{ request.lastname }}</p>\n        </ion-label>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"success\" (click)=\"accept(request.username)\"><ion-icon name=\"checkmark\"></ion-icon></ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"danger\" (click)=\"removeRequest(request.username)\"><ion-icon name=\"close\"></ion-icon></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noRequests>\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-note style=\"text-align: center;\">You have no buddy requests.</ion-note>\n    </div>\n  </ng-template>\n</ion-content>");

/***/ }),

/***/ "xHpf":
/*!****************************************************************!*\
  !*** ./src/app/buddies-popover/buddies-popover.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRkaWVzLXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map