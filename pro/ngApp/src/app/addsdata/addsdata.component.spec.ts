import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsdataComponent } from './addsdata.component';

describe('AddsdataComponent', () => {
  let component: AddsdataComponent;
  let fixture: ComponentFixture<AddsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
