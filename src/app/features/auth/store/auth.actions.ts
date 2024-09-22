import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ user: { email: string; password: string } }>(),
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { email: string } }>(),
);

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');
