import { Component, Input } from '@angular/core';
import { ImageItemData } from '@app/shared/components/image-grid/image-grid';

@Component({
  selector: 'app-image-grid-four',
  imports: [],
  templateUrl: './image-grid-four.html',
})
export class ImageGridFour {
  @Input() items: ImageItemData[] = [];
}
