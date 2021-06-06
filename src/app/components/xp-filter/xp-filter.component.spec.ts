import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpFilterComponent } from './xp-filter.component';

describe('XpFilterComponent', () => {
  let component: XpFilterComponent;
  let fixture: ComponentFixture<XpFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
