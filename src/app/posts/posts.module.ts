import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditorComponent } from './editor/editor.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostsComponent, PostComponent, EditorComponent],
  exports: [PostsComponent, PostComponent, EditorComponent]
})
export class PostsModule {}
