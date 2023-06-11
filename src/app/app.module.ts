import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './JobComponents/job-list/job-list.component';
import { JobDetailsComponent } from './JobComponents/job-details/job-details.component';
import { JobFormComponent } from './JobComponents/job-form/job-form.component';
import { AdminLoginComponent } from './AdminComponents/admin-login/admin-login.component';
import { AdminDashboardComponent } from './AdminComponents/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './CommonComponents/nav-bar/nav-bar.component';
import { BannerComponent } from './CommonComponents/banner/banner.component';
import { FilterMenuComponent } from './CommonComponents/filter-menu/filter-menu.component';
import { JobPostCardComponent } from './CommonComponents/job-post-card/job-post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailsComponent,
    JobFormComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    NavbarComponent,
    BannerComponent,
    FilterMenuComponent,
    JobPostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
