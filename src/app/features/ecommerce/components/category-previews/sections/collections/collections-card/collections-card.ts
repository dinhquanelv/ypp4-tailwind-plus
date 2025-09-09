import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICollections } from '../collections-list/collections-list';

@Component({
  selector: 'app-collections-card',
  imports: [CommonModule],
  templateUrl: './collections-card.html',
})
export class CollectionsCard {
  @Input() collection!: ICollections;
}
