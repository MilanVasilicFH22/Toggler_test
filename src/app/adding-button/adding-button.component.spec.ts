import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingButtonComponent } from './adding-button.component';

describe('AddingButtonComponent', () => {
  let component: AddingButtonComponent;
  let fixture: ComponentFixture<AddingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
