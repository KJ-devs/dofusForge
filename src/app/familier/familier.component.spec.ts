import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilierComponent } from './familier.component';

describe('FamilierComponent', () => {
  let component: FamilierComponent;
  let fixture: ComponentFixture<FamilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
