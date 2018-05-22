import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full' // prefix, full
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'create',
    component: EditorComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class PostsRoutingModule {}
