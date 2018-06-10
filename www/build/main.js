webpackJsonp([19],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Events } from 'ionic-angular';
// import config from '../app/config';
var UtilsProvider = /** @class */ (function () {
    function UtilsProvider() {
    }
    UtilsProvider.prototype.numberFormat = function (v, n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return v.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
    };
    UtilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilsProvider);
    return UtilsProvider;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_service_select_service__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordConfirming(c) {
    if (!c.parent || !c)
        return;
    var pwd = c.parent.get('password');
    var cpwd = c.parent.get('repassword');
    if (!pwd || !cpwd)
        return;
    if (pwd.value !== cpwd.value) {
        return { invalid: true };
    }
}
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            password: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)
                ]],
            repassword: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    passwordConfirming
                ]]
        });
        this.value = this.navParams.data;
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        for (var k in this.form.controls) {
            var control = this.form.controls[k];
            if (this.value[k]) {
                control.setValue(this.value[k]);
            }
        }
    };
    PasswordPage.prototype.submit = function () {
        var controls = this.form.controls;
        if (!this.form.valid) {
            var message = { title: '', subtitle: '' };
            if (controls['repassword'].hasError('invalid')) {
                message.title = 'Senhas não coincidem';
                message.subtitle = 'Por favor, verifique as diferenças entre as senhas digitadas';
            }
            else {
                message.title = 'Preencha os campos de senha e confirmação de senha';
                message.subtitle = '';
            }
            var alert_1 = this.alertCtrl.create({
                title: message.title,
                subTitle: message.subtitle,
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () { }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        // Apenas depois que o cadastro for feito com sucesso
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_service_select_service__["a" /* SelectServicePage */], Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))));
    };
    PasswordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/export/uberservice/app/src/pages/password/password.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n    </a>\n    <div class="content">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n    <!-- <a href="00-menu.html" alt="Menu" class="button right">\n        <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd"/></svg>\n    </a> -->\n  </nav>\n  <div class="signUp">\n    <p>\n      Você não tem cadastro, <br />\n      crie grátis sua conta!\n    </p>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Defina uma senha</span>\n          <input formControlName="password" type="password" placeholder="Pelo menos 6 caracteres" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Repita a senha</span>\n          <input formControlName="repassword" type="password" placeholder="Confirme a senha" />\n        </div>\n      </label>\n    </form>\n    <a (click)="submit()" class="button sticky">\n      Criar conta →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectServicePage = /** @class */ (function () {
    function SelectServicePage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SelectServicePage.prototype.ionViewDidLoad = function () {
    };
    SelectServicePage.prototype.navigateToServices = function (param) {
        console.log(param);
    };
    SelectServicePage.prototype.navigateToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    SelectServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-service',template:/*ion-inline-start:"/export/uberservice/app/src/pages/select-service/select-service.html"*/'<ion-content class="bgGray">\n  <nav>\n    <!-- <a href="" alt="Return" class="button left">\n        <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n    </a> -->\n    <div class="content noLeft">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n    <a (click)="navigateToMenu()" alt="Menu" class="button right">\n      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd"/></svg>\n    </a>\n  </nav>\n  <div class="serviceType">\n    <p>\n      Conecte-se para poder encontrar<br />\n      prestadores de serviços próximos a você!\n    </p>\n    <a (click)="navigateToServices()" class="card cleaningServices">\n      <span class="content verticallyCenter">\n        <h1>\n          Serviços de<br />\n          Limpeza\n        </h1>\n      </span>\n    </a>\n    <a (click)="navigateToServices(true)" class="card otherServices">\n      <span class="content verticallyCenter">\n        <h1>\n          Outros<br />\n          Serviços\n        </h1>\n      </span>\n    </a>\n    <a (click)="navigateToServices()" class="card hide">\n      <span class="content">\n        <p class="icon">\n            🏢\n        </p>\n        <h2>\n            teste\n        </h2>\n        <p>\n            teste\n        </p>\n      </span>\n    </a>\n    <div class="card hide">\n      <div class="content">\n        <div class="avatar">\n          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="56" />\n        </div>\n        <p class="distance">\n          2,5km de você\n        </p>\n        <h3>\n          João Silva Cardoso\n          <!-- No máximo 16 caracteres -->\n        </h3>\n        <ul class="rate">\n          <li>\n              <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n          </li>\n          <li>\n              <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n          </li>\n          <li>\n              <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n          </li>\n          <li>\n              <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n          </li>\n          <li>\n              <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n          </li>\n          <li>\n              18 avaliações\n          </li>\n        </ul>\n        <p class="info">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam porro nemo quidem incidunt quos labore.\n        </p>\n        <a href="" class="button">\n          teste\n        </a>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/select-service/select-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectServicePage);
    return SelectServicePage;
}());

//# sourceMappingURL=select-service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_profile_provider_profile__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceProviderPage = /** @class */ (function () {
    function ServiceProviderPage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.value = this.navParams.data;
    }
    ServiceProviderPage.prototype.ionViewDidLoad = function () { };
    ServiceProviderPage.prototype.selectProvider = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__provider_profile_provider_profile__["a" /* ProviderProfilePage */], {
            provider: id,
            service_params: this.value
        });
    };
    ServiceProviderPage.prototype.navigateToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    ServiceProviderPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceProviderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-provider',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-provider/service-provider.html"*/'<ion-content class="bgGray">\n  <nav>\n      <a (click)="back()" alt="Return" class="button left">\n          <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n              <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" /> </svg>\n      </a>\n      <div class="content">\n          <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n      </div>\n      <a (click)="navigateToMenu()" alt="Menu" class="button right">\n          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">\n              <path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd" /> </svg>\n      </a>\n  </nav>\n  <div class="serviceProvider">\n      <p> Veja os prestadores de <br />serviço de limpeza: </p>\n      <div class="card">\n          <div class="content">\n              <div class="avatar">\n                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="56" />\n              </div>\n              <p class="distance">\n                  2,5km de você\n              </p>\n              <h3>\n                  João Silva Cardoso\n                  <!-- No máximo 16 caracteres -->\n              </h3>\n              <ul class="rate">\n                  <li>\n                      <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n                  </li>\n                  <li>\n                      <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n                  </li>\n                  <li>\n                      <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n                  </li>\n                  <li>\n                      <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n                  </li>\n                  <li>\n                      <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n                  </li>\n                  <li>\n                      18 avaliações\n                  </li>\n              </ul>\n              <p class="info">\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam porro nemo quidem incidunt quos labore.\n              </p>\n              <a (click)="selectProvider()" class="button">\n                  Contratar por R$80,00\n              </a>\n          </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-provider/service-provider.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ServiceProviderPage);
    return ServiceProviderPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=service-provider.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_provider_service_provider__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceSchedulePage = /** @class */ (function () {
    function ServiceSchedulePage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.value = this.navParams.data;
    }
    ServiceSchedulePage.prototype.ionViewDidLoad = function () { };
    ServiceSchedulePage.prototype.schedule = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_provider_service_provider__["a" /* ServiceProviderPage */], Object.assign(this.value, { schedule: param }));
    };
    ServiceSchedulePage.prototype.navigateToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    ServiceSchedulePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-schedule',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-schedule/service-schedule.html"*/'<ion-content class="bgGray">\n  <nav>\n      <a (click)="back()" alt="Return" class="button left">\n          <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n              <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" /> </svg>\n      </a>\n      <div class="content"> <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" /> </div>\n      <a (click)="navigateToMenu()" alt="Menu" class="button right">\n          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">\n              <path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd" /> </svg>\n      </a>\n  </nav>\n  <div class="serviceSchedule">\n    <p> Para quando você quer o serviço? </p>\n    <a (click)="schedule(\'now\')" class="card">\n      <span class="content verticallyCenter">\n        <p class="icon">\n            ☝️\n        </p>\n        <h2>\n            Agora\n        </h2>\n        <p>\n            ou daqui uma hora\n        </p>\n      </span>\n    </a>\n    <a (click)="schedule(\'today\')" class="card">\n      <span class="content verticallyCenter">\n        <p class="icon">\n            🕑\n        </p>\n        <h2>\n            Hoje\n        </h2>\n        <p>\n            em qualquer horário\n        </p>\n      </span>\n    </a>\n    <a (click)="schedule(\'schedule\')" class="card">\n      <span class="content verticallyCenter">\n        <p class="icon">\n            🗓\n        </p>\n        <h2>\n            Agendar\n        </h2>\n        <p>\n            um dia e horário\n        </p>\n      </span>\n    </a>\n    <a (click)="schedule(\'after\')" class="button tertiary floating">\n      Escolher depois\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-schedule/service-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ServiceSchedulePage);
    return ServiceSchedulePage;
}());

