import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import configs from '../../app/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SettingsServiceProvider {

  options: RequestOptions;

  constructor(private http: Http) {}

  getDefaultHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('app', 'true');
    return headers;
  }

  authenticate(data){
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return this.http.post(`${configs.API_HOST}/auth/login`, JSON.stringify(data), options)
      //.debounceTime(300)
      .map(res => res.json());
  }

  check(session){
    const headers = this.getDefaultHeaders();
    headers.append('session-id', session);
    const options = new RequestOptions({
      headers
    });
    return this.http.get(`${configs.API_HOST}/auth/check`, options).map(res => res.json());
  }
}
