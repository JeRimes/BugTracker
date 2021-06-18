import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { FormBuilder ,FormArray, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Bug } from '../@shared/models/bug';
import{ServiceService}from'../service.service';

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.scss']
})

export class AddBugComponent implements OnInit {
  constructor(private fb: FormBuilder,  private route: ActivatedRoute, public ServiceService: ServiceService) { 
    this.createForm();
  }
  AddBugForm:FormGroup;

  private createForm(){
    this.AddBugForm = this.fb.group({
      Titre: ['', Validators.required],
      Description: ['', Validators.required],
      allAliasView: this.fb.array([
      ]),
    });
  }
//une partie du bug
  @Output() BugToSend = new EventEmitter<Partial<Bug>>();


  listAlias = [{alias: "Important"},{alias:"Moyen"},{alias:"faible"}];
  listStatus= ["A faire","En cours","Resolue"];
  
  get allAliasView() {
    return this.AddBugForm.get('allAliasView') as FormArray;
  }
  addAlias(text) {
      this.allAliasView.push(this.fb.control(text));
  }
  
  deleteAlias(text){
    this.allAliasView.removeAt(text);
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.AddBugForm.value);
    alert("send data");
    this.create();
  }
  
  create(){
    const title = this.AddBugForm.get("Titre").value;
    const description = this.AddBugForm.get("Description").value;
    const alias = this.AddBugForm.get("allAliasView").value;
    this.addNewBug({title:title, description:description, alias:alias});
    
    this.ServiceService.create(this.AddBugForm.value).subscribe(res=>{
      alert("Bug created");
    })  
  }

  addNewBug(value: Partial<Bug>){
    this.BugToSend.emit(value);
  }

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