import { ButtonData } from '@app/shared/components/button/button';
import { TextDescriptionData } from '@app/shared/components/text-description/text-description';
import { FeatureListData } from '@app/shared/components/feature-list/feature-list';
import { FeatureCardData } from '@app/shared/components/feature-card/feature-card';
import { TitleProductData } from '@app/shared/components/title-product/title-product';
import { ColorPickerItemData } from '@app/shared/components/color-picker/color-picker';
import { ImageItemData } from '@app/shared/components/image-grid/image-grid';
import { SizePickerData } from '@app/shared/components/size-picker/size-picker';
import { BreadcrumbItemData } from '@app/shared/components/breadcrumb/breadcrumb';
import { PricingData } from '@app/shared/components/pricing/pricing';
import { ReviewCountData } from '@app/shared/components/review-count/review-count';
import { RatingItemData } from '@app/shared/components/rating/rating';

export interface WithTieredImagesConfig {
  breadcrumbItems: BreadcrumbItemData[];
  pricing: PricingData;
  rating: RatingItemData;
  reviewCount: ReviewCountData;
  productTitleData: TitleProductData;
  images: ImageItemData[];
  colorPickerItems: ColorPickerItemData[];
  sizePickerData: SizePickerData;
  addToCartButton: ButtonData;
  descriptionData: TextDescriptionData;
  fabricCareData: FeatureListData;
  featureCardData: FeatureCardData;
}

export const withTieredImagesConfig: WithTieredImagesConfig = {
  breadcrumbItems: [
    { label: 'Home', link: '#', color: 'text-gray-900' },
    { label: 'Clothing', link: '#', color: 'text-gray-900' },
    { label: 'Basic Tee 6-Pack', link: '#', color: 'text-gray-600' },
  ],

  pricing: {
    price: '$35',
    size: 'md',
  },

  rating: {
    star: 5,
    value: 4,
    color: 'text-yellow-400',
  },

  reviewCount: {
    reviewCount: 512,
    type: 'link',
    href: '#',
  },

  productTitleData: {
    title: 'Basic Tee',
    size: 'large',
    weight: 'normal',
    color: 'gray-900',
    tracking: 'tight',
  },

  images: [
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
  ],

  colorPickerItems: [
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
  ],

  sizePickerData: {
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
  },

  addToCartButton: {
    text: 'Add to cart',
    type: 'button',
    width: 'full',
    variant: 'primary',
    size: 'large',
  },

  descriptionData: {
    title: 'Description',
    showTitle: true,
    content:
      "The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.",
  },

  fabricCareData: {
    title: 'Fabric & Care',
    items: [
      { text: 'Only the best materials' },
      { text: 'Ethically and locally made' },
      { text: 'Pre-washed and pre-shrunk' },
      { text: 'Machine wash cold with similar colors' },
    ],
  },

  featureCardData: {
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
  },
};
