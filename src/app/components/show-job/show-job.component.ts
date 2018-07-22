import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../model/job';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css']
})
export class ShowJobComponent implements OnInit {

  id: number;
  job:Job[];

  constructor(private route: ActivatedRoute, private dataService: JobService) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    
  }

}
