import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  standalone: true,
  templateUrl: './cart-header.html',
})
export class CartHeader {
  @Output() close = new EventEmitter<void>();
}
