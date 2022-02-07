import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(private action$: Actions, private postService: PostService) {}

  loadPosts$: Observable<
    | PostsActions.LoadPosts
    | PostsActions.LoadPostsSuccess
    | PostsActions.LoadPostsFailure
  > = createEffect(() =>
    this.action$.pipe(
      ofType<PostsActions.LoadPosts>(PostsActions.PostsActionTypes.LOAD_POSTS),
      switchMap((action: PostsActions.LoadPosts) =>
        this.postService.getPostsData().pipe(
          map((res: any) => {
            return new PostsActions.LoadPostsSuccess(res);
          })
        )
      ),
      catchError(() => of(new PostsActions.LoadPostsFailure()))
    )
  );
}
