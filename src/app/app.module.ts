import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBugComponent } from './addbug/addbug.component';
import { ShowbugComponent } from './showbug/showbug.component';
import { DeletebugComponent } from './deletebug/deletebug.component';
import { UpdatebugComponent } from './updatebug/updatebug.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AddBugComponent,
    ShowbugComponent,
    DeletebugComponent,
    UpdatebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
