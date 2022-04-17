import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRoomsComponent } from './users-rooms.component';

describe('UsersRoomsComponent', () => {
  let component: UsersRoomsComponent;
  let fixture: ComponentFixture<UsersRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
