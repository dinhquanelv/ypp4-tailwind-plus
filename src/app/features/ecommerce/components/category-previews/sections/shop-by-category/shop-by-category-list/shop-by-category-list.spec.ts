import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCategoryList } from './shop-by-category-list';

describe('ShopByCategoryList', () => {
  let component: ShopByCategoryList;
  let fixture: ComponentFixture<ShopByCategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByCategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
