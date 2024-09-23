import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  createTransaction,
  deleteTransaction,
  loadTransactions,
  logout,
  selectTransactions,
  updateTransaction,
} from '../store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryOption, generateCategoryList } from '../models/categories.map';

@Component({
  selector: 'acme-cash-flow-container',
  template: `<acme-cash-flow-presenter
    [transactions]="transactions$ | async"
    [form]="form"
    [categoriesOptions]="categories"
    [isEditMode]="isEditMode"
    (edit$)="onEdit($event)"
    (delete$)="onDelete($event)"
    (create$)="onCreate()"
    (logout$)="onLogout()"
    (cancel$)="onCancel()"
  ></acme-cash-flow-presenter>`,
})
export class CashFlowContainerComponent implements OnInit {
  form: FormGroup;
  user!: User;
  transactions$!: Observable<Transaction[]>;
  categories!: CategoryOption[];
  isEditMode = false;
  transactionId!: string | undefined;

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      type: ['', Validators.required],
      user: [''],
    });
    this.categories = generateCategoryList();
  }

  ngOnInit(): void {
    this.store.dispatch(loadTransactions());
    this.transactions$ = this.store.select(selectTransactions);
  }

  public onEdit(transaction: Transaction) {
    this.isEditMode = true;
    this.transactionId = transaction.id;
    this.form.patchValue({
      description: transaction.description,
      amount: transaction.amount,
      category: transaction.category,
      type: transaction.type,
      user: transaction.user,
    });

    console.log(transaction, this.transactionId);
  }
  public onCancel() {
    this.isEditMode = false;
    this.transactionId = undefined;
    this.form.patchValue({
      description: '',
      amount: '',
      category: '',
      type: '',
      user: '',
    });
    this.form.clearValidators();
  }

  public onDelete(id: string) {
    this.store.dispatch(deleteTransaction({ id }));
  }

  public onCreate() {
    if (this.transactionId) {
      this.store.dispatch(
        updateTransaction({
          transaction: Object.assign({}, this.form.value, {
            id: this.transactionId,
          }),
        }),
      );
      return;
    }
    this.transactionId = undefined;
    this.store.dispatch(
      createTransaction({
        transaction: Object.assign({}, this.form.value, { createdAt: new Date() }),
      }),
    );
  }

  public onLogout() {
    this.store.dispatch(logout());
  }
}
