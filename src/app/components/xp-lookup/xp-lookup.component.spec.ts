import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpLookupComponent } from './xp-lookup.component';

describe('XpLookupComponent', () => {
  let component: XpLookupComponent;
  let fixture: ComponentFixture<XpLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
