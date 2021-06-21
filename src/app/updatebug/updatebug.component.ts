import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Bug } from '../@shared/models/bug';
import{ServiceService}from'../service.service';
import { FormBuilder ,FormArray, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-updatebug',
  templateUrl: './updatebug.component.html',
  styleUrls: ['./updatebug.component.scss']
})
export class UpdatebugComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, public ServiceService: ServiceService) {
    this.updateForm();
   }
  UpdateForm:FormGroup;
  private updateForm(){
    this.UpdateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      alias: this.fb.array([
      ]),
    });
  }
  BugEdit: Partial<Bug>;
  edit(){
    //const id = this.UpdateForm.get("_id").value;
    const id= this.route.snapshot.paramMap.get('id');
    const title = this.UpdateForm.get("title").value;
    const description = this.UpdateForm.get("description").value;
    const alias = this.UpdateForm.get("alias").value;
    this.BugEdit =({title:title, description:description, alias:alias});
    this.ServiceService.update(id,this.BugEdit).subscribe(res=>{
      alert("Bug update");
    })  
  }
  @Input() BugDetail!: Bug;
  ngOnInit(): void {
    this.ServiceService.getById(this.route.snapshot.paramMap.get('id')).subscribe((data: Bug)=>{
      this.BugDetail = data;
    });
  }

}