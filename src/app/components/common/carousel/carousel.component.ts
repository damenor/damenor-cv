import { 
  AfterViewInit, 
  Component, 
  ContentChildren, 
  Directive, 
  ElementRef, 
  Input, 
  QueryList, 
  TemplateRef, 
  ViewChild, 
  ViewChildren 
} from '@angular/core';
import { 
  animate, 
  AnimationBuilder, 
  AnimationPlayer, 
  style 
} from '@angular/animations';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Directive({
  selector: '[carouselItem]'
})
export class CarouselItemDirective {
  constructor(public tpl: TemplateRef<any>) { }
}

@Directive({
  selector: '.carousel__content-item'
})
export class CarouselItemElement {}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '500ms';
  @Input() showControls = true;
  @Input() topControls = false;

  currentPosition = 0;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    this.initWidthCarousel();
  }

  next() {
    let nextPosition = this.currentPosition + 1;
    if (nextPosition === this.items.length) nextPosition = 0;
    this.setCurrentPosition(nextPosition);
  }

  prev() {
    let backPosition = this.currentPosition - 1;
    if(backPosition < 0) backPosition = this.items.length - 1;
    this.setCurrentPosition(backPosition);
  }

  setCurrentPosition = (position: number) => {
    const percentage = -100 * position;
    this.currentPosition = position;
    this.loadAnimation(percentage);
  }

  private initWidthCarousel = () => {
    const width = this.items.length * 100;
    this.carousel.nativeElement.style.width = `${width}%`;
  }

  private loadAnimation(percentage: number) {
    percentage = percentage / this.items.length
    const animation = this.builder.build([
      animate(this.timing, style({ transform: `translateX(${percentage}%)` }))
    ]);
    const player: AnimationPlayer = animation.create(this.carousel.nativeElement);
    player.play();
  }

}
