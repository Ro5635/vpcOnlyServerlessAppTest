import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeListingComponent } from './cake-listing.component';

describe('CakeListingComponent', () => {
  let component: CakeListingComponent;
  let fixture: ComponentFixture<CakeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
