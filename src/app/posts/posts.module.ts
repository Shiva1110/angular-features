import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostsListComponent],
  imports: [CommonModule, FormsModule, PostsRoutingModule],
})
export class PostsModule {}
