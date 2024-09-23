import { Transaction } from '../models/transaction.model';

export interface TransactionState {
  loading: boolean;
  error: boolean;
  transactions: Transaction[];
}

export const initialTransactionState: TransactionState = {
  loading: false,
  error: false,
  transactions: [],
};
