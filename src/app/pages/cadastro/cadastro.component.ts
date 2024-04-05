import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, UsuarioCadastro } from '../../model/usuario';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { PlanoService } from '../../services/plano.service';
import { Plano } from '../../model/plano';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';




@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule, MatButtonModule, MatSelectModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);
  nome = new FormControl('', [Validators.required]);
  errorMessage = '';
  usuario!: Usuario;
  planoSelecionado!: string;
  planos: Plano[] = [];



  constructor(private planoService: PlanoService, private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.planoService.BuscarTodosPlanos().subscribe(response => {
      console.log(response);
      this.planos = response;
    });
  }


  public cadastrar() {

    let emailValue = this.email.getRawValue() as String;
    let senhaValue = this.senha.getRawValue() as String;
    let nomeValue = this.nome.getRawValue() as String;



    this.usuarioService.cadastrar(nomeValue, senhaValue, emailValue, this.planoSelecionado).subscribe(
      {
        next: (response) => {
          this.usuario = response;
          sessionStorage.setItem("user", this.usuario.id);
          this.router.navigate(["/home"]);
        },
        error: (e) => {
          if (e.error) {
            this.errorMessage = e.error.error;
          }
        }
      });





  }



}
