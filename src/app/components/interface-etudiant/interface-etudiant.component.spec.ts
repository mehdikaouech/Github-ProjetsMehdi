import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEtudiantComponent } from './interface-etudiant.component';

describe('InterfaceEtudiantComponent', () => {
  let component: InterfaceEtudiantComponent;
  let fixture: ComponentFixture<InterfaceEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
