import { AuthEffects } from '../features/auth/store';
import { TransactionEffects } from '../features/dashboard/store';

export const appEffects = [AuthEffects, TransactionEffects];
