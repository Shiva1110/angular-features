import { Action } from '@ngrx/store';

export enum PostsActionTypes {
  LOAD_POSTS = '[Application Load Posts]',
  LOAD_POSTS_SUCCESS = '[Application Load Posts Success]',
  LOAD_POSTS_FAILURE = '[Application Load Posts Failure]',
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS;
  constructor() {}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadPostsFailure implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_FAILURE;
  constructor() {}
}

export type PostsAction = LoadPosts | LoadPostsSuccess | LoadPostsFailure;

export const fromPostsActions = {
  LoadPosts,
  LoadPostsFailure,
  LoadPostsSuccess,
};
