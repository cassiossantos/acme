import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './state';
import { authReducer } from '../features/auth/store/auth.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
};
