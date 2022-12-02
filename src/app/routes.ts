import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/routes'),
    },
    {
        path: 'roles',
        loadChildren: () => import('./roles/routes'),
    },
    {
        path: 'product',
        loadChildren: () => import('./product/routes')
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];
