import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPreview } from '../category-preview/category-preview';

interface Category {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-category-preview-list',
  imports: [CommonModule, CategoryPreview],
  templateUrl: './category-preview-list.html',
  styleUrl: './category-preview-list.scss',
})
export class CategoryPreviewList {
  categories: Category[] = [
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
