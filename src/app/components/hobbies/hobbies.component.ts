import { animate, AnimationMetadata, style } from '@angular/animations'
import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-hobbies',
  template: `
    <div [scrollAnimation]="animation">
      <app-card [title]="appService.hobbies.title">
        <app-tags [items]="appService.hobbies.items"></app-tags>
      </app-card>
    </div>
  `,
  styles: [``]
})
export class HobbiesComponent {

  animation: AnimationMetadata[] = [
    style({  opacity: 0, transform: 'scale(0)' }),
    animate('700ms ease-in-out', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
  ]

  constructor(
    public appService: AppService
  ) { }

}
