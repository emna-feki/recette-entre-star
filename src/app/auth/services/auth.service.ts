import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/User.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  createNewUser(userModel: UserModel): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(userModel.email, userModel.password).then(() => {
          // TODO set user data
          // firebase.firestore
          console.log('save useer data here');
          resolve();
        },
        (error) => {
          reject(error);
        });
    });
  }

  signInUser(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          resolve();
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

  isConnected(): Promise<boolean> {
    return new Promise((resolve, reject) => firebase.auth().onAuthStateChanged(resolve, reject))
      .then((user: firebase.User) => Boolean(user));
  }

  logoutUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => {
          resolve();
        },
        (error) => {
          reject(error);
        },
      );
    });
  }
}
