webpackJsonp([5],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.items = [];
        this.state = {
            data: {}
        };
        this.sensors = {
            data: {}
        };
        this.device = {
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
        // state data
        events.subscribe('state:feature', function (data) { return _this.state = data; });
        events.subscribe('state:sensors', function (result) {
            for (var k in result.data) {
                if (typeof result.data[k] == 'number' && result.data[k] == -500) {
                    result.data[k] = '-';
                }
            }
            _this.sensors = result;
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('settings').then(function (r) {
            _this.items = r.devices;
        });
        this.device = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* default */].currentDevice;
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToDetail = function (target) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    HomePage.prototype.goToPage = function (p) {
        this.navCtrl.push(p);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Dashboard\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="cover">\n    <img src="http://www.affaritaliani.it/static/upl2015/vegg/veggie-multi-vitamin10.jpg"/>\n    <h4 class="title">{{device.params.name}}</h4>\n    <p>Working at 36 hours</p>\n    <div class="side-info">\n      <span>Fan <span [ngClass]="{\'text-primary\': state?.data.fan?.on}">&bull;</span></span>\n      <span>Light <span [ngClass]="{\'text-primary\': state?.data.light?.on}">&bull;</span></span>\n      <span>CO₂ pump <span [ngClass]="{\'text-primary\': state?.data[\'co2-pump\']?.on}">&bull;</span></span>\n      <span>O₂ pump <span [ngClass]="{\'text-primary\': state?.data[\'o2-pump\']?.on}">&bull;</span></span>\n    </div>\n  </div>\n  <div class="container to-up">\n    <ion-row>\n      <ion-col col-6>\n        <div [ngClass]="{\'with-line danger\': sensors?.data[\'air-temperature\'] == \'-\'}" class="widget-info with-title" title="temperature">\n          <ion-icon [ngClass]="{\'text-danger\': sensors?.data[\'air-temperature\'] == \'-\'}" name="ios-thermometer-outline"></ion-icon>\n          <div class="l">\n            <span *ngIf="sensors?.data[\'air-temperature\'] && sensors?.data[\'air-temperature\'] != \'-\'" class="c">{{sensors?.data[\'air-temperature\']}}°</span>\n            <span [ngClass]="{\'text-danger\': sensors?.data[\'air-temperature\'] == \'-\'}" *ngIf="sensors?.data[\'air-temperature\'] == \'-\'" class="c">error</span>\n            <span *ngIf="!sensors?.data[\'air-temperature\']" class="c">-</span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> 23°\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> 31°\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="widget-info with-title" title="air humidity">\n          <ion-icon name="ios-water-outline"></ion-icon>\n          <div class="l">\n            <span class="c">71%</span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> 12%\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> 12%\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div class="widget-info with-title" title="light">\n          <ion-icon name="md-bulb"></ion-icon>\n          <div class="l">\n            <span class="c">76%</span>\n            <span class="d">20.000 lux</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="widget-info with-title" title="UV">\n          <ion-icon name="ios-flash-outline"></ion-icon>\n          <div class="l">\n            <span class="c">4</span>\n            <span class="d">low</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div class="widget-info with-title" title="CO₂">\n          <ion-icon name="ios-cloud-outline"><span>CO₂</span></ion-icon>\n          <div class="l">\n            <span class="c">10.000</span>\n            <span class="d">ppm</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="widget-info with-title" title="ambient">\n          <ion-icon class="happy" name="ios-happy-outline"></ion-icon>\n          <div class="l">\n            <span class="c">Good!</span>\n            <span class="d">general conditions</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="container">\n    <ion-row>\n      <ion-col>\n        <h4>My Plants</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list class="plants">\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n          <ion-item (click)="goToDetail(\'target_a\')">\n            <ion-thumbnail item-start>\n              <img src="http://cooperurubici.com/wp-content/uploads/2016/03/feec08d8889be04065030606c74127eb.jpg">\n            </ion-thumbnail>\n            <h2>Cheiro Verde A</h2>\n            <p>\n              <span class="d">\n                <span>\n                  <ion-icon name="ios-water-outline"></ion-icon> 57.8%\n                </span>\n                <span>\n                  <ion-icon name="ios-thermometer-outline"></ion-icon> 22°\n                </span>\n              </span>\n            </p>\n            <button ion-button clear item-end><ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.ionViewWillEnter = function () {
        console.log('wwwwwwwwww');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="cover">\n    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGR0aGBcYGBgdIBsdGh8fGh0dGx0dHiggGyImGx0YITEiJSkrLi4uFyEzODMtNygtLisBCgoKDg0OGxAQGy0mICUtLTIvLS0tLi0wLy0vLy0vLS8tLy0tLS8tLS0tLy0vLS8tLS8tLS8tLS8tLS0tLS0tLf/AABEIAMIBBAMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABCEAACAQEGAwYDBgQFAwQDAAABAhEDAAQFEiExQVFhBhMicYGRMqGxBxRCwdHwI1Ji4TNygpLxFaKyFiRDoyVTg//EABsBAAIDAQEBAAAAAAAAAAAAAAMEAgUGAQAH/8QAPREAAQMCAwUHAwQCAgEDBQEAAQACAwQREiExBRNBUWEicYGhscHwMpHRFCPh8QZCJFIVMzRicoKSotIW/9oADAMBAAIRAxEAPwDTMtnUrZfC3ivWUF+v6UVLuYH16DmbLT1DIW4nn+VCSRsbcTisk7S473tRqpOUE+HcwOHCOHC2akJqJS/mqBwNRKXWTFgXYDvUWtetmhhSBiOIzsOPQR5mzsMIZmrimomxi7kYvWBXRVKfdqUcfAJ9zr62m4NGYTgjYNAErXi7vc64eix7qoYInY6mCOI4g+frCnJjk7KVFPuZAWaHVOVzxHPTDzGmvSN7XO8AbiOiso2FxAGq9xTFDQotWfNAiEUgMZIAk8BJ9Bz2tXunklz+lvDme/l3ffkrqno2XDdTxPAd3NJ6/aDWiRSHP/GqHTjJnUz/AMWWB6n/API/lXB2Yyw//kJowTtdTvGRQ7JVYf4byR6Px5jpw3sVs8jbYTfofz/aQqNlFgLsOQ4j3CJXq/ZFLHhw68rMTVrI4N95deX5VdDSOkl3Y+Dml29YlVc/GVHIGLZabaNRKblxHQZBaWGigiFg0Hqc1Hd8Zq0iDnJHEEki0qavnidcOJHI5qU2z4J22LQDzCa7riC1FDA78OI6W19PO2aMPbxWSqKV0MhY7gp1rCYnWxSc7IG7NroTeu0SfeKd3V4lodwRpoYUHmWgE+lhulGINCtoNkS/pX1Dm6DIeOZPhp90xUqgEeI+vO0teKqcJPBeJiI74gawusba/S0cQxEcVJ0JEYceJVtr0OdiWASxBVGvebdXAFUNc26pgJG7ZYp3lU0ZOSnuBxbck+Wg97IVTyThC2mwqJscW+Izd6LNMWvpVyYIEjQTxssG4sgubRrpIJNMuCZ695prTXKcriDm2M+lkY2yA47pgAyxY3jXgnvs12uz3YPWOYoDnYbkDWSPL6WvIprsxO4LFbSibBKcOmqJ3XtZdqlXulLFpAnL4ZOmhO/paP6yLGGA66KoNXFiDb66Ix96p5sudc2ukidNTZjeNva+aNvG3tfNT5rTuuofXvZBt1dQ7thfj91BGpWrRaNpy1FP1FgTus2/UeqFMbNv1TBQvyuoddmE/vrYwN80UZpQun2hUlNRawaVqOFKjdJ8M9Y09LAbUDPElBVNzDuabg1nE0vmtwrt0l9p6ZeqwIEQMs6e3rxtk9o4nVTsXh3Kuqoy92eiWbjhyveERgYLKGEc2Gh8wGHrZeIuuB1SsNMceelwtXgqhIOwiOlrIkgXV8UsYhWOtgbwlCx2QG+o1SlUQGGKnKeR3U+8WkyTC4FSEgvYqp2DxAi7d/eXhUGoP4mkxpz0GnOz00gcQy+Wvfy/PgrvZsRkBc0Z6d3NK16rNUqPUqElnJJJ15wByA0gcIFgudmtlBCGswhT0MJqvSasi5kT4yNI8uekeU2i0Ei9lOWVsbwwmxOirXeqwZXG6kEb8DPnaJve6YaAWWPHVPuMYl3j3WrGVbwhMT+MD9J9rV9bicx3K9/Y+ypKWNsT3x8Rlfpr+VNeFWBDaRy42qDyCPGXXNwhN5YIrSZ5dOljsBeRYItNE5l8TibknP08F92exPOjmfCrRPpJtqNmxmOM3VZtUNfK0M1t7oXiWI5j3hZtdQw1gcBEg7Rrb0pcSHlaCngZBEGgZAZ9eZ4oRilYoC0yIBkfXoLDe1xdYcUzUT7qEvt/HejP/qiu11VS0DJBI3aCF1PDQx6WJv5LWB/nhdVsGzqZrv1BGZz6C+eXiuML7VvQRmUBiTIGwUeQ3/c29HLgBtqgVdCyoIfIcs+/gnPs1iq1KS1nOao7E5tCcsyAP5YXSBxB52cYQQHO1WY2izA8sZkwAWHv1z5oxeMSRRmfQHbXX2tKWpjiF3myop6iKAXkdZVUxikTAePMEWXZtSmcbYvuCgwbTppXYWuz6ghZ7eK4+9XgfiDkgjkdZ+lgSy2kJ4L6fs2Rr6ZoHIIRiKgHQA8ybDaeKNPYm5CEX29EDef0sVouq6pqC1pUmH328U6DGmSq1Gg6bAAifL+1vF4DjHdYPaVWyafd30HD0Rns27GmJJzmTI0joOX97VlU7DJibw0WYrTglxM0Gi4/9QNd7wtSnrEgDUhpBBkDcazZmka5gx8eqZpInBuLj1Tv2Y7VJRqNSvFU+JVyqFJAIBkzuIVVX9zY1BU2DnPOXz2spUVQQ1z3nK+SJX3tLSzmSO7G1QMCN9z0iDNm/wDyMe8wW8dUf/yDN7u7IPj2NrUubqJJOWHEBSysD4ZM7CY5W86pbIwjz4X6Lr6gPjI5ceqMYVjqJRYN/W4/1IK31Zh6WYEobcHr+fdGZMG3aev591liZjwJsk29lWkAr9Au1rlXiXe2OL1KFAGm2V2cKDAMCCTvpwA9bKVkxjju3VKVcxjZduqzl8TvNWlWdqjsEcaknSRwPASLUj3OeA5ySc57mgkqrS7Q1qYGVQpBBkzMjnOpk24GC6MJLaFbHdMRWvRSsmqVFBHQ8R6ER6Wm51k+H3zQ7EqcCYmwHNF8lxwQDFK606ZJJAJHijbr5WhbH2RqqysLnstF9QQO80R3VWkQAX8atMDMDm8tTYkUlyMXKwV9/i+2w4inkOZOXX+fVLNKpKxvx/L97b2ZNwF9LicHBMN37Q1VuxuwACN8XPjmg8j8ot1j3NbhvkhOpWPlEx1H2uhRonWPew3NzyViw2GiO/aji8UbiQMj5e8C/wAui/8AHlabWiWQgjLDn4/0sfK40z3FpvZ58bX/ACq+C9o0vCwphwJZTw69RNqibZ743Z6c05UbZoqenNRI61v9eN+QHvovr1RV8wdiQQIiRB1njrw9rMQ7uMdViq7/ADOWaYGnaWsHA2z7/ayp0arXakypBUAnMQdSZnoNLWTKpj2YArjZe3aCZ7XTE4yQAOF+vRBL3igKgLvy3k2k7FJZtsgttPtJm77Op+WV2vnZNQACADmZQBw1JPyt3cTkYjpz7kzPNaIXFr8D15rhrgKVNl7ydN5niDA0jgLBMnatbNLClZDBgu7vPz1uoD3Yp/CCIgn+8zb2J11J0VOKfIZd5Rfs3i60mAZvCEJRRsBIAnzaBZlj3i5OdgsxtbdFoawWOX2/hHxWZx3jSZ/5i2aqJHyPLnar5VtjEZkMvGJqKmQnU7WIynJZiSsdM7BjHBDu0lE5e/QjvEHij8S8j1G/lZmieMW7dodOh/lbDYG16iAhj79L8Ql66Yn3hygMXOyqCSfIDe1jJCWC5OQ4rcs2xE8do5orW7F32oMwo5F/qZc3tZRu1aVhsXXPQGyp9o1+Jp3QRCpdlSmKRXVQBliNfL3su2RznmQcV86cZRMXOyN1BVmirgCCRoeQjkeNiN/ccCc11h3rmk5+6r4RhTNSaodyfAOQUET5mSPSxKioAeGDxRKqra2QRjx8UYu9x0zMQHMFmif9I5aaWTdLnhGg0SD588I0Gg90Nxym2UBR4Wb5RP1sxTObck8AnKNzC4l2oCEY1iGUoqtJkAkcQNPqbPUkRNyRkn6ODEHFwy90XvmORdxzhF9kyH5CxA8uNvmgCixrnyEd/oAiuD4vTpUlDJJfx++g+QB9bORWa0XRGOEIwu1WxVadnlYrP/tDry9NP5VJ9W/4+dqbacvaDOl1T7Rfd4YhVRXo3EFDBdMzbalicvyIsjIS1zWjSwuuPc5hY0acUiYjQ8K6wxO8/L987MQvzPJHgf2jyTv2FvlRLg6yfDV8PQEA/WT62Ur32IshV1UY2gt1upu0uPVGpUXkgtGYgxqRr+fvYMeJ8jhfRBNU+eUtadBdALvjIpnu6rllYmM2wB4dRrt1sV0LpBjZkQhSU75v3I8iPNEKbKgVSQaB0Vt+7PAH+nhPC0Q4SE4h2uPXqOvNKOJed43KQZkaYuo6+uqEYnhZpMcs5eMbL/azEUmIWOq+of4ttp1fDhf9TdTz69/P7qbDbtUcE06bMFiYUnfQTHM2mb8FtWvY2webE9bJowfBEoIbxf17uio8CMSGc9QNY4QdybQLsBAcMzoOP9d6TrtoB37dM654u4Afnu9VFesD++1TebyNwBTo7BFGwMbnpt52q5NpOju2M58T+Og0CrTTRZY87fCTzJ/jqYq2CUKMmnTCHiVGv70+Vhtq5pcnOug1uxaSuiwOGG2d2/M0q1MYh2XcDjMiNhsJBnSLWzaXE0HmsDtHYjKZ2FjsQ4cCpq2KAh6IBWrkbKraAmJEE8POLQFM5rg8/TfNVUVK5rmy3u2+ZHAaZpbw+7VKddWq06iqJMhCw1Gmo09dbWxmYG3YQT32Wwodp/p5GzfWG8L24EceKO4pd3qvDeGmPECI12iB52WdV7y7/LgE5tb/ACyKeFopgbgi4OoI5oVjD1JyhpkFidtt/P8AvaUOB3achf8A+omqIrFobmFawKjnTO+ozQB+dpPAa/otjsQCqp95Jz05W91xjNABHakCMo1gHSHD7+cn0FjQyhxLT4dVR7epGxyh0INuPT+Ew4Xi4qJTM7gSOtqGemLHuXzza8DXPxt1Ul9wum9RKu5X08wbRiqHsYWc1V09ZLCxzGm11Hjl4SndqmWIykCObaAWlSsc+dt+fomtnMllqQ99/FG/sgwJVuxvRA7yqSFJ4KpiB5kE+1kv8grHOnEA+lvqtVvGtNnLQaF3ypDNmbiYj5Wz8jgXXbkOSjvQTYaJX7QYKGbvVMOBEcD52sqSqLW4Doq6voxMC4arN7xeHq3irRqQopQSeSx4mPTb3tpWRsjibIzPF68AkXUraVgczMm/8I7cMQQ3fvKasaSnKGiMx3MAmY14xZKWB4lwuIxFVM9LIJrPIxHhyX1zvSVwSDCqRMiInUT72jJG6E2IzKjLE6AgEXJXF8qsVUALAXNqdOmu/C0o2gE352Uomta43J1shVDDFrO1R8pOUiYgAcSOWk69TZt1Q6JoY3mnn1LoWCNl9fFAcSvKFFC7sdBy1j5WsIY3YiTwVnTxPDyTw16qyLwYEagAD0AgfKLGNzqhvGI3cv03UHO1kTbNPrO+0WFvXrM0gA7dABA/W2XqHOlmLvlgqWallknLuHsq/a5clCmg1WQs/wCUSB6xaUgOLEUerYWgFJl0w37wzkDwIDDHQMRso8/lbgcY2658kBgcxmuaK4PKXapmMnNJ5aKNrLVL8bmtCr6t4fIxgGXzVDMVqn7rSG7dOsjSxIWjfuPBGpmD9S88P6QF7hWZSzKYWCZ4AmJ97WLHNzwK2ZJGPoTjh8pRSl/iSNQY1nce3O1NN23l2iz0w3krpPp+ZIDjOJXq61QyuBSIhZ8WnJidZHDpztY0gimZxxceC1GxqtrI7R68cuKsL9o+ILTik9JQNstOCfWYNmf0zb2LnfcD0CvDXl7u1a/j+UNwPEa18v1A3mq1SGkBtpUFhCjTccrBrI2U9M8xixtrx+5zT1JK+WdrXnIXNtBcA8AtedfDpbHA55q7BzzQ6rR/hnM2ZtdY9rMB4xjCLBSoxK1obIbnnayyNbg9SpWpoPGzKJ4KBmYk8d1W2xbIAxrjpb8LFbYkbBLjfoL+ycKmGLUqK8EOiQSNj0II2m1a6odYgDJYkVTo4y3gT9kPxS4EFFpqsbMAIOU6jLGi6j5jlbsE1wS8/PdN01TcOMhPQ349eJQjD0rQ7v4kEKpdssGSMok/T52blMdw1uR42F/vZPzGK7WNydqbC/LM2VD76tXNncKYIEDQAiP9X7Nj7ox2wi6bZAYyAAbKzhtNqaCH8JInUaTy9LceQ99ivodK2aioi+N3Wx+cVbwm/tVLFcyoDAOusbSeGnDrxm3Kl25Aa2ywe09pT7zeYu0VzUp06bHuzlYCTr4T/p2HkLADpJB2xf1VYZJZs5BkTyspcMxZqks8LTTRtfiPBQPO0JqZrMm5k6dOqDUUjY7Bubjp0HNULxUN5YLmhQSVXmQNSfSzDGiAYrZ8VsdibJjfG1rndp3ra/otT+zG9j7r3J0akxBHQnMD8/lbKbbj/wCRvBo4IO09nugfhcm/vLU9lUtaQUMxKvANmYWXRZTYLKr/AHNq1evVBULVplBx0hSG03EC2sikEUTGG92m/rkqiatb2RY3a6/2uLK1jrihh1BE/Ew24yxY/IEWhTAy1bnO4A/hJ0l561zncAfwFLdl7nD8+itV8UsYAzAKNeWUA+toyXkqw06NQZLzV+A5huWWuWZ8bqril4hVoiMiKAajATEQemumlpwsu4yHUnQJiBuIl9sySbBQjEKORkFUQAfCCCSANenvae5lxBxb4rv6ebGHFmd9Um0c1Rwf5efva7sGBaB+GNtuaO3dCygjbbUxYBuq54sc1+mr0hPhHHf9LM1LrjArIBC75hh1PSfnFkHRi67gS/iSFQRvx9rLPBahOZwS/faCvo7FQupUaT59LCkaDnxSM8eJpA1QS9YipSpR2kHKQPkeXnYUNKXEP5KpbSBrw8nTzXF4pju6OSS6+KOZAOg529cNkdyUWuAkdfQ+Xzmqt0vRzFjG0coPLW3nsysESSMYcLV21RxWRkPAgrPhMwZ89Pnbga0xFrvuuNDDC5ru+/FUu1dGpUyqVXLqRB2PU2NQuZHcg5o+zXxxAuBN1zdbuv3bKRoVjrJEe82697t/cIxncKm4P4sqNS5fdTSr03zOhBg7HgR9RZjefqMUThkVd7O2mXS4rWIPz7rTcJxynWph0bfccQeINsvPSPieWuC3cLmTtD2Zj071TxjFFRWJPpY1PTl5ACac5kLMTkldlXapeKzrsRl8zMn2H1toagYImt4+y+Xf5NUMeRfndMd+xRKSlFIapGizGY8RO0xNkwwyd3PXxWWhpXzOxkWbz5dbKh2datWz1nhZ8FOmdFEHVp3JOo062nPHEwBjTpmSmq8RQ4YmZ8SePcp+0hAuwpIMzFgZjbK2Ytp1H1tGnc3e4uAHqFDZ7XfqN87IAeosPJJd2wN3aAkJmHHoJjiRM6g/S1m+rawZnNaN1a2MXJzsjj4UlVStIDMBGTN8Jjjvpoeup14WRbVOicHSac7aqZ27UCMRyu7PO2uahufZ28020qoC7EmnrEzB+EmRERz6RactdBJmWnLj/aRnraWX6h/939qnfaTM3dtSTvOSyIG5Yjy68RZhga1uNr+yjNa2Jm8D+z979F5eMDqAEITCwCxiNRw69bRbVM1eFc7C2fJtTFI2wDed1BcrgA0sSrLwm05JiW2AuCtdTbJayYPc4tcDnY2yt0seXFGRf692cXmlop0KnZ1/exsF1EyeLBIO48kttZzJJMLSXW5/lH7n9oXeCRRqSN4iPebVEmxcBzcFV0+yXVJJjBQrH+1desVphDRpuwVnmWg7gHZdDvrvZul2dDEC8nERmBw/lKbSoZaRriW5gX/Hp5LtbqkJRRYDyog7AAmSTvtPnFvGR1zI46ZrEGV93SvOlj3m/wA81ex3B1rLRVy2Sn+BYGbYRP4eO3CYsClqnROcW2uePJLUVY6Fz3MAu7ieH5Vy/gvUo0ctNlgswZAwCoAABOxkiD0NhMdhD5bm+gsbZn+ECF2Bj5rkHQWNsz/CUe1d4DVSg2WCepkt9FPva1oWFrA48f691ebNjLYw46n+vdLf3cpSDHerHos6D/UQT5KOdrPEHPtwb6/x7q33gfKQP9fW3sPMq1dbvEINjqx5fvYeluF1zdCfJftHwRRgNACAI0HS0b3SWIk3K/USuqjMSNbFl+s3V20ZKK83hHGh5j0In62C430XUoY0ONlZhcILwk7GYEnprZRwvkEnJqk164XUnW1o1ga2yRLS4q1hWJrU8EiV+E7a8p+YshUU5F3jJL1FK5gx89VavdKZYjfUwP0so13BLRvtYDgu2qgxkAgEeUH6WiGkXxLgYW3xqFlNWoyOwASD4TqZkegkH3tMHdsDmjXmiAiKMOYDnz0Vf/oamuGpguBDGWIy6xw56+29iirO6Iflw0Rm15EJEmWo01/pWsbq3cwkKHEHLGoMcRvz97CpxMDjGiHRCoZd/wDqeKV8QvLJUD0fDkPiX8JPIrsbW1OAW2kz781oqKqlYLlxBPEZFUKt4vF6cwxMnUDQLx9oB4naxyIYc7AJ6aufh/deUydk8KqB3SnVOQA5nCARJHh1OkiDvwtV11SzAHPbnyv5+Czm0J4nsD3tz5X8/BEv+id02ceOsDALN4QTMEablY011mywrC8YdG9NUoazGN3o3jzRypd2EHNoV0CqCQQJIHT2sgJBy4/PmaRyGVuOvQ9yEff2ZiiLAYSzkEQRG+h1jhrM2c3Ia3E46aBOCBrGh54aAcfnkrmFXdaaku0nMWEwCF0PXSCDH9XrYM7y9wwjhbxS9TIXusBbIfdd3dQ1UsiikCBmYASxG3mCGGvAWi8lrAHHFyHIfBop9rAGynFbh3+misVGWixcroQCCTqBtMHcCRoNNbCAMrQ0FD3W9Zhvbw8UBpXUVKwqeKYIYn8S/EBrJ0MfsWsTKY48OSsHS2jwG1uHp5rm+OyPUOkfhniBuOGum29px2eB5r6T/jMrYtkuFJbeDOx59fDIcMkKaoGvSqhXKQCWImJ8xyjhZ6MmOHPW6sGvdX1DC8Wu0EgHXW33Fu5X7xUSsWpsxJHNj09AddpsuXzNs+5Tz5tmscaeYNBvpbMXHE9/Hx0VS5Huw9JTqdDHL4hJ9rTc4u7Z0RBAxsL6WMEuByzta+YcTwt3E8gq1+qZaLCocxmRw16chtacYDpAWCyqqiKsjpZP1j2Ek8iTlkM7tH/6lM3YrDM13Wu5JqMDl12XYfIb2rNozgSmJunFfHNr1FpzCzJotfqVdr4krqQAZG8A6Gy7YXNIulGUzmOBOhXdB8tJ6xEM8KvkNv8AuLH2tFwxPEY0GZ+d1lF7cUjYhoMz3/1YJNw24iu96ZmimhGduSqGDH1Ex1Nrt8hibGAM7ad9rLSSPdEyLCLm2nUkW87KJ6i1RSYqFV6kheSopCr6aCzGcbS0ageZ1K8GuiL2g3IGvUm5Pjqvb06qY21lv09LeYDhXI2ucPRXMOu1CometeFpEkwu/h5n1mxQwcSjCPDkt/vtFW3kHmDB/vZ98TX6qxDiEAxfFEuoQ1Kgys2UGNQRrrGnr1shNC6PMG6kZmf7ZKhit8DIrZhkOzDXQeVkZZm6FClcG6kLM+2HaRZ7qkwJOrHy2HTn9bGpocRxkWQmxYxfgk0VnqmCduHOzxAajYGRC4TL2du0Ve7jRxmU+kMD1G3oLI1ZODEqiukvFvOINj7fdH8ZbIp4+Q3tU04DnKso7OeFJcsPanBqPowErtlJ4E8ROk6b27JKHHCB/KjNUMlyYNOPPuHBAcauISvnU7xmGYkjXz5T7WcppcUWE+CsaSfHBgd4ZI1eLytMh6YBDwCsxO2s68z7WUEZeS3kkGxF92uJyvn7IXi14ajeBeMpfTIV6a6iP3tys1TtD4zFpbNOU0bZoDTk243VLuHvlQsFanTEBmKwTJ5T5a2JjbTMsSCeV00C2kZhJu7kDl90x0rhRu9IKwYgRJGhZtZMjYbmJtXvnlnfcW/A+cbJCWV80mIK1g9/kd3RplUUSSNlngf5ieG+462BUQ2OOR2Z8/wgTxWBkeRf1RG9086IqlkJMFoho2I11J8+tl43YXEkX6cEqyQNc7E29rKrTomkr0iSxUeF8viIY6BZ3PDrHpYpdvCHjK+ovllrdHdIXvD2jI8PDiql+w+uaYcOi1FBZ8xgQZJUmCFIXXNJ1J5yDRTQ4y0glpyH563PBMwPhxlhuQbAW9et+Xw06OIh3KCmdSGqsVKhMyzDSokwEAPGOtjOgLG4i7o3O97Hhmet0R9NuxdztMm5625WJ6q9TZRFTvCQCCEMjpkUR0mI4dLAIJ7GHx9yhEXJYRw19yUOr3BP8erVZnZoAgKNTk1CGDKgaDYg6WYbM/8A9ONoAHj1456/2md64jAxtsvtbPjnqf5V6nXIpUqSU8xMnIsTlUiWJMfiy6STqBxsAsu90jnW6nmeH242sl8Jc9znEDTM8zoB8srAps4dYAVhl7zKNdwRtwBjUDWw8TWEHiM7XXYak0rxK29xna55+/RJ9/w2pQcOilqYbRgRPD4o+HXSbXcVSydmFxs75ot1s3bUTXNkxC5zLRe4566+B01AVg39VDFlKk6wR6T1sIQl2QN1pY66hEkdVEQScQcciXXsc/FuXLQWC4oXRSPvFTMcxhVXfltInnaTnuH7bbWHFMPmp4b1c/K9sVrN0GV7n5a6qYlhiuwKu2XlvJ1iNeYHvYkM5YCCBdU22rVFGK2DFhsLtcdLm3XPiRfSy0eoVu11SmCJCZVHPKIHz42ztjPKXHic/FfLqDYtdtioc6njJGLtHQDPmctOAzVbsuqrdGUsDWdiXHLgPMDmLN1j7uy0Tv8AkWxa2hIfPGQzQEZjLqNCeRsqXaevC5E0yAR/mbwr7D6i0KJl3YncfQaqr2TTmaVoOr3W8P5PoumwalTuzUQCBUUGqQTLEayT58NrEdVSmUPv3fhfZRsOicAXMzaLA3P5SRTaaF3YEeAsB1Ow+k2vTbePbzsvnD22mlZzsqTy7Qdhqx6fqbEGQujtswXHgiN1uzOJHONpsCSVrTYlLSSNYbFbX27xa8UKQaip1PiqAA5OWhEa8zy62fqpJGNGDxPJHqXyNAw/dZFchVrvULFi8liSNDO+uwJ97V0kzGC7jqlJnAAHh7rp7u+QqytkO+QtHqoMj09bSsD2h99UMSZ3ac+v50+6BXrAo8VI515H6SOPQgGxG1Odn5dU/HXX7MmRVvD7mjABh/u0K+Trt6j1sGSVzTl5fgoE0z2ns+WYPgfZEK9yrL4qZ8QOZCYmYjQjwsCNCLDbURvGB+nzhqlWTQu7L9Dkf61FleXG6YVmrkq2nhIMjloPaelln0hJAhFx3pY0MhcBDmOfz0Ut9xVKtxZ2qfxAwRU8InjLk8IHDjZqGiYDvHHPkj02z2RS3SkbxXRmOSdpEzHGdOFmdzG5ozVmIoXtAuucPxvJnV1kOZ04EaadLelpcVsJ0XZ6HHhLDojWBYiajOW8fhmDuACBp11A97JVMWBthlf57JCrp92wBuWaaMMql/GVBZCfDMagbQek6ajW1TO0M7N8j8+cVVyNDMhoeNvO/wAK9vWHPUpnvCc0mAJmd+cHSeFuMnbG/saIUc4Y+7LW62VjC6TU0KGMwywRI0J/FwkcbQnc17sQ0z+eK5LgmOIX9fsrd8rN3gVRrl1aQSIMfDGskjXTQnWwY2twEu56fypsiyNxlpbv43VGpnVYVs1SR8ZnwkjxcicswAY1njY4wk3cLDpz5ffjZGLGDX6endp/KFXy+VUqtBVgRASMwaRpM7etm44o3sF7jroiQwxuYLjxv88lfu16LEZ1KyQGB11iSABIygxv6xFl3xhv0m/4/KBJGBm03+eqmamtZcyEIxgZioYqR4dBBGmsRuRaAJiNnZjle1+KmLRmzs+l9R5aqa+4Si0Cque8IJBkxmPIToomeETvaEdS4y3Iy9vz6qIqAJAXDLK+VvbM+qXMJL0wUJjJOemsNJng3xa5R7DebWVRheb89Dp5acU3Uhsh79Dp5acVfoXl+8VGZZIkMo04iYkiY034dLLvjbgLgClpWjdkt0GWf5tzUfaK/ugIRJlSDMQYngRoek8BaVHC12bjoU3seKDeB8p+k3AHE8rg6eCW8LAZJy8CSCfcQRrp142tJuy6119Li2e3aMAeGNBF+1ezr34EA2A637kQueKUjFOQsGMr8OEqeGkbjhvYL4pQL2vfkomvkio5aeobc2IxM1P/ANTTnfqLjoAFSw5i97pUIIhwWHIL4vn+dpyjDA6Tp65JLb+3InbOduCLFuVtPl0w3q8zUqF5JkhRygwB5AWSjY0MstzsmijpqCGGCwaGjxuMz3k5qutfKyvMGfl+5FulmJpCNtKCGakkhmF2FpB+dNQqtS+Z6Rqt/wDLWWOozCP/AK1FiCPDJgH+rT6fkr4vsWAN2hGz/rh/nzuinbG+xQbLu0Kscz52XoY8cwvoF9N2pN+npHE6nL7pGem2VQNlGVRzJ39z+Vr0EYj1XzQObiJ4nP53KXJlGXfix5np5bD3t0m5UL4zf7fOqcMENWlTyJSRoPiJn4iAY9BFkZO085X/AIST7OcSRda/jmE07xTNKqCVOuhggjYjra+kjbI3C5WskYeLFJ107OJQrGgpLKTMmJ1ERpGoi2Zr4wKkRjkqt8X/ACA1KmNYJVWqzU3KODsdVMcx+Y187DpKvD2HD8heaBfBI248wlqnjIzla1PJUBg5f05e9rGWnJGJpuEWSgc0XYbjr8/Cv92KmqN4uY0PqONlMRZk4ZJPEY8nDLqrmHYktM5aylObKCV82WwZYC/OM36HXwKXnpnSi8Rv0OvgUxjs9RvtIlAtVOaMDHlxFgRvqI33FwevzNKQurIXXaDccP4ShiPZtrk4NTM9AGGddGQNsSNRIkGSCDa5p6hkrsMgseX4V3BXNqDgcML+R49341UmKXM0IR5ai5zU64iGDbBoEBht1jSzc9O6PNuiKYyTvGfZCMRweRm36gb+dgRz8FOGszsrXY+6oO8BfxyIXmqxseALGJ6Cyu0XuNrDLn1/gIG1JHnDYdnn1P4A80w3cslTQQghhEAsx0gniN5HQWrX4XM66dw+aKtJa5l756dw+aK+16qKzK6wjQVJJ9RrrPSINlxGwtBacxqlmxRFoLDmNfnuhFes9KsqqTkqQCTrOaVleehPvtZxjWyRlxGY+WKehYyRl3DMfLFG6wZTlVTlWACG8yw5gjUzxnXeyLbOFycz0+33QA4Ftz8/N/JLPaGpVu6o9IA0w5iS2ZCYMDkIUiNoNrSkEc5LX/VbpYj8596eojHUFzZD2rdLEe581NfCtZCaLy61UzTsW4KWETEnblYceKJ1pBkWn7c7H3UY7xOAe3ItNu7ibcPFF7viFI1nVWJIJBWZBgDxGTqscRtJso+CTdAkePt3pZ0D2whzmgZD3y01RG4qKlPNIE5l8OhABgjlpB4cLLSkxvw25FDkbhHaGWv4Qy+3Mpd2pUj4s2dCzTJkM8RwJzeRbpZqKUPmEjxlaxt5fb0RGytdMHyfTYDLhwBQCuG8B1DZipgR0M+X7Nn22zHBNNLTccMkayZqfhOyyTHDlI04n197JXwv7XNIFwa6ztCUDx/E81ENDAbEcDO7dQCB7iz1JT4ZLfO5XOx4Gw1Qx2trp5IR/wBQnwgGSB7EafKzm4tmdF9Qi2lGWbqnH2yCjr3VgrZgVJA8WWdNTEkjf8hYrZWkiyzldQVLJ74b5YtbdPL3RjsZVDtnCsWpCMxiSp1C9Yy+etktoNLRgvbFw6rIbTbgGEmwedOR5ote7v31epTRsudS0g/D1IHHYepNgwndxh54ZZ8U3HtyRmz4o6gG0Zs1w+q3Acrewt1A3FKD0buzOCHIyJPM+GfOJNpxOEkwA01Pgn5/8pmr8NLEbMH1G9y4DmeF+I8NF293Ga60eCy5/wBIAH/kfa0A/syyc8vuu/4nBv618p4FRdpLznvFGkuymT5xr8vradEzBC6Q8Vef5XVi26B0Fz3nT3XF+ygyPJenM/vn0sxT3w3KwUOItsVFhdMGsjHVQC4H9SkgA+omLH3oZcnUfi6bxhjSTr/F08YNfe6pACmXLS7HXQtqB/sy+9gsn3TQ3DfmlxNuwG4brW2pWvVcJbvtKLzmHCPl/cWzFf8A+5Lx08khI202JVu2eHAP3gGjDN72r69m7mu3R2aJUxgOuOKQsb7IrXpi8EeJdGA0kHY9QP0szTVcjGGxyuuMe9rDZJd2RqblG3U+3EHnqI2tZPIe3EOKhMARccfny6P3PEAIV4M7BzE/5X2PkdbV8kJ1b5e4/GSqZacm7meXuPcZKS84aC3e3Vmp1RuFJQnyKn1g6WLFVYRaXMfPnNegrHx9mbMc9fnqurj2wdX7u+6z4TVIg/8A9BxB4nrNvTUZed7CfD8KVVs4z3mpznrb8FSdpOztenSNa5O3cMJaisMhHMKZVh0g9OAsxR7RLf25D4n3/P3RdnbQOTKgZ8HdeR5d/wB+aTsIxwoSlQDIduS+/Czk9Pi7TdVaVVGJO2zVMFyoBXLodCJHKOOv7HO1bO4luEqrlkLmBrhn8+c00XbwgZRJy66xozA6T0115Wp39om/ywVbIB/sbX9kOqgAs1RmaGkDpAy7bg6nTiB6stubBgAy/tEZewDAL28+KixHDqj01cGWBAUbbCRHAWlDOxry06cV2nqWMkLSO/ir1G+VEpg3gQ0cAdY3Ph5RpHSwHRMc+0Onzn7qRY1z/wBnTvyQ+rdDeJMjugpABYgtOx0JMzz5QBvZhsggt/2vy0R2PEIv/te/dbXkqvZa71Lt3lAwwZwyurDLI8JXUaNsduG9jVz2T4ZBwGhGfO+XBF2hgqS2RuoByN7875cPgRGoppvWrJSYnQZkUEtl8PHXhrGnGy7Tja2Nzh3E6ITWl7GMLu4Em3zlxVq43yqzZe77uVnK48QzaSIPiHxGZETxOwZYo2tvivnqNMvTggSQNjZrivkCNPHlwQ0Cr3grKzkKNUdTqN2yrrlO+h10HWzJ3eDdkC54jyueKIRHg3DgAefpfp5IXeMQTuqlVmImf4c6hjtpEyJ56R0s0yB+8awDx6J6OndjawDTj0U9yqfeaaslXJINNwrtIB2hdNZEyf5rDkG4eQ5t+IyHqgyWppCHtvxBsPt3KW63dCncODGXKwPXQwfmLRe9wdvWob5ntdvWnO90qVR3deqpEAOVGn8umnpB9Ra2b24mkcr/AHW62DUsZE0k6gH7ovKkKajmDML5RqbJ9oEho8UnX7bqpDK1gFwbYv8A4kmwHVMPZCkhdmpgBVG6iJY/2HzsjWue0AP19liNqSyNYGyG5dz5KzcbuGvFZkWGXwgzodm/Nh6Wi9/7DA4oU0h/Sxh5y1tx5fyhnasmreLvQGuucjl/xFi0VmRPlPcmNmgRQSTHuXIf/wB6+himiqekyx+RHtb1v+KOpJ9lv/8ACGYYHSHjdAcKPeV3rMdMzweGwj5C1hOMETYxyCpNu1BllfbO58rqDELzxG2w/fUmfexYmcEpBFzRXBvDRDHWKenVnYkWXm7TnDr7AIFR2nuHXyAAWr9nrgadBF/FEt/mO/toPS1pBHhYOaaiZZqf1FmyU4lG81GWs9KM1Q1DE/yscw+tsfUPc2Z8ZFzc+eYSkn1WGq+v18NSitOokMuxBmy1TM6SJrS3NuhXDLiaGuGYUuAXUNQqA6iD/b99LM0MYkhdfimooxhWN/aLhJpOKySpBgxyO3sdPWzmypcTXQv4L0cYALHaIHhmNK38OuBB0ngfMfnZqakc3txJGpoXs7cJ0+ZI6P4WV8xVQBFZSTA/rHEddfzsjcyEi2f/AFPt1VYf3rttc/8AU5fbkU2P2eoYhRAMJXK+FlIKuOYPHy9rCjqHRO7P2KjRv3ZwxHMf6uy+FDOzF0xXDandvQqXi66hgnigH8SD4p/piDYlRPS1QuDhfyOXgeHircsjqAXhtncQePt4/ddduPs5NYG9XFZzatTGk9ROzcwfrYdDtYxndzjLgdbd/RSpTJD2XZt4cx07vRZ/hmIPRfuqwZYOqsCCp8jqLXE0LZW42G/cp1VKJBjZqtIpVS/d1KZzodG1jfSTwJ20tmXNwYmPyPBZt8ORDhY+/iljtZdGE1O+cCQFHAGJ06aH2taUEgPYwjqrCgk/0wDqUW7JP3i99UMLqqJmOpUAMQD7SJ3NlK8YDu2a6k+iFXNEf7bdTxRW73x6r921Mxo2vAEkTB3G/wBbKPibG3GHKt3Jibk7Xh5/dQf9SVa/dilKOQCUU6EyAWjcSDqeXSxNw4xYy7Mcz6fwjiKSSPG02toD/PFR1rmomiw/hz4YJOknSTJMDjEaxJm02yuNpG6pgOdiDx80+aorUrKKZh/4Ohk6AKsbTqeR1Gx62TDSXjLtedyhMYQ/PXp5W1QOpii1H7tB4QmYuvhJZj4so8oIiz4pyxuJ2t9DnkNL+6KYsLA7jfQ93H+ULv2MV8jUKbmq/E6AhSYI00MDnrrzs1FSxYhI4YR7o8dLFjEsgsPE58NfJBO0F0zAM4hgNSOQ0APWZ97O0klrhuidoprEtabi6IdmcRprTZUBVhEmAZP9o+dl62B7nguzCU2hTyPkBdmFaxqpUpVaUwadTQtxB4D5g+9h0zWSRutqEGkbHLE+31N4dOJ9vsue0lEBhUiQQpYcyP4bT/pK27RuJGAa5/ked1KgkcW7u+Yvbu1HmClfFaoUhaeq6GDruJjXkItawNLm4n6q6pw57cUmv2WmdjLsEuojdiSfPb8rZnaEpdKVjdrSl9Sb8NFY7OJIq1ODOY95/MW5U5Bo6BDrhYMbyAQa4U+9vl4r8KZ7tfofkPnY8rt3TMi55lPTO3VJHDxdmfZA2v5CXmqCMzu2X00B/wBon0s+IAXRs5AXX07Zh/RbJ6kLunRYUhRpjQASBuS3DnM8Onnbpc0yGR2p9FhHPa6Yyu46dAPmqo3XDVbKXGumgO7HxCSPwhMpJH89mHylt7fPhv8AZMyVBZcN6/bT7k3t3JhuV3Uvd6SDwtUU/wClFBBPqTYEN3vz1v75+SWhcXuJdrp43N/JajSOlr5WoCcVMWkQmEKv93H3qlU5wD5g/p9LUdfDhqGS88vshuZ+4CusauS5twJ26nkLL1dMC64U5IQ5D8OU0u8Xgw+dg7PJaXRuUowQLFJP2j3MNSI/m0ngOR97HY3dVBeOKegp98cN7JGPZVKSKzwc3E/pa6dC7Dclauk2XTsbhLbnmfmSgDtRPg1Xip2I/fG1bPA0mx+6rNqf45TVLSWDC7gR7oxhd6e7Ite7S92JmrR4oeLU/wCUg8LJlwkcYp/q4Hn3+xXzieNwmMFT2ZB9Luduf5W59nsTo3i7pVpsCGE8JsKGKNjS1wz6rQUsgkj68RyKpUcapiu1MRBIBPDNxHUxG3KyDXljzYZG39p9lJZheVn/ANsfZpagWsinvJCnIpJKk8hvBg+9rOhmEMu7JyPM8UmyNwJI0S12Xu1WlQKsAagfboRoTMQOun6Q2gWPlBGltfZUe04y2VrgMvK68xKgKoVXGq+IieOxkAQBxkcyALQheYyS06/P4STJt2SW8VfwJJoUipyJlICjg+aTrzOvvYFUbSuuLnn0t7LlWTvCCblSCmXWaoMkksUkFspkCBqdNI6WhiDDZnhfhdKl4a7s+fC6i+/kutNVYoRDED4RpBMDnE9CbT3IDS8nPh16fhHZCS3ETppfj077aLyNBnMlZBXYMBIAME/hnbQn2Hb59ka+Xw+S6HFrjYe+f9+SkulyIHdszVFIBkxILGeAAKxpJ46WjJKD2wAD+PO/sozSh1nAAHpe3K/ehOM3FO8pv4k1y5RBG4gwJg+RjThvZumldgc3Xjf+0amncGObkeN9PVDr7hhu9ZaqBydM2Y6ENK6ZRJ18XD9GYqgTRljrdLdO9Mw1IqIjG+1uFuY53+3H828WuyCFZJZo03Ag6GT1OvSwaeRxzByCBTSuN3NNgPPn/HVCMOwpwXkggQCo0BBngTrI+lm5qhuVgnJ6thAIHijVG7NUoPdKmtRVz0m18QG2+sjY9LKOeI5RM3IE2I+c9VXPlbHO2pj+kmzhyP8AOqqNXNa6TxEFun4W9A0E+ViNZuqm329vJMCMQ1VuHD1HlkqtPDkLk7kAz0A0H0FjOnfgA4JjfyYAOCf8EjuBlGw+ls9U3MhusrVgmY3Vi6IKN2QH8KZm89yfmfa3Znb2XLibItZ+7PhHE2QKkhu9wZmHjKtUbnmbUD6D0s04ieqAGlwB3BOZVVcGj6bgDuCVwoYokDLTCkyNCQqhR1liZ55CLWwJaC7i6/2ub+XqtbXV14hGw5drzcSfs2wHK6YFukADjBMkxGbwlid51Kjjq/SyAk4/O7506rLb3Mn5lnb38B1VHGrwtNQiKBnMARqBx8uWnCx6cOeS5x0+fymqKKSZ93Z28z8z71dw5it5QqJyU1kmY4n849Ldjl3YD/8A5FanZWw3Sx4n5G7ja3gtKuFUVKauOP7PztfwyiVgeOK5PTGGQxu4I/j+K9xTkLmY/COGnE29UTbpt0Sng3rrXSdS7ZVcy98lMJmBlQwI9ybVM9UZG2cOqdds9tuyU1X0U648aq6nVZAO/EfqLEdZwSJbzQ4M1Ju6YlkYTTY6kRuhPGBqDuRPKSB8OhCiMjZDe0N2FSmyniLT1cCm6d2Fyy+84tlJpPuukE/TobOiZwaARcLX0lfDILXs7iPmqFXy+6cgNrBc7eZBdmnDMyoez/aQ3W8EkF6L6VEH/kv9Q+e3l6ejE8VjqNCsLtunjrHEHX3Wo4a33Rkq0iHuN4gyPw5tMw5a7jpagnikc3C7Jw87cO/ksxCXxSiKXXnz/n1RvHvs+Z2FW716lJlDQAxyy06kbzJ3tKCSWMdpoc089VpmlzRa+Sz7De0l9u1avQvq98Vic7HXURkbhIJI04dCLWLqaCVrZI8vD5mhuqHxA8QosW7RUf8AEppUpsDsQdV1kEgsW+I/FG8iDYjafE0sNiPfggSOjnYWHirtG/JURaygkNo383MggcYid7VLoXRuMbuH2WXkhMcm6k1GY5dFLc77TdGU7LlWDJPhBg7xM2hJE9jgRxuemfspTBwPf9lQutNj3iq5zkQASeJ1PzG362O9zRhJGSk45tuMlawm5CnTdSZAYFS5ICyoILCQN+HWwqiXG4Ecs7cc+GXmjSOEhabc/gUt4/xAWGZ0PgzkidwRop0idDI8I24xZ9FhkDrb+/l1FjjgLTx+c1S7Q0VaajVHRXChgN9DnSSvENx4bzwsekeW9gNBIvb0OvT+l2nlcDha0Ei9vQ68/g4qPGL4qDKczBgACp4CPETOsrJmLSp4i/PS3y33QqeEvJOQIPwffVR17wjIWRajEtJYCSDEqFIYnLoSZgeIi0mMc11nEDLT14a8u5GY0tcGEgZadPzyQrvS2tUklhrDEEcJ00AgD3s3hDfo4dPmaYwhv/p8OnzPNSXa8ItULrLQJHADYk7cB1k7W8Yy5mI6D5koSRudGXcufsEYw6999nKqVqUKhChonbUGNPF4h7WUqWiN4z7LgPnhqq+eHclocbteM7afBkVTbItXMv8Ag3lc68gW0cfMN/qNp9pzLH6mG320/CYGN0WF31xmx8Pp9x4Khc6R+8FOYUn2n6zZiZ4MIdyumpHjcB46p/wqnFOOv6/2tnpzd11mJzicXK3e6eaVO2x6gcPXb1NoAlrstV2R2GYub4JW7c3uKKoJLVW0A3hdZ8s0Ws9mRgyYjo0eZWj2Hs2UkSAIbgeEsYepKU0h3LCCTqVXX+osfKLN1E7QLNzJyFvPysjV7Xw9gtOI5Aep+wCsPiBZ2bZVk+ZgKunLxGOWS0BGA23H5f080huQ1oHE+mp9PNUGqZL5QzcEZo6nYegFigYqd9uYWw/xUM3gPeit5rRUXU6zP1srGOyVuHgCRPfZWr/AGv4ja+2af2B3lZXa3/uT3BNGP0cyZh8STE7EHcHl58LNVMYc2/JJ0smF9uaybtHf2eVVfGTHkJ36D9LUjmjU6K2nkEERe7QBGexuKPARCalFfxzOU6aTy304RacDJ3g3GirKV7p27yTInhpbvTHj99Ao97/+tlf2MMPVCw9bT3gIUqmndGL25KlXxFKih6bBlOxH7+VoONiithLTmFmGIXFa+JMriEkeR0nf39rOxvyHVP0NM2aW7xcD1TDiPZy709Cg1Gw2FmHxNCv8MTmfSLINhPY2neu8SSrUmgFdypjh+KJ89otOCPGDmqaqpInZHLkfY+1/JNfZ/Abzh4NNyLzcn1YDRqRP41XWRzAPWOaO0qB0jLt1Hz78lQVux2zsIbm7gtIufaaiKQaq6oI/xCfAR/Nm2HrFqKCchojcM+CrqeubJ+2/Jwy7+78LJvtZuyV61O83d6bKqwWzpDaz4ZPigTtPCztBMBiYQRc8im3xYm5nVLNSKiBhrmA42YY7CbFUDHGN2EoHflqUxNN3UcQrMPobOMwP+oD7KzicyTJ4BVfB8YehVz/FPxDmJnynzBt6ppmzMw/ZTqaRk8eAp7w3tNRNSkMuU1QysxUeBjAXbcH5fSin2fIGOzvaxtfUcfFVT9jVUUTnnTh3c+9Er54lZcylhrMAbTlgAbcellI8iDbL5dVbScQff5fwQzGaxRlZ2gZTqshjwhT+I5ucjT1s1TtDmkNHHw8eWSagaXtIAzJ+X5ZZKSjSfugGnXJ/DOsQAHWQY5+UaRvaLnN3hw9c/QoUkjBIcI55+hVe8XdVowVALsUHijLtq3Paem1iMeXSZHQX017lKNzny3ByAvpr3cl3hFRaFJgGnOIg8OXnztyoa6V4NtFGqa6WUG2iEisq1TSA1IDAkggjYaelnQ0OjDzzsU2WOdEJCctOXmh4vYXv3IJygDQbkngeHDS1gGkgBNbou3bQdbn7Jh7P3kM6VhH8VctT/OmoPtNqSrjLWujP+puO4qqroi1roj/qbjuOvnZD7vVzm83Y/FSqPVo+QY5lHmpOn9XSzL24RHMNHAB3fw803I3AIqgaOaGu77ZH7jyRXDKSmpTqdIJ5qZZT7l1/0iyshOEs6/wfYrkbC9jmdfsdD98j90/Yfh05RMBtZj5Ttar3LnOsTZLx7ElcS51rfOC5xuiEGmij4j++NoCNzXm/gpjZH7rABlxSthlHvahvVQSSIpKfwpwPm2/kQOdnpHiJm5bw16n8BfUtnUkdJAJX5G32H5Kjxu+JARiTrmygmI21G2p/8etpUzHZkLO/5TNHM+0QGICxdx527gPM9ChGE0wzGo50LEKPKf1j1Nm5iWjC3ksfUlzGYWjO3qhmKNmv6eQHvP5WYhGGlctd/jMWFsaOYiuWpSB6zFkoM2uW3qMntTx2bAFARzP1te7PH7A8VlNqn/knw9E83kTazVWEndr7rQFGqqCmlZwBCgSddzAkaTrar2hJDFEWiwJIyGut09/46rr4sDNMszpkRf4Es4fWNG7U7uugScxGmYli3oNbVNRtJ8jAyPLnnmtZs/Y7acdshx7skNxPEHKtTzEgwYPMbWHBiJ1VpI1kJEgGnohmH4m13kDxIdSvJuY/PnZy18iq+uo2yt3kf9qremNRi8wxMgizIAtZUUT3QPuFPiDXxUUNSbxbEanzjceZtGOpY9xYHhMybZh0DhdH/ssqMKtehWGWro4BIMgiOB6D3tb07cN2lKx1W+Dr/AtDbEEDFHIBaSF4jp5Tt5+djWtkiNjta39rP+wPaJqd4r3avTZrp31QJUgxTOY+E81PynkdMvtWCLFi48W8T1HX171k9oGnbUuc8gEk5e60G/djcOvdEgLTYNqGptsw0B8JgGNPLS1dCXxEObIb8jn6o7cBbiYVi+O4TVwyv3NSXosf4b9OR6/X6W7HtqW4hk8aj3SVRTb0Ym5O9VVvKg6iCD87TjdwKUicW5FLt7uuug42fa/LNW0clxmpKd9OUA6aDKRpqNJtB0Od1esrw+ExPHQfymWnjxL06JPeGQvefzZtNiN5IE+dq2Sha0OeNNbKi2jsaniLnxGwte3Ue2uSK17iWUAAgnbP8WnxCQTw13npZJswB1yHLy+aLNtmDSeIHL+f6VC7B1ku9QoZGXgV2MCP5W58OlmH4XfSBf3/ALCK9zXfSBfn1/sKcqikOVZyQVB/zE7zqoiCI/5Hd7gWg24/OaFd7gW3A4+nLXrdRMw/xGbRRx4H+2m9pAH6GjVSAN8DRmUu3qpNbv1aVB1IH0H7i1oxn7W7IVtG39ncuFjbRFMTu6lAVWQxL+bDceon9iysUrgbE6ZeHNI08jw/M6WHhz8F9hzZDTZNEZhtsGH6rI9OtozDEHB2o9P4K7M3eYmu1Hp/BXfaKp92v1O8DYnxdRsf+0/K3KMb+mdEfBcomfqKR9OdRp870QrKKYVlkrT8S8jTfgeYBEHymy7DjJB1PqPz/CFTSu3l+J1H/wAh+RmFbofaAq+F6Z6EGR6f8WP+heW8D3rVQyseAbeClGKNfiCspQX45/H/AEjkANz1srO0U+v1HTp171f7NoWTnG4dkeZ/HP7KwcRVmdVMLTXxRw6WU3BDQ46k5Iv+QVRijZFELvLh9+XmgeHI18rO05aS6T0HLqfoBayeGwRhvHVVmzdiYjeXMDXqfwEUXDkasqUgQF31Oll2yOc254pT/I9nQwtAjHaJ8rIK9H/8gByqR/tX9bM3IpDfl7q02LT7tsQ+aFXMYqze6a8lJ9yP0NgU7f8AjuPVXU7/APkAdE+dmmmgP8zfW13s8fsDxWW2sf8AknuCcO0t8ajQeoo8QgDpOk2YrJnQwl7dVHZVMyoqWxv0177cFnta9CSQxYuPEzbzxi2VmluSQb31JW6ZFYAEWA0A0twVGqLLtTLUKxGjIs3C+xU3txNsg5Ykwd7WP1C6o2TupZDG7NvzRTUQFYEjYgkHY9PXpYZc4CydloqesjJYbH/sOHeE7XPHqdZlGUKdiCfofe1K+lkjuQfFfLtq/wCOV9Dic1pcz/sM7941CKUMEod6KqIKbzL1FJDHpy9xY9FtCoiyxXtzz/lU9LtiaE2v91avdKmrq7tnanJBcDXTYwACLNT7WqntDcu8A38M03J/lU7bsAb9j+Uj41eqaKe6JiWeNxLksSNNiSdANLdiY+V+OQZm3kqsvfV1BmkbYmyD4L2ovFJy93ByGMw4H+9mZqONws85q2iH6bInwR2pjP33vBXQAgDSZke2hHKyLqd0Lg9rlcwVjJoN3ZKmMYU1NkFEyHYKAeBYwOo1i1hBUNcCZOAv9ku6naTiRztN2ErXVFq0ajVSCMyuAQeOgA+XKyNFtllQ4xyADuXYocXBZ/VpVFZlyZY1yngD5620LZGkAgo4bc8lLcaemYjYjYwRGoI4iOduSZjJMxUm+GK+nyx6FNdLtNTOXPK6akkwp/mAAJM+LTnGo1indQOF8H99OHTw5qprNjQvDp6d1j/0y5ZjhloQeV8iVYvOLUu7Vzmg6aqYgcuIImdOdhtpJQ6w+c0o7/Ha+Jm8IFtcjnn069V5eKgTKV1zQQw1BkTofn62NDEH3x/ZVjGF18X28VcFwp1adRTOUgZtNARtBjXnaFSRA9jmX4oc0u5exzNc0PvWG0gw7jKUIBKKS2QmTkLHckZmGsxw5vzu7O8Oh8k/LI4s3juKjwCiNaNRozjOg4qeMc/FP042SqjlvG8Mj1H9JatecpWDTI9R/VvgX1S5vT7ylBXijiRBOog+fytFsrX4ZB4hSZMH4Zh3H53L7GV+83AVI8dMww5FdCPr729TncVeDgdPFcpT+mrt3fsu08VD2bvrtSNOM7Udh/NTI1Xrp/4ixKuFu8DhkHevDz9UzVQN3txlj8nBD73cab1QtJAAflZ7fFkeJ2vutHs6ndOWtOvFMVGv8N0u2mnib+UcT1P62pyw5zzfbmt217IgIIdQNeQ596+xW4Ld6Rp0iS1QqGzaljPPzM27DI6aQOePpvpoFWTUQbMyQG9r2vzdkXd9r+yI+C60Ag4DU8zxsEl08qtnFlNFidkB880S7I0801SNxZ1kQbdYmtlNTLjclvCqWe+PV4Kajf7mIHysOqfhiw87eS1FFDbCeQ9UMqV81+ZjtoB5D+82Y3eCmAKV3okqXOHd9lqWApFBPKffW1tSNwwtHRZqufiqHHqnTEaQqI1NvhYQbMSRiRhY7QqNLM6GQSN1BWV3+6tRqNTbcHfmOBtj54TFIWHgvpNNO2oibKzQqJXmwCLIhbZV61OQelptNiiA80Lq0YYG1lTPvcKo2rF9Lx3I7Qwj+EzOQA0cJIAMyDwMWRnrg6QMZw81W/pZW9qNxDhc2HHLQqli9wu9KtkWoxUrKssMCYzCZjcddLGie9wN7ZKlpv8ALq6KQtlYHWPItuPyO5X+zj3mR3TZ0G6tmy+UiY0sJ4YT2m5rm0NrbDrQRUwFjz/s0Anxta/iD4LnGyC5Dr8P4WOaNuBGvnaVIy7cQK+cMbhe4xnK/d87ku4vWAJJ1Enpx1/f0tZxMysE9TMNrBeVQoXKihV3AAAAM627hzudV1gLjdxuVWwe8KK4DEwwgHrOnltaM0WNqtaewN019ncL7y+gs006QDBebk6H0gnzi1NXy7mAtGpNr9P5V5TtxrUqtJSsMAZFsqcTHAhORsGlllf2g9l+8DFEAKiVaf8AtjrbUbJ2hgIDjrqPdckgxCwSG9zpd0uUmSJPCD766fW2jMrsQV02hpzT3bllrcpgunYa816SEp3VOBBqSCesAT7xbklSxrrhYp0jWOPNd1eyd4ZxQarTgLpGYTzgRoetg/qWai6sn7eAi3JHaKtjB3p0DQqAeEzTYa+n197LGT93GOOqyVU1wn3o0Oqt9l7wHDUuK8ean9D9RYle3HTm2rTfwSe0GF1PiHDNd3/MB3dOmrOWIBIGh3mdxprpysjBUAxYHaa9e4eKBSStcwtdpqq937N1qrqqoMytrI8MGGnprmtz9YxotfVFilJcWtvn5d/hZNF+uFSmFzqM0gHiDz+R+tkHENNxl+Uk5slLJbQH1QfG8GW7iu6+Gk6ZmB2Vl/UR7WYpqk1GFv8AsCrOeFz3ROaOPwLN6dV6F5DpGVyB0jTQ+W9tDgbNFhdqFbta2eINP1D1RFKTks6I5E7qJPUDhPXbzsvI9tw15HziriLaUVFHhuBIeBNrdfwBmUyYFcfu13NSoIqPz35yfmYtV1M2/mDWHIJOfbs1VVRUWz32JIL3ixz5crDMu4HuGdXDCarG81D4FkUhz5sfysea0Td03U6r6JTAyv3h0Gn58Vbxy7xdO8YeJ3UL0G/zizNLFgFyqHa1cZ5N209keqdblchdbgXb4ik+QixbdnvVSztSgJC7N04os06tlH797I1A3kwZ1WzjIjgLunoFXxPDst7DDZvra1rxhYqHZZxvWi4Qf4NP/KPpZ6nN4m9wVJVttO8dSrGN4oC9RRVanUScmU8iB8PHQzZKaV+8dY2torKmjjEbQQCCM/7SDf8AGaj3hqdcguNFYfijh52rqpjnjefdaTZlRGw7oZA6LytWK+Ia2Ta0HIq8Oi9S+BhI9f724Yi0qLS0qTDbqK9VQNVQyxGxPAfvlbk0hhjPMpepkYW31sfNNeI3LPTIkqIiRaphkLXXtdVTX6tvqssFGujm7LSaqUdi7KpHxDQ8hpBibarFE5u+c4NuBYX5LJ/opzXudIC7Dl0tnn5p/uWKfdaa1kSMyjNTIgiNCMvAjX2tUx43TFt756rDVENRDXuhJzvYX4g6XS/iWJByKpYkMQZ58vnw/wCLW8MWHsrscL7lp1zv7pdeo9arABPMxEDjM852s2GtYFZANhjuV1f71AUDURB34eXC3mtXoI7kkobVrELPG0g0Xsm2t7WSP9hMbqfeMzHgPUcZtWbWpmuisFeUhs6y3Wi+ZARytgnCzrFWB1QjGaYYGzlM4grzhbNI3Yvss63mpfKlLNd1qMaa7ksD8QB/CrZo5kdNdhJUfstAF3WF/nNUtdXSRBzGk25LQKuK06ohdTPw6DN01/W0SBJHZuqzsdaxzss+iX+01y7txXUnw1FmBwIB5edhwOJZbkUTaAbvA9umRRfGrtT7ouYy5Zn0sR7CNER57N0l/wDQTS7u80xrEso/EDuD+vO3W1O7NnjI6oLO3GA4ahHcEvFF/wCI0HMoKnkRw/fK1DLG5pLDwVNTRMgndDLw0PzmE19nnR6Yccvnb0cTA4k6haGlDMyvL3d0nMxE9TtYDiXGxKWnpoy/ePzPX8JB+0S9f+1qU0MloUdJYfpaw2VGWzgnQJuhjMkjYWcDfyWX3dlpsEvDaA6hQSSB8tfO2nLTJ2ovNOz0j45CG5FabhFdzSUm7mkjAd0pIJZYDZ9NANYjmDakrqB0bxc3ccysltPZ+B4IcXOdmf44n7oXjdanWpCKkqxIlTyOuu2+loUzXwyZtzHNN7D3lHXND262B7nZINeMVAalRUEKSB0AHDztYRUxN5HL6tXbQDG7mNOuLmi4utCSc1ZCTwhAWb/tB97NXB0Was4G5RLt/ioNxqZdJGUeun527rZTpx+4lXs8oNOmvIgn0Aj52WpId5VFx0Gav9p1O6psA1OXgrmPXaGp1BwMHyOlrHaDLxEqp2XNhmA5o7gdSaK+ZHzNp0F9w26V2nYVLrfMkn472mqd4Kj00BOjMmYeTEGdhxBnptZIv37r6H1VVszaxIwvCTcXxZ2cuNcp+PcWPFEAcyrN1fiNm6pywHDnvNPNny+EHUTuJspPTNY64WkotsSOZZ4v1/Kq4pgVRc1ahVV8g1RkH+4AyP0tKF7WKFVNLKczYckzdjFm7ozfEZzeckWzm1Hk1Dk3FcQtajt4qSoXlravYM12NtnXVC8Vco4WYY25RycLS617BLeJ39mHdDUMxHlMSfYA+9riCnsA/lmvjdVWS1s5qpsiM7AfYeyq3two0+EDT0gz0s9FdwudSgRh0jiXanVCrleZRthqSx8xpw20+Vm3DNOyxWePJCL7Wk+HbhNitHNPxMsM1VSgahCczBIHDnbz3iMFycgjLn5Jupdnhd0S8UwxZD/EEkyh3gcxodORtSOrTO4xPtY6d6tYoix91pOAYqGpCGkRpbNVdORIclYhuS4xi+QpI5E27TxXICE92SbsORRRpqnwhBHlAtq4WZLPP7RJKGYtgVNj3oXxbsAYny4A9bNsaL3IzVXVUDHHGBn0SpjGLq9F01HwlRPLQg+RgmwRGMTrDwSglMkZaRbgoKd+N5WjdgdP/kPIKNvraZZfVEbdzWsv3o1it9CgUaQzVIAA5D+o8LIytxXCNLLbsMFykz7i93qGnmhG8Q4hSdx5T9bCewyMxkaZFBqqPftDiO0Ey4HeHRCpKoBrsNZ4gz+VkZmh2gukIo5hcA271ddWdSwUsBqWIgR5nS3m0oAvqigNFzbEeay3tljwP8JdcrSxG0iRHW13QUhAu7JarY0ElO01EosSMh05n2SbRqZnzPqOVr+CMDwRZ5nSOLipL7itR0WkGYU0GizAJJkk+p9LQcA52I6qAABvxVzBsWcKaZgj4hw8X97K1MIe4P4oX6VskofxH5ujXZxRJqtJO/PXn6aR6WWmfY2CtQL5pnw9ixQwYzaTuBliY6ybBAs5cOiJdvyDdwi6xBNmwLhCgdhkCH9maRKgAamAPM6/mPaxNnx5OdzPoj7XnxPDeSfK+Cq6ojctf1tZPjDhYqpZKWG4XuGdnTTphSZInY9bDhi3cYbyXppTJIX80pdv+x6KlSvRqLTUalGBiTwQjaTssewsnNSMYd4MuirTCxjsQWUXigwIRoUE6678/bUWjG5rswmYXNebhbJ2DrqaPwmCx1GvAAA8eG9ozROd2gLhXEEgDcN80LxzERSquwXwsG5a5hE/7pskIsJJPFWO9JsOS97E3oGgw/lc/wDd4vzNqPakWGUHmPRWdLLvWnoUZrVrItan2sQbEK8izsTM1CR98gkTFMfSWUAkg/EPxR+/zto6ane1ov8A0vn20NnN/VufD9J4deNvnkrd7vZdAyjRhPoQOfrbrIwDZUkUQY8g8Cg1FiJ8UE6FZ9vP+9miArB1jbLxUVOkW0UT+97dJtmmGtLjkm/srghJzETzNqHaFYDkFc0tPgHUp7p3OF1tQGW5yVk2LDml291mu9QZDCNuOE8xytbU8TamMh31DQpSeUxuB4FdYjjFMoZYkxx2t2DZ8rXgkAC6BJUtLbDVaFQo3inTXuGR0CiFckGI2DD8xa0gadSqJ4kBu2y4vmL3pV1usnjlcH+9m8KC+WUD6PNJd4vy1lqI6KtRWkgA6Ekcxoeh3Fkqlr43YwdRZQD4nx7qXsm9wULw9QHbUkTDZZk9IA476mzFOHOjueKr2tdmOCZVxygmyMjcsjSfWNbRkhsLJ2N7G8M+4pX7SdoV1IBznRQRGnM2nTWjYbcSrWlgdPbCl26Xytu1RhyA68uNl5WMc7JtytBFsimAvK0HvVTEL9VJjO88TmJj1n5WYZC1g7Q8EXdxPbgiYA3nhHll5pev1QfCPU8zZ2Jp1KrqyRoO7Z4rqsMlPLEM2/Qf3/KzrhgZbiVWg3N1RNgKavYe4QGpodYgiZmw3i+SLGQNU6dmu01FFbv2VYX4UptLHgAVAy8NSbQDAnQ1lhnnxyOXl6L68dps4dqIKIuUqrGZadY4DSddzx4W8WMIzCPGzpcZoxht/W9UyCfERqP31/K02RgNIVfURmN4cNE2dkbuoWSPENPKLHpm4WBvJJ1DsTy7mmdKnjHlZhARBatvWXEn/aNdWa6SBIR1ZvIAiSOIBINka5pMeXApSpDi3JYviiFzlgqqnKJERMT8/rZGM4FKkbhcATmdU9/dloJRNByjfDp10157zrYTJHNdjBzWvkhZu8NslYo0e/qEMyiEXxaA55cPJ4ggLpY0077Za80vBAw3vew4KtUvbXVjlCOh+IAAMesjTTytWVUZqAA/IjiPdWMLmwElvHgiNK+LUpvVnKiiTpJiJ0AtCHY7yMTnAD7oh2qCQxrcykTEO0rMHBpjKQQPHBA5xEHqJtY01JDHmcykNoVE7Ta1hzS+bmQksN9v+N7PdUnHNHu+1qrmD1GyFQ2x2OwG/prYM5AN7IYoqOSB0sn1dNftxUiXQ95JbwkGAP35+1ob27EbZEMMshBbo3jn3q/gGGmpeAQNB8Ug7HT6xaEj3GJwGeRXJpIf1AbEBhBGY0WuYTdlRIA0tiJ5HOcrQMwleYjXAGlvQsJRSckgduL7l7sfiMkR0todlxk4iqqscMgkwXtqj5SYHW17gAbdRpacSPwuW0/Z/jb1bmFIlqXg1OsD4SfTSf6TYLQLlVtWwQyujbnb+1L2oxBkpsXqZJEAA6k9LFaAq6UnilOngbLQZ6hh/jUTtBBkxxIHzPO3nOBNkDdZXXdyVqFOnekkgyHTmpJ+mnlrbhNlwCwDgmBsRSogdYjcGwnApuMB2iSb3c2r1mqKvh2zHYAfXjtaDI3y5N05rV0xiooQ1/1a24qjf6yp4KWrfic/lysY4Ism681Ngkqe1Jk3klzEKhCyNpieZsWGIntOUauraz9tmvorHY7AheHqVasihQXPVb6AHqbWVPGHOudAs/K8gZalB8VvIqVXZdFJ8I/pGg+VoSvxOJUmNwtsqkWGpJ57NXGmLvndQWdiVngFGWR56+9onVcN00V+zF3N0DkDvJkniFmPkfyt5zBZGge8OFki1KSoWUaqRAPqD+/Oy9i0kFaKMskba1iNQuLleGoMKik+EyfyA8xm/wBxsRjklUwloLToVqeFYjEOmqtrZ1vRZ94INimW635akEb8rEBuhoiHt1cUuJ1AJnbj++NoOsBmoOsBmsexDDnvVd6jIyqXJAIIJE6SOGkWqWQufKXWyKUja7eFwRxeyl6rBWBUIu8kyPSNbFFEQ7otF/5DEyx1XNbAa6sSoEniDvY81IHjJAgqzGc9FQPZ29swzJpxJKxptxk+1km0Ml8046tYRcKzeOz1QrkCkaR7c7Ougu3Cg09WYphKRexQodgry75myBOJnU8+G9hspH3s4p+r2hTzNyB7l1j+AtSCOUIRSdRrlJ29OA9LRq4y1osMkTYccEjnNfa/AHiOKE4TdmLuQJTIZ047gDbrYMAJaRbgubYpIoG9jjfJVr1ROYkAqR5b8o4QP/KwhPiF8rFd2LSumjMxuOXD56Jx7FEPTkIgMw2kSR1HnZuEAi4Crq+N0cpxG9+Kc2oMtMkKdOHK2Z2lsd0bjNH9OpHL+E1S1uKzH6+qEANUYKB+xZOlpjK8MbqjzzYG4iEpdtuzlZ3WqgLKFhhpIgkyAd/7W1cFKIWBrUrBUMce2bJKS5EMZBEW653AJOurxE4bp2Y5IvhOMVLu2ZHhhp0YcjwNgEEm6pXyyPkMvE6rQcExu63lhUqkCuBGV9ADzSd597e3hGVlJmFxu45q3jl7VlZQ1MMwgZmUTPmbeaSSpSNNskLr4hQu9FUeqmg2BBJ8gNbeaHFy7GzC0Aq5crippKwUhWhoII0324Tt6m1g2EFtiEWI7s4moH2ivjHwLoOnIWDVzbttgrfZ9Pvn4naBCaOF7Zh6frb1NS5Yn6qddtE3LIshz/CW+2CEVUSNAs+5/sLOuCrIc7lT1sey4bTudBGTM7PXfT+JIgDnAHCxjlHZoXsPbuUrssWXIsiKW7UC23DX21P5e9vAXzXL52TYb9kp0Y1SCvs0/NdfS0eKMGXyTCuMzTWDqkgiPiA+JD5jxDyPKxHFtrJyOEBtjofK+h8DkfBIuK1QamekSP6OX6iwAuPfIx+IHMefeoWrSonWd7QAsbJp8wcwE5p+7DXV1u+Zzo5lF5LET672bjBAzVJUvxP7kz0amUyLESqZrrfAygm0wV5Hazzbi8oFuNM6xrbi9ZXaCgCAIFuLqgvV0Q6xr0t266uaVBQIiRbl126jbD14E29ddup6NBVEW8vXUy4fSMygIOhB1B9LeOYspNeWm4KHXnslQKlaaLTBB0UAb8dLQwtAsAiSzSSm73EnqUv3/wCzCmxLrVZRxQKPLQnad9jZN1EwnI2Ct6TbclNTiANBtoSSpbl2bWgopoCoHMGSeZsyyINFgqupqHzvxv1TnhtxAQZhMjWbdcARYoC8qYQmuQBfIAWHHFHGLMaB3Cy65znalK/ay6NTu1Z8hkLAgbkmB8zbspwsJQZXFrCVii3Sq5MKx11hT1/Q+1qm5VWT90SvHY69/d6lY0GSmgkl9NyBIB1MTO3CxGseO2RkERgeO2RkvewGAte72lMyaaeKo3ID9TAtOKPG8KYZjNlpt9+yq4OSVNVNdlYEeWoNnDTMTO5HNc3b7P7nd3DrSLEbFzmgjjGwPWxWwsClhARO8XfMIBPysay7dBa/Z9DUztqRECNNOJ562W/SNdNvXm/IJwVzmQblgtfU8VRvWEeKeFnMKQLkndv8GhRVUcCp6cR+dvObkpxPsbLPTfmyhT+EQPKwRKQLFNEKGjRao0KCSTtaABcVwuDRmtBw7swadIT8Z36dLHw2ySheSboTimBVguWmJUagTqDJOnoSPWwnMPBOx1DS2zteaFCtUTR1ZToDuNtmB2kWEWlPRVIIsSq9CgzNC5WYmBDCfa0mhQc8akp4wzs/SFMLURXbdmjUnz3gbWLuxbNVzp3YiWmyasLuMKqIugEAf82kG2yQ3PLjcog1yKmGEHkbdsorumkCBby4nSqLdUl6m9uLylo28uryrbi6omt5eXVvLy6FvLqtUuFuLynW3l1SLaK6vONvLxXS24V4KRbRXlILcXlyEHIW8vIdjYmhWB1/hv8A+Jt130nuUH/SUg/Ywg+61jAnvonoEQx8z72Xo/oQKb6U/wBnEwo6u1vBcKC1t7EUFCbeXCqt5FpKBQXGkBo1AQCMp3HS0+C4sGvSjvG042VIF0809laD9n9BdTlWcu8Cx7WCScSXG6aq1oryo1hbhUlXKg7gW8ury73WmpLBFB5hQD726AF4uOiI3Ya2kuJmwEeNfMW9xXQjXaVRkBgTztwrqWrRXF//2Q==">\n    <div class="info">\n      <h2>Cheiro Verde</h2>\n      <p>Day <span>34</span></p>\n    </div>\n  </div>\n  <ion-row>\n    <ion-col width-50>\n      <div class="widget-info with-title" title="soil temperature">\n        <ion-icon name="ios-thermometer-outline"></ion-icon>\n        <div class="l">\n          <span class="c">28°</span>\n          <span class="d">\n            <span>\n              <ion-icon name="arrow-down"></ion-icon> 23°\n            </span>\n            <span>\n              <ion-icon name="arrow-up"></ion-icon> 31°\n            </span>\n          </span>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col width-50>\n      <div class="widget-info with-title" title="soil humidity">\n        <ion-icon name="ios-water-outline"></ion-icon>\n        <div class="l">\n          <span class="c">71%</span>\n          <span class="d">\n            <span>\n              <ion-icon name="arrow-down"></ion-icon> 56%\n            </span>\n            <span>\n              <ion-icon name="arrow-up"></ion-icon> 12%\n            </span>\n          </span>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-grow/add-grow.module": [
		693,
		4
	],
	"../pages/detail/detail.module": [
		695,
		3
	],
	"../pages/intro/intro.module": [
		694,
		2
	],
	"../pages/list-grow/list-grow.module": [
		696,
		1
	],
	"../pages/splash/splash.module": [
		697,
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
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(38);
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
    function StateServiceProvider(http, events) {
        this.http = http;
        this.events = events;
        this.pollings = {};
        this.services = [{
                service: 'feature',
                channel: 'feature',
                interval: 3000,
                default: {
                    light: {
                        on: false
                    },
                    fan: {
                        on: false
                    },
                    'o2-pump': {
                        on: false
                    },
                    'co2-pump': {
                        on: false
                    }
                }
            }, {
                service: 'sensors',
                channel: 'sensors',
                interval: 3000,
                default: {
                    'air-temperature': 0,
                    'air-humidity': 0,
                    'light': 0,
                    'light-state': '-'
                }
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
        this.polling[options.channel] = setInterval(function () {
            var channel = 'state:' + options.channel;
            if (!__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* default */].currentDevice.params.host || !__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* default */].currentDevice.params.port) {
                return _this.events.publish(channel, {
                    error: true,
                    data: options.default
                });
            }
            var params = __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* default */].currentDevice.params;
            _this.apiHost = "http://" + params.host + ":" + params.port;
            _this[service]().subscribe(function (result) {
                _this.events.publish(channel, {
                    error: false,
                    data: result
                });
            }, function (error) {
                _this.events.publish(channel, {
                    error: true,
                    data: options.default
                });
            });
        }, options.interval);
    };
    StateServiceProvider.prototype.getDefaultHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    StateServiceProvider.prototype.feature = function (data, connection) {
        if (connection === void 0) { connection = null; }
        this.apiHost = connection ? "http://" + connection.host + ":" + connection.port : this.apiHost;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return this.http.get(this.apiHost + "/state/feature", options)
            .map(function (res) { return res.json(); });
    };
    StateServiceProvider.prototype.sensors = function (data, connection) {
        if (connection === void 0) { connection = null; }
        this.apiHost = connection ? "http://" + connection.host + ":" + connection.port : this.apiHost;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.getDefaultHeaders() });
        return this.http.get(this.apiHost + "/state/sensors", options)
            .map(function (res) { return res.json(); });
    };
    StateServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], StateServiceProvider);
    return StateServiceProvider;
}());

