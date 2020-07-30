import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsdataComponent } from './viewsdata.component';

describe('ViewsdataComponent', () => {
  let component: ViewsdataComponent;
  let fixture: ComponentFixture<ViewsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
