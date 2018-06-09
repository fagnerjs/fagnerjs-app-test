import { Injectable } from '@angular/core';
// import { Events } from 'ionic-angular';
// import config from '../app/config';

@Injectable()
export class UtilsProvider {

  numberFormat(v, n?, x?) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return v.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
  }
}
