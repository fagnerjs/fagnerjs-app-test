import { Injectable } from '@angular/core';
import { CustomHttp } from '../customHttp';

import configs from '../../app/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthServiceProvider {
  private apiHost: string = configs.API_HOST;
  private headers =  {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  constructor(private http: CustomHttp) {
  }

  authenticate(email:string, password:string) {
    return this.http.post(`${this.apiHost}/authorization/local/login`, {email, password}, {headers: Object.assign(JSON.parse(JSON.stringify(this.headers)), {
      'Content-Type': 'application/x-www-form-urlencoded'
    })});
  }

  me(session:string) {
    return this.http.get(`${this.apiHost}/authorization/local/me`);
  }
}
