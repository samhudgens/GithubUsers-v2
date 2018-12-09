import * as fromUsers from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface UsersCollectionState {
  users: fromUsers.UserState
}

export const reducers: ActionReducerMap<UsersCollectionState> = {
  users: fromUsers.reducer
}