import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitWithImage } from './split-with-image';

describe('SplitWithImage', () => {
  let component: SplitWithImage;
  let fixture: ComponentFixture<SplitWithImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitWithImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitWithImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
