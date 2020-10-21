import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ChatService } from './chat.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireChatNG';
  auth: AuthService;
  chatServe: ChatService;

  constructor(private authService: AuthService, private cs:ChatService){
    this.auth = authService;
    this.chatServe = cs;

  }

  ngOnInit(): void {
  }


}
