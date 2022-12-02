import { Component } from '@angular/core';

@Component({
  selector: 'sc-root',
  template: `
  <sc-navbar></sc-navbar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
