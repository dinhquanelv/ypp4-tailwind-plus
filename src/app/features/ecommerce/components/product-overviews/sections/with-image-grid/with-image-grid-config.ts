import { ButtonData } from '@app/shared/components/button/button';
import { TextDescriptionData } from '@app/shared/components/text-description/text-description';
import { FeatureListData } from '@app/shared/components/feature-list/feature-list';
import { TextSectionData } from '@app/shared/components/text-section/text-section';
import { TitleProductData } from '@app/shared/components/title-product/title-product';
import { ColorPickerItemData } from '@app/shared/components/color-picker/color-picker';
import { ImageItemData } from '@app/shared/components/image-grid/image-grid';
import { RatingItemData } from '@app/shared/components/rating/rating';
import { SizePickerData } from '@app/shared/components/size-picker/size-picker';
import { BreadcrumbItemData } from '@app/shared/components/breadcrumb/breadcrumb';

export interface WithImageGridConfig {
  breadcrumbItems: BreadcrumbItemData[];
  images: ImageItemData[];
  rating: RatingItemData;
  colorPickerItems: ColorPickerItemData[];
  sizePickerData: SizePickerData;
  addToBagButton: ButtonData;
  descriptionData: TextDescriptionData;
  highlightsData: FeatureListData;
  detailsData: TextSectionData;
  productTitleData: TitleProductData;
}

export const withImageGridConfig: WithImageGridConfig = {
  breadcrumbItems: [
    { label: 'Home', link: '#', color: 'text-gray-900' },
    { label: 'Clothing', link: '#', color: 'text-gray-900' },
    { label: 'Basic Tee 6-Pack', link: '#', color: 'text-gray-600' },
  ],

  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],

  rating: { star: 5, value: 4, color: 'text-gray-900' },

  colorPickerItems: [
    {
      value: 'white',
      checked: true,
      bgColor: 'bg-white',
      outlineColor: 'checked:outline-gray-400',
    },
    {
      value: 'gray',
      bgColor: 'bg-gray-200',
      outlineColor: 'checked:outline-gray-400',
    },
    {
      value: 'black',
      bgColor: 'bg-gray-900',
      outlineColor: 'checked:outline-gray-900',
    },
  ],

  sizePickerData: {
    title: 'Size',
    linkLabel: 'Size guide',
    link: '#',
    layout: 'eight-items',
    items: [
      { label: 'XXS', value: 'xxs', disabled: true },
      { label: 'XS', value: 'xs' },
      { label: 'S', value: 's', checked: true },
      { label: 'M', value: 'm' },
      { label: 'L', value: 'l' },
      { label: 'XL', value: 'xl' },
      { label: '2XL', value: '2xl' },
      { label: '3XL', value: '3xl' },
    ],
  },

  addToBagButton: {
    text: 'Add to bag',
    type: 'submit',
    width: 'full',
    variant: 'primary',
    size: 'large',
    onClick: () => {
      console.log('Add to bag clicked');
    },
  },

  descriptionData: {
    title: 'Description',
    showTitle: false,
    content:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  },

  highlightsData: {
    title: 'Highlights',
    items: [
      { text: 'Hand cut and sewn locally' },
      { text: 'Dyed with our proprietary colors' },
      { text: 'Pre-washed & pre-shrunk' },
      { text: 'Ultra-soft 100% cotton' },
    ],
  },

  detailsData: {
    title: 'Details',
    content:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    titleSize: 'small',
    textSize: 'small',
  },

  productTitleData: {
    title: 'Basic Tee 6-Pack',
    size: 'large',
    weight: 'bold',
    color: 'gray-900',
    tracking: 'tight',
  },
};
