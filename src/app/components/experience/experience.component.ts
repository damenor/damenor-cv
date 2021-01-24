import { animate, AnimationMetadata, style } from '@angular/animations'
import { Component } from '@angular/core';
@Component({
  selector: 'app-experience',
  template: `
    <ng-container>
      <div class="card" [scrollAnimation]="animation">
        <app-carousel [topControls]="true">
          <app-experience-jobs  *carouselItem></app-experience-jobs>
          <app-experience-academy  *carouselItem></app-experience-academy>
        </app-carousel>
      </div>
    </ng-container>
  `,
  styles: [],
  animations: []
})
export class ExperienceComponent {

  animation: AnimationMetadata[] = [
    style({  opacity: 0, transform: 'translateY(10vh)' }),
    animate('700ms ease-in-out', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
  ]
  
}