import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDocummentComponent } from './mes-documment.component';

describe('MesDocummentComponent', () => {
  let component: MesDocummentComponent;
  let fixture: ComponentFixture<MesDocummentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDocummentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDocummentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
