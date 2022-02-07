import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterMainComponent } from './counter/counter-main/counter-main.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersMainComponent } from './users/users-main/users-main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterMainComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'users',
    component: UsersMainComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'updateUser', component: UpdateUserComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
