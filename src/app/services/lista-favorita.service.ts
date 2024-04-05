import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaFavorita } from '../model/listaFavorita';
import { HttpClient } from '@angular/common/http';
import { Musica } from '../model/musica';

@Injectable({
  providedIn: 'root'
})
export class ListaFavoritaService {

  private url = "http://localhost:5149/api/ListaFavorita"

  constructor(private httpClient: HttpClient) { }


  public getListasFavoritasUsuario(id: string): Observable<ListaFavorita[]> {
    return this.httpClient.get<ListaFavorita[]>(`${this.url}/BuscarListaUsuario/?id=${id}`);
  }


  public favoritar(idMusica: String, idListaFavorita: String): Observable<Musica> {
    return this.httpClient.post<Musica>(`${this.url}/AssociarMusicaListaFavorita?idMusica=${idMusica}&idListaFavorita=${idListaFavorita}`, {
      idMusica: idMusica,
      idListaFavorita: idListaFavorita

    });
  }


  public desfavoritar(idMusica: String, idListaFavorita: String): Observable<Musica> {
    return this.httpClient.post<Musica>(`${this.url}/DesssociarMusicaListaFavorita?idMusica=${idMusica}&idListaFavorita=${idListaFavorita}`, {
      idMusica: idMusica,
      idListaFavorita: idListaFavorita

    });
  }

}
