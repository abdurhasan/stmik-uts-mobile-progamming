webpackJsonp([3],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutentikasiPageModule", function() { return AutentikasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autentikasi__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutentikasiPageModule = /** @class */ (function () {
    function AutentikasiPageModule() {
    }
    AutentikasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__autentikasi__["a" /* AutentikasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autentikasi__["a" /* AutentikasiPage */]),
            ],
        })
    ], AutentikasiPageModule);
    return AutentikasiPageModule;
}());

//# sourceMappingURL=autentikasi.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutentikasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_sdk_services_custom_User__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_Account__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {AlertController } from 'ionic-angular';

/**
 * Generated class for the AutentikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AutentikasiPage = /** @class */ (function () {
    function AutentikasiPage(navCtrl, navParams, accountApi, 
        // private alertCtrl: AlertController,
        userApi, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountApi = accountApi;
        this.userApi = userApi;
        this.storage = storage;
        this.credential = {
            email: '',
            password: '',
        };
        this.verifyPass = '';
        this.currentPage = "SignIn";
    }
    AutentikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutentikasiPage');
    };
    AutentikasiPage.prototype.toHome = function () {
        this.navCtrl.push("HomePage");
    };
    AutentikasiPage.prototype.signUp = function () {
        this.navCtrl.push("HomePage");
        // this.accountApi.registerAndCreate(this.credential.email, this.credential.password)
        //   .subscribe(
        //     data => {
        //       if (data.accountId) {
        //         const alert = this.alertCtrl.create({
        //           title: 'Success',
        //           subTitle: 'You can Login now',
        //           buttons: ['Dismiss']
        //         })
        //         alert.present()
        //       } else {
        //         const alert = this.alertCtrl.create({
        //           title: 'Error',
        //           subTitle: 'Something Went Wrong!',
        //           buttons: ['Dismiss']
        //         })
        //         alert.present()
        //       }
        //     },
        //     err => {
        //     })
    };
    AutentikasiPage.prototype.signIn = function () {
        this.navCtrl.push("HomePage");
        // this.userApi.login(this.credential)
        //   .subscribe(
        //     data => {
        //       this.storage.set('dataAuth', data)
        //       console.log(data)
        //       this.navCtrl.push('HomePage')
        //     }, err => {
        //       const alert = this.alertCtrl.create({
        //         title: 'Error',
        //         subTitle: 'Login failed',
        //         buttons: ['Dismiss']
        //       })
        //       alert.present()
        //       console.log(err)
        //     })
    };
    AutentikasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-autentikasi',template:/*ion-inline-start:"/Users/achan/Desktop/Training 09 May 19-1/atm/src/pages/autentikasi/autentikasi.html"*/'<!--\n  Generated template for the AutentikasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>autentikasi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="container">\n    <div padding>\n      <ion-segment [(ngModel)]="currentPage">\n        <ion-segment-button value="SignIn">\n          Sign In\n        </ion-segment-button>\n        <ion-segment-button value="SignUp">\n          Sign Up\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="currentPage">\n      <div *ngSwitchCase="\'SignUp\'">\n        <ion-input placeholder="Email" [(ngModel)]="credential.email"></ion-input>\n        <ion-input placeholder="Password" [(ngModel)]="credential.password"></ion-input>\n        <ion-input placeholder="Re-Type Password" [(ngModel)]="verifyPass"></ion-input>\n        <button ion-button (click)="signUp()">Continue</button>\n      </div>\n\n      <div *ngSwitchCase="\'SignIn\'">\n        <ion-input placeholder="Email" [(ngModel)]="credential.email"></ion-input>\n        <ion-input placeholder="Password" [(ngModel)]="credential.password"></ion-input>\n        <button ion-button (click)="signIn()" >Sign In</button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/achan/Desktop/Training 09 May 19-1/atm/src/pages/autentikasi/autentikasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_Account__["a" /* AccountApi */],
            __WEBPACK_IMPORTED_MODULE_0__shared_sdk_services_custom_User__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AutentikasiPage);
    return AutentikasiPage;
}());

//# sourceMappingURL=autentikasi.js.map

/***/ })

});
//# sourceMappingURL=3.js.map