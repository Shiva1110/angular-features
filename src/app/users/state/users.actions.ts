import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LOAD_USERS = '[Application Load Users]',
  LOAD_USERS_SUCCESS = '[Application Load Users Success]',
  LOAD_USERS_FAILURE = '[Application Load Users Failure]',
  POST_USER = '[Application Post User]',
  POST_USER_SUCCESS = '[Application Post User Success]',
  POST_USER_FAILURE = '[Application Post User Failure]',
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
  constructor() {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: any) {}
}

export class PostUser implements Action {
  readonly type = UsersActionTypes.POST_USER;
  constructor(public payload: any) {}
}

export class LoadUsersFailure implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAILURE;
  constructor() {}
}

export class PostUserFailure implements Action {
  readonly type = UsersActionTypes.POST_USER_FAILURE;
  constructor() {}
}

export class PostUserSuccess implements Action {
  readonly type = UsersActionTypes.POST_USER_SUCCESS;
  constructor(public payload: any) {}
}

export type UsersAction =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFailure
  | PostUser
  | PostUserFailure
  | PostUserSuccess;

export const fromUsersActions = {
  LoadUsers,
  LoadUsersFailure,
  LoadUsersSuccess,
  PostUser,
  PostUserFailure,
  PostUserSuccess,
};
