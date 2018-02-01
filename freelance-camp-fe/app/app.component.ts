import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `

  <h1>Navigation</h1>

  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: 'Freelance Bootcamp Dashboard';
}


// this is like the application.html.erb, sort of the template for the site, more flexibility

// whatever options passed in through the router are done so via the router outlet space