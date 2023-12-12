import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: 'forget-password.component.html',
  styleUrls: ['forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
[x: string]: any;
  forgetPasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    // Handle forget password logic here
    if (this.forgetPasswordForm.valid) {
      // Example: Send a password reset email
      console.log('Password reset email sent to:', this.forgetPasswordForm.value.email);
    }
  }
}
