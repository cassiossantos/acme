import { TransactionType } from './transaction-types.enum';

export const TransactionMap: { [key in TransactionType]: string } = {
  [TransactionType.INBOUND]: 'Entrada',
  [TransactionType.OUTBOUND]: 'Saída',
};
