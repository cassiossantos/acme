import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(loginSuccess, (state, { user }) => ({ ...state, loading: false, user })),
  on(loginFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(logout, (state) => ({ ...state, user: null })),
);

export type { AuthState };
