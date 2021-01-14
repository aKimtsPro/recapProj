import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapBaseComponent } from './recap-base.component';

describe('RecapBaseComponent', () => {
  let component: RecapBaseComponent;
  let fixture: ComponentFixture<RecapBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
