import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sc-navbar',
  template: `
  <mat-toolbar color="primary">
    <span routerLink="/home">Lazy Loading Recipes</span>
    <button mat-button routerLink="/dashboard">Dashboard</button>
    <button mat-button routerLink="/product">Product</button>
    <button mat-button routerLink="/roles">Roles</button>
  </mat-toolbar>
  `,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class NavbarComponent {

}
