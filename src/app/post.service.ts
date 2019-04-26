import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, SinglePost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPostList(): Observable<Post> {
    return this.httpClient.get<Post>('http://localhost:3000/api/articles');
  }

  getPost(slug: string): Observable<SinglePost> {
    return this.httpClient.get<SinglePost>(
      `http://localhost:3000/api/articles/${slug}`
    );
  }

  createPost(post) {
    const postBody = {
      article: {
        title: post.title,
        description: post.body,
        body: post.body,
        tagList: post.tags
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${localStorage.getItem('token')}`
      })
    };

    return this.httpClient.post(
      'http://localhost:3000/api/articles',
      postBody,
      httpOptions
    );
  }
}
