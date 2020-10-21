import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  auth: AuthService;
  cs : ChatService;
  chats: any;
  joinChat: boolean = false;
  joinChatId: string;
  friendId :string[];

  constructor(private authService: AuthService, private chatS: ChatService, private router: Router) {
    this.auth=authService;
    this.cs = chatS;
  }

  ngOnInit(): void {
    //this.chats = this.auth.userDetails.chats;
    this.chats = this.cs.getChatsCollection().valueChanges({ idField: 'eventId' });
  }

  switch(){
    this.joinChat = !this.joinChat;
  }

  join(){
    if(this.joinChatId.length == 20 ){
      console.log(this.cs.get(this.joinChatId).toString())
      //si l'utilisateur Id est bien dans le chat OwnersId array alors ok sinon message de non permis ;
      if(this.auth.currentUserId in this.cs.get(this.joinChatId)){
          this.router.navigate(['/chats',this.joinChatId]);
      }else{
        alert("vous ne pouvez acceder a ce chat")
      }

    } else {
      alert('Enter a Chat Id to Join !')
    }
  }

  addFriendToChat(chatId){
    if(this.friendId.length == 28){
      this.cs.addFriend(chatId,this.friendId);
    }
    else {
      alert('wrong FireChat User ID ! ');
    }
  }

}
