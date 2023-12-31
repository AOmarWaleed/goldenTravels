import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegistrationComponent } from './app-registration.component';

describe('AppRegistrationComponent', () => {
  let component: AppRegistrationComponent;
  let fixture: ComponentFixture<AppRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
