import { Injectable, ReflectiveInjector } from '@angular/core';
import { CustomHttp } from '../customHttp';
import { Storage } from '@ionic/storage';

import configs from '../../app/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import config from '../../app/config';

@Injectable()
export class UsersServiceProvider {
  private apiHost: string = configs.API_HOST;
  private headers =  {}

  constructor(private http: CustomHttp, private storage: Storage) {}

  searchByGeo(params:any) {
    return this.http.get(`${this.apiHost}/users/geosearch`, params, {headers: JSON.parse(JSON.stringify(this.headers))})
  }
}
