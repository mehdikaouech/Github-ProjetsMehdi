import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeServicesComponent } from './liste-services.component';

describe('ListeServicesComponent', () => {
  let component: ListeServicesComponent;
  let fixture: ComponentFixture<ListeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