//# sourceMappingURL=service-schedule.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_schedule_service_schedule__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceSettingsPage = /** @class */ (function () {
    function ServiceSettingsPage(navCtrl, navParams, loadingCtrl, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            place_setup: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            place_rooms: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            place_toilets: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.value = this.navParams.data;
    }
    ServiceSettingsPage.prototype.ionViewDidLoad = function () {
        for (var k in this.form.controls) {
            var control = this.form.controls[k];
            if (this.value[k]) {
                control.setValue(this.value[k]);
            }
        }
    };
    ServiceSettingsPage.prototype.submit = function () {
        var controls = this.form.controls;
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Por favor, selecione os detalhes do local',
                subTitle: null,
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () { }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__service_schedule_service_schedule__["a" /* ServiceSchedulePage */], Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))));
    };
    ServiceSettingsPage.prototype.navigateToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    ServiceSettingsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-settings',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-settings/service-settings.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" />\n      </svg>\n    </a>\n    <div class="content"> <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" /> </div>\n    <a (click)="navigateToMenu()" alt="Menu" class="button right">\n      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">\n        <path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd" />\n      </svg>\n    </a>\n  </nav>\n  <div class="serviceSettings">\n    <p>\n      Como é o local<br />\n      que será feito o serviço?\n    </p>\n    <form [formGroup]="form">\n      <div class="placeSetup">\n        <p>\n          <input formControlName="place_setup" type="radio" id="house" [value]="\'house\'">\n          <label for="house"><span>🏠</span>Casa</label>\n        </p>\n        <p>\n          <input formControlName="place_setup" type="radio" id="apartment" [value]="\'apartment\'">\n          <label for="apartment"><span>🏢</span>Apto.</label>\n        </p>\n        <p>\n          <input formControlName="place_setup" type="radio" id="business" [value]="\'business\'">\n          <label for="business"><span>🏭</span>Empresa</label>\n        </p>\n      </div>\n      <p>Quantos quartos?</p>\n      <div class="horizontalScroll">\n        <div class="horizontalContent">\n          <p>\n            <input formControlName="place_rooms"  value="1" type="radio" id="place_rooms_1">\n            <label for="place_rooms_1">1</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="2" type="radio" id="place_rooms_2">\n            <label for="place_rooms_2">2</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="3" type="radio" id="place_rooms_3">\n            <label for="place_rooms_3">3</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="4" type="radio" id="place_rooms_4">\n            <label for="place_rooms_4">4</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="5" type="radio" id="place_rooms_5">\n            <label for="place_rooms_5">5</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="6" type="radio" id="place_rooms_6">\n            <label for="place_rooms_6">6</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="7" type="radio" id="place_rooms_7">\n            <label for="place_rooms_7">7</label>\n          </p>\n          <p>\n            <input formControlName="place_rooms"  value="8" type="radio" id="place_rooms_8">\n            <label for="place_rooms_8">8</label>\n          </p>\n        </div>\n      </div>\n      <p>Quantos banheiros?</p>\n      <div class="horizontalScroll">\n        <div class="horizontalContent">\n          <p>\n            <input formControlName="place_toilets" type="radio" value="1" id="place_toilets_1">\n            <label for="place_toilets_1">1</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="2" id="place_toilets_2">\n            <label for="place_toilets_2">2</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="3" id="place_toilets_3">\n            <label for="place_toilets_3">3</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="4" id="place_toilets_4">\n            <label for="place_toilets_4">4</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="5" id="place_toilets_5">\n            <label for="place_toilets_5">5</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="6" id="place_toilets_6">\n            <label for="place_toilets_6">6</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="7" id="place_toilets_7">\n            <label for="place_toilets_7">7</label>\n          </p>\n          <p>\n            <input formControlName="place_toilets" type="radio" value="8" id="place_toilets_8">\n            <label for="place_toilets_8">8</label>\n          </p>\n        </div>\n      </div>\n    </form>\n    <a (click)="submit()" class="button sticky">\n      Avançar →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-settings/service-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ServiceSettingsPage);
    return ServiceSettingsPage;
}());

