import { Component } from '@angular/core';
import { softRise } from '../../animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  animations: [softRise],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}

