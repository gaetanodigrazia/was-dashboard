import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsButtonComponent } from './show-details-button.component';

describe('ShowDetailsButtonComponent', () => {
  let component: ShowDetailsButtonComponent;
  let fixture: ComponentFixture<ShowDetailsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
