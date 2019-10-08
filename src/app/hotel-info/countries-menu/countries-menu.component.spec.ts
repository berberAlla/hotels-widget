import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesMenuComponent } from './countries-menu.component';

describe('CountriesMenuComponent', () => {
  let component: CountriesMenuComponent;
  let fixture: ComponentFixture<CountriesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
