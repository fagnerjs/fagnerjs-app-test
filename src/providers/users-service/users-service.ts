import { Injectable } from '@angular/core';
import { CustomHttp } from '../customHttp';

import configs from '../../app/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersServiceProvider {
  private apiHost: string = configs.API_HOST;
  private headers =  {}

  constructor(private http: CustomHttp) {}

  searchByGeo(params:any) {
    return this.http.get(`${this.apiHost}/users/geosearch`, params, {headers: JSON.parse(JSON.stringify(this.headers))})
  }

  update(id, params) {
    return new Promise((resolve, reject) => {
      this.http.put(`${this.apiHost}/users/update/${id}`, params, {headers: JSON.parse(JSON.stringify(this.headers))})
        .then(resolve).catch(reject)
    });
  }
}
