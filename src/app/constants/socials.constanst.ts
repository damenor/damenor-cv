import { faGithub, faLinkedin, faNpm, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ISocial } from '../interfaces/social.interface'; 

export const SOCIALS: ISocial[] = [
  { icon: faLinkedin, href: 'www.linkedin.com/in/damenor' },
  { icon: faGithub, href: 'https://github.com/damenor' },
  { icon: faNpm, href: 'https://www.npmjs.com/~damenor' },
  { icon: faGooglePlay, href: 'https://play.google.com/store/apps/developer?id=dmenor' },
  { icon: faEnvelope, href: 'mailto:davidmenormolina@gmail.com' },
];
