import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideServiceComponent } from './provide-service.component';

describe('ProvideServiceComponent', () => {
  let component: ProvideServiceComponent;
  let fixture: ComponentFixture<ProvideServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvideServiceComponent]
    });
    fixture = TestBed.createComponent(ProvideServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
