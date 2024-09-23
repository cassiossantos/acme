import { createAction, props } from '@ngrx/store';
import { Transaction } from '../models/transaction.model';

export const loadTransactions = createAction('[Transaction] Load Transactions');
export const loadTransactionsSuccess = createAction(
  '[Transaction] Load Transactions Success',
  props<{ transactions: Transaction[] }>(),
);
export const loadTransactionsFailure = createAction(
  '[Transaction] Load Transactions Failure',
  props<{ error: any }>(),
);

export const deleteTransaction = createAction(
  '[Transaction] Delete Transaction',
  props<{ id: string }>(),
);

export const deleteTransactionSuccess = createAction(
  '[Transaction] Delete Transaction Success',
  props<{ id: string }>(),
);

export const deleteTransactionFailure = createAction(
  '[Transaction] Delete Transaction Failure',
  props<{ error: any }>(),
);

export const createTransaction = createAction(
  '[Transaction] Create Transaction',
  props<{ transaction: Transaction }>(),
);

export const createTransactionSuccess = createAction(
  '[Transaction] Create Transaction Success',
  props<{ transaction: Transaction }>(),
);

export const createTransactionFailure = createAction(
  '[Transaction] Create Transaction Failure',
  props<{ error: any }>(),
);

/* Logout **/

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction('[Auth] Logout Failure', (error: any) => ({ error }));
