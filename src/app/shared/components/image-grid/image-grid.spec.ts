import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGrid } from './image-grid';

describe('ImageGrid', () => {
  let component: ImageGrid;
  let fixture: ComponentFixture<ImageGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
