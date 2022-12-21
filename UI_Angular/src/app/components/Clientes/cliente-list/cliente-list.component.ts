import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{

  clientes: Cliente[] = [];
  constructor(private clienteService: ClientesService, private router: Router){ }
  
  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe({
      next : (clientes) => {
        this.clientes = clientes;
      },
      error : (response) => {
        console.log(response);
      }
      
    })
    //throw new Error('Method not implemented.');
  }

  

}

