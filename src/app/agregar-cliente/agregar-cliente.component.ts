import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  event: boolean;

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarClienteComponent>) {
    this.event = false;
  }

  @HostListener('document:click', ['$event.target.id'])
  DocumentClick() {
    this.event = true;
  }

  ngOnInit(): void {
  }

  usuarioNuevo = new FormGroup({
    cedula: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })

  onSubmit() {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioNuevo.value.cedula,
        nombres: this.usuarioNuevo.value.nombres,
        apellidos: this.usuarioNuevo.value.apellidos,
        direccion: this.usuarioNuevo.value.direccion,
        edad: this.usuarioNuevo.value.edad
      },
      skipLocationChange: false,
      fragment: 'top'
    };

    this.dialogRef.close();
    this.redirectTo('/cliente', objToSend);
  }

  redirectTo(uri: string, objToSend: NavigationExtras) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri], { state: { datosCliente: objToSend, eventoBoton: this.event } }));
  }

  cancelar() {
    this.dialogRef.close();
  }

}
