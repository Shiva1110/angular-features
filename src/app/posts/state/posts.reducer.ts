import { Post } from 'src/app/models/posts.model';
import { PostsAction, PostsActionTypes } from './posts.actions';

export const POST_FEATURE_KEY = 'posts';

export interface PostsState {
  posts: Post[];
}

export const postsInitialState: PostsState = {
  posts: [],
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
