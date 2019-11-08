import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOneTimePasswordComponent } from './service-one-time-password.component';

describe('ServiceOneTimePasswordComponent', () => {
  let component: ServiceOneTimePasswordComponent;
  let fixture: ComponentFixture<ServiceOneTimePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOneTimePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOneTimePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
