import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenumeratorComponent } from './addenumerator.component';

describe('AddenumeratorComponent', () => {
  let component: AddenumeratorComponent;
  let fixture: ComponentFixture<AddenumeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenumeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenumeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
