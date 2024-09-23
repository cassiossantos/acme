import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Account } from '../models/auth.model';
@Component({
  selector: 'acme-signin-presenter',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninPresenterComponent {
  @Input() form!: FormGroup;
  @Input() accounts!: Account[] | null;

  @Output() submit$ = new EventEmitter();

  showPassword = false;
  selected!: Account;

  public toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  public onSelectChange(event: String) {
    this.selected = this.accounts?.find((account) => account.email == event) as Account;
  }

  public onSubmit() {
    this.submit$.emit();
  }
}
