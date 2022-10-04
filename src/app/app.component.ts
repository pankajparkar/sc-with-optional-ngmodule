import { Component } from '@angular/core';

@Component({
  selector: 'sc-root',
  template: `<h1>Hello {{ title }}</h1>`,
  styles: [``]
})
export class AppComponent {
  title = 'Angular';
}
