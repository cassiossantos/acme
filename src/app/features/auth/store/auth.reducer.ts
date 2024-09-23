import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  loadAccounts,
  loadAccountsSuccess,
  loadAccountsFailure,
} from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state): AuthState => ({ ...state, loading: true, error: false })),
  on(loginSuccess, (state, { user }): AuthState => ({ ...state, loading: false, user })),
  on(loginFailure, (state, { error }): AuthState => ({ ...state, loading: false, error })),
  on(logout, (state): AuthState => ({ ...state, user: null })),
  on(
    loadAccounts,
    (state): AuthState => ({
      ...state,
      loading: true,
      error: false,
    }),
  ),
  on(
    loadAccountsSuccess,
    (state, { accounts }): AuthState => ({
      ...state,
      accounts,
      loading: false,
      error: false,
    }),
  ),
  on(
    loadAccountsFailure,
    (state, { error }): AuthState => ({
      ...state,
      loading: false,
      error,
    }),
  ),
);

export type { AuthState };
