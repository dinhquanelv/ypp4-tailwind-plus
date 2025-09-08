import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  standalone: true,
  templateUrl: './cart-footer.html',
})
export class CartFooter {
  @Input() subtotal = 0;
  @Output() close = new EventEmitter<void>();
}
