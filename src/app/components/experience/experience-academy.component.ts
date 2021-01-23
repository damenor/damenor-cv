import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-experience-academy',
  template: `
    <app-card [title]="options.title">
      <app-timeline [items]="options.items"></app-timeline>
    </app-card>
    
  `,
  styles: [
  ]
})
export class ExperienceAcademyComponent implements OnInit {

  options: { title: string, items: any[] }

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init = () => this.options = this.appService.experiences.academy;

}