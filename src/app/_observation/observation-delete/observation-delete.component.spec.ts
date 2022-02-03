import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationDeleteComponent } from './observation-delete.component';

describe('ObservationDeleteComponent', () => {
  let component: ObservationDeleteComponent;
  let fixture: ComponentFixture<ObservationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
