import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats$: Observable<any>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private router: Router
  ) {}

  getChatsCollection(){
    return this.afs.collection<any>('chats');
  }

  getChats(){
   return this.afs.collection<any>('chats').valueChanges().pipe(
     map( doc => {
        return doc;
     })
   );
  }

  get(chatId) {
    return this.afs.collection<any>('chats').doc(chatId).snapshotChanges().pipe(
      map( d => {
        return { id: d.payload.id, data: d.payload.data() };
      })
    );
  }

  async create() {
    const ownersId:string[] =[this.auth.currentUserId];
    const ownerId = ownersId[0];
    const data = {
      ownersId,
      ownerId,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };
    const docRef = await this.afs.collection('chats').add(data);
    return this.router.navigate(['chats', docRef.id]);
  }

  async sendMessage(chatId , content) {
    const uid =this.auth.currentUserId;
    const userName = this.auth.currentUserName;
    const userPhoto = this.auth.currentUserPhoto;
    const data = {
      uid,
      userName,
      userPhoto,
      content,
      createdAt: Date.now()
    };

    if (uid) {
      const ref = this.afs.collection('chats').doc(chatId);
      return ref.update({
        messages: firestore.FieldValue.arrayUnion(data)
      });
    }
  }

  addFriend(chatId,fireId){
    this.afs.collection<any>('chats').doc(chatId).update({
      ownersId: firestore.FieldValue.arrayUnion(fireId)
    })
  }

  delete(chatId){
  //ajouter si celui qui veut delete est le propriétaire du chat
    this.afs.collection<any>('chats').doc(chatId).delete();
    return this.router.navigate(['/home']);
  }

}
