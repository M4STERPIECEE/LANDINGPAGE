import { Component } from '@angular/core';
import { pageSectionEnter, softRise, staggerChildren } from '../../animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  animations: [pageSectionEnter, softRise, staggerChildren],
  templateUrl: './hero.component.html'
})
export class HeroComponent {}

