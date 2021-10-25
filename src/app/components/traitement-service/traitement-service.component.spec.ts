import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementServiceComponent } from './traitement-service.component';

describe('TraitementServiceComponent', () => {
  let component: TraitementServiceComponent;
  let fixture: ComponentFixture<TraitementServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
