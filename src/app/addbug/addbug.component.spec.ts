import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugComponent } from './addbug.component';

describe('AddBugComponent', () => {
  let component: AddBugComponent;
  let fixture: ComponentFixture<AddBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
