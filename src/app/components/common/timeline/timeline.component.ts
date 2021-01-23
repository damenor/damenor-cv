import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() items;

  ngOnInit() {
    console.log(this.items)
  }

  isLeft = i => i%2 === 0;

}
