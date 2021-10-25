import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAdminComponent } from './ajouter-admin.component';

describe('AjouterAdminComponent', () => {
  let component: AjouterAdminComponent;
  let fixture: ComponentFixture<AjouterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
