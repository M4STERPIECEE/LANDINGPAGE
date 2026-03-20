import { Component } from '@angular/core';
import { pageSectionEnter, staggerChildren } from '../../animations';

@Component({
  selector: 'app-vision',
  standalone: true,
  animations: [pageSectionEnter, staggerChildren],
  templateUrl: './vision.component.html'
})
export class VisionComponent {}

