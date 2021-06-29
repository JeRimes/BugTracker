import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import component
import { AddBugComponent} from './addbug/addbug.component';
import { ShowbugComponent } from './showbug/showbug.component';
import { AppComponent } from './app.component';

import { UpdatebugComponent } from './updatebug/updatebug.component';
const routes: Routes = [
  {path: '' , redirectTo: 'showbug', pathMatch: 'full'},
  {path: 'addbug/:id',component:AddBugComponent},
  {path: 'showbug',component:ShowbugComponent},
  {path: 'update/:id',component:UpdatebugComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
