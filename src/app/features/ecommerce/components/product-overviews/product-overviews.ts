import { Component } from '@angular/core';
import { SplitWithImage } from '@app/features/ecommerce/components/product-overviews/sections/split-with-image/split-with-image';
import { WithImageGallery } from '@app/features/ecommerce/components/product-overviews/sections/with-image-gallery/with-image-gallery';
import { WithImageGrid } from '@app/features/ecommerce/components/product-overviews/sections/with-image-grid/with-image-grid';
import { WithTabs } from '@app/features/ecommerce/components/product-overviews/sections/with-tabs/with-tabs';
import { WithTieredImages } from '@app/features/ecommerce/components/product-overviews/sections/with-tiered-images/with-tiered-images';
import { SectionHeader } from '@app/shared/components/section-header/section-header';

@Component({
  selector: 'app-product-overviews',
  imports: [
    WithImageGrid,
    WithTieredImages,
    WithImageGallery,
    SplitWithImage,
    WithTabs,
    SectionHeader,
  ],
  templateUrl: './product-overviews.html',
})
export class ProductOverviews {
  title: string = '';
}
