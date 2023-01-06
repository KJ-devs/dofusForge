  import { Injectable } from '@angular/core';
  import { AngularFireAuth } from '@angular/fire/auth';
  import { Router } from '@angular/router';
  import firebase from 'firebase/app';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private afAuth: AngularFireAuth,private router: Router) {
    }
    verifyLogin(email: string, password: string): Promise<firebase.auth.UserCredential> {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    Connexion(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
        result.user?.getIdToken().then(token => {
          localStorage.setItem('token', token);
      
          localStorage.setItem('email', email);
          alert('Connexion réussie !');    
          this.router.navigate(['']).then(() => {
            window.location.reload();
            console.log(localStorage.getItem('token'));
          });
          
        }
        );
      }).catch(error => {
        console.error(error);
      });
    }
    
  
      
    createNewUser(email: string, password: string) {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
    }
  }
