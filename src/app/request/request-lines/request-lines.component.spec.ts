import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLinesComponent } from './request-lines.component';

describe('RequestLinesComponent', () => {
  let component: RequestLinesComponent;
  let fixture: ComponentFixture<RequestLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestLinesComponent]
    });
    fixture = TestBed.createComponent(RequestLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
