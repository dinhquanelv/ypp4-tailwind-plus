import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuickviews } from './product-quickviews';

describe('ProductQuickviews', () => {
  let component: ProductQuickviews;
  let fixture: ComponentFixture<ProductQuickviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductQuickviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductQuickviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
