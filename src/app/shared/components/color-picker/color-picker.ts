import { Component, Input } from '@angular/core';

export interface ColorPickerItemData {
  value: string;
  checked?: boolean;
  bgColor: string;
  outlineColor: string;
}

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.html',
})
export class ColorPicker {
  @Input() items: ColorPickerItemData[] = [];
}
