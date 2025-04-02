import { Component } from '@angular/core';
import { UploadFileComponent } from '@gandam/form';
import { ButtonComponent } from '@gandam/ui';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, UploadFileComponent],
  template: `
    <div class="w-full h-screen flex items-center justify-center">
      <form class="bg-slate-700 p-4 w-[40vw]">
        <g-upload-file
          [label]="'Upload file'"
          (fileSelected)="fileSelected($event)"
        />
        <g-button [text]="'Save'" />
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
