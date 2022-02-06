import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LOAD_USERS = '[Application Load Users]',
  LOAD_USERS_SUCCESS = '[Application Load Users Success]',
  LOAD_USERS_FAILURE = '[Application Load Users Failure]',
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
  constructor() {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadUsersFailure implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAILURE;
  constructor() {}
}

export type UsersAction = LoadUsers | LoadUsersSuccess | LoadUsersFailure;

export const fromUsersActions = {
  LoadUsers,
  LoadUsersFailure,
  LoadUsersSuccess,
};
