import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ShowJobComponent } from './components/show-job/show-job.component';
import { JobService } from './services/job.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'jobList/:title/:location', component: JobListComponent},
  {path: 'showJob/:id', component: ShowJobComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'}
 
];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    ShowJobComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
