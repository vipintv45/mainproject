import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeratorComponent } from './enumerator.component';

describe('EnumeratorComponent', () => {
  let component: EnumeratorComponent;
  let fixture: ComponentFixture<EnumeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
