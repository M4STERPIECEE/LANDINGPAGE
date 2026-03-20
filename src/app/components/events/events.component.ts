import { Component } from '@angular/core';
import { pageSectionEnter, staggerChildren } from '../../animations';

@Component({
  selector: 'app-events',
  standalone: true,
  animations: [pageSectionEnter, staggerChildren],
  templateUrl: './events.component.html'
})
export class EventsComponent {}

