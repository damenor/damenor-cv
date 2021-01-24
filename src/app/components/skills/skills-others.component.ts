import { Component } from '@angular/core';
import { animate, AnimationMetadata, style } from '@angular/animations'

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-skills-others',
  template: `
    <div [scrollAnimation]="animation">
      <app-card [title]="appService.skillsOthers.title">
        <app-progress-bar 
          *ngFor="let skill of appService.skillsOthers.items"
          [text]="skill.name"
          [percentage]="skill.percentage">
        </app-progress-bar>
      </app-card>
    </div>
  `,
  styles: [``]
})
export class SkillsOthersComponent {

  animation: AnimationMetadata[] = [
    style({  opacity: 0, transform: 'translateX(-25vh)' }),
    animate('700ms ease-in-out', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
  ]

  constructor(
    public appService: AppService
  ) { }

}
