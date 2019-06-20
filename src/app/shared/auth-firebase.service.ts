import { Injectable } from '@angular/core';
import {AuthService, User} from './auth-service';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {AngularFirestore} from '@angular/fire/firestore';
interface Administrator {
  uid: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService implements AuthService {
user: firebase.User;
administrators: Administrator[];
  constructor(private afAuth: AngularFireAuth,
              private fireStore: AngularFirestore) {
    fireStore
      .collection<Administrator>('administrators')
      .valueChanges()
      .subscribe(admins => this.administrators = admins);
    afAuth.authState.subscribe(user => this.user = user);
  }

  getUser(): User {
    if (!this.user) {
      return undefined;
    }
    return {email: this.user.email,
      displayName: this.user.displayName,
    uid: this.user.uid} as User;
  }

  isAdmin(): boolean {
    if (!this.isAuth()) {
      return false;
    }
    if (!this.administrators) {
      return false;
    }
    return this.administrators.find(admin => admin.uid ===
      this.user.uid) ? true : false;
  }

  isAuth(): boolean {
    return this.user ? true : false;
  }

  login(loginMethod: string) {
    if (loginMethod === 'google') {
      this.loginWithGoogle();
    }
  }

  logout() {
    this.afAuth.auth.signOut().then();
  }

  private loginWithGoogle() {
    this.afAuth.auth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then();
  }
}
