webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plant_periods_form_plant_periods_form__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_service_services_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlantSettingsPage = /** @class */ (function () {
    function PlantSettingsPage(navCtrl, navParams, viewCtrl, formBuilder, loadingCtrl, alertCtrl, modalCtrl, services) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.services = services;
        this.parameter = 'cycle';
        this.data = {
            name: null,
            cycle: null,
            period_label: { items: [] }
        };
        this.rangeTypes = {
            'air-temperature': {
                icon: 'ios-thermometer-outline',
                min: 0, max: 100
            },
            'air-humidity': {
                icon: 'ios-water-outline',
                min: 0, max: 100
            },
            'light': {
                icon: 'md-bulb',
                min: 0, max: 100
            },
            'lumens': {
                icon: 'md-bulb',
                min: 0, max: 30000
            },
            'uv': {
                icon: 'ios-flash-outline',
                min: 0, max: 10
            },
            'co2': {
                icon: 'ios-cloud-outline',
                min: 0, max: 20000
            }
        };
        this.formGeneral = this.formBuilder.group({
            name: [this.data.name, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(60),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2)
                ]],
            cycle: [this.data.cycle, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            period_label: this.formBuilder.array([])
        });
        this.formGeneral.get('cycle').valueChanges.subscribe(function (v) {
            if (v) {
                _this.formGeneral.get('cycle').setValue(+v, { emitEvent: false });
            }
        });
        for (var i = 1; i <= 8; i++) {
            this.rangeTypes['soil-moisture-' + i] = {
                icon: 'md-rainy',
                min: 0, max: 100
            };
            this.rangeTypes['soil-temperature-' + i] = {
                icon: 'ios-thermometer-outline',
                min: 0, max: 100
            };
            this.rangeTypes['soil-nutrients-' + i] = {
                icon: 'ios-nutrition-outline',
                min: 0, max: 20000
            };
            this.rangeTypes['soil-ph-' + i] = {
                icon: 'ios-water-outline',
                min: 0, max: 10
            };
        }
    }
    PlantSettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // get the plant data
        this.services.getService('plantService').getPlantData(1).subscribe(function (response) {
            _this.setGeralForm(response.data);
        });
    };
    PlantSettingsPage.prototype.initTrigger = function () {
        var form = this.formBuilder.group({
            target: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            description: [''],
            trigger_parameters: this.formBuilder.group({
                trigger: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                trigger_type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                comparison_type_value: ['>=', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                range_value: this.formBuilder.group({
                    min_value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                    max_value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
                }),
                week: this.formBuilder.group({
                    monday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    }),
                    tuesday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    }),
                    wednesday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    }),
                    thursday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    }),
                    friday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    }),
                    saturday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    }),
                    sunday: this.formBuilder.group({
                        time_interval: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                        schedules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
                    })
                })
            }),
            target_parameters: this.formBuilder.group({
                target_type: ['ml', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                time: [100, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                max_execution_time: [150000, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
            })
        });
        form.controls.trigger_parameters.get('comparison_type_value').setValue('>=');
        return form;
    };
    PlantSettingsPage.prototype.addTrigger = function () {
        var control = this.formGeneral.controls['triggers'];
        control.push(this.initTrigger());
    };
    PlantSettingsPage.prototype.resetIrrigationFields = function () {
        var control = this.formGeneral.controls['triggers'];
        for (var _i = 0, _a = control.controls; _i < _a.length; _i++) {
            var item = _a[_i];
            item.get('trigger_parameters.value').setValue('');
            item.get('trigger_parameters.range_value.min_value').setValue('');
            item.get('trigger_parameters.range_value.max_value').setValue('');
            item.get('target_parameters.time').setValue(100);
        }
    };
    PlantSettingsPage.prototype.setGeralForm = function (data) {
        var control = this.formGeneral.controls['period_label'];
        Object.assign(this.data, data);
        for (var _i = 0, _a = data.period_label.items; _i < _a.length; _i++) {
            var period = _a[_i];
            control.push(this.formBuilder.group({
                start: [period.start.toString(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                end: [period.end.toString(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                label: [period.label, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
            }));
        }
    };
    PlantSettingsPage.prototype.removePeriod = function (slidingItem, i) {
        var control = this.formGeneral.controls['period_label'];
        control.removeAt(i);
        slidingItem.close();
    };
    PlantSettingsPage.prototype.openPeriodsForm = function () {
        var _this = this;
        var control = this.formGeneral.controls['period_label'];
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__plant_periods_form_plant_periods_form__["a" /* PlantPeriodsFormPage */], {
            periods: control.value,
            cycle: this.formGeneral.get('cycle').value
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (!data)
                return;
            var periods = control.value;
            periods.push(data);
            periods = periods.sort(function (a, b) {
                a.end = typeof a.end === 'number' ? a.end : parseInt(a.end);
                b.end = typeof b.end === 'number' ? b.end : parseInt(b.end);
                return (a.end > b.end) ? 1 : ((b.end > a.end) ? -1 : 0);
            }).map(function (item) {
                item.start = item.start.toString();
                item.end = item.end.toString();
                return item;
            });
            while (control.length !== 0) {
                control.removeAt(0);
            }
            periods.forEach(function (period) {
                control.push(_this.formBuilder.group({
                    start: [period.start.toString() || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                    end: [period.end.toString() || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                    label: [period.label || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
                }));
            });
        });
    };
    PlantSettingsPage.prototype.checkCycle = function () {
        var _this = this;
        var cycle = this.formGeneral.get('cycle').value;
        var periods = this.formGeneral.get('period_label').value;
        var inRange = function (x, min, max) {
            return ((x - min) * (x - max) <= 0);
        };
        var outOfPeriod = false;
        var allowedPeriods = [];
        var i = 0;
        for (var _i = 0, periods_1 = periods; _i < periods_1.length; _i++) {
            var period = periods_1[_i];
            if (period.start > cycle || period.end > cycle) {
                outOfPeriod = true;
            }
            else {
                allowedPeriods.push(period);
            }
            i++;
        }
        if (outOfPeriod) {
            var alert_1 = this.alertCtrl.create({
                title: 'There are labels for periods outside the configured cycle. Do you want to remove them?',
                subTitle: '',
                buttons: [{
                        text: 'Remove',
                        handler: function () {
                            _this.formGeneral.controls['period_label'] = _this.formBuilder.array([]);
                            var control = _this.formGeneral.controls['period_label'];
                            for (var _i = 0, allowedPeriods_1 = allowedPeriods; _i < allowedPeriods_1.length; _i++) {
                                var item = allowedPeriods_1[_i];
                                control.push(_this.formBuilder.group({
                                    start: [item.start.toString(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                                    end: [item.end.toString(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                                    label: [item.label, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
                                }));
                            }
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () { return _this.formGeneral.get('cycle').setValue(''); }
                    }]
            });
            alert_1.present();
        }
    };
    PlantSettingsPage.prototype.submitGeneralForm = function () {
        var _this = this;
        this.showLoading('Please wait, saving the data...');
        var value = Object.assign({}, this.formGeneral.value);
        value.period_label = {
            items: value.period_label.map(function (item) {
                item.start = parseInt(item.start);
                item.end = parseInt(item.end);
                return item;
            })
        };
        this.services.getService('plantService').postPlantsData(value).then(function (response) {
            _this.loading.dismiss();
        }, function (error) { return _this.showError(error); });
    };
    PlantSettingsPage.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message || 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    PlantSettingsPage.prototype.showError = function (error) {
        this.loading.dismiss();
        var message = error.statusText;
        if (error.status == 401) {
            message = 'Invalid username or password';
        }
        var response = { message: 'The service is unavailable' };
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
    PlantSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plant-settings',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/plant-settings/plant-settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="parameter">\n      <ion-segment-button value="cycle">\n        General\n      </ion-segment-button>\n      <ion-segment-button value="climate">\n        Plant Climate\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div [ngSwitch]="parameter">\n    <ion-list *ngSwitchCase="\'cycle\'">\n      <form [formGroup]="formGeneral" (ngSubmit)="submitGeneralForm()">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item class="form-input">\n                <ion-input formControlName="name" [(ngModel)]="data.name"\n                placeholder="Plant name" type="text" maxlength="60"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item class="form-input">\n                <ion-input (change)="checkCycle()" formControlName="cycle" [(ngModel)]="data.cycle"\n                placeholder="Total life cycle" type="number"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-list class="full" formArrayName="period_label">\n                <ion-list-header>\n                  Period cycle label\n                  <button [disabled]="!formGeneral.controls.cycle.valid" class="fixed-button" type="button" small ion-button (click)="openPeriodsForm()">\n                    <span ion-text>+</span>\n                  </button>\n                </ion-list-header>\n                <ion-item-sliding *ngFor="let control of formGeneral.controls.period_label.controls; let i=index" #item>\n                  <ion-item>\n                    <h2>{{control.controls.label.value}}</h2>\n                    <p>From day <strong>{{control.controls.start.value}}</strong> to day <strong>{{control.controls.end.value}}</strong></p>\n                  </ion-item>\n                  <ion-item-options>\n                    <button ion-button color="danger" (click)="removePeriod(item, i)">Delete</button>\n                  </ion-item-options>\n                </ion-item-sliding>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button type="submit" block [disabled]="!formGeneral.valid">Update</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'climate\'">\n      climate\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/plant-settings/plant-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_service_services_service__["a" /* ServicesServiceProvider */]])
    ], PlantSettingsPage);
    return PlantSettingsPage;
}());

//# sourceMappingURL=plant-settings.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListGrowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_grow_add_grow__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(36);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_grow_add_grow__ = __webpack_require__(77);
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

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(67);
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_sensors__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_features__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_hardware__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_plant__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_service_services_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_graph_graph__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// models




// services


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, events, navParams, services, graph) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.services = services;
        this.graph = graph;
        this.items = [];
        this.features = new __WEBPACK_IMPORTED_MODULE_7__shared_models_features__["a" /* Features */]();
        this.sensors = new __WEBPACK_IMPORTED_MODULE_6__shared_models_sensors__["a" /* Sensors */]();
        this.hardware = new __WEBPACK_IMPORTED_MODULE_8__shared_models_hardware__["a" /* Hardware */]();
        this.plant = new __WEBPACK_IMPORTED_MODULE_9__shared_models_plant__["a" /* Plant */]();
        this.plants = [];
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
        this.graphRange = {
            start: null,
            end: null
        };
        this.graphSelectedRange = 1;
        this.graphSelectedSensor = 'air-temperature';
        this.graphIcons = {
            'air-temperature': 'ios-thermometer-outline',
            'air-humidity': 'ios-water-outline',
            'light': 'md-bulb',
            'uv': 'ios-flash-outline',
            'co2': 'ios-cloud-outline'
        };
        events.subscribe('state:feature', function (result) { return _this.features = result.data; });
        events.subscribe('state:hardware', function (result) { return _this.hardware = result.data; });
        events.subscribe('state:sensors', function (result) { return _this.sensors = result.data; });
        events.subscribe('plant:state', function (result) {
            _this.plants = result.data;
            _this.plant = result.data.filter(function (item) { return item.plant_id == 1; })[0];
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('settings').then(function (r) {
            // devices
            _this.items = r.devices;
            _this.device = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* default */].currentDevice;
            // plot graph
            _this.plotBySensor(_this.graphSelectedSensor);
            // plant data
            _this.services.getService('plantService')
                .getPlantData(1).subscribe(function (response) {
                _this.plant = response.data;
                // start services
                _this.services.start();
            });
        });
    };
    HomePage.prototype.plotBySensor = function (sensor) {
        clearInterval(this.graphPolling);
        this.graphSelectedSensor = sensor;
        var d = new Date();
        this.graphRange.start = d.setHours(d.getHours() - this.graphSelectedRange);
        this.graphRange.end = new Date();
        this.plot({
            id: sensor,
            sensor: sensor,
            area: this.airTemperatureCanvas.nativeElement,
            range: {
                start: this.graphRange.start,
                end: this.graphRange.end
            }
        });
    };
    HomePage.prototype.plot = function (settings, polling) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        if (polling === void 0) { polling = true; }
        if (this.graphs) {
            this.graphs.destroy();
            this.graphs = null;
        }
        var diff = __WEBPACK_IMPORTED_MODULE_5_moment__(settings.range.end).diff(__WEBPACK_IMPORTED_MODULE_5_moment__(settings.range.start), 'hours');
        var xAxesSettings = {
            timeScope: 'minute',
            stepSize: 10
        };
        var labelString = {
            'air-temperature': {
                label: '%d°'
            },
            'air-humidity': {
                label: '%d%'
            },
            'light': {
                label: '%d%'
            },
            'uv': {
                label: '%d'
            },
            'co2': {
                label: '%d',
                scaleLabel: 'ppm'
            }
        };
        if (diff > 1) {
            xAxesSettings.timeScope = 'hour';
            xAxesSettings.stepSize = 1;
        }
        if (diff > 6) {
            xAxesSettings.stepSize = Math.round(diff / 6);
        }
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
        var before = new Date();
        this.services.getService('stateService').getSensorsHistory({
            start: datePipe.transform(settings.range.start, 'yyyy-MM-dd H:mm:ss'),
            end: datePipe.transform(settings.range.end, 'yyyy-MM-dd H:mm:ss'),
            sensor: settings.sensor
        }).then(function (result) {
            var min = parseInt(result.data.map(function (v) { return v.value; }).reduce(function (a, b) {
                return Math.min(a, b);
            }));
            min = min > 100 ? min - 40 : min - 4;
            var max = parseInt(result.data.map(function (v) { return v.value; }).reduce(function (a, b) {
                return Math.max(a, b);
            }));
            max = max > 100 ? max + 40 : max + 4;
            _this.graphs = _this.graph.plotLine(settings.area, {
                title: settings.title,
                labels: result.data.map(function (v) { return v.created_at['$date']; }),
                data: result.data.map(function (v) { return v.value; }),
                xAxes: xAxesSettings,
                yAxes: {
                    min: min,
                    max: max,
                    beginAtZero: true,
                    labelString: (labelString[settings.sensor] || {}).label || '%d',
                    scaleLabel: (labelString[settings.sensor] || {}).scaleLabel
                }
            });
            if (!polling) {
                return;
            }
            _this.graphPolling = setInterval(function () {
                var labels = _this.graphs.data.labels;
                var values = _this.graphs.data.datasets[0].data;
                var last = labels[labels.length - 1];
                _this.services.getService('stateService').getSensorsHistory({
                    start: datePipe.transform(new Date(last), 'yyyy-MM-dd H:mm:ss'),
                    end: datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss'),
                    sensor: settings.sensor
                }).then(function (res) {
                    var filteredData = _this.graph.prepareData(xAxesSettings.timeScope, {
                        labels: res.data.map(function (item) { return item.created_at['$date']; }),
                        data: res.data.map(function (item) { return item.value; })
                    });
                    filteredData.data.forEach(function (el, index) {
                        if (!labels.includes(filteredData.labels[index])) {
                            labels.splice(0, 1);
                            values.splice(0, 1);
                            labels.push(filteredData.labels[index]);
                            values.push(el);
                        }
                    });
                    _this.graphs.update();
                }).catch(function (err) { });
            }, 5000);
        }).catch(function (err) { });
    };
    HomePage.prototype.graphSelectRange = function (interval) {
        this.graphSelectedRange = interval;
        this.plotBySensor(this.graphSelectedSensor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('airTemperatureCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "airTemperatureCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="container container-cover">\n    <ion-row>\n      <ion-col>\n        <h1 class="title">{{plant?.name || \'-\'}}</h1>\n        <!-- <h6 class="text-helper">{{hardware.time|date:\'MMM, dd\'}}</h6> -->\n        <!-- <p>Uptime:\n          {{hardware[\'operation-time\'].days}}d{{hardware[\'operation-time\'].hours < 10 ? \'0\' + hardware[\'operation-time\'].hours : hardware[\'operation-time\'].hours}}h{{hardware[\'operation-time\'].minutes < 10 ? \'0\' + hardware[\'operation-time\'].minutes : hardware[\'operation-time\'].minutes}}m\n        </p>\n        <p *ngIf="hardware[\'operation-time\'].days < 0"><ion-badge color="primary">Online</ion-badge> at {{hardware[\'operation-time\'].time}}</p>\n        <p *ngIf="hardware[\'operation-time\']?.days === undefined"><ion-badge color="danger">Offline</ion-badge></p>\n      -->\n        <div class="cover">\n          <!-- <img *ngIf="plant?.status == 1 && plant?.started_at_description" src="https://dicassobresaude.com/wp-content/uploads/2013/04/beneficios-da-cebolinha-para-a-saude-840x320.jpg"/> -->\n          <!-- <div *ngIf="plant?.status == 1 && plant?.started_at_description" class="circle">\n            <span *ngIf="plant?.status == 1 && plant?.started_at_description" class="p">\n              <span class="pp">Day</span>\n              {{plant?.started_at_description?.days}}\n            </span>\n          </div> -->\n        </div>\n        <span class="label-period">\n          <span *ngIf="plant?.status == 1 && plant?.started_at_description">\n            <ion-badge color="blue">Day: {{plant?.started_at_description?.days}}</ion-badge>\n            <ion-badge color="dark" *ngIf="plant?.period_label?.active">{{plant?.period_label?.active}}</ion-badge>\n          </span>\n          <ion-badge class="st" color="dark" *ngIf="plant?.status == 0 || !plant?.started_at_description">idle</ion-badge>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="container">\n    <ion-row>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'air-temperature\']?.helper" title="air temperature">\n          <ion-icon name="ios-thermometer-outline"></ion-icon>\n          <div class="l">\n            <span class="c">\n              <ion-icon color="primary" name="ios-thermometer-outline"></ion-icon> {{sensors[\'air-temperature\']?.value ? sensors[\'air-temperature\']?.value + \'°\' : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'air-temperature\']?.value ? sensors[\'air-temperature\']?.min + \'°\' : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'air-temperature\']?.value ? sensors[\'air-temperature\']?.max + \'°\' : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'air-temperature\']?.helper" title="air humidity">\n          <ion-icon name="ios-water-outline"></ion-icon>\n          <div class="l">\n            <span class="c">\n              <ion-icon color="blue" name="ios-water-outline"></ion-icon> {{sensors[\'air-humidity\']?.value ? sensors[\'air-humidity\']?.value + \'%\' : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'air-humidity\']?.value ? sensors[\'air-humidity\']?.min + \'%\' : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'air-humidity\']?.value ? sensors[\'air-humidity\']?.max + \'%\' : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'light\']?.helper" title="light">\n          <ion-icon name="md-bulb"></ion-icon>\n          <div class="l">\n              <span class="c">\n                <ion-icon color="warn" name="md-bulb"></ion-icon> {{sensors[\'light\']?.value ? sensors[\'light\']?.value + \'%\' : \'-\'}}\n              </span>\n            <span class="d">{{sensors[\'lux\']?.value ? sensors[\'lux\']?.value + \' lux\' : \'-\'}}</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'uv\']?.helper" title="UV">\n          <ion-icon name="ios-flash-outline"></ion-icon>\n          <div class="l">\n            <span class="c"><ion-icon color="uv" name="ios-flash-outline"></ion-icon> {{sensors[\'uv\']?.value || \'-\'}}</span>\n            <span class="d">{{sensors[\'uv-state\']?.value || \'-\'}}</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'co2\']?.helper" title="CO₂ (ppm)">\n          <ion-icon name="ios-cloud-outline"><span>CO₂</span></ion-icon>\n          <div class="l">\n            <span class="c"><ion-icon color="dark" name="ios-cloud-outline"><span>CO₂</span></ion-icon> {{sensors[\'co2\']?.value || \'- \'}}</span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'co2\']?.value ? sensors[\'co2\']?.min : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'co2\']?.value ? sensors[\'co2\']?.max : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'water-nutrients\']?.helper" title="nutrients (ppm)">\n          <ion-icon name="ios-nutrition-outline"></ion-icon>\n          <div class="l">\n            <span class="c"><ion-icon color="orange" name="ios-nutrition-outline"></ion-icon>\n              {{sensors[\'water-nutrients\']?.value ? sensors[\'water-nutrients\']?.value : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'water-nutrients\']?.value ? sensors[\'water-nutrients\']?.min : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'water-nutrients\']?.value ? sensors[\'water-nutrients\']?.max : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'water-temperature\']?.helper" title="water temperature">\n          <ion-icon name="ios-thermometer-outline"></ion-icon>\n          <div class="l">\n            <span class="c">\n              <ion-icon color="blue" name="ios-thermometer-outline"></ion-icon> {{sensors[\'water-temperature\']?.value ? sensors[\'water-temperature\']?.value + \'°\' : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'water-temperature\']?.value ? sensors[\'water-temperature\']?.min + \'°\' : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'water-temperature\']?.value ? sensors[\'water-temperature\']?.max + \'°\' : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'air-temperature\']?.helper" title="pH level">\n          <ion-icon name="ios-water-outline"><span>pH</span></ion-icon>\n          <div class="l">\n            <span class="c"><ion-icon color="blue" name="ios-water-outline"><span>pH</span></ion-icon>\n              {{sensors[\'water-ph\']?.value ? sensors[\'water-ph\']?.value : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'water-ph\']?.value ? sensors[\'water-ph\']?.min : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'water-ph\']?.value ? sensors[\'water-ph\']?.max : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [class]="\'widget-info with-title \' + sensors[\'air-temperature\']?.helper" title="water level">\n          <ion-icon name="ios-beaker-outline"></ion-icon>\n          <div class="l">\n            <span class="c"><ion-icon color="blue" name="md-beaker"></ion-icon> {{sensors[\'water-level\']?.value ? sensors[\'water-level\']?.value + \'%\' : \'-\'}}</span>\n            <span class="d">rooted</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col col-3>\n        <div class="widget-info with-title" title="Fan">\n          <div class="l">\n            <span class="d">\n              <ion-icon class="dlg" [color]="features.fan?.on ? \'primary\' : \'\'" [ngClass]="{\'on\':features.fan?.on}" [name]="features.fan?.on ? \'md-radio-button-on\' : \'md-radio-button-off\'"></ion-icon>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-3>\n        <div class="widget-info with-title" title="Light">\n          <div class="l">\n            <span class="d"><ion-icon class="dlg" [color]="features.light?.on ? \'primary\' : \'\'" [ngClass]="{\'on\':features.light?.on}" [name]="features.light?.on ? \'md-radio-button-on\' : \'md-radio-button-off\'"></ion-icon></span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-3>\n        <div class="widget-info with-title" title="CO₂ pump">\n          <div class="l">\n            <span class="d"><ion-icon class="dlg" [color]="features[\'co2-pump\']?.on ? \'primary\' : \'\'" [ngClass]="{\'on\':features[\'co2-pump\']?.on}" [name]="features[\'co2-pump\']?.on ? \'md-radio-button-on\' : \'md-radio-button-off\'"></ion-icon></span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-3>\n        <div class="widget-info with-title" title="Air humidity pump">\n          <div class="l">\n            <span class="d"><ion-icon class="dlg" [color]="features[\'air-humidity-pump\']?.on ? \'primary\' : \'\'" [ngClass]="{\'on\':features[\'air-humidity-pump\']?.on}" [name]="features[\'air-humidity-pump\']?.on ? \'md-radio-button-on\' : \'md-radio-button-off\'"></ion-icon></span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row> -->\n  </div>\n  <div class="container">\n    <ion-row>\n      <ion-col col-12>\n        <div class="widget-info with-title with-graph" title="">\n          <ion-icon [name]="graphIcons[graphSelectedSensor]"><span *ngIf="graphSelectedSensor == \'co2\'">CO₂</span></ion-icon>\n          <ion-select [(ngModel)]="graphSelectedSensor" interface="action-sheet">\n            <ion-option (ionSelect)="plotBySensor($event)" selected value="air-temperature">Temperature</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="air-humidity">Humidity</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="light">Light</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="uv">UV</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="co2">CO₂</ion-option>\n          </ion-select>\n          <div class="range-select">\n            <ion-row>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(1)" [color]="graphSelectedRange == 1 ? \'primary\' : \'light\'">1 hour</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(12)" [color]="graphSelectedRange == 12 ? \'primary\' : \'light\'">12 hours</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(24)" [color]="graphSelectedRange == 24 ? \'primary\' : \'light\'">24 hours</button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(168)" [color]="graphSelectedRange == 168 ? \'primary\' : \'light\'">7 days</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(720)" [color]="graphSelectedRange == 720 ? \'primary\' : \'light\'">30 days</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(1440)" [color]="graphSelectedRange == 1440 ? \'primary\' : \'light\'">60 days</button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class="l" loadingMessage="Loading data...">\n            <canvas #airTemperatureCanvas></canvas>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_graph_graph__["a" /* GraphProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 137:
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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(46);
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantPeriodsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantPeriodsFormPage = /** @class */ (function () {
    function PlantPeriodsFormPage(navCtrl, navParams, formBuilder, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            start: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            end: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            label: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2)
                ]]
        });
    }
    PlantPeriodsFormPage.prototype.ionViewDidLoad = function () {
        this.periods = this.navParams.get('periods') || [];
        this.cycle = this.navParams.get('cycle');
    };
    PlantPeriodsFormPage.prototype.dismiss = function (value) {
        this.viewCtrl.dismiss(value);
    };
    PlantPeriodsFormPage.prototype.checkRange = function () {
        var _this = this;
        var value = this.form.value;
        value.start = parseInt(value.start);
        value.end = parseInt(value.end);
        if ((value.end !== undefined && value.end != '') && (value.start !== undefined && value.start != '')) {
            if (value.end < value.start) {
                var alert_1 = this.alertCtrl.create({
                    title: 'The start field can not be greater than the end field.',
                    subTitle: '',
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel',
                            handler: function () {
                                _this.form.controls.end.setValue('');
                            }
                        }]
                });
                alert_1.present();
                return;
            }
            if (value.start > this.cycle || value.end > this.cycle) {
                var alert_2 = this.alertCtrl.create({
                    title: 'The period is longer than the total cycle',
                    subTitle: "The configured cycle is " + this.cycle + " " + (this.cycle == 1 ? 'day' : 'days'),
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel',
                            handler: function () {
                                _this.form.controls.start.setValue('');
                                _this.form.controls.end.setValue('');
                            }
                        }]
                });
                alert_2.present();
            }
        }
    };
    PlantPeriodsFormPage.prototype.onSubmit = function () {
        var value = this.form.value;
        var inRange = function (x, min, max) {
            return ((x - min) * (x - max) <= 0);
        };
        // check for conflicts of periods
        var containsConflicts = false;
        for (var _i = 0, _a = this.periods; _i < _a.length; _i++) {
            var period = _a[_i];
            for (var i = period.start; i <= period.end; i++) {
                if (inRange(i, value.start, value.end)) {
                    containsConflicts = true;
                }
            }
        }
        if (containsConflicts) {
            var alert_3 = this.alertCtrl.create({
                title: 'There are conflicts between the registered periods and what you want to register.',
                subTitle: '',
                buttons: ['OK']
            });
            alert_3.present();
            return;
        }
        this.dismiss(this.form.value);
    };
    PlantPeriodsFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plant-periods-form',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/plant-periods-form/plant-periods-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Period</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="form" (ngSubmit)="onSubmit()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item class="form-input" [ngClass]="{\'danger\':!form.controls.start.valid}">\n            <ion-input (change)="checkRange()" placeholder="start" formControlName="start" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item class="form-input">\n            <ion-input (change)="checkRange()" placeholder="end" formControlName="end" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class="form-input">\n            <ion-input formControlName="label"\n            placeholder="Label" type="text" maxlength="30"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button type="submit" block [disabled]="!form.valid">Add</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/plant-periods-form/plant-periods-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlantPeriodsFormPage);
    return PlantPeriodsFormPage;
}());

//# sourceMappingURL=plant-periods-form.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_service_services_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_sensors__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_features__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_hardware__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_plant__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_graph_graph__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__plant_settings_plant_settings__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// models






var DetailPage = /** @class */ (function () {
    function DetailPage(modalCtrl, navCtrl, navParams, events, loadingCtrl, alertCtrl, services, graph) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.services = services;
        this.graph = graph;
        this.graphRange = {
            start: null,
            end: null
        };
        this.graphSelectedRange = 1;
        this.graphSelectedSensor = '';
        this.graphSelectedIcon = '';
        this.graphIcons = {
            'soil-temperature': 'ios-thermometer-outline',
            'soil-moisture': 'md-rainy',
            'soil-ph': 'ios-water-outline',
            'soil-nutrients': 'ios-nutrition-outline'
        };
        this.features = new __WEBPACK_IMPORTED_MODULE_6__shared_models_features__["a" /* Features */]();
        this.sensors = new __WEBPACK_IMPORTED_MODULE_5__shared_models_sensors__["a" /* Sensors */]();
        this.hardware = new __WEBPACK_IMPORTED_MODULE_7__shared_models_hardware__["a" /* Hardware */]();
        this.plant = new __WEBPACK_IMPORTED_MODULE_8__shared_models_plant__["a" /* Plant */]();
        events.subscribe('state:feature', function (result) { return _this.features = result.data; });
        events.subscribe('state:hardware', function (result) { return _this.hardware = result.data; });
        events.subscribe('state:sensors', function (result) { return _this.sensors = result.data; });
        events.subscribe('plant:state', function (result) { return _this.plant = result.data.filter(function (item) { return item.plant_id == navParams.get('id'); })[0]; });
        this.showLoading();
        Promise.all([
            new Promise(function (resolve, reject) {
                _this.services.getService('plantService')
                    .getPlantData(navParams.get('id')).subscribe(resolve, reject);
            }),
            this.services.getService('stateService').getSensorsData()
        ]).then(function (result) {
            _this.plant = (result[0] || {}).data;
            _this.sensors = result[1];
            // start initial graph
            _this.graphSelectedSensor = 'soil-moisture-' + _this.plant.plant_id;
            _this.graphSelectedIcon = 'soil-moisture';
            _this.plotBySensor(_this.graphSelectedSensor);
        }).catch(function (error) { return _this.showError(error); });
    }
    DetailPage.prototype.presentSettingsModal = function (plant) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__plant_settings_plant_settings__["a" /* PlantSettingsPage */], { id: plant });
        modal.present();
    };
    DetailPage.prototype.plotBySensor = function (sensor) {
        clearInterval(this.graphPolling);
        this.graphSelectedSensor = sensor;
        this.graphSelectedIcon = this.graphSelectedSensor.replace(/\-[0-9]+$/, '');
        var d = new Date();
        this.graphRange.start = d.setHours(d.getHours() - this.graphSelectedRange);
        this.graphRange.end = new Date();
        this.plot({
            id: sensor,
            sensor: sensor,
            area: this.airTemperatureCanvas.nativeElement,
            range: {
                start: this.graphRange.start,
                end: this.graphRange.end
            }
        });
    };
    DetailPage.prototype.plot = function (settings, polling) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        if (polling === void 0) { polling = true; }
        if (this.graphs) {
            this.graphs.destroy();
            this.graphs = null;
        }
        var diff = __WEBPACK_IMPORTED_MODULE_4_moment__(settings.range.end).diff(__WEBPACK_IMPORTED_MODULE_4_moment__(settings.range.start), 'hours');
        var xAxesSettings = {
            timeScope: 'minute',
            stepSize: 10
        };
        var labelString = {
            'soil-temperature': {
                label: '%d°'
            },
            'soil-moisture': {
                label: '%d%'
            },
            'soil-ph': {
                label: '%d'
            },
            'soil-nutrients': {
                label: '%d',
                scaleLabel: 'ppm'
            }
        };
        if (diff > 1) {
            xAxesSettings.timeScope = 'hour';
            xAxesSettings.stepSize = 1;
        }
        if (diff > 6) {
            xAxesSettings.stepSize = Math.round(diff / 6);
        }
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
        var before = new Date();
        this.services.getService('stateService').getSensorsHistory({
            start: datePipe.transform(settings.range.start, 'yyyy-MM-dd H:mm:ss'),
            end: datePipe.transform(settings.range.end, 'yyyy-MM-dd H:mm:ss'),
            sensor: settings.sensor
        }).then(function (result) {
            var min = parseInt(result.data.map(function (v) { return v.value; }).reduce(function (a, b) {
                return Math.min(a, b);
            }));
            min = min > 100 ? min - 40 : min - 4;
            var max = parseInt(result.data.map(function (v) { return v.value; }).reduce(function (a, b) {
                return Math.max(a, b);
            }));
            max = max > 100 ? max + 40 : max + 4;
            _this.graphs = _this.graph.plotLine(settings.area, {
                title: settings.title,
                labels: result.data.map(function (v) { return v.created_at['$date']; }),
                data: result.data.map(function (v) { return v.value; }),
                xAxes: xAxesSettings,
                yAxes: {
                    min: min,
                    max: max,
                    beginAtZero: true,
                    labelString: (labelString[settings.sensor.replace(/\-[0-9]+$/, '')] || {}).label || '%d',
                    scaleLabel: (labelString[settings.sensor.replace(/\-[0-9]+$/, '')] || {}).scaleLabel
                }
            });
            if (!polling) {
                return;
            }
            _this.graphPolling = setInterval(function () {
                var labels = _this.graphs.data.labels;
                var values = _this.graphs.data.datasets[0].data;
                var last = labels[labels.length - 1];
                _this.services.getService('stateService').getSensorsHistory({
                    start: datePipe.transform(new Date(last), 'yyyy-MM-dd H:mm:ss'),
                    end: datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss'),
                    sensor: settings.sensor
                }).then(function (res) {
                    var filteredData = _this.graph.prepareData(xAxesSettings.timeScope, {
                        labels: res.data.map(function (item) { return item.created_at['$date']; }),
                        data: res.data.map(function (item) { return item.value; })
                    });
                    filteredData.data.forEach(function (el, index) {
                        if (!labels.includes(filteredData.labels[index])) {
                            labels.splice(0, 1);
                            values.splice(0, 1);
                            labels.push(filteredData.labels[index]);
                            values.push(el);
                        }
                    });
                    _this.graphs.update();
                }).catch(function (err) { });
            }, 5000);
        }).catch(function (err) { });
    };
    DetailPage.prototype.graphSelectRange = function (interval) {
        this.graphSelectedRange = interval;
        this.plotBySensor(this.graphSelectedSensor);
    };
    DetailPage.prototype.ionViewWillEnter = function () {
    };
    DetailPage.prototype.showLoading = function (message) {
        if (message === void 0) { message = ''; }
        this.loading = this.loadingCtrl.create({
            content: message || 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    DetailPage.prototype.showError = function (error) {
        this.loading.dismiss();
        var message = error.statusText;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('airTemperatureCanvas'),
        __metadata("design:type", Object)
    ], DetailPage.prototype, "airTemperatureCanvas", void 0);
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Plant {{plant?.plant_id}}</ion-title>\n    <ion-buttons end>\n      <button (click)="presentSettingsModal(plant?.plant_id)" ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="cover">\n    <img src="http://www.affaritaliani.it/static/upl2015/vegg/veggie-multi-vitamin10.jpg"/>\n    <h4 class="title">{{plant?.name || \'-\'}}</h4>\n    <p>\n      <span class="label-period">\n        <span *ngIf="plant?.status == 1 && plant?.started_at_description">\n          <ion-badge color="blue">Day: {{plant?.started_at_description?.days}}</ion-badge>\n          <ion-badge color="dark" *ngIf="plant?.period_label?.active">{{plant?.period_label?.active}}</ion-badge>\n        </span>\n        <ion-badge class="st" color="dark" *ngIf="plant?.status == 0 || !plant?.started_at_description">idle</ion-badge>\n      </span>\n    </p>\n    <!-- <div class="side-info">\n      <span>water pump <ion-icon [ngClass]="{\'on\':features[\'air-humidity-pump\']?.on}" [name]="features[\'air-humidity-pump\']?.on ? \'md-radio-button-on\' : \'md-radio-button-off\'"></ion-icon></span>\n    </div> -->\n  </div>\n  <div class="container to-up">\n    <ion-row>\n      <ion-col col-6>\n        <div [class]="\'widget-info with-title \' + sensors[\'soil-moisture-\' + plant?.plant_id]?.helper" title="moisture">\n          <ion-icon name="md-rainy"></ion-icon>\n          <div class="l">\n            <span class="c">\n              {{sensors[\'soil-moisture-\' + plant?.plant_id]?.value ? sensors[\'soil-moisture-\' + plant?.plant_id]?.value + \'%\' : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'soil-moisture-\' + plant?.plant_id]?.value ? sensors[\'soil-moisture-\' + plant?.plant_id]?.min + \'%\' : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'soil-moisture-\' + plant?.plant_id]?.value ? sensors[\'soil-moisture-\' + plant?.plant_id]?.max + \'%\' : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div [class]="\'widget-info with-title \' + sensors[\'soil-temperature-\' + plant?.plant_id]?.helper" title="temperature">\n          <ion-icon name="ios-thermometer-outline"></ion-icon>\n          <div class="l">\n            <span class="c">\n              {{sensors[\'soil-temperature-\' + plant?.plant_id]?.value ? sensors[\'soil-temperature-\' + plant?.plant_id]?.value + \'°\' : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'soil-temperature-\' + plant?.plant_id]?.value ? sensors[\'soil-temperature-\' + plant?.plant_id]?.min + \'°\' : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'soil-temperature-\' + plant?.plant_id]?.value ? sensors[\'soil-temperature-\' + plant?.plant_id]?.max + \'°\' : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div [class]="\'widget-info with-title \' + sensors[\'soil-ph-\' + plant?.plant_id]?.helper" title="ph">\n          <ion-icon name="ios-water-outline"><span>pH</span></ion-icon>\n          <div class="l">\n            <span class="c">\n              {{sensors[\'soil-ph-\' + plant?.plant_id]?.value ? sensors[\'soil-ph-\' + plant?.plant_id]?.value : \'-\'}}\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'soil-ph-\' + plant?.plant_id]?.value ? sensors[\'soil-ph-\' + plant?.plant_id]?.min : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'soil-ph-\' + plant?.plant_id]?.value ? sensors[\'soil-ph-\' + plant?.plant_id]?.max : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div [class]="\'widget-info with-title \' + sensors[\'soil-nutrients-\' + plant?.plant_id]?.helper" title="nutrients">\n          <ion-icon name="ios-nutrition-outline"></ion-icon>\n          <div class="l">\n            <span class="c">\n              {{sensors[\'soil-nutrients-\' + plant?.plant_id]?.value ? sensors[\'soil-nutrients-\' + plant?.plant_id]?.value: \'-\'}}<span *ngIf="sensors[\'soil-nutrients-\' + plant?.plant_id]?.value">ppm</span>\n            </span>\n            <span class="d">\n              <span>\n                <ion-icon name="arrow-down"></ion-icon> {{sensors[\'soil-nutrients-\' + plant?.plant_id]?.value ? sensors[\'soil-nutrients-\' + plant?.plant_id]?.min : \'\'}}\n              </span>\n              <span>\n                <ion-icon name="arrow-up"></ion-icon> {{sensors[\'soil-nutrients-\' + plant?.plant_id]?.value ? sensors[\'soil-nutrients-\' + plant?.plant_id]?.max : \'\'}}\n              </span>\n            </span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="container">\n    <ion-row>\n      <ion-col col-12>\n        <div class="widget-info with-title with-graph" title="">\n          <ion-icon [name]="graphIcons[graphSelectedIcon]"><span *ngIf="graphSelectedSensor.indexOf(\'soil-ph\') != -1">pH</span></ion-icon>\n          <ion-select [(ngModel)]="graphSelectedSensor" interface="action-sheet">\n            <ion-option (ionSelect)="plotBySensor($event)" selected value="soil-moisture-{{plant?.plant_id}}">Soil Moisture</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="soil-nutrients-{{plant?.plant_id}}">Soil Nutrients</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="soil-ph-{{plant?.plant_id}}">Soil pH</ion-option>\n            <ion-option (ionSelect)="plotBySensor($event)" value="soil-temperature-{{plant?.plant_id}}">Soil Temperature</ion-option>\n          </ion-select>\n          <div class="range-select">\n            <ion-row>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(1)" [color]="graphSelectedRange == 1 ? \'primary\' : \'light\'">1 hour</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(12)" [color]="graphSelectedRange == 12 ? \'primary\' : \'light\'">12 hours</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(24)" [color]="graphSelectedRange == 24 ? \'primary\' : \'light\'">24 hours</button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(168)" [color]="graphSelectedRange == 168 ? \'primary\' : \'light\'">7 days</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(720)" [color]="graphSelectedRange == 720 ? \'primary\' : \'light\'">30 days</button>\n              </ion-col>\n              <ion-col col-4>\n                <button block ion-button small (click)="graphSelectRange(1440)" [color]="graphSelectedRange == 1440 ? \'primary\' : \'light\'">60 days</button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class="l" loadingMessage="Loading data...">\n            <canvas #airTemperatureCanvas></canvas>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_graph_graph__["a" /* GraphProvider */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-grow/add-grow.module": [
		888,
		7
	],
	"../pages/detail/detail.module": [
		889,
		6
	],
	"../pages/intro/intro.module": [
		890,
		5
	],
	"../pages/list-grow/list-grow.module": [
		891,
		4
	],
	"../pages/plant-periods-form/plant-periods-form.module": [
		892,
		3
	],
	"../pages/plant-settings/plant-settings.module": [
		893,
		2
	],
	"../pages/plants/plants.module": [
		894,
		1
	],
	"../pages/splash/splash.module": [
		895,
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
webpackAsyncContext.id = 232;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export State */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plant; });
var object = {
    value: null,
    helper: '',
    min: null,
    max: null,
    label: null
};
var State = /** @class */ (function () {
    function State() {
    }
    Object.defineProperty(State.prototype, 'soil-moisture', {
        get: function () {
            return Object.assign({}, object);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, 'soil-nutrients', {
        get: function () {
            return Object.assign({}, object);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, 'soil-ph', {
        get: function () {
            return Object.assign({}, object);
        },
        enumerable: true,
        configurable: true
    });
    return State;
}());

var StaredAt = /** @class */ (function () {
    function StaredAt() {
    }
    return StaredAt;
}());
var PeriodLabel = /** @class */ (function () {
    function PeriodLabel() {
    }
    return PeriodLabel;
}());
var Plant = /** @class */ (function () {
    function Plant() {
    }
    return Plant;
}());

//# sourceMappingURL=plant.js.map

/***/ }),

/***/ 36:
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_sensors__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_features__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_hardware__ = __webpack_require__(91);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__app_utils__["a" /* UtilsProvider */]])
    ], StateServiceProvider);
    return StateServiceProvider;
}());

