import { Component, Input } from '@angular/core';
import { Rating, RatingItemData } from '@app/shared/components/rating/rating';

export interface ReviewCountData {
  rating: RatingItemData;
  reviewCount: number;
  type: 'link' | 'label';
  href?: string;
}

@Component({
  selector: 'app-review-count',
  imports: [Rating],
  templateUrl: './review-count.html',
})
export class ReviewCount {
  @Input() data: ReviewCountData = {
    rating: { star: 5, value: 0, color: 'text-gray-900' },
    reviewCount: 0,
    type: 'label',
  };
}
