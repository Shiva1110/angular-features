import { Post } from 'src/app/models/posts.model';
import { PostsAction, PostsActionTypes } from './posts.actions';

export const APPLICATION_FEATURE_KEY = 'application';

export interface PostsState {
  posts: Post[];
}

export const postsInitialState: PostsState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'Sample Title 1',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut',
    },
  ],
};

export function postsReducer(
  state: PostsState = postsInitialState,
  action: PostsAction
): PostsState {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    default:
      return state;
  }
}
