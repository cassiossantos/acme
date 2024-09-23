import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

export enum TransactionType {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound',
}
@Component({
  selector: 'acme-cash-flow-presenter',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowPresenterComponent {
  transactionForm!: FormGroup;
  transactionTypes = TransactionType;

  constructor(
    private modal: MatDialog,
    private fb: FormBuilder,
  ) {
    this.transactionForm = this.fb.group({
      description: ['', Validators.required],
      value: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      type: ['', Validators.required], // Campo para o tipo de transação
    });
  }

  public openModal(dialogTemplate: any) {
    const dialogRef = this.modal.open(dialogTemplate, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form data:', result);
    });
  }

  public onCancel(): void {
    this.modal.closeAll();
  }

  public onSubmit(): void {
    if (this.transactionForm.valid) {
      const transactionData = this.transactionForm.value;
      console.log('Transação adicionada:', transactionData);
      this.onCancel();
    }
  }
}
