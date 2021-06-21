import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebugComponent } from './deletebug.component';

describe('DeletebugComponent', () => {
  let component: DeletebugComponent;
  let fixture: ComponentFixture<DeletebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
