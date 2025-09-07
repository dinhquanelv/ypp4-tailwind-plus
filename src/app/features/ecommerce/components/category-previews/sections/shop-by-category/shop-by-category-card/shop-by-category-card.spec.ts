import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCategoryCard } from './shop-by-category-card';

describe('ShopByCategoryCard', () => {
  let component: ShopByCategoryCard;
  let fixture: ComponentFixture<ShopByCategoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByCategoryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCategoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
