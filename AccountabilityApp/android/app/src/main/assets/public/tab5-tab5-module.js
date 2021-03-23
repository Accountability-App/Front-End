(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "BR60":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popover/profile-popover.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-input placeholder=\"New Tag\"></ion-input>\n  <ion-input placeholder=\"New Description\"></ion-input>\n  <ion-button expand=\"block\" color=\"dark\">Profile Pic</ion-button>\n  <ion-button expand=\"block\" color=\"dark\">Background Pic</ion-button>\n  <ion-input placeholder=\"New Username\"></ion-input>\n  <ion-input placeholder=\"New Password\"></ion-input>\n  <ion-button expand=\"block\" (click)=\"save($event)\">Save</ion-button>\n</ion-content>\n\n<!-- Something like this for picture upload maybe\n  <input type=\"file\" (change)=\"loadImageFromDevice($event)\" id=\"file-input\"\n    accept=\"image/png, image/jpeg\">  -->\n");

/***/ }),

/***/ "FFfc":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".default-profile-background {\n  box-sizing: border-box;\n  width: 100%;\n  height: 250px;\n  padding: 3px;\n  background-image: url(\"https://images.wallpaperscraft.com/image/river_bridge_stones_200237_1280x720.jpg\");\n  border: 1px solid black;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n.current-tasks-label {\n  font-size: 2.3em;\n}\n\n.username-label {\n  font-size: 1.4em;\n}\n\nion-item {\n  --ion-background-color:#7FB069;\n}\n\nion-item:hover {\n  --ion-background-color:#537345;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5R0FBQTtFQUNBLHVCQUFBO0VBRUEsMEJBQUE7RUFDQSw0QkFBQTtBQURBOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBT0E7RUFDRyw4QkFBQTtBQUpIOztBQU9BO0VBQ0csOEJBQUE7QUFKSCIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRlZmF1bHQtcHJvZmlsZS1iYWNrZ3JvdW5kIHtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMjUwcHg7XG5wYWRkaW5nOiAzcHg7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy53YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL3JpdmVyX2JyaWRnZV9zdG9uZXNfMjAwMjM3XzEyODB4NzIwLmpwZ1wiKTtcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG5iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vL2JhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuXG4uY3VycmVudC10YXNrcy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG59XG5cbi51c2VybmFtZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cblxuaW9uLWl0ZW17XG4gICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM3RkIwNjk7XG59XG5cbmlvbi1pdGVtOmhvdmVye1xuICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTM3MzQ1O1xufVxuIl19 */");

/***/ }),

/***/ "Ki12":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "Tlso");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"],
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "Sa0/":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "Tlso");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile-popover/profile-popover.component */ "Ur3O");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab5-routing.module */ "Ki12");










let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"] }]),
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_9__["Tab5PageRoutingModule"],
        ],
        entryComponents: [_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePopoverComponent"]],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"], _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_8__["ProfilePopoverComponent"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "Tlso":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab5.page.html */ "pXFx");
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5.page.scss */ "FFfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-popover/profile-popover.component */ "Ur3O");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "cI/l");







let Tab5Page = class Tab5Page {
    constructor(popoverController, _http) {
        this.popoverController = popoverController;
        this._http = _http;
    }
    //Get all data initially
    ngOnInit() {
        this._http.getData().subscribe(data => {
            this.profileData = data;
            console.log(this.profileData);
        });
        this._http.getUsername().subscribe(data => {
            this.username = data;
        });
        this._http.getFirstName().subscribe(data => {
            this.firstName = data;
        });
        this._http.getTag().subscribe(data => {
            this.tag = data;
        });
        this._http.getDescription().subscribe(data => {
            this.description = data;
        });
    }
    presentPopover(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePopoverComponent"]
            });
            return yield popover.present();
        });
    }
};
Tab5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }
];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab5Page);



/***/ }),

/***/ "Ur3O":
/*!**************************************************************!*\
  !*** ./src/app/profile-popover/profile-popover.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePopoverComponent", function() { return ProfilePopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_popover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-popover.component.html */ "BR60");
