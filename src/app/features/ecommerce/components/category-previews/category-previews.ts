import { Component, Input } from '@angular/core';
import { CollectionsList } from '../../components/category-previews/sections/collections/collections-list/collections-list';
import { ShopByCategoryList } from './sections/shop-by-category/shop-by-category-list/shop-by-category-list';
import { WorkspaceCollection } from './sections/workspace-collection/workspace-collection';
import { WithSplitImages } from './sections/with-split-images/with-split-images';
import { ScrollingCardsList } from './sections/scrolling-cards/scrolling-cards-list/scrolling-cards-list';

@Component({
  selector: 'app-category-previews',
  imports: [
    CollectionsList,
    ShopByCategoryList,
    WorkspaceCollection,
    WithSplitImages,
    ScrollingCardsList,
  ],
  templateUrl: './category-previews.html',
})
export class CategoryPreviews {}
