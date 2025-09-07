import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsCard } from '../collections-card/collections-card';

interface ICollections {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-collections-list',
  imports: [CommonModule, CollectionsCard],
  templateUrl: './collections-list.html',
})
export class CollectionsList {
  collections: ICollections[] = [
    {
      title: 'Desk and Office',
      description: 'Work from home accessories',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
    },
    {
      title: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
    },
    {
      title: 'Travel',
      description: 'Daily commute essentials',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
    },
  ];
}
