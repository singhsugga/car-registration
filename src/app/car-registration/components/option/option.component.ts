import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.less']
})
export class OptionComponent  {

  @Input() value!: any;
  @ViewChild('options', { read: ElementRef, static: false })
  option!: ElementRef;
  constructor(public select: SelectComponent) {}

  change(event: any): void {
    if (event.target.checked) {
      this.select.addValue(this.value);
    } else {
      this.select.removeValueFromCheckbox(this.value);
    }
  }

}
