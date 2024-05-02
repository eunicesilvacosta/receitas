import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalgadasComponent } from './salgadas.component';

describe('SalgadasComponent', () => {
  let component: SalgadasComponent;
  let fixture: ComponentFixture<SalgadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalgadasComponent]
    });
    fixture = TestBed.createComponent(SalgadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
