import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableTableComponent } from './reuseable-table.component';

describe('ReuseableTableComponent', () => {
  let component: ReuseableTableComponent;
  let fixture: ComponentFixture<ReuseableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseableTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
