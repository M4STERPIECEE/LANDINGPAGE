import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const entranceEasing = 'cubic-bezier(0.16, 1, 0.3, 1)';

export const pageSectionEnter = trigger('pageSectionEnter', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(24px)' }),
    animate(`720ms ${entranceEasing}`, style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const softRise = trigger('softRise', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(18px) scale(0.985)' }),
    animate(`680ms 120ms ${entranceEasing}`, style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
  ]),
]);

export const staggerChildren = trigger('staggerChildren', [
  transition(':enter', [
    query(
      '[data-stagger-item]',
      [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        stagger(120, [animate(`620ms ${entranceEasing}`, style({ opacity: 1, transform: 'translateY(0)' }))]),
      ],
      { optional: true },
    ),
  ]),
]);
