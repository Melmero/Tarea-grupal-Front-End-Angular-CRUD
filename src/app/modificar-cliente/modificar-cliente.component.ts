import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {
  constructor(private router: Router, private dialogRef:MatDialogRef<ModificarClienteComponent>)
  { }

  ngOnInit():void{
  }

  usuarioModificado = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required)
  })

  onSubmit(){

  }

  cancelar(){
    this.dialogRef.close();
  }
}
