import { Component, inject } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PostCard } from '../components/post-card/post-card';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.html',
  imports: [PostCard],
})
export class PostsPage {
  private postsService = inject(PostsService);
  totalLikes = this.postsService.totalLikes;
  totalDislikes = this.postsService.totalDislikes;
  posts = this.postsService.posts;
}
