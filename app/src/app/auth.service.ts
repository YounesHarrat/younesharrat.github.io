import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
//firebase
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument }
from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$: Observable<any>;
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router: Router,    private afAuth: AngularFireAuth,    private afs: AngularFirestore    ) {
    this.user$ = afAuth.authState.pipe(
      switchMap( user => {
        if(user) {
            return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
            }
        })
      );
    this.user = afAuth.authState;
    this.user.subscribe((user) => {
       if (user) {
         this.userDetails = user;
       }
       else {
         this.userDetails = null;
       }
    });
    if(this.getUser()){
      router.navigate(['home']);
    }
  }

  get currentUserPhoto(){
    return this.userDetails.photoURL;
  }

  get currentUserName(){
    return this.userDetails.displayName;
  }

  get currentUserId(): string {
       return this.userDetails.uid;
  }

  async getUser(){
    return this.user$.pipe().toPromise();
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user : User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(data);
  }

}
