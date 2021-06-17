import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder ,FormArray, Validators, FormGroup } from '@angular/forms';
import { Bug } from '../@shared/models/bug';
@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.scss']
})

export class AddBugComponent implements OnInit {
  constructor(private fb: FormBuilder) { 
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

  @Output() BugToSend = new EventEmitter<Partial<Bug>>();


  listAlias = [{alias: "Important"},{alias:"Moyen"},{alias:"faible"}];
  
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
    alert(alias);
    this.addNewBug({title:title, description:description, alias:alias});
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