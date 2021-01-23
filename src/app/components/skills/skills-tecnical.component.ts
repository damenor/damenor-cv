import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-skills-tecnical',
  template: `
    <app-carousel>
      <ng-container *ngFor="let carousel of carousels">
        <app-card [title]="appService.skillsTecnicals.title" *carouselItem>
          <app-progress-bar 
            *ngFor="let skill of carousel"
            [text]="skill.name"
            [percentage]="skill.percentage">
          </app-progress-bar>
        </app-card>
      </ng-container>
    </app-carousel>
  `,
  styles: [``]
})
export class SkillsTecnicalComponent implements OnInit {

  private numberPerCarousel = 5;
  carousels = [];

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
    this.createCarousels();
  }

  private createCarousels = () => {
    let count = 0;
    let carousel = [];
    this.appService.skillsTecnicals.items.map((item, i) => {
      carousel = [...carousel, item];
      count++;
      if (count >= this.numberPerCarousel || this.isLast(i)) {
        this.addCarousel(carousel);
        count = 0;
        carousel = [];
      }
    });
  }

  private addCarousel = carousel => this.carousels = [...this.carousels, carousel];

  private isLast = i => i === this.appService.skillsTecnicals.items.length - 1;

}
