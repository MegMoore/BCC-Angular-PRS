import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineCreateComponent } from './requestline-create.component';

describe('RequestlineCreateComponent', () => {
  let component: RequestlineCreateComponent;
  let fixture: ComponentFixture<RequestlineCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestlineCreateComponent]
    });
    fixture = TestBed.createComponent(RequestlineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
