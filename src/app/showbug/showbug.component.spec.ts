import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbugComponent } from './showbug.component';

describe('ShowbugComponent', () => {
  let component: ShowbugComponent;
  let fixture: ComponentFixture<ShowbugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
