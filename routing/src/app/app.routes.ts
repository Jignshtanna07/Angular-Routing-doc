import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Admin } from './admin/admin';
import { WildCard } from './wild-card/wild-card';

export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path:'admin',
        component:Admin
    },
    {
        path:'**',
        title:'Page Not Found',
        component:WildCard
    }
];
