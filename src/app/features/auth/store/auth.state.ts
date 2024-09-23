import { Account } from '../models/auth.model';

export interface AuthState {
  user: {
    email: string | null;
  } | null;
  loading: boolean;
  error: boolean;
  accounts: Account[];
}

export const initialAuthState: AuthState = {
  user: null,
  loading: false,
  error: false,
  accounts: [],
};