//# sourceMappingURL=service-settings.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            name: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]],
            email: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email
                ]]
        });
        this.value = this.navParams.data;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        for (var k in this.form.controls) {
            var control = this.form.controls[k];
            if (this.value[k]) {
                control.setValue(this.value[k]);
            }
        }
    };
    SignupPage.prototype.submit = function () {
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: !this.form.get('name').valid ? 'Por favor, insira seu nome' : 'Por favor, insira um e-mail válido',
                subTitle: '',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () { }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__password_password__["a" /* PasswordPage */], Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))));
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/export/uberservice/app/src/pages/signup/signup.html"*/'<ion-content class="bgGray">\n  <nav>\n      <a (click)="back()" alt="Return" class="button left">\n          <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n      </a>\n      <div class="content">\n          <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n      </div>\n      <!-- <a href="00-menu.html" alt="Menu" class="button right">\n          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd"/></svg>\n      </a> -->\n  </nav>\n  <div class="signUp">\n    <p>\n        Você não tem cadastro, <br />\n        crie grátis sua conta!\n    </p>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Nome</span>\n          <input type="text" formControlName="name" placeholder="Maria Silva" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>E-mail</span>\n          <input type="email" formControlName="email" placeholder="maria.silva@email.com" />\n        </div>\n      </label>\n    </form>\n    <a (click)="submit()" class="button sticky">\n        Avançar →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acquired-services/acquired-services.module": [
		894,
		18
	],
	"../pages/after-hire/after-hire.module": [
		895,
		17
	],
	"../pages/login/login.module": [
		896,
		16
	],
	"../pages/menu/menu.module": [
		897,
		15
	],
	"../pages/password/password.module": [
		898,
		14
	],
	"../pages/provider-place/provider-place.module": [
		899,
		13
	],
	"../pages/provider-profile/provider-profile.module": [
		900,
		12
	],
	"../pages/provider-schedule/provider-schedule.module": [
		901,
		11
	],
	"../pages/select-service/select-service.module": [
		902,
		10
	],
	"../pages/service-cancel/service-cancel.module": [
		903,
		9
	],
	"../pages/service-hired-profile/service-hired-profile.module": [
		904,
		8
	],
	"../pages/service-hired/service-hired.module": [
		905,
		7
	],
	"../pages/service-provider-rate/service-provider-rate.module": [
		906,
		6
	],
	"../pages/service-provider/service-provider.module": [
		907,
		5
	],
	"../pages/service-schedule/service-schedule.module": [
		908,
		4
	],
	"../pages/service-settings/service-settings.module": [
		909,
		3
	],
	"../pages/service-summary/service-summary.module": [
		910,
		2
	],
	"../pages/signin/signin.module": [
		911,
		1
	],
	"../pages/signup/signup.module": [
		912,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    AuthServiceProvider.prototype.getDefaultHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    AuthServiceProvider.prototype.authenticate = function (data, connection) {
        this.apiHost = "http://" + connection.host + ":" + connection.port;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return this.http.post(this.apiHost + "/auth/login", JSON.stringify(data), options)
            .map(function (res) { return res.json(); });
    };
    AuthServiceProvider.prototype.check = function (session, connection) {
        this.apiHost = "http://" + connection.host + ":" + connection.port;
        var headers = this.getDefaultHeaders();
        headers.append('session-id', session);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get(this.apiHost + "/auth/check", options).map(function (res) { return res.json(); });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_service_state_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plant_service_plant_service__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesServiceProvider = /** @class */ (function () {
    function ServicesServiceProvider(stateService, plantService) {
        this.stateService = stateService;
        this.plantService = plantService;
    }
    ServicesServiceProvider.prototype.start = function () {
        this.stateService.start();
        this.plantService.start();
    };
    ServicesServiceProvider.prototype.getService = function (serviceName) {
        try {
            return this[serviceName];
        }
        catch (e) {
            throw e;
        }
    };
    ServicesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__state_service_state_service__["a" /* StateServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__plant_service_plant_service__["a" /* PlantServiceProvider */]])
    ], ServicesServiceProvider);
    return ServicesServiceProvider;
}());

//# sourceMappingURL=services-service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_sensors__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_features__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_hardware__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var StateServiceProvider = /** @class */ (function () {
    function StateServiceProvider(http, events, utils) {
        this.http = http;
        this.events = events;
        this.utils = utils;
        this.pollings = {};
        this.sensors = new __WEBPACK_IMPORTED_MODULE_7__shared_models_sensors__["a" /* Sensors */]();
        this.features = new __WEBPACK_IMPORTED_MODULE_8__shared_models_features__["a" /* Features */]();
        this.hardware = new __WEBPACK_IMPORTED_MODULE_9__shared_models_hardware__["a" /* Hardware */]();
        this.services = [{
                service: 'getFeatureData',
                channel: 'feature',
                interval: 3000,
                default: Object.assign({}, this.features)
            }, {
                service: 'getHardwareData',
                channel: 'hardware',
                interval: 3000,
                default: Object.assign({}, this.hardware)
            }, {
                service: 'getSensorsData',
                channel: 'sensors',
                interval: 3000,
                default: Object.assign({}, this.sensors)
            }];
    }
    StateServiceProvider.prototype.start = function () {
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var item = _a[_i];
            this.polling(item.service, {
                channel: item.channel,
                interval: item.interval,
                default: item.default
            });
        }
    };
    StateServiceProvider.prototype.polling = function (service, options) {
        var _this = this;
        if (options === void 0) { options = { channel: 'default', interval: 5000, default: null }; }
        if (this.polling[options.channel])
            return;
        var run = function () {
            var channel = 'state:' + options.channel;
            if (!__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice) {
                return _this.events.publish(channel, {
                    error: true,
                    data: options.default
                });
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.host || !__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.port) {
                    return _this.events.publish(channel, {
                        error: true,
                        data: options.default
                    });
                }
            }
            var params = __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params;
            _this.apiHost = "http://" + params.host + ":" + params.port;
            _this[service]().then(function (result) {
                _this.events.publish(channel, {
                    error: false,
                    data: Object.assign({}, result)
                });
            }).catch(function (error) {
                _this.events.publish(channel, {
                    error: true,
                    data: options.default
                });
            });
        };
        run();
        this.polling[options.channel] = setInterval(function () { return run(); }, options.interval);
    };
    StateServiceProvider.prototype.getDefaultHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
        return headers;
    };
    StateServiceProvider.prototype.getHardwareData = function (data, connection) {
        var _this = this;
        if (connection === void 0) { connection = null; }
        this.apiHost = connection ? "http://" + connection.host + ":" + connection.port : this.apiHost;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiHost + "/state/hardware?ts=" + new Date().getTime(), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                resolve(result);
            }, reject);
        });
    };
    StateServiceProvider.prototype.getFeatureData = function (data, connection) {
        var _this = this;
        if (connection === void 0) { connection = null; }
        this.apiHost = connection ? "http://" + connection.host + ":" + connection.port : this.apiHost;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiHost + "/state/feature?ts=" + new Date().getTime(), options)
                .map(function (res) { return res.json(); })
                .subscribe(resolve, reject);
        });
    };
    StateServiceProvider.prototype.getSensorsData = function (data, connection) {
        var _this = this;
        if (connection === void 0) { connection = null; }
        this.apiHost = connection ? "http://" + connection.host + ":" + connection.port : this.apiHost;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiHost + "/state/sensors?ts=" + new Date().getTime(), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                var sensors = Object.assign({}, _this.sensors);
                for (var k in result) {
                    var item = result[k] || {};
                    var value = item.value;
                    value = value === undefined || (typeof value == 'number' && value == -500) || value == '' ? null : value;
                    // formats
                    switch (k) {
                        case 'lux':
                            value = typeof value === 'number' ? _this.utils.numberFormat(value) : value;
                            break;
                        default:
                            break;
                    }
                    var helper = '';
                    if (value == 'error') {
                        helper = 'danger with-line';
                    }
                    sensors[k] = { value: value, helper: helper, min: item.min, max: item.max };
                }
                resolve(sensors);
            }, function (error) { return reject(error); });
        });
    };
    StateServiceProvider.prototype.getSensorsHistory = function (data, connection) {
        var _this = this;
        if (connection === void 0) { connection = null; }
        this.apiHost = connection ? "http://" + connection.host + ":" + connection.port : this.apiHost;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiHost + "/state/sensors/" + data.sensor + "/history?" + ((data || {}).start && (data || {}).end ? 'date=' + data.start + ',' + data.end : '') + "&sort=" + ((data || {}).sort ? data.sort : 'asc'), options)
                .map(function (res) { return res.json(); })
                .subscribe(resolve, reject);
        });
    };
    StateServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__app_utils__["a" /* UtilsProvider */]])
    ], StateServiceProvider);
    return StateServiceProvider;
}());

