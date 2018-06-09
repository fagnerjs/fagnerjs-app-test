import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Observable as OBS } from 'rxjs/Observable';
import { PubSubService } from './pubsub-service';
import configs from '../../app/config';

@Injectable()
export class InterceptedHttp extends Http {
    private _pubsub: PubSubService;
    private connectionObserver: any;
    public connection: any;

    constructor(
      backend: ConnectionBackend,
      defaultOptions: RequestOptions,
      pubsub: PubSubService
    ) {
      super(backend, defaultOptions);
      this._pubsub = pubsub;
      this.connectionObserver = null;
      this.connection = OBS.create(observer => {
        this.connectionObserver = observer;
      });
    }

    // Send that information to all the subscribers
    connectionHasChanged(channel: string) {
      this.connectionObserver.next(channel);
    }

    getAuthorization() {
      let sessionID = 'null';
      if(configs.currentDevice && configs.currentDevice.id) {
        sessionID = (configs.currentDevice.data||{}).session;
      }
      return sessionID;
    }

    getApiClient() {
      return 'highgarden.com';
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
      if(options == null) {
        options = new RequestOptions();
      }
      if(options.headers == null) {
        options.headers = new Headers();
      }
      if(!options.headers.get('session-id')) {
        options.headers.append('session-id', this.getAuthorization());
      }
      options.headers.append('App', 'true');
      options.headers.append('App-Client', this.getApiClient());
      return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
      this._pubsub.beforeRequest.emit("beforeRequestEvent");
      return observable.catch((err, source) => {
        this._pubsub.afterRequest.emit("afterRequestEvent");
        if (err.status === 401) {
          return Observable.throw(err);
          //this.connectionHasChanged('api:unauthorized');
        } else {
          return Observable.throw(err);
        }
      }).finally(() => {
        this._pubsub.afterRequest.emit("afterRequestEvent");
      });
    }
}
