import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollingCardsCard } from '../scrolling-cards-card/scrolling-cards-card';

export interface IScrollingCards {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-scrolling-cards-list',
  imports: [CommonModule, ScrollingCardsCard],
  templateUrl: './scrolling-cards-list.html',
})
export class ScrollingCardsList {
  cards: IScrollingCards[] = [
    {
      title: 'New Arrivals',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
      title: 'Productivity',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
      title: 'Workspace',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
      title: 'Accessories',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-03.jpg',
    },
    {
      title: 'Sale',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-05.jpg',
    },
  ];
}
