
import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][PhoneMask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(keydown.backspace)': 'onInputChange($event.target.value, true)'
  }
})
export class PhoneMask{
  constructor(public model: NgControl) {
  }

  onInputChange(event, backspace){
    this.model.valueAccessor.writeValue(this.pattern(event));
  }

  pattern(v){
    v = v || '';
    v = v.replace(/\D/g,"");
    v = v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v = v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
  }
}
