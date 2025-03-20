import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { PmDashBoardComponent } from './pm-dash-board/pm-dash-board.component';
import { MemberDashBoardComponent } from './member-dash-board/member-dash-board.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AdminDashBoardComponent,
    PmDashBoardComponent,
    MemberDashBoardComponent,
    AddnewuserComponent,
    UserListComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
