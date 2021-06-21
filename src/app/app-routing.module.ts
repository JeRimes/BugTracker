import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import component
import { AddBugComponent} from './addbug/addbug.component';
import { ShowbugComponent } from './showbug/showbug.component';
import { AppComponent } from './app.component';
import { DeletebugComponent } from './deletebug/deletebug.component';
import { UpdatebugComponent } from './updatebug/updatebug.component';
const routes: Routes = [
  {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  {path: 'addbug',component:AddBugComponent},
  {path: 'showbug',component:ShowbugComponent},
  {path: 'delete',component:DeletebugComponent},
  {path: 'delete/:id',component:DeletebugComponent},
  {path: 'update',component:DeletebugComponent},
  {path: 'update/:id',component:UpdatebugComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
