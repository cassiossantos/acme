import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionMap } from '../../models/transaction-types.map';
import { CategoryMap } from '../../models/categories.map';
import { formatMoney } from '../../../../shared/currency-mask.directive';
import { TransactionType } from '../../models/transaction-types.enum';

@Component({
  selector: 'acme-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() rows!: Transaction[];

  @Output() delete$ = new EventEmitter();
  @Output() edit$ = new EventEmitter();

  public getOperation(type: keyof typeof TransactionMap): string {
    return TransactionMap[type] || 'Tipo de operação desconhecida';
  }

  public getCategory(category: keyof typeof CategoryMap): string {
    return CategoryMap[category] || '-';
  }

  public getAmount(row: Transaction): string {
    const prefix = row.type === TransactionType.INBOUND ? '+' : '-';
    return `${prefix}${formatMoney(String(row.amount))}`;
  }

  public onEdit(transaction: any) {
    this.edit$.emit(transaction);
  }

  public onDelete(id: string) {
    this.delete$.emit(id);
  }
}
