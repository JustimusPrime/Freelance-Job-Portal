import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: 'Freelance Bootcamp Dashboard';
}


// this is like the application.html.erb, sort of the template for the site, more flexibility

// whatever options passed in through the router are done so via the router outlet space