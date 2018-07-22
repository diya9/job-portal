import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../model/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobTitle: string;
  jobLocation: string;
  filteredJobs: Job[];
  jobs: Job[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: JobService) {

   this.jobTitle = this.route.snapshot.params['title'];
   this.jobLocation = this.route.snapshot.params['location'];
   }

  ngOnInit() {
    console.log(this.jobTitle+" "+this.jobLocation)
    this.dataService.getJob().subscribe(data=> {
      this.jobs = data;
      this.filteredJobs = this.jobs;
      console.log(this.jobs);
    });
  }

  searchJob(){
     
  }

}
