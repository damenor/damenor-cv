import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppService } from './services/app.service';
import { fallInTrigger, scaleInTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fallInTrigger, scaleInTrigger ]
})
export class AppComponent {

  faBars = faBars;
  
  constructor(
    public appService: AppService
  ) { }

}
