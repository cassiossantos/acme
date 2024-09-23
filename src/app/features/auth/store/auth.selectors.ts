import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(selectAuthState, (state: AuthState) => state.user);

export const selectLoading = createSelector(selectAuthState, (state: AuthState) => state.loading);

export const selectError = createSelector(selectAuthState, (state: AuthState) => state.error);

export const selectAccounts = createSelector(selectAuthState, (state: AuthState) => state.accounts);
