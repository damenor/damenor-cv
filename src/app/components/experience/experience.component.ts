import { AnimationMetadata } from '@angular/animations'
import { Component } from '@angular/core';

import { fallInEnter } from '../../animations'
@Component({
  selector: 'app-experience',
  template: `
    <ng-container>
      <div class="card" [scrollAnimation]="scrollAnimation">
        <app-carousel>
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

  scrollAnimation: AnimationMetadata[] = fallInEnter
  
}