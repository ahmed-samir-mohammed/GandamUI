import { Component, forwardRef, Inject, Input, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { FileInput } from '../../core/interface/form.interface';
import { GANDAM_THEME } from '../../../../theme/src/public-api';
import { GandamTheme } from '../../../../theme/src/lib/GandamThem';

@Component({
  selector: 'g-upload-file',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadFileComponent),
      multi: true,
    },
  ],
  template: `
    <div class="flex flex-col gap-2">
      <label class="font-semibold text-white" [for]="controlName">
        {{ label }}
        @if (required) {
        <span class="text-red-600">*</span>
        }
      </label>
      <label
        [for]="controlName"
        class=" flex items-center justify-between cursor-pointer p-3 border rounded-lg"
      >
        <span class=" font-semibold text-slate-400 text-sm">
          {{ fileName }}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-upload text-white"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      </label>
      <input
        hidden
        type="file"
        [id]="controlName"
        [accept]="accept"
        (change)="onFileSelected($event)"
      />
    </div>
  `,
  styles: ``,
})
export class UploadFileComponent {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();
  @Input() accept: string = '*';
  @Input() controlName: string = 'g-file';
  @Input() label: string = 'Choose File';
  @Input() required: boolean = false;
  @Input() file!: FileInput[] | FileInput;
  fileName: string = 'Choose File';

  constructor(@Inject(GANDAM_THEME) public theme: GandamTheme) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      const file = input.files[0];
      if (this.validateFile(file)) {
        this.fileSelected.emit(file);
      } else {
        console.error('File validation failed');
      }
    }
  }

  isSingleFile(file: FileInput | FileInput[] | null): file is FileInput {
    return !!file && !Array.isArray(file);
  }

  /**
   * Type guard to check if the input is multiple files.
   *
   * @param file - The file input to check.
   * @returns True if the input is multiple files, false otherwise.
   */
  isMultiFile(file: FileInput | FileInput[] | null): file is FileInput[] {
    return !!file && Array.isArray(file);
  }

  /**
   * Get the file name(s) from the file input.
   *
   * @returns The file name(s) as a string or an array of strings.
   */
  getFileNames(): string | string[] {
    if (this.isSingleFile(this.file)) {
      return this.file.attachmentName;
    } else if (this.isMultiFile(this.file)) {
      return this.file.map((file) => file.attachmentName).join(', ');
    }
    return '';
  }

  validateFile(file: File): boolean {
    // Custom validation logic here
    // Example: Check file size (e.g., max 5MB)
    const maxSizeInMB = 5;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  }
}
