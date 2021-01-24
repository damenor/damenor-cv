import { animate, state, style, transition, trigger } from '@angular/animations'

export const fadeIn: any = trigger('fadeIn', [
  // Cualquier estado
  state(
    '*',
    style({
      opacity: 1,
    })
  ),
  // Cuando el component cargue
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '2800ms linear',
      style({
        opacity: 1,
      })
    ),
  ]),
  // Cuando se destruye el componente
  transition(':leave', [
    animate(
      '2500ms linear',
      style({
        opacity: 0,
      })
    ),
  ]),
])

export const fadeOut: any = trigger('fadeOut', [
  // Cualquier estado
  state(
    '*',
    style({
      opacity: 0,
    })
  ),
  // Cuando el component cargue
  transition(':enter', [
    style({
      opacity: 1,
    }),
    animate(
      '1500ms linear',
      style({
        opacity: 0,
      })
    ),
  ]),
])

export const enterLeft: any = trigger('enterLeft', [
  // Cualquier estado
  state(
    '*',
    style({
      marginLeft: 'auto',
    })
  ),
  // Cuando el component cargue
  transition(':enter', [
    style({
      marginLeft: '-150%',
    }),
    animate(
      '800ms ease',
      style({
        marginLeft: '0',
      })
    ),
  ]),
  // Cuando se destruye el componente
  transition(':leave', [
    animate(
      '500ms ease',
      style({
        right: '100%',
      })
    ),
  ]),
])

export const scaleIn: any = trigger('scaleIn', [
  // Cualquier estado
  state(
    '*',
    style({
      opacity: 1,
      transform: 'scale(1)',
    })
  ),
  // Cuando el component cargue
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(.9)',
    }),
    animate(
      '1s ease',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
  ]),
  // Cuando se destruye el componente
  transition(':leave', [
    animate(
      '500ms ease',
      style({
        opacity: 0,
        transform: 'scale(1.2)',
      })
    ),
  ]),
])

export const scaleOut: any = trigger('scaleOut', [
  // Cualquier estado
  state(
    '*',
    style({
      transform: 'scale(1)',
    })
  ),
  // Cuando el component cargue
  transition(':enter', [
    style({
      transform: 'scale(1.3)',
    }),
    animate(
      '1.5s ease',
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
  // Cuando se destruye el componente
  transition(':leave', [
    animate(
      '500ms 150ms ease',
      style({
        transform: 'scale(.8)',
      })
    ),
  ]),
])

export const moveIn = trigger('moveIn', [
  state('void', style({ position: 'fixed', width: '100%' })),
  state('*', style({ position: 'fixed', width: '100%' })),
  transition(':enter', [
    style({ opacity: '0', transform: 'translateX(100px)' }),
    animate(
      '.6s ease-in-out',
      style({ opacity: '1', transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: '1', transform: 'translateX(0)' }),
    animate(
      '.3s ease-in-out',
      style({ opacity: '0', transform: 'translateX(-200px)' })
    ),
  ]),
])

export const fallIn = trigger('fallIn', [
  transition(':enter', [
    style({ opacity: '0', transform: 'translateY(40px)' }),
    animate(
      '.4s .2s ease-in-out',
      style({ opacity: '1', transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: '1', transform: 'translateX(0)' }),
    animate(
      '.3s ease-in-out',
      style({ opacity: '0', transform: 'translateX(-200px)' })
    ),
  ]),
])

export const moveInLeft = trigger('moveInLeft', [
  transition(':enter', [
    style({ opacity: '0', transform: 'translateX(-100px)' }),
    animate(
      '.6s .2s ease-in-out',
      style({ opacity: '1', transform: 'translateX(0)' })
    ),
  ]),
])

export const animations = [fadeIn, fadeOut, enterLeft, scaleIn, scaleOut, moveIn, moveInLeft, fallIn]
