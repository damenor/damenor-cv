import { animate, AnimationMetadata, style } from '@angular/animations';
import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';
import { scaleInEnter } from '../../animations';

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

  animation: AnimationMetadata[] = scaleInEnter;

  constructor(
    public appService: AppService
  ) { }

}
