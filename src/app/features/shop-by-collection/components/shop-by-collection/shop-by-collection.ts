import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-by-collection',
  imports: [],
  templateUrl: './shop-by-collection.html',
  styleUrl: './shop-by-collection.scss',
})
export class ShopByCollection {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
