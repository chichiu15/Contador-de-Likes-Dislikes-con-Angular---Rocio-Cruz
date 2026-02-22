import { Component, input, InputSignal, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../data/posts.data';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.html',
})
export class PostCard {
  private postsService = inject(PostsService);

  post: InputSignal<Post> = input.required<Post>();

  like(): void {
    this.postsService.addLike();
  }

  dislike(): void {
    this.postsService.addDislike();
  }
}