//# sourceMappingURL=state-service.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_sensors__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_features__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_hardware__ = __webpack_require__(91);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__app_utils__["a" /* UtilsProvider */]])
    ], PlantServiceProvider);
    return PlantServiceProvider;
}());

//# sourceMappingURL=plant-service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter__ = __webpack_require__(887);
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_service_services_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// services

var PlantsPage = /** @class */ (function () {
    function PlantsPage(navCtrl, navParams, events, services, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.plant = [];
        events.subscribe('plant:state', function (result) { return _this.plant = result.data; });
    }
    PlantsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.plant.length > 0) {
            return;
        }
        this.showLoading();
        this.services.getService('plantService').getPlantsData()
            .then(function (plants) {
            _this.loading.dismiss();
            _this.plant = plants;
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error fetching data',
                subTitle: 'Device data could not be retrieved. Please try again.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    PlantsPage.prototype.goToDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], { id: id });
    };
    PlantsPage.prototype.showLoading = function (message) {
        if (message === void 0) { message = ''; }
        this.loading = this.loadingCtrl.create({
            content: message || 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    PlantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plants',template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/plants/plants.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Plants</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list no-border>\n    <ion-item *ngFor="let item of plant" (click)="goToDetail(item.plant_id)">\n      <ion-icon [color]="item.status == 0 ? \'dark\' : \'primary\'" [name]="item.status == 0 ? \'md-radio-button-off\' : \'md-radio-button-on\'" item-start></ion-icon>\n      <h2>{{item.name}}</h2>\n      <p>Plant {{item.plant_id}}</p>\n      <ion-icon color="primary" name=\'ios-arrow-forward\' item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/plants/plants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PlantsPage);
    return PlantsPage;
}());

//# sourceMappingURL=plants.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(139);
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

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(509);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_plants_plants__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_plant_settings_plant_settings__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_plant_periods_form_plant_periods_form__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_splash_splash__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_detail_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_grow_add_grow__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_list_grow_list_grow__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_intro_intro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_settings_service_settings_service__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_http_http_factory__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_http_pubsub_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_state_service_state_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_plant_service_plant_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_services_service_services_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_graph_graph__ = __webpack_require__(138);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plants_plants__["a" /* PlantsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_plant_settings_plant_settings__["a" /* PlantSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_plant_periods_form_plant_periods_form__["a" /* PlantPeriodsFormPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_grow_add_grow__["a" /* AddGrowPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_grow_list_grow__["a" /* ListGrowPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-grow/add-grow.module#AddGrowPageModule', name: 'AddGrowPage', segment: 'add-grow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-grow/list-grow.module#ListGrowPageModule', name: 'ListGrowPage', segment: 'list-grow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plant-periods-form/plant-periods-form.module#PlantPeriodsFormPageModule', name: 'PlantPeriodsFormPage', segment: 'plant-periods-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plant-settings/plant-settings.module#PlantSettingsPageModule', name: 'PlantSettingsPage', segment: 'plant-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plants/plants.module#PlantsPageModule', name: 'PlantsPage', segment: 'plants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_plants_plants__["a" /* PlantsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_plant_settings_plant_settings__["a" /* PlantSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_plant_periods_form_plant_periods_form__["a" /* PlantPeriodsFormPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_grow_add_grow__["a" /* AddGrowPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_grow_list_grow__["a" /* ListGrowPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_settings_service_settings_service__["a" /* SettingsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_http_pubsub_service__["a" /* PubSubService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_24__providers_http_http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_25__providers_http_pubsub_service__["a" /* PubSubService */]]
                },
                __WEBPACK_IMPORTED_MODULE_26__providers_state_service_state_service__["a" /* StateServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_plant_service_plant_service__["a" /* PlantServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_graph_graph__["a" /* GraphProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_service_state_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plant_service_plant_service__ = __webpack_require__(361);
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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 236,
	"./af.js": 236,
	"./ar": 237,
	"./ar-dz": 238,
	"./ar-dz.js": 238,
	"./ar-kw": 239,
	"./ar-kw.js": 239,
	"./ar-ly": 240,
	"./ar-ly.js": 240,
	"./ar-ma": 241,
	"./ar-ma.js": 241,
	"./ar-sa": 242,
	"./ar-sa.js": 242,
	"./ar-tn": 243,
	"./ar-tn.js": 243,
	"./ar.js": 237,
	"./az": 244,
	"./az.js": 244,
	"./be": 245,
	"./be.js": 245,
	"./bg": 246,
	"./bg.js": 246,
	"./bm": 247,
	"./bm.js": 247,
	"./bn": 248,
	"./bn.js": 248,
	"./bo": 249,
	"./bo.js": 249,
	"./br": 250,
	"./br.js": 250,
	"./bs": 251,
	"./bs.js": 251,
	"./ca": 252,
	"./ca.js": 252,
	"./cs": 253,
	"./cs.js": 253,
	"./cv": 254,
	"./cv.js": 254,
	"./cy": 255,
	"./cy.js": 255,
	"./da": 256,
	"./da.js": 256,
	"./de": 257,
	"./de-at": 258,
	"./de-at.js": 258,
	"./de-ch": 259,
	"./de-ch.js": 259,
	"./de.js": 257,
	"./dv": 260,
	"./dv.js": 260,
	"./el": 261,
	"./el.js": 261,
	"./en-au": 262,
	"./en-au.js": 262,
	"./en-ca": 263,
	"./en-ca.js": 263,
	"./en-gb": 264,
	"./en-gb.js": 264,
	"./en-ie": 265,
	"./en-ie.js": 265,
	"./en-il": 266,
	"./en-il.js": 266,
	"./en-nz": 267,
	"./en-nz.js": 267,
	"./eo": 268,
	"./eo.js": 268,
	"./es": 269,
	"./es-do": 270,
	"./es-do.js": 270,
	"./es-us": 271,
	"./es-us.js": 271,
	"./es.js": 269,
	"./et": 272,
	"./et.js": 272,
	"./eu": 273,
	"./eu.js": 273,
	"./fa": 274,
	"./fa.js": 274,
	"./fi": 275,
	"./fi.js": 275,
	"./fo": 276,
	"./fo.js": 276,
	"./fr": 277,
	"./fr-ca": 278,
	"./fr-ca.js": 278,
	"./fr-ch": 279,
	"./fr-ch.js": 279,
	"./fr.js": 277,
	"./fy": 280,
	"./fy.js": 280,
	"./gd": 281,
	"./gd.js": 281,
	"./gl": 282,
	"./gl.js": 282,
	"./gom-latn": 283,
	"./gom-latn.js": 283,
	"./gu": 284,
	"./gu.js": 284,
	"./he": 285,
	"./he.js": 285,
	"./hi": 286,
	"./hi.js": 286,
	"./hr": 287,
	"./hr.js": 287,
	"./hu": 288,
	"./hu.js": 288,
	"./hy-am": 289,
	"./hy-am.js": 289,
	"./id": 290,
	"./id.js": 290,
	"./is": 291,
	"./is.js": 291,
	"./it": 292,
	"./it.js": 292,
	"./ja": 293,
	"./ja.js": 293,
	"./jv": 294,
	"./jv.js": 294,
	"./ka": 295,
	"./ka.js": 295,
	"./kk": 296,
	"./kk.js": 296,
	"./km": 297,
	"./km.js": 297,
	"./kn": 298,
	"./kn.js": 298,
	"./ko": 299,
	"./ko.js": 299,
	"./ky": 300,
	"./ky.js": 300,
	"./lb": 301,
	"./lb.js": 301,
	"./lo": 302,
	"./lo.js": 302,
	"./lt": 303,
	"./lt.js": 303,
	"./lv": 304,
	"./lv.js": 304,
	"./me": 305,
	"./me.js": 305,
	"./mi": 306,
	"./mi.js": 306,
	"./mk": 307,
	"./mk.js": 307,
	"./ml": 308,
	"./ml.js": 308,
	"./mn": 309,
	"./mn.js": 309,
	"./mr": 310,
	"./mr.js": 310,
	"./ms": 311,
	"./ms-my": 312,
	"./ms-my.js": 312,
	"./ms.js": 311,
	"./mt": 313,
	"./mt.js": 313,
	"./my": 314,
	"./my.js": 314,
	"./nb": 315,
	"./nb.js": 315,
	"./ne": 316,
	"./ne.js": 316,
	"./nl": 317,
	"./nl-be": 318,
	"./nl-be.js": 318,
	"./nl.js": 317,
	"./nn": 319,
	"./nn.js": 319,
	"./pa-in": 320,
	"./pa-in.js": 320,
	"./pl": 321,
	"./pl.js": 321,
	"./pt": 322,
	"./pt-br": 323,
	"./pt-br.js": 323,
	"./pt.js": 322,
	"./ro": 324,
	"./ro.js": 324,
	"./ru": 325,
	"./ru.js": 325,
	"./sd": 326,
	"./sd.js": 326,
	"./se": 327,
	"./se.js": 327,
	"./si": 328,
	"./si.js": 328,
	"./sk": 329,
	"./sk.js": 329,
	"./sl": 330,
	"./sl.js": 330,
	"./sq": 331,
	"./sq.js": 331,
	"./sr": 332,
	"./sr-cyrl": 333,
	"./sr-cyrl.js": 333,
	"./sr.js": 332,
	"./ss": 334,
	"./ss.js": 334,
	"./sv": 335,
	"./sv.js": 335,
	"./sw": 336,
	"./sw.js": 336,
	"./ta": 337,
	"./ta.js": 337,
	"./te": 338,
	"./te.js": 338,
	"./tet": 339,
	"./tet.js": 339,
	"./tg": 340,
	"./tg.js": 340,
	"./th": 341,
	"./th.js": 341,
	"./tl-ph": 342,
	"./tl-ph.js": 342,
	"./tlh": 343,
	"./tlh.js": 343,
	"./tr": 344,
	"./tr.js": 344,
	"./tzl": 345,
	"./tzl.js": 345,
	"./tzm": 346,
	"./tzm-latn": 347,
	"./tzm-latn.js": 347,
	"./tzm.js": 346,
	"./ug-cn": 348,
	"./ug-cn.js": 348,
	"./uk": 349,
	"./uk.js": 349,
	"./ur": 350,
	"./ur.js": 350,
	"./uz": 351,
	"./uz-latn": 352,
	"./uz-latn.js": 352,
	"./uz.js": 351,
	"./vi": 353,
	"./vi.js": 353,
	"./x-pseudo": 354,
	"./x-pseudo.js": 354,
	"./yo": 355,
	"./yo.js": 355,
	"./zh-cn": 356,
	"./zh-cn.js": 356,
	"./zh-hk": 357,
	"./zh-hk.js": 357,
	"./zh-tw": 358,
	"./zh-tw.js": 358
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
webpackContext.id = 535;

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_grow_list_grow__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_service_services_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_grow_add_grow__ = __webpack_require__(77);
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
    function MyApp(platform, alertCtrl, statusBar, splashScreen, modalCtrl, storage, auth, services, loadingCtrl, events, menuCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.auth = auth;
        this.services = services;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.settings = {
            devices: []
        };
        this.menuItems = [];
        this.homePage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var perform = function () {
                _this.storage.get('settings').then(function (settings) {
                    if (!settings || ((settings || {}).devices || []).length == 0) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
                        return;
                    }
                    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    // Carregar a linguagem
                    __WEBPACK_IMPORTED_MODULE_4_moment__["locale"]('pt-BR');
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
                        _this.defineConnection(stack).then(function (r) { return _this.bootstrap(); }).catch(function (err) {
                            _this.loading.dismiss();
                            var alert = _this.alertCtrl.create({
                                title: 'Authorization failed',
                                subTitle: 'Unable to connect to default device. Please check the parameters (host, port, usernam and password)',
                                buttons: ['OK']
                            });
                            alert.present();
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_list_grow_list_grow__["a" /* ListGrowPage */];
                            setTimeout(function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_add_grow_add_grow__["a" /* AddGrowPage */], { id: containsDefault.id });
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
                    _this.defineConnection(stack).then(function (r) { return _this.bootstrap(); }).catch(function (err) {
                        _this.loading.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Authorization failed',
                            subTitle: 'Could not connect to any of the configured devices. Please check the parameters (host, port, usernam and password)',
                            buttons: ['OK']
                        });
                        alert.present();
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_list_grow_list_grow__["a" /* ListGrowPage */];
                    });
                }).catch(function (err) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */];
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
    MyApp.prototype.bootstrap = function () {
        this.loading.dismiss();
        // start all services
        this.services.start();
        // initial page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
    };
    MyApp.prototype.goToDevices = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_list_grow_list_grow__["a" /* ListGrowPage */]);
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
            __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].currentDevice = selectedDevice;
            _this.current = __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].currentDevice.id;
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Authorization failed',
                subTitle: "Unable to connect to device <b>" + selectedDevice.params.name + "</b>. Please check the parameters (host, port, usernam and password)",
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            if (__WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].currentDevice.id == id) {
                                _this.menuCtrl.close();
                                _this.nav.setPages([
                                    { page: __WEBPACK_IMPORTED_MODULE_7__pages_list_grow_list_grow__["a" /* ListGrowPage */], params: { disableBackButton: true } },
                                    { page: __WEBPACK_IMPORTED_MODULE_13__pages_add_grow_add_grow__["a" /* AddGrowPage */], params: { id: selectedDevice.id } }
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
                    __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* default */].currentDevice = r;
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
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(67);
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

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(609);

function httpFactory(xhrBackend, requestOptions, pubsub) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, pubsub);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pubsub_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(36);
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGrowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_grow_list_grow__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__intro_intro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(36);
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(13),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5)
                ]],
            host: [this.data.host, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            port: [this.data.port, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            username: [this.data.username, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            password: [this.data.password, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
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
        var response = { message: 'The service is unavailable' };
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plant_settings_plant_settings__ = __webpack_require__(105);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__plant_settings_plant_settings__["a" /* PlantSettingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Dashboard" tabIcon="ios-timer"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Settings" tabIcon="ios-leaf"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Users" tabIcon="ios-people-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/fjsilva/sketchbook/highgarden_arduino/cms/app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestEventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseEventEmitter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(15);
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

/***/ 89:
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

/***/ 90:
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

/***/ 91:
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

/***/ })

},[504]);
//# sourceMappingURL=main.js.map