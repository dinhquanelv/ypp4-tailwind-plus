import { Component } from '@angular/core';
import { ShopByCategoryCard } from '../shop-by-category-card/shop-by-category-card';
import { CommonModule } from '@angular/common';

export interface IShopByCategory {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Component({
  selector: 'app-shop-by-category-list',
  imports: [CommonModule, ShopByCategoryCard],
  templateUrl: './shop-by-category-list.html',
})
export class ShopByCategoryList {
  category: IShopByCategory[] = [
    {
      id: '1',
      title: 'New Arrivals',
      subtitle: 'Shop now',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg',
    },
    {
      id: '2',
      title: 'Accessories',
      subtitle: 'Shop now',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg',
    },
    {
      id: '3',
      title: 'Workspace',
      subtitle: 'Shop now',
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg',
    },
  ];
}
