import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobListComponent } from './JobComponents/job-list/job-list.component';
import { JobDetailsComponent } from './JobComponents/job-details/job-details.component';
import { JobFormComponent } from './JobComponents/job-form/job-form.component';
import { AdminLoginComponent } from './AdminComponents/admin-login/admin-login.component';
import { AdminDashboardComponent } from './AdminComponents/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';






  const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: 'jobs', component: JobListComponent },
    { path: 'jobs/:id', component: JobDetailsComponent },
    { path: 'admin/login', component: AdminLoginComponent },
    {
      path: 'admin/dashboard',
      component: AdminDashboardComponent,
      canActivate: [AdminGuard]
    },
    { path: 'admin/jobs/new', component: JobFormComponent },
    { path: 'admin/jobs/:id', component: JobFormComponent },
   
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
