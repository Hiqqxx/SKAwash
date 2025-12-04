import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suport } from './suport';

describe('Suport', () => {
  let component: Suport;
  let fixture: ComponentFixture<Suport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
