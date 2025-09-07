import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPreview } from './category-preview';

describe('CategoryPreview', () => {
  let component: CategoryPreview;
  let fixture: ComponentFixture<CategoryPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
