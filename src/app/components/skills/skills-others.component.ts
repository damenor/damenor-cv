import { Component } from '@angular/core';
import { AnimationMetadata } from '@angular/animations'

import { AppService } from '../../services/app.service';
import { scaleInEnter } from '../../animations';

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

  animation: AnimationMetadata[] = scaleInEnter;

  constructor(
    public appService: AppService
  ) { }

}
