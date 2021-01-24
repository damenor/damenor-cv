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
  state = EScrollAnimation.scrolled;
  componentPosition: number;
  offset = 0.90;

  @Input('scrollAnimation') animation: AnimationMetadata[];

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= this.componentPosition && this.state !== EScrollAnimation.scrolled) {
        this.state = EScrollAnimation.scrolled;
        this.animationPlayer?.play();
      } 

    }

  constructor(
    public el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit() {
    this.componentPosition = this.el.nativeElement.offsetTop - this.getOffset();
    this.createAnimation();
  }
  
  ngOnDestroy() {
    this.animationPlayer?.destroy();
  }
  
  private createAnimation = () => {    
    if(this.animation && this.componentPosition > (window.innerHeight / 2)) {
      this.state = EScrollAnimation.normal;
      const factory = this.animationBuilder.build(this.animation);
      this.animationPlayer = factory.create(this.el.nativeElement);
      this.animationPlayer.pause();
    }
  }

  private getOffset = () => window.innerHeight * this.offset

}
