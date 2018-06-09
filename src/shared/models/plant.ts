const object = {
  value: null,
  helper: '',
  min: null,
  max: null,
  label: null
}

export class State {
  get 'soil-moisture'() {
    return Object.assign({}, object);
  }

  get 'soil-nutrients'() {
    return Object.assign({}, object);
  }

  get 'soil-ph'() {
    return Object.assign({}, object);
  }
}

class StaredAt {
  days: number;
  hours: number;
  minutes: number;
}

class PeriodLabel {
  active: string;
  items: Array<any>;
}

export class Plant {
  plant_id: number;
  name: string;
  description: string;
  state: State;
  started_at: number;
  started_at_description: StaredAt;
  period_label: PeriodLabel;
  status: number;
}
