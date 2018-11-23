import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonsListComponent } from './marathons-list.component';

describe('MarathonsListComponent', () => {
  let component: MarathonsListComponent;
  let fixture: ComponentFixture<MarathonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
