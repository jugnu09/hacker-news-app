import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TopStoriesComponent } from './pages/components/top-stories.container.component';
import { StoryHeadlineComponent } from './pages/components/story-headline/story-headline.component';
import { CommentComponent } from './pages/components/comments/comment.component';
import { CommentItemComponent } from './pages/components/comment-item/comment-item.component';
import { HostnamePipe } from './core/pipes/hostname.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, TopStoriesComponent, StoryHeadlineComponent, CommentComponent, CommentItemComponent, HostnamePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
