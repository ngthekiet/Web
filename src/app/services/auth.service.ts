import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public auth : AngularFireAuth) { }
  signUp(email : string, password : string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  signIn(email : string, password : string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }
}
