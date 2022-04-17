import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private _users$ = new BehaviorSubject<UserType[]>([
    {
      name: 'TypeScript',
      slogan: 'Soy muy estricto! 😉',
      avatar: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
      id: 'ts',
    },
    {
      name: 'JavaScript',
      slogan: 'El versatil de la casa 🤔',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
      id: 'js',
    },
    {
      name: 'Angular',
      slogan: 'Todo son modulos 👌',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      id: 'angular',
    },
    {
      name: 'NodeJS',
      slogan: 'El mejor compañero 🤣',
      avatar:
        'https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg',
      id: 'nodejs',
    },
    {
      name: 'NestJs',
      slogan: 'hermano de angular 🆗',
      avatar:
        'https://symbols.getvecta.com/stencil_89/37_nestjs-icon.a67daec196.jpg',
      id: 'nodejs',
    },
    {
      name: 'ReactJs',
      slogan: 'Estoy en todos lados 😎',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
      id: 'reactjs',
    },
  ]);
  public users$ = this._users$.asObservable();

  private _chat$ = new BehaviorSubject<ChatType[]>([]);
  public chat$ = this._chat$.asObservable();

  private _room$ = new BehaviorSubject<string | null>(null);

  constructor(private socket: Socket) {
    socket.fromEvent('new_message').subscribe((message: any) => {
      const chatObject: ChatType = {
        user: {
          avatar: '',
          name: 'Anonymus',
          id: '0',
          slogan: '',
        },
        message,
      };
      this.setChat(chatObject);
    });

    socket.fromEvent('disconnect').subscribe(() => {
      const lastRoom = this._room$.getValue();
      if (lastRoom) this.joinRoom(lastRoom);
    });
  }

  public setUser(user: UserType): void {
    const current = this._users$.getValue();
    const state = [...current, user];
    this._users$.next(state);
  }

  public setChat(message: ChatType): void {
    const current = this._chat$.getValue();
    const state = [...current, message];
    this._chat$.next(state);
  }

  public initChat(): void {
    this._chat$.next([]);
  }

  //TODO Enviar mensaje desde el FRONT-> BACKEND
  sendMessage(payload: { message: string, room?:string }) {
    const roomCurrent = this._room$.getValue();//TODO: js, ts, node
    if (roomCurrent) {
      payload = { ...payload, room: roomCurrent };
      console.log(payload);
      this.socket.emit('event_message', payload); //TODO FRONT
    }
  }

  joinRoom(room: string): void {
    this._room$.next(room);
    this.socket.emit('event_join', room);
  }

  leaveRoom(): void {
    const room = this._room$.getValue();
    this.socket.emit('event_leave', room);
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }
}

interface UserType {
  name: string;
  avatar: string;
  slogan: string;
  id: string;
}

interface ChatType {
  user: UserType;
  message: string;
}
