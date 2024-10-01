import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOfertaComponent } from './body-oferta.component';

describe('BodyOfertaComponent', () => {
  let component: BodyOfertaComponent;
  let fixture: ComponentFixture<BodyOfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyOfertaComponent]
    });
    fixture = TestBed.createComponent(BodyOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
