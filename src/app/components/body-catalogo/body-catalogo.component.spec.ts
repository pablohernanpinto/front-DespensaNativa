import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCatalogoComponent } from './body-catalogo.component';

describe('BodyCatalogoComponent', () => {
  let component: BodyCatalogoComponent;
  let fixture: ComponentFixture<BodyCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCatalogoComponent]
    });
    fixture = TestBed.createComponent(BodyCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