//# sourceMappingURL=state-service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sensors; });
var Sensors = /** @class */ (function () {
    function Sensors() {
    }
    Object.defineProperty(Sensors.prototype, 'air-temperature', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'air-humidity', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, "light", {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, "lux", {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'light-state', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, "uv", {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, "co2", {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'water-level', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'water-ph', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-1', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-2', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-3', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-4', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-5', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-6', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-7', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-moisture-8', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-1', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-2', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-3', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-4', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-5', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-6', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-7', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-temperature-8', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-1', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-2', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-3', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-4', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-5', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-6', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-7', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-nutrients-8', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-1', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-2', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-3', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-4', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-5', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-6', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-7', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sensors.prototype, 'soil-ph-8', {
        get: function () {
            return Object.assign({}, {
                value: null,
                helper: '',
                min: null,
                max: null,
                label: null
            });
        },
        enumerable: true,
        configurable: true
    });
    return Sensors;
}());

//# sourceMappingURL=sensors.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Features; });
var Features = /** @class */ (function () {
    function Features() {
    }
    Object.defineProperty(Features.prototype, "fan", {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, "light", {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'co2-pump', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'o2-pump', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'air-humidity-pump', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-1', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-2', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-3', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-4', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-5', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-6', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-7', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Features.prototype, 'water-pump-8', {
        get: function () {
            return Object.assign({}, {
                on: false,
                runtime: null
            });
        },
        enumerable: true,
        configurable: true
    });
    return Features;
}());

//# sourceMappingURL=features.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hardware; });
var Hardware = /** @class */ (function () {
    function Hardware() {
        this['operation-time'] = {
            days: 0,
            time: null
        };
        this.time = null;
    }
    return Hardware;
}());

//# sourceMappingURL=hardware.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_sensors__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_features__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_hardware__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PlantServiceProvider = /** @class */ (function () {
    function PlantServiceProvider(http, events, utils) {
        this.http = http;
        this.events = events;
        this.utils = utils;
        this.channelPrefix = 'plant';
        this.pollings = {};
        this.sensors = new __WEBPACK_IMPORTED_MODULE_7__shared_models_sensors__["a" /* Sensors */]();
        this.features = new __WEBPACK_IMPORTED_MODULE_8__shared_models_features__["a" /* Features */]();
        this.hardware = new __WEBPACK_IMPORTED_MODULE_9__shared_models_hardware__["a" /* Hardware */]();
        this.plant = [];
        this.services = [
            {
                service: 'getPlantsData',
                channel: 'state',
                interval: 3000,
                default: this.plant
            }
        ];
    }
    PlantServiceProvider.prototype.start = function () {
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var item = _a[_i];
            this.polling(item.service, {
                channel: item.channel,
                interval: item.interval,
                default: item.default
            });
        }
    };
    PlantServiceProvider.prototype.polling = function (service, options) {
        var _this = this;
        if (options === void 0) { options = { channel: 'default', interval: 5000, default: null }; }
        if (this.polling[options.channel])
            return;
        var run = function () {
            var channel = _this.channelPrefix + ':' + options.channel;
            if (!__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice) {
                return _this.events.publish(channel, {
                    error: true,
                    data: options.default
                });
            }
            else {
                if (!__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.host || !__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.port) {
                    return _this.events.publish(channel, {
                        error: true,
                        data: options.default
                    });
                }
            }
            _this[service]().then(function (result) {
                _this.events.publish(channel, {
                    error: false,
                    data: result
                });
            }).catch(function (error) {
                console.log(error);
                _this.events.publish(channel, {
                    error: true,
                    data: options.default
                });
            });
        };
        run();
        this.polling[options.channel] = setInterval(function () { return run(); }, options.interval);
    };
    PlantServiceProvider.prototype.getDefaultHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
        return headers;
    };
    PlantServiceProvider.prototype.getPlantsData = function (data, connection) {
        var _this = this;
        if (connection === void 0) { connection = null; }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return new Promise(function (resolve, reject) {
            _this.http.get("http://" + __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.host + ":" + __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.port + "/plant", options)
                .map(function (res) { return res.json(); })
                .subscribe(function (result) { return resolve(result.data); }, reject);
        });
    };
    PlantServiceProvider.prototype.postPlantsData = function (data, connection) {
        var _this = this;
        if (connection === void 0) { connection = null; }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return new Promise(function (resolve, reject) {
            _this.http.put("http://" + __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.host + ":" + __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.port + "/plant/1", data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (result) { return resolve(result.data); }, reject);
        });
    };
    PlantServiceProvider.prototype.getPlantData = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return this.http.get("http://" + __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.host + ":" + __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].currentDevice.params.port + "/plant/" + id, options)
            .map(function (res) { return res.json(); });
    };
    PlantServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__app_utils__["a" /* UtilsProvider */]])
    ], PlantServiceProvider);
    return PlantServiceProvider;
}());

//# sourceMappingURL=plant-service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PubSubService = /** @class */ (function () {
    function PubSubService() {
        this.beforeRequest = new __WEBPACK_IMPORTED_MODULE_1__emitter__["a" /* RequestEventEmitter */]();
        this.afterRequest = new __WEBPACK_IMPORTED_MODULE_1__emitter__["b" /* ResponseEventEmitter */]();
    }
    PubSubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PubSubService);
    return PubSubService;
}());

//# sourceMappingURL=pubsub-service.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcquiredServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcquiredServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcquiredServicesPage = /** @class */ (function () {
    function AcquiredServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcquiredServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcquiredServicesPage');
    };
    AcquiredServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acquired-services',template:/*ion-inline-start:"/export/uberservice/app/src/pages/acquired-services/acquired-services.html"*/'<!--\n  Generated template for the AcquiredServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>acquired-services</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/acquired-services/acquired-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AcquiredServicesPage);
    return AcquiredServicesPage;
}());

//# sourceMappingURL=acquired-services.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterHirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AfterHirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfterHirePage = /** @class */ (function () {
    function AfterHirePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AfterHirePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfterHirePage');
    };
    AfterHirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-after-hire',template:/*ion-inline-start:"/export/uberservice/app/src/pages/after-hire/after-hire.html"*/'<!--\n  Generated template for the AfterHirePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>after-hire</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/after-hire/after-hire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AfterHirePage);
    return AfterHirePage;
}());

//# sourceMappingURL=after-hire.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/export/uberservice/app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProviderPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProviderPlacePage = /** @class */ (function () {
    function ProviderPlacePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProviderPlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProviderPlacePage');
    };
    ProviderPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-place',template:/*ion-inline-start:"/export/uberservice/app/src/pages/provider-place/provider-place.html"*/'<!--\n  Generated template for the ProviderPlacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>provider-place</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/provider-place/provider-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProviderPlacePage);
    return ProviderPlacePage;
}());

