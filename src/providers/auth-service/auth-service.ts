import { Injectable, ReflectiveInjector } from '@angular/core';
import { CustomHttp } from '../customHttp';
import { Storage } from '@ionic/storage';

import configs from '../../app/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import config from '../../app/config';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

@Injectable()
export class AuthServiceProvider {
  private apiHost: string = configs.API_HOST;
  private headers =  {}

  constructor(private http: CustomHttp, private storage: Storage) {}

  create(params) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiHost}/users/insert`, params, {headers: JSON.parse(JSON.stringify(this.headers))})
        .then(r => {
          this.authenticate(params.phone, params.password)
            .then(resolve)
            .catch(reject);
        }).catch(reject)
    });
  }

  authenticate(phone:string, password:string) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiHost}/authorization/local/login`, {phone, password}, {headers: JSON.parse(JSON.stringify(this.headers))})
      .then(r => {
        const session = r.headers.get('x-auth-session');
        if(!session) {
          return reject();
        }

        this.storage.get('settings').then(settings => {
          if(!settings) {
            return reject();
          }

          settings.auth.session = session;
          settings.auth.user = r.body.data;

          this.storage.set('settings', settings).then(() => {
            configs.settings = settings;
            resolve(r.body);
          }).catch(reject);

        }).catch(reject);
        resolve(r.body);
      }).catch(reject);
    });
  }

  check(phone:string) {
    return this.http.get(`${this.apiHost}/users/check`, {phone});
  }

  me(session:string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiHost}/authorization/local/me`, null, {
        parse: false
      }).then(r => {
        this.storage.get('settings').then(settings => {
          if(!settings) {
            return reject();
          }

          settings.auth.session = session;
          settings.auth.user = r.body.data;

          this.storage.set('settings', settings).then(() => {
            configs.settings = settings;
            resolve(r.body);
          }).catch(reject);

        }).catch(reject);
      });

    })
  }
}
