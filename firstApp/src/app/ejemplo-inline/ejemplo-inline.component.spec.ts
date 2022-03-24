import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploInlineComponent } from './ejemplo-inline.component';

describe('EjemploInlineComponent', () => {
  let component: EjemploInlineComponent;
  let fixture: ComponentFixture<EjemploInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
