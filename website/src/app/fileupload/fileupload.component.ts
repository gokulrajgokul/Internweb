import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent {
  fileupload: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fileupload = this.fb.group({
      sslc: [null],
      hsc: [null],
      provisional: [null],
      aadhar: [null],
      photo: [null],
      resume: [null]
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.fileupload.patchValue({ [field]: file });
      this.fileupload.get(field)?.updateValueAndValidity();
    }
  }

  onSubmit() {
    const formData = new FormData();
    Object.keys(this.fileupload.controls).forEach(key => {
      const file = this.fileupload.get(key)?.value;
      if (file) {
        formData.append(key, file);
      }
    });

    // For demonstration, just log the FormData
    console.log('FormData prepared:', formData);

    // TODO: Send formData to backend using HttpClient
  }
}
