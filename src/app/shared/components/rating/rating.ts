import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingItemData } from '@app/shared/types/RatingItemData';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rating',
  imports: [RatingModule, FormsModule],
  templateUrl: './rating.html',
})
export class Rating {
  @Input() item: RatingItemData = { star: 5, value: 0, color: '' };
}