//# sourceMappingURL=provider-place.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_schedule_provider_schedule__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProviderProfilePage = /** @class */ (function () {
    function ProviderProfilePage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.value = this.navParams.data;
    }
    ProviderProfilePage.prototype.ionViewDidLoad = function () {
        console.log(this.value);
    };
    ProviderProfilePage.prototype.selectProvider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__provider_schedule_provider_schedule__["a" /* ProviderSchedulePage */], this.value);
    };
    ProviderProfilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProviderProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-profile',template:/*ion-inline-start:"/export/uberservice/app/src/pages/provider-profile/provider-profile.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" />\n      </svg>\n    </a>\n    <div class="content">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n  </nav>\n  <div class="providerProfile">\n    <div class="providerAvatar">\n        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">\n    </div>\n    <h2>\n        João Silva Cardoso\n    </h2>\n    <ul class="rate">\n      <li>\n          <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n          <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n          <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n          <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n      </li>\n      <li>\n          <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n      </li>\n      <li>\n          18 avaliações\n      </li>\n    </ul>\n    <span class="distance">\n        a 2,5km de você\n    </span>\n    <div class="info">\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem commodi veniam ullam alias incidunt consectetur, aliquam esse sint tempora deleniti quaerat ab cupiditate iusto nobis reprehenderit repellat, est cum fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem commodi veniam ullam alias incidunt consectetur, aliquam esse sint tempora deleniti quaerat ab cupiditate iusto nobis reprehenderit repellat, est cum fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem commodi veniam ullam alias incidunt consectetur, aliquam esse sint tempora deleniti quaerat ab cupiditate iusto nobis reprehenderit repellat, est cum fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem commodi veniam ullam alias incidunt consectetur, aliquam esse sint tempora deleniti quaerat ab cupiditate iusto nobis reprehenderit repellat, est cum fugit.\n        </p>\n    </div>\n    <a (click)="selectProvider()" class="button sticky">\n        Contratar por R$80,00 →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/provider-profile/provider-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ProviderProfilePage);
    return ProviderProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=provider-profile.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProviderSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProviderSchedulePage = /** @class */ (function () {
    function ProviderSchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProviderSchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProviderSchedulePage');
    };
    ProviderSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-schedule',template:/*ion-inline-start:"/export/uberservice/app/src/pages/provider-schedule/provider-schedule.html"*/'<!--\n  Generated template for the ProviderSchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>provider-schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/provider-schedule/provider-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProviderSchedulePage);
    return ProviderSchedulePage;
}());

//# sourceMappingURL=provider-schedule.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCancelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServiceCancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceCancelPage = /** @class */ (function () {
    function ServiceCancelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServiceCancelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceCancelPage');
    };
    ServiceCancelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-cancel',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-cancel/service-cancel.html"*/'<!--\n  Generated template for the ServiceCancelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>service-cancel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-cancel/service-cancel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceCancelPage);
    return ServiceCancelPage;
}());

//# sourceMappingURL=service-cancel.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHiredProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServiceHiredProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceHiredProfilePage = /** @class */ (function () {
    function ServiceHiredProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServiceHiredProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceHiredProfilePage');
    };
    ServiceHiredProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-hired-profile',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-hired-profile/service-hired-profile.html"*/'<!--\n  Generated template for the ServiceHiredProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>service-hired-profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-hired-profile/service-hired-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceHiredProfilePage);
    return ServiceHiredProfilePage;
}());

//# sourceMappingURL=service-hired-profile.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHiredPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServiceHiredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceHiredPage = /** @class */ (function () {
    function ServiceHiredPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServiceHiredPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceHiredPage');
    };
    ServiceHiredPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-hired',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-hired/service-hired.html"*/'<!--\n  Generated template for the ServiceHiredPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>service-hired</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-hired/service-hired.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceHiredPage);
    return ServiceHiredPage;
}());

//# sourceMappingURL=service-hired.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderRatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServiceProviderRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceProviderRatePage = /** @class */ (function () {
    function ServiceProviderRatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServiceProviderRatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceProviderRatePage');
    };
    ServiceProviderRatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-provider-rate',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-provider-rate/service-provider-rate.html"*/'<!--\n  Generated template for the ServiceProviderRatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>service-provider-rate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-provider-rate/service-provider-rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceProviderRatePage);
    return ServiceProviderRatePage;
}());

//# sourceMappingURL=service-provider-rate.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServiceSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceSummaryPage = /** @class */ (function () {
    function ServiceSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServiceSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceSummaryPage');
    };
    ServiceSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-summary',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-summary/service-summary.html"*/'<!--\n  Generated template for the ServiceSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>service-summary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-summary/service-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceSummaryPage);
    return ServiceSummaryPage;
}());

//# sourceMappingURL=service-summary.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            phone: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gm)
                ]]
        });
        this.value = this.navParams.data;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.form.get('phone').valueChanges.subscribe(function (v) {
            v = v || '';
            v = v
                .replace(/\D/g, "")
                .replace(/^(\d{2})(\d)/g, "($1) $2")
                .replace(/(\d)(\d{4})$/, "$1-$2");
            _this.form.get('phone').setValue(v, { emitEvent: false });
        });
    };
    SigninPage.prototype.submit = function () {
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Por favor, insira um número de telefone válido',
                subTitle: '',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () { }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))));
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/export/uberservice/app/src/pages/signin/signin.html"*/'<ion-content>\n  <div class="signIn">\n    <div class="header">\n        <div class="verticallyCenter">\n            <img src="../assets/imgs/logo-us-vertical.svg" height="117" alt="Uber Service" />\n            <p>\n                O aplicativo que você encontra <br />\n                o serviço que tanto procura\n            </p>\n        </div>\n    </div>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Informe o seu telefone</span>\n          <input maxlength="15" formControlName="phone" type="text" placeholder="(11) 93219-0132" />\n        </div>\n        </label>\n        <a href="#" class="button secondary">\n          Entrar como prestador de serviços\n        </a>\n        <a (click)="submit()" class="button">\n          Avançar →\n        </a>\n    </form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(515);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_phone__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_password_password__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_select_service_select_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_service_settings_service_settings__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_service_schedule_service_schedule__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_service_provider_service_provider__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_provider_profile_provider_profile__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_provider_schedule_provider_schedule__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_provider_place_provider_place__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_service_summary_service_summary__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_service_hired_service_hired__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_after_hire_after_hire__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_service_hired_profile_service_hired_profile__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_service_provider_rate_service_provider_rate__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_service_cancel_service_cancel__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_acquired_services_acquired_services__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_auth_service_auth_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_settings_service_settings_service__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_http_http_factory__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_http_pubsub_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_state_service_state_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_plant_service_plant_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_services_service_services_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_graph_graph__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pages























