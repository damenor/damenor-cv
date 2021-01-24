import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppService } from './services/app.service';
import { animations } from './utils/animations.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ ...animations, ]
})
export class AppComponent {

  faBars = faBars;
  
  constructor(
    public appService: AppService
  ) { }

}
