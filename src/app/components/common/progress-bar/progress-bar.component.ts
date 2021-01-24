import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';

@Component({
  selector: 'app-progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  template: `
    <div class="progress-bar">
      <div class="progress-bar__value" #bar [ngStyle]="{ 'width.%': percentage }">
        <p class="progress-bar__value-text">{{ text }}</p>
      </div>
    </div>
  `
})
export class ProgressBarComponent implements AfterViewInit {

  @ViewChild('bar') private bar: ElementRef;
  @Input() text: string = '';
  @Input() percentage: number = 0;

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    const animation = this.builder.build([
      animate('700ms ease', style({ width: `${this.percentage}%` }))
    ])
    const player: AnimationPlayer = animation.create(this.bar.nativeElement);
    player.play();
  }

}
