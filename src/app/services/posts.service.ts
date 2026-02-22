import { Injectable, signal, WritableSignal } from '@angular/core';
import { POSTS, Post } from '../data/posts.data';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _totalLikes: WritableSignal<number> = signal(0);
  readonly totalLikes = this._totalLikes.asReadonly();

  private _totalDislikes: WritableSignal<number> = signal(0);
  readonly totalDislikes = this._totalDislikes.asReadonly();

  private _posts: WritableSignal<Post[]> = signal([...POSTS]);
  readonly posts = this._posts.asReadonly();

  addLike(): void {
    this._totalLikes.update((value) => value + 1);
  }

  addDislike(): void {
    this._totalDislikes.update((value) => value + 1);
  }
}
