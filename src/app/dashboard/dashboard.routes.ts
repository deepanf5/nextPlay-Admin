import { Routes } from '@angular/router';
import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { UsersComponent } from '../users/users.component';
import { PaymentdetailsComponent } from '../paymentdetails/paymentdetails.component';
import { AddmovieComponent } from '../addmovie/addmovie.component';



export const routes: Routes = [
    {
        path:'movies',
        component:AllMoviesComponent
    },


 
];
