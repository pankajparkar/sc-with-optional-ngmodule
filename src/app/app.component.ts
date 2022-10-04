import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'sc-root',
  template: `
    <sc-navbar></sc-navbar>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
  ]
})
export class AppComponent { }
