export interface AuthState {
  user: {
    email: string | null;
  } | null;
  loading: boolean;
  error: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  loading: false,
  error: false,
};
