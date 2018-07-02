import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HTTP} from '@ionic-native/http';
import { Diagnostic } from '@ionic-native/diagnostic';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { PhoneMask } from '../directives/phone';
import { UtilsProvider } from './utils';

// Pages
import { MenuPage } from '../pages/menu/menu';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { PasswordPage } from '../pages/password/password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
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

// Pipes
import { TruncatePipe } from '../pipes/truncate'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UsersServiceProvider } from '../providers/users-service/users-service';

import { HttpProvider } from '../providers/httpProvider';
import { HttpAngularProvider } from '../providers/http-angular';
import { HttpNativeProvider } from '../providers/http-native';
import { CustomHttp } from '../providers/customHttp';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    SigninPage,
    SignupPage,
    PasswordPage,
    ForgotPasswordPage,
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
    AcquiredServicesPage,
    PhoneMask,
    TruncatePipe
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
    ForgotPasswordPage,
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
    UsersServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilsProvider,
    PhoneMask,
    HTTP,
    HttpProvider,
    HttpAngularProvider,
    HttpNativeProvider,
    CustomHttp,
    CallNumber,
    SocialSharing,
    Geolocation,
    Diagnostic,
    OpenNativeSettings
  ]
})
export class AppModule {}
