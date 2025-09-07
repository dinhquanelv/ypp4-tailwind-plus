import { Component } from '@angular/core';

export interface ImageItemData {
  src: string;
  alt: string;
  quantity?: 1 | 2 | 3 | 4;
  layout?: 'one' | 'one-two-one' | 'one-over-two';
}

@Component({
  selector: 'app-image-grid',
  imports: [],
  templateUrl: './image-grid.html',
})
export class ImageGrid {}
