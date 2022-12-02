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
    loadChildren: () => import('./dashboard/routes').then(i => i.default),
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/routes').then(i => i.default),
  },
  {
    path: 'product',
    loadChildren: () => import('./product/routes').then(m => m.default)
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
