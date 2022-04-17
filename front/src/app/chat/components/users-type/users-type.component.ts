import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-users-type',
  templateUrl: './users-type.component.html',
  styleUrls: ['./users-type.component.css'],
})
export class UsersTypeComponent implements OnInit {
  public formMessage = new FormGroup({
    message: new FormControl('')
  });

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const room = this.route.snapshot.paramMap.get('id');
    this.formMessage.patchValue({ room });
  }

  sendMessage(): void {
    const { message, room } = this.formMessage.value;
    console.log( message, room)
    this.chatService.sendMessage({message });
    this.formMessage.controls['message'].reset();
  }
}
