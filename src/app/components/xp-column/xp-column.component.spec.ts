import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpColumnComponent } from './xp-column.component';

describe('XpColumnComponent', () => {
  let component: XpColumnComponent;
  let fixture: ComponentFixture<XpColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
