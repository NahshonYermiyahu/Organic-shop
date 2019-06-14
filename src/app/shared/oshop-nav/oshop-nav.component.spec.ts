import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopNavComponent } from './oshop-nav.component';

describe('OshopNavComponent', () => {
  let component: OshopNavComponent;
  let fixture: ComponentFixture<OshopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
