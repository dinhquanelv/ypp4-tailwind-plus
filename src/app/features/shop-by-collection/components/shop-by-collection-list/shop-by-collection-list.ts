import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopByCollection } from '../shop-by-collection/shop-by-collection';

interface Collection {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-shop-by-collection-list',
  imports: [CommonModule, ShopByCollection],
  templateUrl: './shop-by-collection-list.html',
  styleUrl: './shop-by-collection-list.scss',
})
export class ShopByCollectionList {
  collection: Collection[] = [
    {
      title: 'Handcrafted Collection',
      description:
        'Keep your phone, keys, and wallet together, so you can lose everything at once.',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-01.jpg',
    },
    {
      title: 'Organized Desk Collection',
      description: 'The rest of the house will still be a mess, but your desk will look great.',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-02.jpg',
    },
    {
      title: 'Focus Collection',
      description:
        'Be more productive than enterprise project managers with a single piece of paper.',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-collection-03.jpg',
    },
  ];
}
