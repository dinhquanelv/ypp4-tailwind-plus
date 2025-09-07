import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithImageGallery } from './with-image-gallery';

describe('WithImageGallery', () => {
  let component: WithImageGallery;
  let fixture: ComponentFixture<WithImageGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithImageGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithImageGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
