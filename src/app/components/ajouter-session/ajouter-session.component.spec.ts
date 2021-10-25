import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSessionComponent } from './ajouter-session.component';

describe('AjouterSessionComponent', () => {
  let component: AjouterSessionComponent;
  let fixture: ComponentFixture<AjouterSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
