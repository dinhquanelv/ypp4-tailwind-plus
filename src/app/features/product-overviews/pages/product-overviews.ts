import { Component } from '@angular/core';
import { SplitWithImage } from '../components/split-with-image/split-with-image';
import { WithImageGrid } from '../components/with-image-grid/with-image-grid';
import { WithTieredImages } from '../components/with-tiered-images/with-tiered-images';
import { WithImageGallery } from '../components/with-image-gallery/with-image-gallery';
import { WithTabs } from '../components/with-tabs/with-tabs';

@Component({
  selector: 'app-product-overviews',
  imports: [WithImageGrid, WithTieredImages, WithImageGallery, SplitWithImage, WithTabs],
  templateUrl: './product-overviews.html',
  styleUrl: './product-overviews.scss',
})
export class ProductOverviews {}
