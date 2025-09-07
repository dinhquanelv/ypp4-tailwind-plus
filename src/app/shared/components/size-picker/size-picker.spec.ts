import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizePicker } from './size-picker';

describe('SizePicker', () => {
  let component: SizePicker;
  let fixture: ComponentFixture<SizePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
