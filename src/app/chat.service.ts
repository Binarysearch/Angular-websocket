import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://echo.websocket.org/';

export interface Message {
	author: string,
	message: string
}

@Injectable()
export class ChatService {
	public subject: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.subject = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .pipe(
        map((response: MessageEvent): Message => {
          let data = JSON.parse(response.data);
          return {
            author: data.author,
            message: data.message
          }
        }
      ));
	}
}