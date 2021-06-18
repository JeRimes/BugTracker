import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../@shared/models/bug';
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
  constructor() { }

  ngOnInit(): void {
  }

}
