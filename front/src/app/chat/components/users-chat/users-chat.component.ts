import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-users-chat',
  templateUrl: './users-chat.component.html',
  styleUrls: ['./users-chat.component.css']
})
export class UsersChatComponent implements OnInit {

  public chat$ = this.chatService.chat$

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
  }

}
