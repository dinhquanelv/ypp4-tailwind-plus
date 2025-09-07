import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

export interface RatingItemData {
  star: number;
  value: number;
  color: string;
}

@Component({
  selector: 'app-rating',
  imports: [RatingModule, FormsModule],
  templateUrl: './rating.html',
})
export class Rating {
  @Input() item: RatingItemData = { star: 5, value: 0, color: '' };
}
