import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-experience-jobs',
  template: `
    <app-card [title]="options.title">
      <app-timeline [items]="options.items"></app-timeline>
    </app-card>
    
  `,
  styles: [
  ]
})
export class ExperienceJobsComponent implements OnInit {

  options: { title: string, items: any[] }

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init = () => this.options = this.appService.experiences.jobs;

}
