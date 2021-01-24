import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { 
  CarouselComponent, 
  CarouselItemDirective,
} from './common/carousel/carousel.component';
import { CardComponent } from './common/card/card.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProgressBarComponent } from './common/progress-bar/progress-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsTecnicalComponent } from './skills/skills-tecnical.component';
import { SkillsOthersComponent } from './skills/skills-others.component';
import { TagsComponent } from './common/tags/tags.component';
import { TimelineComponent } from './common/timeline/timeline.component';
import { ExperienceAcademyComponent } from './experience/experience-academy.component';
import { ExperienceJobsComponent } from './experience/experience-jobs.component';
import { ExperienceOthersComponent } from './experience/experience-others.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialsComponent } from './socials/socials.component';
import { BtnDownloadCvComponent } from './btn-download-cv/btn-download-cv.component';

import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

const exportComponents = [
  BtnDownloadCvComponent,
  CarouselComponent,
  CarouselItemDirective,
  CardComponent,
  HobbiesComponent,
  ProfileComponent,
  ProgressBarComponent,
  SkillsTecnicalComponent,
  SkillsOthersComponent,
  TagsComponent,
  TimelineComponent,
  ExperienceComponent,
  ExperienceOthersComponent,
  SocialsComponent,
];
const internalComponents = [
  ExperienceAcademyComponent,
  ExperienceJobsComponent,
];

@NgModule({
  declarations: [
    ...exportComponents,
    ...internalComponents,
    ScrollAnimationDirective
  ],
  exports: [
    ...exportComponents,
    FontAwesomeModule,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class ComponentsModule { }
