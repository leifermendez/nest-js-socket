import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {//TODO js, ts, node
      this.chatService.leaveRoom();
      this.chatService.initChat();
      this.chatService.joinRoom(id);
    });
  }
}
