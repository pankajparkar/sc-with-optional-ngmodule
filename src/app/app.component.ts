import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'sc-root',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
  ],
  template: `
  <sc-navbar></sc-navbar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
