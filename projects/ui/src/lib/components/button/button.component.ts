import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { GandamSize } from '../../types';

/**
 * ButtonComponent is a reusable button component for Angular applications.
 * It allows customization of text, CSS classes, color, and disabled state.
 */
@Component({
  selector: 'g-button',
  standalone: true,
  template: ` <button [class]="gClass + ' ' + gColor" [disabled]="gDisabled">
    {{ gText }}
  </button>`,
})
export class ButtonComponent {
  /**
   * The text to display inside the button.
   * @default ''
   */
  @Input() gText: string = '';

  /**
   * The CSS classes to apply to the button for styling.
   * @default 'px-4 py-2 font-semibold rounded-lg'
   */
  @Input() gClass: string = 'px-4 py-2 font-semibold rounded-lg';

  /**
   * The color classes to apply to the button for styling.
   * @default 'bg-blue-500 hover:bg-blue-600 text-white'
   */
  @Input() gColor: string = 'bg-blue-500 hover:bg-blue-600 text-white';

  /**
   * Determines whether the button is disabled.
   * @default false
   */
  @Input('disabled') gDisabled: boolean = false;
  @Input() gSize: GandamSize = 'medium';

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   */
  ngOnInit() {}
}
