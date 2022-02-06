import { User } from 'src/app/models/users.model';
import { UsersAction, UsersActionTypes } from './users.actions';

export const APPLICATION_FEATURE_KEY = 'application';

export interface UsersState {
  users: User[];
}

export const usersInitialState: UsersState = {
  users: [
    {
      id: 1,
      name: 'Shivakumar M',
      username: 'ShivaDmn',
      email: 'shivakumarm250@gmail.com',
    },
  ],
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

    default:
      return state;
  }
}
