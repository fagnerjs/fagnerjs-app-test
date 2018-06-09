import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./http.interceptor";
import { PubSubService } from './pubsub-service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, pubsub: PubSubService): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, pubsub);
}
