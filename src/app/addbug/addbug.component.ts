import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FormBuilder ,FormArray, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Bug, BugStatus } from '../@shared/models/bug';
import { BugService } from '../services/bug.service'

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.scss']
})

export class AddBugComponent implements OnInit {
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,public BugService: BugService) { 
    this.createForm();
  }
  AddBugForm:FormGroup;

  private createForm(){
    this.AddBugForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      alias: this.fb.array([
      ]),
      status:['']
    });
  }
  //une partie du bug
  //@Output() BugToSend = new EventEmitter<Partial<Bug>>();

  listAlias = [{alias: "Important"},{alias:"Moyen"},{alias:"faible"}];
  listStatus= ["open","in-progress","fixed"];

  get status(){
    return this.AddBugForm.get('status');
  }
  get alias() {
    return this.AddBugForm.get('alias') as FormArray;
  }
  addAlias(text) {
      this.alias.push(this.fb.control(text));
  }
  
  deleteAlias(text){
    this.alias.removeAt(text);
  }
  
  BugEdit: Partial<Bug>;
  public BugStatus = BugStatus;
  create(){
    const status= this.route.snapshot.paramMap.get('id');
    const title = this.AddBugForm.get("title").value;
    const description = this.AddBugForm.get("description").value;
    //const alias = this.AddBugForm.get("alias").value;
    if(status==="todo"){
      this.BugEdit =({title:title, description:description, status:this.BugStatus["Open"]});
    }
    else if(status==="inProgress")
    { 
      this.BugEdit =({title:title, description:description, status:this.BugStatus["InProgress"]});
    }
    else if(status==="Fixed")
    {
      this.BugEdit =({title:title, description:description, status:this.BugStatus["Fixed"]});
    }
    this.BugService.create(this.BugEdit).subscribe(res=>{
      alert("Bug created");
    });
    
    this.router.navigate(['/showbug']);

 
  }

  // addNewBug(value: Partial<Bug>){
  //   this.BugToSend.emit(value);
  // }

  ngOnInit(): void {


  }

}
  // isAlreadyAdd(text){
  //   for (let i = 0; i<this.allAliasView.length; i++) {
  //   alert(this.allAliasView[i].value);  
  //   console.log("ttt");
  //     // if(text===this.listAlias[i].alias){
  //     //   return true;
  //     // }
  //   }
  //   return false;
  // }