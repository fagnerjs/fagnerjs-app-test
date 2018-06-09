import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthServiceProvider {

  options: RequestOptions;
  apiHost: string;

  constructor(private http: Http) {
  }

  getDefaultHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  authenticate(data, connection){
    this.apiHost = `http://${connection.host}:${connection.port}`;
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return this.http.post(`${this.apiHost}/auth/login`, JSON.stringify(data), options)
      .map(res => res.json());
  }

  check(session, connection){
    this.apiHost = `http://${connection.host}:${connection.port}`;
    const headers = this.getDefaultHeaders();
    headers.append('session-id', session);
    const options = new RequestOptions({
      headers
    });
    return this.http.get(`${this.apiHost}/auth/check`, options).map(res => res.json());
  }
}
