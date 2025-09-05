import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithImageGrid } from './with-image-grid';

describe('WithImageGrid', () => {
  let component: WithImageGrid;
  let fixture: ComponentFixture<WithImageGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithImageGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithImageGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
