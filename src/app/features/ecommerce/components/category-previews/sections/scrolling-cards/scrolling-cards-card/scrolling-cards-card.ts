import { Component, Input } from '@angular/core';
import { IScrollingCards } from '../scrolling-cards-list/scrolling-cards-list';

@Component({
  selector: 'app-scrolling-cards-card',
  imports: [],
  templateUrl: './scrolling-cards-card.html',
  styles: ``,
})
export class ScrollingCardsCard {
  // @Input() scrollingcards!: IScrollingCards;
  @Input() title!: string;
  @Input() imageUrl!: string;
}
