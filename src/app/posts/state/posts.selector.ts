import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState, POST_FEATURE_KEY } from './posts.reducer';

const getPostsState = createFeatureSelector<PostsState>(POST_FEATURE_KEY);

const getPosts = createSelector(getPostsState, (state: PostsState) => {
  return state.posts;
});

export const PostsQuery = {
  getPosts,
};
