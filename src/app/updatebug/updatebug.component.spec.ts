import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebugComponent } from './updatebug.component';

describe('UpdatebugComponent', () => {
  let component: UpdatebugComponent;
  let fixture: ComponentFixture<UpdatebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
