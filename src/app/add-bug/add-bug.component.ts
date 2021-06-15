import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-bug',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.scss']
})

export class AddBugComponent implements OnInit {
  AddBugForm = this.fb.group({
    Titre: ['', Validators.required],
    Description: ['', Validators.required],
    allAliasView: this.fb.array([
    ]),
  });

  listAlias = [{alias: "Important"},{alias:"Moyen"},{alias:"faible"}];

  get allAliasView() {
    return this.AddBugForm.get('allAliasView') as FormArray;
  }
  addAlias(text) {

   if(this.allAliasView === text){

   }else{
    this.allAliasView.push(this.fb.control(text));
   }
  }
  
  deleteAlias(text){
    this.allAliasView.removeAt(text);
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.AddBugForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  
  }

}
