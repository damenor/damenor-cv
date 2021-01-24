import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISocial } from '../interfaces/social.interface';

import { HOBBIES, SOCIALS, SKILLS, EXPERIENCIES } from '../constants/data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  hobbies = HOBBIES;
  socials: ISocial[] = SOCIALS;
  skillsTecnicals = SKILLS.tecnicals;
  skillsOthers = SKILLS.others;
  experiences = EXPERIENCIES;

  constructor(
    private http: HttpClient
  ) {}

  Init = () => new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 500));

  downloadCV = () => {
    this.http.get('/assets/downloads/cv.txt', { responseType: 'blob' })
      .subscribe(blob => {
        const a = document.createElement('a');
        const objctUrl = URL.createObjectURL(blob);
        a.href = objctUrl;
        a.download = 'cv_david_menor_molina.pdf'
        a.click();
        URL.revokeObjectURL(objctUrl);
      });
  }

}