// Http Interceptor






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_select_service_select_service__["a" /* SelectServicePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_service_settings_service_settings__["a" /* ServiceSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_service_schedule_service_schedule__["a" /* ServiceSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_service_provider_service_provider__["a" /* ServiceProviderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_provider_profile_provider_profile__["a" /* ProviderProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_provider_schedule_provider_schedule__["a" /* ProviderSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_provider_place_provider_place__["a" /* ProviderPlacePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_service_summary_service_summary__["a" /* ServiceSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_service_hired_service_hired__["a" /* ServiceHiredPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_after_hire_after_hire__["a" /* AfterHirePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_service_hired_profile_service_hired_profile__["a" /* ServiceHiredProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_service_provider_rate_service_provider_rate__["a" /* ServiceProviderRatePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_service_cancel_service_cancel__["a" /* ServiceCancelPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_acquired_services_acquired_services__["a" /* AcquiredServicesPage */],
                __WEBPACK_IMPORTED_MODULE_6__directives_phone__["a" /* PhoneMask */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acquired-services/acquired-services.module#AcquiredServicesPageModule', name: 'AcquiredServicesPage', segment: 'acquired-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/after-hire/after-hire.module#AfterHirePageModule', name: 'AfterHirePage', segment: 'after-hire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider-place/provider-place.module#ProviderPlacePageModule', name: 'ProviderPlacePage', segment: 'provider-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider-profile/provider-profile.module#ProviderProfilePageModule', name: 'ProviderProfilePage', segment: 'provider-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider-schedule/provider-schedule.module#ProviderSchedulePageModule', name: 'ProviderSchedulePage', segment: 'provider-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-service/select-service.module#SelectServicePageModule', name: 'SelectServicePage', segment: 'select-service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-cancel/service-cancel.module#ServiceCancelPageModule', name: 'ServiceCancelPage', segment: 'service-cancel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-hired-profile/service-hired-profile.module#ServiceHiredProfilePageModule', name: 'ServiceHiredProfilePage', segment: 'service-hired-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-hired/service-hired.module#ServiceHiredPageModule', name: 'ServiceHiredPage', segment: 'service-hired', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-provider-rate/service-provider-rate.module#ServiceProviderRatePageModule', name: 'ServiceProviderRatePage', segment: 'service-provider-rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-provider/service-provider.module#ServiceProviderPageModule', name: 'ServiceProviderPage', segment: 'service-provider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-schedule/service-schedule.module#ServiceSchedulePageModule', name: 'ServiceSchedulePage', segment: 'service-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-settings/service-settings.module#ServiceSettingsPageModule', name: 'ServiceSettingsPage', segment: 'service-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-summary/service-summary.module#ServiceSummaryPageModule', name: 'ServiceSummaryPage', segment: 'service-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_select_service_select_service__["a" /* SelectServicePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_service_settings_service_settings__["a" /* ServiceSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_service_schedule_service_schedule__["a" /* ServiceSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_service_provider_service_provider__["a" /* ServiceProviderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_provider_profile_provider_profile__["a" /* ProviderProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_provider_schedule_provider_schedule__["a" /* ProviderSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_provider_place_provider_place__["a" /* ProviderPlacePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_service_summary_service_summary__["a" /* ServiceSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_service_hired_service_hired__["a" /* ServiceHiredPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_after_hire_after_hire__["a" /* AfterHirePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_service_hired_profile_service_hired_profile__["a" /* ServiceHiredProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_service_provider_rate_service_provider_rate__["a" /* ServiceProviderRatePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_service_cancel_service_cancel__["a" /* ServiceCancelPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_acquired_services_acquired_services__["a" /* AcquiredServicesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_settings_service_settings_service__["a" /* SettingsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_http_pubsub_service__["a" /* PubSubService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_31__providers_http_http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_32__providers_http_pubsub_service__["a" /* PubSubService */]]
                },
                __WEBPACK_IMPORTED_MODULE_33__providers_state_service_state_service__["a" /* StateServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_plant_service_plant_service__["a" /* PlantServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_graph_graph__["a" /* GraphProvider */],
                __WEBPACK_IMPORTED_MODULE_6__directives_phone__["a" /* PhoneMask */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_service_settings_service_settings__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_service_services_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, alertCtrl, statusBar, splashScreen, modalCtrl, storage, auth, services, loadingCtrl, events, menuCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = auth;
        this.services = services;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.settings = {};
        this.menuItems = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var perform = function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_service_settings_service_settings__["a" /* ServiceSettingsPage */];
                // this.storage.get('settings').then(settings => {
                //   if(!settings || ((settings||{}).devices||[]).length == 0) {
                //     this.rootPage = IntroPage;
                //     return;
                //   }
                //   moment.locale('pt-BR');
                //   this.settings = settings;
                //   const stack = [];
                //   const containsDefault = settings.devices.filter(item => item.params.default === true)[0];
                //   if(containsDefault) {
                //     stack.push(() => new Promise((resolve, reject) => {
                //       this.auth
                //         .check(containsDefault.data.session, containsDefault.params)
                //         .subscribe(success => resolve(containsDefault), error => reject(error));
                //     }));
                //     this.showLoading();
                //     this.defineConnection(stack).then(r => this.bootstrap()).catch(err => {
                //       this.loading.dismiss();
                //       const alert = this.alertCtrl.create({
                //         title:  'Authorization failed',
                //         subTitle: 'Unable to connect to default device. Please check the parameters (host, port, usernam and password)',
                //         buttons: ['OK']
                //       });
                //       alert.present();
                //       this.rootPage = ListGrowPage;
                //       setTimeout(() => {
                //         this.nav.push(AddGrowPage, {id:containsDefault.id});
                //       },1);
                //     });
                //     return;
                //   }else {
                //     for(const item of settings.devices) {
                //       stack.push(() => new Promise((resolve, reject) => {
                //         this.auth
                //           .check(item.data.session, item.params)
                //           .subscribe(success => resolve(item), error => reject(error));
                //       }));
                //     }
                //   }
                //   this.showLoading();
                //   this.defineConnection(stack).then(r => this.bootstrap()).catch(err => {
                //     this.loading.dismiss();
                //     const alert = this.alertCtrl.create({
                //       title:  'Authorization failed',
                //       subTitle: 'Could not connect to any of the configured devices. Please check the parameters (host, port, usernam and password)',
                //       buttons: ['OK']
                //     });
                //     alert.present();
                //     this.rootPage = ListGrowPage;
                //   });
                // }).catch(err => {
                //   this.rootPage = IntroPage;
                // });
            };
            _this.storage.get('settings').then(function (settings) {
                if (!settings) {
                    _this.storage.set('settings', _this.settings).then(function () { return perform(); });
                    return;
                }
                perform();
            });
            // const splash = modalCtrl.create(SplashPage);
            // splash.present();
        });
        // Update the menu
        // events.subscribe('devices:update', data => {
        //   if(data) {
        //     this.current = data.id;
        //   }
        //   this.storage.get('settings').then(settings => {
        //     if(!settings) {
        //       this.settings.devices = [];
        //       return;
        //     }
        //     this.settings.devices = settings.devices;
        //   });
        // });
        // this.http.connection.subscribe((isOnline) => {
        //   console.log(isOnline,'------------------>');
        // });
    }
    MyApp.prototype.showLoading = function (message) {
        if (message === void 0) { message = ''; }
        this.loading = this.loadingCtrl.create({
            content: message || 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mycontent'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/export/uberservice/app/src/app/app.html"*/'<ion-menu class="side-menu" [content]="mycontent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Devices</ion-title>\n      <ion-buttons end>\n        <button class="settings" ion-button color="black" menuClose icon-only (click)="goToDevices()">\n          <ion-icon name="ios-settings"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button [ngClass]="current == item.id ? \'active\' : \'\'" *ngFor="let item of settings.devices" ion-item (click)="setDevice(item.id)">\n        {{item.params.name}}\n        <ion-icon class="favorite" *ngIf="item.params.default" name="md-star" color="primary"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/export/uberservice/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_services_service_services_service__["a" /* ServicesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_services_service_services_service__["a" /* ServicesServiceProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _m || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneMask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneMask = /** @class */ (function () {
    function PhoneMask(model) {
        this.model = model;
    }
    PhoneMask.prototype.onInputChange = function (event, backspace) {
        this.model.valueAccessor.writeValue(this.pattern(event));
    };
    PhoneMask.prototype.pattern = function (v) {
        v = v || '';
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        return v;
    };
    PhoneMask = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[ngModel][PhoneMask]',
            host: {
                '(ngModelChange)': 'onInputChange($event)',
                '(keydown.backspace)': 'onInputChange($event.target.value, true)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */]])
    ], PhoneMask);
    return PhoneMask;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsServiceProvider = /** @class */ (function () {
    function SettingsServiceProvider(http) {
        this.http = http;
    }
    SettingsServiceProvider.prototype.getDefaultHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('app', 'true');
        return headers;
    };
    SettingsServiceProvider.prototype.authenticate = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].API_HOST + "/auth/login", JSON.stringify(data), options)
            .map(function (res) { return res.json(); });
    };
    SettingsServiceProvider.prototype.check = function (session) {
        var headers = this.getDefaultHeaders();
        headers.append('session-id', session);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].API_HOST + "/auth/check", options).map(function (res) { return res.json(); });
    };
    SettingsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SettingsServiceProvider);
    return SettingsServiceProvider;
}());

