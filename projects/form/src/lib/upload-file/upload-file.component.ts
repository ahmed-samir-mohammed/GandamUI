import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gUploadFile',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadFileComponent),
      multi: true,
    },
  ],
  template: `
    <label for="gFile">
      <span>Upload File</span>
    </label>
    <input hidden type="file" id="gFile" (change)="onFileSelected($event)" />
  `,
  styles: ``,
})
export class UploadFileComponent {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.validateFile(file)) {
        this.fileSelected.emit(file);
      } else {
        console.error('File validation failed');
      }
    }
  }

  validateFile(file: File): boolean {
    // Custom validation logic here
    // Example: Check file size (e.g., max 5MB)
    const maxSizeInMB = 5;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  }
}