//# sourceMappingURL=state-service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter__ = __webpack_require__(692);
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(124);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/splash/splash.html"*/'<ion-content>\n\n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n      <defs>\n          <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n      </defs>\n      <title>jmlogo</title>\n      <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n      <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n      <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n      <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n      <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n      <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg>\n\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_grow_add_grow__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_grow_list_grow__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_intro_intro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_settings_service_settings_service__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_http_http_factory__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_http_pubsub_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_state_service_state_service__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// Http Interceptor



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_grow_add_grow__["a" /* AddGrowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_grow_list_grow__["a" /* ListGrowPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-grow/add-grow.module#AddGrowPageModule', name: 'AddGrowPage', segment: 'add-grow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-grow/list-grow.module#ListGrowPageModule', name: 'ListGrowPage', segment: 'list-grow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_grow_add_grow__["a" /* AddGrowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_grow_list_grow__["a" /* ListGrowPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_settings_service_settings_service__["a" /* SettingsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_http_pubsub_service__["a" /* PubSubService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_20__providers_http_http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_21__providers_http_pubsub_service__["a" /* PubSubService */]]
                },
                __WEBPACK_IMPORTED_MODULE_22__providers_state_service_state_service__["a" /* StateServiceProvider */]
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

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_grow_list_grow__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_state_service_state_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_grow_add_grow__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//import { Http } from '@angular/http';
//import { SplashPage } from '../pages/splash/splash';
var MyApp = /** @class */ (function () {
    function MyApp(platform, alertCtrl, statusBar, splashScreen, modalCtrl, storage, auth, stateService, loadingCtrl, events, menuCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = auth;
        this.stateService = stateService;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.settings = {
            devices: []
        };
        this.menuItems = [];
        this.homePage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var perform = function () {
                _this.storage.get('settings').then(function (settings) {
                    if (!settings || ((settings || {}).devices || []).length == 0) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */];
                        return;
                    }
                    _this.stateService.start();
                    _this.settings = settings;
                    var stack = [];
                    var containsDefault = settings.devices.filter(function (item) { return item.params.default === true; })[0];
                    if (containsDefault) {
                        stack.push(function () { return new Promise(function (resolve, reject) {
                            _this.auth
                                .check(containsDefault.data.session, containsDefault.params)
                                .subscribe(function (success) { return resolve(containsDefault); }, function (error) { return reject(error); });
                        }); });
                        _this.showLoading();
                        _this.defineConnection(stack).then(function (r) {
                            _this.loading.dismiss();
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                        }).catch(function (err) {
                            _this.loading.dismiss();
                            var alert = _this.alertCtrl.create({
                                title: 'Authorization failed',
                                subTitle: 'Unable to connect to default device. Please check the parameters (host, port, usernam and password)',
                                buttons: ['OK']
                            });
                            alert.present();
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_list_grow_list_grow__["a" /* ListGrowPage */];
                            setTimeout(function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_add_grow_add_grow__["a" /* AddGrowPage */], { id: containsDefault.id });
                            }, 1);
                        });
                        return;
                    }
                    else {
                        var _loop_1 = function (item) {
                            stack.push(function () { return new Promise(function (resolve, reject) {
                                _this.auth
                                    .check(item.data.session, item.params)
                                    .subscribe(function (success) { return resolve(item); }, function (error) { return reject(error); });
                            }); });
                        };
                        for (var _i = 0, _a = settings.devices; _i < _a.length; _i++) {
                            var item = _a[_i];
                            _loop_1(item);
                        }
                    }
                    _this.showLoading();
                    _this.defineConnection(stack).then(function (r) {
                        _this.loading.dismiss();
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                    }).catch(function (err) {
                        _this.loading.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Authorization failed',
                            subTitle: 'Could not connect to any of the configured devices. Please check the parameters (host, port, usernam and password)',
                            buttons: ['OK']
                        });
                        alert.present();
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_list_grow_list_grow__["a" /* ListGrowPage */];
                    });
                }).catch(function (err) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */];
                });
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
        events.subscribe('devices:update', function (data) {
            if (data) {
                _this.current = data.id;
            }
            _this.storage.get('settings').then(function (settings) {
                if (!settings) {
                    _this.settings.devices = [];
                    return;
                }
                _this.settings.devices = settings.devices;
            });
        });
        // this.http.connection.subscribe((isOnline) => {
        //   console.log(isOnline,'------------------>');
        // });
    }
    MyApp.prototype.goToDevices = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_list_grow_list_grow__["a" /* ListGrowPage */]);
    };
    MyApp.prototype.setDevice = function (id) {
        var _this = this;
        // Set the current device
        var selectedDevice = this.settings.devices.filter(function (item) { return item.id == id; })[0];
        this.showLoading('Connecting to the device. Please wait....');
        this.auth
            .check(selectedDevice.data.session, selectedDevice.params)
            .subscribe(function (success) {
            _this.menuCtrl.close();
            _this.loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* default */].currentDevice = selectedDevice;
            _this.current = __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* default */].currentDevice.id;
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Authorization failed',
                subTitle: "Unable to connect to device <b>" + selectedDevice.params.name + "</b>. Please check the parameters (host, port, usernam and password)",
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            if (__WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* default */].currentDevice.id == id) {
                                _this.menuCtrl.close();
                                _this.nav.setPages([
                                    { page: __WEBPACK_IMPORTED_MODULE_6__pages_list_grow_list_grow__["a" /* ListGrowPage */], params: { disableBackButton: true } },
                                    { page: __WEBPACK_IMPORTED_MODULE_12__pages_add_grow_add_grow__["a" /* AddGrowPage */], params: { id: selectedDevice.id } }
                                ]);
                            }
                        }
                    }]
            });
            alert.present();
        });
    };
    MyApp.prototype.defineConnection = function (promises) {
        var _this = this;
        if (!Array.isArray(promises)) {
            return Promise.reject(new Error('defineConnection expects to receive an array'));
        }
        else {
            for (var _i = 0, promises_1 = promises; _i < promises_1.length; _i++) {
                var p = promises_1[_i];
                if (p instanceof Promise) {
                    return Promise.reject(new Error('To use the Promises queue, all items must be a function that returns a Promise and not an instance of Promise'));
                }
            }
        }
        return new Promise(function (resolve, reject) {
            var self = _this;
            (function fire() {
                if (!promises.length || promises.length == 0) {
                    return reject();
                }
                promises.shift()().then(function (r) {
                    __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* default */].currentDevice = r;
                    self.current = r.id;
                    resolve(r);
                }, function (e) {
                    fire();
                });
            }());
        });
    };
    MyApp.prototype.showLoading = function (message) {
        if (message === void 0) { message = ''; }
        this.loading = this.loadingCtrl.create({
            content: message || 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/app/app.html"*/'<ion-menu class="side-menu" [content]="mycontent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Devices</ion-title>\n      <ion-buttons end>\n        <button class="settings" ion-button color="black" menuClose icon-only (click)="goToDevices()">\n          <ion-icon name="ios-settings"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button [ngClass]="current == item.id ? \'active\' : \'\'" *ngFor="let item of settings.devices" ion-item (click)="setDevice(item.id)">\n        {{item.params.name}}\n        <ion-icon class="favorite" *ngIf="item.params.default" name="md-star" color="primary"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_state_service_state_service__["a" /* StateServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    function MenuPage(app, menu) {
        //menu.enable(true);
    }
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(79);
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

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(414);

function httpFactory(xhrBackend, requestOptions, pubsub) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, pubsub);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pubsub_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(38);
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
        _this.connection = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
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
        if (__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* default */].currentDevice.id) {
            sessionID = (__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* default */].currentDevice.data || {}).session;
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
                _this.connectionHasChanged('api:unauthorized');
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
            __WEBPACK_IMPORTED_MODULE_3__pubsub_service__["a" /* PubSubService */]])
    ], InterceptedHttp);
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGrowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_grow_list_grow__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__intro_intro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddGrowPage = /** @class */ (function () {
    function AddGrowPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl, auth, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.storage = storage;
        this.events = events;
        this.data = {
            name: null,
            host: null,
            port: 9090,
            username: null,
            password: null,
            default: false
        };
        this.form = this.formBuilder.group({
            name: [this.data.name, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(13),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)
                ]],
            host: [this.data.host, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]],
            port: [this.data.port, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]],
            username: [this.data.username, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]],
            password: [this.data.password, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ]],
            default: [this.data.default]
        });
        this.id = navParams.get('id');
    }
    AddGrowPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.id) {
            this.storage.get('settings').then(function (r) {
                _this.data = (r.devices.filter(function (item) { return item.id == _this.id; })[0] || {}).params;
            });
        }
    };
    AddGrowPage.prototype.showError = function (error) {
        this.loading.dismiss();
        var message = error.statusText;
        if (error.status == 401) {
            message = 'Invalid username or password';
        }
        var response;
        try {
            response = JSON.parse(error._body);
        }
        catch (e) { }
        var alert = this.alertCtrl.create({
            title: error.status == 401 ? error.statusText : (error.title ? error.title : 'Fail'),
            subTitle: response ? response.message : message,
            buttons: ['OK']
        });
        alert.present();
    };
    AddGrowPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoading();
        var login = this.auth.authenticate({
            username: this.form.value.username,
            password: this.form.value.password
        }, {
            host: this.form.value.host,
            port: this.form.value.port
        });
        login.subscribe(function (r) {
            _this.storage.get('settings').then(function (settings) {
                if (_this.form.value.default) {
                    settings.devices = settings.devices.map(function (item) {
                        item.params.default = false;
                        return item;
                    });
                }
                // remove invalids
                settings.devices = settings.devices.filter(function (item) { return item.id; });
                // generate unique id
                var uniqid = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
                var data = {
                    id: uniqid,
                    params: _this.form.value,
                    data: r.data
                };
                // Edit current device
                if (_this.id) {
                    settings.devices = settings.devices.map(function (item) {
                        if (item.id == _this.id) {
                            data = Object.assign(data, {
                                id: _this.id
                            });
                            item = data;
                        }
                        return item;
                    });
                    // add the new device
                }
                else {
                    settings.devices.push(data);
                }
                // Set as current device
                __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* default */].currentDevice = data;
                // store settigns and go to tabs
                _this.storage.set('settings', settings).then(function (r) {
                    _this.events.publish('devices:update', data);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                }).catch(function (e) { return _this.showError({
                    statusText: e.message,
                    title: 'Login error'
                }); });
            });
        }, function (error) { return _this.showError(error); });
    };
    AddGrowPage.prototype.remove = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remove device',
            subTitle: 'Are you sure you want to remove this device?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Remove',
                    handler: function (data) {
                        _this.showLoading();
                        _this.storage.get('settings').then(function (settings) {
                            if (!settings) {
                                return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__list_grow_list_grow__["a" /* ListGrowPage */]);
                            }
                            settings.devices = settings.devices.filter(function (item) { return item.id != id; });
                            _this.storage.set('settings', settings).then(function (r) {
                                _this.events.publish('devices:update');
                                if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* default */].currentDevice.id == id) {
                                    // Mark another device as the current device, if the deleted one is the current one.
                                    __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* default */].currentDevice = settings.devices.length > 0 ? settings.devices[0] : null;
                                }
                                if (!__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* default */].currentDevice) {
                                    return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__intro_intro__["a" /* IntroPage */]);
                                }
                                _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_6__list_grow_list_grow__["a" /* ListGrowPage */]);
                            }).catch(function (e) {
                                console.log(e);
                                _this.showError({
                                    statusText: e.message,
                                    title: 'Fail'
                                });
                            });
                        });
                    }
                }]
        });
        alert.present();
    };
    AddGrowPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    AddGrowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-grow',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/add-grow/add-grow.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="id">Edit device</ion-title>\n    <ion-title *ngIf="!id">Add device</ion-title>\n    <ion-buttons *ngIf="id" end>\n      <button (click)="remove(id)" ion-button color="danger" icon-only>\n        <ion-icon name="md-trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="form" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-input formControlName="name" [(ngModel)]="data.name"\n          placeholder="Name" type="text" maxlength="13"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName="host" [(ngModel)]="data.host"\n          placeholder="Host" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName="port" [(ngModel)]="data.port"\n          placeholder="Port" type="number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName="username" [(ngModel)]="data.username"\n          placeholder="Username" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName="password" [(ngModel)]="data.password"\n          placeholder="Password" type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Set as default</ion-label>\n        <ion-toggle formControlName="default" [(ngModel)]="data.default"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <button [disabled]="!form.valid" ion-button type="submit" block>Save</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/add-grow/add-grow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AddGrowPage);
    return AddGrowPage;
}());

