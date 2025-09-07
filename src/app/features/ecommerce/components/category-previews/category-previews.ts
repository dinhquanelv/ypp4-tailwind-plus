import { Component, Input } from '@angular/core';
import { CollectionsList } from '../../components/category-previews/sections/collections/collections-list/collections-list';
import { ShopByCategoryList } from '../../components/shop-by-category-list/shop-by-category-list';

@Component({
  selector: 'app-category-previews',
  imports: [CollectionsList, ShopByCategoryList],
  templateUrl: './category-previews.html',
})
export class CategoryPreviews {}
