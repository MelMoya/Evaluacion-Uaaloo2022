import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './components/Clientes/cliente-list/cliente-list.component';
import { AddClienteComponent } from './components/Clientes/add-cliente/add-cliente.component';
import { FormsModule } from '@angular/forms';
import { EditClienteComponent } from './components/Clientes/edit-cliente/edit-cliente.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    AddClienteComponent,
    EditClienteComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
