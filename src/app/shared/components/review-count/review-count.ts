import { Component, Input } from '@angular/core';

export interface ReviewCountData {
  reviewCount: number;
  type: 'link' | 'label';
  href?: string;
}

@Component({
  selector: 'app-review-count',
  imports: [],
  templateUrl: './review-count.html',
})
export class ReviewCount {
  @Input() data: ReviewCountData = {
    reviewCount: 0,
    type: 'label',
  };
}
