import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPost(): Observable<Post> {
    return this.httpClient.get<Post>('http://localhost:3000/api/articles');
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
      'https://conduit.productionready.io/api/articles',
      postBody,
      httpOptions
    );
  }
}
