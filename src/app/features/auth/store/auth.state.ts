export interface AuthState {
  user: {
    email: string | null;
  } | null;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  loading: false,
  error: null,
};
