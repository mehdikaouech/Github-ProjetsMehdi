import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTraveauxComponent } from './liste-traveaux.component';

describe('ListeTraveauxComponent', () => {
  let component: ListeTraveauxComponent;
  let fixture: ComponentFixture<ListeTraveauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTraveauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTraveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
