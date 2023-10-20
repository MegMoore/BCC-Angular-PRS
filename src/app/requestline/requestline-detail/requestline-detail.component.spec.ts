import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineDetailComponent } from './requestline-detail.component';

describe('RequestlineDetailComponent', () => {
  let component: RequestlineDetailComponent;
  let fixture: ComponentFixture<RequestlineDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestlineDetailComponent]
    });
    fixture = TestBed.createComponent(RequestlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
