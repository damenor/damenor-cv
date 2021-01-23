import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <app-card  class="timeline">
      <app-carousel [topControls]="true">
        <app-experience-jobs  *carouselItem></app-experience-jobs>
        <app-experience-academy  *carouselItem></app-experience-academy>
      </app-carousel>
    </app-card>
    
  `,
  styles: [
  ]
})
export class ExperienceComponent {}