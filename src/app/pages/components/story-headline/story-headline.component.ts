import { Component, Input, OnInit } from '@angular/core';
import { IStory } from '../../../interfaces/story';
import DateUtils from '../../../utils/date.utils';
import { CommonServie } from 'src/app/core/services/common.service';
import { Hacker_NEWS_ROUTES } from 'src/app/core/constants/core.constant';

@Component({
  selector: 'app-story-headline',
  templateUrl: './story-headline.component.html',
  styleUrls: ['./story-headline.component.scss'],
})
export class StoryHeadlineComponent implements OnInit {
  @Input() serialNumber: number | undefined;
  @Input() story: IStory;

  commentTime: string | undefined;
  storyUrl: string | undefined;

  constructor(private _commonService: CommonServie) {}

  ngOnInit(): void {
    this.storyUrl = this.story?.url;
    this.commentTime = DateUtils.getCommentTime(this.story?.time);
  }

  openTopThreeComments() {
    this._commonService.navigateToWithData(Hacker_NEWS_ROUTES.COMMENT, this.story.id)
  }
}
