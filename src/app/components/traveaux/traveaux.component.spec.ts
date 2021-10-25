import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveauxComponent } from './traveaux.component';

describe('TraveauxComponent', () => {
  let component: TraveauxComponent;
  let fixture: ComponentFixture<TraveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraveauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
