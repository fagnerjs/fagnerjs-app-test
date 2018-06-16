webpackJsonp([19],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_service_select_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, alertCtrl, loadingCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.form = this.formBuilder.group({
            phone: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]],
            password: [null, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]]
        });
        this.value = this.navParams.data;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        for (var k in this.form.controls) {
            var control = this.form.controls[k];
            if (this.value[k]) {
                control.setValue(this.value[k]);
            }
        }
    };
    LoginPage.prototype.submit = function () {
        var _this = this;
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: !this.form.get('password').valid ? 'Por favor, insira seu e-mail e sua senha' : 'Por favor, insira um e-mail válido',
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
        this.showLoading();
        this.auth.authenticate(this.form.get('phone').value, this.form.get('password').value)
            .then(function (result) {
            _this.loading.dismiss().then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__select_service_select_service__["a" /* SelectServicePage */]); });
        }).catch(function (err) {
            _this.loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    title: err.status === 401 ? 'Não autorizado' : 'Falha no login',
                    subTitle: err.status === 401 ? 'Telefone ou senha inválidos' : 'Tente novamente mais tarde',
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
    };
    LoginPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    LoginPage.prototype.showLoading = function (message) {
        if (message === void 0) { message = ''; }
        this.loading = this.loadingCtrl.create({
            content: message || 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/export/uberservice/app/src/pages/login/login.html"*/'<ion-content>\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n        <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n    </a>\n    <div class="content noLeft">\n        <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n  </nav>\n  <div class="signUp">\n      <div class="header">\n        <div>\n          <p>\n            Conecte-se para poder encontrar<br />\n            prestadores de serviços próximos a você!\n          </p>\n        </div>\n      </div>\n      <form [formGroup]="form">\n        <label>\n          <div class="verticallyCenter">\n            <span>Senha</span>\n            <input formControlName="password" type="password" placeholder="Escreva sua senha" />\n          </div>\n        </label>\n        <a href="#" class="button secondary sticky">\n          Esqueci minha senha\n        </a>\n      </form>\n      <a (click)="submit()" class="button sticky">\n        Entrar →\n      </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHiredProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_cancel_service_cancel__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceHiredProfilePage = /** @class */ (function () {
    function ServiceHiredProfilePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.params = this.navParams.data;
    }
    ServiceHiredProfilePage.prototype.ionViewDidLoad = function () {
    };
    ServiceHiredProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ServiceHiredProfilePage.prototype.cancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_cancel_service_cancel__["a" /* ServiceCancelPage */], this.params);
    };
    ServiceHiredProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-hired-profile',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-hired-profile/service-hired-profile.html"*/'<ion-content class="bgGray">\n  <div class="serviceHired">\n      <a (click)="close()" class="close">\n          <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M9 6.545L15.545 0l1.415 1.414-6.546 6.546 6.89 6.89-1.414 1.413L9 9.373l-6.89 6.89L.696 14.85l6.89-6.89L1.04 1.415 2.455 0 9 6.545z" fill="#000" fill-rule="evenodd"/></svg>\n      </a>\n      <div class="verticallyCenter">\n          <h2 class="success">\n              Contratação confirmada\n          </h2>\n          <div class="avatar">\n              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="112" />\n          </div>\n          <h2>João Silva Cardoso</h2>\n          <p class="summary">\n              Serviço de Limpeza<br />\n              no dia 20/02/18 às 09:00\n          </p>\n      </div>\n      <a (click)="cancel()" class="button tertiary sticky">\n          Cancelar Serviço\n      </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-hired-profile/service-hired-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ServiceHiredProfilePage);
    return ServiceHiredProfilePage;
}());

//# sourceMappingURL=service-hired-profile.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCancelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_service_select_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceCancelPage = /** @class */ (function () {
    function ServiceCancelPage(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ServiceCancelPage.prototype.ionViewDidLoad = function () { };
    ServiceCancelPage.prototype.performCancel = function () {
        var _this = this;
        this.showLoading('Aguarde, solicitando cancelamento...');
        // timeout para testar a transição entre loading e alert
        setTimeout(function () {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Serviço cancelado com sucesso!',
                subTitle: '',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__select_service_select_service__["a" /* SelectServicePage */]);
                        }
                    }
                ]
            });
            alert.present();
        }, 3000);
    };
    ServiceCancelPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceCancelPage.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message || 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ServiceCancelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-cancel',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-cancel/service-cancel.html"*/'<ion-content>\n  <div class="serviceCancel">\n    <a (click)="back()" class="return">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"></path>\n      </svg>\n    </a>\n    <div class="verticallyCenter">\n      <h2>Você realmente deseja\n          cancelar a contratação\n          do serviço de limpeza?\n      </h2>\n      <p class="summary">\n          Caso desejar o cancelamento, a taxa\n          de cancelamento será cobrada conforme\n          os termos de uso.\n      </p>\n    </div>\n    <a (click)="performCancel()" class="button tertiary sticky">\n      Solicitar cancelamento →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-cancel/service-cancel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ServiceCancelPage);
    return ServiceCancelPage;
}());

//# sourceMappingURL=service-cancel.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_schedule_provider_schedule__ = __webpack_require__(118);
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
    function ProviderProfilePage(navCtrl, navParams, callNumber, platform, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this._providerModel = {
            _id: null,
            profile_type: null,
            first_name: null,
            last_name: null,
            email: null,
            description: null,
            phone: null,
            services: []
        };
        this.provider = JSON.parse(JSON.stringify(this._providerModel));
        this.value = this.navParams.data;
        this.provider = this.value.provider;
    }
    ProviderProfilePage.prototype.ionViewDidLoad = function () { };
    ProviderProfilePage.prototype.selectProvider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__provider_schedule_provider_schedule__["a" /* ProviderSchedulePage */], this.value);
    };
    ProviderProfilePage.prototype.shareViaWhatsApp = function (item) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.socialSharing.shareViaWhatsAppToReceiver(item.phone, 'Olá, te vi no uberservice. Queria contratar seu serviço', null, null).then(function () {
                // métricas whatsapp
            });
        }
    };
    ProviderProfilePage.prototype.call = function (item) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.callNumber.isCallSupported()
                .then(function (response) {
                if (response == true) {
                    this.callNumber.callNumber(item.phone, true)
                        .then(function (res) {
                        // métricas de click no telefone
                    })
                        .catch(function (err) {
                    });
                }
            });
        }
    };
    ProviderProfilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProviderProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-profile',template:/*ion-inline-start:"/export/uberservice/app/src/pages/provider-profile/provider-profile.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" />\n      </svg>\n    </a>\n    <div class="content">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n  </nav>\n  <div class="providerProfile">\n    <div class="providerAvatar">\n        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">\n    </div>\n    <h2>\n      {{provider?.first_name}}\n    </h2>\n    <ul class="rate">\n      <li>\n          <img [src]="provider?.rating?.average >= 1 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n      </li>\n      <li>\n          <img [src]="provider?.rating?.average >= 2 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n      </li>\n      <li>\n          <img [src]="provider?.rating?.average >= 3 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n      </li>\n      <li>\n          <img [src]="provider?.rating?.average >= 4 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n      </li>\n      <li>\n          <img [src]="provider?.rating?.average >= 5 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n      </li>\n      <li>\n        {{provider?.rating?.count_rating || 0}} {{provider?.rating?.count_rating === 1 ? \'avaliação\' : \'avaliações\'}}\n      </li>\n    </ul>\n    <span class="distance">\n        a {{provider?.address?.loc?.distance / 1000 | number: \'1.1-1\'}}km de você\n    </span>\n    <div class="info">\n      <p>\n        <a (click)="shareViaWhatsApp(provider)" class="button">\n          Chamar no WhatsApp\n        </a>\n      </p>\n      <br>\n      <p>\n        <a (click)="call(provider)" class="button">\n          Ligar para {{provider?.phone}}\n        </a>\n      </p>\n      <br>\n      <p>\n        {{provider?.description}}\n      </p>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/provider-profile/provider-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ProviderProfilePage);
    return ProviderProfilePage;
}());

