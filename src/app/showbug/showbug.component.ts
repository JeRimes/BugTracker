import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Bug, BugStatus } from '../@shared/models/bug';
import { BugService } from '../services/bug.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-showbug',
  templateUrl: './showbug.component.html',
  styleUrls: ['./showbug.component.scss'],
})

export class ShowbugComponent implements OnInit {
  @Input() bug!: Bug;
  constructor(public BugService: BugService,private tasksService: TasksService) { }

  ListbugsOpen: Bug[] = [];
  ListbugsInProgress: Bug[] = [];
  ListbugsFix: Bug[] = [];

  taskGroups: any[];
  taskGroupsSubscription: Subscription;

  getValueFromObservable() {
    return new Promise(resolve=>{
        this.BugService.getAllOpen()
         .subscribe(
            (data:any) => {
                resolve(data);
          })
      })
  }
  getValueInProgress(){
    return new Promise(resolve=>{
      this.BugService.getAllInProgress()
       .subscribe(
          (data:any) => {
              resolve(data);
        })
    })
  }
  getValueFix(){
    return new Promise(resolve=>{
      this.BugService.getAllInFix()
       .subscribe(
          (data:any) => {
              resolve(data);
        })
    })
  }
  delete(id){
    this.BugService.delete(id).subscribe(()=>{
        this.ListbugsOpen = this.ListbugsOpen.filter(b=>b._id!=id);
        this.ListbugsInProgress = this.ListbugsInProgress.filter(b=>b._id!=id);
        this.ListbugsFix = this.ListbugsFix.filter(b=>b._id!=id);
    });
  }
  taskGroupsIds: any[];
  stringifiedData: any;  

  async ngOnInit(): Promise<void> {

    this.BugService.getAllOpen().subscribe((data: Bug[])=>{
      this.ListbugsOpen = data;
      return this.ListbugsOpen;
    });
    await this.getValueFromObservable();
  
  this.BugService.getAllInProgress().subscribe((data: Bug[])=>{
      this.ListbugsInProgress = data;
      return this.ListbugsInProgress;
  });
  await this.getValueInProgress();

  this.BugService.getAllInFix().subscribe((data: Bug[])=>{
    this.ListbugsFix = data;
    return this.ListbugsFix;
  });
  await this.getValueFix(); 
    this.taskGroupsSubscription = this.tasksService.taskGroupsSubject.subscribe(
      (taskGroups: any[]) => {
        this.taskGroups = [{
          title: "A faire",
          id: "todo",
          tasks: this.ListbugsOpen
        },
        {
          title: "En cours",
          id: "inProgress",
          tasks: this.ListbugsInProgress
        },
        {
          title: "Corrigé",
          id: "Fixed",
          tasks: this.ListbugsFix
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
    // this.taskGroupsSubscription.unsubscribe();
  }

  BugPartial: Partial<Bug>;
  public BugStatus = BugStatus;
  listStatus= ["open","in-progress","fixed"];
  onTaskDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

        let id = event.container.data[event.currentIndex]._id;
        const title = event.container.data[event.currentIndex].title;
        const description = event.container.data[event.currentIndex].description;
        if(event.container.id==="todo"){
            alert("in to do");
            this.BugPartial =({title:title, description:description, status:this.BugStatus["Open"]});
            this.BugService.update(id,this.BugPartial).subscribe(res=>{
            }) 
        }
        else if(event.container.id==="inProgress")
        {
            alert("in inProgress");
            this.BugPartial =({title:title, description:description, status:this.BugStatus["InProgress"]});
            this.BugService.update(id,this.BugPartial).subscribe(res=>{
            }) 
        }else if(event.container.id==="Fixed")
        {
          alert("in Fixed");
          this.BugPartial =({title:title, description:description, status:this.BugStatus["Fixed"]});
          this.BugService.update(id,this.BugPartial).subscribe(res=>{
          }) 
        }
    }
  }
}
