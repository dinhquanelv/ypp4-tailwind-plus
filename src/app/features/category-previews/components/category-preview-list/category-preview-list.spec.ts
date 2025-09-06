import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPreviewList } from './category-preview-list';

describe('CategoryPreviewList', () => {
  let component: CategoryPreviewList;
  let fixture: ComponentFixture<CategoryPreviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPreviewList],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPreviewList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
