import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotteComponent } from './botte.component';

describe('BotteComponent', () => {
  let component: BotteComponent;
  let fixture: ComponentFixture<BotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
