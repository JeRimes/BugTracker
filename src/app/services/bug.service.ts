import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Bug } from '../@shared/models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private apiServer = "https://crudcrud.com/api/42569f8a817047f3803e79b02f9f529c";
  
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

  update(id, product): Observable<Bug> {
    return this.httpClient.put<Bug>(this.apiServer + '/addbug/' + id, JSON.stringify(product), this.httpOptions)
  }
  delete(id){
    alert("bug delete !"+ id);
    return this.httpClient.delete<Bug>(this.apiServer + '/addbug/' + id, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
  getById(id): Observable<Bug> {
    return this.httpClient.get<Bug>(this.apiServer + '/addbug/' + id)
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
