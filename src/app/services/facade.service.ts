import { Injectable, Injector } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';

@Injectable({
  providedIn: 'root',
})

export class FacadeService {
    private _hackerNewsService : HackerNewsService;
    constructor(private _injector: Injector) {  }
    public get hackerNewsService(): HackerNewsService {
        if(!this._hackerNewsService) {
            this._hackerNewsService = this._injector.get(HackerNewsService);
        }
        return this._hackerNewsService;
    }


    getTopStories(numberOfStory: number) {
        return this.hackerNewsService.getTopStories(numberOfStory);
    }

    getItem(id: number | string) {
        return this._hackerNewsService.getItem(id);
    }

    getTopComments(kids: number[]) {
        return this._hackerNewsService.getTopComments(kids);
    }
}