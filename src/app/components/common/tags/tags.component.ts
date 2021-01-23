import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  template: `
    <div class="tags">
      <p *ngFor="let item of items" class="tags__item">{{ item }}</p>
    </div>
  `,
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() items: string[];

}
