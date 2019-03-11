import { Injectable } from "@angular/core";
import { User } from "../login/user.model";
import { AngularFireAuth } from "@angular/fire/auth";
import { Storage } from "@ionic/storage";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private auth: AngularFireAuth, private storage: Storage) {}
  userToken;
  login(user: User) {
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(user.email, user.password).then(
        userData => {
          resolve(userData);
          this.auth.auth.currentUser.getIdToken(true).then(token => {
            this.userToken = token;
            this.storage.set("acsessToken", token);
          });
        },
        err => reject(err)
      );
    });
  }
  signup(user: User) {
    return new Promise((resolve, reject) => {
      this.auth.auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(
          userData => {
            resolve(userData);
          },
          err => reject(err)
        );
    });
  }
}
