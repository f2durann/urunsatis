/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SepetimComponent } from './sepetim.component';

describe('SepetimComponent', () => {
  let component: SepetimComponent;
  let fixture: ComponentFixture<SepetimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepetimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepetimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
