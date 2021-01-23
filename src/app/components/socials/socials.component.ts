import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-socials',
  template: `
    <div class="socials">
    <a *ngFor="let social of appService.socials" [href]="social.href" target="_blank">
      <fa-icon [icon]="social.icon"></fa-icon>
    </a>
  </div>
  `,
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {

  constructor(
    public appService: AppService
  ) { }

}
