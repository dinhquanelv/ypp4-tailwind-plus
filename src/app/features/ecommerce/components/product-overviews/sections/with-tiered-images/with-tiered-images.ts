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
  breadcrumbItems: BreadcrumbItemData[] = [
    { label: 'Home', link: '#', color: 'text-gray-900' },
    { label: 'Clothing', link: '#', color: 'text-gray-900' },
    { label: 'Basic Tee 6-Pack', link: '#', color: 'text-gray-600' },
  ];

  pricing: PricingData = {
    price: '$35',
    size: 'md',
  };

  rating: RatingItemData = {
    star: 5,
    value: 4,
    color: 'text-yellow-400',
  };

  reviewCount: ReviewCountData = {
    reviewCount: 512,
    type: 'link',
    href: '#',
  };

  productTitleData: TitleProductData = {
    title: 'Basic Tee',
    size: 'large',
    weight: 'normal',
    color: 'gray-900',
    tracking: 'tight',
  };

  images: ImageItemData[] = [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      alt: '',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
  ];

  colorPickerItems: ColorPickerItemData[] = [
    {
      value: 'black',
      checked: true,
      bgColor: 'bg-black',
      outlineColor: 'checked:outline-black',
    },
    {
      value: 'gray',
      bgColor: 'bg-gray-400',
      outlineColor: 'checked:outline-gray-400',
    },
  ];

  sizePickerData: SizePickerData = {
    title: 'Size',
    linkLabel: 'See sizing chart',
    link: '#',
    layout: 'six-items',
    items: [
      { label: 'XXS', value: 'xxs' },
      { label: 'XS', value: 'xs' },
      { label: 'S', value: 's', checked: true },
      { label: 'M', value: 'm' },
      { label: 'L', value: 'l' },
      { label: 'XL', value: 'xl' },
    ],
  };

  addToCartButton: ButtonData = {
    text: 'Add to cart',
    type: 'button',
    width: 'full',
    variant: 'primary',
    size: 'large',
  };

  descriptionData: TextDescriptionData = {
    title: 'Description',
    showTitle: true,
    content:
      "The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.",
  };

  fabricCareData: FeatureListData = {
    title: 'Fabric & Care',
    items: [
      { text: 'Only the best materials' },
      { text: 'Ethically and locally made' },
      { text: 'Pre-washed and pre-shrunk' },
      { text: 'Machine wash cold with similar colors' },
    ],
  };

  featureCardData: FeatureCardData = {
    items: [
      {
        icon: '',
        title: 'International delivery',
        description: 'Get your order in 2 years',
      },
      {
        icon: '',
        title: 'Loyalty rewards',
        description: "Don't look at other tees",
      },
    ],
  };
}
