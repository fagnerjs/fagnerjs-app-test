import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers, RequestOptionsArgs} from '@angular/http';

import configs from '../app/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HttpAngularProvider {
    constructor(public http: Http) {}

    public get(url, params?: any, options: any = {}) {
      const requestOptions = this.getRequestOptionArgs(options);
      requestOptions.params = params ? this.createSearchParams(params) : requestOptions.params;
      return this.http.get(url, requestOptions)
        .map(resp => this.parseResult(resp, options)).toPromise();
    }

    public post(url, params: any, options: any = {}) {
        const requestOptions = this.getRequestOptionArgs(options);
        const body = this.createSearchParams(params);
        return this.http.post(url, body, requestOptions)
          .map(resp => this.parseResult(resp, options)).toPromise();
    }

    public put(url, params: any, options: any = {}) {
      const requestOptions = this.getRequestOptionArgs(options);
      const body = this.createSearchParams(params);
      return this.http.put(url, body, requestOptions)
        .map(resp => this.parseResult(resp, options)).toPromise();
    }

    public delete(url, params: any, options: any = {}) {
      const requestOptions = this.getRequestOptionArgs(options);
      return this.http.delete(url, requestOptions)
        .map(resp => this.parseResult(resp, options)).toPromise();
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

    private parseResult(result, options) {
      return {
        body: options.responseType == 'text' ? result.text() : result.json(),
        headers: result.headers,
        status: result.status,
        code: result.code
      }
    }

    private getRequestOptionArgs(opts) : RequestOptionsArgs {
      const requestOptions = new RequestOptions();
      requestOptions.withCredentials = true;

      if(requestOptions.headers == null) {
        requestOptions.headers = new Headers();
      }

      // authorization
      if(!requestOptions.headers.get('X-Auth-Session')) {
        requestOptions.headers.append('X-Auth-Session', configs.settings.auth.session);
      }

      for(const k in (opts.headers||{})) {
        const value = opts.headers[k];
        requestOptions.headers.append(k, value);
      }

      return requestOptions;
    }
}
