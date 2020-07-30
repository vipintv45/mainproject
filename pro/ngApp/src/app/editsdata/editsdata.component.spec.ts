import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsdataComponent } from './editsdata.component';

describe('EditsdataComponent', () => {
  let component: EditsdataComponent;
  let fixture: ComponentFixture<EditsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
