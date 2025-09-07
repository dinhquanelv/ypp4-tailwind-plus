import { Component, Input } from '@angular/core';
import { ImageItemData } from '@app/shared/components/image-grid/image-grid';

@Component({
  selector: 'app-image-grid-three',
  imports: [],
  templateUrl: './image-grid-three.html',
})
export class ImageGridThree {
  @Input() items: ImageItemData[] = [];
}
