import { Component, Input } from '@angular/core';
import { IShopByCategory } from '../shop-by-category-list/shop-by-category-list';

@Component({
  selector: 'app-shop-by-category-card',
  templateUrl: './shop-by-category-card.html',
})
export class ShopByCategoryCard {
  @Input() category!: IShopByCategory;
}
