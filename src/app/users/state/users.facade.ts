import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { ApplicationState } from 'src/app/state/application.reducer';
import { UsersQuery } from './users.selector';
import * as UsersActions from './users.actions';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  public getUsers$!: Observable<User[]>;

  constructor(private store: Store<ApplicationState>) {
    this.getUsers$ = this.store.pipe(select(UsersQuery.getUsers));
  }

  loadUsersData(): void {
    this.store.dispatch(new UsersActions.LoadUsers());
  }

  postUserData(payload: User): void {
    this.store.dispatch(new UsersActions.PostUser(payload));
  }
}
