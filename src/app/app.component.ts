import { Component } from '@angular/core';
import {Bug} from './@shared/models/bug'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BugTracker';
  //bugs :Bug[] =[];
  bugs=[];
  addBug(BugToSend: Partial<Bug>):void {
    this.bugs.push(BugToSend);
  }


}

