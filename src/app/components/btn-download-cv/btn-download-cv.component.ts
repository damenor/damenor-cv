import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-btn-download-cv',
  template: `
    <button class="btn-download-cv" (click)="appService.downloadCV()">Descargar CV</button>
  `,
  styleUrls: ['./btn-download-cv.component.scss']
})
export class BtnDownloadCvComponent {

  constructor(
    public appService: AppService
  ) { }

}
