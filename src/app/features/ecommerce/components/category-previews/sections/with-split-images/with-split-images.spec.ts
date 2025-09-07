import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSplitImages } from './with-split-images';

describe('WithSplitImages', () => {
  let component: WithSplitImages;
  let fixture: ComponentFixture<WithSplitImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithSplitImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithSplitImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
