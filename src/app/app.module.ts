import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterMainComponent } from './counter/counter-main/counter-main.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CounterMainComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    NotFoundComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
