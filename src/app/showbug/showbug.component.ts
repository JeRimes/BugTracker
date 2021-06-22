import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Bug } from '../@shared/models/bug';
import { BugService } from '../services/bug.service';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-showbug',
  templateUrl: './showbug.component.html',
  styleUrls: ['./showbug.component.scss'],
//   template:`
//   <div class="row-bug">
//     <div><span class="card-title">Titre : </span>{{bug.title}} </div>
//     <div>
//     <span>Description : </span>{{bug.description}} <span>  Alias : </span>{{bug.alias}} 
//     </div>
//   </div>
//  `
})
export class ShowbugComponent implements OnInit {
  @Input() bug!: Bug;
  constructor(public BugService: BugService,private tasksService: TasksService) { }

  Listbugs: Bug[] = [];
  taskGroups: any[];
  taskGroupsSubscription: Subscription;

  getValueFromObservable() {
    return new Promise(resolve=>{
        this.BugService.getAll()
         .subscribe(
            (data:any) => {
                resolve(data);
          })
      })
  }
  taskGroupsIds: any[];
  stringifiedData: any;  
  async ngOnInit(): Promise<void> {

    this.BugService.getAll().subscribe((data: Bug[])=>{
      this.Listbugs = data;
      return this.Listbugs;
    });
    await this.getValueFromObservable();

    // string=string.substring(1);
    // string=string.slice(0, -1);
    //alert(string.toString());
    //let test = "{'_id':'60d1d850209ad703e8100577','title':'a','description':'a','alias':['Important']}";

    this.taskGroupsSubscription = this.tasksService.taskGroupsSubject.subscribe(
      (taskGroups: any[]) => {
        this.taskGroups = [{
          name:"test1",
          title: "A faire",
          id: "todo",
          tasks: this.Listbugs
        },
        {
          name:"test2",
          title: "En cours",
          id: "inProgress",
          tasks: []
        },
        {
          name:"test3",
          title: "Corrigé",
          id: "Fixed",
          tasks: []
        }
    ];
      

        // this.taskGroups = taskGroups;
        // taskGroups.forEach(function (child) {
        //   this.taskGroupsIds.push(child);
        //   console.log(child);
        // });
      }
    );
    this.tasksService.emitTaskGroups();
  }

  ngOnDestroy() {
    this.taskGroupsSubscription.unsubscribe();
  }
  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
   }
   
   exited(event: CdkDragExit<string[]>) {
     console.log('Exited', event.item.data);
   }

  onTaskDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        console.log(event.container);
        console.log(event.container.id);
        console.log(event.container.data[event.currentIndex]);
        // alert("previous" + JSON.stringify(event.previousContainer.data));
        // alert("previous index" +event.previousIndex);
        // alert("current index" + event.currentIndex);

    }
  }
}
