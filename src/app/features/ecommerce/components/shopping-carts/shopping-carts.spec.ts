import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarts } from './shopping-carts';

describe('ShoppingCarts', () => {
  let component: ShoppingCarts;
  let fixture: ComponentFixture<ShoppingCarts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCarts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCarts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
