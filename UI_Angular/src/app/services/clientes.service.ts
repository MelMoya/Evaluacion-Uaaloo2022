import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  baseApiUrl : string = environment.baseApiUrl;
  
  constructor(private http : HttpClient) { }

  getAllClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseApiUrl + "/cliente");
  }

  addCliente(addClienteRquest : Cliente) : Observable <Cliente> {
    return this.http.post<Cliente>(this.baseApiUrl + "/cliente", addClienteRquest);
  }

  getCliente(id : number) : Observable<Cliente> {
    return this.http.get<Cliente>(this.baseApiUrl + "/cliente/"+id)
  }

  updateCliente(id : number, updateClienteRequest : Cliente) : Observable <Cliente>{
    return this.http.put<Cliente>(this.baseApiUrl + "/cliente/" + id, updateClienteRequest);
  }

  deleteCliente(id : number) : Observable<Cliente>{
    return this.http.delete<Cliente>(this.baseApiUrl + "/cliente/" + id);
  }
}

