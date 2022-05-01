import { Component, OnInit } from '@angular/core';
import { IStory } from '../../../interfaces/story';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from '../../../interfaces/comment';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  story: IStory;
  comments$: Observable<IComment[]>;

  constructor(private _facadeService: FacadeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const storyId = this.route.snapshot.params.id;
    this.getComment(storyId);
  }

  getComment(id: number | string) {
    this._facadeService.getItem(id).subscribe((story) => {
      this.story = story;
      if (story.kids?.length) {
        const filteredKids = story.kids.splice(0, 3);
        this.comments$ = this._facadeService.getTopComments(filteredKids);
      }
    });
  }
}
