import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionMap } from '../../models/transaction-types.map';
import { CategoryMap } from '../../models/categories.map';

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

  public onEdit(id: string) {
    this.edit$.emit(id);
  }

  public onDelete(id: string) {
    this.delete$.emit(id);
  }
}
