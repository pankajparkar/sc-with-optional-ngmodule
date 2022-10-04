import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    },
    {
        path: 'roles',
        children: [
            {
                path: '',
                loadComponent: () => import('./roles/roles.component').then(m => m.RolesComponent)
            },
            {
                path: 'details/:id',
                loadComponent: () => import('./roles/details/details.component')
                    .then(m => m.RoleDetailsComponent),
            },
        ]
    },
    {
        path: 'product',
        loadComponent: () => import('./product/product.component').then(m => m.ProductComponent)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];