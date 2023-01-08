import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  filtro: any;
  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'direccion', 'edad', 'accion']

  data = [{
    cedula: '0151245245',
    nombres: 'Andrés Luis',
    apellidos: 'Carvajal Lozano',
    direccion: 'Quito, Ecuador',
    edad: 50
  },
  {
    cedula: '0954658913',
    nombres: 'Jorge Luis',
    apellidos: 'Charco Aguirre',
    direccion: 'Guayaquil, Ecuador',
    edad: 36
  },
  {
    cedula: '0957962158',
    nombres: 'Andrea Lisbeth',
    apellidos: 'Romero Haro',
    direccion: 'Guayaquil, Ecuador',
    edad: 45
  }
  ];

  nuevoCliente: any;
  nav: any;

  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;

    if (this.nuevoCliente != null) {
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }

  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }

  openDialogAgregar() {
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }

  openDialogModificar(element: ClienteInterface) {
    this.dialog.open(ModificarClienteComponent, {
      width: '50%', data: { client: element, tabla: this.dataSource }
    })
  }

  filtrar() {
    this.dataSource.filter = this.filtro;
  }
}
