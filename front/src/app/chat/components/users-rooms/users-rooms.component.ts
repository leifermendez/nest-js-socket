import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-users-rooms',
  templateUrl: './users-rooms.component.html',
  styleUrls: ['./users-rooms.component.css'],
})
export class UsersRoomsComponent implements OnInit {
  public users$ = this.chatService.users$;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}
}
