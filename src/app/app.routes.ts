import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailBandaComponent } from './pages/detail-banda/detail-banda.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'detail/:id',
        component: DetailBandaComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent

    },
];