/* harmony import */ var _profile_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-popover.component.scss */ "h0Gs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ProfilePopoverComponent = class ProfilePopoverComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    close() {
        this.popoverController.dismiss();
    }
    save(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Saving...");
            //TODO: write code that saves data to database
            console.log("Done.");
            this.close();
        });
    }
};
ProfilePopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
ProfilePopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-popover',
        template: _raw_loader_profile_popover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePopoverComponent);



/***/ }),

/***/ "cI/l":
/*!**************************************!*\
  !*** ./src/app/tab5/http.service.ts ***!
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
        return this.http.get("assets/sample.json");
    }
    //Need to get and retrun specific data from file for each function
    getUsername() {
        return this.http.get("assets/sample.json");
    }
    getFirstName() {
        return this.http.get("assets/sample.json");
    }
    getTag() {
        return this.http.get("assets/sample.json");
    }
    getDescription() {
        return this.http.get("assets/sample.json");
    }
    getCurrentTasks() {
        return this.http.get("assets/sample.json");
    }
    getProfilePic() {
        return this.http.get("assets/sample.json");
    }
    getBackPic() {
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

/***/ "h0Gs":
/*!****************************************************************!*\
  !*** ./src/app/profile-popover/profile-popover.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pXFx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\">\n      <!-- <ion-button>Edit Profile</ion-button> -->\n      <ion-button expand=\"block\" (click)=\"presentPopover($event)\">Edit Profile</ion-button>\n    </ion-buttons>\n    <ion-title>My Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-card>\n    <div class=\"item default-profile-background\"></div>\n\n    <ion-card-content body style=\"background-color:#FFFCD6\">\n      <ion-label class=\"username-label\" color=\"dark\" slot=\"start\">Jacob (Username) @ChickenNuggs</ion-label>\n      <ion-avatar slot=\"start\">\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n      </ion-avatar>\n      My name is Jacob and I like doing things and stuff but\n      I can't always get them done on time. So I use this app\n      to help me stay on top of things. Thanks in advance for the help :)\n    </ion-card-content>\n    <!-- List of Text Items -->\n    <ion-list body style=\"background-color:#7FB069\">\n      <ion-label stacked class=\"current-tasks-label\" color=\"dark\" TextDecorations=\"Underline\">Current Tasks</ion-label>\n      <ion-item>\n          <div class=\"ion-text-start\">\n            <h3>Write This Stuff:</h3>\n            Yeah so I signed up for this class so ig I gotta write this stuff and make this page otherwise\n            I will fail and will let my team down and I'm not about that life.\n          </div>\n      </ion-item>\n      <ion-item>\n          <div class=\"ion-text-start\">\n            <h3>Task Functionality:</h3>\n            When you click/tap a task, maybe it should show more info\n          </div>\n      </ion-item>\n      <ion-item>\n          <div class=\"ion-text-start\">\n            <h3>DO WE EVEN NEED THIS ANYMORE?:</h3>\n            I'm not entirely sure if we are even going to put current tasks here \n          </div>\n      </ion-item>\n      <ion-item>\n          <div class=\"ion-text-start\">\n            <h3>Task 4:</h3>\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n            This is an example of a long description for a task.\n          </div>\n      </ion-item>\n      <ion-item>\n          <div class=\"ion-text-start\">\n            <h3>Wake up on Thursday:</h3>\n            On Thursday, March 11th, wake up at 8:00 AM\n          </div>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n  <!-- Me trying to get file upload and stuff to work\n  <input type=\"file\" (change)=\"loadImageFromDevice($event)\" id=\"file-input\"\n    accept=\"image/png, image/jpeg\">  -->\n\n  <!-- Me trying to get file upload and stuff to work\n  <input type=\"file\"  accept=\"image/*\" name=\"image\" id=\"file\"  onchange=\"loadFile(event)\" style=\"display: none;\">\n  <label for=\"file\" style=\"cursor: pointer;\">Upload Image</label>\n  <img id=\"output\" width=\"200\" />\n\n  <script>\n  var loadFile = function(event) {\n\t  var image = document.getElementById('output');\n\t  image.src = URL.createObjectURL(event.target.files[0]);\n  };\n  </script>\n  -->\n");

/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map