import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../dist/ui';
import { UploadFileComponent } from '../../../../dist/form';
@Component({
  selector: 'app-root',
  imports: [ButtonComponent, UploadFileComponent],
  template: ` <gButton gText="Click Me" />
    <gUploadFile (fileSelected)="fileSelected($event)" />`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-gandam-playground';

  fileSelected(file: File) {
    console.log(file);
  }
}
