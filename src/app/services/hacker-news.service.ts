import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { IStory } from '../interfaces/story';
import { IComment } from '../interfaces/comment';
import { NEWS_URL_CONFIG } from '../core/configs/app.configs';
import { BaseService } from '../core/services/base.services';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  constructor(private _baseService: BaseService) {}

  getTopStories(numberOfStory: number): Observable<IStory[]> {
      return this._baseService.get<number[]>(NEWS_URL_CONFIG.TOP_STORIES).pipe(
      mergeMap((ids) => {
        const filterIds = ids.splice(0, numberOfStory);
        return forkJoin(
          filterIds.map((id) => {
            return this.getItem(id);
          })
        );
      })
    );
  }

  getItem(id: number | string): Observable<IStory> {
    return this._baseService.get<IStory>(NEWS_URL_CONFIG.ITEM + id + NEWS_URL_CONFIG.EXTENSION);
  }

  getTopComments(kids: number[]): Observable<IComment[]> {
    return forkJoin(
      kids.map((id) => {
        return this._baseService.get<IComment>(NEWS_URL_CONFIG.ITEM + id + NEWS_URL_CONFIG.EXTENSION);
      })
    );
  }
}
