import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonsCreateComponent } from './marathons-create.component';

describe('MarathonsCreateComponent', () => {
  let component: MarathonsCreateComponent;
  let fixture: ComponentFixture<MarathonsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathonsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathonsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
