import { Injectable } from '@angular/core';
import { HttpProvider } from './httpProvider';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomHttp {
  // private _defaultHeaders = {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json'
  // };

  constructor(private httpProvider: HttpProvider) {}

  get(url, parameters = {}, options = {}) {
    return this.httpProvider.http.get(url, parameters, options)
  }

  post(url, body = {}, options = {}) {
    return this.httpProvider.http.post(url, body, options)
  }

  put(url, body = {}, options = {}) {
    return this.httpProvider.http.put(url, body, options)
  }

  patch(url, body = {}, options = {}) {
    return this.httpProvider.http.patch(url, body, options)
  }

  delete(url, parameters = {}, options = {}) {
    return this.httpProvider.http.get(url, parameters, options)
  }
}
