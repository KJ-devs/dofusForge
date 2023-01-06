import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStuffComponent } from './creation-stuff.component';

describe('CreationStuffComponent', () => {
  let component: CreationStuffComponent;
  let fixture: ComponentFixture<CreationStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
