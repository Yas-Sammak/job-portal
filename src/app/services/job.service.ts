import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://your-firebase-project.firebaseio.com/jobs';

  constructor(private http: HttpClient) { }


  createJob(job: any): Observable<any>
  {
    return this.http.post(`${this.apiUrl}.json`, job);
  }

  getJobs(): Observable<any>
  {
    return this.http.get(`${this.apiUrl}.json`);
  }

  updateJob(jobId: string, job: any): Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${jobId}.json`, job);
  }

  deleteJob(jobId: string): Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${jobId}.json`);
  }


}
