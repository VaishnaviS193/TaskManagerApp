import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { PmDashBoardComponent } from './pm-dash-board/pm-dash-board.component';
import { MemberDashBoardComponent } from './member-dash-board/member-dash-board.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';

const routes: Routes = [
  {path:"login", component:AccountsComponent},
  {path:'admindashboard', component:AdminDashBoardComponent},
  {path:'pmdashboard', component:PmDashBoardComponent},
  {path:'memberdashboard', component:MemberDashBoardComponent},
  {path:'addnewuser', component:AddnewuserComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
