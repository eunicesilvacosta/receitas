import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasComponent } from './dicas.component';

describe('DicasComponent', () => {
  let component: DicasComponent;
  let fixture: ComponentFixture<DicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DicasComponent]
    });
    fixture = TestBed.createComponent(DicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
