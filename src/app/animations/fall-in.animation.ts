import { trigger, transition, style, animate, AnimationMetadata, AnimationTriggerMetadata } from '@angular/animations';

export const fallInEnter: AnimationMetadata[] = [
  style({ opacity: '0', transform: 'translateY(100px)' }),
  animate('.4s .2s ease-in-out',
    style({ opacity: '1', transform: 'translateY(0)' })
  )
]

export const fallInLeave: AnimationMetadata[] = [
  style({ opacity: '1', transform: 'translateX(0)' }),
  animate('.3s ease-in-out',
    style({ opacity: '0', transform: 'translateX(-200px)' })
  ),
]

export const fallInTrigger: AnimationTriggerMetadata = trigger('fallIn', [
  transition(':enter', fallInEnter),
  transition(':leave', fallInLeave),
]);
