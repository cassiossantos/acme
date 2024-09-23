import { createReducer, on } from '@ngrx/store';
import { initialTransactionState, TransactionState } from './transaction.state';
import {
  deleteTransactionSuccess,
  loadTransactions,
  loadTransactionsFailure,
  loadTransactionsSuccess,
  updateTransactionSuccess,
} from './transaction.actions';

export const transactionReducer = createReducer(
  initialTransactionState,
  on(
    loadTransactions,
    (state): TransactionState => ({
      ...state,
      loading: true,
      error: false,
    }),
  ),
  on(
    loadTransactionsSuccess,
    (state, { transactions }): TransactionState => ({
      ...state,
      loading: false,
      transactions,
    }),
  ),
  on(
    loadTransactionsFailure,
    (state): TransactionState => ({
      ...state,
      loading: false,
      error: true,
    }),
  ),

  on(deleteTransactionSuccess, (state, { id }) => ({
    ...state,
    transactions: state.transactions.filter((transaction) => transaction.id !== id),
    loading: false,
    error: false,
  })),
);
