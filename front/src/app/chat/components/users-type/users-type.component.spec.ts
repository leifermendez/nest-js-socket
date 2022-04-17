import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTypeComponent } from './users-type.component';

describe('UsersTypeComponent', () => {
  let component: UsersTypeComponent;
  let fixture: ComponentFixture<UsersTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
