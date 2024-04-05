import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Musica } from '../../model/musica';
import { MusicaService } from '../../services/musica.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ListaFavorita } from '../../model/listaFavorita';
import { ListaFavoritaService } from '../../services/lista-favorita.service';



import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, UsuarioCadastro } from '../../model/usuario';


import { PlanoService } from '../../services/plano.service';
import { Plano } from '../../model/plano';





interface Food {
  value: string;
  viewValue: string;
}


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule, MatButtonModule, MatSelectModule],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [

    'nomeMusica',
    'duracaoMusica',
    'nomeAlbum',
    'nomeBanda',
    'estaFavorito',
  ];


  listas: ListaFavorita[] = [

  ];

  idLista!: string;



  dataSource = new MatTableDataSource<Musica>([]);

  constructor(private musicaService: MusicaService, private listaFavoritaService: ListaFavoritaService, private router: Router) {
    // Supondo que o JSON fornecido esteja armazenado em uma variável chamada jsonData

    // Definindo os dados na fonte de dados da tabela

  }

  ngOnInit(): void {






    const user = sessionStorage.getItem("user");

    if (user !== null) {
      this.listaFavoritaService.getListasFavoritasUsuario(user).subscribe(response => {
        console.log(response);
        this.listas = response;
      });
    } else {
      console.error("O usuário não está definido no sessionStorage.");
      // Ou adote outra abordagem apropriada para lidar com a falta do usuário.
    }





  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public buscarMusicas() {


    this.musicaService.BuscarTodasMusicas(this.idLista).subscribe(response => {
      console.log(response);
      this.dataSource.data = response;
    });


  }

  public favoritar(item: Musica) {

    if (item.estaFavorito == false) {
      this.listaFavoritaService.favoritar(item.idMusica, this.idLista).subscribe(response => {
        console.log(response);

      });
      item.estaFavorito = true;


    } else {

      this.listaFavoritaService.desfavoritar(item.idMusica, this.idLista).subscribe(response => {
        console.log(response);

      });

      item.estaFavorito = false;


    }



  }


}
