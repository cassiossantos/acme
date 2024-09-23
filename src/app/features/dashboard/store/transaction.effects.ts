import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionService } from '../services/transaction.service';
import {
  createTransaction,
  createTransactionFailure,
  createTransactionSuccess,
  deleteTransaction,
  deleteTransactionFailure,
  deleteTransactionSuccess,
  loadTransactions,
  loadTransactionsFailure,
  loadTransactionsSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  updateTransaction,
  updateTransactionFailure,
  updateTransactionSuccess,
} from './transaction.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private fAuth: AngularFireAuth,
    private transactionService: TransactionService,
    private router: Router,
  ) {}

  loadTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTransactions, createTransactionSuccess, updateTransactionSuccess),
      mergeMap(() => {
        return this.transactionService.getTransactions().pipe(
          map((transactions: Transaction[]) => loadTransactionsSuccess({ transactions })),
          catchError((error) => of(loadTransactionsFailure({ error }))),
        );
      }),
    );
  });

  deleteTransaction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTransaction),
      mergeMap((action) => {
        return this.transactionService.deleteTransaction(action.id).pipe(
          map(() => deleteTransactionSuccess({ id: action.id })),
          catchError((error) => of(deleteTransactionFailure({ error }))),
        );
      }),
    );
  });

  createTransaction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTransaction),
      mergeMap(({ transaction }) => {
        return this.transactionService.createTransaction(transaction).pipe(
          map(() => createTransactionSuccess({ transaction })),
          catchError((error) => of(createTransactionFailure({ error }))),
        );
      }),
    );
  });

  updateTransaction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTransaction),
      mergeMap(({ transaction }) => {
        return this.transactionService.updateTransaction(transaction).pipe(
          map(() => updateTransactionSuccess({ transaction })),
          catchError((error) => of(updateTransactionFailure({ error }))),
        );
      }),
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      switchMap(() =>
        this.fAuth.signOut().then(
          () => logoutSuccess(),
          (error) => logoutFailure(error),
        ),
      ),
    );
  });

  logoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logoutSuccess),
        tap(() => {
          this.router.navigate(['/auth/signin']);
        }),
      );
    },
    { dispatch: false },
  );
}
