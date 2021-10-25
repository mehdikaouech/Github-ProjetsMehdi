import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesServiceComponent } from './mes-service.component';

describe('MesServiceComponent', () => {
  let component: MesServiceComponent;
  let fixture: ComponentFixture<MesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
