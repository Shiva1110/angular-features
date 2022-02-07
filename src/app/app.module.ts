import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterMainComponent } from './counter/counter-main/counter-main.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { applicationReducer } from './state/application.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './posts/state/posts.effects';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UsersMainComponent } from './users/users-main/users-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersEffects } from './users/state/users.effects';
import { SortPipe } from './services/sort.pipe';
import { FilterPipe } from './services/filter.pipe';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterMainComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    UsersListComponent,
    AddUserComponent,
    UpdateUserComponent,
    UsersMainComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(applicationReducer as ActionReducerMap<any>),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([PostsEffects, UsersEffects]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
