import { Injectable } from '@angular/core';
import {AuthService, User} from './auth-service';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService implements AuthService {

  user: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  getUser(): User {
    if (!this.user){
      return undefined;
    }
    return {} as User;
  }

  isAdmin(): boolean {
    return false;
  }

  isAuth(): boolean {
    return false;
  }

  login(loginMethod: string) {
  }

  logout() {
  }
}
