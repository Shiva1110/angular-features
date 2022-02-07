import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadUsers$: Observable<
    | UsersActions.LoadUsers
    | UsersActions.LoadUsersSuccess
    | UsersActions.LoadUsersFailure
  > = createEffect(() =>
    this.actions$.pipe(
      ofType<UsersActions.LoadUsers>(UsersActions.UsersActionTypes.LOAD_USERS),
      switchMap((action: UsersActions.LoadUsers) =>
        this.postService.getUsersData().pipe(
          map((res: any) => {
            return new UsersActions.LoadUsersSuccess(res);
          })
        )
      ),
      catchError(() => of(new UsersActions.LoadUsersFailure()))
    )
  );

  postUser$: Observable<
    | UsersActions.PostUser
    | UsersActions.PostUserSuccess
    | UsersActions.PostUserFailure
  > = createEffect(() =>
    this.actions$.pipe(
      ofType<UsersActions.PostUser>(UsersActions.UsersActionTypes.POST_USER),
      switchMap((action: UsersActions.PostUser) =>
        this.postService.postUserData(action.payload).pipe(
          map((res: any) => {
            return new UsersActions.PostUserSuccess(res);
          })
        )
      ),
      catchError(() => of(new UsersActions.PostUserFailure()))
    )
  );
}
