import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
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

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
