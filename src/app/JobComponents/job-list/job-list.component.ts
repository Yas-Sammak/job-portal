import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})


export class JobListComponent implements OnInit
{
  jobs: any[] = [];

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit()
  {
    this.getJobs();
  }

  getJobs()
  {
    this.jobService.getJobs().subscribe(
      (jobs) => {
        this.jobs = jobs;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewJob(jobId: string)
  {
    this.router.navigate(['/jobs', jobId]);
  }


}
