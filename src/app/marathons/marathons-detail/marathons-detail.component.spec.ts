import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonsDetailComponent } from './marathons-detail.component';

describe('MarathonsDetailComponent', () => {
  let component: MarathonsDetailComponent;
  let fixture: ComponentFixture<MarathonsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathonsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