//# sourceMappingURL=provider-profile.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_place_provider_place__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProviderSchedulePage = /** @class */ (function () {
    function ProviderSchedulePage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            day: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            time: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.value = this.navParams.data;
    }
    ProviderSchedulePage.prototype.ionViewDidLoad = function () {
        for (var k in this.form.controls) {
            var control = this.form.controls[k];
            if (this.value[k]) {
                control.setValue(this.value[k]);
            }
        }
    };
    ProviderSchedulePage.prototype.submit = function () {
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Preencha o dia e horário',
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__provider_place_provider_place__["a" /* ProviderPlacePage */], Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))));
    };
    ProviderSchedulePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProviderSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-schedule',template:/*ion-inline-start:"/export/uberservice/app/src/pages/provider-schedule/provider-schedule.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n        <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n            <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" />\n        </svg>\n    </a>\n    <div class="content">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n  </nav>\n  <div class="providerProfile">\n    <div class="providerAvatar">\n        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">\n    </div>\n    <h2>\n        João Silva Cardoso\n    </h2>\n    <ul class="rate">\n      <li>\n        <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n      </li>\n      <li>\n        18 avaliações\n      </li>\n    </ul>\n    <p class="separator">\n        Marque o dia e horário que<br />\n        deseja agendar:\n    </p>\n    <div [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Dia escolhido</span>\n          <!-- <input formControlName="day" type="text" placeholder="23/05/2018" /> -->\n          <ion-datetime placeholder="23/05/2018" formControlName="day" displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY"></ion-datetime>\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Horário</span>\n          <ion-datetime placeholder="10:30" formControlName="time" displayFormat="H:mm" pickerFormat="H mm"></ion-datetime>\n        </div>\n      </label>\n    </div>\n    <a (click)="submit()" class="button sticky">\n      Avançar →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/provider-schedule/provider-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProviderSchedulePage);
    return ProviderSchedulePage;
}());

//# sourceMappingURL=provider-schedule.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_summary_service_summary__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_util_util__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderPlacePage = /** @class */ (function () {
    function ProviderPlacePage(navCtrl, navParams, formBuilder, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.util = new __WEBPACK_IMPORTED_MODULE_4__shared_util_util__["a" /* default */]();
        this.form = this.formBuilder.group({
            postal_code: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            address: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            number: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            complement: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            neighborhood: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.value = this.navParams.data;
        // postal code mask
        this.form.get('postal_code').valueChanges.subscribe(function (v) {
            _this.form.get('postal_code').setValue(_this.util.mask(v, '#####-###'), { emitEvent: false });
        });
    }
    ProviderPlacePage.prototype.ionViewDidLoad = function () {
        for (var k in this.form.controls) {
            var control = this.form.controls[k];
            if (this.value[k]) {
                control.setValue(this.value[k]);
            }
        }
    };
    ProviderPlacePage.prototype.submit = function () {
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Preencha todos os campos',
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_summary_service_summary__["a" /* ServiceSummaryPage */], Object.assign(this.value, {
            address: JSON.parse(JSON.stringify(this.form.value))
        }));
    };
    ProviderPlacePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProviderPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-provider-place',template:/*ion-inline-start:"/export/uberservice/app/src/pages/provider-place/provider-place.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" />\n      </svg>\n    </a>\n    <div class="content">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n  </nav>\n  <div class="providerProfile">\n    <div class="providerAvatar">\n      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg">\n    </div>\n    <h2>\n      João Silva Cardoso\n    </h2>\n    <ul class="rate">\n      <li>\n        <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n      </li>\n      <li>\n        <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n      </li>\n      <li>\n        18 avaliações\n      </li>\n    </ul>\n    <p class="separator">\n      Informe o local onde o serviço<br />\n      será realizado:\n    </p>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Código postal (CEP)</span>\n          <input pattern="[0-9-]*" formControlName="postal_code" type="text" maxlength="9" placeholder="12345-678" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Endereço</span>\n          <input formControlName="address" type="text" placeholder="Ex.: Av. Paulista" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Número</span>\n          <input pattern="[0-9]*" formControlName="number" type="number" placeholder="592" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Complemento</span>\n          <input formControlName="complement" type="text" placeholder="Apto 30" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Bairro</span>\n          <input formControlName="neighborhood" type="text" placeholder="Bela Vista" />\n        </div>\n      </label>\n    </form>\n    <a (click)="submit()" class="button sticky">\n      Avançar →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/provider-place/provider-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProviderPlacePage);
    return ProviderPlacePage;
}());

//# sourceMappingURL=provider-place.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_hired_service_hired__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceSummaryPage = /** @class */ (function () {
    function ServiceSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = this.navParams.data;
    }
    ServiceSummaryPage.prototype.ionViewDidLoad = function () { };
    ServiceSummaryPage.prototype.checkout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_hired_service_hired__["a" /* ServiceHiredPage */], this.value);
    };
    ServiceSummaryPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-summary',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-summary/service-summary.html"*/'<ion-content class="bgGray">\n  <nav>\n      <a (click)="back()" alt="Return" class="button left">\n          <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n              <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" />\n          </svg>\n      </a>\n      <div class="content">\n          <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n      </div>\n  </nav>\n  <div class="serviceSummary">\n      <p class="separator">\n          Detalhes da contratação:\n      </p>\n      <a class="item" href="11-provider-schedule.html">\n          <div class="verticallyCenter">\n              <i class="verticallyCenter">\n                  🗓\n              </i>\n              <span>\n                  Data\n              </span>\n              <p>\n                  23/06/2018\n              </p>\n          </div>\n      </a>\n      <a class="item" href="11-provider-schedule.html">\n          <div class="verticallyCenter">\n              <i class="verticallyCenter">\n                  🕑\n              </i>\n              <span>\n                  Horário\n              </span>\n              <p>\n                  13:00\n              </p>\n          </div>\n      </a>\n      <a class="item" href="06-select-service.html">\n          <div class="verticallyCenter">\n              <i class="verticallyCenter">\n                  🤝\n              </i>\n              <span>\n                  Serviço\n              </span>\n              <p>\n                  Limpeza\n              </p>\n          </div>\n      </a>\n      <a class="item" href="09-service-provider.html">\n          <div class="verticallyCenter">\n              <i class="verticallyCenter">\n                  👨‍🔧\n              </i>\n              <span>\n                  Prestador\n              </span>\n              <p>\n                  João Silva Cardoso\n              </p>\n          </div>\n      </a>\n      <a class="item">\n          <div class="verticallyCenter">\n              <i class="verticallyCenter">\n                  💵\n              </i>\n              <span>\n                  Valor\n              </span>\n              <p>\n                  R$75,00\n              </p>\n          </div>\n      </a>\n      <a class="item">\n          <div class="verticallyCenter">\n              <i class="verticallyCenter">\n                  💳\n              </i>\n              <span>\n                  Forma de pagamento\n              </span>\n              <p>\n                  Cartão de Crédito\n              </p>\n          </div>\n      </a>\n      <p class="terms">\n          Declaro que li a política de uso e <br>termos de serviço deste aplicativo.\n      </p>\n      <a (click)="checkout()" class="button sticky">\n          Finalizar Contratar por R$75 →\n      </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-summary/service-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceSummaryPage);
    return ServiceSummaryPage;
}());

