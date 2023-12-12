// feedback.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  isSubmitted = true;
returnUrl: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      address: [''],
      commentRating: ['']
    });
  }

  get name() {
    return this.feedbackForm.get('name');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get message() {
    return this.feedbackForm.get('message');
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.feedbackForm.value);
      // You can send the data to a backend server or perform other actions
    } else {
      // Mark all fields as touched to display validation messages
      this.feedbackForm.markAllAsTouched();
    }
  }
}
