import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent {

  detallesCliente : Cliente = {
    id: 0,
    name: " ",
    surname: " ",
    adress: " "
  }
  
  constructor(private route: ActivatedRoute, private clienteService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        const id = params.get("id");
        if(id){
          this.clienteService.getCliente(Number(id)).subscribe({
            next: (response) => {
              this.detallesCliente = response;
            }
          })
        }
      }
    })
  }

  updateCliente(){
    this.clienteService.updateCliente(this.detallesCliente.id, this.detallesCliente).subscribe({
      next : (response) => {
        this.router.navigate(["lista"]);
      }
    });
  }

  deleteCliente(id : number){
    this.clienteService.deleteCliente(id).subscribe({
      next : (response => {
        this.router.navigate(["lista"])
      })
    });
  }
}
