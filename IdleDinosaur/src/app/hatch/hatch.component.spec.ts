import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchComponent } from './hatch.component';

describe('HatchComponent', () => {
  let component: HatchComponent;
  let fixture: ComponentFixture<HatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
