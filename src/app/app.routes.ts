import { Routes } from '@angular/router';
import { CategoryPreviewList } from './features/category-previews/components/category-preview-list/category-preview-list';
import { ShopByCollectionList } from './features/shop-by-collection/components/shop-by-collection-list/shop-by-collection-list';

export const routes: Routes = [
  { path: '', children: [] },
  { path: 'category-previews', component: CategoryPreviewList },
  { path: 'shop-by-collection', component: ShopByCollectionList },
];
