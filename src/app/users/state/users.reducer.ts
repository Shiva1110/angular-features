import { User } from 'src/app/models/users.model';
import { UsersAction, UsersActionTypes } from './users.actions';

export const USER_FEATURE_KEY = 'users';

export interface UsersState {
  users: User[];
}

export const usersInitialState: UsersState = {
  users: [],
};

export function usersReducer(
  state: UsersState = usersInitialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case UsersActionTypes.POST_USER_SUCCESS: {
      let user = { ...action.payload };
      return {
        ...state,
        users: [...state.users, user],
      };
    }

    default:
      return state;
  }
}
