import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.html',
})
export class CartItem {
  @Input() item: any;
}
