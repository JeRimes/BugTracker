import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Bug } from './@shared/models/bug';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiServer = "https://crudcrud.com/api/b46eaa16d8924aa68e98788cd161526c";
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  create(bug): Observable<Bug> {
    return this.httpClient.post<Bug>(this.apiServer + '/addbug/', JSON.stringify(bug), this.httpOptions)
  } 
  getAll(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.apiServer + '/addbug/')
  }

}
