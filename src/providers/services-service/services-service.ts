import { Injectable } from '@angular/core';
import { StateServiceProvider } from '../state-service/state-service';
import { PlantServiceProvider } from '../plant-service/plant-service';

@Injectable()
export class ServicesServiceProvider {

  constructor(
    private stateService: StateServiceProvider,
    private plantService: PlantServiceProvider
  ) {}

  start() {
    this.stateService.start();
    this.plantService.start();
  }

  getService(serviceName: string) {
    try {
      return this[serviceName];
    }catch(e) {
      throw e;
    }
  }

}
