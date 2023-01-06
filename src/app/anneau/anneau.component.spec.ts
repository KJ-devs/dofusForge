import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneauComponent } from './anneau.component';

describe('AnneauComponent', () => {
  let component: AnneauComponent;
  let fixture: ComponentFixture<AnneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
