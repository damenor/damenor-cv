import { animate, AnimationMetadata, style } from '@angular/animations';

export const enterLeftEnter: AnimationMetadata[] = [
  style({  opacity: 0, transform: 'translateX(100px)' }),
  animate('700ms ease-in-out', style({
    opacity: 1,
    transform: 'translateY(0)'
  }))
]
