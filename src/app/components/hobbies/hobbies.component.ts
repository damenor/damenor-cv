import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-hobbies',
  template: `
    <app-card [title]="appService.hobbies.title">
      <app-tags [items]="appService.hobbies.items"></app-tags>
    </app-card>
  `,
  styles: [``]
})
export class HobbiesComponent {

  constructor(
    public appService: AppService
  ) { }

}
