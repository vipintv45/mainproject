import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditenumeratorComponent } from './editenumerator.component';

describe('EditenumeratorComponent', () => {
  let component: EditenumeratorComponent;
  let fixture: ComponentFixture<EditenumeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditenumeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditenumeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
