import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPostsData(): Observable<Post[]> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    ) as Observable<Post[]>;
  }

  getUsersData(): Observable<User[]> {
    return this.http.get('http://localhost:8001/users') as Observable<User[]>;
  }

  postUserData(user: User): Observable<any> {
    return this.http.post('http://localhost:8001/users/signup', user);
  }
}
