import { Component, Input } from '@angular/core';
import { SizePickerData } from '@app/shared/types/SizePickerData';

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
