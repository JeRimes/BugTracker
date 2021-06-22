import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Bug } from '../@shared/models/bug';
import{ServiceService}from'../service.service';
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
  constructor(public ServiceService: ServiceService) { }

  Listbugs: Bug[] = [];
  ngOnInit(): void {
    this.ServiceService.getAll().subscribe((data: Bug[])=>{
      this.Listbugs = data;
    })  
  }

}
