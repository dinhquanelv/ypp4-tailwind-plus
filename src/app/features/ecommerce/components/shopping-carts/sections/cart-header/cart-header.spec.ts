import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHeader } from './cart-header';

describe('CartHeader', () => {
  let component: CartHeader;
  let fixture: ComponentFixture<CartHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
