import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCollectionList } from './shop-by-collection-list';

describe('ShopByCollectionList', () => {
  let component: ShopByCollectionList;
  let fixture: ComponentFixture<ShopByCollectionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByCollectionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCollectionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
