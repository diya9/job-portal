import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Job } from '../model/job';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJob(): Observable<Job[]>{
    return this.http.get<Job[]>('./../../assets/data/jobs.json')
 }
}
