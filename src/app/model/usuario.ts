export interface Usuario {
    id: string;
    nome?: String;
    email?: String;
    dtNascimento?: String;
}


export interface UsuarioCadastro {
    idPlano?: String;
    nome?: String;
    email?: String;
    senha?: String;
}