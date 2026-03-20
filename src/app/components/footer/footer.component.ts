import { Component } from '@angular/core';
import { pageSectionEnter, staggerChildren } from '../../animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  animations: [pageSectionEnter, staggerChildren],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

