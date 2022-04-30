import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from "./pages/components/top-stories.container.component";
import { CommentComponent } from "./pages/components/comments/comment.component";

const routes: Routes = [
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'comment', component: CommentComponent },

  { path: '',   redirectTo: '/top-stories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
