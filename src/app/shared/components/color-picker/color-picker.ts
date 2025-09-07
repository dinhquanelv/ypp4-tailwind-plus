import { Component, Input } from '@angular/core';
import { ColorPickerItemData } from '@app/shared/types/ColorPickerItemData';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.html',
})
export class ColorPicker {
  @Input() items: ColorPickerItemData[] = [];
}
