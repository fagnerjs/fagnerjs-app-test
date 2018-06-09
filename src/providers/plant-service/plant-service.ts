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
import { Plant, State } from '../../shared/models/plant';

import config from '../../app/config';

@Injectable()
export class PlantServiceProvider {

  channelPrefix: string = 'plant';
  options: RequestOptions;
  apiHost: string;
  pollings = {};
  sensors: Sensors = new Sensors();
  features: Features = new Features();
  hardware: Hardware = new Hardware();
  plant: Array<Plant> = [];

  services = [
    {
      service: 'getPlantsData',
      channel: 'state',
      interval: 3000,
      default: this.plant
    }
  ];

  constructor(
    private http: Http,
    public events: Events,
    public utils: UtilsProvider,
  ) { }

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
      const channel = this.channelPrefix + ':' + options.channel;

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

      this[service]().then(result => {
        this.events.publish(channel, {
          error: false,
          data: result
        });
      }).catch(error => {
        console.log(error)
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

  getPlantsData(data?, connection = null): Promise< Array<Plant> > {
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return new Promise((resolve, reject) => {
      this.http.get(`http://${config.currentDevice.params.host}:${config.currentDevice.params.port}/plant`, options)
        .map(res => res.json())
        .subscribe(result => resolve(result.data), reject);
    });
  }

  postPlantsData(data?, connection = null): Promise< Array<Plant> > {
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return new Promise((resolve, reject) => {
      this.http.put(`http://${config.currentDevice.params.host}:${config.currentDevice.params.port}/plant/1`, data, options)
        .map(res => res.json())
        .subscribe(result => resolve(result.data), reject);
    });
  }

  getPlantData(id: number) {
    const options = new RequestOptions({headers: this.getDefaultHeaders()});
    return this.http.get(`http://${config.currentDevice.params.host}:${config.currentDevice.params.port}/plant/${id}`, options)
      .map(res => res.json());
  }
}
