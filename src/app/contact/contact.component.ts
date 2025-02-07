import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  cFormData!: FormGroup;

  constructor(private readonly builder: FormBuilder) {}

  ngOnInit() {
    this.cFormData = this.builder.group({
      Fullname: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Comment: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.cFormData.valid) {
      console.log('Contact Form Submitted', this.cFormData.value);
    }
  }
}
