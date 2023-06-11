import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit
{
  jobForm!: FormGroup;
  jobs: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit()
  {
    this.jobForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: [''],
      description: ['', Validators.required]
    });
  }

  addJob()
  {
    if (this.jobForm.invalid)
    {
      return;
    }

    const formValues = this.jobForm.value;

    console.log('Submitted Form:', formValues);

    this.jobs.push(formValues);

    this.jobForm.reset();
  }
}
