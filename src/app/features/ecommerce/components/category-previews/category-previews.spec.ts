import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPreviews } from './category-previews';

describe('CategoryPreviews', () => {
  let component: CategoryPreviews;
  let fixture: ComponentFixture<CategoryPreviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPreviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPreviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
