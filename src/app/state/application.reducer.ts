import { postsReducer, PostsState } from '../posts/state/posts.reducer';
import { usersReducer, UsersState } from '../users/state/users.reducer';

export interface ApplicationState {
  posts: PostsState;
  users: UsersState;
}

export const applicationReducer = {
  posts: postsReducer,
  users: usersReducer,
};
