import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TransactionType } from '../models/transaction-types.enum';
import { Transaction } from '../models/transaction.model';
import { Analysis } from '../models/analysis.model';
import { CategoryOption } from '../models/categories.map';

@Component({
  selector: 'acme-cash-flow-presenter',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowPresenterComponent {
  @Input() form!: FormGroup;
  @Input() transactions!: Transaction[] | null;
  @Input() categoriesOptions!: CategoryOption[];

  @Output() delete$ = new EventEmitter();
  @Output() edit$ = new EventEmitter();
  @Output() create$ = new EventEmitter();
  @Output() logout$ = new EventEmitter();

  transactionForm!: FormGroup;
  transactionTypes = TransactionType;

  columns = ['user', 'description', 'type', 'amount', 'category', 'createdAt', 'actions'];
  analysis!: Analysis;

  constructor(private modal: MatDialog) {}

  public openModal(dialogTemplate: any) {
    const dialogRef = this.modal.open(dialogTemplate, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }

  public onCancel(): void {
    this.modal.closeAll();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.onCancel();
      this.create$.emit();
    }
  }

  public onDelete(id: string) {
    this.delete$.emit(id);
  }

  public onEdit(id: string) {
    this.edit$.emit(id);
  }

  public onLogout() {
    this.logout$.emit();
  }
}
