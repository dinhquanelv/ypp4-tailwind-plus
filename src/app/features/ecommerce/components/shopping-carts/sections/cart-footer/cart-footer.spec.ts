import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFooter } from './cart-footer';

describe('CartFooter', () => {
  let component: CartFooter;
  let fixture: ComponentFixture<CartFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
