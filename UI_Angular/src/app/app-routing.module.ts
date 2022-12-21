import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AddClienteComponent } from './components/Clientes/add-cliente/add-cliente.component';
import { ClienteListComponent } from './components/Clientes/cliente-list/cliente-list.component';
import { EditClienteComponent } from './components/Clientes/edit-cliente/edit-cliente.component';

const routes: Routes = [
  {
    path: '', 
    component: BienvenidaComponent
  },
  {
    path: 'lista',
    component: ClienteListComponent
  },
  {
    path: 'clientes/agregar',
    component: AddClienteComponent
  },
  {
    path: 'clientes/editar/:id',
    component: EditClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
