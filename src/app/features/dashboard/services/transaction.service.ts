import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Transaction } from '../models/transaction.model';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private collectionName = 'transactions';

  constructor(private firestore: AngularFirestore) {}

  getTransactions(): Observable<Transaction[]> {
    return this.firestore
      .collection<Transaction>(this.collectionName)
      .get()
      .pipe(
        map((snapshot) =>
          snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data } as Transaction;
          }),
        ),
      );
  }

  deleteTransaction(id: string): Observable<void> {
    return new Observable((observer) => {
      this.firestore
        .collection(this.collectionName)
        .doc(id)
        .delete()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  createTransaction(transaction: Transaction): Observable<void> {
    return new Observable((observer) => {
      this.firestore
        .collection(this.collectionName)
        .add(transaction)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
