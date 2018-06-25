import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEndpointComponent } from './auth-endpoint.component';

describe('AuthEndpointComponent', () => {
  let component: AuthEndpointComponent;
  let fixture: ComponentFixture<AuthEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
