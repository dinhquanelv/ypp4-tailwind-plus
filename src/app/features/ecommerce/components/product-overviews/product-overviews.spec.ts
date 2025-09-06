import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviews } from './product-overviews';

describe('ProductOverviews', () => {
  let component: ProductOverviews;
  let fixture: ComponentFixture<ProductOverviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOverviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOverviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
