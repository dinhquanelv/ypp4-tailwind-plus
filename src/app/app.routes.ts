import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Ecommerce } from './features/ecommerce/ecommerce';
import { ProductOverviews } from './features/ecommerce/components/product-overviews/product-overviews';
import { ProductQuickviews } from './features/ecommerce/components/product-quickviews/product-quickviews';
import { CategoryPreviews } from './features/ecommerce/components/category-previews/category-previews';
import { ShoppingCarts } from './features/ecommerce/components/shopping-carts/shopping-carts';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Ecommerce },
      { path: 'ecommerce', component: Ecommerce },
      { path: 'ecommerce/components/product-overviews', component: ProductOverviews },
      { path: 'ecommerce/components/category-previews', component: CategoryPreviews },
      { path: 'ecommerce/components/product-quickviews', component: ProductQuickviews },
      { path: 'ecommerce/components/shopping-carts', component: ShoppingCarts },
    ],
  },
];
