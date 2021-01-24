import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations'
import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';

export enum EScrollAnimation {
  normal = 'normal',
  scrolled = 'scrolled'
}

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {

  animationPlayer: AnimationPlayer;
  state = EScrollAnimation.normal;

  @Input('scrollAnimation') animation: AnimationMetadata[]

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop - window.innerHeight * 0.9;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition && this.state !== EScrollAnimation.scrolled) {
        this.state = EScrollAnimation.scrolled;
        this.animationPlayer?.play();
      } 

    }

  constructor(
    public el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit() {
    this.createAnimation();
  }
  
  ngOnDestroy() {
    this.animationPlayer?.destroy();
  }
  
  private createAnimation = () => {    
    if(this.animation) {
      const factory = this.animationBuilder.build(this.animation);
      this.animationPlayer = factory.create(this.el.nativeElement);
      this.animationPlayer.pause();
    }
  }

}
