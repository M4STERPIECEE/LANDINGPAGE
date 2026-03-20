import { Component } from '@angular/core';
import { pageSectionEnter, staggerChildren } from '../../animations';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  animations: [pageSectionEnter, staggerChildren],
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent {}

