import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrombinoscopePage } from './trombinoscope.page';

describe('TrombinoscopePage', () => {
  let component: TrombinoscopePage;
  let fixture: ComponentFixture<TrombinoscopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrombinoscopePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrombinoscopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