//# sourceMappingURL=settings-service.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(567);

function httpFactory(xhrBackend, requestOptions, pubsub) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, pubsub);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pubsub_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(89);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InterceptedHttp = /** @class */ (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions, pubsub) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._pubsub = pubsub;
        _this.connectionObserver = null;
        _this.connection = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.connectionObserver = observer;
        });
        return _this;
    }
    // Send that information to all the subscribers
    InterceptedHttp.prototype.connectionHasChanged = function (channel) {
        this.connectionObserver.next(channel);
    };
    InterceptedHttp.prototype.getAuthorization = function () {
        var sessionID = 'null';
        if (__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* default */].currentDevice && __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* default */].currentDevice.id) {
            sessionID = (__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* default */].currentDevice.data || {}).session;
        }
        return sessionID;
    };
    InterceptedHttp.prototype.getApiClient = function () {
        return 'highgarden.com';
    };
    InterceptedHttp.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    InterceptedHttp.prototype.get = function (url, options) {
        return this.intercept(_super.prototype.get.call(this, url, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        return this.intercept(_super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        return this.intercept(_super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        return this.intercept(_super.prototype.delete.call(this, url, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        if (!options.headers.get('session-id')) {
            options.headers.append('session-id', this.getAuthorization());
        }
        options.headers.append('App', 'true');
        options.headers.append('App-Client', this.getApiClient());
        return options;
    };
    InterceptedHttp.prototype.intercept = function (observable) {
        var _this = this;
        this._pubsub.beforeRequest.emit("beforeRequestEvent");
        return observable.catch(function (err, source) {
            _this._pubsub.afterRequest.emit("afterRequestEvent");
            if (err.status === 401) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
                //this.connectionHasChanged('api:unauthorized');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            }
        }).finally(function () {
            _this._pubsub.afterRequest.emit("afterRequestEvent");
        });
    };
    InterceptedHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_4__pubsub_service__["a" /* PubSubService */]])
    ], InterceptedHttp);
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/export/uberservice/app/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseEventEmitter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RequestEventEmitter = /** @class */ (function (_super) {
    __extends(RequestEventEmitter, _super);
    function RequestEventEmitter() {
        return _super.call(this) || this;
    }
    RequestEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    return RequestEventEmitter;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));

var ResponseEventEmitter = /** @class */ (function (_super) {
    __extends(ResponseEventEmitter, _super);
    function ResponseEventEmitter() {
        return _super.call(this) || this;
    }
    ResponseEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    return ResponseEventEmitter;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));

//# sourceMappingURL=emitter.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphProvider = /** @class */ (function () {
    function GraphProvider() {
    }
    GraphProvider.prototype.plotLine = function (area, settings) {
        if (settings === void 0) { settings = {}; }
        Object.assign(settings, this.prepareData(settings.xAxes.timeScope || null, { labels: settings.labels, data: settings.data }));
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](area, {
            type: 'line',
            data: {
                labels: settings.labels,
                datasets: [{
                        label: settings.title,
                        fill: true,
                        borderWidth: 1.2,
                        lineTension: 0.1,
                        backgroundColor: "rgba(112,199,56,.2)",
                        borderColor: settings.color || "rgba(112,199,56,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(100,100,100,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 0,
                        pointHoverRadius: 0,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        pointHitRadius: 0,
                        data: settings.data,
                        spanGaps: false,
                    }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: this.getTimexAxes(settings.xAxes.timeScope, {
                        stepSize: settings.xAxes.stepSize,
                        length: settings.data.length
                    }),
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: settings.yAxes.beginAtZero !== undefined ? settings.yAxes.beginAtZero : true,
                                max: settings.yAxes.max || 100,
                                min: settings.yAxes.min || 0,
                                callback: function (value, index, values) {
                                    return settings.yAxes.labelString ? settings.yAxes.labelString.replace('%d', value) : value;
                                },
                                fontSize: 12
                            },
                            scaleLabel: {
                                display: !!settings.yAxes.scaleLabel,
                                labelString: settings.yAxes.scaleLabel
                            }
                        }]
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem) { return tooltipItem.yLabel + ": " + tooltipItem.xLabel; },
                        title: function () { return null; },
                    }
                },
                animation: {}
            }
        });
    };
    GraphProvider.prototype.getTimexAxes = function (scope, options) {
        if (scope === void 0) { scope = 'minute'; }
        if (options === void 0) { options = {}; }
        var settings;
        switch (scope) {
            case 'minute':
            case 'hour':
                settings = [{
                        type: 'time',
                        time: {
                            stepSize: options.stepSize || (scope == 'minute' ? 10 : 1),
                            unit: scope,
                            displayFormats: { hour: options.length < 48 ? 'H:mm' : 'MMM D', minute: scope == 'hour' && options.length > 48 ? 'MM/DD' : 'H:mm' },
                            tooltipFormat: 'H:mm'
                        },
                        scaleLabel: {
                            display: false
                        }
                    }];
                break;
            default:
                break;
        }
        return settings;
    };
    GraphProvider.prototype.prepareData = function (scope, object) {
        var _this = this;
        if (scope === void 0) { scope = 'hour'; }
        var aux = {};
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]('en-US');
        object.labels.forEach(function (el, i) {
            var d = new Date(el);
            switch (scope) {
                case 'hour':
                    var key_1 = datePipe.transform(d, 'yyyy-MM-dd H');
                    if (!aux[key_1]) {
                        aux[key_1] = {
                            data: _this.getAverage(object.data.filter(function (item, index) {
                                return key_1 === datePipe.transform(object.labels[index], 'yyyy-MM-dd H');
                            })),
                            label: new Date(key_1 + ':00:00').getTime()
                        };
                    }
                    break;
                default:
                    break;
            }
        });
        var newObject = { labels: [], data: [] };
        if (Object.keys(aux).length > 0) {
            for (var k in aux) {
                newObject.data.push(aux[k].data);
                newObject.labels.push(aux[k].label);
            }
        }
        else {
            newObject = object;
        }
        return newObject;
    };
    GraphProvider.prototype.getAverage = function (array) {
        var sum = array.reduce(function (a, b) { return a + b; });
        return parseFloat((sum / array.length).toFixed(2));
    };
    GraphProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GraphProvider);
    return GraphProvider;
}());

