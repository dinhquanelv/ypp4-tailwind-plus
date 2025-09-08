import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, DrawerModule, ButtonModule],
  templateUrl: './cart-drawer.html',
})
export class CartDrawer {
  visible = false;

  openDrawer() {
    this.visible = true;
  }

  closeDrawer() {
    this.visible = false;
  }

  // Data mock UI
  items = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      price: 90,
      color: 'Salmon',
      qty: 1,
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      price: 32,
      color: 'Blue',
      qty: 1,
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    },
    {
      id: 3,
      name: 'Zip Tote Basket',
      price: 140,
      color: 'White and black',
      qty: 1,
      imageUrl:
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
    },
  ];
}
