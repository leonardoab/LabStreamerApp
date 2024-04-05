import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musica } from '../model/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private url = "http://localhost:5149/api/Musica"

  constructor(private http: HttpClient) { }

  public BuscarTodasMusicas(id: string): Observable<Musica[]> {
    return this.http.get<Musica[]>(`${this.url}/BuscaMusicasCompleto?id=${id}`);

  }
}
