import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdePage } from './bde.page';

describe('BdePage', () => {
  let component: BdePage;
  let fixture: ComponentFixture<BdePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
