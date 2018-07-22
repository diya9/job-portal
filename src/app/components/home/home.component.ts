import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobTitle: string;
  jobLocation: string;

  constructor(private route: Router) { }

  ngOnInit() {
    
  }

  jobSearch(){
    console.log(this.jobTitle+" "+this.jobLocation);
    this.route.navigate(['/jobList',this.jobTitle,this.jobLocation]);
  }

}
