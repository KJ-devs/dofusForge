import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  constructor(private Angularfs: AngularFirestore) { 
    this.userCollection = this.Angularfs.collection('users');
  }
  newUser(user: User): Promise<void> {
    return this.userCollection.doc(user.id).set(user);
  }
  
}
