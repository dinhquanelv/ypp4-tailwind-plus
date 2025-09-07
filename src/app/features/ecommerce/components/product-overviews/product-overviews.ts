import { Component } from '@angular/core';
import { WithImageGrid } from './sections/with-image-grid/with-image-grid';
import { WithImageGallery } from './sections/with-image-gallery/with-image-gallery';
import { WithTieredImages } from './sections/with-tiered-images/with-tiered-images';
import { SplitWithImage } from './sections/split-with-image/split-with-image';
import { WithTabs } from './sections/with-tabs/with-tabs';

@Component({
  selector: 'app-product-overviews',
  imports: [WithImageGrid, WithTieredImages, WithImageGallery, SplitWithImage, WithTabs],
  templateUrl: './product-overviews.html',
})
export class ProductOverviews {}
