import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouclierComponent } from './bouclier.component';

describe('BouclierComponent', () => {
  let component: BouclierComponent;
  let fixture: ComponentFixture<BouclierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouclierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouclierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
