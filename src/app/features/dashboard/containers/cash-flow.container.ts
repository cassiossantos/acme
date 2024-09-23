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
} from '../store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryOption, generateCategoryList } from '../models/categories.map';

@Component({
  selector: 'acme-cash-flow-container',
  template: `<acme-cash-flow-presenter
    [transactions]="transactions$ | async"
    [form]="form"
    [categoriesOptions]="categories"
    (edit$)="onEdit($event)"
    (delete$)="onDelete($event)"
    (create$)="onCreate()"
    (logout$)="onLogout()"
  ></acme-cash-flow-presenter>`,
})
export class CashFlowContainerComponent implements OnInit {
  form: FormGroup;
  user!: User;
  transactions$!: Observable<Transaction[]>;
  categories!: CategoryOption[];

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

  public onEdit(id: string) {
    console.log('edit', id);
  }

  public onDelete(id: string) {
    this.store.dispatch(deleteTransaction({ id }));
  }

  public onCreate() {
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
