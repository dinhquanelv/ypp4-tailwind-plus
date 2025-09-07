import { SizePickerItemData } from '@app/shared/types/SizePickerItemData';

export interface SizePickerData {
  title: string;
  linkLabel: string;
  link: string;
  layout: 'six-items' | 'eight-items';
  items: SizePickerItemData[];
}