//# sourceMappingURL=add-grow.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseEventEmitter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(12);
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.ionViewDidLoad = function () {
    };
    TabsPage.prototype.ionViewWillEnter = function () {
    };
    TabsPage.prototype.onSelect = function (id) {
        console.log(id);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="ios-timer"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Teste" tabIcon="ios-settings-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Teste" tabIcon="ios-settings-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Teste" tabIcon="ios-settings-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListGrowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_grow_add_grow__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListGrowPage = /** @class */ (function () {
    function ListGrowPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.items = [];
        this.current = false;
        this.disableBackButton = false;
        if (navParams.get('disableBackButton') !== undefined) {
            this.disableBackButton = navParams.get('disableBackButton');
        }
    }
    ListGrowPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.current = !!__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* default */].currentDevice.id;
        this.storage.get('settings').then(function (r) {
            _this.items = r.devices;
        });
    };
    ListGrowPage.prototype.goToPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_grow_add_grow__["a" /* AddGrowPage */], { id: id });
    };
    ListGrowPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    ListGrowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-grow',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/list-grow/list-grow.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Devices</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToPage(addGrowPage)">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons *ngIf="current && !disableBackButton" start>\n      <button ion-button color="primary" menuClose icon-only (click)="goToHome()">\n        <ion-icon name="ios-arrow-back-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="goToPage(item.id)">\n      {{ item.params.name }}\n      <ion-icon class="favorite" *ngIf="item.params.default" name="md-star" color="primary"></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/list-grow/list-grow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ListGrowPage);
    return ListGrowPage;
}());

//# sourceMappingURL=list-grow.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_grow_add_grow__ = __webpack_require__(65);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Highgarden",
                description: "The <b>Highgarden</b> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu dictum metus.",
                image: "assets/imgs/plant.svg",
            },
            {
                title: "Plug & Plant!",
                description: "The <b>Highgarden</b> ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu dictum metus.",
                image: "assets/imgs/plant.svg",
            }
        ];
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.addGrowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_grow_add_grow__["a" /* AddGrowPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/intro/intro.html"*/'<ion-content class="tutorial-page">\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="addGrowPage()">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <h2 class="slide-title">Ready to Plant?</h2>\n      <button ion-button large icon-start color="primary" (click)="addGrowPage()">\n        <ion-icon name="ios-add-outline"></ion-icon>\n        Add device\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map