import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradordosComponent } from './administradordos.component';

describe('AdministradordosComponent', () => {
  let component: AdministradordosComponent;
  let fixture: ComponentFixture<AdministradordosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradordosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradordosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
