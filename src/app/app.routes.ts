import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'dashboard',
        loadComponent:() => import('./dashboard/dashboard.component').then(d => d.DashboardComponent)
    }
];
