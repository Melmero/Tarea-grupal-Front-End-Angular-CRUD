import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Componentes importados librería Angular
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

//Componentes creados manualmente - Proyecto.
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component'
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageInicialComponent,
    AgregarClienteComponent,
    ModificarClienteComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule,
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
