import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../../interfaces/comment';
import DateUtils from '../../../utils/date.utils';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: IComment;
  commentTime: string;

  constructor() {}

  ngOnInit(): void {
    this.commentTime = DateUtils.getCommentTime(this.comment?.time);
  }
}
