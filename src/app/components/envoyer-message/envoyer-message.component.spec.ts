import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerMessageComponent } from './envoyer-message.component';

describe('EnvoyerMessageComponent', () => {
  let component: EnvoyerMessageComponent;
  let fixture: ComponentFixture<EnvoyerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
