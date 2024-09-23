import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TransactionType } from '../models/transaction-types.enum';
import { Transaction } from '../models/transaction.model';
import { Analysis } from '../models/analysis.model';
import { CategoryOption } from '../models/categories.map';
import { formatMoney } from '../../../shared/currency-mask.directive';

@Component({
  selector: 'acme-cash-flow-presenter',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowPresenterComponent {
  @Input() form!: FormGroup;
  @Input() transactions!: Transaction[] | null;
  @Input() categoriesOptions!: CategoryOption[];
  @Input() isEditMode!: boolean;

  @Output() delete$ = new EventEmitter();
  @Output() edit$ = new EventEmitter();
  @Output() create$ = new EventEmitter();
  @Output() logout$ = new EventEmitter();
  @Output() cancel$ = new EventEmitter();

  transactionForm!: FormGroup;
  transactionTypes = TransactionType;

  columns = ['description', 'type', 'amount', 'category', 'createdAt', 'actions'];
  analysis!: Analysis;

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  get total() {
    const total = this.transactions?.reduce((acc, transaction) => {
      return transaction.type === TransactionType.INBOUND
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0);

    return formatMoney(String(total));
  }

  get inboundTotal() {
    const inbound = this.transactions
      ?.filter((transaction) => transaction.type === TransactionType.INBOUND)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    return formatMoney(String(inbound));
  }

  get outboundTotal() {
    const outbound = this.transactions
      ?.filter((transaction) => transaction.type === TransactionType.OUTBOUND)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    return formatMoney(String(outbound));
  }

  constructor(private modal: MatDialog) {}

  public openModal(dialogTemplate: any) {
    const dialogRef = this.modal.open(dialogTemplate, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }

  public onCancel(): void {
    this.modal.closeAll();
    this.cancel$.emit();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.modal.closeAll();
      this.create$.emit();
    }
  }

  public onDelete(id: string) {
    this.delete$.emit(id);
  }

  public onEdit(transaction: Transaction) {
    this.edit$.emit(transaction);
    this.openModal(this.dialogTemplate);
  }

  public onLogout() {
    this.logout$.emit();
  }
}
