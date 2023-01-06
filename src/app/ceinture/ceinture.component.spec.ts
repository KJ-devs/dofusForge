import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeintureComponent } from './ceinture.component';

describe('CeintureComponent', () => {
  let component: CeintureComponent;
  let fixture: ComponentFixture<CeintureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeintureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
