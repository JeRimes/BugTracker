import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import component
import { AddBugComponent} from './addbug/addbug.component';
import { ShowbugComponent } from './showbug/showbug.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  {path: 'addbug',component:AddBugComponent},
  {path: 'showbug',component:ShowbugComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
