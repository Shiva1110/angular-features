import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Post } from 'src/app/models/posts.model';
import { PostsFacade } from '../state/posts.facade';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts!: Post[];
  filteredPosts!: Post[];
  userIds: number[] = [];

  constructor(private postsFacade: PostsFacade) {}

  ngOnInit(): void {
    this.postsFacade.loadPostsData();
    this.postsFacade.getPosts$
      .pipe(filter((data) => Boolean(data.length)))
      .subscribe((res) => {
        this.posts = res;
        this.filteredPosts = res;
        res.forEach((post) => {
          if (!this.userIds.includes(post.userId)) {
            this.userIds.push(post.userId);
          }
        });
      });
  }

  selectionChange(val: string) {
    this.filteredPosts = this.posts.filter((post) => post.userId === +val);
    if (+val === 0) {
      this.filteredPosts = this.posts;
    }
  }
}
