import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRecetasComponent } from './body-recetas.component';

describe('BodyRecetasComponent', () => {
  let component: BodyRecetasComponent;
  let fixture: ComponentFixture<BodyRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyRecetasComponent]
    });
    fixture = TestBed.createComponent(BodyRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
