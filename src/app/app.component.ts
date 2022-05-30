import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form!: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      message: ['', Validators.required],
      rating: [null, Validators.required],
    });
  }
}
