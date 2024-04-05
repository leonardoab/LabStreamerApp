import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plano } from '../model/plano';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {



  private url = "http://localhost:5149/api/Plano"

  constructor(private http: HttpClient) { }

  public BuscarTodosPlanos(): Observable<Plano[]> {
    return this.http.get<Plano[]>(`${this.url}/BuscarTodosPlanos`);

  }
}
