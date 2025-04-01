import { Component, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { GandamSize } from '../../types';
import { GANDAM_THEME } from '../../../../../theme/src/public-api';
import { GandamTheme } from '../../../../../theme/src/lib/theme.interface';

/**
 * ButtonComponent is a reusable button component for Angular applications.
 * It allows customization of text, CSS classes, color, and disabled state.
 */
@Component({
  selector: 'g-button',
  standalone: true,
  template: ` <button [class]="getButtonClasses()" [disabled]="gDisabled">
    {{ text }}
  </button>`,
})
export class ButtonComponent {
  /**
   * The text to display inside the button.
   * @default ''
   */
  @Input() text: string = '';

  /**
   * The CSS classes to apply to the button for styling.
   * @default ''
   */
  @Input() gClass: string = '';

  /**
   * The color classes to apply to the button for styling.
   * @default ''
   */
  @Input() gColor: string = '';

  /**
   * Determines whether the button is disabled.
   * @default false
   */
  @Input('disabled') gDisabled: boolean = false;
  @Input() gSize: GandamSize = 'medium';

  /**
   * Constructor that injects the theme service.
   */
  constructor(@Inject(GANDAM_THEME) public theme: GandamTheme) {}

  /**
   * Gets the button classes based on the theme and size.
   * @returns The CSS classes for the button.
   */
  getButtonClasses(): string {
    const sizeClasses = this.getSizeClasses();
    const baseClasses = 'font-semibold ' + this.theme.borderRadius;
    const textColorClasses = this.theme.button?.text || 'text-white';
    const colorClasses = this.gColor || this.theme.button || 'bg-blue-500';

    return `${
      this.gClass || baseClasses
    } ${sizeClasses} ${colorClasses} ${textColorClasses}`;
  }

  /**
   * Gets the size classes based on the gSize input.
   * @returns The CSS classes for the button size.
   */
  getSizeClasses(): string {
    switch (this.gSize) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'large':
        return 'px-6 py-3 text-lg';
      case 'medium':
      default:
        return 'px-4 py-2';
    }
  }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   */
  ngOnInit() {}
}