//# sourceMappingURL=service-summary.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHiredPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_service_select_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceHiredPage = /** @class */ (function () {
    function ServiceHiredPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = this.navParams.data;
    }
    ServiceHiredPage.prototype.ionViewDidLoad = function () { };
    ServiceHiredPage.prototype.close = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_service_select_service__["a" /* SelectServicePage */]);
    };
    ServiceHiredPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceHiredPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-hired',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-hired/service-hired.html"*/'<ion-content class="bgGray">\n  <div class="serviceHired">\n    <a (click)="close()" class="close">\n      <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M9 6.545L15.545 0l1.415 1.414-6.546 6.546 6.89 6.89-1.414 1.413L9 9.373l-6.89 6.89L.696 14.85l6.89-6.89L1.04 1.415 2.455 0 9 6.545z" fill="#000" fill-rule="evenodd"/></svg>\n    </a>\n    <div class="verticallyCenter">\n      <svg width="86" height="85" xmlns="http://www.w3.org/2000/svg"><path d="M42.914 79.795c20.706 0 37.488-16.746 37.488-37.397C80.402 21.746 63.62 5 42.914 5S5.427 21.746 5.427 42.398c0 20.651 16.781 37.397 37.487 37.397zm0 5C19.45 84.795.427 65.813.427 42.398.427 18.982 19.449 0 42.914 0 66.38 0 85.402 18.982 85.402 42.398c0 23.415-19.023 42.397-42.488 42.397zm-7.996-32.248l-9.236-8.397a2.5 2.5 0 0 0-3.364 3.7l11 10a2.5 2.5 0 0 0 3.45-.082l25-25a2.5 2.5 0 0 0-3.536-3.536L34.918 52.547z" fill="#FF7B00" fill-rule="nonzero"/></svg>\n      <h2>Pedido realizado!</h2>\n      <p>\n        Aguarde só mais um pouco para<br />\n        confirmarmos a contratação<br />\n        deste serviço.\n      </p>\n    </div>\n    <a (click)="close()" class="button sticky">\n      Concluir\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-hired/service-hired.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceHiredPage);
    return ServiceHiredPage;
}());

//# sourceMappingURL=service-hired.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_service_select_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(37);
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
    function PasswordPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
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
        var _this = this;
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
        this.showLoading();
        this.auth.create(Object.assign(this.value, JSON.parse(JSON.stringify(this.form.value))))
            .then(function (r) {
            _this.loading.dismiss().then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_service_select_service__["a" /* SelectServicePage */]); });
        })
            .catch(function (e) {
            var alert = _this.alertCtrl.create({
                title: 'Falha',
                subTitle: 'Ocorreu um erro efetuar o cadastro',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () { }
                    }
                ]
            });
            alert.present();
        });
    };
    PasswordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PasswordPage.prototype.showLoading = function (message) {
        if (message === void 0) { message = ''; }
        this.loading = this.loadingCtrl.create({
            content: message || 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/export/uberservice/app/src/pages/password/password.html"*/'<ion-content class="bgGray">\n  <nav>\n    <a (click)="back()" alt="Return" class="button left">\n      <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n    </a>\n    <div class="content">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n    <!-- <a href="00-menu.html" alt="Menu" class="button right">\n        <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd"/></svg>\n    </a> -->\n  </nav>\n  <div class="signUp">\n    <p>\n      Você não tem cadastro, <br />\n      crie grátis sua conta!\n    </p>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Defina uma senha</span>\n          <input formControlName="password" type="password" placeholder="Pelo menos 6 caracteres" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>Repita a senha</span>\n          <input formControlName="repassword" type="password" placeholder="Confirme a senha" />\n        </div>\n      </label>\n    </form>\n    <a (click)="submit()" class="button sticky">\n      Criar conta →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_provider_service_provider__ = __webpack_require__(59);
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
    function ServiceSchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ServiceSchedulePage);
    return ServiceSchedulePage;
}());

//# sourceMappingURL=service-schedule.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(114);
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
    function SigninPage(navCtrl, navParams, formBuilder, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
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
        var _this = this;
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
        this.auth.check({ phone: this.form.get('phone').value })
            .then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], Object.assign(_this.value, JSON.parse(JSON.stringify(_this.form.value))));
        }).catch(function (error) {
            if (error.status == 404) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */], Object.assign(_this.value, JSON.parse(JSON.stringify(_this.form.value))));
            }
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/export/uberservice/app/src/pages/signin/signin.html"*/'<ion-content>\n  <div class="signIn">\n    <div class="header">\n        <div class="verticallyCenter">\n            <img src="../assets/imgs/logo-us-vertical.svg" height="117" alt="Uber Service" />\n            <p>\n                O aplicativo que você encontra <br />\n                o serviço que tanto procura\n            </p>\n        </div>\n    </div>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Informe o seu telefone</span>\n          <input maxlength="15" formControlName="phone" type="text" placeholder="(11) 93219-0132" />\n        </div>\n        </label>\n        <a href="#" class="button secondary">\n          Entrar como prestador de serviços\n        </a>\n        <a (click)="submit()" class="button">\n          Avançar →\n        </a>\n    </form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(37);
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
    function SignupPage(navCtrl, navParams, formBuilder, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.form = this.formBuilder.group({
            first_name: [null, [
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
        var _this = this;
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: !this.form.get('first_name').valid ? 'Por favor, insira seu nome' : 'Por favor, insira um e-mail válido',
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
        this.auth.check({ email: this.form.get('email').value }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'E-mail já cadastrado',
                subTitle: 'O e-mail digitado já está em uso',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () { }
                    }
                ]
            });
            alert.present();
        }).catch(function (error) {
            if (error.status == 404) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__password_password__["a" /* PasswordPage */], Object.assign(_this.value, JSON.parse(JSON.stringify(_this.form.value))));
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Falha',
                    subTitle: 'Ocorreu uma falhar ao verificar o e-mail. Tente novamente',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () { }
                        }
                    ]
                });
                alert_2.present();
            }
        });
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/export/uberservice/app/src/pages/signup/signup.html"*/'<ion-content class="bgGray">\n  <nav>\n      <a (click)="back()" alt="Return" class="button left">\n          <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n      </a>\n      <div class="content">\n          <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n      </div>\n      <!-- <a href="00-menu.html" alt="Menu" class="button right">\n          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd"/></svg>\n      </a> -->\n  </nav>\n  <div class="signUp">\n    <p>\n        Você não tem cadastro, <br />\n        crie grátis sua conta!\n    </p>\n    <form [formGroup]="form">\n      <label>\n        <div class="verticallyCenter">\n          <span>Nome</span>\n          <input type="text" formControlName="first_name" placeholder="Maria Silva" />\n        </div>\n      </label>\n      <label>\n        <div class="verticallyCenter">\n          <span>E-mail</span>\n          <input type="email" formControlName="email" placeholder="maria.silva@email.com" />\n        </div>\n      </label>\n    </form>\n    <a (click)="submit()" class="button sticky">\n        Avançar →\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acquired-services/acquired-services.module": [
		444,
		18
	],
	"../pages/after-hire/after-hire.module": [
		445,
		17
	],
	"../pages/login/login.module": [
		446,
		16
	],
	"../pages/menu/menu.module": [
		447,
		15
	],
	"../pages/password/password.module": [
		448,
		14
	],
	"../pages/provider-place/provider-place.module": [
		449,
		13
	],
	"../pages/provider-profile/provider-profile.module": [
		450,
		12
	],
	"../pages/provider-schedule/provider-schedule.module": [
		451,
		11
	],
	"../pages/select-service/select-service.module": [
		452,
		10
	],
	"../pages/service-cancel/service-cancel.module": [
		453,
		9
	],
	"../pages/service-hired-profile/service-hired-profile.module": [
		454,
		8
	],
	"../pages/service-hired/service-hired.module": [
		455,
		7
	],
	"../pages/service-provider-rate/service-provider-rate.module": [
		456,
		6
	],
	"../pages/service-provider/service-provider.module": [
		457,
		5
	],
	"../pages/service-schedule/service-schedule.module": [
		458,
		4
	],
	"../pages/service-settings/service-settings.module": [
		459,
		3
	],
	"../pages/service-summary/service-summary.module": [
		460,
		2
	],
	"../pages/signin/signin.module": [
		461,
		1
	],
	"../pages/signup/signup.module": [
		462,
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
webpackAsyncContext.id = 180;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customHttp__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(92);
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






var UsersServiceProvider = /** @class */ (function () {
    function UsersServiceProvider(http) {
        this.http = http;
        this.apiHost = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].API_HOST;
        this.headers = {};
    }
    UsersServiceProvider.prototype.searchByGeo = function (params) {
        return this.http.get(this.apiHost + "/users/geosearch", params, { headers: JSON.parse(JSON.stringify(this.headers)) });
    };
    UsersServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customHttp__["a" /* CustomHttp */]])
    ], UsersServiceProvider);
    return UsersServiceProvider;
}());

