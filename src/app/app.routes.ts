import { Routes } from '@angular/router';
import { PostsPage } from './pages/posts-page';

export const routes: Routes = [
  { path: '', component: PostsPage },
  { path: '**', redirectTo: '' },
];
