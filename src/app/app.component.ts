import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService, Message } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  messages: Message[] = [];
	
	constructor(private chatService: ChatService) {
		chatService.onMessageReceived((msg: Message) => {
      this.messages.push(msg);
		});
	}

  sendMsg() {
		this.chatService.send({author: 'Binarysearch',  message: 'Hello World!'});
  }
  
}
