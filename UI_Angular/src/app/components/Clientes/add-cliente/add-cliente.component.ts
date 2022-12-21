import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})

export class AddClienteComponent {

  addClienteRequest : Cliente  = {
    id: 0,
    name: " ",
    surname: " ",
    adress: " "
  }
  
  constructor(private clienteService : ClientesService, private router: Router){ }

  ngOnInit(): void { 

  }

  

  addCliente(){
    this.clienteService.addCliente(this.addClienteRequest).subscribe({
      next:(cliente => {
        this.router.navigate(["lista"])
      })
    })
  }

}
