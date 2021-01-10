/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KartVeAdresBilgisiComponent } from './kartVeAdresBilgisi.component';

describe('KartVeAdresBilgisiComponent', () => {
  let component: KartVeAdresBilgisiComponent;
  let fixture: ComponentFixture<KartVeAdresBilgisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartVeAdresBilgisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartVeAdresBilgisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