//# sourceMappingURL=graph.js.map

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 375,
	"./af.js": 375,
	"./ar": 376,
	"./ar-dz": 377,
	"./ar-dz.js": 377,
	"./ar-kw": 378,
	"./ar-kw.js": 378,
	"./ar-ly": 379,
	"./ar-ly.js": 379,
	"./ar-ma": 380,
	"./ar-ma.js": 380,
	"./ar-sa": 381,
	"./ar-sa.js": 381,
	"./ar-tn": 382,
	"./ar-tn.js": 382,
	"./ar.js": 376,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bm": 386,
	"./bm.js": 386,
	"./bn": 387,
	"./bn.js": 387,
	"./bo": 388,
	"./bo.js": 388,
	"./br": 389,
	"./br.js": 389,
	"./bs": 390,
	"./bs.js": 390,
	"./ca": 391,
	"./ca.js": 391,
	"./cs": 392,
	"./cs.js": 392,
	"./cv": 393,
	"./cv.js": 393,
	"./cy": 394,
	"./cy.js": 394,
	"./da": 395,
	"./da.js": 395,
	"./de": 396,
	"./de-at": 397,
	"./de-at.js": 397,
	"./de-ch": 398,
	"./de-ch.js": 398,
	"./de.js": 396,
	"./dv": 399,
	"./dv.js": 399,
	"./el": 400,
	"./el.js": 400,
	"./en-au": 401,
	"./en-au.js": 401,
	"./en-ca": 402,
	"./en-ca.js": 402,
	"./en-gb": 403,
	"./en-gb.js": 403,
	"./en-ie": 404,
	"./en-ie.js": 404,
	"./en-il": 405,
	"./en-il.js": 405,
	"./en-nz": 406,
	"./en-nz.js": 406,
	"./eo": 407,
	"./eo.js": 407,
	"./es": 408,
	"./es-do": 409,
	"./es-do.js": 409,
	"./es-us": 410,
	"./es-us.js": 410,
	"./es.js": 408,
	"./et": 411,
	"./et.js": 411,
	"./eu": 412,
	"./eu.js": 412,
	"./fa": 413,
	"./fa.js": 413,
	"./fi": 414,
	"./fi.js": 414,
	"./fo": 415,
	"./fo.js": 415,
	"./fr": 416,
	"./fr-ca": 417,
	"./fr-ca.js": 417,
	"./fr-ch": 418,
	"./fr-ch.js": 418,
	"./fr.js": 416,
	"./fy": 419,
	"./fy.js": 419,
	"./gd": 420,
	"./gd.js": 420,
	"./gl": 421,
	"./gl.js": 421,
	"./gom-latn": 422,
	"./gom-latn.js": 422,
	"./gu": 423,
	"./gu.js": 423,
	"./he": 424,
	"./he.js": 424,
	"./hi": 425,
	"./hi.js": 425,
	"./hr": 426,
	"./hr.js": 426,
	"./hu": 427,
	"./hu.js": 427,
	"./hy-am": 428,
	"./hy-am.js": 428,
	"./id": 429,
	"./id.js": 429,
	"./is": 430,
	"./is.js": 430,
	"./it": 431,
	"./it.js": 431,
	"./ja": 432,
	"./ja.js": 432,
	"./jv": 433,
	"./jv.js": 433,
	"./ka": 434,
	"./ka.js": 434,
	"./kk": 435,
	"./kk.js": 435,
	"./km": 436,
	"./km.js": 436,
	"./kn": 437,
	"./kn.js": 437,
	"./ko": 438,
	"./ko.js": 438,
	"./ky": 439,
	"./ky.js": 439,
	"./lb": 440,
	"./lb.js": 440,
	"./lo": 441,
	"./lo.js": 441,
	"./lt": 442,
	"./lt.js": 442,
	"./lv": 443,
	"./lv.js": 443,
	"./me": 444,
	"./me.js": 444,
	"./mi": 445,
	"./mi.js": 445,
	"./mk": 446,
	"./mk.js": 446,
	"./ml": 447,
	"./ml.js": 447,
	"./mn": 448,
	"./mn.js": 448,
	"./mr": 449,
	"./mr.js": 449,
	"./ms": 450,
	"./ms-my": 451,
	"./ms-my.js": 451,
	"./ms.js": 450,
	"./mt": 452,
	"./mt.js": 452,
	"./my": 453,
	"./my.js": 453,
	"./nb": 454,
	"./nb.js": 454,
	"./ne": 455,
	"./ne.js": 455,
	"./nl": 456,
	"./nl-be": 457,
	"./nl-be.js": 457,
	"./nl.js": 456,
	"./nn": 458,
	"./nn.js": 458,
	"./pa-in": 459,
	"./pa-in.js": 459,
	"./pl": 460,
	"./pl.js": 460,
	"./pt": 461,
	"./pt-br": 462,
	"./pt-br.js": 462,
	"./pt.js": 461,
	"./ro": 463,
	"./ro.js": 463,
	"./ru": 464,
	"./ru.js": 464,
	"./sd": 465,
	"./sd.js": 465,
	"./se": 466,
	"./se.js": 466,
	"./si": 467,
	"./si.js": 467,
	"./sk": 468,
	"./sk.js": 468,
	"./sl": 469,
	"./sl.js": 469,
	"./sq": 470,
	"./sq.js": 470,
	"./sr": 471,
	"./sr-cyrl": 472,
	"./sr-cyrl.js": 472,
	"./sr.js": 471,
	"./ss": 473,
	"./ss.js": 473,
	"./sv": 474,
	"./sv.js": 474,
	"./sw": 475,
	"./sw.js": 475,
	"./ta": 476,
	"./ta.js": 476,
	"./te": 477,
	"./te.js": 477,
	"./tet": 478,
	"./tet.js": 478,
	"./tg": 479,
	"./tg.js": 479,
	"./th": 480,
	"./th.js": 480,
	"./tl-ph": 481,
	"./tl-ph.js": 481,
	"./tlh": 482,
	"./tlh.js": 482,
	"./tr": 483,
	"./tr.js": 483,
	"./tzl": 484,
	"./tzl.js": 484,
	"./tzm": 485,
	"./tzm-latn": 486,
	"./tzm-latn.js": 486,
	"./tzm.js": 485,
	"./ug-cn": 487,
	"./ug-cn.js": 487,
	"./uk": 488,
	"./uk.js": 488,
	"./ur": 489,
	"./ur.js": 489,
	"./uz": 490,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 490,
	"./vi": 492,
	"./vi.js": 492,
	"./x-pseudo": 493,
	"./x-pseudo.js": 493,
	"./yo": 494,
	"./yo.js": 494,
	"./zh-cn": 495,
	"./zh-cn.js": 495,
	"./zh-hk": 496,
	"./zh-hk.js": 496,
	"./zh-tw": 497,
	"./zh-tw.js": 497
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 875;

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var device = {
    id: null,
    params: {
        name: null,
        host: null,
        port: 0,
        username: null,
        password: null,
        default: false
    },
    data: null
};
/* harmony default export */ __webpack_exports__["a"] = ({
    /**
     * API host
     */
    API_HOST: 'http://localhost:9090',
    /**
     * Current device
     */
    currentDevice: device
});
//# sourceMappingURL=config.js.map

/***/ })

},[510]);
//# sourceMappingURL=main.js.map