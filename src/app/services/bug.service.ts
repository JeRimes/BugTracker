import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, partition, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Bug } from '../@shared/models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private apiServer = "https://crudcrud.com/api/437f91dbcc954a9cb26dc33cda4dfaa6";
  
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
  getAllOpen(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.apiServer + '/addbug/').pipe(
      map(items => items.filter(i=>i.status=="open"))
    );
  }
  getAllInProgress(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.apiServer + '/addbug/').pipe(
      map(items => items.filter(i=>i.status=="in-progress"))
    );
  }
  getAllInFix(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.apiServer + '/addbug/').pipe(
      map(items => items.filter(i=>i.status=="fixed"))
    );
  }
  update(id, product): Observable<Bug> {
    console.log(product);
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
