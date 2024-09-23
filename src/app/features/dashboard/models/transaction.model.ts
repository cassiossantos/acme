import { TransactionType } from './transaction-types.enum';

export interface Transaction {
  id?: string;
  amount: number;
  type: TransactionType;
  description: string;
  createdAt: Date;
  user: string;
  category: string;
}
