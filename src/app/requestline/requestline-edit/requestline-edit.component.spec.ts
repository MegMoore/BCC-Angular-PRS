import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineEditComponent } from './requestline-edit.component';

describe('RequestlineEditComponent', () => {
  let component: RequestlineEditComponent;
  let fixture: ComponentFixture<RequestlineEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestlineEditComponent]
    });
    fixture = TestBed.createComponent(RequestlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
