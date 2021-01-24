import { AnimationMetadata } from '@angular/animations'
import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';
import { scaleInEnter } from '../../animations';

@Component({
  selector: 'app-socials',
  template: `
    <div class="socials" [scrollAnimation]="animation">
      <a *ngFor="let social of appService.socials" [href]="social.href" target="_blank">
        <fa-icon [icon]="social.icon"></fa-icon>
      </a>
    </div>
  `,
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {

  animation: AnimationMetadata[] = scaleInEnter;

  constructor(
    public appService: AppService
  ) { }

}
