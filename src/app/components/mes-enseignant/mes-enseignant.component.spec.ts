import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEnseignantComponent } from './mes-enseignant.component';

describe('MesEnseignantComponent', () => {
  let component: MesEnseignantComponent;
  let fixture: ComponentFixture<MesEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
