import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterMainComponent } from './counter/counter-main/counter-main.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterMainComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'users', component: UsersListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
