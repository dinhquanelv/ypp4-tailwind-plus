import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCollection } from './shop-by-collection';

describe('ShopByCollection', () => {
  let component: ShopByCollection;
  let fixture: ComponentFixture<ShopByCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
