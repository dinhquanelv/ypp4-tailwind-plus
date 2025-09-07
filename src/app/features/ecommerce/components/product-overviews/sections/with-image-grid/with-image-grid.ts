import { Component } from '@angular/core';
import { Breadcrumb, BreadcrumbItemData } from '@app/shared/components/breadcrumb/breadcrumb';
import { ImageGridFour } from '@app/shared/components/image-grid/image-grid-four/image-grid-four';
import { ColorPicker, ColorPickerItemData } from '@app/shared/components/color-picker/color-picker';
import { SizePicker, SizePickerData } from '@app/shared/components/size-picker/size-picker';
import { Button, ButtonData } from '@app/shared/components/button/button';
import {
  TextDescription,
  TextDescriptionData,
} from '@app/shared/components/text-description/text-description';
import { FeatureList, FeatureListData } from '@app/shared/components/feature-list/feature-list';
import { TextSection, TextSectionData } from '@app/shared/components/text-section/text-section';
import { TitleProduct, TitleProductData } from '@app/shared/components/title-product/title-product';
import { withImageGridConfig } from './with-image-grid-config';
import { ImageItemData } from '@app/shared/components/image-grid/image-grid';
import { Pricing, PricingData } from '@app/shared/components/pricing/pricing';
import { ReviewCount, ReviewCountData } from '@app/shared/components/review-count/review-count';
import { Rating, RatingItemData } from '@app/shared/components/rating/rating';

@Component({
  selector: 'app-with-image-grid',
  imports: [
    Breadcrumb,
    ImageGridFour,
    Pricing,
    Rating,
    ReviewCount,
    ColorPicker,
    SizePicker,
    Button,
    TextDescription,
    FeatureList,
    TextSection,
    TitleProduct,
  ],
  templateUrl: './with-image-grid.html',
})
export class WithImageGrid {
  breadcrumbItems: BreadcrumbItemData[] = withImageGridConfig.breadcrumbItems;
  images: ImageItemData[] = withImageGridConfig.images;
  pricing: PricingData = withImageGridConfig.pricing;
  rating: RatingItemData = withImageGridConfig.rating;
  reviewCount: ReviewCountData = withImageGridConfig.reviewCount;
  colorPickerItems: ColorPickerItemData[] = withImageGridConfig.colorPickerItems;
  sizePickerData: SizePickerData = withImageGridConfig.sizePickerData;
  addToBagButton: ButtonData = withImageGridConfig.addToBagButton;
  descriptionData: TextDescriptionData = withImageGridConfig.descriptionData;
  highlightsData: FeatureListData = withImageGridConfig.highlightsData;
  detailsData: TextSectionData = withImageGridConfig.detailsData;
  productTitleData: TitleProductData = withImageGridConfig.productTitleData;
}
