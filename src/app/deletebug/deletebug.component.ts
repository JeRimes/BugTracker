import { Component, OnInit } from '@angular/core';
import{ServiceService}from'../service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-deletebug',
  templateUrl: './deletebug.component.html',
  styleUrls: ['./deletebug.component.scss']
})
export class DeletebugComponent implements OnInit {

  constructor(private route: ActivatedRoute,public ServiceService: ServiceService, private router: Router) { }

  delete(id){
    this.ServiceService.delete(id).subscribe(res=>{
    });
    // this.router.navigate(['/showbug']).then(() => {
    //   window.location.reload();
    // });
  }
  ngOnInit(): void {
    this.delete(this.route.snapshot.paramMap.get('id'));
  }

}
