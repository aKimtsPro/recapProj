import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoitComponent } from './list-voit.component';

describe('ListVoitComponent', () => {
  let component: ListVoitComponent;
  let fixture: ComponentFixture<ListVoitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVoitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVoitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
