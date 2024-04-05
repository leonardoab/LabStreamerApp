import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioCadastro } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://localhost:5149/api/Usuario"

  constructor(private http: HttpClient) { }

  public autenticar(email: String, senha: String): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/Autenticar`, {
      email: email,
      senha: senha
    });
  }

  public cadastrar(nome: String, senha: String, email: String, planoSelecionado: String): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/Criar`, {
      idPlano: planoSelecionado,
      nome: nome,
      email: email,
      senha: senha

    });
  }

}
