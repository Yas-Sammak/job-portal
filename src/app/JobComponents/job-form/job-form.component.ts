import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: [''],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.jobForm.invalid) {
      return;
    }

    const formValues = this.jobForm.value;

    this.httpClient.post('/api/jobs', formValues)
      .subscribe({
        next: (response) => {
          console.log('Job created successfully');
          this.jobForm.reset();
        },
        error: (error) => {
          console.error('Error creating job:', error);
        }
      });
  }
}
