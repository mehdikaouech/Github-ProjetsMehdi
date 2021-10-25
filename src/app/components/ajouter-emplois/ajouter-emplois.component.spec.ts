import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmploisComponent } from './ajouter-emplois.component';

describe('AjouterEmploisComponent', () => {
  let component: AjouterEmploisComponent;
  let fixture: ComponentFixture<AjouterEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
