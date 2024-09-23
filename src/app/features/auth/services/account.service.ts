import { Injectable } from '@angular/core';
import { catchError, from, map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Account } from '../models/auth.model';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private collectionName = 'accounts';

  constructor(private firestore: AngularFirestore) {}

  getAccounts(): Observable<Account[]> {
    return this.firestore
      .collection<Account>(this.collectionName)
      .get()
      .pipe(
        map((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }) as Account)),
        catchError((error) => {
          throw error;
        }),
      );
  }
}
