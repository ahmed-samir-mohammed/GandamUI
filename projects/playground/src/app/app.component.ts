import { Component } from '@angular/core';
import { ButtonComponent } from '../../../ui/src/lib/components/button/button.component';
import { UploadFileComponent } from '../../../form/src/lib/upload-file/upload-file.component';
@Component({
  selector: 'app-root',
  imports: [
    // ButtonComponent,
    UploadFileComponent,
  ],
  template: `
    <div class="w-full h-screen flex items-center justify-center">
      <form class=" bg-slate-700 p-4 w-[40vw]">
        <g-upload-file (fileSelected)="fileSelected($event)" />
      </form>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-gandam-playground';

  fileSelected(file: File) {
    console.log(file);
  }
}