//# sourceMappingURL=users-service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_angular__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_native__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpProvider = /** @class */ (function () {
    function HttpProvider(platform, angularHttp, nativeHttp) {
        this.platform = platform;
        this.angularHttp = angularHttp;
        this.nativeHttp = nativeHttp;
        this.http = this.platform.is('ios') || this.platform.is('android') ? this.nativeHttp : this.angularHttp;
    }
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_3__http_native__["a" /* HttpNativeProvider */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=httpProvider.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpAngularProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpAngularProvider = /** @class */ (function () {
    function HttpAngularProvider(http) {
        this.http = http;
    }
    HttpAngularProvider.prototype.get = function (url, params, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var requestOptions = this.getRequestOptionArgs(options);
        requestOptions.params = params ? this.createSearchParams(params) : requestOptions.params;
        return this.http.get(url, requestOptions)
            .map(function (resp) { return _this.parseResult(resp, options); }).toPromise();
    };
    HttpAngularProvider.prototype.post = function (url, params, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var requestOptions = this.getRequestOptionArgs(options);
        var body = this.createSearchParams(params);
        return this.http.post(url, body, requestOptions)
            .map(function (resp) { return _this.parseResult(resp, options); }).toPromise();
    };
    HttpAngularProvider.prototype.put = function (url, params, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var requestOptions = this.getRequestOptionArgs(options);
        var body = this.createSearchParams(params);
        return this.http.put(url, body, requestOptions)
            .map(function (resp) { return _this.parseResult(resp, options); }).toPromise();
    };
    HttpAngularProvider.prototype.delete = function (url, params, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var requestOptions = this.getRequestOptionArgs(options);
        return this.http.delete(url, requestOptions)
            .map(function (resp) { return _this.parseResult(resp, options); }).toPromise();
    };
    HttpAngularProvider.prototype.createSearchParams = function (params) {
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var k in params) {
            if (params.hasOwnProperty(k)) {
                searchParams.set(k, params[k]);
            }
        }
        return searchParams;
    };
    HttpAngularProvider.prototype.parseResult = function (result, options) {
        return {
            body: options.responseType == 'text' ? result.text() : result.json(),
            headers: result.headers,
            status: result.status,
            code: result.code
        };
    };
    HttpAngularProvider.prototype.getRequestOptionArgs = function (opts) {
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        requestOptions.withCredentials = true;
        if (requestOptions.headers == null) {
            requestOptions.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        }
        // authorization
        if (!requestOptions.headers.get('X-Auth-Session')) {
            requestOptions.headers.append('X-Auth-Session', __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].settings.auth.session);
        }
        for (var k in (opts.headers || {})) {
            var value = opts.headers[k];
            requestOptions.headers.append(k, value);
        }
        return requestOptions;
    };
    HttpAngularProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpAngularProvider);
    return HttpAngularProvider;
}());

//# sourceMappingURL=http-angular.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpNativeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpNativeProvider = /** @class */ (function () {
    function HttpNativeProvider(http) {
        this.http = http;
    }
    HttpNativeProvider.prototype.get = function (url, params, options) {
        if (options === void 0) { options = {}; }
        var responseData = this.http.get(url, params, {})
            .then(function (resp) { return options.responseType == 'text' ? resp.data : JSON.parse(resp.data); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(responseData);
    };
    HttpNativeProvider.prototype.post = function (url, params, options) {
        if (options === void 0) { options = {}; }
        var responseData = this.http.post(url, params, {})
            .then(function (resp) { return options.responseType == 'text' ? resp.data : JSON.parse(resp.data); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(responseData);
    };
    HttpNativeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], HttpNativeProvider);
    return HttpNativeProvider;
}());

//# sourceMappingURL=http-native.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_hired_profile_service_hired_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_provider_service_provider__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// No modo completo, ira direcionar pra ServiceSettings
//import { ServiceSettingsPage } from '../service-settings/service-settings';

