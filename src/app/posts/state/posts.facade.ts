import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { ApplicationState } from 'src/app/state/application.reducer';
import { PostsQuery } from './posts.selector';
import * as PostsActions from './posts.actions';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  public getPosts$!: Observable<Post[]>;

  constructor(private store: Store<ApplicationState>) {
    this.getPosts$ = this.store.pipe(select(PostsQuery.getPosts));
  }

  loadPostsData(): void {
    this.store.dispatch(new PostsActions.LoadPosts());
  }
}
