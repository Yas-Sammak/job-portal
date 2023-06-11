import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

   
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username === 'admin' && password === 'Test123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
