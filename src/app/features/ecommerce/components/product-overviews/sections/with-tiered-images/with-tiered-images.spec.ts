import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTieredImages } from './with-tiered-images';

describe('WithTieredImages', () => {
  let component: WithTieredImages;
  let fixture: ComponentFixture<WithTieredImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithTieredImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTieredImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
