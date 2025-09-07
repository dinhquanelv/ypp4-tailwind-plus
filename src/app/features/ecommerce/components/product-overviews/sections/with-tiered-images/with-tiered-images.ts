import { Component } from '@angular/core';
import { Breadcrumb, BreadcrumbItemData } from '@app/shared/components/breadcrumb/breadcrumb';
import { Rating, RatingItemData } from '@app/shared/components/rating/rating';
import { Pricing, PricingData } from '@app/shared/components/pricing/pricing';
import { ReviewCount, ReviewCountData } from '@app/shared/components/review-count/review-count';
import { TitleProduct, TitleProductData } from '@app/shared/components/title-product/title-product';
import { ImageGridThree } from '@app/shared/components/image-grid/image-grid-three/image-grid-three';
import { ColorPicker, ColorPickerItemData } from '@app/shared/components/color-picker/color-picker';
import { SizePicker, SizePickerData } from '@app/shared/components/size-picker/size-picker';
import { Button, ButtonData } from '@app/shared/components/button/button';
import {
  TextDescription,
  TextDescriptionData,
} from '@app/shared/components/text-description/text-description';
import { FeatureList, FeatureListData } from '@app/shared/components/feature-list/feature-list';
import { FeatureCard, FeatureCardData } from '@app/shared/components/feature-card/feature-card';
import { ImageItemData } from '@app/shared/components/image-grid/image-grid';
import { withTieredImagesConfig } from './with-tiered-images-config';

@Component({
  selector: 'app-with-tiered-images',
  imports: [
    Breadcrumb,
    Rating,
    Pricing,
    ReviewCount,
    TitleProduct,
    ImageGridThree,
    ColorPicker,
    SizePicker,
    Button,
    TextDescription,
    FeatureList,
    FeatureCard,
  ],
  templateUrl: './with-tiered-images.html',
})
export class WithTieredImages {
  breadcrumbItems: BreadcrumbItemData[] = withTieredImagesConfig.breadcrumbItems;
  pricing: PricingData = withTieredImagesConfig.pricing;
  rating: RatingItemData = withTieredImagesConfig.rating;
  reviewCount: ReviewCountData = withTieredImagesConfig.reviewCount;
  productTitleData: TitleProductData = withTieredImagesConfig.productTitleData;
  images: ImageItemData[] = withTieredImagesConfig.images;
  colorPickerItems: ColorPickerItemData[] = withTieredImagesConfig.colorPickerItems;
  sizePickerData: SizePickerData = withTieredImagesConfig.sizePickerData;
  addToCartButton: ButtonData = withTieredImagesConfig.addToCartButton;
  descriptionData: TextDescriptionData = withTieredImagesConfig.descriptionData;
  fabricCareData: FeatureListData = withTieredImagesConfig.fabricCareData;
  featureCardData: FeatureCardData = withTieredImagesConfig.featureCardData;
}
