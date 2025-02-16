import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { UsersComponent } from './users/users.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { AddmovieComponent } from './addmovie/addmovie.component';


export const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        children:[
            {
                path:'movies',
                component:AllMoviesComponent
            },
            {
                path:'movies',component:AllMoviesComponent
            },
            {
                path:'users',component:UsersComponent
            },
            {
                path:'payments',component:PaymentdetailsComponent
            },
            {
                path:'add-movie',component:AddmovieComponent
            }
        ]

    },
];
