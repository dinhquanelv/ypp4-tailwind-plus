import { Component, Input } from '@angular/core';

export interface SizePickerData {
  title: string;
  linkLabel: string;
  link: string;
  layout: 'six-items' | 'eight-items';
  items: SizePickerItemData[];
}

export interface SizePickerItemData {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-size-picker',
  imports: [],
  templateUrl: './size-picker.html',
})
export class SizePicker {
  @Input() data: SizePickerData = {
    title: 'Size',
    linkLabel: 'Size guide',
    link: '#',
    layout: 'eight-items',
    items: [],
  };
}
