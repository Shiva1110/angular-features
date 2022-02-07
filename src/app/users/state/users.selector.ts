import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, USER_FEATURE_KEY } from './users.reducer';

const getUsersState = createFeatureSelector<UsersState>(USER_FEATURE_KEY);

const getUsers = createSelector(getUsersState, (state: UsersState) => {
  return state.users;
});

export const UsersQuery = {
  getUsers,
};
