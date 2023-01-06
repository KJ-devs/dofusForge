import { Injectable } from '@angular/core';
import { Stuff } from 'src/app/models/stuff.model';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StuffService {
  private dbPath = 'Stuff';
  stuffRef: AngularFirestoreCollection<Stuff>;

  constructor(private db: AngularFirestore) {
    this.stuffRef = db.collection(this.dbPath);
  }

  getAllStuff(): any {
    return this.stuffRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  createNewStuff(stuff: Stuff): any {
    this.stuffRef.add(stuff);
    
  }
  delete(id: string): Promise<void> {
    return this.stuffRef.doc(id).delete();
  }
}
