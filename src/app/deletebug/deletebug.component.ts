import { Component, OnInit } from '@angular/core';
import{BugService}from'../services/bug.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-deletebug',
  templateUrl: './deletebug.component.html',
  styleUrls: ['./deletebug.component.scss']
})
export class DeletebugComponent implements OnInit {

  constructor(private route: ActivatedRoute,public BugService: BugService, private router: Router) { }

  delete(id){
    this.BugService.delete(id).subscribe(res=>{
    });
    this.router.navigate(['/showbug']).then(() => {
     location.reload();
    });

  }
  ngOnInit(): void {
    this.delete(this.route.snapshot.paramMap.get('id'));
  }

}