var SelectServicePage = /** @class */ (function () {
    function SelectServicePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SelectServicePage.prototype.ionViewDidLoad = function () {
    };
    SelectServicePage.prototype.navigateToServices = function (param) {
        // No modo completo, ira direcionar pra ServiceSettings
        //this.navCtrl.push(ServiceSettingsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__service_provider_service_provider__["a" /* ServiceProviderPage */]);
    };
    SelectServicePage.prototype.navigateToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    SelectServicePage.prototype.servicePreview = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__service_hired_profile_service_hired_profile__["a" /* ServiceHiredProfilePage */], item);
        modal.present();
    };
    SelectServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-service',template:/*ion-inline-start:"/export/uberservice/app/src/pages/select-service/select-service.html"*/'<ion-content class="bgGray">\n  <nav>\n    <!-- <a href="" alt="Return" class="button left">\n        <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd"/></svg>\n    </a> -->\n    <div class="content noLeft">\n      <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n    </div>\n    <a (click)="navigateToMenu()" alt="Menu" class="button right">\n      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd"/></svg>\n    </a>\n  </nav>\n  <div class="serviceProvider">\n    <!-- <p> Veja os prestadores de <br />serviço de limpeza: </p>\n    <a class="card" (click)="servicePreview()">\n        <div class="content">\n            <div class="icHired">\n                ✅\n            </div>\n            <p class="date">\n                20/02/18 às 09:00\n            </p>\n            <h3>\n                João Silva Cardoso\n            </h3>\n            <p class="address">\n                Avenida Paulista, 500 - Apto 100 - Bela Vista - São Paulo - SP\n            </p>\n        </div>\n        <div class="separator"></div>\n        <div class="content">\n            <div class="avatar">\n                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="56" />\n            </div>\n            <p class="distance">\n                2,5km de você\n            </p>\n            <h3>\n                João Silva Cardoso\n            </h3>\n            <ul class="rate">\n                <li>\n                    <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n                </li>\n                <li>\n                    <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n                </li>\n                <li>\n                    <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n                </li>\n                <li>\n                    <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n                </li>\n                <li>\n                    <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n                </li>\n                <li>\n                    18 avaliações\n                </li>\n            </ul>\n        </div>\n    </a> -->\n    <div class="serviceType after">\n      <p>\n        Conecte-se para poder encontrar<br />\n        prestadores de serviços próximos a você!\n      </p>\n      <a (click)="navigateToServices()" class="card cleaningServices">\n        <span class="content verticallyCenter">\n          <h1>\n            Serviços de<br />\n            Limpeza\n          </h1>\n        </span>\n      </a>\n      <a (click)="navigateToServices(true)" class="card otherServices">\n        <span class="content verticallyCenter">\n          <h1>\n            Outros<br />\n            Serviços\n          </h1>\n        </span>\n      </a>\n      <a (click)="navigateToServices()" class="card hide">\n        <span class="content">\n          <p class="icon">\n              🏢\n          </p>\n          <h2>\n              teste\n          </h2>\n          <p>\n              teste\n          </p>\n        </span>\n      </a>\n      <div class="card hide">\n        <div class="content">\n          <div class="avatar">\n            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="56" />\n          </div>\n          <p class="distance">\n            2,5km de você\n          </p>\n          <h3>\n            João Silva Cardoso\n            <!-- No máximo 16 caracteres -->\n          </h3>\n          <ul class="rate">\n            <li>\n                <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n            </li>\n            <li>\n                <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n            </li>\n            <li>\n                <img src="../assets/imgs/star-full.svg" width="13" height="12" />\n            </li>\n            <li>\n                <img src="../assets/imgs/star-half.svg" width="13" height="12" />\n            </li>\n            <li>\n                <img src="../assets/imgs/star-empty.svg" width="13" height="12" />\n            </li>\n            <li>\n                18 avaliações\n            </li>\n          </ul>\n          <p class="info">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam porro nemo quidem incidunt quos labore.\n          </p>\n          <a href="" class="button">\n            teste\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/select-service/select-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], SelectServicePage);
    return SelectServicePage;
}());

//# sourceMappingURL=select-service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcquiredServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterHirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderRatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_schedule_service_schedule__ = __webpack_require__(123);
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
    function ServiceSettingsPage(navCtrl, navParams, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ServiceSettingsPage);
    return ServiceSettingsPage;
}());

