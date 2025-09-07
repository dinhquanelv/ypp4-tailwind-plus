import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collections-card',
  imports: [],
  templateUrl: './collections-card.html',
})
export class CollectionsCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
