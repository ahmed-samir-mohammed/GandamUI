import { Component } from '@angular/core';
import { ButtonComponent } from '../../../ng-gandam/src/public-api';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  template: ` <gButton gText="From Angular" />`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-gandam-playground';
}
