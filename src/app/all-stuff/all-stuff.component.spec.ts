import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStuffComponent } from './all-stuff.component';

describe('AllStuffComponent', () => {
  let component: AllStuffComponent;
  let fixture: ComponentFixture<AllStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
