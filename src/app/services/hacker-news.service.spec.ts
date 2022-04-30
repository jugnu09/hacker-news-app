import { TestBed, async, inject } from '@angular/core/testing';

import { HackerNewsService } from './hacker-news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IStory } from '../interfaces/story';
import { IComment } from '../interfaces/comment';
import { commentMockData, itemMockData, topStoryMockData } from 'src/assets/mock-data/mock-data-hacker-news';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpMock: HttpTestingController;
  let helper: Helper;
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: httpClientMock },
      ]
    });
    helper = new Helper();
    service = TestBed.inject(HackerNewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTopStories should fetch topstories id from hackernews api', () => {
    const service: HackerNewsService = TestBed.inject(HackerNewsService);
    httpClientMock.get.and.returnValue(new Observable((o) => { o.next(helper.getTopStoriesMockData()); }));
    service.getTopStories(5).subscribe((data) => {
      expect(data).toEqual(helper.getTopStoriesMockData());
    });
  });


  it('getItem should fetch stories from hackernews api', () => {
    const service: HackerNewsService = TestBed.inject(HackerNewsService);
    httpClientMock.get.and.returnValue(new Observable((o) => { o.next(helper.getItemMockData()); }));
    service.getItem(123).subscribe((data) => {
      expect(data).toEqual(helper.getItemMockData());
    });
  });

  it('getTopcomment should fetch top comment from hackernews api', () => {
    const service: HackerNewsService = TestBed.inject(HackerNewsService);
    httpClientMock.get.and.returnValue(new Observable((o) => { o.next(helper.getCommentMockData()); }));
    service.getTopComments([123]).subscribe((data) => {
      expect(data).toEqual([helper.getCommentMockData()]);
    });
  });
});


class Helper {

  getTopStoriesMockData(): IStory[] {
    return topStoryMockData;
  }
  
  getItemMockData(): IStory {
    return itemMockData;
  }

  getCommentMockData(): IComment {
    return commentMockData;
  }
}
