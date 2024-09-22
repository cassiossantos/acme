import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state): AuthState => ({ ...state, loading: true, error: false })),
  on(loginSuccess, (state, { user }): AuthState => ({ ...state, loading: false, user })),
  on(loginFailure, (state, { error }): AuthState => ({ ...state, loading: false, error })),
  on(logout, (state): AuthState => ({ ...state, user: null })),
);

export type { AuthState };
