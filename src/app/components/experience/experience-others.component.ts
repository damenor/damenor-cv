import { AnimationMetadata } from '@angular/animations'
import { Component, OnInit } from '@angular/core';

import { fallInEnter } from '../../animations';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-experience-others',
  template: `
    <div [scrollAnimation]="animation">
      <app-card [title]="options.title">
        <app-timeline [items]="options.items"></app-timeline>
      </app-card>
    </div>
  `,
  styles: [
  ]
})
export class ExperienceOthersComponent implements OnInit {

  options: { title: string, items: any[] };

  animation: AnimationMetadata[] = fallInEnter;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init = () => this.options = this.appService.experiences.others;

}