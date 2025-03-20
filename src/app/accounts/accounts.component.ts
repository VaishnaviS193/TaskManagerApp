import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DbAccessService } from '../db-access.service';
import { UserInfo } from '../user-info';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  
  standalone:false,
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  frmGroup:FormGroup;
  
  constructor(private fb:FormBuilder, private srv: DbAccessService, private router:Router){
    this.frmGroup = fb.group({
      uemail:new FormControl('', [Validators.required]),
      upassword:new FormControl('', [Validators.required]),
    });
  }

  OnLoginClick(){
    var uemail=this.frmGroup.controls['uemail'].value;
    var upassword=this.frmGroup.controls['upassword'].value;

    this.srv.GetAllUsers().subscribe({
      next:(res)=>{
        var AllUsers =<UserInfo[]>res;
        console.log(AllUsers);
        var FilterObj = AllUsers.find((u)=>(u.email==uemail && u.password==upassword));
        if(FilterObj!=undefined){
          console.log("Success");

          sessionStorage.setItem('LoggedInUserData', JSON.stringify(FilterObj));
          switch(FilterObj.role.toUpperCase()){
            case 'ADMIN':{
              this.router.navigate(['admindashboard']);
              break;
            }
            case 'PM':{
              this.router.navigate(['pmdashboard']);
              break;
            }
            case 'MEMBER':{
              this.router.navigate(['memberdashboard']);
              break;
            }
          }
        }

      },
      error:(err)=>{

      }
    })
  }
  

}
