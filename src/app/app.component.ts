import { Component } from '@angular/core';
import {Bug} from './@shared/models/bug'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router:Router){
  }
  register():void{
    this._router.navigate(['add']);
  }

  title = 'BugTracker';
  //bugs :Bug[] =[];
  bugs=[];
  addBug(BugToSend: Partial<Bug>):void {
    this.bugs.push(BugToSend);
  }
  removeBug(index,bug){
    alert(bug);
    this.bugs.splice(index,1);
  }

}

