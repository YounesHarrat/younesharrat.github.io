import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { faArrowCircleLeft , faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css' ],
})
export class ChatComponent implements OnInit{

  iconArrowLeft= faArrowCircleLeft;
  iconTrashAlt = faTrashAlt;

  msgColorBG:string;

  msgColorText: string;

  chat$: Observable<any>;
  newMsg: string;

  auth: AuthService;

  chatId:string;

  constructor(public cs : ChatService, private route: ActivatedRoute, private authService: AuthService) {
  this.auth = authService;

  }

  changeBGColor(color){
    this.msgColorBG = color;
  }

  changeTextColor(color){
    this.msgColorText = color;
  }

  ngOnInit(): void {
    this.chatId = this.route.snapshot.paramMap.get('id');
    this.msgColorBG = "white";
    this.msgColorText = "black";
    const source = this.cs.get(this.chatId);

    this.chat$ = this.cs.getChatsCollection().valueChanges({ idField: 'eventId' });
  }

  scrollbarToBot(){
    let v =window.setInterval(function() {
      let elem = document.getElementById('MyChat');
      elem.scrollTo(0,elem.scrollHeight);
    }, 10);
    setTimeout(() => {
      clearInterval(v);
    }, 100);
  }

  submit() {
    console.log(this.newMsg);
    if(!this.newMsg){
      return alert('you need to enter something');
    }else{
      this.cs.sendMessage(this.chatId, this.newMsg);
      //réinit le newMsg
      this.newMsg ='';
    }
    this.scrollbarToBot();

  }

  trackByCreated(i,msg){
    return msg.createdAt;
  }

  deleteChat(chatId){
    this.cs.delete(chatId);
  }

}
