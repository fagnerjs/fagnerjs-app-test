import {Injectable} from '@angular/core';
import {Http, RequestOptions, ResponseContentType, URLSearchParams, Headers, RequestOptionsArgs} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAngularProvider {
    constructor(public http: Http) {}

    public get(url, params?: any, options: any = {}) {
      const requestOptions = this.getRequestOptionArgs(options);
      requestOptions.params = params ? this.createSearchParams(params) : requestOptions.params;
      return this.http.get(url, requestOptions)
        .map(resp => options.responseType == 'text' ? resp.text() : resp.json()).toPromise();
    }

    public post(url, params: any, options: any = {}) {
        const requestOptions = this.getRequestOptionArgs(options);
        const body = this.createSearchParams(params);
        return this.http.post(url, body, requestOptions)
          .map(resp => options.responseType == 'text' ? resp.text() : resp.json()).toPromise();
    }

    public put(url, params: any, options: any = {}) {
      const requestOptions = this.getRequestOptionArgs(options);
      const body = this.createSearchParams(params);
      return this.http.put(url, body, requestOptions)
        .map(resp => options.responseType == 'text' ? resp.text() : resp.json()).toPromise();
    }

    public delete(url, params: any, options: any = {}) {
      const requestOptions = this.getRequestOptionArgs(options);
      const body = this.createSearchParams(params);
      return this.http.delete(url, requestOptions)
        .map(resp => options.responseType == 'text' ? resp.text() : resp.json()).toPromise();
    }

    private createSearchParams(params: any) {
      const searchParams = new URLSearchParams();
      for (let k in params) {
          if (params.hasOwnProperty(k)) {
              searchParams.set(k, params[k]);
          }
      }
      return searchParams;
    }

    private getRequestOptionArgs(opts) : RequestOptionsArgs {
      const requestOptions = new RequestOptions();
      requestOptions.withCredentials = true;

      if(requestOptions.headers == null) {
        requestOptions.headers = new Headers();
      }

      // authorization
      if(!requestOptions.headers.get('X-Auth-Session')) {
        requestOptions.headers.append('X-Auth-Session', 'teste');
      }

      for(const k in (opts.headers||{})) {
        const value = opts.headers[k];
        requestOptions.headers.append(k, value);
      }

      return requestOptions;
    }
}
