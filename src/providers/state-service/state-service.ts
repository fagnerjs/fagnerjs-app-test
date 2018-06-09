import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';
import { UtilsProvider } from '../../app/utils';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Sensors } from '../../shared/models/sensors';
import { Features } from '../../shared/models/features';
import { Hardware } from '../../shared/models/hardware';

import config from '../../app/config';

@Injectable()
export class StateServiceProvider {

  options: RequestOptions;
  apiHost: string;
  pollings = {};
  sensors: Sensors = new Sensors();
  features: Features = new Features();
  hardware: Hardware = new Hardware();

  services = [{
    service: 'getFeatureData',
    channel: 'feature',
    interval: 3000,
    default: Object.assign({}, this.features)
  },{
    service: 'getHardwareData',
    channel: 'hardware',
    interval: 3000,
    default: Object.assign({}, this.hardware)
  },{
    service: 'getSensorsData',
    channel: 'sensors',
    interval: 3000,
    default: Object.assign({}, this.sensors)
  }];

  constructor(
    private http: Http,
    public events: Events,
    public utils: UtilsProvider
  ) {}

  start() {
    for(const item of this.services) {
      this.polling(item.service, {
        channel: item.channel,
        interval: item.interval,
        default: item.default
      })
    }
  }

  private polling(service:any, options:any = {channel: 'default', interval: 5000, default: null}) {
    if(this.polling[options.channel]) return;
    const run = () => {
      const channel = 'state:' + options.channel;

      if(!config.currentDevice) {
        return this.events.publish(channel, {
          error: true,
          data: options.default
        });
      }else {
        if(!config.currentDevice.params.host || !config.currentDevice.params.port) {
          return this.events.publish(channel, {
            error: true,
            data: options.default
          });
        }
      }

      const params = config.currentDevice.params;
      this.apiHost = `http://${params.host}:${params.port}`;

      this[service]().then(result => {
        this.events.publish(channel, {
          error: false,
          data: Object.assign({}, result)
        });
      }).catch(error => {
        this.events.publish(channel, {
          error: true,
          data: options.default
        });
      });
    }
    run();
    this.polling[options.channel] = setInterval(() => run(), options.interval);
  }

  getDefaultHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
    return headers;
  }

  getHardwareData(data?, connection = null):  Promise<Hardware>{
    this.apiHost = connection ? `http://${connection.host}:${connection.port}` : this.apiHost;
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiHost}/state/hardware?ts=${new Date().getTime()}`, options)
        .map(res => res.json())
        .subscribe(result => {
          resolve(result);
        }, reject)
    });
  }

  getFeatureData(data?, connection = null):  Promise<Features>{
    this.apiHost = connection ? `http://${connection.host}:${connection.port}` : this.apiHost;
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiHost}/state/feature?ts=${new Date().getTime()}`, options)
        .map(res => res.json())
        .subscribe(resolve, reject)
    });
  }

  getSensorsData(data?, connection = null){
    this.apiHost = connection ? `http://${connection.host}:${connection.port}` : this.apiHost;
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiHost}/state/sensors?ts=${new Date().getTime()}`, options)
        .map(res => res.json())
        .subscribe(result => {
          const sensors = Object.assign({}, this.sensors);
          for(const k in result) {
            const item = result[k]||{};
            let value = item.value;
            value = value === undefined || (typeof value == 'number' && value == -500) || value == '' ? null : value;
            // formats
            switch (k) {
              case 'lux':
                value = typeof value === 'number' ? this.utils.numberFormat(value) : value;
                break;

              default:
                break;
            }

            let helper = '';
            if(value == 'error') {
              helper = 'danger with-line';
            }

            sensors[k] = {value, helper, min: item.min, max: item.max};
          }
          resolve(sensors);
        }, error => reject(error));
    });
  }

  getSensorsHistory(data?, connection = null) {
    this.apiHost = connection ? `http://${connection.host}:${connection.port}` : this.apiHost;
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiHost}/state/sensors/${data.sensor}/history?${(data||{}).start && (data||{}).end ? 'date=' + data.start + ',' + data.end : ''}&sort=${(data||{}).sort ? data.sort : 'asc'}`, options)
        .map(res => res.json())
        .subscribe(resolve, reject)
    });
  }

}
