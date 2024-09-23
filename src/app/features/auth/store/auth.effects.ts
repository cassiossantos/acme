import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadAccounts,
  loadAccountsFailure,
  loadAccountsSuccess,
  login,
  loginFailure,
  loginSuccess,
} from './auth.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { AccountService } from '../services/account.service';
import { Account } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router,
  ) {}

  loadAccounts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAccounts),
      mergeMap(() => {
        return this.accountService.getAccounts().pipe(
          map((accounts: Account[]) => loadAccountsSuccess({ accounts })),
          catchError((error) => of(loadAccountsFailure({ error }))),
        );
      }),
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      mergeMap(({ user }) => {
        return this.authService.login(user.email, user.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure({ error }))),
        );
      }),
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          return this.router.navigate(['/']);
        }),
      );
    },
    { dispatch: false },
  );
}
