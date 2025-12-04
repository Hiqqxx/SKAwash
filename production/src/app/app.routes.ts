import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { CreateComponent } from './pages/create/create';
import { SuportComponent } from './pages/suport/suport';
import { HistoricoComponent } from './pages/historico/historico';
import { MachineComponent } from './pages/machine/machine';


//todas as rotas do site
export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    { 
        path: 'create', component: CreateComponent
    },
    {
        path: 'suport', component: SuportComponent
    },
    {
        path: 'historico', component: HistoricoComponent
    },
    {
        path: '', 
        redirectTo: 'login', pathMatch: 'full'
    },
    {
     path: 'maquina/:id',
    component: MachineComponent
    },
];


