import { trigger, state, style, transition, animate, AnimationMetadata, AnimationTriggerMetadata } from '@angular/animations';

const styleAll = style({ opacity: 1, transform: 'scale(1)' });

export const scaleInEnter: AnimationMetadata[] = [
  style({ opacity: 0, transform: 'scale(0.9)' }),
  animate( '1s ease', styleAll),
]

export const scaleInLeave: AnimationMetadata[] = [
  animate( '500ms ease', style({ opacity: 0, transform: 'scale(1.2)' })),
]

export const scaleInTrigger: AnimationTriggerMetadata = trigger('scaleIn', [
  state( '*', styleAll),
  transition(':enter', scaleInEnter),
  transition(':leave', scaleInLeave),
]);
