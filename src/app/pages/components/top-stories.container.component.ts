import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStory } from '../../interfaces/story';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.container.component.html',
  styleUrls: ['./top-stories.container.component.scss']
})
export class TopStoriesComponent implements OnInit {
  stories$!: Observable<IStory[]>;
  storyCount= 5;
  constructor(private _facadeService: FacadeService) {}

  ngOnInit(): void {
    this.stories$ = this._facadeService.getTopStories(this.storyCount);
  }
}
