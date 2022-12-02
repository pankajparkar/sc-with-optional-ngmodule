import { Routes } from '@angular/router';
import { RoleDetailsComponent } from '../roles/details/details.component';
import { RolesComponent } from '../roles/roles.component';

export default [
    {
        path: '',
        component: RolesComponent,
    },
    {
        path: 'details/:id',
        loadComponent: () => RoleDetailsComponent
    },
];