import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakePageComponent } from './cake-page.component';

describe('CakePageComponent', () => {
  let component: CakePageComponent;
  let fixture: ComponentFixture<CakePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
