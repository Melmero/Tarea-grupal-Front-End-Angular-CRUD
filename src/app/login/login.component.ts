import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  alert: boolean = false;
  
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){

<<<<<<< HEAD
    if (this.usuarioLogin.value.usuario=="melanygg" && this.usuarioLogin.value.password=="Melmero")
=======
    if (this.usuarioLogin.value.usuario=="admin" && this.usuarioLogin.value.password=="admin123")
>>>>>>> 32a31bd5b5fc42f26ba5f4cdea2f2ce591c3a844
    {      
      this.router.navigate(['/cliente']);      
      this.dialogRef.close(); 
    }
    else
    {
      this.alert = true;      
      setTimeout(() => this.alert=false, 4000);      
    }


  }

}