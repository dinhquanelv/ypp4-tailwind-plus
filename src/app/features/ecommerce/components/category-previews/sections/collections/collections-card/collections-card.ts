import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collections-card',
  imports: [CommonModule],
  templateUrl: './collections-card.html',
})
export class CollectionsCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() layout: 'layout1' | 'layout2' = 'layout1';
}
