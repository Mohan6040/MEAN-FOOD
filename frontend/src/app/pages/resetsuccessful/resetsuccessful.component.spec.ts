import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetsuccessfulComponent } from './resetsuccessful.component';

describe('ResetsuccessfulComponent', () => {
  let component: ResetsuccessfulComponent;
  let fixture: ComponentFixture<ResetsuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetsuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
