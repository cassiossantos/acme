import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { loadAccounts, login } from '../store/auth.actions';
import { selectAccounts } from '../store/auth.selectors';

@Component({
  selector: 'acme-signin-container',
  template: `<acme-signin-presenter
    [accounts]="accounts$ | async"
    [form]="form"
    (submit$)="onSubmit()"
  ></acme-signin-presenter>`,
})
export class SigninContainerComponent implements OnInit {
  form!: FormGroup;
  accounts$!: Observable<Account[]>;

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.store.dispatch(loadAccounts());
    this.accounts$ = this.store.select(selectAccounts);
  }

  public setForm() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.min(6)]],
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.store.dispatch(login({ user: { email, password } }));
    }
  }
}
