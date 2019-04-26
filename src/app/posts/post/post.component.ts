import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/internal/operators';
import { Article } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;
  post$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(query => {
      this.postId = query['id'];
    });

    this.route.queryParams.subscribe(query => {
      console.log(query);
    });

    this.post$ = this.route.paramMap.pipe(
      switchMap(param => this.postService.getPost(param.get('id'))),
      map(post => post.article)
    );
  }
}
