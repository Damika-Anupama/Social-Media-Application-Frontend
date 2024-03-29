import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoGeneratedComponent } from './auto-generated.component';

describe('AutoGeneratedComponent', () => {
  let component: AutoGeneratedComponent;
  let fixture: ComponentFixture<AutoGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