//# sourceMappingURL=service-settings.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    API_HOST: 'http://localhost:9292',
    settings: {
        auth: {
            session: null,
            user: null
        }
    },
    location: { latitude: null, longitude: null }
});
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customHttp__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
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
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiHost = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* default */].API_HOST;
        this.headers = {};
    }
    AuthServiceProvider.prototype.create = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiHost + "/users/insert", params, { headers: JSON.parse(JSON.stringify(_this.headers)) })
                .then(function (r) {
                _this.authenticate(params.phone, params.password)
                    .then(resolve)
                    .catch(reject);
            }).catch(reject);
        });
    };
    AuthServiceProvider.prototype.authenticate = function (phone, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiHost + "/authorization/local/login", { phone: phone, password: password }, { headers: JSON.parse(JSON.stringify(_this.headers)) })
                .then(function (r) {
                var session = r.headers.get('x-auth-session');
                if (!session) {
                    return reject();
                }
                _this.storage.get('settings').then(function (settings) {
                    if (!settings) {
                        return reject();
                    }
                    settings.auth.session = session;
                    settings.auth.user = r.body.data.user;
                    _this.storage.set('settings', settings).then(function () {
                        __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* default */].settings = settings;
                        resolve(r.body);
                    }).catch(reject);
                }).catch(reject);
            }).catch(reject);
        });
    };
    AuthServiceProvider.prototype.check = function (params) {
        return this.http.get(this.apiHost + "/users/check", params);
    };
    AuthServiceProvider.prototype.me = function (session) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiHost + "/authorization/local/me", null, {
                parse: false
            }).then(function (r) {
                _this.storage.get('settings').then(function (settings) {
                    if (!settings) {
                        return reject();
                    }
                    settings.auth.session = session;
                    settings.auth.user = r.body.data;
                    _this.storage.set('settings', settings).then(function () {
                        __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* default */].settings = settings;
                        resolve(r.body);
                    }).catch(reject);
                }).catch(reject);
            }).catch(reject);
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customHttp__["a" /* CustomHttp */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_phone__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_password_password__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_select_service_select_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_service_settings_service_settings__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_service_schedule_service_schedule__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_service_provider_service_provider__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_provider_profile_provider_profile__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_provider_schedule_provider_schedule__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_provider_place_provider_place__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_service_summary_service_summary__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_service_hired_service_hired__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_after_hire_after_hire__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_service_hired_profile_service_hired_profile__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_service_provider_rate_service_provider_rate__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_service_cancel_service_cancel__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_acquired_services_acquired_services__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_truncate__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_users_service_users_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_httpProvider__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_http_angular__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_http_native__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_customHttp__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Pages



















// Pipes









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_select_service_select_service__["a" /* SelectServicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_service_settings_service_settings__["a" /* ServiceSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_service_schedule_service_schedule__["a" /* ServiceSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_service_provider_service_provider__["a" /* ServiceProviderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_provider_profile_provider_profile__["a" /* ProviderProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_provider_schedule_provider_schedule__["a" /* ProviderSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_provider_place_provider_place__["a" /* ProviderPlacePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_service_summary_service_summary__["a" /* ServiceSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_service_hired_service_hired__["a" /* ServiceHiredPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_after_hire_after_hire__["a" /* AfterHirePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_service_hired_profile_service_hired_profile__["a" /* ServiceHiredProfilePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_service_provider_rate_service_provider_rate__["a" /* ServiceProviderRatePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_service_cancel_service_cancel__["a" /* ServiceCancelPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_acquired_services_acquired_services__["a" /* AcquiredServicesPage */],
                __WEBPACK_IMPORTED_MODULE_10__directives_phone__["a" /* PhoneMask */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_truncate__["a" /* TruncatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_select_service_select_service__["a" /* SelectServicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_service_settings_service_settings__["a" /* ServiceSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_service_schedule_service_schedule__["a" /* ServiceSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_service_provider_service_provider__["a" /* ServiceProviderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_provider_profile_provider_profile__["a" /* ProviderProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_provider_schedule_provider_schedule__["a" /* ProviderSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_provider_place_provider_place__["a" /* ProviderPlacePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_service_summary_service_summary__["a" /* ServiceSummaryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_service_hired_service_hired__["a" /* ServiceHiredPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_after_hire_after_hire__["a" /* AfterHirePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_service_hired_profile_service_hired_profile__["a" /* ServiceHiredProfilePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_service_provider_rate_service_provider_rate__["a" /* ServiceProviderRatePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_service_cancel_service_cancel__["a" /* ServiceCancelPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_acquired_services_acquired_services__["a" /* AcquiredServicesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_34__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_users_service_users_service__["a" /* UsersServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_10__directives_phone__["a" /* PhoneMask */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_36__providers_httpProvider__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_http_angular__["a" /* HttpAngularProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_http_native__["a" /* HttpNativeProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_customHttp__["a" /* CustomHttp */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_service_select_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* default */].settings.auth.user;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    MenuPage.prototype.navigation = function (page) {
        switch (page) {
            case 'select-service':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_service_select_service__["a" /* SelectServicePage */]);
                break;
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/export/uberservice/app/src/pages/menu/menu.html"*/'<ion-content>\n  <div class="menu">\n    <div class="container">\n        <a (click)="close()" class="close">\n            <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">\n                <path d="M9 6.545L15.545 0l1.415 1.414-6.546 6.546 6.89 6.89-1.414 1.413L9 9.373l-6.89 6.89L.696 14.85l6.89-6.89L1.04 1.415 2.455 0 9 6.545z" fill="#000" fill-rule="evenodd" />\n            </svg>\n        </a>\n        <div class="userData">\n            <div class="avatar">\n                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="56p" />\n            </div>\n            <div class="info">\n                <h4>{{user.first_name}}</h4>\n                <p>{{user.email}}</p>\n            </div>\n        </div>\n        <ul class="nav">\n            <li>\n                <a (click)="navigation(\'select-service\')" title="Início">\n                    <i>🏡</i>\n                    Início\n                </a>\n            </li>\n            <!-- <li>\n                <a href="../files/19-acquired-services.html" title="Serviços contratados">\n                    <i>✍️</i>\n                    Serviços contratados\n                    <span>2</span>\n                </a>\n            </li> -->\n            <li>\n                <a href="" title="Termos de Serviço & Política">\n                    <i>📝</i>\n                    Termos & Política\n                </a>\n            </li>\n            <li>\n                <a href="" title="Ajuda">\n                    <i>🆘</i>\n                    Ajuda\n                </a>\n            </li>\n            <li>\n                <a href="" title="Sobre a UberService">\n                    <i>👀</i>\n                    Sobre a UberService\n                </a>\n            </li>\n        </ul>\n        <ul class="social">\n            <li>\n                <a href="" title="Facebook da UberService">\n                    <svg width="42" height="42" xmlns="http://www.w3.org/2000/svg"><path d="M29.385 41V26.86h4.718l.706-5.511h-5.424V17.83c0-1.595.44-2.683 2.715-2.683H35v-4.93c-.502-.067-2.223-.217-4.226-.217-4.182 0-7.045 2.568-7.045 7.284v4.065H19v5.51h4.73V41H7a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6h-5.615z" fill="#4460A0" stroke="#000" stroke-width=".5" fill-rule="evenodd" stroke-opacity=".05"/></svg>\n                </a>\n            </li>\n            <li>\n                <a href="" title="Twitter da UberService">\n                    <svg width="42" height="42" xmlns="http://www.w3.org/2000/svg"><path d="M7 1h28a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6zm28 11.604c-.955.442-1.984.74-3.063.874a5.53 5.53 0 0 0 2.346-3.071 10.413 10.413 0 0 1-3.39 1.346A5.225 5.225 0 0 0 27 10c-2.944 0-5.332 2.487-5.332 5.554 0 .435.046.858.137 1.264-4.433-.232-8.363-2.44-10.995-5.804a5.722 5.722 0 0 0-.722 2.795c0 1.926.942 3.626 2.373 4.622a5.178 5.178 0 0 1-2.417-.692v.068c0 2.692 1.839 4.937 4.28 5.445-.447.13-.918.196-1.405.196-.343 0-.68-.033-1.004-.099.679 2.206 2.648 3.812 4.983 3.855A10.434 10.434 0 0 1 9 29.507 14.691 14.691 0 0 0 17.177 32c9.813 0 15.177-8.462 15.177-15.801 0-.242-.005-.483-.014-.72A11.05 11.05 0 0 0 35 12.604z" fill="#00AAEC" stroke="#000" stroke-width=".5" fill-rule="evenodd" stroke-opacity=".05"/></svg>\n                </a>\n            </li>\n            <li>\n                <a href="" title="WhatsApp da UberService">\n                    <svg width="42" height="42" xmlns="http://www.w3.org/2000/svg"><path d="M7 1h28a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6zm13.997 8C14.38 9 9 14.383 9 21c0 2.624.846 5.058 2.285 7.033L9.79 32.492l4.612-1.474A11.905 11.905 0 0 0 21.003 33C27.62 33 33 27.617 33 21S27.619 9 21.003 9h-.006zm-3.35 6.095c.289.699.994 2.42 1.078 2.596.085.177.17.417.05.65-.113.24-.212.345-.388.55-.176.205-.346.36-.522.578-.162.19-.346.396-.14.748.203.346.909 1.496 1.945 2.42 1.34 1.192 2.427 1.573 2.815 1.735.289.12.634.092.846-.134.268-.289.6-.769.938-1.241.24-.339.543-.381.86-.262.325.113 2.039.96 2.391 1.136.353.177.586.261.67.41.085.148.085.846-.204 1.665-.29.818-1.44 1.495-2.356 1.693-.628.134-1.446.24-4.203-.903-3.527-1.46-5.798-5.045-5.974-5.277-.17-.233-1.425-1.898-1.425-3.62 0-1.72.875-2.56 1.228-2.92.289-.296.768-.43 1.227-.43.148 0 .282.007.402.014.352.014.529.035.761.592z" fill="#67C15E" stroke="#000" stroke-width=".5" fill-rule="evenodd" stroke-opacity=".05"/></svg>\n                </a>\n            </li>\n        </ul>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.mask = function (v, mask) {
        if (v === void 0) { v = ''; }
        var i = v.length;
        var output = mask.substring(1, 0);
        var text = mask.substring(i);
        if (text.substring(0, 1) != output) {
            v += text.substring(0, 1);
        }
        return v;
    };
    return Util;
}());
/* harmony default export */ __webpack_exports__["a"] = (Util);
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_select_service_select_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__(36);
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
    function MyApp(platform, alertCtrl, statusBar, splashScreen, modalCtrl, storage, auth, loadingCtrl, events, menuCtrl, geolocation) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.geolocation = geolocation;
        this.initiated = false;
        this.menuItems = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_5_moment__["locale"]('pt-BR');
            var perform = function () {
                _this.initiated = true;
                // inexistent session
                if (!__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].settings.auth.session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
                    return;
                }
                _this.showLoading();
                // check session
                _this.auth.me(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].settings.auth.session).then(function () {
                    _this.loading.dismiss().then(function () { return _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_select_service_select_service__["a" /* SelectServicePage */]; });
                }).catch(function (e) {
                    if (e.status == 401) {
                        _this.loading.dismiss().then(function () { return _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]); });
                    }
                    else {
                        _this.loading.dismiss().then(function () {
                            var alert = _this.alertCtrl.create({
                                title: 'HTTP failed',
                                subTitle: 'Unable to connect to default server',
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: function () {
                                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        });
                    }
                });
            };
            _this.geolocation.watchPosition().subscribe(function (data) {
                __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].location.latitude = data.coords.latitude;
                __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].location.longitude = data.coords.longitude;
                if (_this.initiated) {
                    return;
                }
                _this.storage.get('settings').then(function (settings) {
                    if (!settings) {
                        _this.storage.set('settings', __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].settings).then(function () { return perform(); });
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* default */].settings = settings;
                    perform();
                });
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Falha ao obter sua localização',
                    subTitle: 'Não foi possível obter sua localização. Certifique-se de que seu GPS está ativado',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () { }
                        }
                    ]
                });
                alert.present();
            });
            // const splash = modalCtrl.create(SplashPage);
            // splash.present();
        });
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/export/uberservice/app/src/app/app.html"*/'<!-- <ion-menu class="side-menu" [content]="mycontent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Devices</ion-title>\n      <ion-buttons end>\n        <button class="settings" ion-button color="black" menuClose icon-only (click)="goToDevices()">\n          <ion-icon name="ios-settings"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button [ngClass]="current == item.id ? \'active\' : \'\'" *ngFor="let item of settings.devices" ion-item (click)="setDevice(item.id)">\n        {{item.params.name}}\n        <ion-icon class="favorite" *ngIf="item.params.default" name="md-star" color="primary"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu> -->\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/export/uberservice/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 227,
	"./af.js": 227,
	"./ar": 228,
	"./ar-dz": 229,
	"./ar-dz.js": 229,
	"./ar-kw": 230,
	"./ar-kw.js": 230,
	"./ar-ly": 231,
	"./ar-ly.js": 231,
	"./ar-ma": 232,
	"./ar-ma.js": 232,
	"./ar-sa": 233,
	"./ar-sa.js": 233,
	"./ar-tn": 234,
	"./ar-tn.js": 234,
	"./ar.js": 228,
	"./az": 235,
	"./az.js": 235,
	"./be": 236,
	"./be.js": 236,
	"./bg": 237,
	"./bg.js": 237,
	"./bm": 238,
	"./bm.js": 238,
	"./bn": 239,
	"./bn.js": 239,
	"./bo": 240,
	"./bo.js": 240,
	"./br": 241,
	"./br.js": 241,
	"./bs": 242,
	"./bs.js": 242,
	"./ca": 243,
	"./ca.js": 243,
	"./cs": 244,
	"./cs.js": 244,
	"./cv": 245,
	"./cv.js": 245,
	"./cy": 246,
	"./cy.js": 246,
	"./da": 247,
	"./da.js": 247,
	"./de": 248,
	"./de-at": 249,
	"./de-at.js": 249,
	"./de-ch": 250,
	"./de-ch.js": 250,
	"./de.js": 248,
	"./dv": 251,
	"./dv.js": 251,
	"./el": 252,
	"./el.js": 252,
	"./en-au": 253,
	"./en-au.js": 253,
	"./en-ca": 254,
	"./en-ca.js": 254,
	"./en-gb": 255,
	"./en-gb.js": 255,
	"./en-ie": 256,
	"./en-ie.js": 256,
	"./en-il": 257,
	"./en-il.js": 257,
	"./en-nz": 258,
	"./en-nz.js": 258,
	"./eo": 259,
	"./eo.js": 259,
	"./es": 260,
	"./es-do": 261,
	"./es-do.js": 261,
	"./es-us": 262,
	"./es-us.js": 262,
	"./es.js": 260,
	"./et": 263,
	"./et.js": 263,
	"./eu": 264,
	"./eu.js": 264,
	"./fa": 265,
	"./fa.js": 265,
	"./fi": 266,
	"./fi.js": 266,
	"./fo": 267,
	"./fo.js": 267,
	"./fr": 268,
	"./fr-ca": 269,
	"./fr-ca.js": 269,
	"./fr-ch": 270,
	"./fr-ch.js": 270,
	"./fr.js": 268,
	"./fy": 271,
	"./fy.js": 271,
	"./gd": 272,
	"./gd.js": 272,
	"./gl": 273,
	"./gl.js": 273,
	"./gom-latn": 274,
	"./gom-latn.js": 274,
	"./gu": 275,
	"./gu.js": 275,
	"./he": 276,
	"./he.js": 276,
	"./hi": 277,
	"./hi.js": 277,
	"./hr": 278,
	"./hr.js": 278,
	"./hu": 279,
	"./hu.js": 279,
	"./hy-am": 280,
	"./hy-am.js": 280,
	"./id": 281,
	"./id.js": 281,
	"./is": 282,
	"./is.js": 282,
	"./it": 283,
	"./it.js": 283,
	"./ja": 284,
	"./ja.js": 284,
	"./jv": 285,
	"./jv.js": 285,
	"./ka": 286,
	"./ka.js": 286,
	"./kk": 287,
	"./kk.js": 287,
	"./km": 288,
	"./km.js": 288,
	"./kn": 289,
	"./kn.js": 289,
	"./ko": 290,
	"./ko.js": 290,
	"./ky": 291,
	"./ky.js": 291,
	"./lb": 292,
	"./lb.js": 292,
	"./lo": 293,
	"./lo.js": 293,
	"./lt": 294,
	"./lt.js": 294,
	"./lv": 295,
	"./lv.js": 295,
	"./me": 296,
	"./me.js": 296,
	"./mi": 297,
	"./mi.js": 297,
	"./mk": 298,
	"./mk.js": 298,
	"./ml": 299,
	"./ml.js": 299,
	"./mn": 300,
	"./mn.js": 300,
	"./mr": 301,
	"./mr.js": 301,
	"./ms": 302,
	"./ms-my": 303,
	"./ms-my.js": 303,
	"./ms.js": 302,
	"./mt": 304,
	"./mt.js": 304,
	"./my": 305,
	"./my.js": 305,
	"./nb": 306,
	"./nb.js": 306,
	"./ne": 307,
	"./ne.js": 307,
	"./nl": 308,
	"./nl-be": 309,
	"./nl-be.js": 309,
	"./nl.js": 308,
	"./nn": 310,
	"./nn.js": 310,
	"./pa-in": 311,
	"./pa-in.js": 311,
	"./pl": 312,
	"./pl.js": 312,
	"./pt": 313,
	"./pt-br": 314,
	"./pt-br.js": 314,
	"./pt.js": 313,
	"./ro": 315,
	"./ro.js": 315,
	"./ru": 316,
	"./ru.js": 316,
	"./sd": 317,
	"./sd.js": 317,
	"./se": 318,
	"./se.js": 318,
	"./si": 319,
	"./si.js": 319,
	"./sk": 320,
	"./sk.js": 320,
	"./sl": 321,
	"./sl.js": 321,
	"./sq": 322,
	"./sq.js": 322,
	"./sr": 323,
	"./sr-cyrl": 324,
	"./sr-cyrl.js": 324,
	"./sr.js": 323,
	"./ss": 325,
	"./ss.js": 325,
	"./sv": 326,
	"./sv.js": 326,
	"./sw": 327,
	"./sw.js": 327,
	"./ta": 328,
	"./ta.js": 328,
	"./te": 329,
	"./te.js": 329,
	"./tet": 330,
	"./tet.js": 330,
	"./tg": 331,
	"./tg.js": 331,
	"./th": 332,
	"./th.js": 332,
	"./tl-ph": 333,
	"./tl-ph.js": 333,
	"./tlh": 334,
	"./tlh.js": 334,
	"./tr": 335,
	"./tr.js": 335,
	"./tzl": 336,
	"./tzl.js": 336,
	"./tzm": 337,
	"./tzm-latn": 338,
	"./tzm-latn.js": 338,
	"./tzm.js": 337,
	"./ug-cn": 339,
	"./ug-cn.js": 339,
	"./uk": 340,
	"./uk.js": 340,
	"./ur": 341,
	"./ur.js": 341,
	"./uz": 342,
	"./uz-latn": 343,
	"./uz-latn.js": 343,
	"./uz.js": 342,
	"./vi": 344,
	"./vi.js": 344,
	"./x-pseudo": 345,
	"./x-pseudo.js": 345,
	"./yo": 346,
	"./yo.js": 346,
	"./zh-cn": 347,
	"./zh-cn.js": 347,
	"./zh-hk": 348,
	"./zh-hk.js": 348,
	"./zh-tw": 349,
	"./zh-tw.js": 349
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
webpackContext.id = 440;

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneMask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
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

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_profile_provider_profile__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_service_users_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(36);
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
    function ServiceProviderPage(navCtrl, navParams, userService, callNumber, platform, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.callNumber = callNumber;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.providersModel = {
            error: false,
            messages: [],
            data: {
                pagination: {
                    pages: null,
                    current: null,
                    next: null,
                    prev: null,
                    from: null,
                    total_items: null
                },
                items: []
            }
        };
        this.providers = JSON.parse(JSON.stringify(this.providersModel));
        this.value = this.navParams.data;
    }
    ServiceProviderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.searchByGeo({ geo: __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* default */].location.latitude + "," + __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* default */].location.longitude }).then(function (result) {
            _this.providers = result.body;
        }).catch(function (err) {
            _this.providers = JSON.parse(JSON.stringify(_this.providersModel));
        });
    };
    ServiceProviderPage.prototype.selectProvider = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__provider_profile_provider_profile__["a" /* ProviderProfilePage */], {
            provider: id,
            service_params: this.value
        });
    };
    ServiceProviderPage.prototype.selectContact = function (type, provider) {
        switch (type) {
            case 'whatsapp':
                this.shareViaWhatsApp(provider);
                break;
            default:
                this.call(provider);
        }
    };
    ServiceProviderPage.prototype.shareViaWhatsApp = function (item) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.socialSharing.shareViaWhatsAppToReceiver(item.phone, 'Olá, te vi no uberservice. Queria contratar seu serviço', null, null).then(function () {
                // métricas whatsapp
            });
        }
    };
    ServiceProviderPage.prototype.call = function (item) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.callNumber.isCallSupported()
                .then(function (response) {
                if (response == true) {
                    this.callNumber.callNumber(item.phone, true)
                        .then(function (res) {
                        // métricas de click no telefone
                    })
                        .catch(function (err) {
                    });
                }
            });
        }
    };
    ServiceProviderPage.prototype.navigateToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    ServiceProviderPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServiceProviderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-provider',template:/*ion-inline-start:"/export/uberservice/app/src/pages/service-provider/service-provider.html"*/'<ion-content class="bgGray">\n  <nav>\n      <a (click)="back()" alt="Return" class="button left">\n          <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">\n              <path d="M0 5l6-5v4h14v2H6v4z" fill="#000" fill-rule="evenodd" /> </svg>\n      </a>\n      <div class="content">\n          <img src="../assets/imgs/logo-us-horizontal.svg" width="136" height="24" class="verticallyCenter" />\n      </div>\n      <a (click)="navigateToMenu()" alt="Menu" class="button right">\n          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">\n              <path d="M4 6h12v2H4V6zm-4 6h20v2H0v-2zM0 0h20v2H0V0z" fill="#000" fill-rule="evenodd" /> </svg>\n      </a>\n  </nav>\n  <div class="serviceProvider">\n      <p> Veja os prestadores de <br />serviço de limpeza: </p>\n      <div *ngFor="let item of providers.data.items" class="card">\n          <div class="content">\n              <div class="avatar">\n                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" width="56" />\n              </div>\n              <p class="distance">\n                {{item.address?.loc?.distance / 1000 | number: \'1.1-1\'}}km de você\n              </p>\n              <h3>\n                  {{item.first_name | truncate:[16, \'...\']}}\n              </h3>\n              <ul class="rate">\n                <li>\n                    <img [src]="item.rating?.average >= 1 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n                </li>\n                <li>\n                    <img [src]="item.rating?.average >= 2 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n                </li>\n                <li>\n                    <img [src]="item.rating?.average >= 3 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n                </li>\n                <li>\n                    <img [src]="item.rating?.average >= 4 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n                </li>\n                <li>\n                    <img [src]="item.rating?.average >= 5 ? \'../assets/imgs/star-full.svg\' : \'../assets/imgs/star-empty.svg\'" width="13" height="12" />\n                </li>\n                <li>\n                  {{item.rating?.count_rating || 0}} {{item.rating?.count_rating === 1 ? \'avaliação\' : \'avaliações\'}}\n                </li>\n              </ul>\n              <p class="info">\n                {{item.description | truncate:[150, \'...\']}}\n              </p>\n              <ion-row>\n                <ion-col col-6>\n                  <a (click)="selectProvider(item)" class="button secondary">\n                    Ver perfil\n                  </a>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-select interface="action-sheet" cancelText="Fechar">\n                    <ion-option (ionSelect)="selectContact($event, item)" value="whatsapp">Chamar no WhatsApp</ion-option>\n                    <ion-option (ionSelect)="selectContact($event, item)" value="phone">Ligar para {{item?.phone}}</ion-option>\n                  </ion-select>\n                  <a (click)="void" class="button">\n                    Entrar em contato\n                  </a>\n                </ion-col>\n              </ion-row>\n          </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/export/uberservice/app/src/pages/service-provider/service-provider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_users_service_users_service__["a" /* UsersServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ServiceProviderPage);
    return ServiceProviderPage;
}());

//# sourceMappingURL=service-provider.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpProvider__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(92);
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





var CustomHttp = /** @class */ (function () {
    // private _defaultHeaders = {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // };
    function CustomHttp(httpProvider) {
        this.httpProvider = httpProvider;
    }
    CustomHttp.prototype.get = function (url, parameters, options) {
        if (parameters === void 0) { parameters = {}; }
        if (options === void 0) { options = {}; }
        return this.httpProvider.http.get(url, parameters, options);
    };
    CustomHttp.prototype.post = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpProvider.http.post(url, body, options);
    };
    CustomHttp.prototype.put = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpProvider.http.put(url, body, options);
    };
    CustomHttp.prototype.patch = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpProvider.http.patch(url, body, options);
    };
    CustomHttp.prototype.delete = function (url, parameters, options) {
        if (parameters === void 0) { parameters = {}; }
        if (options === void 0) { options = {}; }
        return this.httpProvider.http.get(url, parameters, options);
    };
    CustomHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpProvider__["a" /* HttpProvider */]])
    ], CustomHttp);
    return CustomHttp;
}());

//# sourceMappingURL=customHttp.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map