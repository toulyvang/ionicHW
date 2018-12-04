import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwPage } from './hw.page';

describe('HwPage', () => {
  let component: HwPage;
  let fixture: ComponentFixture<HwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
