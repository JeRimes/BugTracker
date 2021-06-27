import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  taskGroups: any[] = [];
  taskGroupsSubject = new Subject<any[]>();
  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

}
