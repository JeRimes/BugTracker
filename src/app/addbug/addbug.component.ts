import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FormBuilder ,FormArray, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Bug } from '../@shared/models/bug';
import { BugService } from '../services/bug.service'

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.scss']
})

export class AddBugComponent implements OnInit {
  constructor(private fb: FormBuilder,public BugService: BugService) { 
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
  
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.AddBugForm.value);
  //   alert("send data");
  //   this.create();
  // }
  
  create(){
    const title = this.AddBugForm.get("title").value;
    const description = this.AddBugForm.get("description").value;
    const alias = this.AddBugForm.get("alias").value;
    //this.addNewBug({title:title, description:description, alias:alias});
    this.BugService.create(this.AddBugForm.value).subscribe(res=>{
      alert("Bug created");
    })  
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