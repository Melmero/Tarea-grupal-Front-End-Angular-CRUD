import { Component, OnInit, ElementRef, Inject, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteInterface } from '../interfaces/ClienteInterface';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {
  event: boolean;

  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarClienteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.event = false;
    this.usuarioModificado.patchValue({
      cedula: data.client.cedula,
      nombres: data.client.nombres,
      apellidos: data.client.apellidos,
      direccion: data.client.direccion,
      edad: data.client.edad,
    });
  }

  @HostListener('document:click', ['$event.target.id'])
  DocumentClick() {
    this.event = true;
  }

  usuarioModificado = new FormGroup({
    cedula: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  onSubmit(clt: ClienteInterface) {
    let objTosend: NavigationExtras = {
      queryParams: {
        cedula: clt.cedula,
        nombres: clt.nombres,
        apellidos: clt.apellidos,
        direccion: clt.direccion,
        edad: clt.edad,
      },
      skipLocationChange: false,
      fragment: 'top',
    };

    this.dialogRef.close();
    this.redirecTo('/cliente', objTosend);
  }

  redirecTo(uri: string, objTosend: NavigationExtras) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri], { state: { datosNuevos: objTosend, datosViejos: this.usuarioModificado.value, eventoBoton: this.event } }));
  }

  cancelar() {
    this.dialogRef.close();
  }
}