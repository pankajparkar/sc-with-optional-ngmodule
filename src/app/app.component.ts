import { Component } from '@angular/core';

@Component({
  selector: 'sc-root',
  template: `
    <h1>Hello {{ title }}</h1>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'Angular';
}
