import { createAction, props } from '@ngrx/store';
import { Account } from '../models/auth.model';

export const login = createAction(
  '[Auth] Login',
  props<{ user: { email: string; password: string } }>(),
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { email: string } }>(),
);

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: boolean }>());

export const logout = createAction('[Auth] Logout');

/** Accounts Actions */

export const loadAccounts = createAction('[Account] Load Accounts');

export const loadAccountsSuccess = createAction(
  '[Account] Load Accounts Success',
  props<{ accounts: Account[] }>(),
);

export const loadAccountsFailure = createAction(
  '[Account] Load Accounts Failure',
  props<{ error: boolean }>(),
);
