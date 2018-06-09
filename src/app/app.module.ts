import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UtilsProvider } from './utils';

// Pages
import { MenuPage } from '../pages/menu/menu';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { PasswordPage } from '../pages/password/password';
import { LoginPage } from '../pages/login/login';
import { SelectServicePage } from '../pages/select-service/select-service';
import { ServiceSettingsPage } from '../pages/service-settings/service-settings';
import { ServiceSchedulePage } from '../pages/service-schedule/service-schedule';
import { ServiceProviderPage } from '../pages/service-provider/service-provider';
import { ProviderProfilePage } from '../pages/provider-profile/provider-profile';
import { ProviderSchedulePage } from '../pages/provider-schedule/provider-schedule';
import { ProviderPlacePage } from '../pages/provider-place/provider-place';
import { ServiceSummaryPage } from '../pages/service-summary/service-summary';
import { ServiceHiredPage } from '../pages/service-hired/service-hired';
import { AfterHirePage } from '../pages/after-hire/after-hire';
import { ServiceHiredProfilePage } from '../pages/service-hired-profile/service-hired-profile';
import { ServiceProviderRatePage } from '../pages/service-provider-rate/service-provider-rate';
import { ServiceCancelPage } from '../pages/service-cancel/service-cancel';
import { AcquiredServicesPage } from '../pages/acquired-services/acquired-services';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SettingsServiceProvider } from '../providers/settings-service/settings-service';

// Http Interceptor
import { httpFactory } from "../providers/http/http.factory";
import { PubSubService } from '../providers/http/pubsub-service';
import { StateServiceProvider } from '../providers/state-service/state-service';
import { PlantServiceProvider } from '../providers/plant-service/plant-service';
import { ServicesServiceProvider } from '../providers/services-service/services-service';
import { GraphProvider } from '../providers/graph/graph';


@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    SigninPage,
    SignupPage,
    PasswordPage,
    LoginPage,
    SelectServicePage,
    ServiceSettingsPage,
    ServiceSchedulePage,
    ServiceProviderPage,
    ProviderProfilePage,
    ProviderSchedulePage,
    ProviderPlacePage,
    ServiceSummaryPage,
    ServiceHiredPage,
    AfterHirePage,
    ServiceHiredProfilePage,
    ServiceProviderRatePage,
    ServiceCancelPage,
    AcquiredServicesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MenuPage,
    SigninPage,
    SignupPage,
    PasswordPage,
    LoginPage,
    SelectServicePage,
    ServiceSettingsPage,
    ServiceSchedulePage,
    ServiceProviderPage,
    ProviderProfilePage,
    ProviderSchedulePage,
    ProviderPlacePage,
    ServiceSummaryPage,
    ServiceHiredPage,
    AfterHirePage,
    ServiceHiredProfilePage,
    ServiceProviderRatePage,
    ServiceCancelPage,
    AcquiredServicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsServiceProvider,
    PubSubService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, PubSubService]
    },
    StateServiceProvider,
    UtilsProvider,
    PlantServiceProvider,
    ServicesServiceProvider,
    GraphProvider
  ]
})
export class AppModule {}
