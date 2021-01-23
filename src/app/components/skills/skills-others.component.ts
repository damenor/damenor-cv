import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-skills-others',
  template: `
    <app-card [title]="appService.skillsOthers.title">
      <app-progress-bar 
        *ngFor="let skill of appService.skillsOthers.items"
        [text]="skill.name"
        [percentage]="skill.percentage">
      </app-progress-bar>
    </app-card>
  `,
  styles: [``]
})
export class SkillsOthersComponent {

  constructor(
    public appService: AppService
  ) { }

}
