import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { UsersRoomsComponent } from './components/users-rooms/users-rooms.component';
import { UsersChatComponent } from './components/users-chat/users-chat.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { UsersTypeComponent } from './components/users-type/users-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersRoomsComponent,
    UsersChatComponent,
    ChatPageComponent,
    UsersTypeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
