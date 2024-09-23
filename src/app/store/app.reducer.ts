import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './state';
import { authReducer } from '../features/auth/store/auth.reducer';
import { transactionReducer } from '../features/dashboard/store';

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  dashboard: transactionReducer,
};
