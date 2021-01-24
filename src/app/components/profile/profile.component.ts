import { AnimationMetadata } from '@angular/animations';
import { Component } from '@angular/core';

import { fallInEnter, scaleInEnter } from '../../animations';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  animation: AnimationMetadata[] = fallInEnter;

  constructor(
    public appService: AppService
  ) { }

}
