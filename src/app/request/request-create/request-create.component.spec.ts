import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreateComponent } from './request-create.component';

describe('RequestCreateComponent', () => {
  let component: RequestCreateComponent;
  let fixture: ComponentFixture<RequestCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestCreateComponent]
    });
    fixture = TestBed.createComponent(RequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
