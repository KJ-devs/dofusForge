import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmuletteComponent } from './amulette.component';

describe('AmuletteComponent', () => {
  let component: AmuletteComponent;
  let fixture: ComponentFixture<AmuletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmuletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmuletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
