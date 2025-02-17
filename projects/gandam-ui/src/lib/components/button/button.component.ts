import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'gButton',
  imports: [],
  template: ` <button [class]="gClass">{{ gText }}</button>`,
})
export class ButtonComponent {
  @Input() gText: string = '';
  @Input() gClass: string =
    'px-4 py-2 font-semibold text-white rounded-lg bg-blue-500 hover:bg-blue-600';
  @Input() gSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() gColor: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() gDisabled: boolean = false;

  ngOnInit() {}
}
