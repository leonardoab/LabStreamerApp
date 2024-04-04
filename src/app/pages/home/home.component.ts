import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Musica } from '../../model/musica';
import { MusicaService } from '../../services/musica.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

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
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule, MatSelectModule],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [

    'nomeMusica',
    'duracaoMusica',
    'nomeAlbum',
    'nomeBanda',
    'estaFavorito',
  ];


  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];




  dataSource = new MatTableDataSource<Musica>([]);

  constructor(private musicaService: MusicaService, private router: Router) {
    // Supondo que o JSON fornecido esteja armazenado em uma variável chamada jsonData

    // Definindo os dados na fonte de dados da tabela

  }

  ngOnInit(): void {
    this.musicaService.BuscarTodasMusicas().subscribe(response => {
      console.log(response);
      this.dataSource.data = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
