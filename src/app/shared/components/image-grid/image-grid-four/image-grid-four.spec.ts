import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGridFour } from './image-grid-four';

describe('ImageGridFour', () => {
  let component: ImageGridFour;
  let fixture: ComponentFixture<ImageGridFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGridFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGridFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
